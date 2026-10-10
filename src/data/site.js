export const site = {
  name: "Premium Fitness Gym",
  location: "Vushtrri, Kosovë",
  instagram: "https://www.instagram.com/premium.fitnes/",
  instagramHandle: "@premium.fitnes",
  maps: "https://maps.app.goo.gl/am7KgMRxeaVv8A6g9?g_st=ic",
  phone: null,
  hours: "09:00–23:00",
  days: "E hënë – e shtunë",
  logo: "/images/premium-logo.png",
  heroImage: "/images/gym-overview.webp",
  aboutImage: "/images/gym-free-weights.webp",
};

export const navigation = [
  { label: "Ballina", href: "#home" },
  { label: "Rreth Nesh", href: "#about" },
  { label: "Shërbimet", href: "#services" },
  { label: "Galeria", href: "#gallery" },
  { label: "Orari", href: "#hours" },
  { label: "Kontakti", href: "#contact" },
];

// Add only services confirmed by the gym; optional image paths use public/images.
export const services = [
  {
    id: "fitness",
    title: "Stërvitje në palestër",
    description:
      "Premium Fitness Gym mirëpret meshkuj dhe femra për stërvitje në Vushtrri.",
    image: "/images/gym-machines.webp",
  },
];

// Authorized photos: { src, alt, width, height, category }.
// Categories: ambient, equipment, training. Photos supplied by the project owner.
export const galleryImages = [
  {
    src: "/images/gym-overview.webp",
    alt: "Pamje e përgjithshme e palestrës",
    width: 1284,
    height: 844,
    category: "ambient",
  },
  {
    src: "/images/gym-machines.webp",
    alt: "Pajisjet e stërvitjes në Premium Fitness Gym",
    width: 1284,
    height: 844,
    category: "equipment",
  },
  {
    src: "/images/gym-cardio.webp",
    alt: "Shiritat e vrapimit pranë dritareve",
    width: 1284,
    height: 857,
    category: "equipment",
  },
  {
    src: "/images/gym-free-weights.webp",
    alt: "Zona me pesha dhe shtanga",
    width: 1284,
    height: 871,
    category: "equipment",
  },
  {
    src: "/images/gym-training-area.webp",
    alt: "Hapësira e ushtrimeve me pasqyra",
    width: 1284,
    height: 861,
    category: "training",
  },
  {
    src: "/images/gym-training-poster.webp",
    alt: "Hapësira e stërvitjes — Mbylle javën më i fortë",
    width: 1284,
    height: 1699,
    category: "training",
  },
  {
    src: "/images/gym-interior-poster.webp",
    alt: "Ambienti i palestrës — Fundjava nuk është pushim nga qëllimet",
    width: 1284,
    height: 1664,
    category: "ambient",
  },
];
