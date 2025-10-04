"use client";

import { BarChart3, TrendingUp, Shield, Clock } from "lucide-react";

export default function Proof() {
  return (
    <section id="proof" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kết quả Backtest
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hiệu suất được chứng minh qua backtest dài hạn với dữ liệu thực tế
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-blue-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">2.4</h3>
            <p className="text-gray-600 font-semibold">Profit Factor</p>
            <p className="text-sm text-gray-500 mt-2">Kết quả backtest 5 năm</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-green-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">68%</h3>
            <p className="text-gray-600 font-semibold">Win Rate</p>
            <p className="text-sm text-gray-500 mt-2">Tỷ lệ thắng trung bình</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-orange-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-orange-600 mb-2">8.5%</h3>
            <p className="text-gray-600 font-semibold">Max Drawdown</p>
            <p className="text-sm text-gray-500 mt-2">Mức sụt giảm tối đa</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-purple-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">1:2.1</h3>
            <p className="text-gray-600 font-semibold">Risk:Reward</p>
            <p className="text-sm text-gray-500 mt-2">Tỷ lệ rủi ro/lợi nhuận</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="text-yellow-600 mt-1">⚠️</div>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Lưu ý quan trọng</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Kết quả backtest không đảm bảo hiệu suất tương lai. Hiệu suất thực tế có thể khác biệt 
                tùy thuộc vào broker, điều kiện thị trường và cách cài đặt EA. 
                Luôn quản lý rủi ro và chỉ đầu tư số tiền bạn có thể chấp nhận mất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}