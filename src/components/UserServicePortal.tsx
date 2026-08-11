import React from 'react';
import { ArrowRight, Tractor, Building, Globe2, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface UserServicePortalProps {
  onSelectCategory: (category: '농어업인' | '식품기업' | '수출기업' | '국민소비자') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const UserServicePortal: React.FC<UserServicePortalProps> = ({
  onSelectCategory,
  onScrollToSection,
}) => {
  const personas = [
    {
      id: 'farmer',
      category: '농어업인',
      icon: Tractor,
      question: '더 좋은 판로와 성장의 기회를 찾고 계신가요?',
      items: ['유통·판로 지원', '산지 조직 지원', '농산물 가격·수급 정보', '정책사업 안내'],
      ctaLabel: '농어업인 서비스 보기',
      targetCategory: '농어업인' as const,
    },
    {
      id: 'enterprise',
      category: '식품·유통기업',
      icon: Building,
      question: '사업 성장에 필요한 지원을 만나보세요',
      items: ['식품기업 지원', '외식산업 지원', '유통 지원', '사업자 모집·공고'],
      ctaLabel: '기업 서비스 보기',
      targetCategory: '식품기업' as const,
    },
    {
      id: 'exporter',
      category: '수출기업',
      icon: Globe2,
      question: 'K-Food의 해외시장 진출을 지원합니다',
      items: ['해외시장 정보', '수출지원사업', '해외 바이어 연결', '국제 박람회·마케팅'],
      ctaLabel: '수출지원 서비스 보기',
      targetCategory: '수출기업' as const,
    },
    {
      id: 'consumer',
      category: '국민·소비자',
      icon: HeartHandshake,
      question: '우리 먹거리와 농수산식품 정보를 확인하세요',
      items: ['농산물 가격정보', '식품·외식 정보', '공공급식 정보', '농수산식품 정책정보'],
      ctaLabel: '국민 서비스 보기',
      targetCategory: '국민소비자' as const,
    },
  ];

  return (
    <section id="user-services" className="bg-[#E5E2D8] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-widest block">
            USER-CENTRIC QUICK ACCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] leading-tight">
            필요한 서비스를 빠르게 찾아보세요
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            복잡한 조직도 대신 방문자 맞춤형 길잡이로 지원사업과 데이터를 바로 연결해 드립니다.
          </p>
        </div>

        {/* 4 Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.id}
                className="bg-[#F8F7F2] rounded-sm border border-[#D1CEC2] p-7 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#2C4A3E] transition-all group"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 border-b border-[#D1CEC2]/60 pb-4">
                    <div className="w-10 h-10 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5 text-[#A2A67C]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#2C4A3E] uppercase tracking-wider block">
                        PORTAL FOR
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                        {p.category}
                      </h3>
                    </div>
                  </div>

                  {/* Persona Question */}
                  <p className="text-xs font-bold text-[#2C4A3E] leading-snug">
                    {p.question}
                  </p>

                  {/* Bullet Checklist */}
                  <ul className="space-y-2 pt-2 text-xs text-[#555555]">
                    {p.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2C4A3E] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    onSelectCategory(p.targetCategory as any);
                    onScrollToSection('support-projects');
                  }}
                  className="w-full py-3 px-4 rounded-sm bg-[#2C4A3E] text-[#F8F7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#1E332B] transition flex items-center justify-between cursor-pointer shadow-xs"
                >
                  <span>{p.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#A2A67C] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
