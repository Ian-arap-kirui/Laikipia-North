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
const Hero = ({ page }) => {
  const location = useLocation();

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
                  <h6>DISCOVER THE CITY</h6>
                  <h1>Laikipia North Constituency</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetuer adipiscing phasellus
                    hendrerit lorem dolor sit amet magna nibh nec urna in nisi
                    neque aliquet ve, dapibus id dolor sit amet magna aliqu
                    amet.
                  </p>
                  <Link to={"/about-us"} className="primaryButton">
                    Learn More
                  </Link>
                </div>
                <div className="heroRight">
                  <img src={heroImg} alt="banner image" loading="lazy" />
                  <a href="" className="playIcon">
                    <FontAwesomeIcon icon={faPlay} />
                  </a>
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
