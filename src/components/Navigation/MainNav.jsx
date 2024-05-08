import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";
import NavLinks from "./NavLinks";
const MainNav = () => {
  return (
    <div className="nav sticky">
      <div className="navWrapper">
        <div className="logoContainer">
          <img src="" alt="logo" />
        </div>
        <div className="navRight">
          <NavLinks />
          <div className="mainRightContainer">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <button className="primaryButton">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
