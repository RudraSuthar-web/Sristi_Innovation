import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slidesData = [
  {
    id: 1,
    imageSrc: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
    title: 'PRAKRUTIK KHEDUT HAAT',
    ctaLink: '/market-access#khedut-haat',
    ctaText: 'Discover Market Support',
  },
  {
    id: 2,
    imageSrc: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80',
    title: 'SATTVIK FOOD FESTIVAL',
    ctaLink: '/market-access#sattvik',
    ctaText: 'Explore Sattvik',
  },
  {
    id: 3,
    imageSrc: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80',
    title: 'MARKET ACCESS & NETWORKING',
    ctaLink: '/market-access#networking',
    ctaText: 'Learn More',
  },
  {
    id: 4,
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    title: 'OUR INCUBATEES',
    ctaLink: '/market-access#incubatees',
    ctaText: 'View Incubatees',
  },
  {
    id: 5,
    imageSrc: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80',
    title: 'RESOURCES & FACILITIES',
    ctaLink: '/market-access#resources',
    ctaText: 'View Facilities',
  },
  {
    id: 6,
    imageSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    title: 'STARTUP GROWTH MEET',
    ctaLink: '/market-access#growth-meet',
    ctaText: 'Join the Meet',
  }
];

const SristiHeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % slidesData.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div 
      className="relative h-[calc(100dvh-6rem)] min-h-[600px] w-full bg-white overflow-hidden font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      {slidesData.map((slide, index) => {
        const isActive = index === activeIndex;
        
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full flex flex-col md:block transform transition-all duration-[1200ms] ease-out ${
              isActive 
                ? 'opacity-100 z-10 translate-x-0 scale-100' 
                : 'opacity-0 z-0 translate-x-12 scale-105 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            {/* Mobile Image (Top) */}
            <div className="relative w-full h-[45%] flex-shrink-0 md:hidden z-10 [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]">
              <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply z-10"></div>
              <img
                src={slide.imageSrc}
                alt=""
                className={`w-full h-full object-cover transform transition-transform duration-[12s] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>

            {/* Desktop Image (Right) */}
            <div className="hidden md:block absolute top-0 right-0 w-[55%] lg:w-[60%] h-full z-10 [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
              <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply z-10"></div>
              <img
                src={slide.imageSrc}
                alt=""
                className={`w-full h-full object-cover transform transition-transform duration-[12s] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>

            {/* Content Panel (Bottom on Mobile, Left on Desktop) */}
            <div className="flex-1 w-full md:h-full md:absolute md:top-0 md:left-0 flex flex-col justify-center pb-32 pt-8 md:py-0 px-6 sm:px-12 lg:px-24 z-20 bg-white md:bg-transparent">
              <div className="w-full md:w-[45%] lg:w-[42%] max-w-xl">
                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-800 leading-[1.1] mb-6 transform transition-all duration-1000 ease-out ${
                    isActive ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-16 opacity-0'
                  }`}
                >
                  {slide.title}
                </h1>
                
                <div
                  className={`transform transition-all duration-1000 ease-out ${
                    isActive ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-12 opacity-0'
                  }`}
                >
                  <Link
                    to={slide.ctaLink}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white bg-emerald-700 rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-6 md:bottom-12 z-30 flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 lg:px-24 pointer-events-none">
        
        {/* Indicators */}
        <div className="flex space-x-3 mb-6 sm:mb-0 pointer-events-auto">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating || index === activeIndex) return;
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 800);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === activeIndex ? 'w-10 bg-emerald-700' : 'w-2.5 bg-gray-300 hover:bg-emerald-400'
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex space-x-4 pointer-events-auto">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            aria-label="Previous slide"
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-emerald-800 hover:bg-emerald-700 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            aria-label="Next slide"
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-emerald-800 hover:bg-emerald-700 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SristiHeroSlider;
