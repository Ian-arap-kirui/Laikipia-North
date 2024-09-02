import React from "react";
import Counselor from "../../components/cards/Counselor";
import "./ServicePageStyles/serviceMembers.css";
import { useLocation } from "react-router-dom";

const ServiceMembers = ({ services }) => {
  // Extract members from the services array
  const members = services.flatMap((service) => service.members);
  const location = useLocation(); // Hook to get the current location
  const basePath = location.pathname.split("/")[2]; // Adjust index based on your routing structure
  return (
    <section className="serviceMembers">
      <div className="serviceMembersContainer">
        <h4 style={{ textTransform: "capitalize" }}>{basePath} Members</h4>
        <div className="memberCards">
          {members.map((member, index) => (
            <Counselor
              key={index}
              name={member.name}
              designation={member.designation}
              image={member.profile}
              socialIcons={member.socialIcons}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMembers;
