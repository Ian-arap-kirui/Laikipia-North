import React from "react";
import Content from "../../../sections/Content/Content";
import "../ServicePageStyles/serviceEvents.css";
import { useParams } from "react-router-dom";

const SingleServiceEvent = ({ services }) => {
  const { eventTitle } = useParams();

  // Check if services is defined and an array
  if (!services || !Array.isArray(services)) {
    return <p>Services not found</p>;
  }

  // Extract and flatten events array from services
  const events = services.flatMap((service) => service.events || []);

  // Filter the events array to find the event with the matching link
  const filteredServiceEvent = events.find(
    (event) => event?.link === eventTitle
  );

  // Handle the case where no event is found
  if (!filteredServiceEvent) {
    return <p>Event not found</p>;
  }

  return (
    <div className="singleServiceEvent">
      <Content page="Events" event={filteredServiceEvent} />
    </div>
  );
};

export default SingleServiceEvent;
