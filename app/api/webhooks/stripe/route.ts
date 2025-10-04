import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, existsSync, readFileSync } from "fs";
import { join } from "path";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia" as any,
});

const ORDERS_FILE = join(process.cwd(), "data", "orders.json");

interface Order {
  orderId: string;
  productId: string;
  status: "pending" | "paid" | "completed";
  customerEmail: string;
  customerName?: string;
  customerPhone?: string;
  amount?: number;
  createdAt: string;
  paidAt?: string;
}

function getOrders(): Order[] {
  if (!existsSync(ORDERS_FILE)) {
    return [];
  }
  try {
    const data = readFileSync(ORDERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading orders file:", error);
    return [];
  }
}

function saveOrders(orders: Order[]) {
  try {
    writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  } catch (error) {
    console.error("Error saving orders file:", error);
  }
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "No signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    
    const orders = getOrders();
    const existingOrderIndex = orders.findIndex(
      (o) => o.orderId === session.id
    );

    if (existingOrderIndex >= 0) {
      // Update existing order
      orders[existingOrderIndex] = {
        ...orders[existingOrderIndex],
        status: "paid",
        paidAt: new Date().toISOString(),
        amount: session.amount_total ? session.amount_total / 100 : undefined,
      };
    } else {
      // Create new order
      const newOrder: Order = {
        orderId: session.id,
        productId: session.metadata?.productId || "unknown",
        status: "paid",
        customerEmail: session.customer_email || "unknown@example.com",
        customerName: session.metadata?.customerName,
        customerPhone: session.metadata?.customerPhone,
        amount: session.amount_total ? session.amount_total / 100 : undefined,
        createdAt: new Date().toISOString(),
        paidAt: new Date().toISOString(),
      };
      orders.push(newOrder);
    }

    saveOrders(orders);
    console.log(`Order ${session.id} marked as paid`);
  }

  return NextResponse.json({ received: true });
}