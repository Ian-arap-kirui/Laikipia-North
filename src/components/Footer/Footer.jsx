import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import TwitterIcon from "../../assets/twitter-icon.png";
import InstaIcon from "../../assets/insta-icon.png";
import PinterestIcon from "../../assets/pinterest-icon.png";
import YoutubeIcon from "../../assets/youtube-icon.png";
const FooterLinks = [
  {
    id: 0,
    title: "Quick Links",
    links: [
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
    ],
  },
  {
    id: 1,
    title: "Get In Touch",
    links: [
      {
        id: 0,
        title: "Contacts",
        link: "/contact-us",
      },
      {
        id: 1,
        title: "Our Services",
        link: "/about",
      },
    ],
  },
  {
    id: 2,
    title: "Address",
    links: [
      {
        id: 0,
        title: "Laikipia, Kenya",
        link: "/about-us",
      },
    ],
  },
];

const SocialLinks = [
  {
    id: 0,
    icon: TwitterIcon,
  },
  {
    id: 1,
    icon: InstaIcon,
  },
  {
    id: 2,
    icon: PinterestIcon,
  },
  {
    id: 3,
    icon: YoutubeIcon,
  },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footerContainer">
        <div className="top">
          <div className="cont1">
            {" "}
            <Link to="/">
              <img src={""} alt="logo" loading="lazy" className="logo" />
            </Link>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "lighter",
                color: "#afafaf",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              similique provident nemo eveniet quis voluptate porro! Dignissimos
              earum, illum, eaque ullam quisquam perferendis unde possimus
              inventore necessitatibus cum optio aliquid!
            </p>
          </div>
          {FooterLinks.map((item) => {
            return (
              <div className="cont2" key={item.id}>
                <p className="footerTitle">{item.title}</p>
                <ul>
                  {item.links.map((i) => {
                    return (
                      <Link key={i.id} to={i.link} className="link">
                        {i.title}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className="cont3">
            <div className="newsletterContainer">
              <p>Newsletter</p>
              <form action="submit">
                <div className="newsletterInput">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <button className="primaryButton">Subscribe</button>
                </div>
                <label htmlFor="email">
                  Your email is safe with us,we don’t spam.
                </label>
              </form>
            </div>
            <div className="socialLinks">
              <p>Follow us on: </p>
              <div className="icons">
                {SocialLinks.map((item) => {
                  return (
                    <Link to="/">
                      <img src={item.icon} alt="social-icons" loading="lazy" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>
            &copy; {currentYear} Laikipia North Constituency. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
