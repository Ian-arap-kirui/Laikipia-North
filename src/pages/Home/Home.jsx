import Counselors from "../../sections/Counselors/Counselors";
import UpcomingEvents from "../../sections/Events/UpcomingEvents";
import FunFacts from "../../sections/FunFacts/FunFacts";
import Hero from "../../sections/Hero/Hero";
import LatestNews from "../../sections/LatestNews/LatestNews";
import Process from "../../sections/Process/Process";
import ServSection from "../../sections/Services/ServSection";
import CounselTestimonial from "../../sections/Testimonial/CounselTestimonial";
import WhoWeAre from "../../sections/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <ServSection />
      <WhoWeAre title="whoWeAre" />
      <FunFacts />
      <UpcomingEvents />
      <WhoWeAre title="cityEvents" />
      <CounselTestimonial />
      <Counselors />
      <Process />
      <LatestNews />
    </>
  );
};

export default Home;
