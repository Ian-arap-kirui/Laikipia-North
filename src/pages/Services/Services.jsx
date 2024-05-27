import Hero from "../../sections/Hero/Hero";
import ServiceCardContainer from "../../sections/Services/ServiceCardContainer";

const Services = ({ services }) => {
  return (
    <>
      <Hero page={"Our Services"} />
      <ServiceCardContainer page={"Our Services"} services={services} />
    </>
  );
};

export default Services;
