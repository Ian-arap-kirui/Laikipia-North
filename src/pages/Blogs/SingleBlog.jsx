import { useParams } from "react-router-dom";
import Hero from "../../sections/Hero/Hero";
import Content from "../../sections/Content/Content";

const SingleBlog = () => {
  const { blogId } = useParams();
  return (
    <>
      <Hero page={"Single Blog"} />
      <Content />
    </>
  );
};

export default SingleBlog;
