import React from 'react';
import { ArrowRight, Search, HeartHandshake } from 'lucide-react';

interface BottomCtaSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export const BottomCtaSection: React.FC<BottomCtaSectionProps> = ({ onScrollToSection }) => {
  return (
    <section className="bg-[#1E332B] text-white py-20 border-b border-[#D1CEC2]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 bg-[#2C4A3E] text-[#A2A67C] text-xs font-serif italic border border-[#A2A67C]/40 rounded-sm uppercase tracking-wider inline-block">
            TOGETHER FOR THE FUTURE OF K-AGRICULTURE
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#F8F7F2] leading-tight">
            농수산식품의 더 나은 미래를<br />
            <span className="text-[#A2A67C] italic">aT가 함께 만듭니다</span>
          </h2>

          <p className="text-xs sm:text-base text-[#D1CEC2] font-sans leading-relaxed max-w-2xl mx-auto">
            농어업인에게는 더 큰 성장의 기회를,<br />
            기업에는 더 넓은 시장을,<br />
            국민에게는 더 안정적인 먹거리를.
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
          <button
            id="bottom-cta-support"
            onClick={() => onScrollToSection('support-projects')}
            className="px-8 py-4 rounded-sm bg-[#F8F7F2] text-[#2C4A3E] text-xs sm:text-sm font-bold tracking-[0.1em] uppercase hover:bg-white transition shadow-md flex items-center space-x-2 cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#2C4A3E]" />
            <span>지원사업 찾기</span>
          </button>

          <button
            id="bottom-cta-about"
            onClick={() => onScrollToSection('core-businesses')}
            className="px-8 py-4 rounded-sm bg-[#2C4A3E] border border-[#A2A67C]/60 text-[#F8F7F2] text-xs sm:text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#1E332B] transition shadow-md flex items-center space-x-2 cursor-pointer"
          >
            <span>aT 사업 알아보기</span>
            <ArrowRight className="w-4 h-4 text-[#A2A67C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
