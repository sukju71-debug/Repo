import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bookmark, 
  Leaf, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  BookOpen, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface HeaderProps {
  activeTab: 'home' | 'blog' | 'seasonal' | 'exports' | 'farmer' | 'about';
  setActiveTab: (tab: 'home' | 'blog' | 'seasonal' | 'exports' | 'farmer' | 'about') => void;
  bookmarkCount: number;
  onOpenBookmarks: () => void;
  onOpenSearch: () => void;
  onOpenNoticeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  bookmarkCount,
  onOpenBookmarks,
  onOpenSearch,
  onOpenNoticeModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: HeaderProps['activeTab']; label: string; badge?: string }[] = [
    { id: 'home', label: '메인' },
    { id: 'blog', label: '농식품 블로그', badge: 'NEW' },
    { id: 'seasonal', label: '제철 먹거리' },
    { id: 'exports', label: 'K-Food 세계로' },
    { id: 'farmer', label: '농가 상생' },
    { id: 'about', label: '공사 소개' },
  ];

  return (
    <header className="w-full sticky top-0 z-40 transition-all duration-300">
      {/* Top Banner - Public Mission Notice */}
      <div className="bg-[#2C4A3E] text-[#F8F7F2] text-xs py-2 px-4 flex justify-between items-center border-b border-[#233B31]">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[#E5E2D8]">
          <div className="flex items-center space-x-2 truncate">
            <span className="bg-[#1E332B] text-[#A2A67C] px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
              공공기관 aT
            </span>
            <span className="truncate text-xs font-medium">
              한국농수산식품유통공사: 농어민의 소득증대와 농식품산업을 진흥시키는 국민의 공공기관
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs text-[#D1CEC2]">
            <button 
              id="header-notice-btn"
              onClick={onOpenNoticeModal}
              className="hover:text-white transition flex items-center gap-1 cursor-pointer font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A2A67C]" />
              <span>2026 농가소득 지원안내</span>
            </button>
            <span className="text-[#3E6354]">|</span>
            <a 
              href="tel:061-931-1114" 
              className="hover:text-white transition flex items-center gap-1 font-medium"
            >
              <PhoneCall className="w-3 h-3 text-[#A2A67C]" />
              <span>고객상담 061-931-1114</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F8F7F2]/95 backdrop-blur-md shadow-xs border-b border-[#D1CEC2] py-3' 
            : 'bg-[#F8F7F2] border-b border-[#D1CEC2] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Section - High Density theme uppercase & serif */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-10 h-10 rounded-md bg-white border border-[#D1CEC2] flex items-center justify-center p-0.5 shadow-xs group-hover:border-[#2C4A3E] transition overflow-hidden">
              <img
                src={ASSETS.atLogo}
                alt="aT Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-2xl font-bold tracking-tighter text-[#2C4A3E] font-serif">
                  aT
                </span>
                <span className="text-xs font-semibold text-[#2C4A3E] tracking-wide">
                  한국농수산식품유통공사
                </span>
              </div>
              <p className="text-[10px] text-[#666666] tracking-widest uppercase font-sans font-medium">
                Agro-Fisheries & Food Trade Corp
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-widest uppercase text-[#444444]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#2C4A3E] font-bold'
                      : 'hover:text-[#2C4A3E]'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 bg-[#A2A67C] text-white text-[9px] rounded-full font-bold uppercase tracking-normal">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2C4A3E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Utilities (Search, Bookmarks, K-Food Trade Button) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-[#2C4A3E] hover:text-[#1A1A1A] hover:bg-[#E5E2D8] rounded-full transition cursor-pointer"
              title="농식품 및 블로그 검색"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="header-bookmarks-btn"
              onClick={onOpenBookmarks}
              aria-label="Bookmarks"
              className="relative p-2 text-[#2C4A3E] hover:text-[#1A1A1A] hover:bg-[#E5E2D8] rounded-full transition cursor-pointer"
              title="보관한 글 & 관심 먹거리"
            >
              <Bookmark className="w-5 h-5" />
              {bookmarkCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#2C4A3E] text-[#F8F7F2] text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {bookmarkCount}
                </span>
              )}
            </button>

            <button
              id="header-blog-direct-btn"
              onClick={() => setActiveTab('blog')}
              className="hidden sm:flex items-center space-x-1.5 px-4 py-1.5 text-[11px] border border-[#2C4A3E] rounded-full text-[#2C4A3E] uppercase font-bold tracking-tighter hover:bg-[#2C4A3E] hover:text-white transition cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>K-Food Trade</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="lg:hidden p-2 text-[#1B3B2B] hover:bg-[#EFECE3] rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E5E2D9] px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition ${
                activeTab === item.id
                  ? 'bg-[#1B3B2B] text-white'
                  : 'text-[#2D5A43] hover:bg-[#EFECE3]'
              }`}
            >
              <span className="flex items-center gap-2">
                {item.label}
                {item.badge && (
                  <span className="px-1.5 py-0.5 bg-[#E07A5F] text-white text-[9px] rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>
          ))}
          <div className="pt-2 border-t border-[#E5E2D9] flex items-center justify-between text-xs text-[#6B7C72] px-2">
            <span>농어민 상생 공공기관 aT</span>
            <span>상담전화: 061-931-1114</span>
          </div>
        </div>
      )}
    </header>
  );
};
