import React from 'react';
import { ASSETS } from '../data/mockData';
import { Globe, Plane, Award, Sparkles, ArrowRight, Building2, MapPin } from 'lucide-react';

interface KFoodGlobalSectionProps {
  onGoToExports: () => void;
  onOpenNoticeModal: () => void;
}

export const KFoodGlobalSection: React.FC<KFoodGlobalSectionProps> = ({
  onGoToExports,
  onOpenNoticeModal,
}) => {
  const highlights = [
    { title: '해외시장 트렌드', desc: '북미·유럽·동남아 주요 식문화 트렌드 및 B2B 리포트' },
    { title: '국가별 수출정보', desc: '140여 개국 통관 절차, 위생검역, 라벨링 및 맞춤형 가이드' },
    { title: 'K-Food 성공사례', desc: '신선 배, 유기농 녹차, K-라면 해외 히트 유통 성공 스토리' },
    { title: '해외 바이어 정보', desc: 'aT가 검증한 17개 해외지사 네트워크 바이어 DB' },
    { title: '국제 박람회', desc: 'Paris SIAL, Tokyo Foodex, NYC Fancy Food 한국관 지원' },
  ];

  return (
    <section id="kfood-global" className="bg-[#1E332B] text-white py-20 border-b border-[#D1CEC2]/30 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
        <img
          src={ASSETS.heroHarvest}
          alt="K-Food Global Export"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-[#1E332B]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1 bg-[#2C4A3E] text-[#A2A67C] text-xs font-serif italic border border-[#A2A67C]/40 rounded-sm uppercase tracking-wider">
              K-FOOD GLOBAL NETWORK
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#F8F7F2] leading-tight">
              K-Food, <span className="text-[#A2A67C] italic">세계와 만나다</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D1CEC2] font-sans leading-relaxed">
              한국 농수산식품의 경쟁력을 세계시장으로 연결합니다.<br />
              aT는 해외시장 정보 제공부터 바이어 발굴, 국제 박람회와 현지 마케팅까지 우리 농수산식품 기업의 글로벌 성장을 지원합니다.
            </p>

            <div className="pt-2">
              <button
                onClick={onGoToExports}
                className="px-8 py-4 rounded-sm bg-[#F8F7F2] text-[#2C4A3E] text-xs font-bold tracking-[0.1em] uppercase hover:bg-white transition cursor-pointer shadow-md inline-flex items-center space-x-2"
              >
                <span>K-Food 글로벌 사업 보기</span>
                <ArrowRight className="w-4 h-4 text-[#2C4A3E]" />
              </button>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-sm bg-[#2C4A3E]/90 border border-[#D1CEC2]/30 space-y-2 hover:border-[#A2A67C] transition ${
                  idx === 4 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-center space-x-2 text-[#A2A67C]">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold font-serif">{h.title}</span>
                </div>
                <p className="text-xs text-[#D1CEC2] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
