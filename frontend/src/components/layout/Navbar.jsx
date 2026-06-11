import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import sristiLogo from '../../assets/Sristi-innovation-logo.jpg';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about' },
  { name: 'What We Offer', path: '/what-we-offer' },
  { name: 'Our Startups', path: '/our-startups' },
  { name: 'Products', path: '/products-technology' }, // Updated to match App.jsx path perfectly
  {
    name: 'Publications',
    isDropdown: true,
    path: '/publications', // fallback path for active state check
    children: [
      { name: 'Magazines', path: '/publications/magazines' },
      { name: 'Books', path: '/publications/books' },
    ],
  },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pubDropdownOpen, setPubDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Base classes for the animated underline hover effect
  const activeLinkClasses = "relative text-emerald-700 font-semibold after:w-full after:bg-emerald-700";
  const inactiveLinkClasses = "relative text-gray-700 hover:text-emerald-700 font-medium after:w-0 hover:after:w-full after:bg-emerald-700";
  const baseLinkClasses = "transition-colors duration-300 py-2 after:content-[''] after:absolute after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300";

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={sristiLogo} 
                alt="SRISTI Innovation" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.isDropdown) {
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <div 
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setPubDropdownOpen(true)}
                    onMouseLeave={() => setPubDropdownOpen(false)}
                  >
                    <button 
                      className={`flex items-center gap-1 focus:outline-none ${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                      aria-expanded={pubDropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${pubDropdownOpen ? 'rotate-180 text-emerald-700' : 'text-gray-400 group-hover:text-emerald-700'}`}
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute left-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl transition-all duration-300 origin-top-left ${
                        pubDropdownOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'
                      }`}
                    >
                      <div className="py-3 flex flex-col">
                        {item.children.map(child => (
                          <NavLink
                            key={child.name}
                            to={child.path}
                            className={({ isActive }) => 
                              `px-5 py-2.5 text-sm transition-all duration-200 flex items-center ${
                                isActive 
                                  ? 'bg-emerald-50/80 text-emerald-700 font-semibold border-l-2 border-emerald-500' 
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-700 hover:pl-6 border-l-2 border-transparent'
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 hover:text-emerald-700 focus:outline-none transition-colors duration-300 p-2.5 rounded-xl hover:bg-gray-100/80 backdrop-blur-sm"
              aria-label="Open menu"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 xl:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Side Panel */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[85vw] sm:w-[420px] bg-white/95 backdrop-blur-xl z-[110] transform transition-all duration-500 ease-out flex flex-col xl:hidden ${
          isOpen ? 'translate-x-0 shadow-2xl opacity-100' : 'translate-x-[100%] shadow-none opacity-0 pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100/50">
          <img 
            src={sristiLogo} 
            alt="SRISTI Innovation" 
            className="h-10 w-auto" 
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-emerald-700 p-2.5 rounded-full hover:bg-emerald-50 transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Drawer Drawer Body (Links) */}
        <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
          <div className="flex flex-col space-y-7">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.name} className="flex flex-col border-b border-gray-100/50 pb-5">
                    <button 
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between text-xl font-medium text-gray-800 hover:text-emerald-700 transition-colors w-full focus:outline-none"
                    >
                      {item.name}
                      <ChevronDown 
                        size={24} 
                        className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180 text-emerald-700' : 'text-gray-400'}`}
                      />
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        mobileDropdownOpen ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden flex flex-col space-y-4 pl-5 border-l-2 border-emerald-100/50">
                        {item.children.map(child => (
                          <NavLink
                            key={child.name}
                            to={child.path}
                            className={({ isActive }) => 
                              `block w-full text-lg transition-colors duration-200 py-1 ${
                                isActive ? 'text-emerald-700 font-semibold' : 'text-gray-600 hover:text-emerald-700'
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `block w-full text-xl font-medium transition-colors duration-200 border-b border-gray-100/50 pb-5 ${
                      isActive ? 'text-emerald-700' : 'text-gray-800 hover:text-emerald-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
        
        {/* Drawer Footer */}
        <div className="p-6 bg-gray-50/80 border-t border-gray-100/50 mt-auto">
          <p className="text-sm text-gray-500 font-medium">
            Empowering grassroots innovators.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;