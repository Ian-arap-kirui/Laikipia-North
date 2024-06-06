import React from "react";
import Content from "../../../sections/Content/Content";
import "../ServicePageStyles/serviceEvents.css";
import { useParams } from "react-router-dom";

const SingleServiceEvent = ({ services }) => {
  const { eventTitle } = useParams();

  // extract events array from service
  const events = services.map((service) => service.events);

  // Filter the services array to find the service with the matching id
  const filteredServiceEvent = events[2].find(
    (event) => event.link === eventTitle
  );

  // Handle the case where no service is found
  if (!filteredServiceEvent) {
    return <p>Event not found</p>;
  }
  return (
    <>
      <div className="singleServiceEvent">
        <Content page="Events" event={filteredServiceEvent} />
      </div>
    </>
  );
};

export default SingleServiceEvent;
