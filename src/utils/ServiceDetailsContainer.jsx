import React, { useState } from "react";
import {
  Outlet,
  useParams,
  useLocation,
  Link,
  NavLink,
} from "react-router-dom";
import "../components/PageContent/pageContentStyles/serviceContent.css";

// Function to extract unique categories
const getUniqueCategories = (projects) => {
  const categories = projects.map((project) => project.categ);
  return [...new Set(categories)];
};

const ServiceDetailsContainer = ({ service }) => {
  const { serviceId } = useParams();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...getUniqueCategories(service.projects)];

  const isServiceRoute = location.pathname === `/services/${serviceId}`;
  const isConstituencyOfficeRoute =
    location.pathname === `/services/constituency-office`;

  const filteredProjects =
    selectedCategory === "All"
      ? service.projects
      : service.projects.filter(
          (project) => project.categ === selectedCategory
        );

  return (
    <>
      {isServiceRoute && (
        <div className="serviceDetailsContainer">
          <h4>{service.title}</h4>
          <p>{service.description}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510690.01547941106!2d36.48533901891072!3d0.29413638592392544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178635240419ec05%3A0x928ba7f70971d8de!2sLaikipia%20County!5e0!3m2!1sen!2ske!4v1716971153189!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}

      {isServiceRoute && isConstituencyOfficeRoute && (
        <>
          {" "}
          <div></div>
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
