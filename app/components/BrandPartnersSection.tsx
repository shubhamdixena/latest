import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface PartnerSlide {
  id: number;
  logo1: { src: string; alt: string };
  logo2?: { src: string; alt: string };
  description: string;
  image: { src: string; alt: string };
}

const partnerSlides: PartnerSlide[] = [
  {
    id: 1,
    logo1: { src: '/images/saint-laurent-logo.png', alt: 'Saint Laurent' },
    logo2: { src: '/images/kering-logo.png', alt: 'Kering' },
    description: 'Saint Laurent and Kering have revolutionized what it means to be a Brand Partner at charity: water. In 2017, Saint Laurent became our first Brand Partner in The Well, the generous community that funds our operations. Two years later, they joined hands with their parent company, Kering, to fund our innovative remote sensor technology, transforming the future of sustainable clean water.',
    image: { src: '/images/saint-laurent-sensor.jpg', alt: 'Water sensor technology' }
  },
  {
    id: 2,
    logo1: { src: '/images/caterpillar-foundation-logo.png', alt: 'Caterpillar Foundation' },
    description: 'The Caterpillar Foundation has helped bring clean and safe water to millions of people across nine countries through our operations. But they\'ve done more than watch the water crisis come to an end. They\'ve helped to feel the weight of the victory by joining walks and funding our research initiatives to expand clean water access to more communities.',
    image: { src: '/images/caterpillar-community.jpg', alt: 'Caterpillar community impact' }
  },
  {
    id: 3,
    logo1: { src: '/images/apple-logo.png', alt: 'Apple' },
    description: 'Apple\'s commitment to sustainability extends beyond their products to global water initiatives. Since 2019, they\'ve supported our projects in Ethiopia, bringing reliable water infrastructure to communities previously walking hours daily for water. Their funding has enabled the installation of innovative filtration systems and supported education programs on water conservation.',
    image: { src: '/images/apple-water-project.jpg', alt: 'Apple water project in Ethiopia' }
  },
  {
    id: 4,
    logo1: { src: '/images/nike-logo.png', alt: 'Nike' },
    description: 'Nike\'s partnership with charity: water focuses on sustainable water access in manufacturing communities. Through their \'Water Forward\' initiative, they\'ve helped fund 27 water projects in Cambodia and Vietnam, directly impacting the lives of factory workers and their families. Their approach combines infrastructure development with community-led management committees.',
    image: { src: '/images/nike-water-forward.jpg', alt: 'Nike Water Forward initiative' }
  },
  {
    id: 5,
    logo1: { src: '/images/starbucks-logo.png', alt: 'Starbucks' },
    logo2: { src: '/images/ethos-water-logo.png', alt: 'Ethos Water' },
    description: 'Through their Ethos Water Fund, Starbucks has been a long-term partner in our mission. For every bottle of Ethos water sold, a portion goes directly to water projects. Their funding has helped us build wells and sanitation facilities across Southeast Asia, benefiting over 250,000 people. They\'ve also engaged customers in water awareness campaigns globally.',
    image: { src: '/images/starbucks-water-project.jpg', alt: 'Starbucks water project' }
  }
];

const BrandPartnersSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(prev => (prev === partnerSlides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(prev => (prev === 0 ? partnerSlides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && currentSlide !== index) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="bg-[#f7f2e2] py-24 flex flex-col items-center w-full">
      <h2 className="text-[42px] text-[#222222] font-kazimir mb-20 text-center tracking-tight">
        Brand Partner highlights
      </h2>
      <div className="w-full max-w-[1800px] relative mx-auto px-8 mb-24">
        <div className="relative w-full overflow-hidden">
          {partnerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-full transition-opacity duration-500 ease-in-out absolute top-0 left-0 ${
                index === currentSlide ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="hidden lg:block bg-white relative flex-shrink-0 min-h-[500px] overflow-hidden">
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Center Column */}
                <div className="bg-white p-12 flex flex-col relative flex-shrink-0 justify-center min-h-[500px]">
                  <div className="flex items-center gap-6 mb-12">
                    <Image
                      src={slide.logo1.src}
                      alt={slide.logo1.alt}
                      width={120}
                      height={24}
                      className="h-6 w-auto"
                    />
                    {slide.logo2 && (
                      <>
                        <span className="text-2xl text-gray-400">×</span>
                        <Image
                          src={slide.logo2.src}
                          alt={slide.logo2.alt}
                          width={120}
                          height={24}
                          className="h-6 w-auto"
                        />
                      </>
                    )}
                  </div>
                  <p className="text-[17px] text-[#333333] leading-[1.7] max-w-[480px] font-proxima">
                    {slide.description}
                  </p>
                </div>
                {/* Right Column */}
                <div className="hidden lg:block bg-white relative flex-shrink-0 min-h-[500px] overflow-hidden">
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[-100px] left-0 right-0 flex justify-center items-center gap-12">
          <button
            onClick={prevSlide}
            className="p-3 hover:opacity-70 transition-opacity"
            disabled={isAnimating}
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} strokeWidth={1.5} className="text-black" />
          </button>
          <div className="flex gap-4">
            {partnerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-black'
                    : 'bg-black/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? 'true' : 'false'}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 hover:opacity-70 transition-opacity"
            disabled={isAnimating}
            aria-label="Next slide"
          >
            <ChevronRight size={28} strokeWidth={1.5} className="text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection; 