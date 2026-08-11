import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Bookmark, 
  Heart, 
  Share2, 
  Printer, 
  Type, 
  Sun, 
  Moon, 
  Clock, 
  Tag, 
  MessageSquare, 
  CheckCircle2, 
  Quote, 
  BookOpen,
  Send,
  ArrowLeft
} from 'lucide-react';
import { BlogPost, ReaderSettings } from '../types';
import { BLOG_POSTS } from '../data/mockData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (postId: string) => void;
  onSelectRelatedPost: (post: BlogPost) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onSelectRelatedPost,
}) => {
  const [likes, setLikes] = useState<number>(post ? post.likeCount : 0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Array<{ name: string; date: string; text: string }>>([
    { name: '농가응원단', date: '2026.08.06', text: '농약 없이 흙의 힘으로 차를 가꾸는 제주 농부님의 노고에 깊이 감동했습니다. aT 지원 사업이 더 많이 늘어나길 바랍니다!' },
    { name: 'K-Food매니아', date: '2026.08.07', text: '프랑스 파리에서도 한국 유기농 녹차를 맛볼 수 있다니 자랑스럽네요!' },
  ]);

  const [readerSettings, setReaderSettings] = useState<ReaderSettings>({
    fontSize: 'md',
    fontFamily: 'serif',
    theme: 'light',
  });

  const [copySuccess, setCopySuccess] = useState(false);

  if (!post) return null;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([
      ...comments,
      { name: '독자 (방문자)', date: '방금 전', text: commentText.trim() },
    ]);
    setCommentText('');
  };

  // Font size mapping
  const fontSizeClasses = {
    sm: 'text-sm leading-relaxed',
    md: 'text-base leading-loose',
    lg: 'text-lg leading-loose',
    xl: 'text-xl leading-loose',
  };

  // Theme mapping
  const themeClasses = {
    light: 'bg-[#FAF9F5] text-[#1B3B2B]',
    sepia: 'bg-[#F4ECD8] text-[#3D3223]',
    dark: 'bg-[#15241C] text-[#E4ECE7]',
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-300">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh] ${themeClasses[readerSettings.theme]}`}
        >
          {/* Reader Top Controls Sticky Header */}
          <div className="sticky top-0 z-20 px-6 py-3 border-b border-black/10 flex items-center justify-between backdrop-blur-md bg-opacity-90 bg-inherit">
            <button
              id="close-blog-modal-btn"
              onClick={onClose}
              className="flex items-center space-x-1.5 text-xs font-semibold hover:opacity-75 transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>목록으로 돌아가기</span>
            </button>

            {/* Controls Bar */}
            <div className="flex items-center space-x-3 text-xs">
              {/* Font Family Switcher */}
              <div className="hidden sm:flex items-center bg-black/5 rounded-full p-1 space-x-1">
                <button
                  onClick={() => setReaderSettings({ ...readerSettings, fontFamily: 'serif' })}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-serif transition ${
                    readerSettings.fontFamily === 'serif' ? 'bg-white shadow-xs font-bold' : 'opacity-70'
                  }`}
                >
                  명조
                </button>
                <button
                  onClick={() => setReaderSettings({ ...readerSettings, fontFamily: 'sans' })}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-sans transition ${
                    readerSettings.fontFamily === 'sans' ? 'bg-white shadow-xs font-bold' : 'opacity-70'
                  }`}
                >
                  고딕
                </button>
              </div>

              {/* Font Size Switcher */}
              <div className="flex items-center bg-black/5 rounded-full p-1 space-x-1">
                <button
                  onClick={() => setReaderSettings({ ...readerSettings, fontSize: 'sm' })}
                  className={`px-2 py-0.5 rounded text-[10px] ${readerSettings.fontSize === 'sm' ? 'font-bold bg-white' : 'opacity-60'}`}
                >
                  가
                </button>
                <button
                  onClick={() => setReaderSettings({ ...readerSettings, fontSize: 'md' })}
                  className={`px-2 py-0.5 rounded text-[12px] ${readerSettings.fontSize === 'md' ? 'font-bold bg-white' : 'opacity-60'}`}
                >
                  가
                </button>
                <button
                  onClick={() => setReaderSettings({ ...readerSettings, fontSize: 'lg' })}
                  className={`px-2 py-0.5 rounded text-[14px] ${readerSettings.fontSize === 'lg' ? 'font-bold bg-white' : 'opacity-60'}`}
                >
                  가
                </button>
              </div>

              {/* Theme Mode Switcher */}
              <div className="flex items-center bg-black/5 rounded-full p-1 space-x-1">
                <button
                  onClick={() => setReaderSettings({ ...readerSettings, theme: 'light' })}
                  className={`p-1 rounded-full ${readerSettings.theme === 'light' ? 'bg-white shadow-xs' : 'opacity-60'}`}
                  title="밝게"
                >
                  <Sun className="w-3.5 h-3.5 text-amber-600" />
                </button>
                <button
                  onClick={() => setReaderSettings({ ...readerSettings, theme: 'sepia' })}
                  className={`p-1 rounded-full ${readerSettings.theme === 'sepia' ? 'bg-white shadow-xs' : 'opacity-60'}`}
                  title="세피아"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-800" />
                </button>
                <button
                  onClick={() => setReaderSettings({ ...readerSettings, theme: 'dark' })}
                  className={`p-1 rounded-full ${readerSettings.theme === 'dark' ? 'bg-[#2D4537] text-white shadow-xs' : 'opacity-60'}`}
                  title="어둡게"
                >
                  <Moon className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bookmark Toggle */}
              <button
                id="modal-bookmark-btn"
                onClick={() => onToggleBookmark(post.id)}
                className={`p-2 rounded-full transition cursor-pointer ${
                  isBookmarked ? 'bg-[#E07A5F] text-white' : 'bg-black/5 hover:bg-black/10'
                }`}
                title="북마크"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              <button
                id="modal-share-btn"
                onClick={handleShare}
                className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition cursor-pointer relative"
                title="공유하기"
              >
                <Share2 className="w-4 h-4" />
                {copySuccess && (
                  <span className="absolute -bottom-8 right-0 bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-md">
                    링크 복사됨!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Article Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 flex-1">
            
            {/* Article Header */}
            <header className="space-y-4 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1B3B2B] text-[#86EFAC] text-xs font-semibold">
                {post.categoryLabel}
              </span>

              <h1 className={`text-2xl sm:text-4xl font-bold tracking-tight ${readerSettings.fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}>
                {post.title}
              </h1>

              <p className="text-sm sm:text-base opacity-80 leading-relaxed font-sans border-l-2 border-[#1B3B2B] pl-4">
                {post.subtitle}
              </p>

              {/* Author & Meta info */}
              <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs opacity-80">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-black/20"
                  />
                  <div>
                    <p className="font-bold text-sm">{post.author.name}</p>
                    <p className="text-[11px] opacity-75">{post.author.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p>{post.publishedAt}</p>
                  <p className="flex items-center gap-1 justify-end text-[11px] opacity-75 mt-0.5">
                    <Clock className="w-3 h-3" />
                    {post.readTimeMinutes}분 분량
                  </p>
                </div>
              </div>
            </header>

            {/* Cover Image */}
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden aspect-[16/9] shadow-md">
              <img
                src={post.coverImage}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaways Box */}
            {post.content.keyTakeaways && (
              <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-black/5 border border-black/10 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>이 아티클의 핵심 포인트</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {post.content.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="font-bold opacity-60">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Article Paragraphs */}
            <div className={`max-w-3xl mx-auto space-y-8 ${fontSizeClasses[readerSettings.fontSize]} ${readerSettings.fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}>
              {post.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-bold border-b border-black/10 pb-2 pt-4 font-serif">
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="opacity-90 leading-loose">
                      {p}
                    </p>
                  ))}

                  {section.quote && (
                    <div className="my-6 p-6 rounded-xl bg-[#1B3B2B] text-white space-y-2 shadow-inner">
                      <Quote className="w-6 h-6 text-[#86EFAC] opacity-80" />
                      <p className="text-base sm:text-lg font-serif italic leading-relaxed">
                        "{section.quote}"
                      </p>
                      {section.quoteAuthor && (
                        <p className="text-xs text-[#86EFAC] text-right font-sans font-semibold">
                          — {section.quoteAuthor}
                        </p>
                      )}
                    </div>
                  )}

                  {section.image && (
                    <div className="my-6 space-y-2">
                      <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-sm">
                        <img
                          src={section.image}
                          alt={section.imageCaption || 'Illustration'}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {section.imageCaption && (
                        <p className="text-xs opacity-75 text-center font-sans">
                          {section.imageCaption}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tag List */}
            <div className="max-w-3xl mx-auto pt-6 border-t border-black/10 flex flex-wrap gap-2">
              {post.content.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-black/5 text-xs font-medium font-sans">
                  {tag}
                </span>
              ))}
            </div>

            {/* Like & Reaction Box */}
            <div className="max-w-3xl mx-auto py-8 text-center border-t border-b border-black/10 my-8">
              <p className="text-xs font-semibold opacity-70 mb-3">
                이 아티클이 한국 농식품 이해에 도움이 되셨나요?
              </p>
              <button
                id="like-article-btn"
                onClick={handleLike}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-bold transition shadow-md cursor-pointer ${
                  hasLiked
                    ? 'bg-rose-600 text-white hover:bg-rose-700'
                    : 'bg-[#1B3B2B] text-white hover:bg-[#2C543F]'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                <span>응원하기 ({likes})</span>
              </button>
            </div>

            {/* Comments Section */}
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <span>독자 소통 및 응원 ({comments.length})</span>
                </h3>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="flex gap-2">
                <input
                  type="text"
                  placeholder="농가와 공사 에디터에게 따뜻한 응원의 한마디를 남겨주세요..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-black/5 text-sm placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold hover:bg-[#2C543F] transition cursor-pointer flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>등록</span>
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-3 pt-2">
                {comments.map((c, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/5 space-y-1 text-xs">
                    <div className="flex items-center justify-between font-bold opacity-80">
                      <span>{c.name}</span>
                      <span className="text-[10px] opacity-60">{c.date}</span>
                    </div>
                    <p className="opacity-90">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="max-w-3xl mx-auto pt-8 border-t border-black/10 space-y-4">
              <h3 className="text-base font-serif font-bold">연관 농식품 아티클</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelatedPost(rel)}
                    className="p-4 rounded-xl bg-black/5 hover:bg-black/10 transition cursor-pointer flex gap-4 items-center"
                  >
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-emerald-700">{rel.categoryLabel}</span>
                      <p className="text-xs font-bold line-clamp-2 mt-0.5">{rel.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
};
