import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";

export const Links = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "About Us",
    link: "/about-us",
    listItems: [{ item: "Wards", link: "wards" }],
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
    listItems: [
      { item: "Constituency Office", link: "/services/constituency-office" },
      { item: "Parliament Office", link: "/services/parliament-office" },
      { item: "NGCDF", link: "/services/NGCDF" },
    ],
  },
  {
    id: 3,
    title: "Blogs",
    link: "/blogs",
  },

  // {
  //   id: 4,
  //   title: "Events",
  //   link: "/events",
  //   listItems: [
  //     { item: "AGM(NGCDF)", link: "/events/Annual-General-Meeting" },
  //     { item: "AGM(NGCDF)", link: "/events/Annual-General-Meeting" },
  //     { item: "AGM(NGCDF)", link: "/events/Annual-General-Meeting" },
  //   ],
  // },
];

const NavLinks = () => {
  return (
    <div className="mainLinks">
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
