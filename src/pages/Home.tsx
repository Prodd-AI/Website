import Header from "../components/general/Header";
import Hero from "../components/home/Hero";
import SecondSection from "../components/home/SecondSection";
import IntelligentByDesignSection from "../components/home/IntelligentByDesignSection";
import Organization from "../components/home/Organization";
import WorkSection from "../components/home/WorkSection";
import Footer from "../components/general/Footer";
import DotGrid from "../components/animated/DotGrid";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="pt-[80px] min-h-screen bg-black text-white">
        <div className="fixed inset-0">
          <DotGrid
            dotSize={2}
            gap={36}
            baseColor="#ffffff60"
            activeColor="#5227FF"
            proximity={250}
            shockRadius={250}
            shockStrength={20}
            resistance={100}
            returnDuration={1.9}
          />
        </div>
        <Hero />
        <SecondSection />
        <div id="features">
          <IntelligentByDesignSection />
        </div>
        <div id="who-is-it-for">
          <Organization />
        </div>
        <div id="integration">
          <WorkSection />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
