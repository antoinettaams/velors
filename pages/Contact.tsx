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
    
    // Toast de chargement
    const loadingToast = toast.loading('Envoi en cours...', {
      style: {
        background: '#FF8C00',
        color: '#fff',
        padding: '16px',
        borderRadius: '10px',
      },
    });

    try {
      // Votre Formspree ID
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
        // Succès
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
        
        // Réinitialiser le formulaire
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      // Erreur
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
    <div className="bg-velors-beige min-h-screen py-20">
      {/* Toaster pour les notifications */}
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Contactez-nous</h1>
          <p className="text-stone-600 text-lg">
            Une question sur un produit ? Besoin d'aide pour choisir ? L'équipe Velors est là pour vous répondre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info - Design inchangé */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">Nos Coordonnées</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-velors-orange">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-stone-900">Adresse</h3>
                  <p className="mt-1 text-stone-600">
                    Bénin, Cotonou
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-velors-orange">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-stone-900">Email</h3>
                  <p className="mt-1 text-stone-600">contactvelors@gmail.com</p>
                  <p className="mt-1 text-xs text-stone-500">Nous répondons sous 24h.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-velors-orange">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-stone-900">Téléphone</h3>
                  <a 
                    href="tel:+22993361942" 
                    className="mt-1 cursor-pointer text-stone-600 hover:text-velors-orange transition-colors inline-block"
                  >
                    +229 93 36 19 42
                  </a>
                  <p className="mt-1 text-xs text-stone-500">Du Lundi au Vendredi, 9h-18h.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-stone-50 rounded-xl border border-stone-100">
                <p className="text-sm text-stone-600 italic">
                    "Le service client Velors est exceptionnel. Réponse rapide et conseils avisés !" - Thomas L.
                </p>
            </div>
          </div>

          {/* Formulaire - Design inchangé avec fonctionnalité ajoutée */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-velors-orange">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-3 px-4 shadow-sm focus:border-velors-orange focus:ring-velors-orange outline-none border transition-colors"
                  placeholder="Votre nom"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-3 px-4 shadow-sm focus:border-velors-orange focus:ring-velors-orange outline-none border transition-colors"
                  placeholder="votre@email.com"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-3 px-4 shadow-sm focus:border-velors-orange focus:ring-velors-orange outline-none border transition-colors"
                  placeholder="Comment pouvons-nous vous aider ?"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-stone-900 text-white px-6 py-4 rounded-full font-bold hover:bg-velors-orange transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;