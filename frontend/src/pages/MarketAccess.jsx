import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Users, Tent, Globe2, Briefcase, FileImage, ArrowRight, ArrowUpRight } from 'lucide-react';
import forestAsset from "../assets/forest.jpeg";

// Unused sectionsData array removed as the layout is custom-designed.

const MarketAccess = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }
  }, [location.hash]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-[#f8fafc] text-gray-700 min-h-screen relative overflow-hidden font-sans">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-750/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={forestAsset}
            alt="Farming Greenery Background"
            className="w-full h-full object-cover opacity-35 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30 mb-6"
          >
            SIIE-SRISTI BioNEST
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Market Access & Initiatives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed"
          >
            Discover our community-driven programs, dynamic growth events, and state-of-the-art facilities designed to propel grassroots ideas to national success.
          </motion.p>
        </div>
      </div>

      {/* 2. Overlapping Feature Cards: Khedut Haat & Sattvik */}
      <section className="relative z-20 -mt-8 md:-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-32 pb-24">
        
        {/* Khedut Haat */}
        <motion.div id="khedut-haat" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative flex flex-col lg:flex-row items-center gap-0 lg:gap-12 scroll-mt-32">
          <div className="w-full lg:w-7/12 relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" alt="Khedut Haat" className="w-full h-full object-cover transform transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>
          <div className="w-11/12 lg:w-6/12 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative -mt-16 lg:mt-0 lg:-ml-24 z-20 border border-gray-100">
             <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm">
                <Tent size={28} />
             </div>
             <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">Prakrutik Khedut Haat</h2>
             <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-medium">
               <p>A community-driven weekly farmers market connecting consumers directly with farmers practicing natural, chemical-free agriculture.</p>
               <p className="text-gray-500 font-normal">By eliminating intermediaries, farmers receive the full value of their hard work. SRISTI rigorously evaluates farms using 35+ sustainability indicators to ensure unparalleled quality and authenticity.</p>
               <p className="text-gray-500 font-normal">Today, Khedut Haat empowers nearly 120 farmers, generating weekly sales exceeding ₹15 lakh across 7 prime locations, with aggressive expansion plans underway.</p>
             </div>
          </div>
        </motion.div>

        {/* Sattvik */}
        <motion.div id="sattvik" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative flex flex-col lg:flex-row-reverse items-center gap-0 lg:gap-12 scroll-mt-32">
          <div className="w-full lg:w-7/12 relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
             <img src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80" alt="Sattvik Festival" className="w-full h-full object-cover transform transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </div>
          <div className="w-11/12 lg:w-6/12 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative -mt-16 lg:mt-0 lg:-mr-24 z-20 border border-gray-100">
             <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm">
                <Users size={28} />
             </div>
             <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">Sattvik Food Festival</h2>
             <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-medium">
               <p>Our flagship community celebration honoring India’s traditional knowledge, agro-biodiversity, and grassroots innovation spirit.</p>
               <p className="text-gray-500 font-normal">Established over two decades ago, Sattvik bridges conscious urban consumers with the custodians of our rural heritage. It acts as a vibrant marketplace for farmers and artisans to transform forgotten crops into wholesome delicacies.</p>
               <p className="text-gray-500 font-normal">Beyond flavors, it hosts a dedicated grassroots innovation exhibition, fostering a sustainable ecosystem that promotes health and preserves ecological diversity.</p>
             </div>
          </div>
        </motion.div>

      </section>

      {/* 3. Market Access & Networking (3-Column Layout) */}
      <section id="networking" className="bg-gray-50 border-y border-gray-200 py-24 scroll-mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Market Access & Networking</h2>
            <p className="text-xl text-gray-600 font-light">Innovation is only the first step. Connecting with the right market is crucial for sustainable, real-world impact.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-6">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Connections</h3>
              <p className="text-gray-600 leading-relaxed">We help innovators connect with potential customers, business partners, and market opportunities to rapidly accelerate product adoption.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative top-0 md:top-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-6">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Mentorship</h3>
              <p className="text-gray-600 leading-relaxed">Facilitating interactions with business analysts and industry experts to refine pricing strategies, branding, and comprehensive business planning.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-6">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exhibitions & Linkages</h3>
              <p className="text-gray-600 leading-relaxed">Showcase your products at premium fairs and networking events to receive direct feedback and establish unshakeable market linkages.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Incubatees Banner */}
      <section id="incubatees" className="py-24 scroll-mt-0">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative bg-emerald-900 rounded-[3rem] overflow-hidden shadow-2xl p-10 md:p-16 lg:p-20 text-center">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
               
               <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                 <Briefcase size={48} className="text-emerald-300 mb-6" />
                 <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Explore Our Incubatees</h2>
                 <p className="text-lg text-emerald-100/90 mb-10 font-light">
                   Dive into our extensive network of brilliant innovators driving grassroots change and creating monumental impact across diverse sectors.
                 </p>
                 <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-900 font-bold text-lg rounded-full overflow-hidden transition-transform active:scale-95 shadow-xl hover:shadow-2xl">
                   <div className="absolute inset-0 w-0 bg-emerald-50 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                   <span className="relative z-10 flex items-center gap-3">
                     <Download size={22} className="animate-bounce" />
                     Download Directory (Excel)
                   </span>
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 5. Resources Bento Grid & 6. Growth Meet */}
      <section className="bg-white py-24 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
               
               {/* Resources */}
               <motion.div id="resources" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="scroll-mt-32">
                 <div className="flex items-center gap-4 mb-8">
                   <div className="p-3 bg-emerald-100 rounded-xl text-emerald-700">
                     <FileImage size={24} />
                   </div>
                   <h2 className="text-3xl font-extrabold text-gray-900">Resources & Facilities</h2>
                 </div>
                 <p className="text-lg text-gray-600 mb-8 font-medium">
                   Access state-of-the-art laboratory and prototyping facilities tailored to help innovators rigorously test and refine their groundbreaking products.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
                     <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" alt="Analytical Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                       <span className="text-white font-bold text-lg">Analytical Lab</span>
                     </div>
                   </div>
                   <div className="grid grid-rows-2 gap-4">
                      <div className="rounded-3xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80" alt="Prototyping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      </div>
                      <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col justify-end group cursor-pointer hover:bg-emerald-100 transition-colors">
                        <span className="text-emerald-800 font-bold text-lg mb-2 flex items-center justify-between">
                          View All Gallery <ArrowUpRight className="text-emerald-500 group-hover:text-emerald-700 transition-colors" />
                        </span>
                        <p className="text-sm text-emerald-600/80">Discover more workspaces</p>
                      </div>
                   </div>
                 </div>
               </motion.div>

               {/* Growth Meet */}
               <motion.div id="growth-meet" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="scroll-mt-32 flex flex-col justify-center">
                 <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 h-full relative overflow-hidden">
                    {/* Decorative bg */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">Startup Growth Meet</h2>
                    <div className="space-y-6 text-gray-600 text-lg relative z-10">
                      <p>
                        A dynamic platform empowering founders and small business owners with tactical insights into the entrepreneurial ecosystem. Learn from industry giants and explore scaling pathways.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 bg-emerald-200 p-1 rounded-full text-emerald-800"><ArrowRight size={14} /></div>
                          <span>Master enterprise creation, legal compliances, and government funding.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 bg-emerald-200 p-1 rounded-full text-emerald-800"><ArrowRight size={14} /></div>
                          <span>Unlock e-commerce strategies, bold branding, and rapid expansion models.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 bg-emerald-200 p-1 rounded-full text-emerald-800"><ArrowRight size={14} /></div>
                          <span>Engage in collaborative dialogues with investors and ecosystem titans.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-10 relative z-10">
                      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" alt="Startup Growth Meet" className="w-full h-48 object-cover rounded-2xl shadow-md" />
                    </div>
                 </div>
               </motion.div>

            </div>
         </div>
      </section>

    </div>
  );
};

export default MarketAccess;
