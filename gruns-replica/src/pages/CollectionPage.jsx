import { Link, useParams } from 'react-router-dom';
import { img } from '../data/site.js';

const CARD = (title, file, href) => ({ title, image: img(file, 600), href });

const SHOP = [
  CARD('Grüns', 'og_adults_ls_28.webp?v=1783011543', '/products/gruns'),
  CARD('Popsicle® Firecracker Grüns', 'firecracker_adults_ls_28_0ce4ee37-41fe-4fe0-9491-b5d8159766c4.webp?v=1783010534', '/products/gruns-firecracker'),
  CARD('Grüns Kids', 'og_kids_ls_28.webp?v=1783011586', '/products/gruns-kids'),
  CARD('Popsicle® Firecracker Grüns Kids', 'firecracker_kids_ls_28.webp?v=1783010499', '/products/gruns-kids-firecracker'),
  CARD('Grüns Minions', 'LTO-Minions-Adults-LS-1Prod.webp?v=1784664959', '/products/minions-gruns'),
  CARD('Grüns Kids Minions', 'LTO-Minions-Kids-LS-1Prod.webp?v=1784664959', '/products/minions-gruns-kids'),
  CARD('Grüns Shrek', 'LTO-Shrek-Adults-LS-1Prod.webp?v=1787777503', '/products/shrek-gruns'),
  CARD('Grüns Kids Shrek', 'LTO-Shrek-Kids-LS-1Prod.webp?v=1787777503', '/products/shrek-gruns-kids'),
];

const MERCH = [
  CARD('Grüns Logo Hat', 'ShopTile-OG-Adults.webp?v=1769619031', '/products/gruns-logo-hat'),
  CARD('Grüns Good Greens Club Hat', 'ShopTile-OG-Kids.webp?v=1769619031', '/products/gruns-good-greens-club-hat'),
  CARD('Grüns Retro Washed Fleece Hoodie', 'valueprop-cardimg1.webp?v=1778872543', '/products/gruns-retro-washed-fleece-hoodie'),
];

const COLLECTIONS = {
  'shop-gruns': { title: 'Shop Grüns', items: SHOP },
  all: { title: 'Products', items: [...SHOP, ...MERCH] },
  merch: { title: 'Merch', items: MERCH },
  'gift-with-purchase': { title: 'Gift With Purchase', items: SHOP.slice(0, 4) },
  'canal-products': { title: 'Canal Products', items: SHOP.slice(0, 6) },
};

export default function CollectionPage() {
  const { handle } = useParams();
  const collection = COLLECTIONS[handle] || COLLECTIONS['shop-gruns'];

  return (
    <section className="collection">
      <div className="page">
        <h1 className="collection__title">{collection.title}</h1>
        <ul className="collection__grid">
          {collection.items.map((c) => (
            <li className="collection-card" key={c.title}>
              <Link to={c.href} className="collection-card__media">
                <img src={c.image} alt={c.title} loading="lazy" />
              </Link>
              <p className="collection-card__title">{c.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
