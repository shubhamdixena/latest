'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-[#2A7081] to-[#1d4f5a] pt-16">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold max-w-4xl leading-tight mb-8">
          Bring clean and safe water to every person on the planet
        </h1>
        
        {/* Donation Form */}
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Make a difference today</h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {['25', '50', '100'].map((amount) => (
              <button
                key={amount}
                className="bg-gray-100 hover:bg-[#F7C94A] text-gray-900 font-medium py-3 px-4 rounded-md transition-colors"
              >
                £{amount}
              </button>
            ))}
          </div>
          <button className="w-full bg-[#F7C94A] hover:bg-[#e5b843] text-gray-900 font-bold py-4 px-6 rounded-md transition-colors">
            Donate Now
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Your donation is secure and encrypted
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 