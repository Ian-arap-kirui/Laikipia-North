import { Link, NavLink, Outlet } from "react-router-dom";
import cdfLogo from "../../assets/cdf-official-logo.png";
import "./pageContentStyles/serviceContent.css";
import ServiceDetailsContainer from "../../utils/ServiceDetailsContainer";
const ServiceContent = ({ service }) => {
  return (
    <div className="serviceContentContainer">
      <div className="serviceImageContainer">
        <img src={cdfLogo} alt="blog-image" loading="lazy" />
        <ul>
          {Object.keys(service).map((key) => {
            if (Array.isArray(service[key])) {
              return (
                <NavLink
                  activeClassname="active"
                  to={`/services/${service.link}/${key}`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </NavLink>
              );
            }
          })}
        </ul>
      </div>
      {/* <Outlet /> */}
      <ServiceDetailsContainer service={service} />
    </div>
  );
};

export default ServiceContent;
