import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, PhoneCall, Globe, ArrowRight } from 'lucide-react';

interface NoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToAbout: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ isOpen, onClose, onGoToAbout }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 animate-in fade-in">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-[#FAF9F5] text-[#1B3B2B] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E4D8] p-6 sm:p-8"
        >
          <button
            id="close-notice-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#EFECE3] transition cursor-pointer"
          >
            <X className="w-5 h-5 text-[#6B7C72]" />
          </button>

          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1B3B2B] text-[#86EFAC] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>aT 공공 지원 공고</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#1B3B2B]">
              2026년 하반기 농어민 지원 및 K-Food 수출 자금 접수
            </h3>

            <p className="text-xs text-[#5C6E63] leading-relaxed font-sans">
              한국농수산식품유통공사(aT)는 농어민의 실질 소득 증대와 해외 수출 경쟁력 강화를 위한 공공 융자 및 맞춤형 컨설팅 지원 사업을 실시합니다.
            </p>

            <div className="space-y-2 pt-2 border-t border-[#EAE6DA]">
              <div className="p-3 rounded-xl bg-white border border-[#E8E4D8] text-xs space-y-1">
                <p className="font-bold text-[#2D5A43] flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  친환경·스마트팜 농가 시설 자금 융자
                </p>
                <p className="text-[#6B7C72] text-[11px]">연 1.2% 저리 공공 융자 지원 (최대 5억 원)</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E8E4D8] text-xs space-y-1">
                <p className="font-bold text-[#2D5A43] flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  K-Food 신선농산물 콜드체인 물류비 지원
                </p>
                <p className="text-[#6B7C72] text-[11px]">전 세계 140여 개국 신선 스마트 컨테이너 비용 보조</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onGoToAbout();
                  onClose();
                }}
                className="flex-1 py-3 rounded-full bg-[#1B3B2B] text-white text-xs font-bold hover:bg-[#2C543F] transition cursor-pointer flex items-center justify-center gap-1"
              >
                <span>자세한 공사 사업 안내</span>
                <ArrowRight className="w-4 h-4 text-[#86EFAC]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
