import React, { useState, useRef } from "react";
import { Activity, Scissors, Droplets } from "lucide-react";

const ComparisonSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, percent)));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* COMPARATEUR - Le cadre principal */}
          <div className="w-full lg:w-1/2">
            <div
              ref={containerRef}
              className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 select-none touch-none border-4 border-white"
              onMouseMove={(e) => isDragging && handleMove(e.clientX)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* IMAGE "APRÈS" (Base du dessous) */}
              <img
                src="/images/aprs.jpg"
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* BADGE AFTER */}
              <div className="absolute top-4 right-4 z-10">
                 <span className="bg-[#FF6B00] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                    Après
                 </span>
              </div>

              {/* CONTENEUR "AVANT" (Caché progressivement) */}
              <div
                className="absolute inset-0 overflow-hidden border-r-2 border-black/20"
                style={{ width: `${sliderPos}%` }}
              >
                {/* L'image ici doit avoir la taille FIXE du conteneur parent */}
                <div className="relative w-[100vw] lg:w-[500px] h-full">
                    <img
                        src="/images/avat.jpg"
                        alt="Before"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ width: containerRef.current?.offsetWidth }}
                    />
                </div>

                {/* BADGE BEFORE */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                        Avant
                    </span>
                </div>
              </div>

              {/* CURSEUR DE DRAG - CORRIGÉ SANS CHANGER LA DISPOSITION */}
              <div
                className="absolute top-0 bottom-0 z-20"
                style={{ left: `${sliderPos}%` }}
              >
                {/* La ligne noire verticale - centrée sur le curseur */}
                <div className="absolute top-0 bottom-0 w-[2px] bg-black/80 -translate-x-1/2"></div>
                
                {/* Le bouton central - maintenant bien centré */}
                <div
                  onMouseDown={() => setIsDragging(true)}
                  onTouchStart={() => setIsDragging(true)}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-black rounded-full shadow-xl cursor-ew-resize flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <div className="flex gap-1">
                    <div className="w-0 h-0 border-y-[5px] border-y-transparent border-r-[7px] border-r-black"></div>
                    <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION TEXTE */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight italic">
              LA <span className="text-[#FF6B00]">DIFFÉRENCE VELORS</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              Vivez vous-même cette transformation et entrez dès aujourd'hui dans un avenir sans douleur.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <Feature
            icon={<Activity className="text-[#FF6B00]" />}
            title="Améliorer la posture"
            desc="Un bon soutien de la voûte plantaire favorise un meilleur alignement de la colonne vertébrale."
          />
          <Feature
            icon={<Activity className="text-[#FF6B00]" />}
            title="Meilleures performances"
            desc="Ajoute un effet de ressort à chaque pas, facilitant ainsi la marche et la course."
          />
          <Feature
            icon={<Scissors className="text-[#FF6B00]" />}
            title="Taille ajustable"
            desc="Il suffit de découper le long de la ligne pointillée avec des ciseaux."
          />
          <Feature
            icon={<Droplets className="text-[#FF6B00]" />}
            title="Lavable"
            desc="Nettoyage simple à l'eau et savon."
          />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }: any) => (
  <div className="text-center">
    <div className="mb-3 flex justify-center">{icon}</div>
    <h3 className="font-bold">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

export default ComparisonSection;