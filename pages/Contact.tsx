import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Veuillez entrer votre nom');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      toast.error('Veuillez entrer un email valide');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Veuillez entrer votre message');
      return false;
    }
    if (formData.message.length < 10) {
      toast.error('Votre message doit contenir au moins 10 caractères');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const loadingToast = toast.loading('Envoi en cours...', {
      style: {
        background: '#FF8C00',
        color: '#fff',
        padding: '16px',
        borderRadius: '10px',
        fontSize: '14px',
      },
    });

    try {
      const response = await fetch('https://formspree.io/f/xnjbzdpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name} - Site Velors`,
          _replyto: formData.email
        })
      });
      
      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success('Message envoyé avec succès !', {
          duration: 5000,
          icon: '✅',
          style: {
            background: '#10b981',
            color: '#fff',
            padding: '16px',
            borderRadius: '10px',
            fontSize: '14px',
          },
        });
        
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.', {
        duration: 5000,
        icon: '❌',
        style: {
          background: '#ef4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
          fontSize: '14px',
        },
      });
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-velors-beige min-h-screen py-12 md:py-16 lg:py-20">
      {/* Toaster pour les notifications */}
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête - Tailles responsives */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-3 md:mb-4">
            Contactez-nous
          </h1>
          <p className="text-base sm:text-lg text-stone-600 px-4 sm:px-0 leading-relaxed">
            Une question sur un produit ? Besoin d'aide pour choisir ? L'équipe Velors est là pour vous répondre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
          
          {/* Contact Info - Design inchangé avec tailles responsives */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 md:mb-8">
              Nos Coordonnées
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              {/* Adresse */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-100 text-velors-orange">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-medium text-stone-900">Adresse</h3>
                  <p className="text-sm sm:text-base text-stone-600 mt-0.5 sm:mt-1">
                    Bénin, Cotonou
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-100 text-velors-orange">
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-medium text-stone-900">Email</h3>
                  <p className="text-sm sm:text-base text-stone-600 mt-0.5 sm:mt-1">
                    contactvelors@gmail.com
                  </p>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Nous répondons sous 24h.
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-100 text-velors-orange">
                    <Phone size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-medium text-stone-900">Téléphone</h3>
                  <a 
                    href="tel:+22993361942" 
                    className="text-sm sm:text-base text-stone-600 hover:text-velors-orange transition-colors inline-block mt-0.5 sm:mt-1"
                  >
                    +229 93 36 19 42
                  </a>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Du Lundi au Vendredi, 9h-18h.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Témoignage */}
            <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-5 md:p-6 bg-stone-50 rounded-xl border border-stone-100">
              <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed">
                "Le service client Velors est exceptionnel. Réponse rapide et conseils avisés !" - Thomas L.
              </p>
            </div>
          </div>

          {/* Formulaire - Design inchangé avec tailles responsives */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg border-t-4 border-velors-orange">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 sm:mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Champ Nom */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-stone-700 mb-1 sm:mb-2">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg sm:rounded-xl border-stone-300 bg-stone-50 py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base focus:border-velors-orange focus:ring-velors-orange outline-none border transition-colors"
                  placeholder="Votre nom"
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Champ Email */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-stone-700 mb-1 sm:mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg sm:rounded-xl border-stone-300 bg-stone-50 py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base focus:border-velors-orange focus:ring-velors-orange outline-none border transition-colors"
                  placeholder="votre@email.com"
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Champ Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-stone-700 mb-1 sm:mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg sm:rounded-xl border-stone-300 bg-stone-50 py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base focus:border-velors-orange focus:ring-velors-orange outline-none border transition-colors resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                  disabled={isSubmitting}
                  required
                />
                <p className="text-xs text-stone-500 mt-1 sm:mt-2">
                  {formData.message.length}/10 caractères minimum
                </p>
              </div>

              {/* Bouton Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-stone-900 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-full font-semibold sm:font-bold text-sm sm:text-base hover:bg-velors-orange transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </button>

              {/* Note de sécurité */}
              <p className="text-center text-xs text-stone-400 mt-4">
                Vos données sont confidentielles et ne seront jamais partagées.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;