import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <div className="topBar">
        <div className="topBarWrapper">
          <div className="leftTopInner">
            <FontAwesomeIcon icon={faEnvelope} className="navIcon" />
            <a href="mail:" className="mailLink">
              inquiries@laikipianorthconstituency.go.ke
            </a>
          </div>
          <div className="rightTopInner">
            {/* <FontAwesomeIcon icon={faUser} className="navIcon" />
            <Link to={"/"} className="loginLink">
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
