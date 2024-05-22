import { useParams } from "react-router-dom";
import Hero from "../../sections/Hero/Hero";
import Content from "../../sections/Content/Content";

const SingleService = () => {
  const { serviceId } = useParams();
  return (
    <>
      <Hero page={"Single Service"} />
      <Content page={"Services"} />
    </>
  );
};

export default SingleService;
