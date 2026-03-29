import React, { useState, useRef } from "react";
import { ArrowLeftRight, Activity, Scissors, Droplets } from "lucide-react";

const ComparisonSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* COMPARATEUR */}
          <div className="w-full lg:w-1/2">
            <div
              ref={containerRef}
              className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl select-none"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              {/* APRÈS */}
              <img
                src="/images/aprs.png"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute top-4 right-4 bg-[#FF6B00] text-white px-3 py-1 text-sm rounded-md font-bold">
                Après
              </div>

              {/* AVANT */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/images/avnt.png"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm rounded-md font-bold">
                  Avant
                </div>
              </div>

              {/* BARRE */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white"
                style={{ left: `${sliderPos}%` }}
              />

              {/* CURSEUR AVEC FLÈCHES */}
              <div
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-ew-resize"
                style={{ left: `${sliderPos}%` }}
              >
                <ArrowLeftRight className="text-gray-700" size={20} />
              </div>
            </div>
          </div>

          {/* TEXTE */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">
              La <span className="text-[#FF6B00]">différence Velors</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Vivez vous-même cette transformation et entrez dès aujourd'hui
              dans un avenir plus radieux et sans douleur.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 ">
          <Feature
            icon={<Activity className="text-[#FF6B00]" />}
            title="Améliorer la posture"
            desc="Un bon soutien de la voûte plantaire favorise un meilleur alignement de la colonne vertébrale."
          />
          <Feature
            icon={<Activity className="text-[#FF6B00]" />}
            title="Meilleures performances"
            desc="Ajoute un effet de ressort à chaque pas , facilitant ainsi la marche et la course."
          />
          <Feature
            icon={<Scissors className="text-[#FF6B00]" />}
            title="Taille ajustable"
            desc="Il suffit de découper le long de la ligne pointillée avec des ciseaux."
          />
          <Feature
            icon={<Droplets className="text-[#FF6B00]" />}
            title="Lavable"
            desc="Nettoyage simple à l’eau et savon."
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