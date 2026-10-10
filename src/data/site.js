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
  heroImage: null,
  aboutImage: null,
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
    image: null,
  },
];

// Authorized photos: { src, alt, width, height, category }.
// Categories: ambient, equipment, training. Empty until real photos are supplied.
export const galleryImages = [];
