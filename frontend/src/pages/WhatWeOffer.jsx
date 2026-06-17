import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, HandCoins, Wrench, ShieldCheck, Building2, 
  Mail, Phone, Info, FileText, Megaphone, CheckCircle, 
  Leaf, Award, ArrowRight
} from 'lucide-react';

import labImage1 from "../assets/Sristi-Labs_about us.jpg";
import labImage2 from "../assets/SIIE-Sristi-Innovations2_aboutus.jpg";
import forestAsset from "../assets/forest.jpeg";

// Data arrays organized by section
const SERVICES = [
  {
    id: "advisory",
    title: "Advisory and Mentoring",
    icon: ShieldCheck,
    description: "Guidance for startups from idea generation and proof of concept to product validation and commercialization.",
    points: [
      "Mentoring by seasoned domain experts & scientists.",
      "Support for navigating government startup funding."
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure Support",
    icon: Building2,
    description: "Access to state-of-the-art office spaces and laboratory facilities for research and testing.",
    points: [
      "Co-working desks, private cabins & meeting rooms.",
      "Incubation centers at Grambharti and Ahmedabad."
    ]
  },
  {
    id: "prototyping",
    title: "Scientific and Prototyping",
    icon: Wrench,
    description: "Technical assistance for research, product validation, quality assurance, and laboratory analysis.",
    points: [
      "Raw botanical extraction & formulation development.",
      "Prototyping facilities to turn raw designs into functional samples."
    ]
  },
  {
    id: "networking",
    title: "Networking and Events",
    icon: Users,
    description: "Opportunities to connect with the innovation ecosystem, policy makers, and other incubators.",
    points: [
      "Pitching directly to Angel networks and VCs.",
      "Access to the national Honey Bee Network community."
    ]
  },
  {
    id: "marketing",
    title: "Marketing & Sales Linkage",
    icon: Megaphone,
    description: "Helping startups craft their brand identity, packaging, and retail distribution strategies.",
    points: [
      "Brand development & product packaging support.",
      "B2B & B2C linkage with chemical-free retail stores."
    ]
  },
  {
    id: "ipr",
    title: "IPR Support & Facilitation",
    icon: FileText,
    description: "End-to-end Intellectual Property Rights management to protect grassroots and student-led creativity.",
    points: [
      "Prior art and patent database searches.",
      "Assistance in filing patents and trademarks."
    ]
  }
];

const FUNDING = [
  {
    id: "funding-nabard",
    title: "NABARD Grant Support",
    icon: HandCoins,
    description: "Financial support and grants tailored for agricultural and rural innovations.",
    points: [
      "Facilitated by the SDAU RBIC.",
      "Focused on sustainable agriculture empowerment."
    ]
  },
  {
    id: "funding-vc",
    title: "Venture Capital Support",
    icon: HandCoins,
    description: "Expert guidance on securing Angel and VC funding, ensuring you are well-prepared.",
    points: [
      "Identifying suitable Angel Investors and VCs.",
      "Investment Readiness Assessments."
    ]
  }
];

const PROGRAMS = [
  {
    id: "internship",
    title: "Internship Program",
    icon: Users,
    description: "Nurturing grassroots and student-led innovations through hands-on national internship initiatives.",
    link: "/inquiry",
    points: [
      "Immersive technical learning & problem solving.",
      "Direct access to SRISTI mentors & industry experts."
    ]
  },
  {
    id: "sattvik",
    title: "Sattvik Food Festival",
    icon: Award,
    description: "A flagship community festival providing direct market-linkage for grassroots food innovators.",
    points: [
      "Showcase culinary innovations and traditional recipes.",
      "Direct B2C market linkage with conscious consumers."
    ]
  },
  {
    id: "khedut",
    title: "Khedut Haat",
    icon: Leaf,
    description: "Empowering farmers by providing a direct, transparent marketplace for their agricultural produce.",
    points: [
      "Direct farmer-to-consumer sales eliminating middlemen.",
      "Fair pricing mechanisms and complete transparency."
    ]
  }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const SectionHeader = ({ title, subtitle, align = "left" }) => (
  <motion.div 
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className={`mb-12 ${align === "center" ? "mx-auto text-center items-center flex flex-col" : "max-w-3xl"}`}
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
      {title}
    </h2>
    <div className="w-16 h-1.5 bg-emerald-500 mt-4 rounded-full"></div>
    {subtitle && (
      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const OfferingCard = ({ item }) => {
  const Icon = item.icon || Info;

  return (
    <motion.div
      variants={fadeUpVariant}
      id={item.id}
      className="group bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:border-emerald-200 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] shadow-sm relative overflow-hidden h-full z-10"
    >
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={28} />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
          {item.title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed text-sm mb-6">
          {item.description}
        </p>

        {item.points && item.points.length > 0 && (
          <div className="pt-4 mt-auto border-t border-gray-100">
            <ul className="space-y-3 mt-4">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start text-xs text-gray-600 leading-relaxed font-medium">
                  <div className="mt-0.5 mr-2.5 flex-shrink-0">
                    <CheckCircle size={16} className="text-emerald-500" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.link && (
          <div className="mt-6 pt-4 border-t border-gray-100/60 flex">
            <Link
              to={item.link}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#82b440] hover:bg-[#729e37] text-white font-bold text-xs rounded-xl shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Inquire Now
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const WhatWeOffer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(scrollId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    }
  }, [location]);

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
            What We Offer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed"
          >
            Comprehensive ecosystem support facilitating the end-to-end incubation journey from concept validation to scale-up.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
        {/* Incubation Services Section */}
        <section>
          <SectionHeader 
            title="Incubation Services" 
            subtitle="Robust support services designed to help grassroots startups and scientific innovators validate, protect, and scale their ideas effectively." 
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <OfferingCard key={service.id} item={service} />
            ))}
          </motion.div>
        </section>

        {/* Funding Support Section */}
        <section id="funding">
          <SectionHeader 
            title="Funding Support" 
            subtitle="Access structured government grants and secure specialized mentorship to become investment-ready." 
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {FUNDING.map((funding) => (
              <OfferingCard key={funding.id} item={funding} />
            ))}
          </motion.div>
        </section>

        {/* National Programs Section */}
        <section>
          <SectionHeader 
            title="National Programs" 
            subtitle="Participate in our flagship national programs bridging the gap between grassroots innovations and the broader market." 
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {PROGRAMS.map((program) => (
              <OfferingCard key={program.id} item={program} />
            ))}
          </motion.div>
        </section>

        {/* Advanced Laboratory Facilities Section */}
        <section id="resources-lab">
          <SectionHeader 
            title="Advanced Laboratory Facilities" 
            subtitle="Our laboratory facilities serve as a complete scientific workspace for startups and academia. Prototyping equipment is available for hire to accelerate your research." 
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-12 shadow-sm"
          >
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                {[
                  { title: "Microbiology Lab", desc: "Equipped with biosafety cabinets, autoclaves, and CO2 incubators for culture growth." },
                  { title: "Phytochemistry Lab", desc: "Specialized in raw botanical extraction and formulation development." },
                  { title: "Analytical Profiling", desc: "Features high-end quantitative equipment like HPLC and HPTLC." },
                  { title: "Molecular Biology", desc: "Equipped for thermal cycling (PCR) and DNA/RNA isolation workflows." }
                ].map((lab, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index} 
                    className="flex gap-4"
                  >
                    <div className="mt-1">
                      <CheckCircle size={20} className="text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{lab.title}</h4>
                      <p className="text-xs md:text-sm text-gray-500 mt-1.5 leading-relaxed">{lab.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Lab Images Showcase */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="absolute -inset-4 rounded-3xl bg-emerald-50/50 border border-emerald-100 transform rotate-1 -z-10 hidden md:block"></div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-full h-64 md:h-80 overflow-hidden rounded-[2rem] shadow-lg border border-gray-100 relative group transform md:-translate-y-4"
              >
                <img
                  src={labImage1}
                  alt="State-of-the-Art Laboratory"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider">BioNEST Labs</span>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-full h-64 md:h-80 overflow-hidden rounded-[2rem] shadow-lg border border-gray-100 relative group transform md:translate-y-4"
              >
                <img
                  src={labImage2}
                  alt="Scientific Laboratory Equipment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider">High-end Equipment</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

      </div>

      {/* Inquiry & Call-To-Action (CTA) Section */}
      <section className="bg-emerald-950 text-white relative z-20 mt-10 mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-emerald-900/35 border border-emerald-800/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-10 lg:items-center justify-between"
          >
            <div className="max-w-xl space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">
                Partner with SRISTI Innovations
              </h3>
              <p className="text-emerald-100/90 text-base leading-relaxed">
                Whether you need lab equipment rental, physical incubation space, or guidance with national grant 
                proposals, our team is ready to assist your growth journey. Get in touch to schedule a visit or consultation.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="mailto:bionest@sristiinnovations.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 rounded-2xl text-sm font-bold shadow-lg transition-transform hover:-translate-y-1"
              >
                <Mail size={18} />
                bionest@sristiinnovations.com
              </a>
              <a
                href="tel:+919825061139"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-emerald-800 text-white hover:bg-emerald-700 border border-emerald-700 rounded-2xl text-sm font-bold shadow-lg transition-transform hover:-translate-y-1"
              >
                <Phone size={18} />
                +91-9825061139
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;