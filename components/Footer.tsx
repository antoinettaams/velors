import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-2xl sm:text-3xl text-white tracking-tighter">
              VELORS<span className="text-velors-orange">.</span>
            </span>
            <p className="mt-4 text-stone-400 max-w-sm text-sm sm:text-base leading-relaxed">
              Velors réinvente le confort urbain. Des semelles conçues avec passion pour ceux 
              qui battent le pavé chaque jour. Qualité, style et ergonomie.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/product" 
                  className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Nous trouver
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {/* Address */}
              <li className="flex items-start group">
                <MapPin size={18} className="mt-1 mr-3 text-velors-orange flex-shrink-0" />
                <span className="text-sm sm:text-base text-stone-400 group-hover:text-white transition-colors">
                  Bénin, Cotonou
                </span>
              </li>

              {/* WhatsApp - Updated with proper number */}
              <li className="flex items-center group">
                <MessageCircle size={18} className="mr-3 text-velors-orange flex-shrink-0" />
                <a
                  href="https://wa.me/22993361942" // Format international sans espaces ni +
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors hover:underline underline-offset-2 cursor-pointer"
                >
                  +229 93 36 19 42
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-4 pt-4 border-t border-stone-800">
              <p className="text-xs sm:text-sm text-stone-500">
                📞 Disponible 7j/7 de 9h à 19h
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;