import React from "react";
import Counselor from "../../components/cards/Counselor";
import "./ServicePageStyles/serviceMembers.css";
import { useLocation } from "react-router-dom";

const ServiceMembers = ({ services }) => {
  const location = useLocation();
  const basePath = location.pathname.split("/")[2];

  // Use only the service that matches the current route (e.g. "NGCDF")
  const currentService = services.find(
    (service) => service.link?.toLowerCase() === basePath?.toLowerCase()
  );
  const members = currentService?.members ?? [];

  return (
    <section className="serviceMembers">
      <div className="serviceMembersContainer">
        <h4 style={{ textTransform: "capitalize" }}>{basePath} Members</h4>
        <div className="memberCards">
          {members.map((member) => (
            <Counselor
              key={member.name}
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