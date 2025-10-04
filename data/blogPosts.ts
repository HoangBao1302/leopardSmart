export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: "news" | "education" | "ea-leopard";
  image: string;
  featured?: boolean;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "nfp-thang-12-2024-phan-tich",
    title: "Non-Farm Payroll tháng 12/2024: Thị trường việc làm vượt kỳ vọng",
    excerpt: "Số liệu NFP tháng 12 tăng 256K việc làm, vượt dự báo 160K. Phân tích tác động đến USD và thị trường Forex, cùng chiến lược giao dịch sau NFP.",
    author: "Nguyễn Văn A - Market Analyst",
    date: "2024-12-08",
    readTime: "7 phút đọc",
    category: "news",
    image: "/vet-images/1.png",
    featured: true,
    tags: ["NFP", "USD", "Employment", "Market Analysis"]
  },
  {
    id: "fed-giu-nguyen-lai-suat-thang-12",
    title: "FED giữ nguyên lãi suất 5.50%, báo hiệu gì cho 2025?",
    excerpt: "Quyết định lãi suất mới nhất từ FED và phát biểu của Chủ tịch Powell. Phân tích kỹ thuật EURUSD, GBPUSD sau quyết định lãi suất.",
    author: "Trần Thị B - Economic Analyst",
    date: "2024-12-14",
    readTime: "9 phút đọc",
    category: "news",
    image: "/vet-images/2.png",
    tags: ["FED", "Interest Rate", "FOMC", "Monetary Policy"]
  },
  {
    id: "co-ban-ve-support-resistance",
    title: "Cơ bản về Support & Resistance: Nền tảng phân tích kỹ thuật",
    excerpt: "Hướng dẫn chi tiết về khái niệm, cách xác định và giao dịch dựa trên vùng hỗ trợ và kháng cự. Bài học cơ bản cho trader mới bắt đầu.",
    author: "Nguyễn Minh G - Trading Coach",
    date: "2024-12-05",
    readTime: "12 phút đọc",
    category: "education",
    image: "/vet-images/1.png",
    tags: ["Technical Analysis", "Support", "Resistance", "Beginner"]
  },
  {
    id: "cach-doc-profit-factor-drawdown",
    title: "Cách đọc Profit Factor & Drawdown của EA LeopardSmart",
    excerpt: "Hướng dẫn chi tiết cách phân tích và đánh giá hiệu suất EA thông qua các chỉ số quan trọng như Profit Factor, Maximum Drawdown và Win Rate.",
    author: "EA LeopardSmart Team",
    date: "2024-12-15",
    readTime: "8 phút đọc",
    category: "ea-leopard",
    image: "/vet-images/4.png",
    tags: ["EA Analysis", "Profit Factor", "Drawdown", "Performance"]
  }
];

export const categories = [
  {
    id: "all",
    name: "Tất cả",
    description: "Tất cả bài viết",
    icon: "📚"
  },
  {
    id: "news",
    name: "Tin Tức",
    description: "Phân tích dữ liệu kinh tế: NFP, CPI, FED, ADP, PCE, GDP...",
    icon: "📰"
  },
  {
    id: "education",
    name: "Đào Tạo & Phân Tích",
    description: "Kiến thức cơ bản đến nâng cao, phân tích chuyên gia",
    icon: "🎓"
  },
  {
    id: "ea-leopard",
    name: "EA LeopardSmart",
    description: "Bài viết chuyên sâu về EA LeopardSmart",
    icon: "🤖"
  }
];