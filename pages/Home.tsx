import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, ShieldCheck, X, Check, Star, Zap, Droplet, UserCheck } from 'lucide-react';
import { FAQS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-velors-beige">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/634069810_1971851520035254_5512413284136601063_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHtHawFEqoSAIcs6wv9noN5MbtR4A6kUE0xu1HgDqRQTZg9jBEERo_OPoMFNw_zabi1cqVf6e4U1M_Y2Pk3_SvY&_nc_ohc=GIdPRKcBQTwQ7kNvwGrm09N&_nc_oc=Admk32NQHDYr6duPHi0Cf9U_4LoxabzZjiLHNImg--DF0hc9onKh_xjQYEmwauPyePw&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gHMp6G0zNMiu_QcrBzVdsPLtZW9Uk2fD1SlS_LxPiIf4Q&oe=69BBECBE" 
            alt="Urban lifestyle" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
                <div className="h-0.5 w-8 bg-velors-orange"></div>
                <span className="text-velors-orange font-bold tracking-widest uppercase text-sm">Best-Seller 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Ne marchez plus.<br/>Flottez.
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-8 leading-relaxed max-w-lg">
              Découvrez <span className="text-white font-semibold">Velors Signature</span>. La semelle qui transforme vos chaussures préférées en chaussons ergonomiques. Confort immédiat, douleur oubliée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/product" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-stone-900 bg-white rounded-full hover:bg-velors-orange hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(230,81,0,0.5)] transform hover:-translate-y-1"
              >
                Commander ma paire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white/80 text-sm">
                <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-stone-700 border-2 border-stone-900 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="user" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <p>Déjà adopté par +5,000 urbains</p>
            </div>
          </div>
        </div>
      </section>

     <div className="bg-velors-orange py-4 overflow-hidden">
  <div className="flex animate-marquee whitespace-nowrap">
    <div className="flex gap-8 text-white font-bold uppercase tracking-widest text-sm md:text-base">
      <span>⚡ Livraison Rapide & Paiement à la livraison ⚡</span>
      <span>★ Garantie Confort 30 Jours ★</span>
      <span>⚡ Design Ergonomique Breveté ⚡</span>
      <span>★ Compatible Toutes Marques ★</span>
    </div>

    <div className="flex gap-8 text-white font-bold uppercase tracking-widest text-sm md:text-base ml-8">
      <span>⚡ Livraison Rapide & Paiement à la livraison ⚡</span>
      <span>★ Garantie Confort 30 Jours ★</span>
      <span>⚡ Design Ergonomique Breveté ⚡</span>
      <span>★ Compatible Toutes Marques ★</span>
    </div>
  </div>
</div>


      {/* The Problem Section */}
      <section className="py-24 bg-white" id="problem">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                  <div className="w-full md:w-1/2">
                      <div className="relative">
                          <img 
                            src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800" 
                            alt="Foot pain" 
                            className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                          />
                          <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                              <p className="font-medium text-lg">"Je ne pouvais plus marcher plus de 20 minutes sans douleur avant Velors."</p>
                              <div className="flex gap-1 text-velors-orange mt-2">
                                  <Star size={16} fill="currentColor" />
                                  <Star size={16} fill="currentColor" />
                                  <Star size={16} fill="currentColor" />
                                  <Star size={16} fill="currentColor" />
                                  <Star size={16} fill="currentColor" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2">
                      <h2 className="text-stone-500 font-semibold uppercase tracking-wider mb-2">Le Problème</h2>
                      <h3 className="text-4xl font-bold text-stone-900 mb-6 leading-tight">Pourquoi vos pieds souffrent-ils dans vos baskets ?</h3>
                      <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                          La plupart des chaussures de mode sont conçues pour le <strong>style</strong>, pas pour l'anatomie humaine. 
                          Les semelles d'origine sont souvent :
                      </p>
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-start">
                              <X className="text-red-500 mr-3 flex-shrink-0 mt-1" />
                              <span className="text-stone-700">Trop plates, sans aucun support de voûte plantaire.</span>
                          </li>
                          <li className="flex items-start">
                              <X className="text-red-500 mr-3 flex-shrink-0 mt-1" />
                              <span className="text-stone-700">Trop fines, causant des chocs répétés au talon.</span>
                          </li>
                          <li className="flex items-start">
                              <X className="text-red-500 mr-3 flex-shrink-0 mt-1" />
                              <span className="text-stone-700">Fabriquées en matériaux bon marché qui font transpirer.</span>
                          </li>
                      </ul>
                      <p className="text-xl font-medium text-stone-900 border-l-4 border-velors-orange pl-4">
                          Résultat ? Fatigue, douleurs dorsales et inconfort chronique.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* The Solution / Benefits Grid */}
      <section className="py-24 bg-velors-light" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-velors-orange font-bold uppercase tracking-wider text-sm">La Technologie Velors</span>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mt-2 mb-6">L'ingénierie au service de vos pieds</h2>
            <p className="text-stone-600 text-lg">
              Nous avons condensé 3 technologies orthopédiques dans une semelle ultra-fine de 4mm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Support Actif</h3>
              <p className="text-stone-600 leading-relaxed">
                Une arche subtile qui soutient le pied sans être invasive. Elle redistribue le poids du corps pour soulager vos genoux et vos lombaires.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group">
              <div className="w-14 h-14 bg-orange-50 text-velors-orange rounded-xl flex items-center justify-center mb-6 group-hover:bg-velors-orange group-hover:text-white transition-colors">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Mousse Mémoire 3D</h3>
              <p className="text-stone-600 leading-relaxed">
                Une mousse haute densité qui mémorise l'empreinte de votre pied. Sensation "coussin d'air" garantie dès la première seconde.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Droplet size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Respirabilité Max</h3>
              <p className="text-stone-600 leading-relaxed">
                Revêtement en microfibre alvéolée qui évacue l'humidité. Vos pieds restent au sec et au frais, même après 10km.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi changer pour Velors ?</h2>
                  <p className="text-stone-400">Le comparatif est sans appel.</p>
              </div>

              <div className="max-w-4xl mx-auto bg-stone-800 rounded-2xl overflow-hidden shadow-2xl border border-stone-700">
                  <div className="grid grid-cols-3 p-6 border-b border-stone-700 bg-stone-800/50">
                      <div className="col-span-1"></div>
                      <div className="col-span-1 text-center font-bold text-stone-400 text-lg">Semelle Lambda</div>
                      <div className="col-span-1 text-center font-bold text-velors-orange text-xl tracking-wide">VELORS</div>
                  </div>

                  {/* Row 1 */}
                  <div className="grid grid-cols-3 p-6 border-b border-stone-700 hover:bg-stone-700/30 transition-colors items-center">
                      <div className="col-span-1 font-medium text-stone-300">Support Voûte Plantaire</div>
                      <div className="col-span-1 text-center text-stone-500"><X className="inline" /></div>
                      <div className="col-span-1 text-center text-green-400"><Check className="inline" /> Ergonomique</div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-3 p-6 border-b border-stone-700 hover:bg-stone-700/30 transition-colors items-center">
                      <div className="col-span-1 font-medium text-stone-300">Amorti</div>
                      <div className="col-span-1 text-center text-stone-500">Mousse basique</div>
                      <div className="col-span-1 text-center text-green-400 font-bold">Mémoire de forme HD</div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-3 p-6 border-b border-stone-700 hover:bg-stone-700/30 transition-colors items-center">
                      <div className="col-span-1 font-medium text-stone-300">Durée de vie</div>
                      <div className="col-span-1 text-center text-stone-500">3 mois</div>
                      <div className="col-span-1 text-center text-green-400">12 mois +</div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-3 p-6 hover:bg-stone-700/30 transition-colors items-center">
                      <div className="col-span-1 font-medium text-stone-300">Style</div>
                      <div className="col-span-1 text-center text-stone-500">Inexistant</div>
                      <div className="col-span-1 text-center text-velors-orange font-bold">Design Premium</div>
                  </div>
              </div>

              <div className="text-center mt-12">
                   <Link to="/product" className="bg-velors-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/50">
                       Passer au niveau supérieur
                   </Link>
              </div>
          </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-0 grid grid-cols-1 md:grid-cols-2">
          <div className="h-[500px] md:h-auto relative group overflow-hidden">
              <img src="https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/633733928_782928097643555_3792125365186889553_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFmW-2C9E3XqaSgsetHGFAo2AIZf7MP8RvYAhl_sw_xG7NiPz4O8Twyk16kR27R9z_CLE6s0cPDHMa6jssdjFpR&_nc_ohc=jK0g1TvNtysQ7kNvwEWpJWO&_nc_oc=AdmD6OS4vFVSLx4RhmI4k_BKvZVAeUGMGmVBc9cXf9ZoJRqN98QDtnKlH93BCgWznnc&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gEj553GuM_u8b1v2k4CWDsTFhD_x8f1mR7_ioPRrM8T5Q&oe=69BBC192" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Working" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                  <div className="text-center">
                      <h3 className="text-3xl font-bold text-white mb-2">Au Travail</h3>
                      <p className="text-stone-200">Restez debout toute la journée sans fatigue.</p>
                  </div>
              </div>
          </div>
          <div className="h-[500px] md:h-auto relative group overflow-hidden">
              <img src="https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/613136778_895313113196456_8925653141940045873_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGO7D4HaP_95-QZALSZyagLr_V1TKbXygOv9XVMptfKA5Qi7EIxnP59c3if-7Vu-hdJQwLyFPl3R8cB1aPJ-MgM&_nc_ohc=LDtYocmxHYgQ7kNvwG746aB&_nc_oc=AdlStdzXpRrdkrig-EQX9OGFw9poustXltsL3O0yydKY9frg5MPmk1ME_Ypkc-HwJg0&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gHAdZmKYXaR6MwbihV4sptxbcnGA6amLCbLpCC5QM9P3Q&oe=69BBE544"/>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                  <div className="text-center">
                      <h3 className="text-3xl font-bold text-white mb-2">En Balade</h3>
                      <p className="text-stone-200">Profitez de chaque pas, kilomètre après kilomètre.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Reviews / Social Proof */}
      <section className="py-24 bg-velors-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-stone-900">Ils marchent avec Velors</h2>
                  <div className="flex justify-center mt-4 text-velors-orange">
                       <Star fill="currentColor" size={24} />
                       <Star fill="currentColor" size={24} />
                       <Star fill="currentColor" size={24} />
                       <Star fill="currentColor" size={24} />
                       <Star fill="currentColor" size={24} />
                  </div>
                  <p className="mt-2 font-medium text-stone-600">4.9/5 basé sur +1000 avis</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { name: "Sophie M.", role: "Infirmière", text: "Je piétine toute la journée à l'hôpital. Ces semelles ont sauvé mon dos. Je ne peux plus m'en passer." },
                      { name: "Marc D.", role: "Commercial", text: "Je les ai mises dans mes chaussures de costume. C'est comme porter des baskets discrètement. Bluffant." },
                      { name: "Léa P.", role: "Étudiante", text: "Super fines, elles rentrent nickel dans mes Stan Smith. Livraison ultra rapide en plus !" }
                  ].map((review, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                          <div className="flex gap-1 text-velors-orange mb-4">
                              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                          </div>
                          <p className="text-stone-700 mb-6 italic">"{review.text}"</p>
                          <div className="flex items-center">
                              <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-bold text-stone-500">
                                  {review.name.charAt(0)}
                              </div>
                              <div className="ml-3">
                                  <p className="font-bold text-stone-900 text-sm">{review.name}</p>
                                  <p className="text-xs text-stone-500">{review.role}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">Questions Fréquentes</h2>
              <div className="space-y-6">
                  {FAQS.map((faq, idx) => (
                      <div key={idx} className="border-b border-stone-200 pb-6">
                          <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.question}</h3>
                          <p className="text-stone-600">{faq.answer}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-velors-orange relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vos pieds méritent mieux.</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Rejoignez la révolution du confort urbain. Satisfait ou remboursé pendant 30 jours.
              </p>
              <Link 
                to="/product" 
                className="inline-flex items-center bg-white text-velors-orange px-10 py-5 rounded-full text-xl font-bold hover:bg-stone-100 hover:scale-105 transition-all shadow-xl"
              >
                  Commander Velors Signature
                  <ArrowRight className="ml-2" />
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;