import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Globe, Award, Heart, Check, Sparkles, Leaf, Info } from 'lucide-react';
import { ProduceItem } from '../types';

interface ProduceModalProps {
  produce: ProduceItem | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const ProduceModal: React.FC<ProduceModalProps> = ({
  produce,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  if (!produce) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 animate-in fade-in duration-300">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-[#FAF9F5] text-[#1B3B2B] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E4D8] my-auto"
        >
          {/* Close Button */}
          <button
            id="close-produce-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Hero Image Banner */}
          <div className="relative aspect-[16/9] overflow-hidden bg-[#1B3B2B]">
            <img
              src={produce.image}
              alt={produce.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 bg-[#1B3B2B] text-[#86EFAC] text-xs font-semibold rounded-full border border-[#488262]">
                {produce.category} • {produce.certification}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3B2B] mt-2">
                {produce.name}
              </h2>
              <p className="text-xs text-[#5C6E63] font-sans">
                {produce.subName}
              </p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Region & Season Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#EAE6DA] text-xs">
              <div className="flex items-center gap-1.5 font-medium text-[#2D5A43]">
                <MapPin className="w-4 h-4 text-[#E07A5F]" />
                <span>주요 산지: <strong>{produce.region}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-[#5C6E63]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>제철 수확시기: <strong>{produce.seasonMonths.join(', ')}</strong></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#3D5245] leading-relaxed font-sans">
              {produce.description}
            </p>

            {/* Flavor Profile & Nutrition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E8E4D8] space-y-2">
                <span className="text-xs font-serif font-bold text-[#1B3B2B] flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  대표 미식 풍미 프로필
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {produce.flavorProfile.map((f, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-[#EFECE3] text-[#2D5A43] rounded-md font-medium">
                      #{f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E4D8] space-y-2">
                <span className="text-xs font-serif font-bold text-[#1B3B2B] flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  주요 영양 성분 & 효능
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {produce.nutritionHighlights.map((n, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-[#FAF2E8] text-[#8B4513] rounded-md font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Farmer Story Quote */}
            <div className="p-4 rounded-xl bg-[#1B3B2B] text-white space-y-1">
              <p className="text-xs text-[#86EFAC] font-semibold">농부의 현장 목소리</p>
              <p className="text-xs sm:text-sm font-serif italic text-[#D8E2DC]">
                "{produce.farmerStory}"
              </p>
            </div>

            {/* Global Export Info */}
            <div className="flex items-center justify-between pt-4 border-t border-[#EAE6DA] text-xs">
              <div className="flex items-center gap-1.5 text-[#2D5A43]">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>aT 수출망 입점 국가: <strong>{produce.exportDestinations.join(', ')}</strong></span>
              </div>

              <button
                id="modal-toggle-save-produce"
                onClick={() => onToggleSave(produce.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-xs ${
                  isSaved
                    ? 'bg-[#E07A5F] text-white'
                    : 'bg-[#1B3B2B] text-white hover:bg-[#2C543F]'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                <span>{isSaved ? '보관된 농산물' : '관심 농산물 저장'}</span>
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
};
