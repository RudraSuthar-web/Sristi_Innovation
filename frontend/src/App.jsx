import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SristiHeroSlider from './components/ui/SristiHeroSlider';
import AboutUsSection from './components/landing/AboutUsSection';
import WhatWeOfferSection from './components/landing/WhatWeOfferSection';
import PromotionalBanners from './components/landing/PromotionalBanners';
import OurStartupsSection from './components/landing/OurStartupsSection';
import WhyChooseUsSection from './components/landing/WhyChooseUsSection';
import AboutUs from './pages/AboutUs';
import WhatWeOffer from './pages/WhatWeOffer';
import OurStartups from './pages/OurStartups';
import Incubator from './pages/Incubator';
import Contact from './pages/Contact';

import Books from './pages/publications/Books';
import Magazines from './pages/publications/Magazines';

// New specialized market access pages
import KhedutHaat from './pages/KhedutHaat';
import KhedutHaatDetails from './pages/KhedutHaatDetails';
import Sattvik from './pages/Sattvik';
import Networking from './pages/Networking';
import Incubatees from './pages/Incubatees';
import Resources from './pages/Resources';
import GrowthMeet from './pages/GrowthMeet';
import GrowthMeetGallery from './pages/GrowthMeetGallery';
// Imported Products and Technology Page
import ProductsAndTechnology from './pages/ProductsAndTechnology';
import ProductDetail from './pages/ProductDetail';
import Career from './pages/Career';
import InquiryPage from './pages/inquiry_page';

// Inline Scroll Restorer Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snaps window scroll coordinates to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Placeholder Pages for Task 1
const Home = () => (
  <div>
    <SristiHeroSlider />
    <AboutUsSection />
    <WhatWeOfferSection />
    <PromotionalBanners />
    <OurStartupsSection />
    <WhyChooseUsSection />
  </div>
);

function App() {
  return (
    <Router>
      {/* Scroll to top wrapper added here to intercept route changes */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/what-we-offer" element={<WhatWeOffer />} />
            <Route path="/incubator" element={<Incubator />} />
            <Route path="/our-startups" element={<OurStartups />} />
            <Route path="/startups" element={<OurStartups />} />
            
            {/* Products and Technology Route Registration */}
            <Route path="/products-technology" element={<ProductsAndTechnology />} />
            <Route path="/products-technology/:id" element={<ProductDetail />} />

            <Route path="/publications/magazines" element={<Magazines />} />
            <Route path="/publications/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Split Market Access Routes */}
            <Route path="/khedut-haat" element={<KhedutHaat />} />
            <Route path="/khedut-haat-details" element={<KhedutHaatDetails />} />
            <Route path="/sattvik" element={<Sattvik />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/incubatees" element={<Incubatees />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/growth-meet" element={<GrowthMeet />} />
            <Route path="/growth-meet-gallery" element={<GrowthMeetGallery />} />
            <Route path="/career" element={<Career />} />
            <Route path="/inquiry" element={<InquiryPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;