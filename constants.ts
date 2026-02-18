import { Product } from './types';

export const SINGLE_PRODUCT: Product = {
  id: 'velors-signature',
  name: 'Velors Signature',
  tagline: 'L\'expérience de marche ultime.',
  description: 'La semelle qui transforme n\'importe quelle chaussure en un nuage de confort. Conçue pour la vie urbaine, la Velors Signature allie une mousse à mémoire de forme haute densité à un support de voûte plantaire ergonomique. Fini les pieds fatigués après une journée de marche.',
  price: 2500 ,
  colors: ['Orange', 'Bleu', 'Gris', 'Noir'],
  features: [
    'Mousse Mémoire de Forme 3D',
    'Support Voûte Plantaire Actif',
    'Revêtement Respirant Anti-Odeur',
    'Talonnette Gel Absorption Choc',
    'Compatible toutes sneakers',
    'Ultra-légère (45g)'
  ],
  imageUrl: 'https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/634069810_1971851520035254_5512413284136601063_n.png?stp=dst-png_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHtHawFEqoSAIcs6wv9noN5MbtR4A6kUE0xu1HgDqRQTZg9jBEERo_OPoMFNw_zabi1cqVf6e4U1M_Y2Pk3_SvY&_nc_ohc=GIdPRKcBQTwQ7kNvwGrm09N&_nc_oc=Admk32NQHDYr6duPHi0Cf9U_4LoxabzZjiLHNImg--DF0hc9onKh_xjQYEmwauPyePw&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gFZI5dHMgb8GB7ESi3X79cFBh15Ek3YeZ3-nHKLvi-wXA&oe=69BBB47E',
    detailImages: [
    'https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/637340214_1879182619369431_6922660121016135860_n.png?stp=dst-png_s552x414&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHWfoGgYeC2okqUeyj_8gLogTrFc8vgwBeBOsVzy-DAF7xWpwNuqglE12Z5v2sOCcD8hKiA1wMlDkaIO5byko8y&_nc_ohc=Z8XmAZ--SYwQ7kNvwGBEwOb&_nc_oc=AdnP2hLAlVHzQPRG4VeW4ZDxDuNHk5GAkeLYqmRhSuJkzqmSeSIMg8y0Xrn0pMXC94M&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gHv-VHCFg8fI3mRdjkJ3QZXkoW4JrkU10WOkY7wCPnNmw&oe=69BBD307',
    'https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/631775420_858772183885161_1125171939756264060_n.png?stp=dst-png_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGGkFQ2Udv3F5MqBmgue_IkjKHP5TAMbhWMoc_lMAxuFbI7eH2OkAEJay5Z4niOViyhwM5yRZsd2ye71d3-fmy2&_nc_ohc=HFJUKRRCBs4Q7kNvwHiyTuy&_nc_oc=AdmyM4tUudTsF0UGeMtBGfNrafrlm6hDdHckehhVlGLKtQSVS4t37OG4o5c0s1wisVg&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gGE386dtEr2Fxsj1mwsr9-CY937zrszYatTUzVXAwCEow&oe=69BBE8E1',
    'https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/633337264_833522189713312_1792573431549663772_n.png?stp=dst-png_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGVabEAsGT1dsdK3Jn6E35fXFeBhsBT9iJcV4GGwFP2IrzGbfLRtazv15Jx7MuXY-g7yCygIFixJynqXSNHaOfG&_nc_ohc=2Z_hvxps2zgQ7kNvwHxQlKP&_nc_oc=Adnx-1ei83dgvD0UOvtBe9pElAY59SP9IV6fz10aGpj0L_v8lm_OgX_YTgPdrBYcklk&_nc_ad=z-m&_nc_cid=4052&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gGI1PB_PUascPpGsg0d3frWiPzTbk5DBwV1qFejKU_WyA&oe=69BBBA8F',
    'https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/634964266_1987870642129944_4904358943812266163_n.png?stp=dst-png_s720x720&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHCTzIE78fkSvZXqlBw23Iav-Rvw0MI9Dm_5G_DQwj0OZV1FdJAM3WxnQCBIDqTEnrsnu1W3vPnsQewk567oc2R&_nc_ohc=mBI1svp2oqYQ7kNvwHrOn_c&_nc_oc=AdnxaWVo0sVEXoxn0QTgfDhN2Z1vi7cwGDWKo10zG_NfWyOofHsHj35Q0ommnUHCQqM&_nc_ad=z-m&_nc_cid=4052&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gGg8nLhGr-_fQ2te8yK0ncWbulwQ-vec6z7mnqqykFl5A&oe=69BBC786',
    'https://z-p3-scontent.flfw1-1.fna.fbcdn.net/v/t1.15752-9/637435740_1442323170681598_3836890331330892687_n.png?stp=dst-png_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeESCbW1yPP1tPjZ2AFubq2Bl5GeXuIseSWXkZ5e4ix5JbGmmxI3XEKF1k-Z3lUV6JbeDGlfWJfZnfQiTdV4FQVq&_nc_ohc=FfHfWMfgJ7sQ7kNvwHo8L2x&_nc_oc=AdltJN08E4bO1rCpMI8O-0MAlhowsDvdOWyqs97Xl2MFUjyRdEQUba8xVRMxjTIHFhw&_nc_zt=23&_nc_ht=z-p3-scontent.flfw1-1.fna&oh=03_Q7cD4gEmI0QGw01Fj_rptDJI29b-wBcb-ePYVlp7B6onIiu17A&oe=69BBCC39',
    'https://s.alicdn.com/@sc04/kf/Ha444449ab0684a75b2889576c19b195aJ.jpg?avif=close&webp=close',
    'https://s.alicdn.com/@sc04/kf/H51294ad825bb44b6a16ab18b8b47ae08T.jpg?avif=close&webp=close'
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