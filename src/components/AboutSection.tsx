import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Globe, Sprout, Award, MapPin, CheckCircle2, HeartHandshake, PhoneCall } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface AboutSectionProps {
  onGoToBlog: () => void;
  onOpenNoticeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onGoToBlog, onOpenNoticeModal }) => {
  return (
    <div className="bg-[#F8F7F2] text-[#1A1A1A] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="relative rounded-sm overflow-hidden bg-[#2C4A3E] text-white p-8 sm:p-14 shadow-md border border-[#D1CEC2]/30">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <img 
              src={ASSETS.atHeadquarters} 
              alt="aT Headquarters" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3.5 py-1 bg-[#1E332B] text-[#A2A67C] text-xs font-serif italic rounded-sm uppercase tracking-wider">
              ABOUT AT (한국농수산식품유통공사)
            </span>

            <h1 className="text-3xl sm:text-5xl font-serif text-[#F8F7F2] leading-tight">
              농어민의 소득증대와<br />대한민국 농식품 산업의 진흥
            </h1>

            <p className="text-xs sm:text-sm text-[#D1CEC2] font-sans leading-relaxed">
              한국농수산식품유통공사(aT)는 1967년 설립 이래 대한민국 농어업인의 실질적 소득 향상, 농수산물 유통 구조 개선, 수급 안정, 그리고 K-Food 글로벌 수출 확대를 견인해 온 농림축산식품부 산하 공공기관입니다.
            </p>
          </div>
        </div>

        {/* Vision & Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-sm bg-white border border-[#D1CEC2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-bold text-lg font-serif">
              01
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
              농어민 실질 소득증대
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              유통 단계를 획기적으로 줄이는 온라인 공공 도매시장과 직거래 플랫폼을 구축하여, 농가가 땀 흘려 생산한 농산물이 제값을 받는 선순환 유통 생태계를 만듭니다.
            </p>
          </div>

          <div className="p-8 rounded-sm bg-white border border-[#D1CEC2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-bold text-lg font-serif">
              02
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
              K-Food 글로벌 영토 확장
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              전 세계 140여 개국 해외 조직망과 스마트 콜드체인 지원으로 한국의 우수한 신선 농산물과 전통 식문화가 세계인의 식탁에서 사랑받도록 지원합니다.
            </p>
          </div>

          <div className="p-8 rounded-sm bg-white border border-[#D1CEC2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-bold text-lg font-serif">
              03
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
              식량 안보 & 수급 안정
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed font-sans">
              기후 변화에 대응하여 무, 배추, 쌀, 콩 등 주요 식량 작물의 비축 기지를 안정적으로 운영함으로써 국민 물가 안정과 식량 안보를 든든히 지킵니다.
            </p>
          </div>
        </div>

        {/* Regional Network Showcase */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#E5E2D8] border border-[#D1CEC2] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-wider">
              NATIONWIDE NETWORK
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#2C4A3E]">
              전국 11개 지역본부 및 해외 17개 해외지사
            </h2>
            <p className="text-xs text-[#555555]">
              현장 중심의 농가 밀착형 지원과 글로벌 바이어 네트워크
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-sm bg-[#F8F7F2] border border-[#D1CEC2] space-y-1">
              <span className="font-bold text-[#1A1A1A] block">본부 (나주)</span>
              <p className="text-[11px] text-[#555555]">전남 나주시 문화로 227</p>
            </div>
            <div className="p-4 rounded-sm bg-[#F8F7F2] border border-[#D1CEC2] space-y-1">
              <span className="font-bold text-[#1A1A1A] block">서울경기지역본부</span>
              <p className="text-[11px] text-[#555555]">서울특별시 서초구 강남대로</p>
            </div>
            <div className="p-4 rounded-sm bg-[#F8F7F2] border border-[#D1CEC2] space-y-1">
              <span className="font-bold text-[#1A1A1A] block">부산울산지역본부</span>
              <p className="text-[11px] text-[#555555]">부산광역시 수영구</p>
            </div>
            <div className="p-4 rounded-sm bg-[#F8F7F2] border border-[#D1CEC2] space-y-1">
              <span className="font-bold text-[#1A1A1A] block">제주지역본부</span>
              <p className="text-[11px] text-[#555555]">제주특별자치도 제주시</p>
            </div>
          </div>
        </div>

        {/* Public Contact Card */}
        <div className="p-8 rounded-sm bg-[#2C4A3E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#D1CEC2]">
          <div className="space-y-1">
            <h3 className="text-lg font-serif font-bold text-[#A2A67C]">
              2026 농어민 사업 지원 상담 창구
            </h3>
            <p className="text-xs text-[#D1CEC2]">
              농가 자금 융자, 수출 지원, 친환경 인증 상담이 필요하시다면 지금 문의하세요.
            </p>
          </div>

          <button
            onClick={onOpenNoticeModal}
            className="px-6 py-3.5 rounded-sm bg-[#F8F7F2] text-[#2C4A3E] text-xs font-bold uppercase tracking-wider hover:bg-white transition cursor-pointer shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-[#2C4A3E]" />
            <span>지원 상담 안내 받기</span>
          </button>
        </div>

      </div>
    </div>
  );
};
