import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./whoWeAre.css";
import { faLandmarkDome } from "@fortawesome/free-solid-svg-icons";
import weAreImg from "../../assets/lnc-1.jpg";
import weAreImg1 from "../../assets/animals.jpg";
import weAreImg2 from "../../assets/artifacts.jpg";
import weAreImg3 from "../../assets/landscape1.jpg";
import SectionHeader from "../../components/Headers/SectionHeader";
const WhoWeAre = ({ title, page }) => {
  return (
    <section className={"weAre"}>
      {title === "cityEvents" ? (
        <div className="weAreHeader">
          <SectionHeader
            title={"Explore Our Local Events"}
            subtitle={
              "We encourage community involvement through various events and activities. Engage with leaders, take part in workshops, and join hands in creating a thriving Laikipia North."
            }
          />
        </div>
      ) : null}

      <div
        className={`weAreContainer ${
          title === "cityEvents" ? "exploreCity" : ""
        }`}
      >
        {page === "home" ? (
          <div className="weAreLeft">
            <img src={weAreImg} alt="image" loading="lazy" />
          </div>
        ) : page === "aboutUs" ? (
          <div
            className={`weAreLeft ${page === "aboutUs" ? "aboutUsLeft" : ""}`}
          >
            <img src={weAreImg1} alt="" loading="lazy" />
            <img src={weAreImg3} alt="" loading="lazy" />
            <img src={weAreImg2} alt="" loading="lazy" />
          </div>
        ) : null}

        <div className="weAreRight ">
          <div
            className={`weAreText ${
              title === "cityEvents" && page === "aboutUs"
                ? "exploreCityAboutUsText"
                : title === "cityEvents"
                ? "exploreCityText"
                : page === "aboutUs"
                ? "aboutUsText"
                : ""
            }`}
          >
            <div className="weAreTitle">
              {title === "cityEvents" ? (
                <h3>Plan A Great City That Provides The Essence Of Success</h3>
              ) : (
                <>
                  <span>Who we are</span>
                  <h3>Laikipia North Consituency</h3>
                </>
              )}
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, facilis? Officia autem praesentium porro dolore
                eligendi distinctio molestiae deleniti quia aperiam ipsum
                asperiores nulla quaerat, id perspiciatis? Est, consectetur
                doloribus?
              </p> */}
            </div>
            <div className="weAreTextList">
              <div className="weAreIcon">
                <FontAwesomeIcon icon={faLandmarkDome} />
              </div>
              <div className="weAreList">
                {title === "cityEvents" ? (
                  <h4>Sustainable Innovation Is Our Pathway:</h4>
                ) : (
                  <h4>Our Role to the Community</h4>
                )}

                <p>
                  Laikipia North Constituency is committed to improving the
                  lives of its residents through inclusive governance,
                  sustainable development, and community-focused programs. We
                  strive to:
                </p>
                <ul>
                  <li>Provide accessible healthcare to rural populations.</li>
                  <li>
                    Improve education through the construction of new schools
                    and support programs.
                  </li>
                  <li>
                    Facilitate water projects to ensure clean water for all.
                  </li>
                  <li>
                    Support small-scale farmers and promote food security
                    initiatives.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
