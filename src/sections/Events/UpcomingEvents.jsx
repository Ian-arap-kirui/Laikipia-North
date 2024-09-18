import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import "./events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpcomingEventsCard from "../../components/cards/UpcomingEventsCard";
import Slider from "react-slick";
import SectionHeader from "../../components/Headers/SectionHeader";
const UpcomingEvents = ({ services }) => {
  // Check if services is provided and is an array
  if (!Array.isArray(services)) {
    return <div className="serviceEvents">No events available</div>;
  }

  // Map through services and extract the events, ensuring that service.events exists and is an array
  const eventsArray = services.map((service) =>
    Array.isArray(service.events) ? service.events : []
  );

  // Flatten the array of arrays into a single array
  const events = [].concat(...eventsArray);

  // Filter out undefined or malformed event objects and duplicate events by event.id
  const uniqueEvents = events.filter(
    (event, index, self) =>
      event &&
      event.id !== undefined &&
      self.findIndex((e) => e.id === event.id) === index
  );

  // Check if uniqueEvents is an array and has items
  if (!Array.isArray(uniqueEvents) || uniqueEvents.length === 0) {
    return <div className="serviceEvents">No events available</div>;
  }

  return (
    <section className="upcomingEvents">
      <div className="eventsHeader">
        <SectionHeader
          title={"Upcoming Events"}
          subtitle={
            "Stay tuned for our upcoming events where you can participate in local development discussions, attend town hall meetings, and engage with your leaders to shape the future of Laikipia North."
          }
        />
      </div>
      <div className="eventsContent">
        {uniqueEvents.map((event) =>
          event && event.id ? (
            <UpcomingEventsCard key={event.id} event={event} />
          ) : null
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
