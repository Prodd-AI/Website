import Header from "../components/general/Header";
import Hero from "../components/home/Hero";
import SecondSection from "../components/home/SecondSection";
import IntelligentByDesignSection from "../components/home/IntelligentByDesignSection";
import Organization from "../components/home/Organization";
import WorkSection from "../components/home/WorkSection";
import Footer from "../components/general/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="pt-[80px] min-h-screen bg-black text-white">
        <Hero />
        <SecondSection />
        <IntelligentByDesignSection />
        <Organization />
        <WorkSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
