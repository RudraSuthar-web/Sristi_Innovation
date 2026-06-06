import React from 'react';

const offerData = [
  {
    title: "Programs",
    description: "SRISTI Innovations is the partner for the following programs of BIRAC, DST, Atal Innovation Mission, and MeiTY.",
    columns: 1,
    links: ["Internship Program", "Sattvik", "Khedut Haat"]
  },
  {
    title: "Services",
    description: "SRISTI Innovations is the partner for the following programs of BIRAC, DST, Atal Innovation Mission, and MeiTY.",
    columns: 2,
    links: [
      "Advisory and Mentoring", 
      "Funding Support", 
      "Infrastructure Support", 
      "Marketing Support", 
      "Networking and Events", 
      "IPR Support"
    ]
  },
  {
    title: "Resources and Facilities",
    description: "SRISTI Innovations is the partner for the following programs of BIRAC, DST, Atal Innovation Mission, and MeiTY.",
    columns: 1,
    links: ["Resource & Facilities"]
  }
];

const WhatWeOfferSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-emerald-600 mb-12 text-center">
          What We Offer
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {offerData.map((card, cardIndex) => (
            <div 
              key={cardIndex} 
              className="bg-[#f4f4f4] rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {card.description}
              </p>
              
              {/* Links Section */}
              <div 
                className={`grid ${card.columns === 2 ? 'grid-cols-2 gap-x-6' : 'grid-cols-1'}`}
              >
                {card.links.map((link, index) => {
                  // Determine if a top border is needed based on columns
                  const needsTopBorder = card.columns === 1 ? index > 0 : index >= 2;
                  
                  return (
                    <a 
                      href="#" 
                      key={index} 
                      className={`block py-3 text-emerald-600 text-sm font-medium hover:text-emerald-800 transition-colors ${
                        needsTopBorder ? 'border-t border-gray-300/80' : ''
                      }`}
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
