import { useParams } from "react-router-dom";
import Content from "../../sections/Content/Content";
import Hero from "../../sections/Hero/Hero";

const SinlgeProject = () => {
  const { projectId } = useParams();
  return (
    <>
      <Hero page={"Single Project"} />
      <Content />
    </>
  );
};

export default SinlgeProject;
