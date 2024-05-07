import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Links = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "About Us",
    link: "/about",
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
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
];
const NavLinks = () => {
  return (
    <div className="links">
      {Links.map((item) => (
        <NavLink key={item.id} to={item.link} activeClassName="active">
          {/* <FontAwesomeIcon  className="linkIcon"/> */}
          {item.title}
          <FontAwesomeIcon icon={faChevronDown} className="chevron" />
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
