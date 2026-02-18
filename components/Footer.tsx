import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Music, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-3xl text-white tracking-tighter">VELORS<span className="text-velors-orange">.</span></span>
            <p className="mt-4 text-stone-400 max-w-sm text-sm leading-relaxed">
              Velors réinvente le confort urbain. Des semelles conçues avec passion pour ceux qui battent le pavé chaque jour. Qualité, style et ergonomie.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-base hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/products" className="text-base hover:text-white transition-colors">Boutique</Link></li>
              <li><Link to="/contact" className="text-base hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

<div>
  <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
    Nous trouver
  </h3>

  <ul className="space-y-3">
    <li className="flex items-start">
      <MapPin size={18} className="mt-1 mr-2 text-velors-orange" />
      <span>Bénin, Cotonou</span>
    </li>

    <li className="flex items-center">
      <MessageCircle size={18} className="mr-2 text-velors-orange" />
      <a
        href="https://wa.me/22997000000"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors cursor-pointer"
      >
        +229 93 36 19 42
      </a>
    </li>
  </ul>
</div>

      </div>
      </div>
    </footer>
  );
};

export default Footer;