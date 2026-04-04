import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Gino",
    role: "Ouvrier du bâtiment",
    text: "Je passe mes journées sur un sol en béton avec des chaussures de sécurité à embout d'acier. Les Velors offrent un excellent amorti et un bon maintien, réduisant ainsi l'impact sur mes pieds et mes articulations. Je suis vraiment impressionné par leur efficacité. J'en ai parlé à tous mes collègues sur le chantier.",
    rating: 5
  },
  {
    id: 2,
    name: "Lynda",
    role: "Infirmière hospitalière",
    text: "Infirmière de profession à Cotonou, je suis debout toute la journée. Dès que je les ai enfilées, j'ai senti la différence. Le soutien de la voûte plantaire est excellent et m'apporte un soulagement bienvenu après mes gardes de 12 heures. L'amorti est parfait pour absorber les chocs.",
    rating: 5
  },
  {
    id: 3,
    name: "Koffi",
    role: "Livreur à moto (Zémidjan)",
    text: "Conducteur de taxi-moto, mes pieds sont constamment sollicités pour stabiliser la moto. Avec ces semelles, je ne ressens plus la fatigue au niveau des talons le soir en rentrant à chez moi. C'est un investissement que chaque conducteur devrait faire pour sa santé.",
    rating: 5
  },
  {
    id: 4,
    name: "Awa",
    role: "Commerçante au Marché Dantokpa",
    text: "Je marche énormément pour gérer mes stocks et servir mes clients. Avant, mes pieds brûlaient en fin de journée. Depuis que j'utilise les semelles Velors dans mes chaussures fermées, je me sens légère. On dirait que je marche sur un tapis de mousse toute la journée !",
    rating: 5
  },
  {
    id: 5,
    name: "Ousmane",
    role: "Agent de sécurité",
    text: "La station debout prolongée était un calvaire pour moi. Ces semelles ont changé ma vie professionnelle. Je n'ai plus ces douleurs lancinantes dans le bas du dos et mes pieds respirent mieux, même après une longue nuit de service.",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mise à jour de l'index actif lors du scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        
        {/* TITRE DE LA SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Ils ont dit <span className="text-[#FF5C00]">Adieu aux douleurs</span>
          </h2>
          <p className="text-gray-500 mt-4 font-medium">Découvrez pourquoi des milliers de Béninois font confiance à Velors.</p>
        </div>
        
        {/* Boutons de Navigation Desktop */}
        <div className="hidden md:block">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-[60%] -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl hover:bg-orange-50 transition-all border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-[60%] -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl hover:bg-orange-50 transition-all border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Container du Scroll */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 px-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="flex-none w-[85vw] md:w-[400px] snap-center bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col transition-transform duration-300 hover:translate-y-[-5px]"
            >
              {/* Contenu Texte */}
              <div className="p-8 pt-10 flex-1 flex flex-col">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-[#FFB800] text-xl">★</span>
                  ))}
                </div>

                <h3 className="text-center font-black text-gray-900 text-lg mb-4">
                  {item.role}
                </h3>

                <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed mb-8 flex-1 italic">
                  "{item.text}"
                </p>

                <div className="text-center border-t border-gray-50 pt-4">
                  <span className="text-[#FF5C00] font-bold text-sm uppercase tracking-widest">{item.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots Dynamiques */}
        <div className="flex justify-center gap-3 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const target = scrollRef.current;
                if (target) {
                  target.scrollTo({ left: i * (target.clientWidth), behavior: 'smooth' });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-[#FF5C00] w-8' : 'bg-gray-300 w-2'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;