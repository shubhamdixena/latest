'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WaysToHelp = () => {
  return (
    <section className="bg-[#f7f2e2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Join the Spring Card */}
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src="/images/join-spring.jpg"
              alt="Women accessing clean water"
              width={800}
              height={500}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-[#00A49F] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  Join the Spring
                  <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </h3>
                <p className="text-lg">Join our monthly giving community to give clean water (and so much more) each and every month.</p>
              </div>
            </div>
          </div>

          {/* Fundraise Card */}
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src="/images/fundraise.jpg"
              alt="Person fundraising for clean water"
              width={800}
              height={500}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-[#2A7081] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  Fundraise for clean water
                  <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </h3>
                <p className="text-lg">Turn a passion or pastime into a campaign for clean water. It's quick, easy - and impactful.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sponsor Card */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/sponsor-project.jpg"
                alt="Water project"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">Sponsor a water project</h3>
              <p className="text-gray-600 mb-6">
                If you want to make a big splash, become a Water Project Sponsor and singlehandedly sponsor a water project for a community that needs it. Projects start at $10,000.
              </p>
              <Link 
                href="/learn-more"
                className="inline-block text-[#2A7081] font-semibold hover:text-[#1E4A75] transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Brand Partner Card */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/brand-partner.jpg"
                alt="Brand partnership event"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">Become a brand partner</h3>
              <p className="text-gray-600 mb-6">
                Whether your company sells socks or services (or anything else, really), we'd love to work with you to develop a mutually beneficial collaboration that has a lasting impact.
              </p>
              <Link 
                href="/become-partner"
                className="inline-block text-[#2A7081] font-semibold hover:text-[#1E4A75] transition-colors"
              >
                BECOME A PARTNER
              </Link>
            </div>
          </div>

          {/* Legacy Gift Card */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/legacy-gift.jpg"
                alt="Clean water impact"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">Make a lasting gift</h3>
              <p className="text-gray-600 mb-6">
                By planning a future gift to charity: water, members of The Tributary help ensure that our work will continue until every person on the planet has access to clean water.
              </p>
              <Link 
                href="/legacy-giving"
                className="inline-block text-[#2A7081] font-semibold hover:text-[#1E4A75] transition-colors"
              >
                LEARN ABOUT LEGACY GIVING
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToHelp; 