import { Link } from "react-router-dom";
import dummyImg from "../../assets/business.jpg";
import "./cards-cont.css";
const ProjectCard = () => {
  return (
    <div className="projectCard">
      <img src={dummyImg} alt="gallery-image" loading="lazy" />
      <div className="projectCardText">
        <span>Government</span>
        <h5>
          <Link to={`/projects/2`}>Building & License</Link>
        </h5>
      </div>
    </div>
  );
};

export default ProjectCard;
