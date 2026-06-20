import { Link } from 'react-router-dom';

import khedutImg from '../../assets/khedut hat.png';
import sattvikImg from '../../assets/Sattvik Food.png';

// Internal Reusable Banner Component
const Banner = ({ text, bgImage, contactUrl, readMoreUrl }) => {
  return (
    <div 
      className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] bg-slate-800 rounded-[2rem] overflow-hidden flex flex-col justify-between p-8 sm:p-10 group shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-150"
    >
      {/* Zoomable Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60 z-10 transition-colors duration-300 group-hover:bg-black/65 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col justify-between h-full flex-grow text-center">
        
        {/* Banner Text (Centered) */}
        <div className="flex-grow flex items-center justify-center my-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug tracking-tight drop-shadow-md">
            {text}
          </h2>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
          <Link 
            to={contactUrl} 
            className="w-full sm:w-auto px-7 py-3 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none text-center text-sm"
          >
            Contact Us
          </Link>
          
          {readMoreUrl.startsWith('http') ? (
            <a 
              href={readMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none text-center text-sm"
            >
              Read More
            </a>
          ) : (
            <Link 
              to={readMoreUrl} 
              className="w-full sm:w-auto px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none text-center text-sm"
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Banner 
          text="SRISTI’s Khedut Haat (Every Thursday and Sunday) - 7 AM to 10 AM" 
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
      </div>
    </section>
  );
};

export default PromotionalBanners;
