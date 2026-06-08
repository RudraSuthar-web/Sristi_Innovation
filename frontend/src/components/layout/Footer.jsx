import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import sristiLogo from '../../assets/Sristi-innovation-logo.jpg';
import honeyBeeLogo from '../../assets/Honey-Bee-logo.jpg';
import sristiPartnerLogo from '../../assets/sristi-logo.jpg';
import biracLogo from '../../assets/birac-logo.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#09090b] text-gray-400 overflow-hidden font-sans border-t border-gray-800/50">
      
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        
        {/* Massive Brand Statement (Ultra-Modern Touch) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12 border-b border-gray-800/60 pb-16">
           <div className="max-w-4xl">
             <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
               Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Grassroots</span><br/> Innovation.
             </h2>
             <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
               Protecting intellectual property and building a resilient, sustainable future through community-driven technological advancement.
             </p>
           </div>
           
           <Link to="/" className="group relative block shrink-0">
             <div className="absolute inset-0 bg-emerald-500/20 rounded-[2rem] blur-xl group-hover:bg-emerald-500/30 transition-all duration-500"></div>
             <div className="relative bg-white p-6 rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
               <img 
                 src={sristiLogo} 
                 alt="SRISTI Innovation" 
                 className="h-20 w-auto object-contain" 
               />
             </div>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500 inline-block"></span>
              Navigation
            </h3>
            <ul className="space-y-5">
              {['About Us', 'Incubator', 'Startups', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`} 
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group font-medium text-lg"
                  >
                    <ArrowRight size={16} className="mr-4 opacity-0 -ml-8 group-hover:opacity-100 group-hover:ml-0 text-emerald-400 transition-all duration-300 ease-out" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300 ease-out">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500 inline-block"></span>
              Get in Touch
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-lg">
                  <Phone className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-gray-200">9825061139</span>
                  <span className="text-sm text-gray-500 mt-1">Mon-Sat : 10 AM to 7 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-lg">
                  <Mail className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
                <div className="flex flex-col pt-1.5">
                  <a href="mailto:bionest@sristiinnovations.com" className="text-lg font-semibold text-gray-200 hover:text-emerald-400 transition-colors">bionest@sristiinnovations.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500 inline-block"></span>
              Locations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-3xl hover:border-emerald-500/30 transition-colors duration-300 relative group overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <MapPin size={48} className="text-emerald-400" />
                   </div>
                   <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs font-bold rounded-full mb-4 tracking-wider uppercase border border-gray-700">Office</span>
                   <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                     AES Boys Hostel Campus, Nr. Gujarat University Library, Navrangpura, Ahmedabad - 380009
                   </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-3xl hover:border-emerald-500/30 transition-colors duration-300 relative group overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <MapPin size={48} className="text-emerald-400" />
                   </div>
                   <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs font-bold rounded-full mb-4 tracking-wider uppercase border border-gray-700">Incubation</span>
                   <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                     SRISTI Innovations, Grambharti Campus, Gandhinagar-Mahudi Rd, Gujarat - 382650
                   </p>
                </div>
            </div>
          </div>

        </div>

        {/* Partners & Legal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-gray-800/60">
           
           {/* Legal & Registrations */}
           <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex gap-4">
                {[
                  { icon: FaFacebook, href: "#" },
                  { icon: FaTwitter, href: "#" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaLinkedin, href: "#" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500 font-mono">
                <p><span className="text-gray-600 mr-2">REG NO:</span>04-35923</p>
                <p><span className="text-gray-600 mr-2">GST NO:</span>24AAETS4798M1ZP</p>
              </div>
           </div>

           {/* Partners */}
           <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:justify-end gap-6">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest whitespace-nowrap">Backed By</span>
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4">
                {[
                  { name: 'Honey Bee Network', logo: honeyBeeLogo, url: 'https://honeybee.org/' },
                  { name: 'SRISTI', logo: sristiPartnerLogo, url: 'https://www.sristi.org/' },
                  { name: 'BIRAC', logo: biracLogo, url: 'https://birac.nic.in/' }
                ].map((partner, idx) => (
                  <a 
                    key={idx}
                    href={partner.url} 
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform duration-300 overflow-hidden relative"
                  >
                    <img src={partner.logo} alt={partner.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="text-white w-5 h-5" />
                    </div>
                  </a>
                ))}
              </div>
           </div>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 bg-[#040405] border-t border-gray-800/50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-light">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">SRISTI Innovations</span>. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="text-gray-500 hover:text-white transition-colors relative group">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors relative group">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
