'use client';

import Image from 'next/image';

interface StatProps {
  number: string;
  text: string;
}

const Stat = ({ number, text }: StatProps) => (
  <div className="flex flex-col items-start">
    <span className="text-4xl font-bold text-[#2A5C8B] mb-2">{number}</span>
    <p className="text-gray-700 text-lg">{text}</p>
  </div>
);

const MiddleSection = () => {
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="text-center mb-20">
          <h2 className="text-lg font-medium text-[#2A5C8B] uppercase tracking-widest mb-6">
            Why Water?
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D3748] font-bold max-w-4xl mx-auto leading-tight">
            Because clean water{' '}
            <span className="block mt-2">changes everything</span>
          </h1>
        </div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/water-woman.jpg"
              alt="Woman accessing clean water"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#2A5C8B]/10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2D3748] mb-4">
                💧 The Water Crisis
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, 771 million people lack access to clean and safe drinking water. 
                That's nearly 1 in 10 people worldwide, or twice the population of the United States.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2D3748] mb-4">
                ⚡ The Impact
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2A5C8B] mr-2">•</span>
                  Reduced risk of waterborne diseases
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A5C8B] mr-2">•</span>
                  Increased access to education when children don't have to collect water
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A5C8B] mr-2">•</span>
                  Economic growth through improved health and productivity
                </li>
              </ul>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <Stat 
                number="16,000+"
                text="Lives saved weekly through clean water access"
              />
              <Stat 
                number="200+"
                text="Million hours saved collecting water annually"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection; 