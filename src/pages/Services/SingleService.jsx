import { useParams } from "react-router-dom";
import Hero from "../../sections/Hero/Hero";
import Content from "../../sections/Content/Content";

const SingleService = ({ services }) => {
  const { serviceId } = useParams();

  // Filter the services array to find the service with the matching id
  const filteredService = services.find(
    (service) => service.link === serviceId
  );

  // Handle the case where no service is found
  if (!filteredService) {
    return <p>Service not found</p>;
  }

  return (
    <>
      <Hero page={filteredService.title} service={filteredService} />
      <Content page={"Services"} service={filteredService} />
    </>
  );
};

export default SingleService;
