import { Link } from "react-router-dom";
import "./ContentPage.css";

const PAGE_COPY: Record<
  string,
  { title: string; lead: string; body: string[] }
> = {
  science: {
    title: "Our Science",
    lead: "3rd party-tested for potency, purity, & safety.",
    body: [
      "We put Grüns to the test in 2025 through a gold-standard clinical study: randomized, double blind, and placebo controlled. Participants showed meaningful increases in key nutrients, measured in the blood.",
      "Every lot undergoes rigorous testing across heavy metals screening, microbial contaminant screening, and additional safety measures in FDA-registered, cGMP-compliant facilities.",
    ],
  },
  "our-story": {
    title: "Our Story",
    lead: "We made daily nutrition, like, ridiculously easy.",
    body: [
      "Grüns started with a simple idea: comprehensive nutrition should taste good enough that you'll actually stick with it.",
      "Today, more than a million members rip, tip, and enjoy 60+ ingredients in one convenient daily pack.",
    ],
  },
  reviews: {
    title: "Reviews",
    lead: "4.8 stars from 100,000+ reviews.",
    body: [
      "Members love the taste, the convenience, and feeling the difference from consistent daily nutrition.",
      "Join 1M+ people who made Grüns part of their routine.",
    ],
  },
  "how-gruns-works": {
    title: "How Grüns Works",
    lead: "Rip. Tip. Enjoy.",
    body: [
      "Each pouch holds 28 individual packs. Grab one pack a day and enjoy the green gummy bears inside.",
      "No shaker, no water, no routine overhaul — just portable daily nutrition wherever you are.",
    ],
  },
  "help-center": {
    title: "Help Center / FAQs",
    lead: "Answers for shipping, subscriptions, ingredients, and more.",
    body: [
      "Manage your account, update subscriptions, or reach support anytime.",
      "Still stuck? Contact us and our team will help.",
    ],
  },
  "store-locator": {
    title: "Find in Store",
    lead: "Pick up Grüns near you.",
    body: [
      "Grüns is available online and at select retailers. Check back as we expand retail availability.",
    ],
  },
  "the-vip-pass": {
    title: "VIP Access",
    lead: "Rewards for Grüns members.",
    body: ["Unlock member perks, early drops, and exclusive offers with the VIP Pass."],
  },
  referrals: {
    title: "Refer a Friend",
    lead: "Share Grüns. Get rewarded.",
    body: ["Invite friends to try Grüns and earn referral rewards when they join."],
  },
  exclusives: {
    title: "Exclüsives 101",
    lead: "Limited drops and member-only merch.",
    body: ["Learn how Exclüsives work and how to catch the next drop."],
  },
  usnacks: {
    title: "Ü Snacks",
    lead: "The Grüns family of better-for-you snacks and nutrition.",
    body: ["Explore Grüns Adults, Kids, and sister brands across the Ü Snacks universe."],
  },
  contact: {
    title: "Contact Us",
    lead: "We're here to help.",
    body: ["Reach support via chat or email. For press, contact press@gruns.co."],
  },
  "first-order-shrek": {
    title: "Shrek Berry Far Far Away",
    lead: "Grab it before it's far, far gone.",
    body: [
      "Limited-edition berry flavor collab. Shop Adults and Kids while supplies last.",
    ],
  },
};

const POLICY_COPY: Record<string, { title: string; body: string }> = {
  "refund-policy": {
    title: "Refund Policy",
    body: "We offer a 30-day money-back guarantee on eligible first orders. Contact support to start a return.",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    body: "We collect account, order, and marketing data to fulfill orders and improve the Grüns experience. See full policy details on the live site for legal completeness.",
  },
  "terms-of-service": {
    title: "Terms of Service",
    body: "By using this storefront replica you agree to standard ecommerce terms of use for browsing and purchasing.",
  },
  "shipping-policy": {
    title: "Shipping Policy",
    body: "Free shipping applies on qualifying subscription and promotional orders. Delivery timelines vary by location.",
  },
};

type Props = {
  kind?: "page" | "policy";
  slug?: string;
};

export function ContentPage({ kind = "page", slug = "science" }: Props) {
  if (kind === "policy") {
    const policy = POLICY_COPY[slug] ?? {
      title: "Policy",
      body: "Policy content mirrored at a high level for this replica.",
    };
    return (
      <main className="content-page">
        <div className="page-wrap content-page__inner">
          <h1 className="display">{policy.title}</h1>
          <p>{policy.body}</p>
          <Link className="btn-primary" to="/">
            Back home
          </Link>
        </div>
      </main>
    );
  }

  const page = PAGE_COPY[slug] ?? {
    title: slug.replace(/-/g, " "),
    lead: "Grüns page",
    body: ["This route is wired to match the live site information architecture."],
  };

  return (
    <main className="content-page">
      <div className="page-wrap content-page__inner">
        <p className="content-page__eyebrow">Grüns</p>
        <h1 className="display">{page.title}</h1>
        <p className="content-page__lead">{page.lead}</p>
        {page.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className="content-page__actions">
          <Link className="btn-primary" to="/products/gruns">
            Shop Now
          </Link>
          <Link className="btn-secondary" to="/">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
