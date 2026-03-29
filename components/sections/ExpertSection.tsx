import React from 'react';
import { Quote, Star } from 'lucide-react';

const ExpertSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white antialiased">
      <div className="max-w-[500px] mx-auto">
        
        {/* TITRE DE LA SECTION (Optionnel, selon ton layout) */}
        <h2 className="text-3xl font-black uppercase text-center leading-tight mb-12 tracking-tighter">
          Découvrez pourquoi <span className="text-[#FF6B00]">les experts recommandent</span> Velors
        </h2>

        {/* CARTE DE L'EXPERT (Même style que les témoignages) */}
        <div className="flex flex-col rounded-[2.5rem] overflow-hidden bg-[#F8F8F8] shadow-sm border border-stone-100">
          
          {/* PARTIE IMAGE (HAUT) */}
          <div className="relative w-full aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=600" 
              alt="Dr Thomas Schneider" 
              className="w-full h-full object-cover"
            />
            {/* BADGE QUOTE ORANGE À L'INTERSECTION */}
            <div className="absolute -bottom-6 right-6 bg-[#FF6B00] p-4 rounded-full text-white shadow-lg z-10">
              <Quote size={24} fill="currentColor" />
            </div>
          </div>

          {/* PARTIE TEXTE (BAS) */}
          <div className="p-8 pt-10 text-center space-y-5">
            {/* ÉTOILES DE NOTATION */}
            <div className="flex justify-center gap-1 text-[#FF6B00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            {/* RÔLE/TITRE */}
            <p className="font-black uppercase text-xs tracking-tight text-[#1A1A1A]">
              Secours ciblé — Podologue
            </p>

            {/* TEXTE DE RECOMMANDATION */}
            <p className="text-sm font-medium text-stone-500 leading-relaxed italic">
              "En tant que podologue forte d'une longue expérience dans le traitement de pathologies telles que les pieds plats et la fasciite plantaire, je recommande les semelles Velors. Leur conception unique offre un soutien ciblé à la voûte plantaire, contribuant à une répartition uniforme de la pression."
            </p>

            {/* NOM DE L'EXPERT (STYLE SIGNATURE) */}
            <p className="font-black text-[#FF6B00] uppercase text-[10px] tracking-widest pt-2">
              Dr Thomas Schneider
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExpertSection;