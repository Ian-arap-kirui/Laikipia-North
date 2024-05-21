import ProjectCard from "../../components/cards/ProjectCard";
import "./projectList.css";
const ProjectList = () => {
  return (
    <section className="projectList">
      <div className="gallery">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectList;
