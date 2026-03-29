import { Product } from './types';

export const SINGLE_PRODUCT: Product = {
  id: 'velors-signature', 
  name: 'Velors Signature',
  tagline: 'L\'expérience de marche ultime.',
  description: 'La semelle qui transforme n\'importe quelle chaussure en un nuage de confort. Conçue pour la vie urbaine, la Velors Signature allie une mousse à mémoire de forme haute densité à un support de voûte plantaire ergonomique. Fini les pieds fatigués après une journée de marche.',
  price: 5000 ,
  colors: ['Orange', 'Gris', 'Noir'],
  features: [
    'Mousse Mémoire de Forme 3D',
    'Support Voûte Plantaire Actif',
    'Revêtement Respirant Anti-Odeur',
    'Talonnette Gel Absorption Choc',
    'Compatible toutes sneakers',
    'Ultra-légère (45g)'
  ],
  imageUrl:   '/images/podruct-three.jpg',
   detailImages: [
    '/images/podruct-two.jpg',
    '/images/podruct-five.jpg',  
    '/images/podruct-one.jpg',
    '/images/podruct-seven.jpg',
    '/images/podruct-six.jpg',
   ]
};

// Keep the array structure for compatibility but only one item
export const PRODUCTS: Product[] = [SINGLE_PRODUCT];

export const SIZES = ['36-37', '38-39', '40-41', '42-43', '44-45', '46+'];



export const FAQS = [
  {
    question: "Ces semelles sont-elles adaptées à toutes les chaussures ?",
    answer: "Oui, les Velors Signature sont conçues avec un profil fin qui s'adapte à 99% des sneakers, bottines et chaussures de ville. Elles remplacent idéalement la semelle de propreté d'origine."
  },
  {
    question: "Quelle est la durée de vie des semelles ?",
    answer: "Pour une utilisation quotidienne intensive, nous recommandons de les changer tous les 8 à 12 mois pour maintenir un amorti optimal."
  },
  {
    question: "Peut-on les laver ?",
    answer: "Absolument. Nous recommandons un lavage à la main avec de l'eau tiède et un savon doux. Laissez-les sécher à l'air libre (pas de sèche-linge)."
  },
  {
    question: "Aidez-vous pour les douleurs de dos ?",
    answer: "En améliorant l'alignement du pied et en absorbant les chocs de la marche, les semelles Velors réduisent considérablement l'impact remontant dans les genoux et le dos."
  }
];