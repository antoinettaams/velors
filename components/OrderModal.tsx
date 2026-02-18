import React, { useState, useRef } from 'react';
import { Product, OrderForm } from '../types';
import { SIZES } from '../constants';
import { X, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface OrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<OrderForm>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    size: SIZES[2], // Default size 40-41
    quantity: 1,
    color: product.colors?.[0] || '' // Ajout de la couleur
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    // Préparer les données pour l'email
    const templateParams = {
      to_email: 'antoinettaams@gmail.com', // Votre email
      from_name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phone,
      product_name: product.name,
      product_price: product.price.toLocaleString('fr-FR'),
      quantity: formData.quantity,
      total: (product.price * formData.quantity).toLocaleString('fr-FR'),
      size: formData.size,
      color: formData.color || 'Non spécifié',
      address: formData.address,
      city: formData.city,
      zip: formData.zip,
    };

    try {
      // Remplacez par VOS identifiants EmailJS (à créer sur le site)
      const result = await emailjs.send(
        'service_9dyt6r5',      // À remplacer par votre Service ID
        'template_vj3tbqj',     // À remplacer par votre Template ID
        templateParams,
        '2Cxl4zAIlZtGPOPCt'       // À remplacer par votre Public Key
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        toast.success('Commande envoyée avec succès !', {
          duration: 5000,
          position: 'top-center',
          icon: '✅',
          style: {
            background: '#10b981',
            color: '#fff',
            padding: '16px',
            borderRadius: '10px',
            fontSize: '14px',
          },
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      toast.error('Erreur lors de l\'envoi de la commande. Veuillez réessayer.', {
        duration: 5000,
        position: 'top-center',
        icon: '❌',
        style: {
          background: '#ef4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
          fontSize: '14px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-stone-900/60 transition-opacity backdrop-blur-sm" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <button onClick={onClose} className="text-stone-400 hover:text-stone-500">
              <span className="sr-only">Close</span>
              <X size={24} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-10 flex flex-col items-center justify-center text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <Check className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold leading-6 text-stone-900">Commande Confirmée !</h3>
              <p className="mt-4 text-stone-500">
                Merci {formData.firstName}. Votre commande pour les <span className="font-semibold">{product.name}</span> a bien été reçue.
                <br/>Couleur : {formData.color} - Taille : {formData.size}
                <br/>Vous paierez à la livraison.
              </p>
              <button 
                onClick={onClose}
                className="mt-8 bg-stone-900 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-800 w-full"
              >
                Retour à la boutique
              </button>
            </div>
          ) : (
            <div className="p-6 sm:p-8">
              <div className="sm:flex sm:items-start mb-6">
                 <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 className="text-xl font-bold leading-6 text-stone-900" id="modal-title">Commander {product.name}</h3>
                  <p className="text-sm text-stone-500 mt-1">Paiement à la livraison uniquement.</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Prénom</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 shadow-sm focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 shadow-sm focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 shadow-sm focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Adresse</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 shadow-sm focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Ville</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 py-2 px-3 shadow-sm focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    />
                  </div>
                   <div>
                    <label htmlFor="color" className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Couleur</label>
                    <select
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-stone-300 bg-white py-2 px-3 shadow-sm focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    >
                      {product.colors?.map(color => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="size" className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Taille</label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-stone-300 bg-white py-2 px-3 shadow-sm focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                    >
                      {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                   <div>
                  <label htmlFor="quantity" className="block text-xs font-medium text-stone-700 uppercase tracking-wide">Quantité</label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    max="10"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-stone-300 bg-white py-2 px-3 shadow-sm focus:border-velors-orange focus:ring-velors-orange sm:text-sm outline-none border"
                  />
                </div>

                </div>

               
                <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                  <span className="text-lg font-bold text-stone-900">Total</span>
                  <span className="text-lg font-bold text-velors-orange">
                    {(product.price * formData.quantity).toLocaleString('fr-FR')} FCFA
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex justify-center rounded-full border border-transparent bg-velors-orange px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm transition-transform active:scale-95 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Confirmer la Commande'}
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