import { Outlet, useParams, useLocation } from "react-router-dom";
import "../components/PageContent/pageContentStyles/serviceContent.css";
const ServiceDetailsContainer = ({ service }) => {
  const { serviceId } = useParams();
  const location = useLocation();

  // Check if the current route matches /services/:serviceId
  const isServiceRoute = location.pathname === `/services/${serviceId}`;

  // Render the component with service description if it's a service route
  if (isServiceRoute) {
    return (
      <div className="serviceDetailsContainer">
        <h4>{service.title}</h4>
        <p>{service.description}</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510690.01547941106!2d36.48533901891072!3d0.29413638592392544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178635240419ec05%3A0x928ba7f70971d8de!2sLaikipia%20County!5e0!3m2!1sen!2ske!4v1716971153189!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }

  // Otherwise, render the Outlet to handle nested routes
  return (
    <>
      <h4>{service.title}</h4>
      <Outlet />
    </>
  );
};

export default ServiceDetailsContainer;
