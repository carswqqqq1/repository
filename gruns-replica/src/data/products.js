import { img } from './site.js';

const PACKED_WITH = [
  ['🥦', 'Whole Veggies'],
  ['🍇', 'Whole Fruits'],
  ['💊', 'Vitamins and Minerals'],
  ['🧠', 'Adaptogens'],
  ['🌿', 'Herbs'],
  ['🛡️', 'Antioxidants'],
  ['🦠', 'Prebiotics'],
  ['🍄', 'Super Mushrooms'],
];

const ACCORDIONS = [
  {
    title: 'Why Grüns?',
    body: [
      "It's simple!",
      "Nutrition that works. Grüns replaces handfuls of health products at a fraction of the cost. A habit that tastes so good, you'll actually want to keep it. Designed to fit whenever and wherever you want your nutrition. Just grab and go. No more gagging on pills, sloshing chalky powders, or cleaning messy blenders.",
    ],
  },
  {
    title: 'Ingredients & Allergies',
    body: [
      'Grüns contains over 20 vitamins & minerals including Vitamin A, Vitamin B6, Vitamin B12, Vitamin C, Vitamin D3, Vitamin E, Vitamin K2, Biotin, Folate, Niacin, Pantothenic Acid, Vitamin B2, Thiamine, Chromium, Copper, Iodine, Manganese, Molybdenum, Selenium, Zinc, and Iron.',
      'Grüns also contains dozens of organic and key nutrient ingredients such as whole food fruits, vegetables, super mushrooms, prebiotics, adaptogens, and antioxidants. This long list includes organic alfalfa, organic kale, organic parsley, organic spinach, organic broccoli, organic cabbage, and organic spirulina.',
      'Lastly, Grüns has a pectin base which is a fruit fiber. No gelatin. Grüns is plant-based and vegan. These gummies are free from gluten, dairy, and nuts. No synthetic sweeteners, no synthetic dyes.',
    ],
  },
  {
    title: 'Low Sugar vs. Sugar-Free',
    body: [
      'Low Sugar Grüns has 1g of added cane sugar per pack for a fresh, sweet taste. Sugar-Free Grüns swaps that for allulose — same nutrition, zero added sugar.',
    ],
  },
  {
    title: 'Science & Certifications',
    body: [
      'We put Grüns to the test in 2025 through a gold standard clinical study: randomized, double blind, and placebo controlled. Here were the results—your body absorbs the nutrients. Participants showed meaningful increases in key nutrients, measured in the blood.',
      'Every lot of our products undergoes rigorous testing to ensure quality and safety standards across heavy metals screening, microbial contaminant screening, and additional safety measures. We manufacture in FDA-registered, cGMP-compliant facilities.',
      'Manufactured in NSF, GMP, and FDA registered facilities in the U.S. & Canada, and thoroughly tested for heavy metals and contaminants.',
    ],
  },
  {
    title: 'Directions',
    body: [
      'Each large pouch of Grüns contains 28 individual packs. Grab a single pack daily and enjoy the small handful of green gummy bears inside for comprehensive nutrition.',
    ],
  },
  {
    title: 'Benefits',
    body: [
      'Grüns supports digestion, immune health, energy metabolism, and normal cognitive function — plus nutrients that help maintain healthy hair, skin, and nails — all in one convenient and delicious daily pack of gummies.',
    ],
  },
];

const ADULT_GALLERY = [
  img('og_adults_ls_52_2x_307df677-3dc9-4152-a629-7aaa003da9c9.webp?v=1786379856', 1000),
  img('Nutrition_Label_LS_-_Adults_B_-_Desktop.jpg?v=1769694431', 1000),
  img('gal-ugc-reviews.webp?v=1783699964', 1000),
  img('gal-what-to-expect.webp?v=1776361800', 1000),
  img('gal-clinical.webp?v=1772134926', 1000),
  img('gal-benefits-lifestyle.webp?v=1776361800', 1000),
];

const KIDS_GALLERY = [
  img('bday-gal-image-kids-LS.webp?v=1786463243', 1000),
  img('Nutrition_Label_LS_-_Kids_-_Desktop.jpg?v=1769694431', 1000),
  img('gal-kids-nutrition.webp?v=1776361800', 1000),
  img('gal-kids-picky.webp?v=1776361800', 1000),
  img('gal-kids-guarantee.webp?v=1776361800', 1000),
  img('gal-kids-lifestyle.webp?v=1776361800', 1000),
];

const SHREK_GALLERY = [
  img('Adult-Shrek-Gallery-Image-1-LS_1.webp?v=1788802737', 1000),
  img('NLabel-Shrek_LTO-LS.webp?v=1787845146', 1000),
  img('Adult-Shrek-Gallery-Image-4.webp?v=1787777503', 1000),
  img('Adult-Shrek-Gallery-Image-5.webp?v=1787777503', 1000),
  img('Adult-Shrek-Gallery-Image-6-LS.webp?v=1787777502', 1000),
  img('Adult-Shrek-Gallery-Image-7.webp?v=1787777503', 1000),
  img('Adult-Shrek-Gallery-Image-3.webp?v=1787777502', 1000),
];

const RASP_GALLERY = [
  img('LTO-RaspLemon-Adults-LS-1Prod.webp?v=1770663388', 1000),
  img('TastesLikeModal-MangoLTO-Adults-Desktop.webp?v=1770663388', 1000),
  img('gal-ugc-reviews.webp?v=1783699964', 1000),
  img('gal-what-to-expect.webp?v=1776361800', 1000),
  img('gal-clinical.webp?v=1772134926', 1000),
];

const ADULT_FLAVORS = [
  {
    label: 'Original',
    swatch: img('Gruns_LS_transparent.webp?v=1768251445', 300),
    href: '/products/gruns',
    note: 'Where fresh strawberries meets clean greens.',
  },
  {
    label: 'Berry Far Far Away',
    swatch: img('LTO-Shrek-Adults-LS-1Prod-NoBG.webp?v=1787845147', 300),
    href: '/products/shrek-gruns',
    badge: 'Brand New',
    note: 'Where juicy raspberry meets fresh blueberry.',
  },
];

const KIDS_FLAVORS = [
  {
    label: 'Original Kids',
    swatch: img('OG-Kids-SF-1Prod-NoBG.webp?v=1772736726', 300),
    href: '/products/gruns-kids',
    note: 'Where fresh strawberries meets clean greens.',
  },
  {
    label: 'Berry Far Far Away',
    swatch: img('LTO-Shrek-Kids-SF-1Prod-NoBG.webp?v=1787845146', 300),
    href: '/products/shrek-gruns-kids',
    badge: 'Brand New',
    note: 'Where juicy raspberry meets fresh blueberry.',
  },
];

const base = {
  rating: '4.8/5.0 (100,000), 1M+ Customers',
  accordions: ACCORDIONS,
  packedWith: PACKED_WITH,
  quantityLabel: 'How many Adults?',
  quantityOptions: [1, 2],
  planNote: 'Renews at $49.99 each 4 weeks. Cancel anytime.',
  theme: 'green',
};

export const PRODUCTS = {
  gruns: {
    ...base,
    handle: 'gruns',
    title: 'Grüns Superfood Gummies',
    subtitle: '60+ potent ingredients to revive whole body vitality in great tasting gummies.',
    benefits: [
      'Promotes mental clarity + energy',
      'Supports immunity + stress relief',
      'Supports digestion and gut health',
      'Clinically tested for nutrient absorption',
    ],
    gallery: ADULT_GALLERY,
    flavors: ADULT_FLAVORS,
    activeFlavor: 0,
    planBadge: 'MOST POPULAR: GET UP TO 55% OFF',
    plans: {
      subscribe: { price: '$29.99', compare: '$66.65', perDay: '$1.07/day', cadence: '28 packs each 4 weeks' },
      oneTime: { price: '$66.65', perDay: '$2.38/day', cadence: '28 packs delivered once' },
    },
    stickyCta: 'Save 55% + Free Shipping',
    tastesLike: [
      ['🍃', 'Fresh & Light'],
      ['🍓', 'Strawberry'],
      ['🥬', 'Sweet Greens'],
    ],
  },
  'gruns-kids': {
    ...base,
    handle: 'gruns-kids',
    title: 'Grüns Kids Superfood Gummies',
    subtitle: "Thoughtfully made for kids' unique nutrition needs with clean, balanced ingredients.",
    benefits: [
      'Supports healthy growth + development',
      'Helps fill common nutrition gaps',
      'Supports better digestion + gut health',
      'Picky-eater approved',
    ],
    gallery: KIDS_GALLERY,
    flavors: KIDS_FLAVORS,
    activeFlavor: 0,
    quantityLabel: 'How many Kids?',
    quantityOptions: [1, 2, 3, 4, 5],
    defaultQuantity: 2,
    theme: 'yellow',
    planBadge: 'MOST POPULAR: GET 58% WITH FREE SHIPPING',
    plans: {
      subscribe: { price: '$22.49', compare: '$53.32', perDay: '$0.80/day', cadence: '28 packs every 4 weeks' },
      oneTime: { price: '$53.32', perDay: '$1.90/day', cadence: '28 packs delivered once' },
    },
    planNote: 'Renews at $74.98 each 4 weeks. Cancel anytime.',
    discountLabel: 'Limited Time Discount Auto-Applied ✅',
    stickyCta: 'Save 58% + Free Shipping',
    tastesLike: [
      ['🍓', 'Strawberry'],
      ['🍉', 'Berry Burst'],
      ['🥬', 'Sweet Greens'],
    ],
  },
  'raspberry-lemonade-gruns': {
    ...base,
    handle: 'raspberry-lemonade-gruns',
    title: 'Raspberry Lemonade Grüns',
    subtitle: 'A limited-edition twist on daily nutrition — tart raspberry meets bright lemonade.',
    benefits: [
      'Promotes mental clarity + energy',
      'Supports immunity + stress relief',
      'Supports digestion and gut health',
      'Clinically tested for nutrient absorption',
    ],
    gallery: RASP_GALLERY,
    flavors: [
      {
        label: 'Raspberry Lemonade',
        swatch: img('Gruns_LS_transparent.webp?v=1768251445', 300),
        href: '/products/raspberry-lemonade-gruns',
        badge: 'Limited',
        note: 'Where tart raspberry meets bright lemonade.',
      },
      ...ADULT_FLAVORS,
    ],
    activeFlavor: 0,
    planBadge: 'MOST POPULAR: GET UP TO 55% OFF',
    plans: {
      subscribe: { price: '$32.79', compare: '$70.38', perDay: '$1.17/day', cadence: '28 packs each 4 weeks' },
      oneTime: { price: '$70.38', perDay: '$2.51/day', cadence: '28 packs delivered once' },
    },
    stickyCta: 'Save 53% + Free Shipping',
    tastesLike: [
      ['🍋', 'Lemonade'],
      ['🫐', 'Raspberry'],
      ['🥬', 'Sweet Greens'],
    ],
  },
  'shrek-gruns': {
    ...base,
    handle: 'shrek-gruns',
    title: 'Berry Far Far Away Grüns',
    subtitle: '60+ potent ingredients in a limited-edition Shrek flavor you have to taste to believe.',
    benefits: [
      'Promotes mental clarity + energy',
      'Supports immunity + stress relief',
      'Supports digestion and gut health',
      'Clinically tested for nutrient absorption',
    ],
    gallery: SHREK_GALLERY,
    flavors: ADULT_FLAVORS,
    activeFlavor: 1,
    planBadge: 'MOST POPULAR: GET UP TO 53% OFF',
    plans: {
      subscribe: { price: '$32.79', compare: '$70.38', perDay: '$1.17/day', cadence: '28 packs each 4 weeks' },
      oneTime: { price: '$70.38', perDay: '$2.51/day', cadence: '28 packs delivered once' },
    },
    stickyCta: 'Save 53% + Free Shipping',
    tastesLike: [
      ['🫐', 'Blueberry'],
      ['🍇', 'Raspberry'],
      ['🥬', 'Sweet Greens'],
    ],
  },
  'shrek-gruns-kids': {
    ...base,
    handle: 'shrek-gruns-kids',
    title: 'Berry Far Far Away Grüns Kids',
    subtitle: "A limited-edition Shrek flavor made for kids' unique nutrition needs.",
    benefits: [
      'Supports healthy growth + development',
      'Helps fill common nutrition gaps',
      'Supports better digestion + gut health',
      'Picky-eater approved',
    ],
    gallery: [img('LTO-Shrek-Kids-LS-1Prod.webp?v=1787777503', 1000), ...KIDS_GALLERY.slice(1)],
    flavors: KIDS_FLAVORS,
    activeFlavor: 1,
    quantityLabel: 'How many Kids?',
    quantityOptions: [1, 2, 3, 4, 5],
    theme: 'yellow',
    planBadge: 'MOST POPULAR: GET 52% WITH FREE SHIPPING',
    plans: {
      subscribe: { price: '$27.79', compare: '$57.05', perDay: '$0.99/day', cadence: '28 packs every 4 weeks' },
      oneTime: { price: '$57.05', perDay: '$2.04/day', cadence: '28 packs delivered once' },
    },
    stickyCta: 'Save 52% + Free Shipping',
    tastesLike: [
      ['🫐', 'Blueberry'],
      ['🍓', 'Strawberry'],
      ['🥬', 'Sweet Greens'],
    ],
  },
};

export const HOME_PRODUCT = PRODUCTS.gruns;
