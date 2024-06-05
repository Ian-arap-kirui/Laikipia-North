import Content from "../../../sections/Content/Content";
import "../ServicePageStyles/serviceEvents.css";
const SingleServiceEvent = ({ services }) => {
  return (
    <>
      <div className="singleServiceEvent">
        {" "}
        <Content page={"Events"} />
      </div>
    </>
  );
};

export default SingleServiceEvent;
