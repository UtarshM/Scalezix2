import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebDevelopment from './pages/services/WebDevelopment';
import EcommerceSolutions from './pages/services/EcommerceSolutions';
import CloudServices from './pages/services/CloudServices';
import AIConsulting from './pages/services/AIConsulting';
import AIDevelopment from './pages/services/AIDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/ai-development" element={<AIDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;