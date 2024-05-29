import React from "react";
import Counselor from "../../components/cards/Counselor";
import "./ServicePageStyles/serviceMembers.css";

const ServiceMembers = ({ services }) => {
  // Extract members from the services array
  const members = services.flatMap((service) => service.members);

  return (
    <section className="serviceMembers">
      <div className="serviceMembersContainer">
        <h3>NGCDF Members</h3>
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
