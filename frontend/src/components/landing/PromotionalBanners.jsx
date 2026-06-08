import React from 'react';
import { Link } from 'react-router-dom';

import khedutImg from '../../assets/khedut hat.png';
import sattvikImg from '../../assets/Sattvik Food.png';

// Internal Reusable Banner Component
const Banner = ({ text, bgImage, contactUrl, readMoreUrl }) => {
  return (
    <div 
      className="relative w-full bg-slate-800 py-12 md:py-16 lg:py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        
        {/* Banner Text */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 md:mb-8 drop-shadow-md leading-tight">
          {text}
        </h2>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          <Link 
            to={contactUrl} 
            className="px-8 py-3.5 bg-[#8bc34a] text-white font-semibold rounded-md hover:bg-[#7cb342] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-500/50 text-center"
          >
            Contact Us
          </Link>
          
          {readMoreUrl.startsWith('http') ? (
            <a 
              href={readMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#8bc34a] text-white font-semibold rounded-md hover:bg-[#7cb342] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-500/50 text-center"
            >
              Read More
            </a>
          ) : (
            <Link 
              to={readMoreUrl} 
              className="px-8 py-3.5 bg-[#8bc34a] text-white font-semibold rounded-md hover:bg-[#7cb342] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-500/50 text-center"
            >
              Read More
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

// Main Export Component
const PromotionalBanners = () => {
  return (
    <section className="w-full flex flex-col gap-8 my-16">
      <Banner 
        text="SRISTI’s Khedut Haat (Every Thursday and Sunday) - 6 AM to 10 AM" 
        bgImage={khedutImg}
        contactUrl="/contact"
        readMoreUrl="/khedut-haat"
      />
      <Banner 
        text="Sattvik Traditional Food Festival" 
        bgImage={sattvikImg}
        contactUrl="/contact"
        readMoreUrl="https://sattvik.sristi.org"
      />
    </section>
  );
};

export default PromotionalBanners;
