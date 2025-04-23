'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CategoryContent {
  id: string;
  title: string;
  description: string;
  stats: {
    number: string;
    text: string;
  };
}

const categories: CategoryContent[] = [
  {
    id: 'HEALTH',
    title: 'Health Impact',
    description: 'Clean water reduces waterborne diseases and improves community health outcomes significantly.',
    stats: {
      number: '16,000+',
      text: 'Lives saved weekly through clean water access',
    },
  },
  {
    id: 'EDUCATION',
    title: 'Education Access',
    description: 'When children don\'t have to collect water, they can attend school and focus on their education.',
    stats: {
      number: '200M+',
      text: 'Hours saved annually that can be spent learning',
    },
  },
  {
    id: 'WOMEN',
    title: 'Women Empowerment',
    description: 'Access to clean water gives women time for education, work, and community leadership.',
    stats: {
      number: '70%',
      text: 'Of water collection done by women and girls',
    },
  },
  {
    id: 'ECONOMIC GROWTH',
    title: 'Economic Impact',
    description: 'Clean water access leads to improved health, productivity, and economic opportunities.',
    stats: {
      number: '$260B',
      text: 'Lost globally each year due to lack of water access',
    },
  },
];

const WhyWaterSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('HEALTH');
  const activeContent = categories.find(cat => cat.id === activeCategory);

  return (
    <section className="bg-[#F5F0E1] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block text-[#667799] text-sm font-medium uppercase tracking-[0.1em] mb-4">
            Why Water?
          </span>
          <h2 className="text-[28px] md:text-[32px] lg:text-[38px] text-[#222222] leading-tight font-semibold max-w-[600px] mx-auto">
            Because clean water
            <br />
            changes everything
          </h2>
        </div>

        {/* Main Content Section */}
        <div className="relative w-full md:w-[90%] lg:w-[80%] max-w-[1000px] rounded-lg overflow-hidden shadow-lg">
          {/* Background Image */}
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/water-woman.jpg"
              alt="Woman accessing clean water"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Category Pills */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2.5 justify-center px-4 z-10 w-full">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  py-2 px-6 rounded-full text-xs font-semibold uppercase tracking-wider 
                  shadow-md transition-all duration-300 hover:scale-105 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-[#2A7081]
                  ${activeCategory === category.id 
                    ? 'bg-[#2A7081] text-white' 
                    : 'bg-white/90 text-[#333333] hover:bg-white'}
                `}
                aria-pressed={activeCategory === category.id}
              >
                {category.id}
              </button>
            ))}
          </div>

          {/* Impact Callout */}
          <div className="absolute bottom-8 right-8 max-w-[90%] md:w-[400px] bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <div className="space-y-4">
              {activeContent && (
                <>
                  <h3 className="text-xl font-semibold text-[#2A7081]">
                    {activeContent.title}
                  </h3>
                  <p className="text-[15px] text-[#333333] leading-relaxed">
                    {activeContent.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#2A7081]">
                        {activeContent.stats.number}
                      </span>
                      <span className="text-sm text-gray-600">
                        {activeContent.stats.text}
                      </span>
                    </div>
                  </div>
                </>
              )}
              <button className="mt-4 w-full bg-[#F7C94A] py-3 px-6 rounded-md uppercase text-sm font-semibold tracking-wider text-[#333333] hover:bg-[#E6BA45] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F7C94A]">
                Learn About Lives Changed
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWaterSection; 