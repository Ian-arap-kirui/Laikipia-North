import ServiceCards from "../../components/cards/ServiceCards";
import "./servSection.css";
const ServSection = () => {
  return (
    <section className="servSection">
      <div className="servSectionContainer">
        <div className="servSectionHeader">
          <h3>Find Governmental Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            suscipit maiores officiis sapiente officia. Dolorem quis rem totam
            commodi quisquam, quas error unde dignissimos, cumque ea iure,
            aspernatur fugiat non.
          </p>
        </div>
        <div className="servSectionContent">
          <ServiceCards />
          <ServiceCards />
          <ServiceCards />
          <ServiceCards />
          <ServiceCards />
          <ServiceCards />
          <ServiceCards />
        </div>
      </div>
    </section>
  );
};

export default ServSection;
