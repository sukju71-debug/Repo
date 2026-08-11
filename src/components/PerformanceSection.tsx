import React from 'react';
import { AT_STATS } from '../data/mockData';
import { Award, CheckCircle2, TrendingUp, Info } from 'lucide-react';

export const PerformanceSection: React.FC = () => {
  return (
    <section id="at-performance" className="bg-[#F8F7F2] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-widest block">
            MEASURABLE PUBLIC IMPACT & ACHIEVEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A]">
            농어업과 국민을 위한 <span className="text-[#2C4A3E]">변화를 만들어갑니다</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            숫자로 증명하는 대한민국 농수산식품 산업의 기회와 지속가능한 성과
          </p>
        </div>

        {/* 4 Stat Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-sm border border-[#D1CEC2] p-8 text-center space-y-3 shadow-xs hover:border-[#2C4A3E] transition"
            >
              <div className="w-8 h-8 rounded-full bg-[#E5E2D8] text-[#2C4A3E] flex items-center justify-center mx-auto">
                <TrendingUp className="w-4 h-4 text-[#2C4A3E]" />
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#2C4A3E] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#555555] font-sans border-t border-[#D1CEC2]/40 pt-2">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-center space-x-2 text-xs text-[#777777] font-sans pt-2">
          <Info className="w-4 h-4 text-[#2C4A3E]" />
          <span>모든 수치는 최신 기준일과 공공데이터 출처(2026년 상반기 기준)를 함께 표시합니다.</span>
        </div>

      </div>
    </section>
  );
};
