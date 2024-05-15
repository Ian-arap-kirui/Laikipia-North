import ServiceCards from "../../components/cards/ServiceCards";
import "./servSection.css";
const ServiceCardContainer = ({ page }) => {
  return (
    <section className="serviceCardContainer">
      {page === "Our Services" ? (
        <>
          <ServiceCards carDFor={"serviceCards"} />
          <ServiceCards carDFor={"serviceCards"} />
          <ServiceCards carDFor={"serviceCards"} />
          <ServiceCards carDFor={"serviceCards"} />
          <ServiceCards carDFor={"serviceCards"} />
          <ServiceCards carDFor={"serviceCards"} />
        </>
      ) : (
        <>
          <ServiceCards carDFor="latestBlogs" />
          <ServiceCards carDFor="latestBlogs" />
          <ServiceCards carDFor="latestBlogs" />
          <ServiceCards carDFor="latestBlogs" />
          <ServiceCards carDFor="latestBlogs" />
          <ServiceCards carDFor="latestBlogs" />
        </>
      )}
    </section>
  );
};

export default ServiceCardContainer;
