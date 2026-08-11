/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CoreBusinessesSection } from './components/CoreBusinessesSection';
import { UserServicePortal } from './components/UserServicePortal';
import { SupportProjectsSection } from './components/SupportProjectsSection';
import { AgriDataSection } from './components/AgriDataSection';
import { KFoodGlobalSection } from './components/KFoodGlobalSection';
import { PerformanceSection } from './components/PerformanceSection';
import { FieldStoriesSection } from './components/FieldStoriesSection';
import { NewsNoticesSection } from './components/NewsNoticesSection';
import { InstitutionMissionSection } from './components/InstitutionMissionSection';
import { EsgManagementSection } from './components/EsgManagementSection';
import { BottomCtaSection } from './components/BottomCtaSection';

import { SeasonalCalendar } from './components/SeasonalCalendar';
import { ProduceShowcase } from './components/ProduceShowcase';
import { FarmerStories } from './components/FarmerStories';
import { BlogSection } from './components/BlogSection';
import { BlogModal } from './components/BlogModal';
import { ProduceModal } from './components/ProduceModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { NoticeModal } from './components/NoticeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

import { BLOG_POSTS, PRODUCE_ITEMS } from './data/mockData';
import { BlogPost, ProduceItem, CategoryType, SupportProject, TargetCategoryType, NewsNotice } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'blog' | 'seasonal' | 'exports' | 'farmer' | 'about'>('home');
  const [selectedBlogCategory, setSelectedBlogCategory] = useState<CategoryType>('ALL');
  const [selectedTargetCategory, setSelectedTargetCategory] = useState<TargetCategoryType>('ALL');

  // Modals and Drawers state
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedProduce, setSelectedProduce] = useState<ProduceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<SupportProject | null>(null);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState<boolean>(false);

  // Persistence for bookmarks
  const [savedPostIds, setSavedPostIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('at_saved_posts');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // fallback
    }
    return ['post-1'];
  });

  const [savedProduceIds, setSavedProduceIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('at_saved_produce');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // fallback
    }
    return ['prod-1'];
  });

  useEffect(() => {
    localStorage.setItem('at_saved_posts', JSON.stringify(savedPostIds || []));
  }, [savedPostIds]);

  useEffect(() => {
    localStorage.setItem('at_saved_produce', JSON.stringify(savedProduceIds || []));
  }, [savedProduceIds]);

  // Handlers
  const handleToggleBookmarkPost = (postId: string) => {
    if (!postId) return;
    setSavedPostIds((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      return safePrev.includes(postId) ? safePrev.filter((id) => id !== postId) : [...safePrev, postId];
    });
  };

  const handleToggleSaveProduce = (produceId: string) => {
    if (!produceId) return;
    setSavedProduceIds((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      return safePrev.includes(produceId) ? safePrev.filter((id) => id !== produceId) : [...safePrev, produceId];
    });
  };

  const handleSelectProduceByName = (name: string) => {
    if (!name || typeof name !== 'string') {
      setSelectedProduce(PRODUCE_ITEMS[0]);
      return;
    }
    const matched = PRODUCE_ITEMS.find((p) => (p.name && p.name.includes(name)) || name.includes(p.name));
    if (matched) {
      setSelectedProduce(matched);
    } else {
      setSelectedProduce(PRODUCE_ITEMS[0]);
    }
  };

  const handleGoToBlogCategory = (cat: CategoryType) => {
    setSelectedBlogCategory(cat);
    setActiveTab('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectNotice = (notice: NewsNotice) => {
    setIsNoticeOpen(true);
  };

  const totalBookmarkCount = savedPostIds.length + savedProduceIds.length;

  return (
    <div className="min-h-screen bg-[#F8F7F2] font-sans text-[#1A1A1A] flex flex-col justify-between selection:bg-[#2C4A3E] selection:text-white">
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookmarkCount={totalBookmarkCount}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNoticeModal={() => setIsNoticeOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        
        {/* HOME TAB: Value-Driven Service Platform Architecture */}
        {activeTab === 'home' && (
          <div>
            {/* 1. 메인 비주얼 */}
            <HeroBanner
              onScrollToSection={handleScrollToSection}
              onGoToAbout={() => handleScrollToSection('institution-mission')}
              onGoToBlog={() => {
                setActiveTab('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. aT가 하는 일 (4대 핵심 사업) */}
            <CoreBusinessesSection
              onScrollToSection={handleScrollToSection}
            />

            {/* 3. 사용자별 서비스 */}
            <UserServicePortal
              onSelectCategory={(cat) => {
                if (cat === '국민소비자') {
                  setSelectedTargetCategory('ALL');
                } else {
                  setSelectedTargetCategory(cat);
                }
              }}
              onScrollToSection={handleScrollToSection}
            />

            {/* 4. 주요 지원사업 */}
            <SupportProjectsSection
              selectedCategory={selectedTargetCategory}
              setSelectedCategory={setSelectedTargetCategory}
              onSelectProject={(project) => setSelectedProject(project)}
            />

            {/* 5. 농수산식품 데이터 */}
            <AgriDataSection
              onOpenNoticeModal={() => setIsNoticeOpen(true)}
            />

            {/* 6. K-Food 글로벌 영역 */}
            <KFoodGlobalSection
              onGoToExports={() => {
                setActiveTab('exports');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenNoticeModal={() => setIsNoticeOpen(true)}
            />

            {/* 7. aT의 성과 */}
            <PerformanceSection />

            {/* 8. 현장의 이야기 */}
            <FieldStoriesSection
              onGoToBlog={() => {
                setActiveTab('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 9. 뉴스·알림 */}
            <NewsNoticesSection
              onSelectNotice={handleSelectNotice}
              onOpenNoticeModal={() => setIsNoticeOpen(true)}
            />

            {/* 10. 기관 소개 영역 */}
            <InstitutionMissionSection
              onGoToAbout={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 11. ESG / 지속가능경영 */}
            <EsgManagementSection
              onOpenNoticeModal={() => setIsNoticeOpen(true)}
            />

            {/* 12. 홈페이지 하단 CTA */}
            <BottomCtaSection
              onScrollToSection={handleScrollToSection}
            />
          </div>
        )}

        {/* BLOG TAB: Dedicated Full Blog Hub */}
        {activeTab === 'blog' && (
          <BlogSection
            onSelectPost={(post) => setSelectedPost(post)}
            savedPostIds={savedPostIds}
            onToggleBookmark={handleToggleBookmarkPost}
            selectedCategory={selectedBlogCategory}
            setSelectedCategory={setSelectedBlogCategory}
          />
        )}

        {/* SEASONAL TAB */}
        {activeTab === 'seasonal' && (
          <div>
            <div className="bg-[#2C4A3E] text-white py-12 px-4 text-center border-b border-[#D1CEC2]/30">
              <span className="text-xs text-[#A2A67C] font-serif italic uppercase tracking-wider">SEASONAL PRODUCE</span>
              <h1 className="text-3xl font-serif text-[#F8F7F2] mt-1">우리 땅 12달 제철 먹거리 여정</h1>
              <p className="text-xs text-[#D1CEC2] mt-2">자연의 정직한 시간표대로 탐색하는 계절 농산물 가이드</p>
            </div>
            <SeasonalCalendar onSelectProduceByName={handleSelectProduceByName} />
            <ProduceShowcase
              onSelectProduce={(produce) => setSelectedProduce(produce)}
              savedItemIds={savedProduceIds}
              onToggleSaveProduce={handleToggleSaveProduce}
            />
          </div>
        )}

        {/* EXPORTS TAB */}
        {activeTab === 'exports' && (
          <div>
            <div className="bg-[#2C4A3E] text-white py-12 px-4 text-center border-b border-[#D1CEC2]/30">
              <span className="text-xs text-[#A2A67C] font-serif italic uppercase tracking-wider">GLOBAL K-FOOD</span>
              <h1 className="text-3xl font-serif text-[#F8F7F2] mt-1">세계로 뻗어나가는 K-Food 스토리</h1>
              <p className="text-xs text-[#D1CEC2] mt-2">전 세계 140여 개국 식탁을 사로잡은 대한민국 대표 농식품</p>
            </div>
            <BlogSection
              onSelectPost={(post) => setSelectedPost(post)}
              savedPostIds={savedPostIds}
              onToggleBookmark={handleToggleBookmarkPost}
              selectedCategory="EXPORTS"
              setSelectedCategory={setSelectedBlogCategory}
            />
          </div>
        )}

        {/* FARMER TAB */}
        {activeTab === 'farmer' && (
          <div>
            <div className="bg-[#2C4A3E] text-white py-12 px-4 text-center border-b border-[#D1CEC2]/30">
              <span className="text-xs text-[#A2A67C] font-serif italic uppercase tracking-wider">FARMER SYNERGY</span>
              <h1 className="text-3xl font-serif text-[#F8F7F2] mt-1">농어민과 함께 가꾸는 희망 스토리</h1>
              <p className="text-xs text-[#D1CEC2] mt-2">농가 소득 증대를 위해 현장에서 땀 흘리는 농업인과 aT의 파트너십</p>
            </div>
            <FarmerStories onGoToBlogCategory={handleGoToBlogCategory} />
            <BlogSection
              onSelectPost={(post) => setSelectedPost(post)}
              savedPostIds={savedPostIds}
              onToggleBookmark={handleToggleBookmarkPost}
              selectedCategory="FARMER"
              setSelectedCategory={setSelectedBlogCategory}
            />
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <AboutSection
            onGoToAbout={() => {}}
            onOpenNoticeModal={() => setIsNoticeOpen(true)}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        onGoTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Modals & Overlays */}
      {selectedPost && (
        <BlogModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          isBookmarked={(savedPostIds || []).includes(selectedPost.id)}
          onToggleBookmark={handleToggleBookmarkPost}
          onSelectRelatedPost={(post) => setSelectedPost(post)}
        />
      )}

      {selectedProduce && (
        <ProduceModal
          produce={selectedProduce}
          onClose={() => setSelectedProduce(null)}
          isSaved={(savedProduceIds || []).includes(selectedProduce.id)}
          onToggleSave={handleToggleSaveProduce}
        />
      )}

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenNoticeModal={() => setIsNoticeOpen(true)}
        />
      )}

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedPostIds={savedPostIds}
        savedProduceIds={savedProduceIds}
        savedPosts={BLOG_POSTS.filter((p) => (savedPostIds || []).includes(p.id))}
        savedProduce={PRODUCE_ITEMS.filter((p) => (savedProduceIds || []).includes(p.id))}
        onSelectPost={(post) => {
          setSelectedPost(post);
          setIsBookmarksOpen(false);
        }}
        onSelectProduce={(produce) => {
          setSelectedProduce(produce);
          setIsBookmarksOpen(false);
        }}
        onRemovePostBookmark={handleToggleBookmarkPost}
        onRemoveProduceSave={handleToggleSaveProduce}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPost={(post) => {
          setSelectedPost(post);
          setIsSearchOpen(false);
        }}
        onSelectProduce={(produce) => {
          setSelectedProduce(produce);
          setIsSearchOpen(false);
        }}
      />

      <NoticeModal
        isOpen={isNoticeOpen}
        onClose={() => setIsNoticeOpen(false)}
      />

    </div>
  );
}
