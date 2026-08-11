import React, { useState } from 'react';
import { SUPPORT_PROJECTS } from '../data/mockData';
import { SupportProject, TargetCategoryType } from '../types';
import { Filter, Calendar, Users, Building, ArrowRight, CheckCircle, Info, FileText } from 'lucide-react';

interface SupportProjectsSectionProps {
  selectedCategory: TargetCategoryType;
  setSelectedCategory: (cat: TargetCategoryType) => void;
  onSelectProject: (project: SupportProject) => void;
}

export const SupportProjectsSection: React.FC<SupportProjectsSectionProps> = ({
  selectedCategory,
  setSelectedCategory,
  onSelectProject,
}) => {
  const categories: TargetCategoryType[] = ['ALL', '농어업인', '식품기업', '수출기업', '유통기업', '외식기업'];

  const filteredProjects = SUPPORT_PROJECTS.filter((proj) => {
    if (selectedCategory === 'ALL') return true;
    return proj.targetCategory === selectedCategory;
  });

  return (
    <section id="support-projects" className="bg-[#F8F7F2] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D1CEC2] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-widest block">
              PUBLIC SUPPORT PROGRAMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              지금 신청할 수 있는 <span className="text-[#2C4A3E]">aT 지원사업</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] font-sans">
              농어업인과 식품·수출·외식 기업의 지속가능한 성장을 위한 맞춤형 공공 정책 사업을 한눈에 확인하세요.
            </p>
          </div>

          {/* Target Filter Tabs */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#2C4A3E] uppercase tracking-wider block">
              누구를 위한 지원사업인가요?
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-sm border transition cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#2C4A3E] text-[#F8F7F2] border-[#2C4A3E] shadow-xs'
                      : 'bg-white text-[#555555] border-[#D1CEC2] hover:bg-[#E5E2D8] hover:text-[#1A1A1A]'
                  }`}
                >
                  {cat === 'ALL' ? '전체 보기' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-sm border border-[#D1CEC2] p-7 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Header Status & Target */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#2C4A3E] text-[#A2A67C] rounded-xs">
                    {proj.targetCategory}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 text-[11px] font-bold rounded-xs ${
                      proj.status === '접수중'
                        ? 'bg-[#E2ECE7] text-[#2C4A3E] border border-[#2C4A3E]/30'
                        : 'bg-[#F2E8E6] text-[#A83220] border border-[#A83220]/30'
                    }`}
                  >
                    ● {proj.status}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#2C4A3E] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-sans mt-2 leading-relaxed line-clamp-2">
                    {proj.summary}
                  </p>
                </div>

                {/* Key Meta Info */}
                <div className="bg-[#F8F7F2] p-3.5 rounded-sm border border-[#D1CEC2]/60 space-y-2 text-xs text-[#333333]">
                  <div className="flex items-center space-x-2">
                    <Users className="w-3.5 h-3.5 text-[#2C4A3E] shrink-0" />
                    <span className="font-semibold text-[#1A1A1A]">대상:</span>
                    <span className="truncate">{proj.targetAudience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-[#2C4A3E] shrink-0" />
                    <span className="font-semibold text-[#1A1A1A]">신청기간:</span>
                    <span>{proj.applicationPeriod}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-3.5 h-3.5 text-[#2C4A3E] shrink-0" />
                    <span className="font-semibold text-[#1A1A1A]">지원규모:</span>
                    <span className="truncate font-bold text-[#2C4A3E]">{proj.budgetOrBenefit}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectProject(proj)}
                className="w-full py-3 px-4 rounded-sm bg-[#2C4A3E] text-[#F8F7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#1E332B] transition flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
              >
                <span>자세히 보기</span>
                <ArrowRight className="w-4 h-4 text-[#A2A67C]" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
