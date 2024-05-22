import { useParams } from "react-router-dom";
import Content from "../../sections/Content/Content";
import Hero from "../../sections/Hero/Hero";

const SingleEvent = () => {
  const { eventTitle } = useParams();
  return (
    <>
      <Hero page={eventTitle} />
      <Content page={"Events"} />
    </>
  );
};

export default SingleEvent;
