import UpcomingEventsCard from "../../components/cards/UpcomingEventsCard";
import "./events.css";
const EventsList = () => {
  return (
    <section className="eventsList">
      <div className="eventsListWrapper">
        <UpcomingEventsCard />
        <UpcomingEventsCard />
        <UpcomingEventsCard />
        <UpcomingEventsCard />
        <UpcomingEventsCard />
        <UpcomingEventsCard />
      </div>
    </section>
  );
};

export default EventsList;
