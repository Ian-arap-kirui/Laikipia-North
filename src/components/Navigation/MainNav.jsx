import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Logo from "../../assets/lnc-logo.svg";
import "./nav.css";
import NavLinks, { Links } from "./NavLinks";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav sticky">
      <div className="navWrapper">
        <div className="logoContainer">
          <img src={Logo} alt="logo" loading="lazy" />
        </div>
        <div className="navRight">
          <NavLinks />
          <div className="mainRightContainer">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <button className="primaryButton">Get in Touch</button>
          </div>
          <div className="hamburgerMenu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {menuOpen && (
            <div className="mobileOverlay" onClick={closeMenu}></div>
          )}
          <div className={`mobileLinks ${menuOpen ? "open" : "closing"}`}>
            <div className="mobileTop">
              <img src="" alt="logo" />

              <button className="closeButton" onClick={closeMenu}>
                X
              </button>
            </div>
            <div className="mobileLinkWrapper">
              {Links.map((item) => {
                return (
                  <div key={item.id} className="mobileLinkItems">
                    <NavLink to={item.link} activeClassName="link active">
                      {item.title}
                      {/* {item.listItems && (
                        <FontAwesomeIcon icon={faPlus} className="chevron" />
                      )} */}
                    </NavLink>
                    {item.listItems && (
                      <ul className="mobileSubLinks">
                        {item.listItems.map((subItem, index) => (
                          <li key={index} className="mobileSubLink">
                            <NavLink
                              to={subItem.link}
                              activeClassName="active"
                              className=""
                            >
                              {subItem.item}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
