import React, { useState, useRef, useEffect } from 'react';
import { Product, OrderForm } from '../types';
import { SIZES } from '../constants';
import { X, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Ajout de useNavigate

interface OrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

// Configuration des packs
const PACK_CONFIG = {
  1: { price: 5000, label: '1 paire' },
  2: { price: 8000, label: '2 paires' },
  3: { price: 13000, label: '3 paires' }
};

type PackQuantity = 1 | 2 | 3;

const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose }) => {
  const navigate = useNavigate(); // Initialisation de useNavigate
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<OrderForm>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    size: '',
    quantity: 1,
    color: ''
  });
  const [packQuantity, setPackQuantity] = useState<PackQuantity>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notes, setNotes] = useState('');

  // Calculer le prix total en fonction du pack
  const totalPrice = PACK_CONFIG[packQuantity].price;

  // Fonction pour retourner à l'accueil
  const handleBackToHome = () => {
    navigate('/'); // Redirige vers la page d'accueil
    onClose(); // Ferme la modale
  };

  // Mettre à jour la quantité dans le formulaire quand le pack change
  useEffect(() => {
    setFormData(prev => ({ ...prev, quantity: packQuantity }));
    
    // Réinitialiser taille et couleur quand on change de pack (sauf si pack = 1)
    if (packQuantity > 1) {
      setFormData(prev => ({ ...prev, size: '', color: '' }));
    }
  }, [packQuantity]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value) as PackQuantity;
    setPackQuantity(value);
    
    // Réinitialiser les notes quand on revient à 1 paire
    if (value === 1) {
      setNotes('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    // Vérifier que pour 1 paire, taille et couleur sont remplies
    if (packQuantity === 1 && (!formData.size || !formData.color)) {
      toast.error('Veuillez sélectionner une taille et une couleur', {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }
    
    setIsSubmitting(true);

    // Préparer les données pour l'email
    const templateParams = {
      to_email: 'antoinettaams@gmail.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phone,
      product_name: product.name,
      product_price: product.price.toLocaleString('fr-FR'),
      quantity: packQuantity,
      pack_label: PACK_CONFIG[packQuantity].label,
      total: totalPrice.toLocaleString('fr-FR'),
      size: formData.size || 'Non spécifiée',
      color: formData.color || 'Non spécifiée',
      address: formData.address,
      city: formData.city,
      zip: formData.zip,
      notes: notes || 'Aucune note',
    };

    try {
      const result = await emailjs.send(
        'service_9dyt6r5',
        'template_vj3tbqj',
        templateParams,
        '2Cxl4zAIlZtGPOPCt'
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        toast.success('Commande envoyée avec succès !', {
          duration: 5000,
          position: 'top-center',
          icon: '✅',
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.', {
        duration: 5000,
        position: 'top-center',
        icon: '❌',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-stone-900/60 transition-opacity backdrop-blur-sm" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          
          <div className="absolute top-4 right-4 z-10">
            <button onClick={onClose} className="text-stone-400 hover:text-stone-500">
              <X size={24} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-10 flex flex-col items-center justify-center text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-stone-900">Commande Confirmée !</h3>
              <p className="mt-4 text-stone-500">
                Merci {formData.firstName}. Votre commande pour <span className="font-semibold">{PACK_CONFIG[packQuantity].label}</span> de <span className="font-semibold">{product.name}</span> a bien été reçue.
                {packQuantity === 1 && (
                  <>
                    <br/>Couleur : {formData.color} - Taille : {formData.size}
                  </>
                )}
                <br/>Total : {totalPrice.toLocaleString('fr-FR')} FCFA
                <br/>Vous paierez à la livraison.
              </p>
              {packQuantity > 1 && notes && (
                <div className="mt-4 text-left bg-stone-50 p-3 rounded-lg w-full">
                  <p className="text-xs font-semibold text-stone-600">Vos notes :</p>
                  <p className="text-sm text-stone-500 mt-1">{notes}</p>
                </div>
              )}
              
              {/* Bouton modifié pour rediriger vers l'accueil */}
              <button 
                onClick={handleBackToHome}
                className="mt-8 bg-stone-900 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-800 w-full transition-all"
              >
                Retour à l'accueil
              </button>
            </div>
          ) : (
            <div className="p-6 sm:p-8">
              {/* ... reste du formulaire inchangé ... */}
              <div className="sm:flex sm:items-start mb-6">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 className="text-xl font-bold text-stone-900">Commander {product.name}</h3>
                  <p className="text-sm text-stone-500 mt-1">Paiement à la livraison uniquement.</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Prénom</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Adresse</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Ville</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Pack</label>
                    <select
                      value={packQuantity}
                      onChange={handlePackChange}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-white py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    >
                      <option value={1}>1 paire - 5 000 FCFA</option>
                      <option value={2}>2 paires - 8 000 FCFA</option>
                      <option value={3}>3 paires - 13 000 FCFA</option>
                    </select>
                    {packQuantity > 1 && (
                      <p className="text-xs text-green-600 mt-1">
                        ✨ Économie de {((PACK_CONFIG[1].price * packQuantity) - PACK_CONFIG[packQuantity].price).toLocaleString('fr-FR')} FCFA !
                      </p>
                    )}
                  </div>
                </div>

                {/* Pour 1 paire : afficher taille et couleur */}
                {packQuantity === 1 && (
                  <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Couleur</label>
                      <select
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-stone-300 bg-white py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                      >
                        <option value="">Sélectionnez une couleur</option>
                        {product.colors?.map(color => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Taille</label>
                      <select
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-stone-300 bg-white py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                      >
                        <option value="">Sélectionnez une taille</option>
                        {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                )}

                {/* Pour 2-3 paires : champ notes */}
                {packQuantity > 1 && (
                  <div className="animate-in fade-in duration-300">
                    <label className="block text-xs font-medium text-stone-700 uppercase tracking-wide">
                      Notes (pointures, couleurs, etc.)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ex: Paire 1: orange taille 42, Paire 2: noir taille 43..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border resize-none"
                    />
                    <p className="text-xs text-stone-400 mt-1">
                      Indiquez ici les pointures et couleurs souhaitées pour chaque paire
                    </p>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                  <span className="text-lg font-bold text-stone-900">Total</span>
                  <span className="text-lg font-bold text-velors-orange">
                    {totalPrice.toLocaleString('fr-FR')} FCFA
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex justify-center rounded-full border border-transparent bg-velors-orange px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm transition-transform active:scale-95 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Envoi en cours...' : `Confirmer la commande (${PACK_CONFIG[packQuantity].label})`}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;