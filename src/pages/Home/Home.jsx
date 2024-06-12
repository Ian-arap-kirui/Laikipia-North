import Counselors from "../../sections/Counselors/Counselors";
import UpcomingEvents from "../../sections/Events/UpcomingEvents";
import FunFacts from "../../sections/FunFacts/FunFacts";
import Hero from "../../sections/Hero/Hero";
import LatestNews from "../../sections/LatestNews/LatestNews";
import Process from "../../sections/Process/Process";
import ServSection from "../../sections/Services/ServSection";
import CounselTestimonial from "../../sections/Testimonial/CounselTestimonial";
import WhoWeAre from "../../sections/WhoWeAre/WhoWeAre";

const Home = ({ data }) => {
  return (
    <>
      <Hero page={"home"} />
      <ServSection services={data[0].services} page={"home"} />
      <WhoWeAre title="whoWeAre" page={"home"} />
      <FunFacts page={"home"} />
      <UpcomingEvents services={data[0].services} />
      <WhoWeAre title="cityEvents" page={"home"} />
      <CounselTestimonial />
      <Counselors />
      <Process />
      <LatestNews />
    </>
  );
};

export default Home;
