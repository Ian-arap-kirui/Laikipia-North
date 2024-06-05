import "./ServicePageStyles/serviceEvents.css";
import UpcomingEventsCard from "../../components/cards/UpcomingEventsCard";

const ServiceEvents = ({ services }) => {
  return (
    <div className="serviceEvents">
      <UpcomingEventsCard />
      <UpcomingEventsCard />
      <UpcomingEventsCard />
      <UpcomingEventsCard />
    </div>
  );
};

export default ServiceEvents;
