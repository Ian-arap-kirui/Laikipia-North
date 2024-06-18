import { Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChartPie,
  faCalendar,
  faTasks,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import cdfLogo from "../../assets/cdf-official-logo.png";
import "./pageContentStyles/serviceContent.css";
import ServiceDetailsContainer from "../../utils/ServiceDetailsContainer";

const iconMapping = {
  members: faUsers,
  allocations: faChartPie,
  events: faCalendar,
  projects: faTasks,
  proposals: faFileAlt,
};

const ServiceContent = ({ service }) => {
  return (
    <div className="serviceContentContainer">
      <div className="serviceImageContainer">
        <img src={cdfLogo} alt="blog-image" loading="lazy" />
        <ul>
          {Object.keys(service).map((key) => {
            if (Array.isArray(service[key])) {
              const icon = iconMapping[key.toLowerCase()];
              return (
                <NavLink
                  key={key}
                  activeClassName="active"
                  to={`/services/${service.link}/${key}`}
                >
                  <FontAwesomeIcon icon={icon} />{" "}
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
