
import React, { useState } from 'react';
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
  Zap
} from 'lucide-react';
import OrderModal from '../components/OrderModal';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const product = SINGLE_PRODUCT; 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(product.imageUrl);

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* Breadcrumb / Back */}
      <div className="bg-white border-b border-stone-200">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Images Section */}
          <div className="space-y-6">
            <div className="aspect-square w-full overflow-hidden rounded-3xl bg-white relative shadow-lg border border-stone-100">
               <img 
                 src={activeImage} 
                 alt={product.name} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute top-4 left-4 bg-velors-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                   Best-Seller
               </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
               <button onClick={() => setActiveImage(product.imageUrl)} className={`rounded-2xl overflow-hidden aspect-square border-2 transition-all ${activeImage === product.imageUrl ? 'border-velors-orange ring-2 ring-velors-orange/20 scale-95' : 'border-transparent hover:border-stone-300'}`}>
                  <img src={product.imageUrl} alt="Main" className="w-full h-full object-cover"/>
               </button>
               {product.detailImages.map((img, idx) => (
                   <button key={idx} onClick={() => setActiveImage(img)} className={`rounded-2xl overflow-hidden aspect-square border-2 transition-all ${activeImage === img ? 'border-velors-orange ring-2 ring-velors-orange/20 scale-95' : 'border-transparent hover:border-stone-300'}`}>
                    <img src={img} alt={`Detail ${idx}`} className="w-full h-full object-cover"/>
                   </button>
               ))}
            </div>

            {/* Reassurance Box Desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-700"><Truck size={20} /></div>
                    <div className="text-sm">
                        <p className="font-bold text-stone-900">Livraison</p>
                        <p className="text-stone-500">Sous 24/48h</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-700"><Shield size={20} /></div>
                    <div className="text-sm">
                        <p className="font-bold text-stone-900">Garantie 30J</p>
                        <p className="text-stone-500">Satisfait ou remboursé</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Product Sales Copy */}
          <div className="flex flex-col">
            <div className="mb-2">
                <span className="text-stone-500 font-medium text-sm tracking-wide uppercase">Technologie Ergonomique</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl font-bold text-velors-orange">
                  {product.price} FCFA
                </div>
                <div className="h-6 w-px bg-stone-300"></div>
                <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                        <Star size={18} fill="currentColor" />
                        <Star size={18} fill="currentColor" />
                        <Star size={18} fill="currentColor" />
                        <Star size={18} fill="currentColor" />
                        <Star size={18} fill="currentColor" />
                    </div>
                    <span className="text-sm font-semibold text-stone-600 underline cursor-pointer hover:text-stone-900">124 avis vérifiés</span>
                </div>
            </div>

            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {product.description}
              <br/><br/>
              Oubliez la sensation de pieds lourds. La Velors Signature est la seule semelle qui s'adapte à votre morphologie unique pour un soutien millimétré.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm mb-8">
               <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                   <Package size={20} className="text-velors-orange"/>
                   Caractéristiques Premium :
               </h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-stone-700 text-sm">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                      </li>
                  ))}
               </ul>
            </div>

            <div className="mt-auto">
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 mb-6 text-sm text-orange-800 flex items-center gap-3">
                    <Zap size={20} className="animate-pulse" />
                    <span><strong>Forte demande :</strong> Plus que 12 paires en stock pour une expédition immédiate.</span>
                </div>
                
                <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-stone-900 text-white py-6 rounded-2xl text-xl font-bold hover:bg-velors-orange transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-stone-900/20 flex items-center justify-center gap-3"
                >
                COMMANDER MAINTENANT
                <ArrowLeft className="rotate-180" />
                </button>
                <p className="text-center text-xs text-stone-400 mt-4 uppercase tracking-widest">Paiement à la livraison - Livraison express 24h</p>
            </div>
          </div>
        </div>

        {/* ANGLE 1: L'Anatomie du Confort (Technologie) */}
        <section className="mt-32 py-16 border-t border-stone-200">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">L'anatomie d'une marche parfaite</h2>
                <p className="text-stone-600 max-w-2xl mx-auto">Chaque millimètre de la Velors Signature a été pensé pour répondre aux contraintes du sol urbain.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center group">
                    <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-velors-orange group-hover:text-white transition-all duration-300">
                        <Layers size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Tri-couche Adaptive</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Un noyau central en polymère haute résilience entouré de deux couches de confort pour une absorption des chocs multidirectionnelle.
                    </p>
                </div>

                <div className="text-center group">
                    <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-velors-orange group-hover:text-white transition-all duration-300">
                        <Activity size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Correcteur de Voûte</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Un support semi-rigide qui empêche l'affaissement du pied, stabilisant ainsi votre démarche et réduisant la fatigue musculaire.
                    </p>
                </div>

                <div className="text-center group">
                    <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-velors-orange group-hover:text-white transition-all duration-300">
                        <Wind size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Flux d'Air Constant</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Des perforations laser microscopiques permettent une circulation d'air continue sous le pied, évitant l'accumulation de chaleur.
                    </p>
                </div>
            </div>
        </section>

        {/* ANGLE 2: Santé & Posture */}
        <section className="mt-32 bg-stone-900 rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-20 opacity-10">
                <TrendingUp size={300} strokeWidth={1} />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-velors-orange font-bold uppercase tracking-widest text-sm mb-4 block">Angle Santé</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Votre corps commence par vos pieds.</h2>
                    <p className="text-stone-400 text-lg mb-8">
                        Une mauvaise posture du pied peut causer des douleurs en chaîne : chevilles, genoux, hanches et jusqu'aux cervicales. En stabilisant l'assise plantaire, Velors réaligne l'ensemble de votre squelette.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-velors-orange/20 flex items-center justify-center text-velors-orange">
                                <CheckCircle size={16} />
                            </div>
                            <span>Réduction de 40% des micro-chocs articulaires</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-velors-orange/20 flex items-center justify-center text-velors-orange">
                                <CheckCircle size={16} />
                            </div>
                            <span>Amélioration naturelle de l'alignement du dos</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-velors-orange/20 flex items-center justify-center text-velors-orange">
                                <CheckCircle size={16} />
                            </div>
                            <span>Soulagement immédiat de la plante des pieds</span>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl rotate-2" alt="Healthy feet" />
                    <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl -rotate-2 mt-12" alt="Posture support" />
                </div>
            </div>
        </section>

        {/* ANGLE 3: Polyvalence Lifestyle */}
        <section className="mt-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Une seule semelle, toutes vos chaussures.</h2>
                <p className="text-stone-600 max-w-2xl mx-auto">D'une épaisseur de seulement 4mm au talon, elle se glisse partout sans compromis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm group hover:shadow-xl transition-shadow">
                        <div className="h-48 overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Detailed FAQ / Trust Section */}
        <div className="mt-32 max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-100">
                <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center flex items-center justify-center gap-3">
                    <ShieldCheck className="text-velors-orange" />
                    Votre satisfaction est notre priorité
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="font-bold text-lg mb-2">Comment l'ajuster ?</h3>
                        <p className="text-stone-600 text-sm">
                            La semelle est pré-découpée. Si elle est un peu large, utilisez votre ancienne semelle comme guide et coupez l'excédent avec de simples ciseaux. C'est un jeu d'enfant.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Paiement à la livraison</h3>
                        <p className="text-stone-600 text-sm">
                            Pas de carte bancaire à entrer. Vous commandez en 2 clics, vous recevez votre colis, et vous payez le livreur uniquement quand le produit est chez vous.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center border-t border-stone-100 pt-12">
                     <p className="text-stone-800 font-bold text-lg mb-6">Prêt à transformer votre quotidien ?</p>
                     <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-velors-orange text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20 transform hover:-translate-y-1 flex items-center gap-3"
                    >
                        COMMANDER VELORS SIGNATURE
                        <ArrowLeft className="rotate-180" />
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
