import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonVelorsSection = () => {
  const features = [
    { name: "Amortissement", stepprs: true, others: false },
    { name: "Respirant", stepprs: true, others: false },
    { name: "Soulagement instantané", stepprs: true, others: false },
    { name: "Soutien de la voûte plantaire", stepprs: true, others: false },
    { name: "Amortissement des chocs", stepprs: true, others: false },
    { name: "Élimination des mauvaises odeurs", stepprs: true, others: false },
    { name: "Coûts $$$", stepprs: false, others: true },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXTE DE GAUCHE */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Qu'est-ce qui rend<br />
            Velors si <span className="text-orange-500">spécial ?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
            Nous avons à cœur votre confort et votre satisfaction. 
            Nous nous efforçons d'améliorer votre quotidien.
          </p>
        </div>

        {/* TABLEAU DE COMPARAISON */}
        <div className="relative">
          {/* Badges d'en-tête */}
          <div className="flex justify-end pr-4 mb-3 gap-10 md:gap-16">
            <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-bold tracking-tighter">
              Velors.
            </div>
            <div className="text-gray-900 font-bold text-sm md:text-base pr-4">
              Autres
            </div>
          </div>

          {/* Corps du Tableau */}
          <div className="flex bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
            
            {/* Colonne de Gauche Orange */}
            <div className="bg-[#FF5C00] w-7/12 flex flex-col">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="h-14 md:h-16 flex items-center justify-center text-center px-4 text-white font-bold text-xs md:text-base border-b border-white/10 last:border-0"
                >
                  {feature.name}
                </div>
              ))}
            </div>

            {/* Colonnes de Résultats (Icones) */}
            <div className="w-5/12 grid grid-cols-2">
              {/* Colonne Stepprs */}
              <div className="flex flex-col border-r border-gray-50">
                {features.map((feature, index) => (
                  <div key={index} className="h-14 md:h-16 flex items-center justify-center border-b border-gray-50 last:border-0">
                    {feature.stepprs ? (
                      <Check className="text-green-500 w-5 h-5 md:w-6 md:h-6 stroke-[4px]" />
                    ) : (
                      <X className="text-gray-400 w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Colonne Autres */}
              <div className="flex flex-col">
                {features.map((feature, index) => (
                  <div key={index} className="h-14 md:h-16 flex items-center justify-center border-b border-gray-50 last:border-0">
                    {feature.others ? (
                      <Check className="text-green-500 w-5 h-5 md:w-6 md:h-6 stroke-[4px]" />
                    ) : (
                      <X className="text-gray-900 w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonVelorsSection;