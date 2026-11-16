import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesImages from "./components/CategoriesImages";
import MemberBenefits from "./components/MemberBenefits";
import "./App.css";
import Trending, { TrendingBanner } from "./components/Trending";
import FeaturedSpotlight from "./components/FeaturedSpotlight";
import ShopYourVibe from "./components/ShopYourVibe";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoriesImages />
        <MemberBenefits />
        <Trending/>
        <FeaturedSpotlight />
        <TrendingBanner />
        <ShopYourVibe/>
      </main>
    </>
  );
}

export default App;
