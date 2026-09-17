import ThreePropHero from '../sections/ThreePropHero.jsx';
import PressMarquee from '../sections/PressMarquee.jsx';
import HomeFave from '../sections/HomeFave.jsx';
import ValueProps from '../sections/ValueProps.jsx';
import BenefitsScroll from '../sections/BenefitsScroll.jsx';
import ThirdPartyScience from '../sections/ThirdPartyScience.jsx';
import BirthdayBuyBox from '../components/BirthdayBuyBox.jsx';
import PromoDuo from '../sections/PromoDuo.jsx';
import CtaBanner from '../sections/CtaBanner.jsx';
import SocialFan from '../sections/SocialFan.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import GameModal from '../components/GameModal.jsx';

/** Home page body — chrome (header/footer) lives in SiteLayout.
 *  Band order mirrors gruns.co top → bottom. */
export default function Home() {
  return (
    <>
      <ThreePropHero />
      <PressMarquee />
      <HomeFave />
      <ValueProps />
      <BenefitsScroll />
      <ThirdPartyScience />
      <BirthdayBuyBox />
      <PromoDuo />
      <CtaBanner />
      <SocialFan />
      <FinalCta />
      <GameModal />
    </>
  );
}
