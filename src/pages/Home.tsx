import Header from "../components/general/Header";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="pt-[80px] min-h-screen bg-black text-white">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
