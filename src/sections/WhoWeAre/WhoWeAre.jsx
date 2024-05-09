import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./whoWeAre.css";
import { faLandmarkDome } from "@fortawesome/free-solid-svg-icons";
import weAreImg from "../../assets/heroImg1.jpg";
const WhoWeAre = () => {
  return (
    <section className="weAre">
      <div className="weAreContainer">
        <div className="weAreLeft">
          <img src={weAreImg} alt="image" loading="lazy" />
        </div>
        <div className="weAreRight">
          <div className="weAreText">
            <div className="weAreTitle">
              <span>Who we are</span>
              <h3>Laikipia North Consituency</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, facilis? Officia autem praesentium porro dolore
                eligendi distinctio molestiae deleniti quia aperiam ipsum
                asperiores nulla quaerat, id perspiciatis? Est, consectetur
                doloribus?
              </p>
            </div>
            <div className="weAreTextList">
              <div className="weAreIcon">
                <FontAwesomeIcon icon={faLandmarkDome} />
              </div>
              <div className="weAreList">
                <h4>Our Role Is To:</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, officia ratione consequuntur error, natus
                  deleniti ullam deserunt veritatis,
                </p>
                <ul>
                  <li>Praesent sapien massa, convallis a pellentesque nec.</li>
                  <li>Praesent sapien massa, convallis a pellentesque nec.</li>
                  <li>Praesent sapien massa, convallis a pellentesque nec.</li>
                  <li>Praesent sapien massa, convallis a pellentesque nec.</li>
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
