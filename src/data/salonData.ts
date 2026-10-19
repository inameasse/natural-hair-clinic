export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  image: string;
  category: 'Coiffure' | 'Couleur' | 'Soins' | 'Mariage' | 'Hommes';
}

export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  service: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: boolean;
  description: string;
  duration: string;
  price: string;
  tags: string[];
}

const localImages = Object.values(
  import.meta.glob('../assets/images/*.{jpg,jpeg,png}', {
    eager: true,
    import: 'default',
  })
) as string[];

const getLocalImage = (index: number) => {
  if (localImages.length === 0) return '';
  return localImages[index % localImages.length];
};

const serviceImages = {
  coiffure: new URL('../assets/images/coiffure.jpeg', import.meta.url).href,
  coiffure1: new URL('../assets/images/coiffure1.jpeg', import.meta.url).href,
  coiffure5: new URL('../assets/images/coiffure5.jpeg', import.meta.url).href,
  coiffure6: new URL('../assets/images/coiffure6.jpeg', import.meta.url).href,
  couleur: new URL('../assets/images/couleur.jpeg', import.meta.url).href,
  couleur1: new URL('../assets/images/couleur1.jpeg', import.meta.url).href,
  couleur6: new URL('../assets/images/couleur6.jpeg', import.meta.url).href,
  couleur7: new URL('../assets/images/couleur7.jpeg', import.meta.url).href,
  couleur4: new URL('../assets/images/couleur4.jpeg', import.meta.url).href,
  soin: new URL('../assets/images/soin1.jpeg', import.meta.url).href,
  homme1: new URL('../assets/images/homme1.jpg', import.meta.url).href,
  homme2: new URL('../assets/images/homme2.jpg', import.meta.url).href,
  homme3: new URL('../assets/images/homme3.jpg', import.meta.url).href,
};

export const services: Service[] = [
  {
    id: 'coupe-femme',
    name: 'Sister locks',
    description:
      '',
    price: 'À partir de 50.000 f',
    duration: '1h',
    icon: 'Scissors',
    image: serviceImages.coiffure,
    category: 'Coiffure',
  },
  {
    id: 'couleur-balayage',
    name: 'Balayage & Ombré',
    description:
      'Un effet soleil naturel et subtil. Le balayage apporte luminosité et profondeur pour un rendu ensoleillé toute l\'année.',
    price: 'À partir de 85 f',
    duration: '2h30',
    icon: 'Palette',
    image: serviceImages.coiffure1,
    category: 'Coiffure',
  },
  {
    id: 'coloration',
    name: 'Coloration & Mèches',
    description:
      'Couleur uniforme ou jeux de mèches pour illuminer votre chevelure. Nous utilisons des produits doux et respectueux du cheveu.',
    price: 'À partir de 65 f',
    duration: '2h',
    icon: 'Sparkles',
    image: serviceImages.couleur,
    category: 'Couleur',
  },
  {
    id: 'soin-profond',
    name: 'Soin au baobab',
    description:
      'Traitement intensif qui répare, nourrit et fait briller vos cheveux de l\'intérieur. Idéal pour cheveux secs ou abîmés.',
    price: 'À partir de 55 f',
    duration: '1h',
    icon: 'Droplet',
    image: serviceImages.soin,
    category: 'Soins',
  },
  {
    id: 'coiffure-mariage',
    name: 'Coiffure de Mariage',
    description:
      'Le jour de votre mariage mérite une coiffure d\'exception. Essai préalable et réalisation le jour J pour une journée inoubliable.',
    price: 'À partir de 150 f',
    duration: '2h',
    icon: 'Crown',
    image: serviceImages.coiffure5,
    category: 'Mariage',
  },
  {
    id: 'chignon',
    name: 'Chignons & Updo',
    description:
      'Pour vos événements, soirées et cérémonies. Des chignons élégants et créatifs qui subliment votre tenue.',
    price: 'À partir de 60 f',
    duration: '1h15',
    icon: 'Flower2',
    image: serviceImages.coiffure6,
    category: 'Coiffure',
  },
  {
    id: 'brushing',
    name: 'Brushing & Mise en beauté',
    description:
      'Un brushing parfait pour une finition impeccable. Volume, lisseur ou ondulations selon vos envies.',
    price: 'À partir de 35 f',
    duration: '45min',
    icon: 'Wind',
    image: serviceImages.couleur1,
    category: 'Couleur',
  },
  {
    id: 'couleur6',
    name: 'Brushing & Mise en beauté',
    description:
      'Un brushing parfait pour une finition impeccable. Volume, lisseur ou ondulations selon vos envies.',
    price: 'À partir de 35 f',
    duration: '45min',
    icon: 'Wind',
    image: serviceImages.couleur6,
    category: 'Couleur',
  },
  {
    id: 'couleur7',
    name: 'Brushing & Mise en beauté',
    description:
      'Un brushing parfait pour une finition impeccable. Volume, lisseur ou ondulations selon vos envies.',
    price: 'À partir de 35 f',
    duration: '45min',
    icon: 'Wind',
    image: serviceImages.couleur7,
    category: 'Couleur',
  },
  {
    id: 'couleur4',
    name: 'Brushing & Mise en beauté',
    description:
      'Un brushing parfait pour une finition impeccable. Volume, lisseur ou ondulations selon vos envies.',
    price: 'À partir de 35 f',
    duration: '45min',
    icon: 'Wind',
    image: serviceImages.couleur4,
    category: 'Couleur',
  },
  {
    id: 'tresses-homme',
    name: 'Tresses homme',
    description:
      'Des tresses soignées et adaptées à votre style, réalisées sur cheveux texturés.',
    price: 'À partir de 30 f',
    duration: '1h',
    icon: 'Scissors',
    image: serviceImages.homme1,
    category: 'Hommes',
  },
  {
    id: 'coiffure-homme',
    name: 'Coiffure homme',
    description:
      'Une coiffure nette et personnalisée, avec des lignes précises et une finition soignée.',
    price: 'À partir de 30 f',
    duration: '1h',
    icon: 'Scissors',
    image: serviceImages.homme2,
    category: 'Hommes',
  },
  {
    id: 'tresses-collees-homme',
    name: 'Tresses collées homme',
    description:
      'Des tresses collées réalisées avec soin pour un résultat propre et durable.',
    price: 'À partir de 30 f',
    duration: '1h',
    icon: 'Scissors',
    image: serviceImages.homme3,
    category: 'Hommes',
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Sophie Marchand',
    date: 'Septembre 2026',
    rating: 5,
    comment:
      'Un salon absolument magnifique. J\'ai fait un balayage et le résultat dépasse mes attentes. L\'accueil est chaleureux et le cadre élégant. Je recommande à 100% !',
    service: 'Balayage & Ombré',
    avatar: getLocalImage(8),
  },
  {
    id: 'r2',
    name: 'Claire Dubois',
    date: 'Août 2026',
    rating: 5,
    comment:
      'J\'y suis allée pour ma coiffure de mariage et tout était parfait. L\'essai, les conseils, et le jour J un vrai rêve. Merci pour cette journée inoubliable !',
    service: 'Coiffure de Mariage',
    avatar: getLocalImage(9),
  },
  {
    id: 'r3',
    name: 'Nadia Benali',
    date: 'Août 2026',
    rating: 5,
    comment:
      'Le soin profond japonais a transformé mes cheveux. Ils sont doux, brillants et revitalisés. Le cadre est apaisant, on se sent comme en spa.',
    service: 'Soin Profond Japonais',
    avatar: getLocalImage(10),
  },
  {
    id: 'r4',
    name: 'Émilie Rousseau',
    date: 'Juillet 2026',
    rating: 5,
    comment:
      'Le lissage brésilien a changé ma vie ! Mes cheveux sont enfin disciplinés et brillants. L\'équipe est professionnelle et à l\'écoute. Un sans-faute.',
    service: 'Lissage Brésilien',
    avatar: getLocalImage(11),
  },
  {
    id: 'r5',
    name: 'Fatima Zahra',
    date: 'Juillet 2026',
    rating: 5,
    comment:
      'Le meilleur salon de la ville ! Toujours un accueil chaleureux et des conseils personnalisés. Mes couleurs sont toujours impeccables. Fidèle depuis 2 ans.',
    service: 'Coloration & Mèches',
    avatar: getLocalImage(12),
  },
  {
    id: 'r6',
    name: 'Laura Petit',
    date: 'Juin 2026',
    rating: 5,
    comment:
      'Un chignon magnifique pour la soirée de gala. Tout le monde m\'a complimentée ! L\'artiste a su comprendre exactement ce que je voulais. Bravo !',
    service: 'Chignons & Updo',
    avatar: getLocalImage(13),
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Balayage Soleil',
    category: 'Couleur',
    image: getLocalImage(14),
    span: true,
    description: 'Un balayage effet soleil qui apporte luminosité et profondeur naturelle. Des mèches fines et fondues pour un rendu ensoleillé toute l\'année, sans démarcation. Idéal pour illuminer le visage et apporter du relief aux cheveux longs.',
    duration: '2h30',
    price: 'À partir de 85 f',
    tags: ['Balayage', 'Effet soleil', 'Sans démarcation'],
  },
  {
    id: 'g2',
    title: 'Chignon Élégant',
    category: 'Coiffure',
    image: getLocalImage(15),
    description: 'Un chignon raffiné et maîtrisé pour vos événements et cérémonies. Coiffage minutieux, fixage longue durée et finitions impeccables pour une tenue parfaite toute la soirée.',
    duration: '1h15',
    price: 'À partir de 60 f',
    tags: ['Chignon', 'Cérémonie', 'Longue tenue'],
  },
  {
    id: 'g3',
    title: 'Tresses Sophistiquées',
    category: 'Coiffure',
    image: getLocalImage(16),
    description: 'Des tresses africaines sophistiquées, fines et précises, réalisées avec soin. Un style protecteur et élégant qui sublime la texture naturelle de vos cheveux tout en offrant une tenue durable.',
    duration: '3h',
    price: 'À partir de 90 f',
    tags: ['Tresses', 'Style protecteur', 'Cheveux naturels'],
  },
  {
    id: 'g4',
    title: 'Coiffure Mariage',
    category: 'Mariage',
    image: getLocalImage(17),
    span: true,
    description: 'Une coiffure de mariage d\'exception, du premier essai à la réalisation le jour J. Chignons, demi-coiffages, voiles et accessoires — tout est pensé pour que vous soyez la plus belle de votre journée.',
    duration: '2h',
    price: 'À partir de 150 f',
    tags: ['Mariage', 'Essai inclus', 'Jour J'],
  },
  {
    id: 'g5',
    title: 'Coloration Éclat',
    category: 'Couleur',
    image: getLocalImage(18),
    description: 'Une coloration uniforme qui illumine et intensifie votre chevelure. Produits doux et respectueux du cheveu, couverture parfaite des cheveux blancs et éclat longue durée.',
    duration: '2h',
    price: 'À partir de 65 f',
    tags: ['Coloration', 'Éclat', 'Couvre cheveux blancs'],
  },
  {
    id: 'g6',
    title: 'Updo Cérémonie',
    category: 'Mariage',
    image: getLocalImage(19),
    description: 'Un updo structuré et romantique pour vos cérémonies et galas. Volume maîtrisé, mèches lâchées stratégiquement et finitions spray longue durée pour une élégance intemporelle.',
    duration: '1h30',
    price: 'À partir de 70 f',
    tags: ['Updo', 'Gala', 'Volume'],
  },
  {
    id: 'g7',
    title: 'Tresses Florales',
    category: 'Mariage',
    image: getLocalImage(20),
    description: 'Des tresses florales romantiques ornées de fleurs fraîches ou artificielles. Parfait pour un mariage bohème ou une séance photo en plein air. Un look poétique et naturel.',
    duration: '2h',
    price: 'À partir de 95 f',
    tags: ['Tresses', 'Fleurs', 'Bohème'],
  },
  {
    id: 'g8',
    title: 'Élégance Naturelle',
    category: 'Coiffure',
    image: getLocalImage(21),
    description: 'Un brushing et mise en beauté qui valorise la texture naturelle de vos cheveux. Volume, brillance et mouvement pour un résultat effortless chic, sans effet figé.',
    duration: '45min',
    price: 'À partir de 35 f',
    tags: ['Brushing', 'Naturel', 'Volume'],
  },
];

export const salonInfo = {
  name: 'NATURAL HAIR CLINIC',
  tagline: 'Natural Hair Care & Beauty',
  address: 'Abidjan, Port-Bouet, Côte d\'Ivoire',
  phone: '+225 0719723473',
  phone1: '+225 0707204149',
  phone2: '+225 0711582562',
  email: 'contact@naturalhairclinic.ci',
  hours: [
    { day: 'Mardi — Samedi', time: '09:00 — 19:00' },
    { day: 'Dimanche', time: '09:00 — 19:00' },
    { day: 'Lundi', time: 'Fermé' },
  ],
  social: {
    instagram: '@naturalhairclinic',
    facebook: 'NATURAL HAIR CLINIC',
    tiktok: '@naturalhairclinic',
  },
};

export const brandAssets = {
  logo: new URL('../assets/images/logo.jpeg', import.meta.url).href,
  video: new URL('../assets/video/demo.mp4', import.meta.url).href,
};

export const heroImages = {
  primary: getLocalImage(22),
  secondary: getLocalImage(23),
  tertiary: getLocalImage(24),
};

export const aboutImage = getLocalImage(25);