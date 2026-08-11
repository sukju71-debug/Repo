import React from 'react';
import { ArrowUpRight, ShieldCheck, RefreshCw, Globe, Utensils } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface CoreBusinessesSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export const CoreBusinessesSection: React.FC<CoreBusinessesSectionProps> = ({ onScrollToSection }) => {
  const pillars = [
    {
      id: 'pillar-1',
      num: '01',
      title: '수급안정',
      subHeadline: '국민의 안정적인 먹거리를 지킵니다',
      desc: '농수산물의 생산과 소비 동향을 분석하고 비축·수급관리 등을 통해 가격과 공급 안정을 지원합니다.',
      actionLabel: '농산물 수급정보',
      targetSection: 'agri-data',
      icon: ShieldCheck,
      bgColor: 'bg-[#2C4A3E]',
      textColor: 'text-[#A2A67C]',
    },
    {
      id: 'pillar-2',
      num: '02',
      title: '유통혁신',
      subHeadline: '생산자와 소비자를 더 효율적으로 연결합니다',
      desc: '산지부터 소비지까지 농수산식품 유통구조를 개선하고 디지털 기반의 새로운 유통환경을 만들어갑니다.',
      actionLabel: '유통지원사업',
      targetSection: 'support-projects',
      icon: RefreshCw,
      bgColor: 'bg-[#1E332B]',
      textColor: 'text-[#F8F7F2]',
    },
    {
      id: 'pillar-3',
      num: '03',
      title: '수출진흥',
      subHeadline: 'K-Food의 가능성을 세계시장으로 연결합니다',
      desc: '국내 농수산식품 기업의 해외시장 진출을 지원하고 한국 농식품의 글로벌 경쟁력을 높입니다.',
      actionLabel: '농식품 수출지원',
      targetSection: 'kfood-global',
      icon: Globe,
      bgColor: 'bg-[#2C4A3E]',
      textColor: 'text-[#A2A67C]',
    },
    {
      id: 'pillar-4',
      num: '04',
      title: '식품산업 육성',
      subHeadline: '대한민국 식품산업의 성장을 지원합니다',
      desc: '식품·외식기업의 경쟁력 강화와 신산업 육성을 통해 대한민국 식품산업의 지속가능한 성장을 지원합니다.',
      actionLabel: '식품산업 지원',
      targetSection: 'support-projects',
      icon: Utensils,
      bgColor: 'bg-[#1E332B]',
      textColor: 'text-[#F8F7F2]',
    },
  ];

  return (
    <section id="core-businesses" className="bg-[#F8F7F2] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-widest block">
            CORE BUSINESS PILLARS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-serif text-[#1A1A1A] leading-tight">
            농수산식품의 생산부터 세계시장까지,<br />
            <span className="text-[#2C4A3E] underline decoration-[#A2A67C] underline-offset-8">aT가 연결합니다</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
            한국농수산식품유통공사는 농수산식품 산업의 안정적인 성장과 농어업인의 소득 증대, 국민의 안정적인 먹거리 확보를 위해 다양한 사업을 추진하고 있습니다.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-sm border border-[#D1CEC2] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5 group overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Card Header Image using uploaded aT Emblem */}
                  <div className="relative w-full h-36 rounded-xs overflow-hidden bg-[#FAF9F5] border border-[#D1CEC2]/70 group-hover:border-[#2C4A3E] transition-colors flex items-center justify-center p-3">
                    <img
                      src={ASSETS.atLogo}
                      alt={`${item.title} aT Emblem`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-xs bg-[#1E332B] text-[#D4E0A5] text-[10px] font-mono font-bold tracking-wider shadow-xs">
                      aT PILLAR {item.num}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-serif font-bold text-[#2C4A3E] tracking-widest uppercase">
                      {item.num}. {item.title}
                    </span>
                    <div className={`w-8 h-8 rounded-sm ${item.bgColor} flex items-center justify-center text-white shadow-xs`}>
                      <IconComp className="w-4 h-4 text-[#D4E0A5]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[15px] font-serif font-bold text-[#1A1A1A] leading-snug group-hover:text-[#2C4A3E] transition-colors">
                      {item.subHeadline}
                    </h3>
                  </div>

                  <p className="text-xs text-[#555555] leading-relaxed font-sans border-t border-[#D1CEC2]/40 pt-3">
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => onScrollToSection(item.targetSection)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2C4A3E] hover:text-[#1E332B] group/btn cursor-pointer pt-2"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
