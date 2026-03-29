import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SINGLE_PRODUCT } from '../constants';
import OrderModal from '../components/OrderModal';
import VideoSection from '../components/sections/VideoSection';
import ComparisonSection from '@/components/sections/ComparaisonSection';
import ComparisonSectionVelors from '@/components/sections/ComparaisonVelorsSection';
import CarouselSection from '@/components/sections/CarouselSection'; 
import FinalCTASection from '@/components/sections/FinalSection';
import TestimonialCarousel from '@/components/sections/TestimonialsCoursel';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const product = SINGLE_PRODUCT;
  
  // État partagé pour ouvrir la modal depuis n'importe quelle section
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Section Vidéo - Hero */}
      <VideoSection
        title="Marchez sans douleur"
        description="Découvrez les semelles Velors : le confort ultime pour vos pieds. Redécouvrez le plaisir de marcher, de vous tenir debout et de vivre sans douleurs aux pieds."
        videoUrl="/videos/velors-demo.mp4"
        buttonText="Découvrir la technologie"
        onButtonClick={handleOpenModal}
      />
      
      {/* 2. Marquee Banner (Barre défilante orange) */}
      <div className="bg-[#FF5C00] m-0 py-3 sm:py-4 overflow-hidden border-y border-white/10">
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
      
      {/* 3. Section Comparaison Avant/Après (Slider) */}
      <ComparisonSection />

      {/* 4. Section Usages (Carrousel de cartes) */}
      <CarouselSection onOpenModal={handleOpenModal} />

      {/* 5. Section Testimonials */}
      <TestimonialCarousel/>

      {/* 6. Section Tableau Comparatif (Stepprs vs Autres) */}
      <ComparisonSectionVelors />
      
      {/* 7. Section Finale de Conclusion (CTA) 
          Correction de l'erreur TS : on passe bien onOpenModal */}
      <FinalCTASection onOpenModal={handleOpenModal} />

      {/* 8. Modal de commande (Portail de sortie) */}
      <OrderModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
      
    </div>
  );
};

export default ProductDetail;