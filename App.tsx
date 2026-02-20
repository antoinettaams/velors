import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';



/**
 * Scroll en haut à chaque changement de page
 */
const ScrollToTop = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};



/**
 * Meta Pixel Tracking
 * Track chaque PageView automatiquement
 */
const MetaPixelTracker = () => {

  const { pathname } = useLocation();

  useEffect(() => {

    // vérifie que fbq existe
    if ((window as any).fbq) {

      (window as any).fbq('track', 'PageView');

      console.log('Meta Pixel PageView:', pathname);

    }

  }, [pathname]);

  return null;
};



const App: React.FC = () => {

  return (

    <Router>

      <ScrollToTop />

      {/* Meta Pixel Tracking */}
      <MetaPixelTracker />

      <div className="flex flex-col min-h-screen font-sans antialiased bg-velors-light selection:bg-velors-orange selection:text-white">

        <Navbar />

        <main className="flex-grow">

          <Routes>

            <Route path="/" element={<Home />} />

            {/* accès direct produit */}
            <Route path="/product" element={<ProductDetail />} />

            {/* legacy */}
            <Route path="/products" element={<Products />} />

            <Route path="/products/:id" element={<ProductDetail />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>

        </main>

        <Footer />

      </div>

    </Router>

  );
};

export default App;