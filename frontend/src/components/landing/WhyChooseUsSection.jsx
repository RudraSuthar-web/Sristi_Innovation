import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUsSection = () => {
  const listItems = [
    "Access to state of the art facilities Phytochemistry, Microbiology & Analytical Lab",
    "Availablity of Domain Experts from various sectors",
    "Access to massive fork load practices database & Farmer Network",
    "Marketing, Sales, & Branding Support",
    "Funding Assitance in funding schemes, VC and Angel Networks"
  ];

  return (
    <section className="py-20 lg:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Why Choose Us & Video */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 lg:mb-20">
          
          {/* Left: List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#8bc34a] mb-8">
              Why you choose SRISTI Innovations
            </h2>
            
            <ul className="space-y-5">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-[#8bc34a] mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-[15px] sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Video */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ytD_vHM1VGU?autoplay=1&mute=1" 
                title="BioNEST Honey Bee" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
        </div>

        {/* Bottom Row: News & Events */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 pt-16 border-t border-gray-200">
          
          {/* News */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#8bc34a] mb-6">News</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-3">
              <li className="text-[15px] sm:text-base leading-relaxed">
                SRISTI's Prakrutik Khedut Haat on every Thursday and Sunday from 6:30 AM to 10:30 AM.
              </li>
            </ul>
          </div>

          {/* Events */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#8bc34a] mb-6">Events</h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              Sattvik Food Festival - 23rd to 26th December at Bhagwat Vidyapeeth. Do visit for eating Sattvik Food.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
