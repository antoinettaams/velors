import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 1. DÉFINITION DE L'INTERFACE POUR LES PROPS
interface CarouselProps {
  onOpenModal: () => void;
}

// Dupliquer les cartes pour créer un effet infini
const usageCards = [
  { id: 1, title: 'Postes de travail', imageUrl: 'https://i.postimg.cc/053P1Gxw/665898031-1647254329643255-5309178860054808430-n.webp', glowColor: 'rgba(255,120,0,0.9)' },
  { id: 2, title: 'Style de vie', imageUrl: 'https://i.postimg.cc/tTkQcPkn/662084347-2692512364467537-7490944779117986740-n.webp', glowColor: 'rgba(255,80,0,0.7)' },
  { id: 3, title: 'Sociale', imageUrl: 'https://i.postimg.cc/k4LSS6rN/661644441-1369797751850721-8174586990885247932-n.webp', glowColor: 'rgba(255,100,0,1)' },
  { id: 4, title: 'Sur site', imageUrl: 'https://i.postimg.cc/Dzdw2S6x/664437999-916186851391532-5458278990274238567-n.webp', glowColor: 'rgba(255,120,0,0.9)' },
  { id: 5, title: 'Sauver', imageUrl: 'https://i.postimg.cc/vBHScK7c/661636495-1424058906186076-154110076840324672-n.webp', glowColor: 'rgba(255,80,0,0.6)' },
  { id: 6, title: 'Athlète', imageUrl: 'https://i.postimg.cc/jSHfBdpJ/664799321-877917955301805-4585676320509929209-n.webp', glowColor: 'rgba(255,80,0,0.6)' },
  { id: 7, title: 'Aventure', imageUrl: 'https://i.postimg.cc/ZnPcHFxF/664264886-2793836417628340-4833787593156512785-n.webp', glowColor: 'rgba(255,80,0,0.6)' },
];

// Créer un tableau étendu pour l'effet infini (3x les cartes)
const infiniteCards = [...usageCards, ...usageCards, ...usageCards];

const stats = [
  {
    percentage: 95,
    title: "Réduction des douleurs aux pieds",
    description: "Le soutien de la voûte plantaire et l'amorti contribuent significativement à soulager les douleurs aux pieds."
  },
  {
    percentage: 94,
    title: "Confort amélioré",
    description: "Un confort à chaque pas, minimisant la fatigue et l'inconfort."
  },
  {
    percentage: 90,
    title: "Réduire les risques de blessure",
    description: "L'amorti et le soutien contribuent à réduire les risques de blessures aux pieds."
  }
];

// 2. AJOUT DE LA PROP DANS LE COMPOSANT
const CarouselSection: React.FC<CarouselProps> = ({ onOpenModal }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isResettingRef = useRef(false);

  const [isHovered, setIsHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  const handleScrollUpdate = () => {
    if (carouselRef.current && !isResettingRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

      // Calculer l'index actuel pour les dots (basé sur la position dans le carrousel)
      const cardWidth = carouselRef.current.querySelector('div')?.clientWidth || 300;
      const gap = 24;
      const cardFullWidth = cardWidth + gap;
      const rawIndex = (scrollLeft / cardFullWidth) % usageCards.length;
      const dotIndex = Math.floor(rawIndex);
      setActiveDot(dotIndex >= 0 && dotIndex < usageCards.length ? dotIndex : 0);
    }
  };

  // Gestion du défilement infini
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleInfiniteScroll = () => {
      if (isResettingRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      const cardWidth = carousel.querySelector('div')?.clientWidth || 300;
      const gap = 24;
      const cardFullWidth = cardWidth + gap;
      const totalCardsWidth = usageCards.length * cardFullWidth;

      // Si on est trop à droite, revenir au début de la copie centrale
      if (scrollLeft >= totalCardsWidth * 2) {
        isResettingRef.current = true;
        carousel.scrollTo({ left: scrollLeft - totalCardsWidth, behavior: 'instant' });
        isResettingRef.current = false;
      }
      // Si on est trop à gauche, aller à la fin de la copie centrale
      else if (scrollLeft < totalCardsWidth) {
        isResettingRef.current = true;
        carousel.scrollTo({ left: scrollLeft + totalCardsWidth, behavior: 'instant' });
        isResettingRef.current = false;
      }
    };

    carousel.addEventListener('scroll', handleInfiniteScroll);
    carousel.addEventListener('scroll', handleScrollUpdate);
    handleScrollUpdate();
    
    // Initialiser la position au milieu (copie centrale)
    const totalCardsWidth = usageCards.length * (carousel.querySelector('div')?.clientWidth || 300 + 24);
    carousel.scrollTo({ left: totalCardsWidth, behavior: 'instant' });

    return () => {
      carousel.removeEventListener('scroll', handleInfiniteScroll);
      carousel.removeEventListener('scroll', handleScrollUpdate);
    };
  }, []);

  // Défilement automatique infini
  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      if (carouselRef.current && !isResettingRef.current) {
        const firstCard = carouselRef.current.querySelector('div');
        const cardWidth = firstCard?.clientWidth || 300;
        const gap = 24;
        
        carouselRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      }
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.querySelector('div');
      const cardWidth = firstCard?.clientWidth || 300;
      const gap = 24;
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* SECTION CARROUSEL */}
      <section className="py-20">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-950 mb-16">
            Conçu pour <span className="text-orange-500">tous les usages</span>
          </h2>

          <div 
            className="relative group px-1 sm:px-4 lg:px-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 lg:left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-xl transition ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <ChevronLeft />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-8"
              style={{ scrollbarWidth: 'none' }}
            >
              {infiniteCards.map((card, index) => (
                <div key={`${card.id}-${index}`} className="flex-none w-[80vw] sm:w-[50vw] md:w-[33.3vw] lg:w-[20.8vw] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg relative group">
                  <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-16 rounded-full blur-[15px]" style={{ backgroundColor: card.glowColor }} />
                  <div className="absolute bottom-0 w-full bg-black text-white py-2 text-center font-bold uppercase tracking-wider">{card.title}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 lg:right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-xl transition ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <ChevronRight />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {usageCards.map((_, index) => (
              <div key={index} className={`w-2.5 h-2.5 rounded-full transition-all ${activeDot === index ? 'bg-orange-500 scale-125' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION RÉDUITE : L'AVENIR EST SANS DOULEURS */}
      <section className="py-12 px-4 md:px-8 bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                  L'avenir est <span className="text-orange-500">sans<br />douleurs aux pieds</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                  {stats.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-0">
                      <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="28" cy="28" r="25" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-gray-100" />
                            <circle
                            cx="28" cy="28" r="25" stroke="#f97316" strokeWidth="4" fill="transparent"
                            strokeDasharray={157}
                            strokeDashoffset={157 - (157 * item.percentage) / 100}
                            strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-gray-900">
                            {item.percentage}%
                        </span>
                      </div>

                      <div className="flex-1 pt-1">
                        <p className="text-gray-900 leading-snug text-sm md:text-base">
                            <span className="font-black uppercase text-xs tracking-tighter">{item.title} :</span> {item.description}
                        </p>
                      </div>
                  </div>
                  ))}
              </div>

              <div className="space-y-4">
                  <div className="flex justify-center lg:justify-start">
                    <button 
                      onClick={onOpenModal} 
                      className="bg-orange-500 hover:bg-orange-600 text-white font-black py-3 px-8 rounded-lg text-base tracking-tighter uppercase transition-all transform hover:scale-105 shadow-md"
                    >
                        Commander Velors
                    </button>
                  </div>
              </div>
            </div>
        </div>
      </section>
      
      {/* BANNIÈRE MARQUEE */}
      <div className="bg-orange-500 py-3 sm:py-4 overflow-hidden mt-8">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex gap-4 sm:gap-8 text-white font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base">
            <span>⚡ Livraison Rapide & Paiement à la livraison ⚡</span>
            <span>★ Garantie Confort 30 Jours ★</span>
            <span>⚡ Design Ergonomique Breveté ⚡</span>
            <span>★ Compatible Toutes Marques ★</span>
          </div>
          <div className="flex gap-4 sm:gap-8 text-white font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base ml-4 sm:ml-8">
            <span>⚡ Livraison Rapide & Paiement à la livraison ⚡</span>
            <span>★ Garantie Confort 30 Jours ★</span>
            <span>⚡ Design Ergonomique Breveté ⚡</span>
            <span>★ Compatible Toutes Marques ★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;