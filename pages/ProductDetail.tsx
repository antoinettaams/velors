import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SINGLE_PRODUCT } from '../constants';
import { 
  ArrowLeft, 
  Truck, 
  Shield, 
  Star, 
  CheckCircle, 
  Package, 
  Layers,  
  Activity, 
  Wind, 
  TrendingUp, 
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import OrderModal from '../components/OrderModal';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const product = SINGLE_PRODUCT; 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(product.imageUrl);
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Référence pour le conteneur de défilement
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fonction pour faire défiler vers la gauche
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Fonction pour faire défiler vers la droite
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Toutes les images (principale + détails)
  const allImages = [product.imageUrl, ...product.detailImages];

  // Synchroniser le défilement avec l'image active
  useEffect(() => {
    if (scrollContainerRef.current && activeImage) {
      const activeIndex = allImages.findIndex(img => img === activeImage);
      if (activeIndex !== -1) {
        const scrollAmount = activeIndex * 112; // 112 = largeur (96px) + gap (16px)
        scrollContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, [activeImage]);

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* Modal de zoom d'image */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 text-white hover:text-velors-orange transition-colors z-10"
          >
            <X size={32} />
          </button>
          <img 
            src={activeImage} 
            alt={product.name}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Breadcrumb / Back - sticky */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Retour à l'accueil
            </button>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16">
          
          {/* Images Section avec carrousel - Version responsive */}
          <div className="space-y-4 sm:space-y-6">
            {/* Image principale avec bouton zoom */}
            <div className="relative group">
              <div className="aspect-square w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-white relative shadow-lg border border-stone-100">
                <img 
                  src={activeImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-velors-orange text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                  Best-Seller
                </div>
                <button
                  onClick={() => setIsZoomed(true)}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Zoomer l'image"
                >
                  <Maximize2 size={18} className="text-stone-700" />
                </button>
              </div>
            </div>

            {/* Carrousel des miniatures avec boutons de défilement - Mobile friendly */}
            <div className="relative group">
              {/* Bouton gauche - caché sur mobile si pas assez d'images */}
              {allImages.length > 4 && (
                <button 
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-velors-orange hover:text-white"
                >
                  <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                </button>
              )}

              {/* Conteneur défilant - scrollable sur mobile */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2 px-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {allImages.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(img)} 
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === img 
                        ? 'border-velors-orange ring-2 ring-velors-orange/20 scale-95' 
                        : 'border-transparent hover:border-stone-300'
                    }`}
                  >
                    <img src={img} alt={`Vue ${idx + 1}`} className="w-full h-full object-cover"/>
                  </button>
                ))}
              </div>

              {/* Bouton droit - caché sur mobile si pas assez d'images */}
              {allImages.length > 4 && (
                <button 
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-velors-orange hover:text-white"
                >
                  <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

            {/* Indicateur de position - visible sur mobile */}
            <div className="flex justify-center gap-1.5 mt-2">
              {allImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(allImages[idx])}
                  className={`transition-all ${
                    activeImage === allImages[idx] 
                      ? 'w-4 sm:w-6 h-1.5 sm:h-2 bg-velors-orange rounded-full' 
                      : 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-stone-300 rounded-full hover:bg-stone-400'
                  }`}
                  aria-label={`Voir l'image ${idx + 1}`}
                />
              ))}
            </div>

            {/* Reassurance Box - visible sur tous les écrans */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-8">
                <div className="bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-stone-100 flex items-center gap-2 sm:gap-3">
                    <div className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-700">
                      <Truck size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="text-xs sm:text-sm">
                        <p className="font-bold text-stone-900">Livraison</p>
                        <p className="text-stone-500">14 jours au plus</p>
                    </div>
                </div>
                <div className="bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-stone-100 flex items-center gap-2 sm:gap-3">
                    <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full text-blue-700">
                      <Shield size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="text-xs sm:text-sm">
                        <p className="font-bold text-stone-900">Garantie</p>
                        <p className="text-stone-500">30 jours</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Product Sales Copy - Version responsive */}
          <div className="flex flex-col">
            <div className="mb-2">
                <span className="text-xs sm:text-sm text-stone-500 font-medium tracking-wide uppercase">
                  Technologie Ergonomique
                </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-3 sm:mb-4">
              {product.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-2xl sm:text-3xl font-bold text-velors-orange">
                  {product.price.toLocaleString()} FCFA
                </div>
                <div className="h-4 w-px bg-stone-300 hidden sm:block"></div>
                <div className="flex items-center gap-1 sm:gap-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                        ))}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-stone-600 underline cursor-pointer hover:text-stone-900">
                      124 avis
                    </span>
                </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed mb-6 sm:mb-8">
              {product.description}
            </p>

            <p className="text-sm sm:text-base text-stone-600 mb-6 sm:mb-8 italic border-l-4 border-velors-orange pl-4">
              Oubliez la sensation de pieds lourds. La Velors Signature est la seule semelle qui s'adapte à votre morphologie unique pour un soutien millimétré.
            </p>

            {/* Caractéristiques */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-stone-100 shadow-sm mb-6 sm:mb-8">
               <h3 className="font-bold text-stone-900 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                   <Package size={18} className="sm:w-5 sm:h-5 text-velors-orange" />
                   Caractéristiques Premium :
               </h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-y-3 sm:gap-x-4">
                  {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-stone-700">
                          <CheckCircle size={14} className="sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                      </li>
                  ))}
               </ul>
            </div>

            {/* Stock et CTA */}
            <div className="mt-auto">
                <div className="p-3 sm:p-4 bg-orange-50 rounded-lg sm:rounded-xl border border-orange-100 mb-4 sm:mb-6 text-xs sm:text-sm text-orange-800 flex items-center gap-2 sm:gap-3">
                    <Zap size={16} className="sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
                    <span><strong>Stock limité :</strong> Plus que 12 paires disponibles</span>
                </div>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-stone-900 text-white py-4 sm:py-6 rounded-xl sm:rounded-2xl text-base sm:text-xl font-bold hover:bg-velors-orange transition-all duration-300 transform hover:-translate-y-1 shadow-lg sm:shadow-xl shadow-stone-900/20 flex items-center justify-center gap-2 sm:gap-3"
                >
                  COMMANDER MAINTENANT
                  <ArrowLeft className="rotate-180 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                <p className="text-center text-xs text-stone-400 mt-3 sm:mt-4 uppercase tracking-widest">
                  Paiement à la livraison - Livraison express 24h
                </p>
            </div>
          </div>
        </div>

        {/* ANGLE 1: L'Anatomie du Confort (Technologie) */}
        <section className="mt-20 sm:mt-24 lg:mt-32 py-12 sm:py-16 border-t border-stone-200">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3 sm:mb-4">
                  L'anatomie d'une marche parfaite
                </h2>
                <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto px-4">
                  Chaque millimètre de la Velors Signature a été pensé pour répondre aux contraintes du sol urbain.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                <div className="text-center group px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-velors-orange group-hover:text-white transition-all duration-300">
                        <Layers size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Tri-couche Adaptive</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        Un noyau central en polymère haute résilience entouré de deux couches de confort pour une absorption des chocs multidirectionnelle.
                    </p>
                </div>

                <div className="text-center group px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-velors-orange group-hover:text-white transition-all duration-300">
                        <Activity size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Correcteur de Voûte</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        Un support semi-rigide qui empêche l'affaissement du pied, stabilisant ainsi votre démarche et réduisant la fatigue musculaire.
                    </p>
                </div>

                <div className="text-center group px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-velors-orange group-hover:text-white transition-all duration-300">
                        <Wind size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Flux d'Air Constant</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        Des perforations laser microscopiques permettent une circulation d'air continue sous le pied, évitant l'accumulation de chaleur.
                    </p>
                </div>
            </div>
        </section>

        {/* ANGLE 2: Santé & Posture */}
        <section className="mt-20 sm:mt-24 lg:mt-32 bg-stone-900 rounded-2xl sm:rounded-[3rem] p-6 sm:p-12 lg:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 sm:p-20 opacity-10">
                <TrendingUp size={150} sm:size={300} strokeWidth={1} />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                    <span className="text-velors-orange font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 block">
                      Angle Santé
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                      Votre corps commence par vos pieds.
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-stone-400 mb-6 sm:mb-8">
                        Une mauvaise posture du pied peut causer des douleurs en chaîne : chevilles, genoux, hanches et jusqu'aux cervicales. En stabilisant l'assise plantaire, Velors réaligne l'ensemble de votre squelette.
                    </p>
                    <ul className="space-y-3 sm:space-y-4">
                        <li className="flex items-center gap-3 sm:gap-4">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-velors-orange/20 flex items-center justify-center text-velors-orange flex-shrink-0">
                                <CheckCircle size={12} sm:size={14} />
                            </div>
                            <span className="text-sm sm:text-base">Réduction de 40% des micro-chocs articulaires</span>
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-velors-orange/20 flex items-center justify-center text-velors-orange flex-shrink-0">
                                <CheckCircle size={12} sm:size={14} />
                            </div>
                            <span className="text-sm sm:text-base">Amélioration naturelle de l'alignement du dos</span>
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-velors-orange/20 flex items-center justify-center text-velors-orange flex-shrink-0">
                                <CheckCircle size={12} sm:size={14} />
                            </div>
                            <span className="text-sm sm:text-base">Soulagement immédiat de la plante des pieds</span>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-0">
                    <img 
                      src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600" 
                      className="rounded-xl sm:rounded-2xl shadow-2xl rotate-2 w-full h-40 sm:h-48 lg:h-64 object-cover" 
                      alt="Healthy feet" 
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=600" 
                      className="rounded-xl sm:rounded-2xl shadow-2xl -rotate-2 mt-4 sm:mt-12 w-full h-40 sm:h-48 lg:h-64 object-cover" 
                      alt="Posture support" 
                    />
                </div>
            </div>
        </section>

        {/* ANGLE 3: Polyvalence Lifestyle */}
        <section className="mt-20 sm:mt-24 lg:mt-32">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3 sm:mb-4">
                  Une seule semelle, toutes vos chaussures.
                </h2>
                <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto px-4">
                  D'une épaisseur de seulement 4mm au talon, elle se glisse partout sans compromis.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {[
                    {
                        title: "Le Travail",
                        desc: "Idéal pour ceux qui piétinent dans des chaussures de ville ou des baskets de bureau.",
                        img: "https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/633733928_782928097643555_3792125365186889553_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFmW-2C9E3XqaSgsetHGFAo2AIZf7MP8RvYAhl_sw_xG7NiPz4O8Twyk16kR27R9z_CLE6s0cPDHMa6jssdjFpR&_nc_ohc=jK0g1TvNtysQ7kNvwEWpJWO&_nc_oc=AdmD6OS4vFVSLx4RhmI4k_BKvZVAeUGMGmVBc9cXf9ZoJRqN98QDtnKlH93BCgWznnc&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gEj553GuM_u8b1v2k4CWDsTFhD_x8f1mR7_ioPRrM8T5Q&oe=69BBC192"
                    },
                    {
                        title: "Le Sport & Loisirs",
                        desc: "Transformez vos sneakers lifestyle en véritables alliées pour vos longues marches dominicales.",
                        img: "https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/613136778_895313113196456_8925653141940045873_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGO7D4HaP_95-QZALSZyagLr_V1TKbXygOv9XVMptfKA5Qi7EIxnP59c3if-7Vu-hdJQwLyFPl3R8cB1aPJ-MgM&_nc_ohc=LDtYocmxHYgQ7kNvwG746aB&_nc_oc=AdlStdzXpRrdkrig-EQX9OGFw9poustXltsL3O0yydKY9frg5MPmk1ME_Ypkc-HwJg0&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gHAdZmKYXaR6MwbihV4sptxbcnGA6amLCbLpCC5QM9P3Q&oe=69BBE544"
                    },
                    {
                        title: "Voyages",
                        desc: "Parcourez des villes entières sans ressentir de brûlures plantaires en fin de journée.",
                        img: "https://i.pinimg.com/1200x/9c/88/c7/9c88c71ca0a3aec5597b9f05c556a3bd.jpg"
                    }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-stone-100 shadow-sm group hover:shadow-xl transition-shadow">
                        <div className="h-40 sm:h-44 lg:h-48 overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-4 sm:p-5 lg:p-6">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Detailed FAQ / Trust Section */}
        <div className="mt-20 sm:mt-24 lg:mt-32 max-w-4xl mx-auto px-4">
            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2rem] shadow-sm border border-stone-100">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
                    <ShieldCheck className="text-velors-orange w-5 h-5 sm:w-6 sm:h-6" />
                    Votre satisfaction est notre priorité
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <div>
                        <h3 className="font-bold text-base sm:text-lg mb-2">Comment l'ajuster ?</h3>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                            La semelle est pré-découpée. Si elle est un peu large, utilisez votre ancienne semelle comme guide et coupez l'excédent avec de simples ciseaux. C'est un jeu d'enfant.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-base sm:text-lg mb-2">Paiement à la livraison</h3>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                            Pas de carte bancaire à entrer. Vous commandez en 2 clics, vous recevez votre colis, et vous payez le livreur uniquement quand le produit est chez vous.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center border-t border-stone-100 pt-8 sm:pt-12">
                     <p className="text-stone-800 font-bold text-base sm:text-lg mb-4 sm:mb-6 text-center px-4">
                       Prêt à transformer votre quotidien ?
                     </p>
                     <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-velors-orange text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-xl font-bold hover:bg-orange-600 transition-all shadow-lg sm:shadow-xl shadow-orange-900/20 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3"
                    >
                        COMMANDER MAINTENANT
                        <ArrowLeft className="rotate-180 w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </div>
      </div>

      <OrderModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ProductDetail;