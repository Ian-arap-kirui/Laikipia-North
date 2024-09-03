import "./hero.css";
import heroImg from "../../assets/heroImg.jpg";
import hero2Img from "../../assets/footer-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { constituencyData } from "../../utils/data";
const Hero = ({ page }) => {
  const location = useLocation();
  const wards = constituencyData.map((item) => item.wards);
  // Split the current location path into parts
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
      {page === "home" ? (
        <>
          <section className="heroSection">
            <div className="heroContainer">
              <div className="heroContent">
                <div className="heroLeft">
                  <h6>DISCOVER </h6>
                  <h1>Laikipia North Constituency</h1>
                  <p>
                    Explore laikipia north constituency wards and our project{" "}
                    <br /> distribution across the constituency
                  </p>
                  <Link to={"/about-us"} className="primaryButton">
                    Learn More
                  </Link>
                </div>
                <div className="heroRight">
                  <div className="wardCards">
                    {wards[0].map((item) => {
                      // Replace spaces with dashes in the item title
                      const formattedTitle = item.title.replace(/\s+/g, "-");

                      return (
                        <Link
                          to={`/wards/${formattedTitle}`}
                          className="wardCard"
                          key={item.id}
                        >
                          <h5>{item.title}</h5>
                          <img src={item.img} alt="" />
                        </Link>
                      );
                    })}
                  </div>
                  {/* <img src={heroImg} alt="banner image" loading="lazy" />
                  <a href="" className="playIcon">
                    <FontAwesomeIcon icon={faPlay} />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="heroSocialIcons">
              <FontAwesomeIcon icon={faFacebook} className="socialIcon" />
              <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
              <FontAwesomeIcon icon={faXTwitter} className="socialIcon" />
              <FontAwesomeIcon icon={faYoutube} className="socialIcon" />
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="hero2Section">
            <img src={hero2Img} alt="hero image" loading="lazy" />
            <div className="hero2SectionText">
              <h1>{page}</h1>
              <ul>
                <li>
                  <Link to={-1}> Home</Link>
                </li>
                {/* <li>{page}</li> */}

                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                  return (
                    <>
                      <li key={index}>
                        {index + 1 === pathnames.length ? (
                          name
                        ) : (
                          <Link to={routeTo}>{name}</Link>
                        )}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Hero;
