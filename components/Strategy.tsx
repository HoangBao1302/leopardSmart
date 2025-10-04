"use client";

import { TrendingUp, Shield, Brain, Target } from "lucide-react";

export default function Strategy() {
  return (
    <section id="strategy" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Chiến lược giao dịch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EA LeopardSmart sử dụng đa chiến lược thông minh để thích ứng với mọi điều kiện thị trường
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Trend Following</h3>
            <p className="text-gray-600">
              Phát hiện và theo dõi xu hướng mạnh với Moving Average, MACD và ADX
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Range Trading</h3>
            <p className="text-gray-600">
              Giao dịch trong vùng sideway với Bollinger Bands và RSI
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Market Filter</h3>
            <p className="text-gray-600">
              Phân tích volatility và spread để tránh giao dịch bất lợi
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Risk Control</h3>
            <p className="text-gray-600">
              Quản lý rủi ro với stop loss động và position sizing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}