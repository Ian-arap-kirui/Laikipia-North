import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";

const Links = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "About Us",
    link: "/about-us",
  },
  {
    id: 2,
    title: "Blogs",
    link: "/blogs",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
    listItems: [
      { item: "Project 1", link: "/projects/1" },
      { item: "Project 2", link: "/projects/2" },
      { item: "Project 3", link: "/projects/3" },
    ],
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
    listItems: [
      { item: "Service 1", link: "/services/1" },
      { item: "Service 2", link: "/services/2" },
      { item: "Service 3", link: "/services/3" },
    ],
  },
  {
    id: 5,
    title: "Events",
    link: "/events",
    listItems: [
      { item: "AGM(NGCDF)", link: "/events/Annual-General-Meeting" },
      { item: "AGM(NGCDF)", link: "/events/Annual-General-Meeting" },
      { item: "AGM(NGCDF)", link: "/events/Annual-General-Meeting" },
    ],
  },
];

const NavLinks = () => {
  return (
    <div className="links">
      {Links.map((item) => (
        <div key={item.id} className="link-item">
          <NavLink to={item.link} activeClassName="link active">
            {item.title}
            {item.listItems && (
              <FontAwesomeIcon icon={faChevronDown} className="chevron" />
            )}
          </NavLink>
          {item.listItems && (
            <ul className="subLinks">
              {item.listItems.map((subItem, index) => (
                <li key={index} className="subItem">
                  <NavLink
                    to={subItem.link}
                    activeClassName="active"
                    className="subItemLink"
                  >
                    {subItem.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
