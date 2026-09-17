import { Link, useParams } from 'react-router-dom';

const TITLES = {
  'our-science': 'Our Science',
  'how-gruns-works': 'How Grüns Works',
  'our-story': 'Our Story',
  'find-in-store': 'Find in Store',
  reviews: 'Reviews',
  vip: 'VIP Access',
  refer: 'Refer a Friend',
  'exclusives-101': 'Exclüsives 101',
  'u-snacks': 'Ü Snacks',
  account: 'Manage Your Account',
  contact: 'Contact Us',
  careers: 'Careers',
  press: 'Press Inquiries',
  creators: 'Partners & Influencers',
  returns: 'Make a Return',
  'apple-watch-giveaway': 'Apple Watch Giveaway',
  nutrops: 'Nütrops',
  immun: 'Immün',
  juced: 'Jüced',
  muves: 'Müves',
};

export default function SimplePage({ notFound }) {
  const { handle } = useParams();
  const title = notFound ? 'Page not found' : TITLES[handle] || 'Grüns';

  return (
    <section className="simple">
      <div className="simple__inner">
        <h1>{title}</h1>
        <p>
          {notFound
            ? "We couldn't find that page — but the good greens are still one click away."
            : 'Comprehensive nutrition in a gummy: 60+ whole food ingredients, 21 vitamins & minerals, and 6g of fiber in one convenient daily pack.'}
        </p>
        <p>
          <Link className="btn btn-primary" to="/collections/shop-gruns">
            Shop Grüns
          </Link>
        </p>
      </div>
    </section>
  );
}
