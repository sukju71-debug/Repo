import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FARMER_STORIES } from '../data/mockData';
import { Heart, Sprout, TrendingUp, Quote, ArrowRight, MapPin } from 'lucide-react';

interface FarmerStoriesProps {
  onGoToBlogCategory: (cat: 'FARMER') => void;
}

export const FarmerStories: React.FC<FarmerStoriesProps> = ({ onGoToBlogCategory }) => {
  const [activeFarmerIndex, setActiveFarmerIndex] = useState(0);
  const currentFarmer = FARMER_STORIES[activeFarmerIndex];

  return (
    <section className="py-20 bg-[#2C4A3E] text-white relative overflow-hidden">
      {/* Background Subtle Leaf SVG Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#A2A67C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-sm bg-[#1E332B] text-[#A2A67C] text-xs font-serif italic mb-3">
              <Sprout className="w-3.5 h-3.5" />
              <span>농가 소득 증대 프로젝트</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F8F7F2] tracking-tight">
              우리 땅의 땀방울, 농부들의 이야기
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#D1CEC2] max-w-xl font-sans">
              한국농수산식품유통공사(aT)는 대한민국 5만 여 친환경·수출 농가와 함께 땀의 정당한 가치를 만들어갑니다.
            </p>
          </div>

          {/* Farmer Switcher Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-1">
            {FARMER_STORIES.map((farmer, idx) => (
              <button
                key={farmer.id}
                id={`farmer-tab-${farmer.id}`}
                onClick={() => setActiveFarmerIndex(idx)}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
                  activeFarmerIndex === idx
                    ? 'bg-[#F8F7F2] text-[#2C4A3E] shadow-sm'
                    : 'bg-[#1E332B] text-[#D1CEC2] hover:bg-[#233B31]'
                }`}
              >
                {farmer.farmerName} ({farmer.location.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Feature Spotlight */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFarmer.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1E332B] border border-[#D1CEC2]/30 rounded-sm p-6 sm:p-10 shadow-xl"
          >
            {/* Left Image */}
            <div className="lg:col-span-5 relative rounded-sm overflow-hidden aspect-[4/3] lg:aspect-[1/1] shadow-md">
              <img
                src={currentFarmer.image}
                alt={currentFarmer.farmerName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-[#A2A67C]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{currentFarmer.location}</span>
                  </div>
                  <p className="text-lg font-serif font-bold mt-0.5 text-[#F8F7F2]">{currentFarmer.farmName}</p>
                </div>
                <span className="px-3 py-1 bg-[#2C4A3E]/90 backdrop-blur-md text-[10px] font-bold text-[#A2A67C] rounded-xs uppercase tracking-wider">
                  {currentFarmer.produceName}
                </span>
              </div>
            </div>

            {/* Right Quote & Story */}
            <div className="lg:col-span-7 space-y-6">
              <Quote className="w-10 h-10 text-[#A2A67C]" />

              <blockquote className="text-xl sm:text-2xl font-serif text-[#F8F7F2] leading-snug">
                "{currentFarmer.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-[#D1CEC2] font-sans leading-relaxed">
                {currentFarmer.fullStory}
              </p>

              {/* Impact Box */}
              <div className="pt-4 border-t border-[#D1CEC2]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4 bg-[#2C4A3E] px-5 py-3 rounded-sm border border-[#A2A67C]/30">
                  <TrendingUp className="w-6 h-6 text-[#A2A67C]" />
                  <div>
                    <span className="text-2xl font-serif font-bold text-white">
                      {currentFarmer.impactMetric}
                    </span>
                    <p className="text-[10px] text-[#D1CEC2] uppercase tracking-wider font-bold">
                      {currentFarmer.impactLabel}
                    </p>
                  </div>
                </div>

                <button
                  id="view-farmer-blog-btn"
                  onClick={() => onGoToBlogCategory('FARMER')}
                  className="px-6 py-3.5 rounded-sm bg-[#F8F7F2] text-[#2C4A3E] text-xs font-bold tracking-[0.15em] uppercase hover:bg-white transition flex items-center space-x-2 cursor-pointer shadow-md"
                >
                  <span>농가 스토리 블로그 전체보기</span>
                  <ArrowRight className="w-4 h-4 text-[#2C4A3E]" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
