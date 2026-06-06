import React from 'react';

// Internal Reusable Banner Component
const Banner = ({ text }) => {
  return (
    <div className="relative w-full bg-slate-800 py-24 md:py-32 overflow-hidden">
      {/* 
        [IMAGE PLACEHOLDER] 
        Add your background image style or image tags here later.
        For example, you can add a style prop to the wrapper above: 
        style={{ backgroundImage: `url('/assets/your-image.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        Or add an <img /> tag right here.
      */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Image Grid or Single Image goes here */}
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        
        {/* Banner Text */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-md leading-tight">
          {text}
        </h2>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          <button className="px-8 py-3.5 bg-[#8bc34a] text-white font-semibold rounded-md hover:bg-[#7cb342] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-500/50">
            Contact Us
          </button>
          <button className="px-8 py-3.5 bg-[#8bc34a] text-white font-semibold rounded-md hover:bg-[#7cb342] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-500/50">
            Read More
          </button>
        </div>

      </div>
    </div>
  );
};

// Main Export Component
const PromotionalBanners = () => {
  return (
    <section className="w-full flex flex-col gap-8 my-16">
      <Banner text="SRISTI’s Khedut Haat (Every Thursday and Sunday) - 6 AM to 10 AM" />
      <Banner text="Sattvik Traditional Food Festival" />
    </section>
  );
};

export default PromotionalBanners;
