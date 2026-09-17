/**
 * Content + asset map mirrored from gruns.co.
 * Product imagery is served from the live Grüns CDN so the replica keeps
 * pixel-level parity with the source photography.
 */

const CDN = 'https://gruns.co/cdn/shop/files';

export const img = (file, width) => `${CDN}/${file}${width ? `&width=${width}` : ''}`;

/* Rotator slides carry their own palette on the live site. */
export const announcements = [
  {
    bold: '🎈🎂️ IT’S GRÜNS’ BIRTHDAY! 🎂🎈',
    text: 'WE LOWERED OUR PRICE TO CELEBRATE',
    href: '/products/gruns',
    bg: '#00572c',
    color: '#ffffff',
    boldColor: '#ffcc2f',
    duration: 10000,
  },
  {
    bold: 'NEW! Shrek Berry Far Far Away. Grab it before it’s far, far gone.',
    prefix: '✨',
    suffix: '✨',
    href: '/products/shrek-gruns',
    bg: '#581e5a',
    color: '#ffffff',
    boldColor: '#ffffff',
    duration: 8000,
  },
  {
    text: '📦 FREE SHIPPING + 30-DAY GUARANTEE 🔒',
    bg: '#00572c',
    color: '#ffffff',
    boldColor: '#ffcc2f',
    duration: 8000,
  },
];

export const hero = {
  headline: '60+ Ingredients in One Pack ',
  headlineAccent: 'You’ll Actually Crave',
  cta: 'Save 55% + Free Shipping',
  image: img('lifestyle-focused-hmpg-hero.webp?v=1784247483', 1400),
  badge: img('lowered-price-badge-bday.webp?v=1786465175', 310),
  props: [
    { value: '60', sup: '+', label: 'Ingredients', note: 'Including whole fruits and veggies' },
    { value: '21', label: 'Vitamins & Minerals' },
    { value: '6g', label: 'of Fiber' },
  ],
};

export const ctaBanner = {
  heading: ['Same Grüns.', 'New Lower Price. Subs Now Start at $29.99.'],
  body: 'It’s our third birthday, and we’re lowering prices. Not just for a week but indefinitely. Happy Birthday to us!',
  cta: 'Shop Now',
  href: '/products/gruns',
  background: img('LTO-Banner-BDAYPromo-Gruns-Desktop.webp?v=1786463615', 1920),
  backgroundMobile: img('LTO-Banner-BDAYPromo-Gruns-Mobile_2.webp?v=1786471409', 800),
  product: img('Group_1984079021.webp?v=1786463731', 1058),
};

export const socialFan = {
  headingAccent: '1 million members.',
  heading: 'we’ve been getting around',
  images: [
    'Gruns-Social-Images-16.png?v=1779993611',
    'Gruns-Social-Images-08.png?v=1779993611',
    'Gruns-Social-Images-12.png?v=1779993611',
    'Gruns-Social-Images-10.png?v=1779993611',
    'Gruns-Social-Images-09.png?v=1779993611',
    'Gruns-Social-Images-13.png?v=1779993611',
    'Gruns-Social-Images-03.png?v=1779993611',
    'Gruns-Social-Images-07.png?v=1779993611',
    'Gruns-Social-Images-15.png?v=1779993610',
  ].map((f) => img(f, 500)),
};

export const finalCta = {
  heading: ['It’s Our Birthday.', 'We Lowered Our Price.'],
  points: ['30-day money-back guarantee', 'Clinically and 3rd party tested', 'HSA/FSA eligible'],
  image: img('pouch_w_gummies.webp_3.webp?v=1786460921', 1200),
};

export const bearNecessities = {
  wordmark: img('bear_necessities_dk.svg?v=1773759562', 1600),
  wordmarkMobile: img('bear_necessities_mb.svg?v=1773759562', 800),
  star: img('star_barry.svg?v=1773759562', 300),
};

export const footerLogo = img('gruns_logo_yellow.svg?v=1773677165', 300);
export const usnacksLogo = 'https://gruns.co/cdn/shop/t/165/assets/usnacks_logo.svg?v=33290623317839587701774444520';

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/grunsdaily' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@grunsdaily' },
  { label: 'YouTube', href: 'https://www.youtube.com/@grunsdaily' },
  { label: 'Facebook', href: 'https://www.facebook.com/grunsdaily' },
];

export const navProducts = [
  { title: 'Grüns Adults', href: '/products/gruns', image: img('GRUNS_Pouch_28ct_LS_Render_Front_3.png?v=1777507270', 120) },
  { title: 'Berry Far Far Away Adults', href: '/products/shrek-gruns', badge: 'BRAND NEW!', image: img('LTO-Shrek-Adults-SF-1Prod-NoBG.webp?v=1787845147', 120) },
  { title: 'Grüns Kids', href: '/products/gruns-kids', image: img('OG-Kids-SF-1Prod-NoBG.webp?v=1772736726', 120) },
  { title: 'Berry Far Far Away Kids', href: '/products/shrek-gruns-kids', badge: 'BRAND NEW!', image: img('LTO-Shrek-Kids-SF-1Prod-NoBG.webp?v=1787845146', 120) },
];

export const navImage = img('NavImage_2.webp?v=1788874351', 800);

export const navMenus = [
  {
    title: 'Rewards',
    links: [
      { label: 'VIP Access', href: '/pages/vip' },
      { label: 'Merch Store', href: '/collections/merch' },
      { label: 'Refer a Friend', href: '/pages/refer' },
      { label: 'Exclüsives 101', href: '/pages/exclusives-101' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Reviews', href: '/pages/reviews' },
      { label: 'Our Science', href: '/pages/our-science' },
      { label: 'How Grüns Works', href: '/pages/how-gruns-works' },
      { label: 'Our Story', href: '/pages/our-story' },
      { label: 'Find in Store', href: '/pages/find-in-store' },
      { label: 'FAQs', href: '/pages/faqs' },
    ],
  },
];

export const pressLogos = [
  'logo-forbes-black.svg?v=1778275372',
  'logo-people-black.svg?v=1778275372',
  'logo-today-black.svg?v=1778275372',
  'logo-womenshealth-black.svg?v=1778275372',
  'logo-GQ-black.svg?v=1778275372',
  'logo-goodhousekeeping-black.svg?v=1778275372',
  'logo-mensjournal-black.svg?v=1778275372',
  'logo-travelleisure-black.svg?v=1778275372',
].map((f) => img(f, 600));

export const homeFaves = [
  { title: 'Original Adults', href: '/products/gruns', badge: 'BEST SELLER!', badgeColor: 'var(--color-green)', price: '$29.99', compare: '$66.65', image: img('ShopTile-OG-Adults.webp?v=1769619031', 800) },
  { title: 'Berry Far Far Away Adults', href: '/products/shrek-gruns', badge: 'BRAND NEW!', badgeColor: 'var(--color-yellow)', badgeText: 'var(--color-off-black)', price: '$32.79', compare: '$70.38', image: img('LTO-Shrek-Adults-LS-1Prod.webp?v=1787777503', 800) },
  { title: 'Original Kids', href: '/products/gruns-kids', price: '$24.99', compare: '$53.32', image: img('ShopTile-OG-Kids.webp?v=1769619031', 800) },
  { title: 'Berry Far Far Away Kids', href: '/products/shrek-gruns-kids', badge: 'BRAND NEW!', badgeColor: 'var(--color-yellow)', badgeText: 'var(--color-off-black)', price: '$27.79', compare: '$57.05', image: img('LTO-Shrek-Kids-LS-1Prod.webp?v=1787777503', 800) },
];

export const valueProps = [
  { title: 'Delicious Flavor', copy: "Tastes like a treat, works like a supplement. You'll actually look forward to taking it.", image: img('valueprop-image1.webp?v=1778872544', 900) },
  { title: 'Rip. Tip. Enjoy.', copy: 'Toss it in your bag. Pop it at your desk. No shaker, no water, no routine overhaul required.', image: img('valueprop-cardimg1.webp?v=1778872543', 900) },
  { title: 'Daily Nutrition', copy: '60+ ingredients. 20+ vitamins and minerals. One convenient pack.', image: img('valueprop-cardimg3.webp?v=1778872543', 900) },
];

export const benefitLines = ['60+ INGREDIENTS', '21 Vitamins & Minerals', '6g of Fiber', '1 convenient pack'];

export const benefitAssets = {
  gummyLeft: img('Angle04.png?v=1778720518', 400),
  gummyRight: img('Angle03.png?v=1778720530', 400),
  sachetBack: img('sachet-rip.webp?v=1779380961', 900),
  bear: img('gummy_49ae5bc4-1a92-4aaf-8f02-bd9fd6f13100.webp?v=1779380980', 400),
  sachetFront: img('sachet-front.webp?v=1779380947', 900),
};

export const testedCallouts = [
  { icon: img('icon-tested-bugs.svg?v=1780087884', 128), label: '70 different pesticides' },
  { icon: img('icon-tested-metals.svg?v=1780087884', 128), label: '4 types of heavy metals' },
  { icon: img('icon-tested-contaminants.svg?v=1780087884', 128), label: '16 different contaminants' },
  { icon: img('icon-tested-microbial.svg?v=1780087884', 128), label: '9 microbial contaminants' },
];

export const icons = {
  check: img('checkmark.svg?v=1768336878', 48),
  noX: img('no-x.svg?v=1768937554', 48),
  guarantee: img('30-day_guarantee_1.svg?v=1774027762', 48),
  clinical: img('icon-clinically-tested.svg?v=1768337170', 48),
  hsa: img('icon-hsa-fsa.svg?v=1768337142', 48),
};

export const footerColumns = [
  {
    title: 'Learn',
    links: [
      { label: 'Reviews', href: '/pages/reviews' },
      { label: 'Our Science', href: '/pages/our-science' },
      { label: 'How Grüns Works', href: '/pages/how-gruns-works' },
      { label: 'Our Story', href: '/pages/our-story' },
      { label: 'Find in Store', href: '/pages/find-in-store' },
      { label: 'FAQs', href: '/pages/faqs' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Apple Watch Giveaway', href: '/pages/apple-watch-giveaway' },
      { label: 'Partners & Influencers', href: '/pages/creators' },
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
      { label: 'Exclüsives 101', href: '/pages/exclusives-101' },
      { label: 'Ü Snacks', href: '/pages/u-snacks' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Grüns Adults', href: '/products/gruns' },
      { label: 'Grüns Kids', href: '/products/gruns-kids' },
      { label: 'Nütrops', href: '/pages/nutrops', accent: true },
      { label: 'Immün', href: '/pages/immun', accent: true },
      { label: 'Jüced', href: '/pages/juced', accent: true },
      { label: 'Müves', href: '/pages/muves', accent: true },
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
