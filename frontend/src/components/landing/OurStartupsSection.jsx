import React from 'react';
import { Link } from 'react-router-dom';
import startupsImg from '../../assets/Our_Startup_Home Page.jpg';

const OurStartupsSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content Panel (Card Form) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start bg-emerald-50/50 p-8 sm:p-10 rounded-[2rem] shadow-xl shadow-emerald-900/5 border border-emerald-100/50">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#8bc34a] mb-6">
              Our Startups
            </h2>
            
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-8 text-justify lg:text-left">
              Sanctuary of Innovation, Incubation and Entrepreneurship (SIIE), SRISTI-BioNEST Grambharti, Gandhinagar is one of the BIRAC incubation centers that nurture technology and innovations from and for the grassroots level. SIIE is supporting innovation-based start-ups in multidisciplinary fields like agriculture, environment, medicine, veterinary, biotechnology, microbiology, life sciences, food science, children's creativity, and grassroots innovative ideas. The incubation center is supported by BIRAC (Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India).
            </p>
            
            <Link 
              to="/startups" 
              className="px-8 py-3 bg-[#8bc34a] text-white font-semibold rounded hover:bg-[#7cb342] transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-lime-500/50"
            >
              Read More
            </Link>
          </div>

          {/* Right Image Panel */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white bg-gray-50">
              <img 
                src={startupsImg} 
                alt="Our Startups at SRISTI" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStartupsSection;
