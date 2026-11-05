import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesImages from "./components/CategoriesImages";
import MemberBenefits from "./components/MemberBenefits";
import "./App.css";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoriesImages />
        <MemberBenefits />
        <Trending/>
      </main>
    </>
  );
}

export default App;
