import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SristiHeroSlider from './components/ui/SristiHeroSlider';
import AboutUsSection from './components/landing/AboutUsSection';
import WhatWeOfferSection from './components/landing/WhatWeOfferSection';
import PromotionalBanners from './components/landing/PromotionalBanners';
import AboutUs from './pages/AboutUs';
import WhatWeOffer from './pages/WhatWeOffer';

// Placeholder Pages for Task 1
const Home = () => (
  <div>
    <SristiHeroSlider />
    <AboutUsSection />
    <WhatWeOfferSection />
    <PromotionalBanners />
  </div>
);
const Incubator = () => <div className="min-h-[70vh] flex items-center justify-center text-4xl font-bold text-gray-800">Incubator Page</div>;
const Contact = () => <div className="min-h-[70vh] flex items-center justify-center text-4xl font-bold text-gray-800">Contact Page</div>;

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
            <Route path="/incubator" element={<Incubator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
