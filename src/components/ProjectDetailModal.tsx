import React from 'react';
import { SupportProject } from '../types';
import { X, Calendar, Users, Building, CheckCircle2, FileText, PhoneCall, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: SupportProject | null;
  onClose: () => void;
  onOpenNoticeModal: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenNoticeModal,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#F8F7F2] border border-[#D1CEC2] rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#2C4A3E] text-white flex items-start justify-between border-b border-[#D1CEC2]/30">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-[#1E332B] text-[#A2A67C] border border-[#A2A67C]/30 rounded-xs uppercase">
                {project.targetCategory}
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-white text-[#2C4A3E] rounded-xs">
                {project.status}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-[#F8F7F2] leading-snug">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#D1CEC2] hover:text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[#1A1A1A]">
          <p className="text-sm font-sans text-[#555555] leading-relaxed bg-white p-4 rounded-sm border border-[#D1CEC2]/70">
            {project.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#E5E2D8] p-4 rounded-sm border border-[#D1CEC2]">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#2C4A3E] uppercase flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#2C4A3E]" /> 지원 대상
              </span>
              <p className="font-semibold text-[#1A1A1A]">{project.targetAudience}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#2C4A3E] uppercase flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#2C4A3E]" /> 신청 기간
              </span>
              <p className="font-semibold text-[#1A1A1A]">{project.applicationPeriod}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#2C4A3E] uppercase flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#2C4A3E]" /> 지원 규모/혜택
              </span>
              <p className="font-bold text-[#2C4A3E]">{project.budgetOrBenefit}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#2C4A3E] uppercase flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-[#2C4A3E]" /> 담당 부서
              </span>
              <p className="font-semibold text-[#1A1A1A]">{project.department}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-bold text-[#2C4A3E] text-sm uppercase tracking-wider">
              주요 지원내용 및 세부사항
            </h4>
            <ul className="space-y-2 font-sans text-xs text-[#555555]">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2C4A3E] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#E5E2D8] border-t border-[#D1CEC2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-[#555555]">
            <PhoneCall className="w-4 h-4 text-[#2C4A3E]" />
            <span>상담전화: 061-931-1114 (평일 09:00 ~ 18:00)</span>
          </div>

          <div className="flex space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-sm bg-white border border-[#D1CEC2] text-xs font-bold text-[#555555] hover:bg-[#F8F7F2] transition cursor-pointer flex-1 sm:flex-initial"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenNoticeModal();
              }}
              className="px-6 py-2.5 rounded-sm bg-[#2C4A3E] text-[#F8F7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#1E332B] transition cursor-pointer shadow-xs flex-1 sm:flex-initial flex items-center justify-center space-x-1"
            >
              <span>신청 서류 안내</span>
              <ArrowRight className="w-4 h-4 text-[#A2A67C]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
