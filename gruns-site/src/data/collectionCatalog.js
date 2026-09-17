/**
 * Collection catalog for /collections/:handle routes.
 * Self-contained (does not depend on ../data/products.js) so this file can
 * evolve independently from the home-page carousel data.
 */

const GRUNS_ITEMS = {
  gruns: {
    id: "gruns",
    name: "Grüns",
    blurb: "60+ potent ingredients in a daily greens gummy the whole family reaches for.",
    price: "$29.99",
    compareAt: "$66.65",
    tag: "BEST SELLER",
    image: "/images/pack-og-adults.webp",
  },
  "gruns-kids": {
    id: "gruns-kids",
    name: "Grüns Kids",
    blurb: "The same daily greens, dialed in for growing bodies and picky palates.",
    price: "$24.99",
    compareAt: "$53.32",
    tag: null,
    image: "/images/pack-og-kids.webp",
  },
  "gruns-minions": {
    id: "gruns-minions",
    name: "Grüns Minions",
    blurb: "A limited-run Minions pouch stuffed with the same greens gummy formula.",
    price: "$29.99",
    compareAt: "$66.65",
    tag: "LIMITED",
    image: "/images/pack-minions-adults.webp",
  },
  "gruns-kids-minions": {
    id: "gruns-kids-minions",
    name: "Grüns Kids Minions",
    blurb: "Kids' greens gummies in a collectible Minions pack.",
    price: "$24.99",
    compareAt: "$53.32",
    tag: "LIMITED",
    image: "/images/pack-minions-kids.webp",
  },
  "gruns-raspberry-lemonade": {
    id: "gruns-raspberry-lemonade",
    name: "Grüns Raspberry Lemonade",
    blurb: "A bright raspberry lemonade twist on the original superfoods blend.",
    price: "$29.99",
    compareAt: "$66.65",
    tag: "NEW FLAVOR",
    image: "/images/pack-rl-adults.webp",
  },
  "gruns-kids-raspberry-lemonade": {
    id: "gruns-kids-raspberry-lemonade",
    name: "Grüns Kids Raspberry Lemonade",
    blurb: "Raspberry lemonade greens gummies sized just right for kids.",
    price: "$24.99",
    compareAt: "$53.32",
    tag: "NEW FLAVOR",
    image: "/images/pack-rl-kids.webp",
  },
  "gruns-firecracker": {
    id: "gruns-firecracker",
    name: "Popsicle® Firecracker Grüns",
    blurb: "A red-white-and-blue popsicle collab, same clinically-backed formula.",
    price: "$29.99",
    compareAt: "$66.65",
    tag: "BRAND NEW!",
    image: "/images/pack-firecracker-adults.webp",
  },
  "gruns-kids-firecracker": {
    id: "gruns-kids-firecracker",
    name: "Popsicle® Firecracker Grüns Kids",
    blurb: "Kids' firecracker flavor greens gummies, made with Popsicle®.",
    price: "$24.99",
    compareAt: "$53.32",
    tag: "BRAND NEW!",
    image: "/images/pack-firecracker-kids.webp",
  },
  "shrek-gruns": {
    id: "shrek-gruns",
    name: "Grüns Shrek",
    blurb: "Berry Far Far Away flavor from our Shrek collab — same 60+ ingredients.",
    price: "$32.79",
    compareAt: "$70.38",
    tag: null,
    image: "/images/pack-shrek-adults.webp",
  },
  "shrek-gruns-kids": {
    id: "shrek-gruns-kids",
    name: "Grüns Kids Shrek",
    blurb: "The Shrek collab, kid-sized: Berry Far Far Away greens gummies.",
    price: "$27.79",
    compareAt: "$57.05",
    tag: "BRAND NEW!",
    image: "/images/pack-shrek-kids.webp",
  },
};

function pickItems(...handles) {
  return handles.map((handle) => GRUNS_ITEMS[handle]);
}

const MERCH_ITEMS = [
  {
    id: "call-me-tee",
    name: "The Call Me Tee",
    blurb: "Soft everyday tee carrying the Grüns wordmark front and center.",
    price: "$26.99",
    image: "/images/merch-call-me-tee.webp",
  },
  {
    id: "bodega-hoodie",
    name: "The Bodega Hüdie",
    blurb: "Retro-washed fleece hoodie, ready for a bodega run at 2am.",
    price: "$40.49",
    image: "/images/merch-hoodie-adults.webp",
  },
  {
    id: "kids-hoodie",
    name: "The Kids Hüdie",
    blurb: "Cozy fleece hoodie sized for the smallest greens fans.",
    price: "$10.99",
    image: "/images/merch-hoodie-kids.webp",
  },
  {
    id: "bodega-tote",
    name: "Grüns Bodega Tote",
    blurb: "Spacious canvas tote with a color zipper pocket for on-the-go packs.",
    price: "$36.99",
    image: "/images/merch-tote.webp",
  },
  {
    id: "trucker-hat",
    name: "Grüns Trucker Hat",
    blurb: "Classic mesh-back trucker hat with the Grüns logo up front.",
    price: "$25.99",
    image: "/images/merch-trucker-hat.webp",
  },
  {
    id: "club-hat",
    name: "Good Greens Club Hat",
    blurb: "Corduroy club hat for card-carrying members of the Good Greens Club.",
    price: "$25.99",
    image: "/images/merch-club-hat.webp",
  },
  {
    id: "logo-hat",
    name: "Grüns Logo Hat",
    blurb: "An everyday dad hat with an embroidered Grüns logo.",
    price: "$25.99",
    image: "/images/merch-logo-hat.webp",
  },
  {
    id: "midweight-tee",
    name: "Grüns EcoSoft Midweight Tee",
    blurb: "Heavier weight tee in an ultra-soft cotton-lyocell blend.",
    price: "$28.99",
    image: "/images/merch-midweight-tee.webp",
  },
];

export const COLLECTIONS = {
  "shop-gruns": {
    title: "Shop Grüns",
    theme: "gruns",
    columns: 3,
    items: pickItems(
      "gruns",
      "gruns-firecracker",
      "gruns-kids",
      "gruns-kids-firecracker",
      "gruns-minions",
      "gruns-kids-minions",
      "shrek-gruns",
      "shrek-gruns-kids",
    ),
  },
  all: {
    title: "Products",
    theme: "gruns",
    columns: 3,
    items: pickItems(
      "gruns",
      "gruns-kids",
      "gruns-minions",
      "gruns-kids-minions",
      "gruns-raspberry-lemonade",
      "gruns-kids-raspberry-lemonade",
      "gruns-firecracker",
      "gruns-kids-firecracker",
      "shrek-gruns",
      "shrek-gruns-kids",
    ),
  },
  merch: {
    title: "Ü Snacks Shack",
    theme: "snackshack",
    columns: 4,
    heroEyebrow: "OPEN 24/7",
    heroHeadline: "Green Looks Good On You",
    heroBody:
      "Welcome to the Ü Snacks Shack. Every good neighborhood has a spot like this. Ours just happens to sell hoodies instead of sandwiches.",
    items: MERCH_ITEMS,
  },
};

export function getCollection(handle) {
  return COLLECTIONS[handle] ?? null;
}

export function fallbackCollection(handle) {
  const words = (handle || "collection")
    .split("-")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1));
  return {
    title: words.join(" ") || "Collection",
    theme: "gruns",
    columns: 3,
    items: pickItems("gruns", "gruns-kids", "shrek-gruns", "shrek-gruns-kids"),
  };
}
