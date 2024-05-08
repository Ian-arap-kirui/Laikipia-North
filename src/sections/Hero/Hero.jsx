import "./hero.css";
import heroImg from "../../assets/heroImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  return (
    <section className="heroSection">
      <div className="heroContainer">
        <div className="heroContent">
          <div className="heroLeft">
            <h6>DISCOVER THE CITY</h6>
            <h1>Laikipia North Constituency</h1>
            <p>
              Lorem ipsum dolor sit amet consectetuer adipiscing phasellus
              hendrerit lorem dolor sit amet magna nibh nec urna in nisi neque
              aliquet ve, dapibus id dolor sit amet magna aliqu amet.
            </p>
            <button className="primaryButton">Learn More</button>
          </div>
          <div className="heroRight">
            <img src={heroImg} alt="banner image" />
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
  );
};

export default Hero;
