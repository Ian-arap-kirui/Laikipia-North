import React from "react";
import "./ServicePageStyles/serviceEvents.css";
import UpcomingEventsCard from "../../components/cards/UpcomingEventsCard";

const ServiceEvents = ({ services }) => {
  // Check if services is provided and is an array
  if (!Array.isArray(services)) {
    return <div className="serviceEvents">No events available</div>;
  }

  // Flatten events from services array
  const events = services.flatMap((service) => service.events);

  // Check if events is an array
  if (!Array.isArray(events) || events.length === 0) {
    return <div className="serviceEvents">No events available</div>;
  }

  return (
    <div className="serviceEvents">
      {events.map((event) =>
        // Add conditional rendering to check if event is valid
        event && event.id ? (
          <UpcomingEventsCard key={event.id} event={event} />
        ) : null
      )}
    </div>
  );
};

export default ServiceEvents;
