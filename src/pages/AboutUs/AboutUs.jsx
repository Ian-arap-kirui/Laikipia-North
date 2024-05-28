import Counselors from "../../sections/Counselors/Counselors";
import UpcomingEvents from "../../sections/Events/UpcomingEvents";
import FunFacts from "../../sections/FunFacts/FunFacts";
import Hero from "../../sections/Hero/Hero";
import ServSection from "../../sections/Services/ServSection";
import CounselTestimonial from "../../sections/Testimonial/CounselTestimonial";
import WhoWeAre from "../../sections/WhoWeAre/WhoWeAre";
const AboutUs = ({ data }) => {
  return (
    <>
      <Hero page={"About Us"} />
      <WhoWeAre title="whoWeAre" page={"aboutUs"} />
      <FunFacts page={"aboutUs"} />
      <ServSection page={"aboutUs"} services={data[0].services} />
      <WhoWeAre title="cityEvents" page={"aboutUs"} />
      <Counselors />
    </>
  );
};

export default AboutUs;
