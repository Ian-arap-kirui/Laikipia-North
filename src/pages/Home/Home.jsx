import ExploreEvents from "../../sections/Events/ExploreEvents";
import UpcomingEvents from "../../sections/Events/UpcomingEvents";
import FunFacts from "../../sections/FunFacts/FunFacts";
import Hero from "../../sections/Hero/Hero";
import ServSection from "../../sections/Services/ServSection";
import WhoWeAre from "../../sections/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <ServSection />
      <WhoWeAre />
      <FunFacts />
      <UpcomingEvents />
      <ExploreEvents />
    </>
  );
};

export default Home;
