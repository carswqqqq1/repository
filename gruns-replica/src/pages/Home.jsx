import ThreePropHero from '../sections/ThreePropHero.jsx';
import PressMarquee from '../sections/PressMarquee.jsx';
import HomeFave from '../sections/HomeFave.jsx';
import ValueProps from '../sections/ValueProps.jsx';
import BenefitsScroll from '../sections/BenefitsScroll.jsx';
import ThirdPartyScience from '../sections/ThirdPartyScience.jsx';
import CtaBanner from '../sections/CtaBanner.jsx';
import SocialFan from '../sections/SocialFan.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import BuyBox from '../components/BuyBox.jsx';
import { PRODUCTS } from '../data/products.js';

export default function Home() {
  return (
    <>
      <ThreePropHero />
      <PressMarquee />
      <HomeFave />
      <ValueProps />
      <BenefitsScroll />
      <ThirdPartyScience />
      <span id="offers" />
      <BuyBox product={PRODUCTS.gruns} heading="It’s Our Birthday! We Lowered Our Prices to Celebrate." />
      <CtaBanner />
      <SocialFan />
      <FinalCta />
    </>
  );
}
