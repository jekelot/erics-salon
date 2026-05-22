export const site = {
  name: "Eric's Saloon",
  tagline: "Houston hair studio for modern, effortless beauty.",
  phoneDisplay: "+256 775 894564",
  phoneHref: "tel:+256775894564",
  whatsappHref: "https://wa.me/256775894564",
  email: "ericssalon.ug@gmail.com",
  kabiraExtension: "Ext. 562",
  address: {
    street: "Kabira Country Club, Bukoto",
    city: "Kampala",
    state: "Uganda",
    zip: "",
  },
  phones: [
    "0775 894564",
    "0786 919891",
    "0754 919891"
  ],
  landline: "0312 227222-5",
  founder: {
    name: "Eric Ras",
    bio: "A visionary artist and master stylist, Eric Ras has spent over two decades blending the worlds of beauty, sound, and visual storytelling. At Eric's Saloon, he brings his precision craft to every client, while simultaneously pushing boundaries in music production and literature.",
    talents: [
      {
        title: "Master Stylist",
        description: "Specializing in precision cuts, color transitions, and texture-specific treatments at Kabira Country Club.",
      },
      {
        title: "Music Producer",
        description: "Crafting immersive soundscapes and rhythmic experiences that resonate across borders.",
      },
      {
        title: "Visual Production",
        description: "Directing and producing cinematic visuals that capture the essence of style and art.",
      },
      {
        title: "Author",
        description: "Exploring themes of identity, craft, and creativity through his published works.",
      }
    ]
  },
  hours: [
    { day: "Monday", time: "10:00 am – 8:00 pm" },
    { day: "Tue – Fri", time: "10:00 am – 8:00 pm" },
    { day: "Saturday", time: "10:00 am – 6:00 pm" },
    { day: "Sunday", time: "12:00 pm – 6:00 pm" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "The Saloon", href: "/saloon" },
    { label: "Services", href: "/services" },
    { label: "Founder", href: "/#founder" },
    { label: "Visit", href: "/#visit" },
    { label: "Book", href: "/book" },
  ],
};

export type ServiceCategory = {
  id: string;
  label: string;
  blurb: string;
  image: string;
  items: { name: string; price: string; note?: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "haircuts",
    label: "Hair Cuts",
    blurb: "Precision cuts and styling for ladies, men, and children.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=80",
    items: [
      { name: "Ladies Cut", price: "100K" },
      { name: "Hair Cut & Blow Dry", price: "130K – 200K" },
      { name: "Blow Dry", price: "50K – 100K" },
      { name: "Men's Hair Cut", price: "60K" },
      { name: "Beard Trim", price: "20K" },
      { name: "Children (Below 12)", price: "50K" },
    ],
  },
  {
    id: "color",
    label: "Colouring & Highlights",
    blurb: "Expert highlights, root touch-ups, and full-head transitions.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1600&q=80",
    items: [
      { name: "1/2 Head Highlights", price: "150K – 300K" },
      { name: "Full Head Highlights", price: "250K – 500K" },
      { name: "Globe Colour", price: "200K – 400K" },
      { name: "Root Touch Up", price: "150K – 200K" },
      { name: "Men's Colour", price: "100K – 150K" },
      { name: "Hair Bleaching", price: "100K+" },
    ],
  },
  {
    id: "chemical",
    label: "Chemical & Relaxing",
    blurb: "Smoothing treatments, perms, and rebounding for perfect texture.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80",
    items: [
      { name: "Keratin Smoothing", price: "355K – 600K" },
      { name: "Rebounding (Straightening)", price: "450K – 850K" },
      { name: "Perm (Beach Wave)", price: "300K – 650K" },
      { name: "Retouch (Affirm)", price: "150K+" },
      { name: "Braids (incl. washing)", price: "150K – 300K" },
      { name: "Dreads", price: "200K – 500K" },
    ],
  },
  {
    id: "nails",
    label: "Nails & Spa",
    blurb: "Manicures, pedicures, and therapeutic hand/foot care.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1600&q=80",
    items: [
      { name: "Manicure & Pedicure Therapy", price: "100K" },
      { name: "Pedicure Therapy", price: "80K" },
      { name: "Manicure Therapy", price: "60K" },
      { name: "Artificial Nails", price: "80K" },
      { name: "Acrylic / Powder Nails", price: "150K – 300K" },
      { name: "Gel Polish", price: "30K" },
    ],
  },
  {
    id: "beauty",
    label: "Beauty & Wellness",
    blurb: "Rejuvenating facials and professional massages.",
    image: "https://images.unsplash.com/photo-1544161515-450a19d3227a?w=1600&q=80",
    items: [
      { name: "Full Body Massage (1 hr)", price: "100K" },
      { name: "Deep Tissue Massage", price: "120K" },
      { name: "Facial Diamond / Gold", price: "150K" },
      { name: "Clean Up Facial", price: "70K" },
      { name: "Full Body Scrub", price: "200K" },
      { name: "Waxing (Full Body)", price: "250K+" },
    ],
  },
];
