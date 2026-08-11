import React, { useState } from 'react';
import { Leaf, PhoneCall, Mail, Globe, Send, CheckCircle2, ChevronRight } from 'lucide-react';

interface FooterProps {
  onGoTab: (tab: 'home' | 'blog' | 'seasonal' | 'exports' | 'farmer' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onGoTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#1E332B] text-[#D1CEC2] pt-16 pb-12 border-t border-[#D1CEC2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Slogan Box */}
        <div className="bg-[#2C4A3E] rounded-sm p-8 sm:p-10 border border-[#D1CEC2]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-serif italic text-[#A2A67C] uppercase tracking-wider">
              aT 농식품 뉴스레터 구독
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#F8F7F2]">
              우리 땅의 제철 소식과 농가 이야기를 매주 전달합니다
            </h3>
            <p className="text-xs sm:text-sm text-[#D1CEC2]">
              100% 무료. 제철 식재료 레시피, aT 공공 지원공고, K-Food 세계화 리포트 수록.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-sm bg-[#1E332B] text-[#F8F7F2] text-xs placeholder-[#888888] border border-[#D1CEC2]/40 focus:outline-none focus:ring-1 focus:ring-[#A2A67C]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-sm bg-[#F8F7F2] text-[#2C4A3E] text-xs font-bold uppercase tracking-wider hover:bg-white transition cursor-pointer flex items-center justify-center space-x-1 shadow-md"
              >
                <span>{subscribed ? '구독 완료!' : '뉴스레터 신청'}</span>
                {subscribed ? <CheckCircle2 className="w-4 h-4 text-[#2C4A3E]" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xs bg-[#2C4A3E] text-[#A2A67C] flex items-center justify-center font-serif font-bold text-lg border border-[#A2A67C]/30">
                aT
              </div>
              <span className="text-lg font-serif font-bold text-[#F8F7F2]">
                한국농수산식품유통공사
              </span>
            </div>
            <p className="text-xs text-[#D1CEC2] leading-relaxed max-w-sm font-sans">
              한국농수산식품유통공사는 농어민의 소득증대와 농식품산업을 진흥시키기 위해 설립된 공공기관입니다.
            </p>
            <div className="pt-2 text-xs space-y-1 text-[#A2A67C]">
              <p>본사: 전라남도 나주시 문화로 227 (빛가람동)</p>
              <p>사업자등록번호: 104-82-04423</p>
              <p>대표전화: 061-931-1114 (평일 09:00 ~ 18:00)</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-serif font-bold text-[#F8F7F2] uppercase tracking-wider mb-4">
              주요 서비스
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1CEC2]">
              <li>
                <button onClick={() => onGoTab('home')} className="hover:text-[#A2A67C] transition">
                  메인 홈
                </button>
              </li>
              <li>
                <button onClick={() => onGoTab('blog')} className="hover:text-[#A2A67C] transition flex items-center gap-1">
                  농식품 블로그
                  <span className="text-[9px] bg-[#A2A67C] text-[#2C4A3E] px-1.5 py-0.2 rounded-xs font-bold uppercase">HOT</span>
                </button>
              </li>
              <li>
                <button onClick={() => onGoTab('seasonal')} className="hover:text-[#A2A67C] transition">
                  12달 제철 먹거리
                </button>
              </li>
              <li>
                <button onClick={() => onGoTab('exports')} className="hover:text-[#A2A67C] transition">
                  K-Food 글로벌 수출
                </button>
              </li>
              <li>
                <button onClick={() => onGoTab('farmer')} className="hover:text-[#A2A67C] transition">
                  농어민 상생 이야기
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Public Portals */}
          <div>
            <h4 className="text-xs font-serif font-bold text-[#F8F7F2] uppercase tracking-wider mb-4">
              관련 도매 & 공공 시스템
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1CEC2]">
              <li className="hover:text-[#A2A67C] transition cursor-pointer flex items-center justify-between">
                <span>농산물 유통정보 (KAMIS)</span>
                <ChevronRight className="w-3 h-3 text-[#A2A67C]" />
              </li>
              <li className="hover:text-[#A2A67C] transition cursor-pointer flex items-center justify-between">
                <span>온라인 도매시장 (aT-Market)</span>
                <ChevronRight className="w-3 h-3 text-[#A2A67C]" />
              </li>
              <li className="hover:text-[#A2A67C] transition cursor-pointer flex items-center justify-between">
                <span>K-Food 수출지원시스템 (KATI)</span>
                <ChevronRight className="w-3 h-3 text-[#A2A67C]" />
              </li>
              <li className="hover:text-[#A2A67C] transition cursor-pointer flex items-center justify-between">
                <span>학교급식 전자조달 (eaT)</span>
                <ChevronRight className="w-3 h-3 text-[#A2A67C]" />
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Certs */}
          <div>
            <h4 className="text-xs font-serif font-bold text-[#F8F7F2] uppercase tracking-wider mb-4">
              공기업 인증 & 고객센터
            </h4>
            <div className="p-4 rounded-sm bg-[#2C4A3E] border border-[#D1CEC2]/30 space-y-3">
              <div className="flex items-center space-x-2 text-white">
                <PhoneCall className="w-4 h-4 text-[#A2A67C]" />
                <span className="text-xs font-bold">061-931-1114</span>
              </div>
              <p className="text-[11px] text-[#D1CEC2]">
                농가 지원 및 수출 상담 창구
              </p>
              <div className="pt-1 text-[10px] text-[#A2A67C] border-t border-[#D1CEC2]/20">
                평일 09:00~18:00 (토/일/공휴일 휴무)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D1CEC2]/30 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A2A67C] gap-4">
          <div className="flex flex-wrap gap-4">
            <span className="text-[#F8F7F2] font-semibold">개인정보처리방침</span>
            <span>이용약관</span>
            <span>저작권보호정책</span>
            <span>정보공개</span>
            <span>행정정보공동이용</span>
          </div>

          <p>© 2026 Korea Agro-Fisheries & Food Trade Corporation (aT). All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
