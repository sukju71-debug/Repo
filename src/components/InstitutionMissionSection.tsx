import React from 'react';
import { Shield, Target, Compass, Award, ArrowRight } from 'lucide-react';

interface InstitutionMissionSectionProps {
  onGoToAbout: () => void;
}

export const InstitutionMissionSection: React.FC<InstitutionMissionSectionProps> = ({ onGoToAbout }) => {
  return (
    <section id="institution-mission" className="bg-[#E5E2D8] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Banner */}
        <div className="bg-[#2C4A3E] text-white p-8 sm:p-12 rounded-sm border border-[#D1CEC2] shadow-md space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1 bg-[#1E332B] text-[#A2A67C] text-xs font-serif italic rounded-sm uppercase tracking-wider border border-[#A2A67C]/30">
              INSTITUTIONAL MISSION & VISION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F8F7F2] leading-tight">
              농어업의 성장에서 국민의 식탁까지
            </h2>

            <p className="text-xs sm:text-sm text-[#D1CEC2] font-sans leading-relaxed">
              한국농수산식품유통공사(aT)는 농수산식품산업 진흥을 통해 국민의 안정적인 먹거리 확보와 삶의 질 향상에 기여하는 농림축산식품부 산하 공공기관입니다.<br className="hidden sm:inline" />
              생산과 유통의 혁신을 통해 농어촌과 농어업인의 성장을 지원하고 대한민국 농수산식품 산업의 경쟁력을 높여갑니다.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D1CEC2]/30">
            
            {/* Mission */}
            <div className="bg-[#1E332B] p-6 rounded-sm border border-[#D1CEC2]/20 space-y-2">
              <div className="flex items-center space-x-2 text-[#A2A67C]">
                <Target className="w-4 h-4" />
                <span className="text-xs font-serif font-bold uppercase tracking-wider">MISSION</span>
              </div>
              <p className="text-xs text-[#F8F7F2] font-serif font-bold leading-relaxed">
                농수산식품산업 진흥을 통해 국민의 안정적인 먹거리 확보와 삶의 질 향상에 기여
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#1E332B] p-6 rounded-sm border border-[#D1CEC2]/20 space-y-2">
              <div className="flex items-center space-x-2 text-[#A2A67C]">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-serif font-bold uppercase tracking-wider">VISION</span>
              </div>
              <p className="text-xs text-[#F8F7F2] font-serif font-bold leading-relaxed">
                농어촌·농어민 성장을 위한 생산·유통 혁신으로 농수산식품 강국 실현
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-[#1E332B] p-6 rounded-sm border border-[#D1CEC2]/20 space-y-2">
              <div className="flex items-center space-x-2 text-[#A2A67C]">
                <Award className="w-4 h-4" />
                <span className="text-xs font-serif font-bold uppercase tracking-wider">CORE VALUES</span>
              </div>
              <p className="text-xs text-[#F8F7F2] font-serif font-bold leading-relaxed">
                책임감 · 혁신 · 지속가능 · 전문성
              </p>
            </div>

          </div>

          {/* Action Link */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={onGoToAbout}
              className="px-6 py-3 rounded-sm bg-[#F8F7F2] text-[#2C4A3E] text-xs font-bold uppercase tracking-wider hover:bg-white transition flex items-center space-x-2 cursor-pointer shadow-xs"
            >
              <span>aT 상세 기관소개 보기</span>
              <ArrowRight className="w-4 h-4 text-[#2C4A3E]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
