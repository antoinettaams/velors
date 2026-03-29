import React, { useState, useEffect } from 'react';
import { 
  Star, Check, Maximize2, X, Clock, ChevronRight, 
  Truck, ShieldCheck, Headphones, ChevronDown, 
  Flame, Award, Heart, Info
} from 'lucide-react';

// --- DONNÉES ---
const COLOR_VARIANTS = [
  { id: 'orange', name: 'Orange', hex: '#FF6B00', img: 'https://i.postimg.cc/bJbWCrRf/Chat-GPT-Image-24-fevr-2026-21-06-34.png' },
  { id: 'black', name: 'Noir', hex: '#1A1A1A', img: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=600' },
  { id: 'grey', name: 'Gris', hex: '#A9A9A9', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600' },
];

const SIZES = ["41 - 42", "42 - 43", "43 - 44", "44 - 45", "45 - 46",];

const FAQ_ITEMS = [
  { 
    q: "Plus petit ? Tailles intermédiaires ?", 
    a: (
      <span>
        Vous êtes plus petit que notre plus petite taille ? <strong>Commandez la plus petite taille</strong> et ajustez-la en suivant les indications au dos. 
        Entre deux tailles, choisissez toujours la <strong>taille supérieure</strong> et ajustez la coupe. Simple. Réglage. <strong>Conçue pour vous.</strong>
      </span>
    )
  },
  { 
    q: "Les Stepprs sont-ils compatibles avec mes chaussures ?", 
    a: "Oui, elles sont compatibles pour s'adapter parfaitement à votre pointure habituelle et à tout type de chaussures fermées." 
  },
  { 
    q: "Combien de temps durent les Velors ?", 
    a: (
      <span>
        Les semelles Velors sont conçues pour durer ! Avec un entretien approprié, elles vous offriront confort et soutien pendant <strong>plus de 12 mois</strong>. 
        Pour une durée de vie optimale, lavez-les simplement à la main régulièrement.
      </span>
    )
  },
  { 
    q: "Quel est le délai de livraison ?", 
    a: (
      <span>
        La livraison est effectuée <strong>24h après confirmation</strong> de votre commande. Nos équipes s'assurent que vous receviez votre colis dans les plus brefs délais.
      </span>
    )
  },
  { 
    q: "Les frais de livraison ?", 
    a: (
      <span>
        La livraison est à partir de <strong>1000 Fcfa</strong> et est assurée <strong>à 50%</strong> si et seulement si vous résidez à Cotonou et Calavi.
      </span>
    )
  },
  { 
    q: "Livraison hors zone (Cotonou & Calavi) ?", 
    a: (
        <span>
            Pour les personnes éloignées de Cotonou et Calavi, la livraison est assurée par <strong>expédition</strong>. 
            Les frais d'envoi sont très accessibles, à partir de <strong>1 000 FCFA</strong> seulement, selon votre localité.
        </span>
    )
  }
];

const ProductLanding: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(COLOR_VARIANTS[0]);
  const [activeImage, setActiveImage] = useState(COLOR_VARIANTS[0].img);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPack, setSelectedPack] = useState(2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen font-sans text-[#1A1A1A]">
      
      {/* Conteneur Principal avec Grille */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- COLONNE GAUCHE (STICKY) --- */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-8 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F5F5F5]">
                <img src={activeImage} className="w-full h-full object-cover" alt="Produit" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Best-Seller
                </div>
              </div>
              
              {/* Galerie miniatures */}
              <div className="grid grid-cols-4 gap-2">
                {COLOR_VARIANTS.map((v) => (
                  <button key={v.id} onClick={() => {setSelectedColor(v); setActiveImage(v.img)}} 
                    className={`aspect-square rounded-lg border-2 overflow-hidden ${selectedColor.id === v.id ? 'border-[#FF6B00]' : 'border-transparent'}`}>
                    <img src={v.img} className="w-full h-full object-cover" alt={v.name} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE (SCROLLABLE) --- */}
          <div className="lg:w-1/2 space-y-8">
            {/* Header Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-[#FF6B00]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold text-stone-500">Excellent 4,8 | 1171 avis</span>
              </div>
              <h1 className="text-4xl font-black mb-3 italic uppercase tracking-tighter">Semelles Velors</h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-[#FF6B00]">5000 FCFA</span>
              </div>
            </div>

            {/* Avantages Rapides */}
            <ul className="space-y-2 border-b border-stone-100 pb-6 text-sm font-bold">
              <li className="flex items-center gap-2"><Check size={16} className="text-[#FF6B00]" /> Soulagement instantané</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#FF6B00]" /> Testé cliniquement</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#FF6B00]" /> Recommandé par un podologue</li>
            </ul>

            {/* Sélecteurs (Couleur & Taille) */}
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest mb-3">Couleur: <span className="text-[#FF6B00]">{selectedColor.name}</span></p>
                <div className="flex gap-3">
                  {COLOR_VARIANTS.map((v) => (
                    <button key={v.id} onClick={() => {setSelectedColor(v); setActiveImage(v.img)}}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor.id === v.id ? 'border-black scale-110' : 'border-transparent'}`}>
                      <span className="w-8 h-8 rounded-full border border-black/5" style={{backgroundColor: v.hex}} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[10px] font-black uppercase tracking-widest">Pointure</p>
                  <button className="text-[10px] font-black underline flex items-center gap-1"><Info size={12}/> TABLEAU DES TAILLES</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {SIZES.map(s => (
                    <button key={s} onClick={() => setSelectedSize(s)} 
                      className={`py-2 text-[10px] font-black border-2 rounded transition-all ${selectedSize === s ? 'bg-black text-white border-black' : 'bg-white border-stone-200 hover:border-stone-400'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* --- OFFRES (PACKS) AVEC SÉLECTION DE COULEURS --- */}
            <div className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-black text-[#FF6B00] mb-2">
                <Clock size={14} /> L'OFFRE SE TERMINE BIENTÔT
            </div>
            {/* Packs */}
            {[
                { id: 1, qty: "1 paire", price: "5000 FCFA", originalPrice: "5000 FCFA", tag: null, savePercent: "0", discount: false },
                { id: 2, qty: "2 paires", price: "8000 FCFA", originalPrice: "10000 FCFA", tag: "LES PLUS POPULAIRES", savePercent: "20", discount: true },
            ].map((pack) => (
                <div 
                key={pack.id} 
                onClick={() => setSelectedPack(pack.id)}
                className={`relative p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                    selectedPack === pack.id 
                    ? 'border-[#FF6B00] bg-orange-50/50 shadow-md' 
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
                >
                {pack.tag && (
                    <span className="absolute -top-2 right-4 bg-black text-white text-[8px] font-black px-2 py-0.5 rounded uppercase">
                    {pack.tag}
                    </span>
                )}
                
                <div className="flex items-center gap-3">
                    {/* Radio button personnalisé */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPack === pack.id ? 'border-[#FF6B00]' : 'border-stone-300'
                    }`}>
                    {selectedPack === pack.id && <div className="w-2.5 h-2.5 bg-[#FF6B00] rounded-full" />}
                    </div>
                    
                    <div>
                    <p className="font-black text-sm">
                        {pack.qty}
                        {pack.discount && (
                        <span className="bg-[#FF6B00] text-white text-[8px] px-1.5 py-0.5 rounded ml-1 italic">
                            ÉCONOMISEZ {pack.savePercent}%
                        </span>
                        )}
                    </p>
                    <p className="text-[10px] font-bold text-stone-400">
                        Économisez {pack.id === 2 ? '2000' : pack.id === 5 ? '4000' : '0'} FCFA 
                    </p>
                    </div>
                </div>
                
                <div className="text-right">
                    <p className="font-black text-sm text-stone-900">{pack.price}</p>
                    {pack.discount && (
                    <p className="text-[10px] text-stone-400 line-through">{pack.originalPrice}</p>
                    )}
                </div>
                </div>
            ))}
            </div>

            {/* Bouton CTA */}
            <button className={`w-full py-3 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all ${selectedSize ? 'bg-[#FF6B00] text-white shadow-xl shadow-orange-200' : 'bg-stone-300 text-white cursor-not-allowed'}`}>
              {selectedSize ? "COMMANDER MAINTENANT" : "SÉLECTIONNEZ VOTRE POINTURE"}
              <ChevronRight size={20} />
            </button>

            {/* Icônes de réassurance */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-100">
              <div className="text-center space-y-2">
                <Truck className="mx-auto text-stone-400" size={24} />
                <p className="text-[9px] font-black leading-tight uppercase">Expédition suivie et assurée</p>
              </div>
              <div className="text-center space-y-2">
                <ShieldCheck className="mx-auto text-stone-400" size={24} />
                <p className="text-[9px] font-black leading-tight uppercase">Essayez sans risque pendant 90 jours</p>
              </div>
              <div className="text-center space-y-2">
                <Headphones className="mx-auto text-stone-400" size={24} />
                <p className="text-[9px] font-black leading-tight uppercase">Assistance clientèle 24h/24 et 7j/7</p>
              </div>
            </div>

            {/* --- FAQ SECTION (Accordions) --- */}
            <div className="space-y-1 pt-8">
              {FAQ_ITEMS.map((item, index) => (
                <div key={index} className="border-b border-stone-100">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full py-4 flex justify-between items-center text-left">
                    <span className="text-xs font-black uppercase tracking-wide">{item.q}</span>
                    <ChevronDown size={16} className={`transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && <div className="pb-4 text-xs font-medium text-stone-500 leading-relaxed">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    </div>
    
  );
};

export default ProductLanding;