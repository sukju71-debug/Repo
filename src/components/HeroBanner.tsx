import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, BarChart3, Building2, Globe2, ShieldCheck, Leaf } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface HeroBannerProps {
  onScrollToSection: (sectionId: string) => void;
  onGoToAbout: () => void;
  onGoToBlog: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onScrollToSection,
  onGoToAbout,
  onGoToBlog,
}) => {
  return (
    <section className="relative w-full bg-[#1E332B] text-white overflow-hidden border-b border-[#D1CEC2]/30">
      {/* Background Image - Bright, Vibrant, Clear */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.atHeadquarters}
          alt="aT 한국농수산식품유통공사 본사 전경"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05]"
        />
        {/* Light directional gradient overlay so building is clearly visible on right while preserving contrast on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#11221B]/90 via-[#1E332B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11221B]/80 via-transparent to-[#11221B]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-8 bg-[#152720]/85 backdrop-blur-md p-8 sm:p-12 rounded-md border border-[#A2A67C]/50 shadow-2xl"
        >
          {/* Eyebrow badge with official aT logo emblem */}
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-sm bg-[#1E332B] border border-[#A2A67C] text-[#F8F7F2] text-xs font-serif tracking-wider shadow-md">
            <img
              src={ASSETS.atLogo}
              alt="aT CI Emblem"
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-xs object-cover bg-white p-0.5"
            />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#C5D193] font-mono tracking-widest uppercase font-semibold">OFFICIAL PORTAL</span>
              <span className="font-bold text-white">한국농수산식품유통공사 aT</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-serif text-white leading-[1.15] lg:leading-[76.2px] tracking-tight drop-shadow-sm">
              농수산식품의<br />
              <span className="text-[#D4E0A5] italic font-semibold">더 나은 흐름</span>을 만듭니다
            </h1>
          </div>

          {/* Subcopy */}
          <p className="text-sm sm:text-base lg:text-lg text-[#EAE8E1] font-sans leading-relaxed max-w-2xl">
            생산에서 유통, 소비와 수출까지.<br className="hidden sm:inline" />
            aT 한국농수산식품유통공사는 농어업과 시장, 대한민국과 세계를 연결해{' '}
            <strong className="text-white font-bold border-b-2 border-[#D4E0A5] pb-0.5">
              농어업인의 성장과 국민의 안정적인 먹거리
            </strong>
            를 만들어갑니다.
          </p>

          {/* 3 Major Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              id="hero-btn-about"
              onClick={() => onScrollToSection('core-businesses')}
              className="px-7 py-4 rounded-sm bg-white text-[#1E332B] text-xs sm:text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#F8F7F2] transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center space-x-2 cursor-pointer"
            >
              <span>aT 사업 알아보기</span>
              <ArrowRight className="w-4 h-4 text-[#1E332B]" />
            </button>

            <button
              id="hero-btn-support"
              onClick={() => onScrollToSection('support-projects')}
              className="px-7 py-4 rounded-sm bg-[#2C4A3E] border border-[#D4E0A5] text-white text-xs sm:text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#1E332B] transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center space-x-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#D4E0A5]" />
              <span>지원사업 찾기</span>
            </button>

            <button
              id="hero-btn-data"
              onClick={() => onScrollToSection('agri-data')}
              className="px-7 py-4 rounded-sm bg-[#1E332B]/90 border border-[#D1CEC2]/60 text-white text-xs sm:text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#2C4A3E] transition cursor-pointer flex items-center space-x-2 shadow-md"
            >
              <BarChart3 className="w-4 h-4 text-[#D4E0A5]" />
              <span>농수산식품 정보 보기</span>
            </button>
          </div>

          {/* Value Flow Pipeline Indicator */}
          <div className="pt-6 border-t border-[#A2A67C]/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center space-x-2.5 text-[#EAE8E1]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4E0A5]" />
              <div>
                <span className="block text-[10px] text-[#D4E0A5] uppercase font-serif italic font-bold">01. PRODUCTION</span>
                <span className="font-bold text-white">농어업인 생산</span>
              </div>
            </div>
            <div className="flex items-center space-x-2.5 text-[#EAE8E1]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4E0A5]" />
              <div>
                <span className="block text-[10px] text-[#D4E0A5] uppercase font-serif italic font-bold">02. LOGISTICS</span>
                <span className="font-bold text-white">스마트 유통혁신</span>
              </div>
            </div>
            <div className="flex items-center space-x-2.5 text-[#EAE8E1]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4E0A5]" />
              <div>
                <span className="block text-[10px] text-[#D4E0A5] uppercase font-serif italic font-bold">03. CONSUMPTION</span>
                <span className="font-bold text-white">국민 안심 식탁</span>
              </div>
            </div>
            <div className="flex items-center space-x-2.5 text-[#EAE8E1]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4E0A5]" />
              <div>
                <span className="block text-[10px] text-[#D4E0A5] uppercase font-serif italic font-bold">04. GLOBAL</span>
                <span className="font-bold text-white">K-Food 세계화</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
