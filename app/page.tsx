'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MiddleSection from './components/MiddleSection';
import WhyWaterSection from './components/WhyWaterSection';
import BrandPartnersSection from './components/BrandPartnersSection';
import WaysToHelp from './components/WaysToHelp';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MiddleSection />
      <WhyWaterSection />
      <BrandPartnersSection />
      <WaysToHelp />
    </main>
  );
} 