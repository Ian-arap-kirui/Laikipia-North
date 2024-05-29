import { Link, NavLink, Outlet } from "react-router-dom";
import cdfLogo from "../../assets/cdf-official-logo.png";
import "./pageContentStyles/serviceContent.css";
const ServiceContent = ({ service }) => {
  return (
    <div className="serviceContentContainer">
      <div className="serviceImageContainer">
        <img src={cdfLogo} alt="blog-image" loading="lazy" />
        <ul>
          <NavLink
            activeClassName="active"
            to={`/services/${service.title}/allocations`}
          >
            {" "}
            Allocations
          </NavLink>
          <NavLink
            activeClassName="active"
            to={`/services/${service.title}/projects`}
          >
            {" "}
            Projects
          </NavLink>
          <NavLink
            activeClassName="active"
            to={`/services/${service.title}/disbursments`}
          >
            Disbursments
          </NavLink>
          <NavLink
            activeClassName="active"
            to={`/services/${service.title}/proposals`}
          >
            Proposals
          </NavLink>
          <NavLink
            activeClassName="active"
            to={`/services/${service.title}/members`}
          >
            Members
          </NavLink>
        </ul>
      </div>
      <div className="serviceDetailsContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default ServiceContent;
