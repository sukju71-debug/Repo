import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Bookmark, Heart, Trash2, ArrowRight, BookOpen, Leaf } from 'lucide-react';
import { BLOG_POSTS, PRODUCE_ITEMS } from '../data/mockData';
import { BlogPost, ProduceItem } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedPostIds?: string[];
  savedProduceIds?: string[];
  savedPosts?: BlogPost[];
  savedProduce?: ProduceItem[];
  onRemovePostBookmark?: (id: string) => void;
  onRemoveProduceSave?: (id: string) => void;
  onRemovePost?: (id: string) => void;
  onRemoveProduce?: (id: string) => void;
  onSelectPost: (post: BlogPost) => void;
  onSelectProduce: (produce: ProduceItem) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedPostIds = [],
  savedProduceIds = [],
  savedPosts,
  savedProduce,
  onRemovePostBookmark,
  onRemoveProduceSave,
  onRemovePost,
  onRemoveProduce,
  onSelectPost,
  onSelectProduce,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'posts' | 'produce'>('posts');

  if (!isOpen) return null;

  const bookmarkedPosts = savedPosts || BLOG_POSTS.filter((p) => (savedPostIds || []).includes(p.id));
  const bookmarkedProduce = savedProduce || PRODUCE_ITEMS.filter((p) => (savedProduceIds || []).includes(p.id));

  const handleRemovePostItem = onRemovePostBookmark || onRemovePost || (() => {});
  const handleRemoveProduceItem = onRemoveProduceSave || onRemoveProduce || (() => {});

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md bg-[#FAF9F5] text-[#1B3B2B] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8E4D8]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#EAE6DA] flex items-center justify-between bg-white">
            <div className="flex items-center space-x-2">
              <Bookmark className="w-5 h-5 text-[#E07A5F] fill-[#E07A5F]" />
              <h2 className="text-lg font-serif font-bold text-[#1B3B2B]">
                나의 보관 보관함
              </h2>
            </div>
            <button
              id="close-bookmarks-drawer-btn"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#EFECE3] transition cursor-pointer"
            >
              <X className="w-5 h-5 text-[#6B7C72]" />
            </button>
          </div>

          {/* Sub Tabs */}
          <div className="flex border-b border-[#EAE6DA] bg-[#EFECE3]/50">
            <button
              onClick={() => setActiveSubTab('posts')}
              className={`flex-1 py-3 text-xs font-bold transition cursor-pointer border-b-2 ${
                activeSubTab === 'posts'
                  ? 'border-[#1B3B2B] text-[#1B3B2B] bg-white'
                  : 'border-transparent text-[#6B7C72] hover:text-[#1B3B2B]'
              }`}
            >
              아티클 ({bookmarkedPosts.length})
            </button>
            <button
              onClick={() => setActiveSubTab('produce')}
              className={`flex-1 py-3 text-xs font-bold transition cursor-pointer border-b-2 ${
                activeSubTab === 'produce'
                  ? 'border-[#1B3B2B] text-[#1B3B2B] bg-white'
                  : 'border-transparent text-[#6B7C72] hover:text-[#1B3B2B]'
              }`}
            >
              관심 먹거리 ({savedProduce.length})
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {activeSubTab === 'posts' && (
              <>
                {bookmarkedPosts.length === 0 ? (
                  <div className="text-center py-16 text-[#86998E]">
                    <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-serif font-bold">보관된 아티클이 없습니다.</p>
                    <p className="text-xs mt-1">마음에 드는 블로그 포스트의 북마크 아이콘을 누르면 이곳에 보관됩니다.</p>
                  </div>
                ) : (
                  bookmarkedPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-4 rounded-xl bg-white border border-[#E8E4D8] shadow-xs hover:border-[#2D5A43] transition flex gap-3 items-center group cursor-pointer"
                      onClick={() => {
                        onSelectPost(post);
                        onClose();
                      }}
                    >
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-[#2D5A43]">{post.categoryLabel}</span>
                        <h4 className="text-xs font-serif font-bold text-[#1B3B2B] truncate group-hover:text-[#2D5A43]">
                          {post.title}
                        </h4>
                        <p className="text-[10px] text-[#6B7C72] mt-0.5">{post.publishedAt}</p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemovePostItem(post.id);
                        }}
                        className="p-1.5 text-[#A5B5AC] hover:text-rose-500 transition cursor-pointer"
                        title="삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </>
            )}

            {activeSubTab === 'produce' && (
              <>
                {savedProduce.length === 0 ? (
                  <div className="text-center py-16 text-[#86998E]">
                    <Leaf className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-serif font-bold">저장된 관심 먹거리가 없습니다.</p>
                    <p className="text-xs mt-1">우수 농산물 카드의 하트 아이콘을 누르면 이곳에서 확인할 수 있습니다.</p>
                  </div>
                ) : (
                  savedProduce.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-white border border-[#E8E4D8] shadow-xs hover:border-[#2D5A43] transition flex gap-3 items-center group cursor-pointer"
                      onClick={() => {
                        onSelectProduce(item);
                        onClose();
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-amber-700">{item.region}</span>
                        <h4 className="text-xs font-serif font-bold text-[#1B3B2B] truncate group-hover:text-[#2D5A43]">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-[#6B7C72] mt-0.5">{item.category}</p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveProduceItem(item.id);
                        }}
                        className="p-1.5 text-[#A5B5AC] hover:text-rose-500 transition cursor-pointer"
                        title="삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[#EAE6DA] bg-white text-center">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-full bg-[#1B3B2B] text-white text-xs font-bold hover:bg-[#2C543F] transition cursor-pointer"
            >
              닫기
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
