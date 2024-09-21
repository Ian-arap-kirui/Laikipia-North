import React, { useState } from "react";
import { Outlet, useParams, useLocation, Link } from "react-router-dom";
import "../components/PageContent/pageContentStyles/serviceContent.css";
import EducationReport from "../assets/EducationReport.pdf";
import { constituencyData } from "./data";
import UpcomingEvents from "../sections/Events/UpcomingEvents";
import "./serviceDetail.css";
import LatestNews from "../sections/LatestNews/LatestNews";
const ServiceDetailsContainer = ({ service }) => {
  const { serviceId } = useParams();
  const location = useLocation();
  const wards = constituencyData.map((item) => item.wards);
  // Exact match for the constituency-office route
  const isConstituencyOfficeRoute =
    location.pathname === `/services/constituency-office`;

  // All other service routes (excluding constituency-office)
  const isServiceRoute =
    location.pathname === `/services/${serviceId}` &&
    !isConstituencyOfficeRoute;

  return (
    <>
      {isServiceRoute && (
        <>
          <div className="serviceDetailsContainer">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
           1
            <div className="constituencyOfficeEvents">
              <UpcomingEvents services={constituencyData[0].services} />
              <LatestNews />
            </div>
          </div>
        </>
      )}

      {isConstituencyOfficeRoute && (
        <>
          <div className="serviceDetailsContainer">
            <h4>{service.title}</h4>
            <p>{service.description}</p>

            {/* Display PDF using iframe */}

            <div className="constituencyOfficeCards">
              {wards[0].map((item) => {
                // Replace spaces with dashes in the item title
                const formattedTitle = item.title.replace(/\s+/g, "-");

                return (
                  <Link
                    to={`/wards/${formattedTitle}`}
                    className="upcomingEventCard"
                    key={item.id}
                  >
                    <img src={item.img1} alt="" />
                    <h5>{item.title}</h5>
                    <span>{item.desc}</span>
                    <div className="eventsDetails">
                      <h5>{item.title}</h5>
                      <span>{item.desc}</span>
                      <Link to={`/wards/${formattedTitle}`}>Read More</Link>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="educationReport">
              <h4>Our Latest Education Report</h4>
              <p>
                Our constituency is committed to enhancing educational
                opportunities for all residents. This section provides
                comprehensive reports on the current state of education,
                initiatives aimed at improving school infrastructure,
                scholarships, and programs to support both students and
                teachers. Stay informed about ongoing projects, community
                engagement in education, and future plans to ensure that every
                child has access to quality education.
              </p>
              <iframe
                src={EducationReport}
                width="100%"
                height="800px"
                style={{ border: "none" }}
                title="Constituency Office PDF"
              ></iframe>
            </div>
            <div className="constituencyOfficeEvents">
              <UpcomingEvents services={constituencyData[0].services} />
              <LatestNews />
            </div>
          </div>
        </>
      )}

      {!isServiceRoute && !isConstituencyOfficeRoute && (
        <>
          <h4>{service.title}</h4>
          <Outlet />
        </>
      )}
    </>
  );
};

export default ServiceDetailsContainer;
