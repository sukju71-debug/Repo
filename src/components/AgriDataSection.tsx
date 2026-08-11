import React from 'react';
import { PRICE_TICKER_DATA } from '../data/mockData';
import { TrendingUp, TrendingDown, BarChart2, Globe, ShoppingBag, PieChart, ArrowUpRight } from 'lucide-react';

interface AgriDataSectionProps {
  onOpenNoticeModal: () => void;
}

export const AgriDataSection: React.FC<AgriDataSectionProps> = ({ onOpenNoticeModal }) => {
  return (
    <section id="agri-data" className="bg-[#E5E2D8] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-widest block">
            REAL-TIME AGRI-FOOD INTELLIGENCE PORTAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
            데이터로 보는 대한민국 농수산식품
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-sans">
            생산·가격·유통·수출 데이터를 통해 농수산식품 시장의 흐름을 한눈에 확인하세요.
          </p>
        </div>

        {/* Live Prices Marquee / Grid */}
        <div className="bg-[#F8F7F2] p-6 rounded-sm border border-[#D1CEC2] shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#D1CEC2]/60 pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2C4A3E] animate-pulse" />
              <h3 className="text-sm font-serif font-bold text-[#1A1A1A]">
                KAMIS 농산물 유통가격 일간 동향 (오늘 기준)
              </h3>
            </div>
            <span className="text-[11px] text-[#555555] font-sans">
              출처: aT 농산물유통정보 (KAMIS)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PRICE_TICKER_DATA.map((p) => (
              <div
                key={p.id}
                className="bg-white p-3.5 rounded-sm border border-[#D1CEC2]/80 space-y-1 text-xs"
              >
                <div className="flex items-center justify-between text-[#555555]">
                  <span className="font-semibold">{p.item}</span>
                  <span className="text-[10px] bg-[#E5E2D8] px-1.5 py-0.2 rounded-xs">{p.unit}</span>
                </div>
                <div className="text-base font-bold text-[#1A1A1A] font-serif">
                  {p.price}
                </div>
                <div className="flex items-center space-x-1 text-[11px]">
                  {p.isUp ? (
                    <span className="text-[#A83220] flex items-center font-bold">
                      <TrendingUp className="w-3 h-3 mr-0.5" />
                      {p.change}
                    </span>
                  ) : (
                    <span className="text-[#2C4A3E] flex items-center font-bold">
                      <TrendingDown className="w-3 h-3 mr-0.5" />
                      {p.change}
                    </span>
                  )}
                  <span className="text-[10px] text-[#777777] truncate"> 전일대비</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Data Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Box 1: KAMIS Price Info */}
          <div className="bg-[#F8F7F2] rounded-sm border border-[#D1CEC2] p-7 shadow-xs space-y-6 flex flex-col justify-between hover:border-[#2C4A3E] transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-bold">
                <BarChart2 className="w-5 h-5 text-[#A2A67C]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#2C4A3E] uppercase tracking-wider block">KAMIS PORTAL</span>
                <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">농산물 가격정보</h3>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                오늘의 주요 농산물 소매·도매 가격, 도매시장 경락 가격 및 품목별 품귀/수급 동향 리포트.
              </p>
            </div>
            <button
              onClick={onOpenNoticeModal}
              className="inline-flex items-center space-x-1 text-xs font-bold text-[#2C4A3E] hover:text-[#1E332B] cursor-pointer pt-2 border-t border-[#D1CEC2]"
            >
              <span>가격정보 확인</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Box 2: KATI Export Stats */}
          <div className="bg-[#F8F7F2] rounded-sm border border-[#D1CEC2] p-7 shadow-xs space-y-6 flex flex-col justify-between hover:border-[#2C4A3E] transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-bold">
                <Globe className="w-5 h-5 text-[#A2A67C]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#2C4A3E] uppercase tracking-wider block">KATI PORTAL</span>
                <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">수출 현황</h3>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                대한민국 농수산식품의 국가별·품목별 수출 데이터, 현지 비관세 장벽 및 인허가 리포트.
              </p>
            </div>
            <button
              onClick={onOpenNoticeModal}
              className="inline-flex items-center space-x-1 text-xs font-bold text-[#2C4A3E] hover:text-[#1E332B] cursor-pointer pt-2 border-t border-[#D1CEC2]"
            >
              <span>수출통계 보기</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Box 3: aT-Market Distribution */}
          <div className="bg-[#F8F7F2] rounded-sm border border-[#D1CEC2] p-7 shadow-xs space-y-6 flex flex-col justify-between hover:border-[#2C4A3E] transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5 text-[#A2A67C]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#2C4A3E] uppercase tracking-wider block">aT-MARKET</span>
                <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">유통정보</h3>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                산지부터 소비지까지 디지털 온라인 공공도매시장 거래 물량, 수수료 및 출하 실황 데이터.
              </p>
            </div>
            <button
              onClick={onOpenNoticeModal}
              className="inline-flex items-center space-x-1 text-xs font-bold text-[#2C4A3E] hover:text-[#1E332B] cursor-pointer pt-2 border-t border-[#D1CEC2]"
            >
              <span>유통정보 보기</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Box 4: Food Industry Stats */}
          <div className="bg-[#F8F7F2] rounded-sm border border-[#D1CEC2] p-7 shadow-xs space-y-6 flex flex-col justify-between hover:border-[#2C4A3E] transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-bold">
                <PieChart className="w-5 h-5 text-[#A2A67C]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#2C4A3E] uppercase tracking-wider block">INDUSTRY INDEX</span>
                <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">식품산업 정보</h3>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                식품·외식산업의 주요 통계, 외식업 경기전망지수, HMR 및 원재료 가격지수 통계.
              </p>
            </div>
            <button
              onClick={onOpenNoticeModal}
              className="inline-flex items-center space-x-1 text-xs font-bold text-[#2C4A3E] hover:text-[#1E332B] cursor-pointer pt-2 border-t border-[#D1CEC2]"
            >
              <span>산업정보 보기</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
