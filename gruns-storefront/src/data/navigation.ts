export type NavLink = { label: string; path: string };

export const shopLinks: NavLink[] = [
  { label: "Grüns Adults", path: "/products/gruns" },
  { label: "Berry Far Far Away Adults", path: "/products/shrek-gruns" },
  { label: "Grüns Kids", path: "/products/gruns-kids" },
  { label: "Berry Far Far Away Kids", path: "/products/shrek-gruns-kids" },
];

export const rewardsLinks: NavLink[] = [
  { label: "VIP Access", path: "/pages/the-vip-pass" },
  { label: "Merch Store", path: "/collections/merch" },
  { label: "Refer a Friend", path: "/pages/referrals" },
  { label: "Exclüsives 101", path: "/pages/exclusives" },
];

export const learnLinks: NavLink[] = [
  { label: "Reviews", path: "/pages/reviews" },
  { label: "Our Science", path: "/pages/science" },
  { label: "How Grüns Works", path: "/pages/how-gruns-works" },
  { label: "Our Story", path: "/pages/our-story" },
  { label: "Find in Store", path: "/pages/store-locator" },
  { label: "FAQs", path: "/pages/help-center" },
];

export const footerLearn = learnLinks;

export const footerConnect: NavLink[] = [
  { label: "Apple Watch Giveaway", path: "/pages/monthly-apple-watch-giveaway-official-rules" },
  { label: "Partners & Influencers", path: "https://473gy6qog6s.typeform.com/to/L03Wohx2" },
  { label: "Press Inquiries", path: "mailto:press@gruns.co" },
  { label: "Make a Return", path: "https://gruns.loopreturns.com/" },
  { label: "Careers", path: "https://job-boards.greenhouse.io/gruns" },
  { label: "Account Login", path: "/a/account/login" },
  { label: "Contact Us", path: "/pages/contact" },
];

export const footerRewards = rewardsLinks;

export const footerSnacks: NavLink[] = [
  { label: "About", path: "/pages/usnacks" },
  { label: "Grüns Adults", path: "/products/gruns" },
  { label: "Grüns Kids", path: "/products/gruns-kids" },
  { label: "Nütrops", path: "https://nutrops.co/" },
  { label: "Immün", path: "https://immun.co/" },
  { label: "Jüced", path: "https://juced.co/" },
  { label: "Müves", path: "https://muves.co/" },
];

export const legalLinks: NavLink[] = [
  { label: "Refund Policy", path: "/policies/refund-policy" },
  { label: "Privacy Policy", path: "/policies/privacy-policy" },
  { label: "Terms Of Service", path: "/policies/terms-of-service" },
  { label: "Shipping Policy", path: "/policies/shipping-policy" },
  { label: "Authorized Resale Policy", path: "/pages/authorized-resale-policy" },
];

export const announcementSlides = [
  {
    bg: "#581e5a",
    color: "#ffcc2f",
    text: "✨ NEW! Shrek Berry Far Far Away. Grab it before it's far, far gone. ✨",
  },
  {
    bg: "#00572c",
    color: "#ffcc2f",
    text: "IT'S GRÜNS' BIRTHDAY! WE LOWERED OUR PRICE TO CELEBRATE",
  },
  {
    bg: "#00572c",
    color: "#ffffff",
    text: "FREE SHIPPING + 30-DAY GUARANTEE",
  },
];
