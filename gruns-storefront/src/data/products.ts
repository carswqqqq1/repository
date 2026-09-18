export type ProductTile = {
  id: string;
  name: string;
  path: string;
  sale: string;
  compare: string;
  badge?: { label: string; bg: string; color: string };
  image: string;
  gradient: string;
};

export const productTiles: ProductTile[] = [
  {
    id: "og-adults",
    name: "Original Adults",
    path: "/products/gruns",
    sale: "$29.99",
    compare: "$66.65",
    badge: { label: "BEST SELLER!", bg: "#dce260", color: "#00572c" },
    image: "/assets/f-ShopTile-OG-Adults.webp",
    gradient: "linear-gradient(135deg, #ffe566 0%, #7ed957 100%)",
  },
  {
    id: "shrek-adults",
    name: "Berry Far Far Away Adults",
    path: "/products/shrek-gruns",
    sale: "$32.79",
    compare: "$70.38",
    badge: { label: "BRAND NEW!", bg: "#981863", color: "#fff" },
    image: "/assets/f-LTO-Shrek-Adults-LS-1Prod.webp",
    gradient: "linear-gradient(135deg, #c44b9b 0%, #5dbb63 100%)",
  },
  {
    id: "og-kids",
    name: "Original Kids",
    path: "/products/gruns-kids",
    sale: "$24.99",
    compare: "$53.32",
    image: "/assets/f-ShopTile-OG-Kids.webp",
    gradient: "linear-gradient(135deg, #ff9a6b 0%, #ffe566 100%)",
  },
  {
    id: "shrek-kids",
    name: "Berry Far Far Away Kids",
    path: "/products/shrek-gruns-kids",
    sale: "$27.79",
    compare: "$57.05",
    badge: { label: "BRAND NEW!", bg: "#dce260", color: "#00572c" },
    image: "/assets/f-LTO-Shrek-Kids-LS-1Prod.webp",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #5dbb63 100%)",
  },
];

export const valueProps = [
  {
    title: "Delicious Flavor",
    body: "Tastes like a treat, works like a supplement. You'll actually look forward to taking it.",
    image: "/assets/f-valueprop-image1.webp",
    alt: "Delicious Flavor",
  },
  {
    title: "Rip. Tip. Enjoy.",
    body: "Toss it in your bag. Pop it at your desk. No shaker, no water, no routine overhaul required.",
    image: "/assets/f-valueprop-cardimg1.webp",
    alt: "Rip. Tip. Enjoy.",
  },
  {
    title: "Daily Nutrition",
    body: "60+ ingredients. 20+ vitamins and minerals. One convenient pack.",
    image: "/assets/f-valueprop-cardimg3.webp",
    alt: "Daily Nutrition",
  },
];

export const pressLogos = [
  "/assets/img-2.svg",
  "/assets/img-3.svg",
  "/assets/img-4.svg",
  "/assets/img-5.svg",
  "/assets/img-6.svg",
  "/assets/img-7.svg",
  "/assets/img-8.svg",
  "/assets/img-9.svg",
];

export const scienceChecks = [
  "70 different pesticides",
  "4 types of heavy metals",
  "16 different contaminants",
  "9 microbial contaminants",
];

export const buyboxAccordions = [
  {
    title: "Why Grüns?",
    body: "Comprehensive: Nutrition that works. Grüns replaces handfuls of health products at a fraction of the cost. Delicious: A habit that tastes so good, you'll actually want to keep it. Portable: Designed to fit whenever and wherever you want your nutrition. Just grab and go. No Mess, No Stress: No more gagging on pills, sloshing chalky powders, or cleaning messy counters.",
  },
  {
    title: "Ingredients & Allergies",
    body: "Grüns contains over 20 vitamins & minerals including Vitamin A, Vitamin B6, Vitamin B12, Vitamin C, Vitamin D3, Vitamin E, Vitamin K2, Biotin, Folate, Niacin, Pantothenic Acid, Vitamin B2, Thiamine, Chromium, Copper, Iodine, Manganese, Molybdenum, Selenium, Zinc, and Iron. Grüns are gluten-free, dairy-free, nut-free, vegan, and contain no synthetic sweeteners, no synthetic dyes.",
  },
  {
    title: "Low Sugar vs. Sugar-Free",
    body: "Choose Low Sugar for classic taste with reduced sugar, or Sugar-Free for zero sugar daily nutrition — same 60+ ingredient formula either way.",
  },
  {
    title: "Science & Certifications",
    body: "Clinically tested in 2025 (randomized, double blind, placebo controlled). Manufactured in NSF, GMP, and FDA registered facilities in the U.S. & Canada, and thoroughly tested for heavy metals and contaminants.",
  },
  {
    title: "Directions",
    body: "Each large pouch of Grüns contains 28 individual packs. Grab a single pack daily and enjoy the small handful of green gummy bears inside for comprehensive nutrition.",
  },
  {
    title: "Benefits",
    body: "Grüns supports digestion, immune health, energy metabolism, and normal cognitive function — plus nutrients that help maintain healthy hair, skin, and nails — all in one convenient and delicious daily pack of gummies.",
  },
];

export const socialImages = [
  "/assets/f-Gruns-Social-Images-02.png",
  "/assets/f-Gruns-Social-Images-03.png",
  "/assets/f-Gruns-Social-Images-05.png",
  "/assets/f-Gruns-Social-Images-07.png",
  "/assets/f-Gruns-Social-Images-08.png",
  "/assets/f-Gruns-Social-Images-09.png",
  "/assets/f-Gruns-Social-Images-10.png",
  "/assets/f-Gruns-Social-Images-12.png",
  "/assets/f-Gruns-Social-Images-13.png",
  "/assets/f-Gruns-Social-Images-15.png",
  "/assets/f-Gruns-Social-Images-16.png",
  "/assets/f-Gruns-Social-Images-18.png",
];

export type CatalogProduct = {
  slug: string;
  title: string;
  path: string;
  subtitle: string;
  saleFrom: string;
  compare: string;
  image: string;
  gallery: string[];
};

export const catalog: CatalogProduct[] = [
  {
    slug: "gruns",
    title: "Grüns Superfood Gummies",
    path: "/products/gruns",
    subtitle: "60+ potent ingredients to revive whole body vitality in great tasting gummies.",
    saleFrom: "$29.99",
    compare: "$66.65",
    image: "/assets/f-OG-Adults-LS-1Prod-NoBG.webp",
    gallery: [
      "/assets/f-bday-gal-image-adults-LS.webp",
      "/assets/f-gal-benefits-lifestyle.webp",
      "/assets/f-pouch_w_gummies.webp_3.webp",
    ],
  },
  {
    slug: "shrek-gruns",
    title: "Berry Far Far Away Adults",
    path: "/products/shrek-gruns",
    subtitle: "Where juicy raspberry meets fresh blueberry — limited Shrek collab.",
    saleFrom: "$32.79",
    compare: "$70.38",
    image: "/assets/f-LTO-Shrek-Adults-LS-1Prod-NoBG.webp",
    gallery: [
      "/assets/f-Adult-Shrek-Gallery-Image-1-LS_1.webp",
      "/assets/f-Adult-Shrek-Gallery-Image-3.webp",
      "/assets/f-Adult-Shrek-Gallery-Image-4.webp",
    ],
  },
  {
    slug: "gruns-kids",
    title: "Grüns Kids",
    path: "/products/gruns-kids",
    subtitle: "Daily nutrition kids actually ask for.",
    saleFrom: "$24.99",
    compare: "$53.32",
    image: "/assets/f-ShopTile-OG-Kids.webp",
    gallery: ["/assets/f-ShopTile-OG-Kids.webp"],
  },
  {
    slug: "shrek-gruns-kids",
    title: "Berry Far Far Away Kids",
    path: "/products/shrek-gruns-kids",
    subtitle: "Shrek-inspired berry flavor for kids.",
    saleFrom: "$27.79",
    compare: "$57.05",
    image: "/assets/f-LTO-Shrek-Kids-LS-1Prod.webp",
    gallery: ["/assets/f-LTO-Shrek-Kids-LS-1Prod.webp"],
  },
];
