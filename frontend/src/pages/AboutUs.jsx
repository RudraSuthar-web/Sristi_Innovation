import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

import aboutUsImg from '../assets/SIIE-Sristi-Innovations2_aboutus.jpg';
import objectivesImg from '../assets/For_Objectives_About us.jpg';
import missionImg from '../assets/Sristi-Labs_about us.jpg';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Page Header (Hero) */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Farming Greenery Background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
        </div>
        
        {/* Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About Us
          </h1>
          <div className="w-24 h-1.5 bg-emerald-400 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24 lg:space-y-32">
        
        {/* About Us General Text + Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="w-full lg:w-3/5 space-y-8 text-gray-700 text-lg leading-loose">
            <p>
              SRISTI Innovations–BIRAC’s BioNEST is a business incubator funded by the Biotechnology Industry Research Assistance Council (BIRAC), Department of Biotechnology, Government of India. It provides a nurturing environment for innovations emerging from out-of-the-box thinking, traditional knowledge systems, grassroots creativity, and the ingenuity of university students and even children, supporting them through product development and commercialization.
            </p>
            <p>
              The Sanctuary of Innovation, Incubation, and Entrepreneurship (SIIE)–SRISTI BioNEST, located at Grambharti, Gandhinagar, serves as a hub for start-ups from diverse disciplines, including agriculture, environment, medicine, veterinary science, biotechnology, microbiology, life sciences, food technology, children’s creativity, and grassroots innovations. It acts as a comprehensive platform for both formal and informal innovators and start-ups, providing them with end-to-end incubation support.
            </p>
            <p>
              SRISTI Innovations–BIRAC’s BioNEST actively collaborates with reputed institutions, leveraging an extensive database of student ideas with over 184,000 student projects available on <a href="https://techpedia.in/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-4 decoration-emerald-300">Techpedia.sristi.org</a> and integrating traditional knowledge and practices collected through Shodhyatras, the Sattvik Traditional Food Festival, and field analyses. The organization conducts the Biotechnology Innovation Ignition School (BIIS) and the Gandhian Young Technological Innovation (GYTI) Awards, where more than 1,500 young biotechnology innovators present their creative ideas and products. These early-stage innovations possess high potential and require guidance and incubation to reach market readiness.
            </p>
            <p>
              In addition, Techpedia, SRISTI’s dedicated database of frugal innovations, serves as a rich source of ideas ready for implementation as scalable solutions. SRISTI Innovations has established MoUs with reputed national and international research institutions, laboratories, industries, and public systems, including collaborations with BIRAC-DBT, IMTech, UNICEF, IIT Bombay, USAID, JKUAT (Kenya), TUFE-China, ILO, JSW, 3M, HelpAge India, and Camaleonte Oy Ltd. These partnerships enable the development of innovative, sustainable technologies and their integration into public and private sector ecosystems.
            </p>
            <p>
              SRISTI Innovations has successfully developed several herbal medicines rooted in traditional knowledge and practices, bridging ancient wisdom with modern science. The Shodhyatra and Sattvik Traditional Food Festival are flagship initiatives of SRISTI designed to observe, learn from, and share grassroots innovations. Recently, another initiative, Khedut Haat, has gained recognition for promoting natural and organic foods, vegetables, and products, connecting rural producers directly with urban consumers. Through the Khedut Haat initiative, SRISTI Innovations–BioNEST also facilitates direct market linkages for its associated farmers and incubatees, enabling them to reach consumers more effectively and enhance the visibility and value of their products.
            </p>
            <p className="font-medium text-gray-800 text-xl border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50/50 rounded-r-lg">
              Thus, SRISTI Innovations–BIRAC’s BioNEST stands as a unique ecosystem that fosters creativity, nurtures innovation, and empowers entrepreneurs to transform knowledge into impactful, sustainable enterprises.
            </p>
          </div>
          
          <div className="w-full lg:w-2/5 relative lg:sticky lg:top-32">
            <img 
              src={aboutUsImg} 
              alt="SRISTI Innovations About Us" 
              className="w-full h-auto object-cover rounded-3xl shadow-xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-200 rounded-3xl -z-10 hidden sm:block"></div>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl shadow-lg p-8 sm:p-12 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6 border-b border-emerald-200/60 pb-6">
                <div className="bg-emerald-600 p-4 rounded-2xl shadow-md text-white">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-emerald-900 leading-tight">
                  Objectives of SIIE-SRISTI Innovations
                </h2>
              </div>
              <div className="text-gray-700 text-lg leading-loose">
                <p>
                  To serve as a sanctuary of knowledge for marginalized communities—representing not marginal minds but extraordinary innovators who have developed breakthrough solutions to everyday challenges—and to complement their efforts with inclusive innovations emerging from the formal sector.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <img 
              src={objectivesImg} 
              alt="Objectives of SRISTI Innovations" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-3xl shadow-xl border-4 border-white"
            />
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-emerald-200 rounded-3xl -z-10 hidden sm:block"></div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl shadow-lg p-8 sm:p-12 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6 border-b border-emerald-200/60 pb-6">
                <div className="bg-emerald-600 p-4 rounded-2xl shadow-md text-white">
                  <Lightbulb size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-emerald-900 leading-tight">
                  Mission of SRISTI Innovations
                </h2>
              </div>
              <div className="text-gray-700 text-lg leading-loose space-y-6">
                <p>
                  SRISTI Innovations is committed to promoting technology- and innovation-driven start-ups by providing comprehensive incubation support through virtual (in situ and ex situ) as well as physical incubation models. The in situ incubation model focuses on empowering grassroots innovators by supporting them at their own locations, enabling them to refine and scale their ideas within their local contexts.
                </p>
                <p>
                  Through its incubation ecosystem, SRISTI Innovations offers holistic mentorship covering diverse areas such as business planning, proof of concept development, technology validation, field trials, skill and technology gap mapping, product fabrication, and intellectual property rights (IPR) management. By integrating scientific, entrepreneurial, and traditional knowledge systems, the organization strives to transform innovative ideas into viable enterprises that contribute to sustainable and inclusive development.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <img 
              src={missionImg} 
              alt="Mission of SRISTI Innovations" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-3xl shadow-xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-200 rounded-3xl -z-10 hidden sm:block"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
