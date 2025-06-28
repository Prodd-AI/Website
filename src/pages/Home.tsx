import Header from "../components/general/Header";
import Hero from "../components/home/Hero";
import SecondSection from "../components/home/SecondSection";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="pt-[80px] min-h-screen bg-black text-white">
        <Hero />
        <SecondSection />
      </div>
    </div>
  );
};

export default Home;
