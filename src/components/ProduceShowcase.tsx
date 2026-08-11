import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf, MapPin, Globe, Sparkles, Heart, ArrowUpRight, Award, Check } from 'lucide-react';
import { PRODUCE_ITEMS } from '../data/mockData';
import { ProduceItem } from '../types';

interface ProduceShowcaseProps {
  onSelectProduce: (item: ProduceItem) => void;
  savedItemIds: string[];
  onToggleSaveProduce: (itemId: string) => void;
}

export const ProduceShowcase: React.FC<ProduceShowcaseProps> = ({
  onSelectProduce,
  savedItemIds,
  onToggleSaveProduce,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('전체');

  const categories = ['전체', '과일', '차·음료', '수산·임산물'];

  const filteredItems = activeCategory === '전체'
    ? PRODUCE_ITEMS
    : PRODUCE_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 bg-[#F8F7F2] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-sm bg-[#2C4A3E] text-[#A2A67C] text-xs font-serif italic mb-3">
              <Leaf className="w-3.5 h-3.5 text-[#A2A67C]" />
              <span>aT 엄선 명품 농산물</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C4A3E] tracking-tight">
              우리 땅의 고집과 정성이 깃든 식재료
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#555555] font-sans">
              전국 농가와 aT가 함께 검증한 100% 친환경·지리적표시인증 우수 농산물 라이브러리
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-2 bg-[#E5E2D8] p-1.5 rounded-sm border border-[#D1CEC2] overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`produce-cat-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-sm text-xs font-bold tracking-widest uppercase transition cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#2C4A3E] text-[#F8F7F2] shadow-xs'
                    : 'text-[#444444] hover:text-[#2C4A3E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Produce Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isSaved = (savedItemIds || []).includes(item.id);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-sm border border-[#D1CEC2] overflow-hidden shadow-xs hover:shadow-md hover:border-[#2C4A3E] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F7F2]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-[#2C4A3E]/90 backdrop-blur-md text-[#F8F7F2] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs border border-[#A2A67C]/40">
                        {item.category}
                      </span>
                      <button
                        id={`save-prod-${item.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSaveProduce(item.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md transition cursor-pointer shadow-xs ${
                          isSaved 
                            ? 'bg-[#2C4A3E] text-[#A2A67C]' 
                            : 'bg-white/80 text-[#2C4A3E] hover:bg-white'
                        }`}
                        title={isSaved ? '보관됨' : '관심 먹거리 저장'}
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Region Tag */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-[#1E332B]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                      <MapPin className="w-3 h-3 text-[#A2A67C]" />
                      <span>{item.region}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="text-base font-serif font-bold text-[#1A1A1A] group-hover:text-[#2C4A3E] transition line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-[#A2A67C] font-bold uppercase tracking-widest line-clamp-1 mt-0.5">
                      {item.subName}
                    </p>

                    <p className="text-xs text-[#555555] mt-3 line-clamp-2 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Flavor & Nutrition Badges */}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {item.flavorProfile.slice(0, 2).map((flavor, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#E5E2D8] text-[#2C4A3E] rounded-xs font-semibold">
                          #{flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="p-4 pt-3 border-t border-[#D1CEC2] mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[11px] text-[#2C4A3E] font-bold uppercase tracking-tight">
                    <Globe className="w-3.5 h-3.5 text-[#A2A67C]" />
                    <span>{item.exportDestinations.slice(0, 2).join(', ')} 수출</span>
                  </div>

                  <button
                    id={`view-prod-modal-${item.id}`}
                    onClick={() => onSelectProduce(item)}
                    className="flex items-center space-x-1 text-[11px] font-bold uppercase tracking-widest text-[#2C4A3E] hover:underline transition cursor-pointer"
                  >
                    <span>상세 스토리</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
