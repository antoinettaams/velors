export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  features: string[];
  imageUrl: string;
  detailImages: string[];
  colors: string[];
}

export interface OrderForm {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  zip?: string; // Rendu optionnel car remplacé par color
  color?: string; // Nouvelle propriété pour la couleur
  size: string;
  quantity: number;
}