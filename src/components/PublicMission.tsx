import React from 'react';
import { ShieldCheck, TrendingUp, Globe, Sprout, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PublicMissionProps {
  onGoToAbout: () => void;
}

export const PublicMission: React.FC<PublicMissionProps> = ({ onGoToAbout }) => {
  const missions = [
    {
      num: '01',
      title: '농어민 실질 소득 증대',
      subtitle: '농가 수취 가격 보장 & 유통 단계 단순화',
      desc: '농산물 직거래 공공 온라인 도매시장을 확대하여 중간 유통 비용을 대폭 줄이고 절감된 이익이 온전히 농가 수취가 상승으로 연결되도록 혁신합니다.',
      icon: TrendingUp,
      stat: '온라인 도매시장 절감 870억 원',
      color: 'border-emerald-700/30 text-emerald-800 bg-[#F4F8F5]',
    },
    {
      num: '02',
      title: 'K-Food 글로벌 수출 진흥',
      subtitle: '세계 140여 개국 한식 문화 및 농식품 영토 확장',
      desc: '신선 농산물 전용 콜드체인 물류망과 현지 대형 유통망 직접 입점 컨설팅을 통해 2026년 K-Food 수출 125억 달러 달성을 견인합니다.',
      icon: Globe,
      stat: '전 세계 140개국 수출망 구축',
      color: 'border-amber-700/30 text-amber-800 bg-[#FAF6F0]',
    },
    {
      num: '03',
      title: '식량 안보 & 물가 수급 안정',
      subtitle: '기후 위기 대응 주요 작물 정부 비축',
      desc: '배추, 무, 쌀, 콩 등 국민 밥상 핵심 식재료의 정부 수급 비축 기지를 운영하여 폭염·폭우 등 기후 이상 시 식탁 물가를 안정시킵니다.',
      icon: ShieldCheck,
      stat: '핵심 식재료 비축량 20% 증대',
      color: 'border-blue-700/30 text-blue-800 bg-[#F2F6FA]',
    },
    {
      num: '04',
      title: '지속 가능한 스마트 농업',
      subtitle: '청년 농업인 창농 펀드 & 스마트 온실',
      desc: '기후 변화에 굴하지 않는 AI 기반 스마트 온실 도입과 청년 농부 멘토링 지원으로 한국 농업을 고부가가치 미래 산업으로 육성합니다.',
      icon: Sprout,
      stat: '청년 스마트농부 1,200명 육성',
      color: 'border-[#2D5A43]/30 text-[#1B3B2B] bg-[#FAF9F5]',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#E5E2D8] text-[#1A1A1A] border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif italic px-3.5 py-1 bg-[#2C4A3E] text-[#A2A67C] rounded-sm uppercase tracking-wider">
            PUBLIC MISSION
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2C4A3E] mt-3 tracking-tight">
            농어민의 소득증대와 농식품 산업 진흥을 위한 aT의 다짐
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#555555] leading-relaxed font-sans">
            한국농수산식품유통공사는 농어민과 소비자 모두가 함께 웃는 상생 생태계를 위해 4대 핵심 역량을 집중하고 있습니다.
          </p>
        </div>

        {/* 4 Cards Grid with Divide Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.num}
                className="bg-[#F8F7F2] rounded-sm p-6 border border-[#D1CEC2] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#A2A67C] group-hover:text-[#2C4A3E] transition">
                      {m.num}
                    </span>
                    <div className="p-2.5 rounded-sm bg-[#E5E2D8] text-[#2C4A3E] border border-[#D1CEC2]">
                      <Icon className="w-5 h-5 text-[#2C4A3E]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#2C4A3E] transition">
                    {m.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2C4A3E] mt-1">
                    {m.subtitle}
                  </p>
                  <p className="text-xs text-[#555555] mt-3 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D1CEC2]">
                  <div className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-tight text-[#2C4A3E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A2A67C]" />
                    <span>{m.stat}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <button
            id="public-mission-cta-btn"
            onClick={onGoToAbout}
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-sm bg-[#2C4A3E] text-[#F8F7F2] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#1E332B] transition shadow-md cursor-pointer"
          >
            <span>한국농수산식품유통공사(aT) 사업소개 상세보기</span>
            <ArrowRight className="w-4 h-4 text-[#A2A67C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
