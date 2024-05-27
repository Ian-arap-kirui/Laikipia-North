import dummyImg from "../../assets/business.jpg";
const ServiceContent = ({ service }) => {
  return (
    <>
      <div className="blogImageContainer">
        <h2>{service.title}</h2>
        <img src={dummyImg} alt="blog-image" loading="lazy" />
      </div>
      <div className="serviceDetailsContainer">
        <div className="serviceContainer">
          <div class="serviceText">
            <p>{service.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
