import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles, MapPin, ChevronRight, Info, Heart } from 'lucide-react';
import { SEASONAL_MONTHS } from '../data/mockData';
import { SeasonalMonthData } from '../types';

interface SeasonalCalendarProps {
  onSelectProduceByName?: (name: string) => void;
}

export const SeasonalCalendar: React.FC<SeasonalCalendarProps> = ({
  onSelectProduceByName,
}) => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(2); // Default to August (8월 index 2 in our dataset)
  const activeData: SeasonalMonthData = SEASONAL_MONTHS[selectedMonthIndex] || SEASONAL_MONTHS[0];

  return (
    <section className="py-16 sm:py-20 bg-[#F8F7F2] text-[#1A1A1A] border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-sm bg-[#E5E2D8] border border-[#D1CEC2] text-[#2C4A3E] text-xs font-serif italic mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#2C4A3E]" />
            <span>절기별 우리 먹거리</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C4A3E] tracking-tight">
            우리 땅이 내어주는 12달 제철 결실
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
            자연의 시간표에 맞춰 가장 달콤하고 영양이 차오를 때 수확한 한국의 신선 농산물을 만나보세요.
          </p>
        </div>

        {/* Month Selector Pills */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-[#E5E2D8] rounded-sm space-x-2 border border-[#D1CEC2]">
            {SEASONAL_MONTHS.map((item, idx) => {
              const isSelected = selectedMonthIndex === idx;
              return (
                <button
                  key={item.month}
                  id={`month-tab-${item.month}`}
                  onClick={() => setSelectedMonthIndex(idx)}
                  className={`px-5 py-2 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#2C4A3E] text-[#F8F7F2] shadow-xs'
                      : 'text-[#444444] hover:text-[#2C4A3E] hover:bg-[#D1CEC2]/40'
                  }`}
                >
                  {item.monthName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Month Spotlight Showcase */}
        <motion.div
          key={activeData.month}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-sm border border-[#D1CEC2] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Hero Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden">
            <img
              src={activeData.heroImage}
              alt={activeData.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.92] hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-2.5 py-1 bg-[#2C4A3E]/90 backdrop-blur-md rounded-xs text-[10px] font-bold text-[#A2A67C] uppercase tracking-widest">
                {activeData.monthName} 제철 픽
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-2 text-[#F8F7F2]">
                {activeData.title}
              </h3>
              <p className="text-xs text-[#D1CEC2] mt-1 font-sans">
                {activeData.description}
              </p>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#F8F7F2]/60">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D1CEC2] mb-6">
                <div>
                  <span className="text-[10px] text-[#A2A67C] font-bold uppercase tracking-widest">대표 추천 농산물</span>
                  <p className="text-base font-serif font-bold text-[#2C4A3E]">
                    aT 가 제안하는 {activeData.monthName}의 맛과 영양
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-medium text-[#2C4A3E] bg-[#E5E2D8] px-3 py-1 rounded-sm border border-[#D1CEC2]">
                  <Sparkles className="w-3.5 h-3.5 text-[#A2A67C]" />
                  <span>농가 직거래 추천</span>
                </div>
              </div>

              {/* Items Grid */}
              <div className="space-y-4">
                {activeData.topItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectProduceByName && onSelectProduceByName(item.name)}
                    className="p-4 rounded-sm bg-white border border-[#D1CEC2] hover:border-[#2C4A3E] hover:shadow-xs transition cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-sm bg-[#F8F7F2] border border-[#D1CEC2] flex items-center justify-center text-2xl group-hover:scale-105 transition">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#2C4A3E]">
                            {item.name}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-xs bg-[#E5E2D8] text-[#444444] font-bold uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#555555] mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-xs text-[#2C4A3E]">
                      <span className="hidden sm:flex items-center gap-1 text-[#666666]">
                        <MapPin className="w-3 h-3 text-[#2C4A3E]" />
                        {item.region}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#A2A67C] group-hover:text-[#2C4A3E] group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Info Tip */}
            <div className="mt-8 pt-4 border-t border-[#D1CEC2] flex items-center justify-between text-xs text-[#555555]">
              <div className="flex items-center space-x-2">
                <Info className="w-4 h-4 text-[#2C4A3E]" />
                <span>aT는 계절별 신선 농산물의 수급을 예측하여 농가 가격을 안정시킵니다.</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
