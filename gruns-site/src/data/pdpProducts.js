/*
 * PDP content for /products/:handle.
 * Lives apart from data/products.js (the shop card catalog) so both can evolve independently.
 * Prices mirror the birthday-promo pricing captured in the reference screenshots.
 */

const CDN = "https://cdn.shopify.com/s/files/1/0550/9614/8034/files";

const img = (name, width = 900) => `${CDN}/${name}?width=${width}`;

const BULLETS_ADULT = [
  "Promotes mental clarity + energy",
  "Supports immunity + stress relief",
  "Supports digestion and gut health",
  "Clinically tested for nutrient absorption",
];

const BULLETS_KIDS = [
  "Supports healthy growth + development",
  "Helps fill common nutrition gaps",
  "Supports better digestion + gut health",
  "Picky-eater approved",
];

const ACCORDIONS = [
  {
    title: "Why Grüns?",
    blocks: [
      { text: "It's simple!" },
      {
        label: "Comprehensive:",
        text: "Nutrition that works. Grüns replaces handfuls of health products at a fraction of the cost.",
      },
      { label: "Delicious:", text: "A habit that tastes so good, you'll actually want to keep it." },
      {
        label: "Portable:",
        text: "Designed to fit whenever and wherever you want your nutrition. Just grab and go.",
      },
      {
        label: "No Mess, No Stress:",
        text: "No more gagging on pills, sloshing chalky powders, or cleaning messy counters.",
      },
    ],
  },
  {
    title: "Ingredients & Allergies",
    blocks: [
      { label: "Ingredients" },
      {
        text: "Grüns contains over 20 vitamins & minerals including Vitamin A, Vitamin B6, Vitamin B12, Vitamin C, Vitamin D3, Vitamin E, Vitamin K2, Biotin, Folate, Niacin, Pantothenic Acid, Vitamin B2, Thiamine, Chromium, Copper, Iodine, Manganese, Molybdenum, Selenium, Zinc, and Iron.",
      },
      {
        text: "Grüns also contains dozens of organic and key nutrient ingredients such as whole food fruits, vegetables, super mushrooms, prebiotics, adaptogens, and antioxidants. This long list includes organic alfalfa, organic kale, organic parsley, organic spinach, organic broccoli, organic cabbage, organic spirulina, organic astragalus, organic wheatgrass, organic chlorella, organic oat grass, organic beet, organic barley grass powder (gluten free), organic lemon, organic apple, organic blueberry, organic raspberry, organic strawberry, organic tomato, acai, acerola, amla, cranberry, goji, mangosteen, maqui, pomegranate, shiitake mushroom powder, and inulin.",
      },
      {
        text: "Grüns are gluten-free, dairy-free, nut-free, vegan, and contain no synthetic sweeteners, no synthetic dyes.",
      },
      { text: "Lastly, Grüns has a pectin base which is a fruit fiber. No gelatin." },
      { label: "Allergies" },
      {
        text: "Grüns is plant-based and vegan. These gummies are free from gluten, dairy, and nuts. No synthetic sweeteners, no synthetic dyes.",
      },
    ],
  },
  {
    title: "Low Sugar vs. Sugar-Free",
    image: img("SugarDifferencesGraphic-OGAdults.webp", 900),
    blocks: [
      {
        text: "Low Sugar packs 8g of cane sugar per pack for that classic gummy bear taste. Sugar-Free swaps the cane sugar for allulose — the same 60+ ingredients with only 1g of net carbs.",
      },
    ],
  },
  {
    title: "Science & Certifications",
    blocks: [
      { label: "Clinically Tested" },
      {
        text: "We put Grüns to the test in 2025 through a gold standard clinical study: randomized, double blind, and placebo controlled. Here were the results—your body absorbs the nutrients. Participants showed meaningful increases in key nutrients, measured in the blood. It’s validation that gummies aren’t just convenient. They’re effective.",
      },
      { label: "Third Party Testing" },
      {
        text: "Every lot of our products undergoes rigorous testing to ensure quality and safety standards across heavy metals screening, microbial contaminant screening, and additional safety measures. We manufacture in FDA-registered, cGMP-compliant facilities. In addition, we regularly conduct third-party laboratory testing to validate that our gummies meet label claims.",
      },
      { label: "Certifications" },
      {
        text: "Manufactured in NSF, GMP, and FDA registered facilities in the U.S. & Canada, and thoroughly tested for heavy metals and contaminants.",
      },
    ],
  },
  {
    title: "Directions",
    blocks: [
      {
        text: "Each large pouch of Grüns contains 28 individual packs. Grab a single pack daily and enjoy the small handful of green gummy bears inside for comprehensive nutrition.",
      },
    ],
  },
  {
    title: "Benefits",
    blocks: [
      {
        text: "Grüns supports digestion, immune health, energy metabolism, and normal cognitive function — plus nutrients that help maintain healthy hair, skin, and nails — all in one convenient and delicious daily pack of gummies. Our hope is this tasty daily habit can replace a big shelf in your medicine cabinet.",
      },
    ],
  },
];

const PACKED_WITH = [
  { emoji: "🥦", label: "Whole Veggies" },
  { emoji: "🍇", label: "Whole Fruits" },
  { emoji: "💊", label: "Vitamins and Minerals" },
  { emoji: "🧠", label: "Adaptogens" },
  { emoji: "🌿", label: "Herbs" },
  { emoji: "🛡️", label: "Antioxidants" },
  { emoji: "🦠", label: "Prebiotics" },
  { emoji: "🍄", label: "Super Mushrooms" },
];

const QUALITY = {
  heading: "Quality You Can Trust",
  body: "Our gummies are regularly tested for all 21 vitamins & minerals to ensure label claims are accurate and clear of contaminants including:",
  items: [
    "70 Different pesticides",
    "4 types of heavy metals",
    "16 different contaminants",
    "9 Microbial contaminants",
  ],
};

const SNACKABLE = {
  heading: "Snackable, Packable, Tested",
  body: "We know Grüns is delicious and convenient, but we wanted to understand what happens after the honeymoon. Here's what thousands of customers reported after 3 months of Grüns.",
  stats: [
    { value: "95%", label: "of users take Grüns at least 4-6x per week with 80% taking Grüns daily.*" },
    { value: "67%", label: "say their overall health and well-being have improved.*" },
    { value: "67%", label: "experienced better, more regular digestion.*" },
    { value: "52%", label: "feel more energized throughout the day.*" },
  ],
  footnote: "*In a post purchase survey of 3k+ customers who've been using Grüns daily",
  quality: QUALITY,
};

const DEFICIENT = {
  heading: "Modern Living Leaves Our Bodies Deficient",
  sub: "Grüns is the first smart gummy that fills the gaps.",
  stats: [
    {
      value: "90%",
      label:
        "of U.S. adults don’t meet recommended daily nutrient intake—including vitamins and minerals found in Grüns.",
      sup: "1",
    },
    {
      value: "61%",
      label: "of Americans experience weekly digestive issues like bloating, abdominal pain, or irregularity.",
      sup: "2",
    },
  ],
  cta: "Save 55% + Free Shipping",
  image: img("Pouch_w_Gummies_3.webp", 900),
};

const US_VS_THEM = {
  heading: "Us vs. Them",
  body: "Not overhyped or overpriced. Just comprehensive nutrition made enjoyable and for everyone.",
  columns: ["Greens powders", "Multi-vitamins"],
  rows: [
    { label: "Cost per serving", values: ["$1.26", "$3.60", "~$35"] },
    { label: "Taste", values: [{ stars: 5 }, { stars: 2 }, { stars: 3 }] },
    { label: "Vitamins & Minerals", values: ["21", "20+", "<12"] },
    { label: "Portable", values: [{ mark: true }, { mark: false }, { mark: false }] },
    { label: "No mess", values: [{ mark: true }, { mark: false }, { mark: true }] },
    {
      label: "Veggies, Fruits, Antioxidants, Mushrooms, Adaptogens",
      values: [{ mark: true }, { mark: true }, { mark: false }],
    },
  ],
};

const REVIEW_TABS = ["Taste", "Value", "Vs Powders", "Benefits", "Ingredients", "Convenience"];

const ADULT_REVIEWS = [
  {
    title: "10/10 would recommend. The convenience and taste are huge! Like mixed berries!",
    body: "Plus not having to clean a shaker bottle or extra dishes for greens stuff in powder form, is absolutely excellent!",
    author: "Dustin O.",
  },
  {
    title: "These gummies are shockingly delicious, like strawberries!",
    body: "I hate subscriptions because I feel like they are a trap so I canceled it before the gummies even arrived. We quickly decided to resubscribe because we love Grüns so much! A bonus is my kids love them too!",
    author: "Kate S.",
  },
  {
    title: "A delicious adventure for your taste buds.",
    body: "These gummy bears are more than just a treat; they’re a flavorful escape. With a burst of mouthwatering flavors, every bite is an invitation to a tasteful journey. Grüns makes healthy eating an indulgent experience.",
    author: "Kevin M.",
  },
];

const FLAVOR_CARDS = {
  berryAdults: {
    title: "Berry Far Far Away Adults",
    price: "$32.79",
    compare: "$70.38",
    badge: "BRAND NEW!",
    badgeStyle: "magenta",
    image: img("LTO-Shrek-Adults-LS-1Prod.webp", 600),
    href: "/products/shrek-gruns",
  },
  berryKids: {
    title: "Berry Far Far Away Kids",
    price: "$27.79",
    compare: "$57.05",
    badge: "BRAND NEW!",
    badgeStyle: "mint",
    image: img("LTO-Shrek-Kids-LS-1Prod.webp", 600),
    href: "/products/shrek-gruns-kids",
  },
  originalKids: {
    title: "Original Kids",
    price: "$24.99",
    compare: "$53.32",
    image: img("og_kids_ls_28.webp", 600),
    href: "/products/gruns-kids",
  },
  originalAdults: {
    title: "Original Adults",
    price: "$29.99",
    compare: "$66.65",
    badge: "BEST SELLER!",
    badgeStyle: "green",
    image: img("og_adults_ls_28.webp", 600),
    href: "/products/gruns",
  },
  raspKids: {
    title: "Raspberry Lemonade Kids",
    price: "$36.72",
    compare: "$57.05",
    badge: "BRAND NEW!",
    badgeStyle: "red",
    image: img("LTO-RL-Kids-LS-1Prod.webp", 600),
    href: "/products/raspberry-lemonade-gruns-kids",
  },
};

const SHARED_FAQS = {
  arrive: {
    q: "When will my gummies arrive?",
    a: "We're fast! Orders typically ship within 24 hours and on average arrive 3-5 days later. You could be snacking on these delicious gummies and enjoying improved health just 3 days from now.",
  },
  inside: {
    q: "What's inside each order? What am I getting?",
    a: "All of our gummies ship in a larger pouch that contains 28 daily sachets. Sachet is a fancy word for our gummy pack. Our packs each contain a small handful of gummies for you to enjoy daily. So if you're ordering for yourself, you'll get 28 daily packs inside a larger pouch. We recommend ordering on subscription. You get better pricing, and we'll make sure you're always stocked up on your healthiest habit.",
  },
  feel: {
    q: "When will I feel something?",
    a: "The timeline for experiencing the benefits of Grüns can vary from person to person. Some individuals may notice improvements within days or weeks, while for others, it may be more gradual. Consistent daily use is essential for the best results.",
  },
  returns: {
    q: "How do you handle returns?",
    a: "We want you to have the best experience with Grüns. We offer a simple 30-day guarantee on your first order. Refunds include the full value of your order. We accept all refund requests within our policy with no hassle. If you have any questions about our guarantee, our Grüns Care Bears are always happy to help at care@gruns.co. This policy applies only to your initial purchase.",
  },
};

const TRUST_BADGES = [
  { icon: "check", label: "30-Day Money-Back Guarantee" },
  { icon: "shield", label: "Clinically and 3rd party tested" },
  { icon: "card", label: "HSA/FSA eligible with", link: "Truemed" },
];

const TRUST_BADGES_KIDS = [
  { icon: "shield", label: "Clinically and 3rd party tested" },
  { icon: "check", label: "30-Day Money-Back Guarantee" },
  { icon: "card", label: "HSA/FSA eligible with", link: "Truemed" },
];

export const PDP_PRODUCTS = {
  gruns: {
    handle: "gruns",
    theme: "green",
    docTitle: "Grüns",
    title: "Grüns Superfood Gummies",
    subtitle: "60+ potent ingredients to revive whole body vitality in great tasting gummies.",
    bullets: BULLETS_ADULT,
    gallery: [
      img("bday-gal-image-adults-LS.webp"),
      img("Nutrition_Label_LS_-_Adults_B_-_Desktop.jpg"),
      img("gal-ugc-reviews.webp"),
      img("gal-what-to-expect.webp"),
      img("gal-clinical.webp"),
      img("gal-benefits-lifestyle.webp"),
    ],
    labTested: {
      label: "Tested by Light Labs in",
      date: "JUL 2026",
      link: "35 substances tested for quality →",
    },
    flavorLabel: "Select Flavor:",
    flavors: [
      {
        name: "Original",
        note: "Where fresh strawberries meets clean greens.",
        image: img("OG-Adults-LS-1Prod-NoBG.webp", 400),
        selected: true,
      },
      {
        name: "Berry Far Far Away",
        note: "Where juicy raspberry meets fresh blueberry.",
        image: img("LTO-Shrek-Adults-LS-1Prod-NoBG.webp", 400),
        badge: "Brand New",
        badgeStyle: "magenta",
        href: "/products/shrek-gruns",
      },
    ],
    quantityLabel: "How many Adults?",
    quantityHint: "Buy More. Save More.",
    quantities: [1, 2],
    defaultQuantity: 1,
    planLabel: "Autoship and Save:",
    planBanner: "Most Popular: Get Up To 55% Off",
    plans: [
      {
        id: "sub",
        title: "Subscribe & Save",
        sub: "28 packs each 4 weeks",
        price: "$29.99",
        compare: "$66.65",
        perDay: "$1.07/day",
        perks: ["Free Shipping Today", "Pause Or Cancel Any Time", "30-Day Money-Back Guarantee"],
      },
      {
        id: "once",
        title: "One Time Purchase",
        sub: "28 packs delivered once",
        price: "$66.65",
        perDay: "$2.38/day",
      },
    ],
    cta: "Start Now",
    discountNote: { style: "tag", text: "DISCOUNT AUTO-APPLIED" },
    guaranteeBar: { strong: "Less than 1%", rest: "of customers use our Money-Back Guarantee" },
    trustBadges: TRUST_BADGES,
    accordions: ACCORDIONS,
    tastesLike: [
      { emoji: "🍃", label: "Fresh & Light" },
      { emoji: "🍓", label: "Strawberry" },
      { emoji: "🥬", label: "Sweet Greens" },
    ],
    packedWith: PACKED_WITH,
    stickyBar: { cta: "Save 55% + Free Shipping" },
    sections: [
      {
        type: "promoBand",
        heading: "Going fast. No\nrestocks planned.",
        body: "Stock up on Berry Far Far Away Adults before it's gone.",
        cta: "Shop Now",
      },
      { type: "deficient", ...DEFICIENT },
      { type: "snackable", ...SNACKABLE },
      {
        type: "reviews",
        eyebrow: "4.8 stars",
        heading: "Join 1,000,000+ Others Filling Nutrition Gaps",
        tabs: REVIEW_TABS,
        reviews: ADULT_REVIEWS,
        disclaimer:
          "Testimonials featured in videos or other promotional materials may include individuals who have received compensation, free product, or other incentives.",
      },
      { type: "usVsThem", ...US_VS_THEM, image: img("UsVsThem_Adults.png", 1000) },
      {
        type: "priceDrop",
        heading: "Same Grüns.\nNew Lower Price. Subs Now Start at $29.99.",
        body: "It's our third birthday, and we're lowering prices. Not just for a week but indefinitely. Happy Birthday to us!",
        cta: "Shop Now",
        image: img("LTO-Banner-BDAYPromo-Gruns-Desktop.webp", 900),
      },
      {
        type: "spokesperson",
        quote: "“I love that it makes better health accessible to everyone”",
        body: '"As a former pro athlete, I\'ve always looked for ways to stay sharp, feel my best, and fuel my body without overcomplicating it. Grüns uses clean ingredients that actually deliver, and I love that it makes better health accessible to everyone, whether you\'re training at the highest level or just trying to make good choices every day."',
        name: "Shaun White",
        role: "3x Olympic Gold Medalist, Snowboarding Icon",
        cta: "Shop Now",
        footnote:
          "Shaun White is a paid spokesperson and investor in Grüns. He also still rips and loves taking Grüns to the slopes with him.",
        image: img("Lifestyle-ShaunWhite.webp", 900),
      },
      {
        type: "findYourFlavor",
        heading: "Find Your Flavor",
        cta: "Add to Cart",
        cards: [FLAVOR_CARDS.berryAdults, FLAVOR_CARDS.originalKids, FLAVOR_CARDS.berryKids],
      },
      {
        type: "faq",
        heading: "Any last questions?",
        items: [
          {
            q: "Do I keep getting Shrek Berry Far Far Away with my subscription?",
            a: "No. Shrek Berry Far Far Away is a limited-time flavor, available only while supplies last. We release a few limited-edition flavors throughout the year, so once Shrek Berry Far Far Away is gone, it will be replaced by another exciting seasonal flavor.",
          },
          {
            q: "I'm subscribed. How do I get Shrek Berry Far Far Away on my next order?",
            a: 'Super easy and no need to start a new subscription. Just log in to your account and choose "swap product" to get Shrek Berry Far Far Away on your next order, or "add product" to receive both flavors. You can also opt in through any email or SMS offer we send. After you try Shrek Berry Far Far Away once, your subscription automatically reverts to your original Grüns flavor. No switching-back chores for ü!',
          },
          SHARED_FAQS.arrive,
          SHARED_FAQS.inside,
          SHARED_FAQS.feel,
          SHARED_FAQS.returns,
        ],
      },
    ],
  },

  "gruns-kids": {
    handle: "gruns-kids",
    theme: "kids",
    docTitle: "Grüns Kids",
    title: "Grüns Kids Superfood Gummies",
    subtitle: "Thoughtfully made for kids’ unique nutrition needs with clean, balanced ingredients.",
    bullets: BULLETS_KIDS,
    gallery: [
      img("bday-gal-image-kids-LS-55.webp"),
      img("NLabel-Gruns-Kids-LS-Mobile.png"),
      img("mario_gallery_2.webp"),
      img("Image3_1_9388a718-d6b4-451b-a323-356036c142dd.webp"),
      img("kids-testimonial-image.webp"),
      img("mario_gallery_7webp.webp"),
      img("grunskids_lifestyle_gallery_4_eaab1306-6324-4f3d-bddd-7985afe57a30.webp"),
    ],
    flavorLabel: "Select Flavor:",
    flavors: [
      {
        name: "Original Kids",
        note: "Where fresh strawberries meets clean greens.",
        image: img("Cubs_LS_transparent.webp", 400),
        selected: true,
      },
      {
        name: "Berry Far Far Away",
        note: "Where juicy raspberry meets fresh blueberry.",
        image: img("LTO-Shrek-Kids-LS-1Prod-NoBG.webp", 400),
        badge: "Brand New",
        badgeStyle: "magenta",
        href: "/products/shrek-gruns-kids",
      },
    ],
    quantityLabel: "How many Kids?",
    quantityHint: "Buy More. Save More.",
    quantities: [1, 2, 3, 4, 5],
    defaultQuantity: 2,
    planLabel: "Autoship and Save:",
    planBanner: "Most Popular: Get 58% With Free Shipping",
    plans: [
      {
        id: "sub",
        title: "Subscribe & Save",
        sub: "28 packs every 4 weeks",
        price: "$22.49",
        compare: "$53.32",
        perDay: "$0.80/day",
        perks: ["Free Shipping Today", "Pause Or Cancel Any Time", "30-Day Money-Back Guarantee"],
      },
      {
        id: "once",
        title: "One Time Purchase",
        sub: "28 packs delivered once",
        price: "$53.32",
        perDay: "$1.90/day",
      },
    ],
    cta: "Start Now",
    discountNote: { style: "bar", text: "Limited Time Discount Auto-Applied ✅" },
    trustBadges: TRUST_BADGES_KIDS,
    accordions: ACCORDIONS,
    tastesLike: [
      { emoji: "🍃", label: "Fresh & Light" },
      { emoji: "🍓", label: "Strawberry" },
      { emoji: "🥬", label: "Sweet Greens" },
    ],
    packedWith: PACKED_WITH,
    stickyBar: { cta: "Save 58% + Free Shipping" },
    sections: [
      {
        type: "promoBand",
        heading: "Going fast. No\nrestocks planned.",
        body: "Stock up on Berry Far Far Away Adults before it's gone.",
        cta: "Shop Now",
      },
      {
        type: "quoteCarousel",
        quotes: [
          '"All of the good stuff your kids need. Easy to slip into a pocket or purse, and they actually taste good, too."',
          '"Tastes like a treat, works like a multivitamin. My kids ask for them."',
          '"It\'s a clever way to sneak in extra veggies without negotiating over dinner."',
          '"Big wins for busy mornings — no pills, no powders, no fuss."',
        ],
      },
      {
        type: "kidsSupport",
        heading: "Whole-Body Support for Growing Kids",
        sub: "60+ ingredients packed into a small pack of gummy bears.",
        image: img("All_The_Support_They_Need.jpg", 900),
        items: [
          {
            icon: "bicep",
            title: "Growth & Development",
            body: "Over 20 essential vitamins and minerals that support healthy growth, bones, and muscles.",
          },
          {
            icon: "brain",
            title: "Brain & Clarity Support",
            body: "Supports brain health with vitamins made for growing minds.",
          },
          {
            icon: "shield",
            title: "Immune Support",
            body: "Supports immune systems and occasional stress responses with Vitamin C, D, Zinc, and more.",
          },
          {
            icon: "gut",
            title: "Happy Tummies",
            body: "Helps good belly bugs grow stronger for better digestion. That's more prebiotic power.",
          },
        ],
      },
      {
        type: "deficient",
        heading: "Kids Need Nutrition More Than Ever",
        sub: "Grüns Kids gummies build strong bodies and bright minds.",
        stats: [
          {
            value: "93%",
            label:
              "of U.S. children don’t eat enough vegetables each day — a key source of nutrients that support healthy growth and development.",
            sup: "1",
          },
          { value: "90%", label: "of US children do not meet recommended daily fiber intake.", sup: "2" },
        ],
        cta: "Grüns Kids Gummies Can Support Both",
        image: img("Kids_Need_Nutrition.png", 800),
        flat: true,
      },
      { type: "quality", ...QUALITY },
      {
        type: "reviews",
        heading: "What Parents Love About Grüns",
        eyebrow: "4.8/5.0 (100k+ reviews) 1M+ members",
        eyebrowPlain: true,
        tabs: ["Taste", "Nutrition Gaps", "VS. Veggies", "Benefits", "Ingredients", "Convenience"],
        cards: true,
        reviews: [
          {
            title: '"My kids think it\'s a treat!',
            body: "I have tried all of the ‘green’ options for the kids and this is the only one they love eating. They think it's a treat.",
            author: "Dylan",
          },
          {
            title: '"So glad my wife ordered Gruns for our whole family',
            body: "Our son loves the taste and they pack more vitamins than his previous gummy.",
            author: "Robert",
          },
          {
            title: '"These actually taste great which is surprising for the sugar-free option.',
            body: "My kids take them without complaining or fighting back.",
            author: "Alicia",
          },
        ],
        disclaimer:
          "Testimonials featured in videos or other promotional materials may include individuals who have received compensation, free product, or other incentives.",
      },
      { type: "usVsThem", ...US_VS_THEM, image: img("KidsNewComparisonTable.webp", 1100) },
      {
        type: "pediatricians",
        heading: "Recommended by Parents & Pediatricians",
        cards: [
          {
            name: "Kadin Kerns",
            image: img("Kadin.jpg", 500),
            body: '"We make sure Crew has his Grüns daily to get his vitamins and nutrients to grow up as the healthiest and best version of himself!"',
          },
          {
            name: "Destiny Thompson",
            image: img("Destiny.jpg", 500),
            body: '"I love giving my kids Grüns Kids comprehensive gummies because I know they’re getting the nutrients they need in a way they actually enjoy. It’s an easy, stress-free way to support their growth and development every day!"',
          },
          {
            name: "Tammin Sursok",
            image: img("Ellipse_605.png", 500),
            body: '"Grüns has been such a game changer for me and my family. I feel like Grüns has really helped with all the vitamins and minerals and greens that we need, not to mention how tasty they are and how the kids love having their packet of gummies every morning!"',
          },
          {
            name: "Janie Ippolito",
            image: img("Janie.jpg", 500),
            body: '"Grüns are a total game-changer for our family! They’re so easy to take, and my kids absolutely love the kids’ version. Even my picky eaters are happily getting their greens in—talk about a mom win!"',
          },
        ],
      },
      {
        type: "founder",
        heading: "Our Founder",
        body: "I'm a dad to my darling son Axel (and another boy on the way). My wife Hannah and I do our best to give Axel highly nutritious foods and teach him healthy food choices. However, nutrition gaps are universal, no matter your kid's age.",
        name: "Chad Janis",
        role: "Founder",
        image: img("Chad.jpg", 900),
      },
      {
        type: "findYourFlavor",
        heading: "Find Your Flavor",
        cta: "Add to Cart",
        cards: [FLAVOR_CARDS.originalAdults, FLAVOR_CARDS.berryAdults, FLAVOR_CARDS.berryKids],
      },
      {
        type: "faq",
        heading: "Any last questions?",
        cta: { label: "No? Try Grüns Kids Now →", href: "/products/gruns-kids" },
        items: [
          {
            q: "Is Shrek Berry Far Far Away a permanent flavor?",
            a: "No. Shrek Berry Far Far Away is a limited-time flavor, available only while supplies last. We release a few limited-edition flavors throughout the year, so once it is gone, it will be replaced by another exciting seasonal flavor.",
          },
          {
            q: "I'm subscribed. How do I get Shrek Berry Far Far Away on my next order?",
            a: 'Super easy and no need to start a new subscription. Just log in to your account and choose "swap product" to get Shrek Berry Far Far Away on your next order, or "add product" to receive both flavors.',
          },
          {
            q: "How are Grüns Kids different than Grüns Adults?",
            a: "Grüns Kids is formulated for kids’ unique nutrition needs with age-appropriate levels of vitamins and minerals, a smaller daily pack, and a taste picky eaters approve of. Adults get the full-strength formula.",
          },
          { q: "How long does it take for the gummies to arrive?", a: SHARED_FAQS.arrive.a },
          { q: "What's inside each order?", a: SHARED_FAQS.inside.a },
          { q: "When should I expect my child to feel the benefits of Grüns?", a: SHARED_FAQS.feel.a },
          {
            q: "What ages are Grüns Kids recommended for?",
            a: "Grüns Kids is designed for children 4 years and older. For kids under 4, please check with your pediatrician first.",
          },
          {
            q: "Are Grüns Kids free from major allergens?",
            a: "Yes. Grüns Kids are gluten-free, dairy-free, nut-free, and vegan, with no synthetic sweeteners and no synthetic dyes.",
          },
          { q: "What if my child isn’t happy with Grüns?", a: SHARED_FAQS.returns.a },
        ],
      },
    ],
  },

  "raspberry-lemonade-gruns": {
    handle: "raspberry-lemonade-gruns",
    theme: "rasp",
    docTitle: "Grüns Raspberry Lemonade | Daily Nutrition Support",
    title: "Grüns Superfood Gummies",
    subtitle: "60+ potent ingredients to revive whole body vitality in great tasting gummies.",
    bullets: BULLETS_ADULT,
    gallery: [
      img("Adult-RaspLemon-Gallery-Image-1-LS.webp"),
      img("NLabel-RaspberryLemonadeLTO-LS.webp"),
      img("Number_3.webp"),
      img("Adult-RaspLemon-Gallery-Image-4.webp"),
      img("Adult-RaspLemon-Gallery-Image-5.webp"),
      img("Adult-RaspLemon-Gallery-Image-3.webp"),
      img("Adult-RaspLemon-Gallery-Image-7.webp"),
    ],
    flavorLabel: "Select Flavor:",
    flavors: [
      {
        name: "Raspberry Lemonade",
        note: "Raspberry blended with freshly squeezed lemonade.",
        image: img("LTO-RL-Adults-LS-1Prod-NoBG.webp", 400),
        badge: "Almost Gone",
        badgeStyle: "red",
        selected: true,
      },
      {
        name: "Original",
        note: "Where fresh strawberries meets clean greens.",
        image: img("OG-Adults-LS-1Prod-NoBG.webp", 400),
        href: "/products/gruns",
      },
    ],
    quantityLabel: "How many Adults?",
    quantityHint: "Buy More. Save More.",
    quantities: [1, 2],
    defaultQuantity: 1,
    planLabel: "Autoship and Save:",
    planBanner: "Most Popular: Get Up To 55% Off",
    plans: [
      {
        id: "sub",
        title: "Subscribe & Save",
        sub: "28 packs each 4 weeks",
        price: "$32.79",
        compare: "$70.38",
        perDay: "$1.17/day",
        perks: ["Free Shipping Today", "Pause Or Cancel Any Time", "30-Day Money-Back Guarantee"],
      },
      {
        id: "once",
        title: "One Time Purchase",
        sub: "28 packs delivered once",
        price: "$70.38",
        perDay: "$2.51/day",
      },
    ],
    cta: "Start Now",
    discountNote: { style: "tag", text: "DISCOUNT AUTO-APPLIED" },
    guaranteeBar: { strong: "Less than 1%", rest: "of customers use our Money-Back Guarantee" },
    trustBadges: TRUST_BADGES,
    accordions: ACCORDIONS,
    tastesLike: [
      { emoji: "🫐", label: "Raspberry" },
      { emoji: "🍋", label: "Lemonade" },
      { emoji: "☀️", label: "Summer" },
    ],
    packedWith: PACKED_WITH,
    stickyBar: { cta: "Save 55% + Free Shipping" },
    sections: [
      {
        type: "flavorHero",
        titleLine1: "Raspberry",
        titleLine2: "Lemonade",
        sub: "Where sweet raspberry meets fresh lemonade.",
        body: "A bright, refreshing summer flavor that combines the tangy taste of freshly squeezed lemonade with the juicy sweetness of ripe raspberries.",
      },
      {
        type: "ltoSteps",
        heading: "How limited-edition flavor subscriptions work",
        steps: [
          {
            title: "Try This Limited Time Flavor",
            body: "We drop a new limited edition flavor a few times a year. Right now, that's Raspberry Lemonade. Try it before it's gone.",
            image: img("Gummy1.webp", 500),
          },
          {
            title: "Your Next Order, Automatically Reverts Back",
            body: "After your shipment, your subscription automatically returns to your regular Grüns flavor (Strawberry). No action required.",
            image: img("Gummy2.webp", 500),
          },
          {
            title: "A Fresh New Flavor, Every Month",
            body: "We're always introducing new limited time flavors, so there's always something new to look forward to.",
            image: img("Lemon_Rasp_1.webp", 500),
          },
          {
            title: "Love It? Keep Getting It.",
            body: "If you want to keep receiving Raspberry Lemonade, sign up for Quarterly and it'll stay in your rotation.",
            image: img("image_6.webp", 500),
          },
        ],
        cta: "Subscribe & Save 55%",
      },
      { type: "deficient", ...DEFICIENT, display: true, image: null },
      { type: "snackable", ...SNACKABLE, display: true },
      {
        type: "reviews",
        eyebrow: "4.8 stars",
        heading: "Join 1,000,000+ Others Filling Nutrition Gaps",
        display: true,
        tabs: REVIEW_TABS,
        reviews: [
          {
            title: "Favorite limited flavor so far",
            body: "I've tried every flavor you've released and this one is easily at the top for me. Hope it they kee bringing it back every summer!",
            author: "Brandon T.",
          },
          {
            title: "Wish I ordered more",
            body: "I only grabbed one bag to try it and now I'm trying to make it last lol. The raspberry lemonade flavor is so good I already know I'll miss it when it's gone",
            author: "Ashley H.",
          },
          {
            title: "Tastes exactly like summer",
            body: "The lemonade comes through first then you get the raspberry at the end. It's super refreshing and not too sweet. I need this one to come back every year!",
            author: "Emily R.",
          },
        ],
        disclaimer:
          "Testimonials featured in videos or other promotional materials may include individuals who have received compensation, free product, or other incentives.",
      },
      { type: "usVsThem", ...US_VS_THEM, display: true },
      {
        type: "findYourFlavor",
        heading: "Find Your Flavor",
        cta: "Shop Now",
        cards: [
          FLAVOR_CARDS.originalAdults,
          { ...FLAVOR_CARDS.originalKids, price: "$19.99", badge: null },
          FLAVOR_CARDS.raspKids,
        ],
      },
      {
        type: "promoBand",
        heading: "Don't fumble the bag",
        body: "You never know what you have until it's out of stock. Don't miss out on Raspberry Lemonade.",
        cta: "Shop Now",
        striped: true,
      },
      {
        type: "faq",
        heading: "Any last questions?",
        display: true,
        compact: true,
        items: [
          {
            q: "Is this a permanent flavor?",
            a: "No. Raspberry Lemonade is a limited-time flavor, available only while supplies last. We release a few limited-edition flavors throughout the year, so once Raspberry Lemonade is gone, it will be replaced by another exciting seasonal flavor.",
          },
          {
            q: "Do I keep getting Raspberry Lemonade with my subscription?",
            a: "Your subscription automatically reverts to your original Grüns flavor after your Raspberry Lemonade order ships. If you want to keep it in your rotation, sign up for Quarterly.",
          },
          {
            q: "I'm subscribed. How do I get Raspberry Lemonade on my next order?",
            a: 'Super easy and no need to start a new subscription. Just log in to your account and choose "swap product" to get Raspberry Lemonade on your next order, or "add product" to receive both flavors.',
          },
          SHARED_FAQS.arrive,
          SHARED_FAQS.inside,
          SHARED_FAQS.feel,
          SHARED_FAQS.returns,
        ],
      },
    ],
  },

  "gruns-firecracker": {
    handle: "gruns-firecracker",
    theme: "firecracker",
    docTitle: "Popsicle® Firecracker Grüns | Daily Nutrition Support",
    title: "Grüns Superfood Gummies",
    subtitle: "60+ potent ingredients to revive whole body vitality in great tasting gummies.",
    bullets: BULLETS_ADULT,
    gallery: [
      img("firecracker_adults_ls_28_0ce4ee37-41fe-4fe0-9491-b5d8159766c4.webp"),
      img("Adult-Firecracker-Gallery-Image-3.webp"),
      img("Adult-Firecracker-Gallery-Image-4.webp"),
      img("Adult-Firecracker-Gallery-Image-5.webp"),
      img("Adult-Firecracker-Gallery-Image-6-LS.webp"),
      img("Adult-Firecracker-Gallery-Image-7.webp"),
      img("firecracker_adults_ls_84_aada98e5-3daf-4b53-9aeb-1c0745496518.webp"),
    ],
    labTested: {
      label: "Tested by Light Labs in",
      date: "JUL 2026",
      link: "35 substances tested for quality →",
    },
    flavorLabel: "Select Flavor:",
    flavors: [
      {
        name: "Popsicle® Firecracker",
        note: "Sweet cherry, tart lemon-lime and blue raspberry.",
        image: img("firecracker_adults_ls_28_0ce4ee37-41fe-4fe0-9491-b5d8159766c4.webp", 400),
        badge: "Almost Gone",
        badgeStyle: "red",
        selected: true,
        stock: { percent: 30, label: "30% left in stock" },
      },
      {
        name: "Original",
        note: "Where fresh strawberries meets clean greens.",
        image: img("OG-Adults-LS-1Prod-NoBG.webp", 400),
        href: "/products/gruns",
      },
    ],
    quantityLabel: "Select Quantity",
    quantities: [1, 2],
    defaultQuantity: 1,
    planLabel: "Select Offer",
    planBanner: "Most Popular: Get Up To 55% Off",
    plans: [
      {
        id: "sub",
        title: "Subscribe & Save",
        sub: "28 packs each 4 weeks",
        price: "$43.35",
        compare: "$70.38",
        perDay: "$1.55/day",
        perks: ["Free Shipping Today", "Pause Or Cancel Any Time", "30-Day Money-Back Guarantee"],
      },
      {
        id: "once",
        title: "One Time Purchase",
        sub: "28 packs delivered once",
        price: "$70.38",
        perDay: "$2.51/day",
      },
    ],
    cta: "Start Now",
    discountNote: { style: "tag", text: "DISCOUNT AUTO-APPLIED" },
    guaranteeBar: { strong: "Less than 1%", rest: "of customers use our Money-Back Guarantee" },
    trustBadges: TRUST_BADGES,
    accordions: ACCORDIONS,
    tastesLike: [
      { emoji: "🍒", label: "Cherry" },
      { emoji: "🍋", label: "Lemon-Lime" },
      { emoji: "🫐", label: "Blue Raspberry" },
    ],
    packedWith: PACKED_WITH,
    stickyBar: { cta: "Save 55% + Free Shipping" },
    sections: [
      { type: "deficient", ...DEFICIENT, card: true },
      { type: "snackable", ...SNACKABLE, card: true },
      {
        type: "reviews",
        eyebrow: "4.8 stars",
        heading: "Join 1,000,000+ Others Filling Nutrition Gaps",
        tabs: REVIEW_TABS,
        reviews: ADULT_REVIEWS,
        disclaimer:
          "Testimonials featured in videos or other promotional materials may include individuals who have received compensation, free product, or other incentives.",
      },
      { type: "usVsThem", ...US_VS_THEM },
      {
        type: "findYourFlavor",
        heading: "Find Your Flavor",
        cta: "Add to Cart",
        cards: [FLAVOR_CARDS.originalAdults, FLAVOR_CARDS.originalKids, FLAVOR_CARDS.berryAdults],
      },
      {
        type: "faq",
        heading: "Any last questions?",
        items: [
          {
            q: "Is Popsicle® Firecracker a permanent flavor?",
            a: "No. Popsicle® Firecracker is a limited-time flavor, available only while supplies last. Once it is gone, it will be replaced by another exciting seasonal flavor.",
          },
          SHARED_FAQS.arrive,
          SHARED_FAQS.inside,
          SHARED_FAQS.feel,
          SHARED_FAQS.returns,
        ],
      },
    ],
  },
};

export const PDP_HANDLES = Object.keys(PDP_PRODUCTS);

export const getPdpProduct = (handle) => PDP_PRODUCTS[handle];
