import ServiceCards from "../../components/cards/ServiceCards";
import "./servSection.css";
const ServiceCardContainer = ({ page, services }) => {
  return (
    <section className="serviceCardContainer">
      {page === "Our Services" ? (
        <>
          {services.map((item) => (
            <ServiceCards
              carDFor={"serviceCards"}
              service={item}
              key={item.id}
            />
          ))}
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
