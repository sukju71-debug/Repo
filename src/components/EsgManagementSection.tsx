import React from 'react';
import { Leaf, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface EsgManagementSectionProps {
  onOpenNoticeModal: () => void;
}

export const EsgManagementSection: React.FC<EsgManagementSectionProps> = ({ onOpenNoticeModal }) => {
  return (
    <section id="esg-management" className="bg-[#F8F7F2] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-widest block">
            SUSTAINABILITY & ESG MANAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A]">
            함께 만드는 지속가능한 농수산식품 산업
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            농어업과 환경, 지역사회가 함께 성장할 수 있도록 aT는 지속가능한 농수산식품 생태계를 만들어갑니다.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* E */}
          <div className="bg-white p-8 rounded-sm border border-[#D1CEC2] shadow-xs space-y-4 hover:border-[#2C4A3E] transition">
            <div className="w-12 h-12 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-serif font-bold text-lg">
              E
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
              Environment (친환경)
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              저탄소 농수산식품 인증 확대, 생분해성 친환경 포장재 지원 및 물류 부문 온실가스 저감 스마트 콜드체인 구축.
            </p>
          </div>

          {/* S */}
          <div className="bg-white p-8 rounded-sm border border-[#D1CEC2] shadow-xs space-y-4 hover:border-[#2C4A3E] transition">
            <div className="w-12 h-12 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-serif font-bold text-lg">
              S
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
              Social (사회적 가치)
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              농어업인 직거래 상생 판로 확대, 지역 사회 먹거리 소외계층 지원 및 청년 농부 창업 육성 프로젝트.
            </p>
          </div>

          {/* G */}
          <div className="bg-white p-8 rounded-sm border border-[#D1CEC2] shadow-xs space-y-4 hover:border-[#2C4A3E] transition">
            <div className="w-12 h-12 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-serif font-bold text-lg">
              G
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
              Governance (지배구조)
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              공정하고 투명한 공공 도매시장 운영, 공공데이터 오픈 개방 및 준법 윤리경영 실천 공공기관 구현.
            </p>
          </div>

        </div>

        {/* ESG Action Button */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenNoticeModal}
            className="px-8 py-3.5 rounded-sm bg-[#2C4A3E] text-[#F8F7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#1E332B] transition cursor-pointer shadow-md inline-flex items-center space-x-2"
          >
            <span>ESG 경영 공시 보기</span>
            <ArrowRight className="w-4 h-4 text-[#A2A67C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
