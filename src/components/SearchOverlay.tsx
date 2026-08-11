import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen, Leaf, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, PRODUCE_ITEMS } from '../data/mockData';
import { BlogPost, ProduceItem } from '../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
  onSelectProduce: (produce: ProduceItem) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectPost,
  onSelectProduce,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedPosts = query.trim()
    ? BLOG_POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.summary.toLowerCase().includes(query.toLowerCase()) ||
          p.content.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const matchedProduce = query.trim()
    ? PRODUCE_ITEMS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.region.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full max-w-2xl bg-[#FAF9F5] text-[#1B3B2B] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E4D8] max-h-[80vh] flex flex-col"
        >
          {/* Search Input Top */}
          <div className="p-4 sm:p-6 border-b border-[#EAE6DA] flex items-center gap-3 bg-white">
            <Search className="w-6 h-6 text-[#2D5A43]" />
            <input
              type="text"
              autoFocus
              placeholder="농가 스토리, K-Food, 유기농 녹차, 나주 배 등을 검색해보세요..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-base sm:text-lg font-sans text-[#1B3B2B] bg-transparent focus:outline-none placeholder-[#8A9C91]"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-[#6B7C72] hover:text-[#1B3B2B]"
              >
                지우기
              </button>
            )}
            <button
              id="close-search-overlay-btn"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#EFECE3] transition cursor-pointer"
            >
              <X className="w-5 h-5 text-[#6B7C72]" />
            </button>
          </div>

          {/* Quick Filter Tag Recommendations */}
          {!query && (
            <div className="p-6 text-xs space-y-3">
              <span className="font-semibold text-[#6B7C72]">추천 검색어</span>
              <div className="flex flex-wrap gap-2">
                {['유기농 녹차', '나주 배', 'K-Food 수출', '스마트팜', '8월 제철', '농가소득'].map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => setQuery(keyword)}
                    className="px-3.5 py-1.5 rounded-full bg-[#EFECE3] text-[#2D5A43] hover:bg-[#1B3B2B] hover:text-white transition cursor-pointer font-medium"
                  >
                    #{keyword}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Post Results */}
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold text-[#2D5A43] mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>블로그 아티클 ({matchedPosts.length})</span>
                </div>

                {matchedPosts.length === 0 ? (
                  <p className="text-xs text-[#86998E] py-2">검색된 아티클이 없습니다.</p>
                ) : (
                  <div className="space-y-2">
                    {matchedPosts.map((post) => (
                      <div
                        key={post.id}
                        onClick={() => {
                          onSelectPost(post);
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-white border border-[#E8E4D8] hover:border-[#1B3B2B] transition cursor-pointer flex justify-between items-center group"
                      >
                        <div className="flex items-center space-x-3 truncate">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="truncate">
                            <span className="text-[10px] text-[#2D5A43] font-bold">{post.categoryLabel}</span>
                            <h4 className="text-xs font-serif font-bold text-[#1B3B2B] group-hover:text-[#2D5A43] truncate">
                              {post.title}
                            </h4>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#A5B5AC] group-hover:text-[#1B3B2B] group-hover:translate-x-1 transition" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Produce Results */}
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold text-[#2D5A43] mb-3">
                  <Leaf className="w-4 h-4" />
                  <span>우수 농산물 ({matchedProduce.length})</span>
                </div>

                {matchedProduce.length === 0 ? (
                  <p className="text-xs text-[#86998E] py-2">검색된 농산물이 없습니다.</p>
                ) : (
                  <div className="space-y-2">
                    {matchedProduce.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          onSelectProduce(prod);
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-white border border-[#E8E4D8] hover:border-[#1B3B2B] transition cursor-pointer flex justify-between items-center group"
                      >
                        <div className="flex items-center space-x-3 truncate">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="truncate">
                            <span className="text-[10px] text-amber-700 font-bold">{prod.region}</span>
                            <h4 className="text-xs font-serif font-bold text-[#1B3B2B] group-hover:text-[#2D5A43] truncate">
                              {prod.name}
                            </h4>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#A5B5AC] group-hover:text-[#1B3B2B] group-hover:translate-x-1 transition" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
