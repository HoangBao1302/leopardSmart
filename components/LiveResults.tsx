"use client";

import { ExternalLink, CheckCircle, AlertTriangle } from "lucide-react";

export default function LiveResults() {
  return (
    <section id="live-results" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kết quả thực tế
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Theo dõi hiệu suất thực tế của EA LeopardSmart trên các tài khoản live
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">MQL5 Signal</h3>
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Gain:</span>
                <span className="font-semibold text-green-600">+186%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Drawdown:</span>
                <span className="font-semibold text-red-600">12.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">18 months</span>
              </div>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mt-4 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Xem chi tiết</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Myfxbook</h3>
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Gain:</span>
                <span className="font-semibold text-green-600">+215%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Drawdown:</span>
                <span className="font-semibold text-red-600">14.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">22 months</span>
              </div>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mt-4 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Xem chi tiết</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Tickmill Social</h3>
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Gain:</span>
                <span className="font-semibold text-green-600">+168%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Drawdown:</span>
                <span className="font-semibold text-red-600">11.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Copy Trading:</span>
                <span className="font-semibold text-blue-600">Available</span>
              </div>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mt-4 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Xem chi tiết</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Thông tin quan trọng</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                Các kết quả trên được tính toán dựa trên dữ liệu thực tế từ tài khoản giao dịch live. 
                Hiệu suất có thể thay đổi tùy thuộc vào điều kiện thị trường và cách cài đặt EA. 
                Copy trading có sẵn nhưng cần đăng ký riêng với broker.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}