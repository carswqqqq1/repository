/** Shared content + asset map for the site chrome and homepage sections.
 *
 *  Imagery and typography are the real gruns.co renditions, pulled from their
 *  Shopify CDN into `public/` by `tools/fetch-assets.mjs` so the replica serves
 *  them from its own origin. */

/** Resolve a file in `public/images`. */
export const img = (file) => `/images/${file}`;

/* ---------------------------------------------------------------- header */

export const navProducts = [
  { title: 'Grüns Adults', href: '/products/gruns', image: img('nav-og-adults.png'), badge: 'Best Seller' },
  {
    title: 'Berry Far Far Away Adults',
    href: '/products/gruns-shrek',
    image: img('nav-shrek-adults.webp'),
    badge: 'Brand New',
  },
  { title: 'Grüns Kids', href: '/products/gruns-kids', image: img('nav-og-kids.webp') },
  {
    title: 'Berry Far Far Away Kids',
    href: '/products/gruns-kids-shrek',
    image: img('nav-shrek-kids.webp'),
    badge: 'Brand New',
  },
];

export const navImage = img('nav-promo.webp');

export const navMenus = [
  {
    title: 'Learn',
    links: [
      { label: 'Reviews', href: '/pages/reviews' },
      { label: 'Our Science', href: '/pages/our-science' },
      { label: 'How Grüns Works', href: '/pages/how-gruns-works' },
      { label: 'Our Story', href: '/pages/our-story' },
      { label: 'FAQs', href: '/pages/faq' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Apple Watch Giveaway', href: '/pages/apple-watch-giveaway' },
      { label: 'Partners & Influencers', href: '/pages/partners' },
      { label: 'Press Inquiries', href: '/pages/press' },
      { label: 'Make a Return', href: '/pages/returns' },
      { label: 'Contact Us', href: '/pages/contact' },
    ],
  },
  {
    title: 'Rewards',
    links: [
      { label: 'VIP Access', href: '/pages/vip' },
      { label: 'Merch Store', href: '/collections/merch' },
      { label: 'Refer a Friend', href: '/pages/refer' },
      { label: 'Exclüsives 101', href: '/pages/exclusives' },
    ],
  },
];

/* ---------------------------------------------------------------- footer */

export const footerColumns = [
  {
    title: 'Learn',
    links: [
      { label: 'Reviews', href: '/pages/reviews' },
      { label: 'Our Science', href: '/pages/our-science' },
      { label: 'How Grüns Works', href: '/pages/how-gruns-works' },
      { label: 'Our Story', href: '/pages/our-story' },
      { label: 'Find in Store', href: '/pages/find-in-store' },
      { label: 'FAQs', href: '/pages/faq' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Apple Watch Giveaway', href: '/pages/apple-watch-giveaway' },
      { label: 'Partners & Influencers', href: '/pages/partners' },
      { label: 'Press Inquiries', href: '/pages/press' },
      { label: 'Make a Return', href: '/pages/returns' },
      { label: 'Careers', href: '/pages/careers' },
      { label: 'Account Login', href: '/pages/account' },
      { label: 'Contact Us', href: '/pages/contact' },
    ],
  },
  {
    title: 'Rewards',
    links: [
      { label: 'VIP Access', href: '/pages/vip' },
      { label: 'Merch Store', href: '/collections/merch' },
      { label: 'Refer a Friend', href: '/pages/refer' },
      { label: 'Exclüsives 101', href: '/pages/exclusives' },
    ],
  },
  {
    title: 'ü snacks',
    links: [
      { label: 'About', href: '/pages/usnacks' },
      { label: 'Grüns Adults', href: '/products/gruns' },
      { label: 'Grüns Kids', href: '/products/gruns-kids' },
      { label: 'Nütrops', href: '/pages/nutrops' },
      { label: 'Immün', href: '/pages/immun' },
      { label: 'Jüced', href: '/pages/juced' },
      { label: 'Müves', href: '/pages/muves' },
    ],
  },
];

export const legalLinks = [
  'Refund Policy',
  'Privacy Policy',
  'Terms Of Service',
  'Shipping Policy',
  'My Privacy Choices',
  'Authorized Resale Policy',
  'Accessibility',
];

/* ------------------------------------------------------------ home: fave */

export const homeFaves = [
  {
    title: 'Original Adults',
    href: '/products/gruns',
    image: img('tile-og-adults.webp'),
    price: '$29.99',
    compare: '$66.65',
    badge: 'BEST SELLER!',
    badgeColor: 'var(--color-yellow)',
    badgeText: 'var(--color-ink)',
  },
  {
    title: 'Berry Far Far Away Adults',
    href: '/products/gruns-shrek',
    image: img('tile-shrek-adults.webp'),
    price: '$32.79',
    compare: '$70.38',
    badge: 'BRAND NEW!',
    badgeColor: '#b4257f',
  },
  {
    title: 'Original Kids',
    href: '/products/gruns-kids',
    image: img('tile-og-kids.webp'),
    price: '$24.99',
    compare: '$53.32',
  },
  {
    title: 'Berry Far Far Away Kids',
    href: '/products/gruns-kids-shrek',
    image: img('tile-shrek-kids.webp'),
    price: '$27.79',
    compare: '$57.05',
    badge: 'BRAND NEW!',
    badgeColor: '#b4257f',
  },
];

/* ------------------------------------------------------ home: value props */

export const valueProps = [
  {
    title: 'Delicious Flavor',
    copy: "Tastes like a treat, works like a supplement. You'll actually look forward to taking it.",
    image: img('easy-flavor.webp'),
  },
  {
    title: 'Rip. Tip. Enjoy.',
    copy: 'Toss it in your bag. Pop it at your desk. No shaker, no water, no routine overhaul required.',
    image: img('easy-rip.webp'),
  },
  {
    title: 'Daily Nutrition',
    copy: '60+ ingredients. 20+ vitamins and minerals. One convenient pack.',
    image: img('easy-daily.webp'),
  },
];

/* ----------------------------------------------------------- home: press */

export const pressLogos = [
  img('press-womenshealth.svg'),
  img('press-goodhousekeeping.svg'),
  img('press-gq.svg'),
  img('press-travelleisure.svg'),
  img('press-forbes.svg'),
  img('press-mensjournal.svg'),
  img('press-people.svg'),
  img('press-today.svg'),
];

/* -------------------------------------------------- home: benefits scroll */

export const benefitLines = [
  '60+ INGREDIENTS',
  '21 VITAMINS & MINERALS',
  '6G OF FIBER',
  '1 CONVENIENT PACK',
];

export const benefitAssets = {
  gummyLeft: img('benefit-gummy-left.png'),
  gummyRight: img('benefit-gummy-right.png'),
  sachetBack: img('sachet-rip.webp'),
  bear: img('gummy-bear.webp'),
  sachetFront: img('sachet-front.webp'),
};

/* ------------------------------------------------- home: 3rd party tested */

export const testedCallouts = [
  { label: '70 different pesticides', icon: img('icon-tested-bugs.svg') },
  { label: '4 types of heavy metals', icon: img('icon-tested-metals.svg') },
  { label: '16 different contaminants', icon: img('icon-tested-contaminants.svg') },
  { label: '9 microbial contaminants', icon: img('icon-tested-microbial.svg') },
];

/* ----------------------------------------------------- home: buy box (PDP) */

export const buyBoxGallery = [
  { src: img('gal-bday-adults.webp'), alt: 'Grüns birthday pouch with a 55% off callout' },
  { src: img('nutrition-label-adults.jpg'), alt: 'Grüns supplement facts label' },
  { src: img('gal-reviews.webp'), alt: 'Customer testimonials and trust marks' },
  { src: img('gal-expect.webp'), alt: 'What to expect after taking Grüns' },
  { src: img('gal-clinical.webp'), alt: 'Clinical study results for Vitamin C and Folate' },
  { src: img('gal-benefits.webp'), alt: 'Grüns supports digestion, immunity and energy' },
];

export const buyBoxFlavors = [
  {
    id: 'original',
    name: 'Original',
    note: 'Where fresh strawberries meets clean greens.',
    swatch: img('pouch-og-adults.webp'),
  },
  {
    id: 'shrek',
    name: 'Berry Far Far Away',
    note: 'Where juicy raspberry meets fresh blueberry.',
    tag: 'Brand New',
    swatch: img('pouch-shrek-adults.webp'),
  },
];

export const buyBoxTrust = [
  { label: '30-Day Money-Back Guarantee', icon: img('icon-guarantee.svg') },
  { label: 'Clinically and 3rd party tested', icon: img('icon-clinically-tested.svg') },
  { label: 'HSA/FSA eligible with Truemed', icon: img('icon-hsa-fsa.svg') },
];

/* ---------------------------------------------------- home: social fan */

export const socialImages = [16, 8, 12, 10, 9, 13, 3, 7, 15, 2, 5, 23, 19, 22, 21, 18].map((n) =>
  img(`social-${String(n).padStart(2, '0')}.png`)
);

/* ---------------------------------------------------------- misc branding */

export const brandAssets = {
  wordmarkYellow: img('gruns-wordmark-yellow.svg'),
  bearNecessities: img('bear-necessities.svg'),
  star: img('star-barry.svg'),
  checkmark: img('checkmark.svg'),
  ctaBannerBg: img('promo-confetti.webp'),
  ctaBannerPouch: img('pouch-birthday-badge.webp'),
  finalCtaPouch: img('pouch-with-gummies.webp'),
  heroLifestyle: img('hero-lifestyle.webp'),
  heroBadge: img('hero-badge.webp'),
};
