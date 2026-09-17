import "../styles/home.css";
import HeroGame from "../components/HeroGame";
import ProductCarousel from "../components/ProductCarousel";
import EasySection from "../components/EasySection";
import TrustBar from "../components/TrustBar";
import BirthdayBuyBox from "../components/BirthdayBuyBox";
import MembersSection from "../components/MembersSection";

/** Home page body — chrome (Nav/Footer) lives in SiteLayout. */
export default function Home() {
  return (
    <>
      <HeroGame />
      <ProductCarousel />
      <EasySection />
      <TrustBar />
      <BirthdayBuyBox />
      <MembersSection />
    </>
  );
}
