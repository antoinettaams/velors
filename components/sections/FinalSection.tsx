import React from 'react';
import { Link } from 'react-router-dom';
const FinalCTASection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-12 px-4 bg-white"> {/* py-24 -> py-12 */}
      <div className="max-w-3xl mx-auto text-center space-y-6"> {/* max-w-4xl -> 3xl, space-y-10 -> 6 */}
        
        {/* TITRE : Taille réduite */}
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
          Prenez soin de vos pieds <span className="text-[#FF5C00]">dès aujourd'hui !</span>
        </h2>

        {/* PARAGRAPHE : Taille réduite et max-width resserré */}
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Que vous soyez un professionnel occupé ou un athlète repoussant vos limites, 
          nos semelles offrent un soutien et un soulagement inégalés.
        </p>

        {/* CONTENEUR DES BOUTONS : Plus compact */}
        <div className="flex flex-col items-center gap-3 pt-2"> {/* gap-4 -> 3, pt-6 -> 2 */}
          
          {/* BOUTON 1 : Hauteur réduite (py-4) */}
          <button
            onClick={onOpenModal}
            className="w-full max-w-xs bg-[#FF5C00] hover:bg-[#e65300] text-white font-black py-3 px-4 rounded-lg text-base tracking-widest uppercase transition-all duration-300 transform hover:scale-[1.02] shadow-md active:scale-95"
          >
            Commander Velors
          </button>

          {/* BOUTON 2 : Hauteur réduite et texte plus fin */}
          <Link
            to="/contact" // Remplace par le chemin exact de ta page contact
            className="w-full max-w-xs bg-white border-2 border-[#FF5C00] text-[#FF5C00] font-black py-3 px-4 rounded-lg text-base tracking-widest uppercase transition-all duration-300 hover:bg-orange-50 active:scale-95 text-center flex items-center justify-center"
          >   
            BESOIN D'AIDE ?
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;