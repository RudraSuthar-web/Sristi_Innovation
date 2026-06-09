import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SristiHeroSlider from './components/ui/SristiHeroSlider';
import AboutUsSection from './components/landing/AboutUsSection';
import WhatWeOfferSection from './components/landing/WhatWeOfferSection';
import PromotionalBanners from './components/landing/PromotionalBanners';
import OurStartupsSection from './components/landing/OurStartupsSection';
import AboutUs from './pages/AboutUs';
import WhatWeOffer from './pages/WhatWeOffer';
import OurStartups from './pages/OurStartups';
import Incubator from './pages/Incubator';
import Contact from './pages/Contact';
import MarketAccess from './pages/MarketAccess';
import Magazines from './pages/publications/Magazines';
import Books from './pages/publications/Books';

// Placeholder Pages for Task 1
const Home = () => (
  <div>
    <SristiHeroSlider />
    <AboutUsSection />
    <WhatWeOfferSection />
    <PromotionalBanners />
    <OurStartupsSection />
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
             <Route path="/what-we-offer" element={<WhatWeOffer />} />
            <Route path="/" element={<Home />} />
            <Route path="/incubator" element={<Incubator />} />
            <Route path="/our-startups" element={<OurStartups />} />
            <Route path="/startups" element={<OurStartups />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/market-access" element={<MarketAccess />} />
            <Route path="/publications/magazines" element={<Magazines />} />
            <Route path="/publications/books" element={<Books />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
