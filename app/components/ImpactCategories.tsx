'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CategoryContent {
  id: string;
  color: string;
  description: string;
}

const ImpactCategories = () => {
  const [activeCategory, setActiveCategory] = useState('HEALTH');

  const categories: CategoryContent[] = [
    { 
      id: 'HEALTH',
      color: 'bg-[#2A7081] text-white',
      description: 'Access to clean water reduces the risk of waterborne diseases and improves overall community health.'
    },
    { 
      id: 'EDUCATION',
      color: 'bg-white text-gray-900',
      description: 'When communities have clean water, children spend more time in school instead of collecting water.'
    },
    { 
      id: 'WOMEN',
      color: 'bg-white text-gray-900',
      description: 'Clean water empowers women by saving time and providing opportunities for education and work.'
    },
    { 
      id: 'ECONOMIC GROWTH',
      color: 'bg-white text-gray-900',
      description: 'Access to clean water creates economic opportunities and helps communities thrive.'
    },
  ];

  const activeDescription = categories.find(cat => cat.id === activeCategory)?.description;

  return (
    <section className="relative min-h-screen bg-[#F5F0E1]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/water-woman.jpg"
          alt="Woman accessing clean water"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Category Pills */}
          <div className="space-y-4 z-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  ${activeCategory === category.id ? category.color : 'bg-white/90 text-gray-900 hover:bg-white'}
                  px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                  w-full md:w-auto transform hover:scale-105 hover:shadow-lg
                  ${activeCategory === category.id ? 'shadow-xl scale-105' : ''}
                `}
              >
                {category.id}
              </button>
            ))}
          </div>

          {/* Stats Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl transform hover:scale-102 transition-transform duration-300">
            <p className="text-xl md:text-2xl text-gray-900 font-medium mb-6">
              {activeDescription}
            </p>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-lg text-gray-900 font-medium mb-4">
                Access to clean water and basic sanitation can save around 16,000 lives every week.
              </p>
              <button className="bg-[#F7C94A] hover:bg-[#e5b843] text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors uppercase tracking-wide transform hover:scale-105 transition-transform duration-300">
                Learn About Lives Changed
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCategories; 