import Counselors from "../../sections/Counselors/Counselors";
import UpcomingEvents from "../../sections/Events/UpcomingEvents";
import Hero from "../../sections/Hero/Hero";
import ServSection from "../../sections/Services/ServSection";
import CounselTestimonial from "../../sections/Testimonial/CounselTestimonial";
const AboutUs = () => {
  return (
    <>
      <Hero page={"About Us"} />
      <ServSection />
      <UpcomingEvents />
      <CounselTestimonial />
      <Counselors />
    </>
  );
};

export default AboutUs;
