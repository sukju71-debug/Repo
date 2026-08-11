import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Tag, 
  Clock, 
  Bookmark, 
  Eye, 
  Heart, 
  ArrowRight, 
  Filter, 
  Sparkles,
  User
} from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost, CategoryType } from '../types';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  savedPostIds: string[];
  onToggleBookmark: (postId: string) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectPost,
  savedPostIds,
  onToggleBookmark,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories: { key: CategoryType; label: string }[] = [
    { key: 'ALL', label: '전체' },
    { key: 'FARMER', label: '농가 상생' },
    { key: 'EXPORTS', label: 'K-Food 세계로' },
    { key: 'SEASONAL', label: '제철 먹거리' },
    { key: 'ECO_SMART', label: '친환경·스마트팜' },
    { key: 'NEWS', label: '공사 소식' },
  ];

  const popularTags = [
    '#유기농녹차',
    '#KFood수출',
    '#스마트팜',
    '#8월먹거리',
    '#나주배',
    '#농가소득증대',
  ];

  // Filter posts based on category, tag, and search
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
    const matchesSearch = 
      (post.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.summary || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.author?.name || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || (post.content?.tags || []).includes(selectedTag);
    return matchesCategory && matchesSearch && matchesTag;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <section className="py-16 bg-[#F8F7F2] text-[#1A1A1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blog Header Banner */}
        <div className="bg-[#2C4A3E] text-white rounded-sm p-8 sm:p-12 mb-12 relative overflow-hidden shadow-md border border-[#D1CEC2]/30">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 hidden md:block pointer-events-none">
            <img 
              src={featuredPost.coverImage} 
              alt="Background" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter blur-xs"
            />
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-sm bg-[#1E332B] text-[#A2A67C] text-xs font-serif italic">
              <BookOpen className="w-3.5 h-3.5 text-[#A2A67C]" />
              <span>aT 농식품 아카이브 블로그</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif text-[#F8F7F2] tracking-tight leading-tight">
              자연의 감성과 우리 농가의 가치를 담다
            </h1>

            <p className="text-xs sm:text-sm text-[#D1CEC2] font-sans leading-relaxed">
              오설록의 그윽한 차 향기처럼 깊고 정갈한 이야기. 한국 농수산식품의 세계화, 친환경 농가의 땀방울, 그리고 영양 가득 제철 먹거리 이야기 아카이브.
            </p>

            {/* Search Input Box */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#2C4A3E]" />
                <input
                  type="text"
                  placeholder="농가 이야기, K-Food, 제철 농산물 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-sm bg-[#F8F7F2] text-[#1A1A1A] placeholder-[#888888] text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#A2A67C] border border-[#D1CEC2]"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#555555] hover:text-[#1A1A1A]"
                  >
                    지우기
                  </button>
                )}
              </div>
            </div>

            {/* Trending Tag Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#D1CEC2]">
              <span className="font-bold uppercase tracking-wider text-[#F8F7F2] flex items-center gap-1 text-[11px]">
                <Tag className="w-3 h-3 text-[#A2A67C]" />
                추천 키워드:
              </span>
              {popularTags.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    id={`blog-tag-${tag}`}
                    onClick={() => setSelectedTag(isSelected ? null : tag)}
                    className={`px-2.5 py-1 rounded-xs transition cursor-pointer text-[10px] font-bold uppercase tracking-wider ${
                      isSelected
                        ? 'bg-[#A2A67C] text-[#2C4A3E]'
                        : 'bg-[#1E332B] hover:bg-[#233B31] text-[#D1CEC2]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Post Card (Show if no search/filter active) */}
        {!searchQuery && !selectedTag && selectedCategory === 'ALL' && (
          <div className="mb-14">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#A2A67C]" />
              <h2 className="text-lg font-serif font-bold text-[#2C4A3E]">
                이달의 추천 스토리
              </h2>
            </div>

            <div 
              onClick={() => onSelectPost(featuredPost)}
              className="group bg-white rounded-sm border border-[#D1CEC2] overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#2C4A3E]/90 backdrop-blur-md text-[#A2A67C] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-xs border border-[#A2A67C]/40">
                  {featuredPost.categoryLabel}
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#F8F7F2]/80">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-[#555555]">
                    <div className="flex items-center space-x-1.5 font-bold uppercase text-[#2C4A3E]">
                      <User className="w-3.5 h-3.5" />
                      <span>{featuredPost.author.name}</span>
                    </div>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[#A2A67C]" />
                      {featuredPost.readTimeMinutes}분 분량
                    </span>
                    <span>•</span>
                    <span className="font-mono text-[11px]">{featuredPost.publishedAt}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#2C4A3E] transition leading-snug">
                    {featuredPost.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed line-clamp-3">
                    {featuredPost.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featuredPost.content.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-1 bg-[#E5E2D8] text-[#2C4A3E] rounded-xs font-bold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D1CEC2] mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-[#555555]">
                    <span className="flex items-center gap-1 font-mono">
                      <Eye className="w-3.5 h-3.5 text-[#A2A67C]" />
                      {featuredPost.viewCount.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Heart className="w-3.5 h-3.5 text-[#2C4A3E]" />
                      {featuredPost.likeCount}
                    </span>
                  </div>

                  <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#2C4A3E] hover:underline transition">
                    <span>전체 아티클 읽기</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs & Sorting */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#D1CEC2] pb-4 mb-8 gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto max-w-full pb-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  id={`cat-btn-${cat.key}`}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-sm text-xs font-bold tracking-widest uppercase transition cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#2C4A3E] text-[#F8F7F2] shadow-xs'
                      : 'text-[#444444] hover:text-[#2C4A3E] hover:bg-[#E5E2D8]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#555555] font-sans">
            총 <span className="font-bold text-[#2C4A3E]">{filteredPosts.length}</span>개의 아티클
          </div>
        </div>

        {/* Blog Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-sm border border-[#D1CEC2]">
            <BookOpen className="w-12 h-12 text-[#A2A67C] mx-auto mb-3" />
            <p className="text-base font-serif font-bold text-[#1A1A1A]">
              검색 조건에 일치하는 블로그 아티클이 없습니다.
            </p>
            <p className="text-xs text-[#555555] mt-1">
              검색어나 카테고리 필터를 변경해 보세요.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
                setSelectedCategory('ALL');
              }}
              className="mt-4 px-5 py-2.5 bg-[#2C4A3E] text-[#F8F7F2] text-xs font-bold uppercase tracking-wider rounded-sm"
            >
              전체 목록 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const isSaved = (savedPostIds || []).includes(post.id);
              return (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectPost(post)}
                  className="group bg-white rounded-sm border border-[#D1CEC2] overflow-hidden shadow-xs hover:shadow-md hover:border-[#2C4A3E] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F7F2]">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition duration-700"
                      />
                      
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="bg-[#2C4A3E]/90 backdrop-blur-md text-[#F8F7F2] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs border border-[#A2A67C]/40">
                          {post.categoryLabel}
                        </span>

                        <button
                          id={`bookmark-post-${post.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleBookmark(post.id);
                          }}
                          className={`p-2 rounded-full backdrop-blur-md transition cursor-pointer shadow-xs ${
                            isSaved
                              ? 'bg-[#2C4A3E] text-[#A2A67C]'
                              : 'bg-white/80 text-[#2C4A3E] hover:bg-white'
                          }`}
                          title={isSaved ? '북마크 해제' : '북마크 저장'}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <div className="absolute bottom-3 right-3 bg-[#1E332B]/80 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded-xs flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#A2A67C]" />
                        <span>{post.readTimeMinutes}분 읽기</span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-[11px] text-[#555555] mb-2 font-mono">
                        <span className="font-bold text-[#2C4A3E] font-sans">{post.author.name}</span>
                        <span>•</span>
                        <span>{post.publishedAt}</span>
                      </div>

                      <h3 className="text-base font-serif font-bold text-[#1A1A1A] group-hover:text-[#2C4A3E] transition leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-[#555555] font-sans mt-2.5 line-clamp-2 leading-relaxed">
                        {post.summary}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-4">
                        {post.content.tags.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#E5E2D8] text-[#2C4A3E] rounded-xs font-bold uppercase tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 pt-3 border-t border-[#D1CEC2] mt-2 flex items-center justify-between text-xs text-[#555555]">
                    <div className="flex items-center space-x-3 font-mono text-[11px]">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-[#A2A67C]" />
                        {post.viewCount.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-[#2C4A3E]" />
                        {post.likeCount}
                      </span>
                    </div>

                    <span className="font-bold uppercase tracking-wider text-[11px] text-[#2C4A3E] group-hover:underline transition flex items-center gap-1">
                      읽기
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
