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
          <NavLink
            activeClassname="active"
            to={`/services/${service.title}/allocations`}
          >
            {" "}
            Allocations
          </NavLink>
          <NavLink
            activeClassname="active"
            to={`/services/${service.title}/projects`}
          >
            {" "}
            Projects
          </NavLink>
          <NavLink
            activeClassname="active"
            to={`/services/${service.title}/disbursments`}
          >
            Disbursments
          </NavLink>
          <NavLink
            activeClassname="active"
            to={`/services/${service.title}/proposals`}
          >
            Proposals
          </NavLink>
          <NavLink
            activeClassname="active"
            to={`/services/${service.title}/members`}
          >
            Members
          </NavLink>
        </ul>
      </div>
      {/* <Outlet /> */}
      <ServiceDetailsContainer service={service} />
    </div>
  );
};

export default ServiceContent;
