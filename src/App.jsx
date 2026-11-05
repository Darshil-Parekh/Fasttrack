import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesImages from "./components/CategoriesImages";
import MemberBenefits from "./components/MemberBenefits";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoriesImages />
        <MemberBenefits />
      </main>
    </>
  );
}

export default App;
