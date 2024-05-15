import Hero from "../../sections/Hero/Hero";
import ServiceCardContainer from "../../sections/Services/ServiceCardContainer";

const Blogs = () => {
  return (
    <>
      <Hero page={"Blogs"} />
      <ServiceCardContainer page={"latestBlogs"} />
    </>
  );
};

export default Blogs;
