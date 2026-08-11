import React from 'react';
import { FARMER_STORIES } from '../data/mockData';
import { ArrowRight, Quote, Sparkles, MapPin } from 'lucide-react';

interface FieldStoriesSectionProps {
  onGoToBlog: () => void;
}

export const FieldStoriesSection: React.FC<FieldStoriesSectionProps> = ({ onGoToBlog }) => {
  return (
    <section id="field-stories" className="bg-[#E5E2D8] py-20 border-b border-[#D1CEC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-serif italic text-[#2C4A3E] uppercase tracking-widest block">
            STORIES FROM THE FIELD
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A]">
            aT와 함께 성장하는 사람들
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            기관의 사업 성과를 넘어 현장 농어민과 기업의 삶이 실제로 어떻게 달라졌는지 생생한 변화를 전합니다.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FARMER_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-[#F8F7F2] rounded-sm border border-[#D1CEC2] overflow-hidden shadow-xs flex flex-col justify-between hover:border-[#2C4A3E] transition group"
            >
              {/* Image Header */}
              <div className="relative h-52 overflow-hidden bg-[#2C4A3E]">
                <img
                  src={story.image}
                  alt={story.farmName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E332B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center space-x-1 font-semibold text-[#A2A67C]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{story.location}</span>
                  </span>
                  <span className="px-2 py-0.5 bg-[#2C4A3E] text-white text-[10px] font-bold rounded-xs">
                    {story.produceName}
                  </span>
                </div>
              </div>

              {/* Story Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Quote className="w-5 h-5 text-[#2C4A3E] shrink-0 opacity-60" />
                    <span className="text-xs font-bold text-[#2C4A3E]">
                      {story.farmName} ({story.farmerName})
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#1A1A1A] leading-snug group-hover:text-[#2C4A3E] transition-colors">
                    “{story.quote}”
                  </h3>

                  <p className="text-xs text-[#555555] font-sans leading-relaxed line-clamp-3">
                    {story.fullStory}
                  </p>
                </div>

                {/* Impact Metric Badge */}
                <div className="bg-white p-3 rounded-sm border border-[#D1CEC2]/70 flex items-center justify-between text-xs mt-4">
                  <span className="text-[#555555] font-sans">{story.impactLabel}</span>
                  <span className="font-serif font-bold text-[#2C4A3E] text-sm">{story.impactMetric}</span>
                </div>
              </div>

              {/* Footer CTA */}
              <button
                onClick={onGoToBlog}
                className="w-full py-3.5 px-6 bg-[#2C4A3E] text-[#F8F7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#1E332B] transition flex items-center justify-between cursor-pointer border-t border-[#D1CEC2]"
              >
                <span>이야기 보기</span>
                <ArrowRight className="w-4 h-4 text-[#A2A67C]" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
