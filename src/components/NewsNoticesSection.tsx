import React, { useState } from 'react';
import { NEWS_NOTICES } from '../data/mockData';
import { NewsNotice } from '../types';
import { Bell, FileText, ChevronRight, AlertCircle, ArrowUpRight } from 'lucide-react';

interface NewsNoticesSectionProps {
  onSelectNotice: (notice: NewsNotice) => void;
  onOpenNoticeModal: () => void;
}

export const NewsNoticesSection: React.FC<NewsNoticesSectionProps> = ({
  onSelectNotice,
  onOpenNoticeModal,
}) => {
  const [selectedTab, setSelectedTab] = useState<'전체' | '공지사항' | '사업공고' | '보도자료' | '채용'>('전체');

  const tabs: ('전체' | '공지사항' | '사업공고' | '보도자료' | '채용')[] = [
    '전체',
    '공지사항',
    '사업공고',
    '보도자료',
    '채용',
  ];

  const filteredNotices = NEWS_NOTICES.filter((n) => {
    if (selectedTab === '전체') return true;
    return n.category === selectedTab;
  });

  return (
    <section id="news-notices" className="bg-[#F8F7F2] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D1CEC2] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-widest block">
              OFFICIAL ANNOUNCEMENTS & NEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              aT 소식
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-sm border transition cursor-pointer ${
                  selectedTab === tab
                    ? 'bg-[#2C4A3E] text-[#F8F7F2] border-[#2C4A3E]'
                    : 'bg-white text-[#555555] border-[#D1CEC2] hover:bg-[#E5E2D8] hover:text-[#1A1A1A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Notice List */}
        <div className="bg-white rounded-sm border border-[#D1CEC2] divide-y divide-[#D1CEC2]/60 shadow-xs">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => onSelectNotice(notice)}
              className="p-5 sm:p-6 hover:bg-[#F8F7F2] transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <span className="px-2.5 py-1 text-[11px] font-bold bg-[#E5E2D8] text-[#2C4A3E] rounded-xs shrink-0 whitespace-nowrap">
                  {notice.category}
                </span>

                {notice.isUrgent && (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-[#A83220] text-white rounded-xs shrink-0 uppercase tracking-wider flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    필독
                  </span>
                )}

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A] group-hover:text-[#2C4A3E] transition-colors line-clamp-1">
                    {notice.title}
                  </h3>
                  {notice.summary && (
                    <p className="text-xs text-[#666666] font-sans line-clamp-1">
                      {notice.summary}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4 text-xs text-[#777777] shrink-0 self-end sm:self-center">
                <span className="font-sans">{notice.department}</span>
                <span className="font-mono text-[#444444]">{notice.date}</span>
                <ChevronRight className="w-4 h-4 text-[#2C4A3E] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenNoticeModal}
            className="px-8 py-3.5 rounded-sm bg-[#2C4A3E] text-[#F8F7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#1E332B] transition cursor-pointer shadow-md inline-flex items-center space-x-2"
          >
            <span>전체 소식 및 공고 보기</span>
            <ArrowUpRight className="w-4 h-4 text-[#A2A67C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
