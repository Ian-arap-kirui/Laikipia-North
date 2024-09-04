import { useParams } from "react-router-dom";
import EventsContent from "../../components/PageContent/EventsContent";
import ProjectsContent from "../../components/PageContent/ProjectsContent";
import ServiceContent from "../../components/PageContent/ServiceContent";
import EventsSidebar from "../../components/SideBar/EventsSidebar";
import BlogContent from "../../components/blogContent/BlogContent";
import SideBar from "../../components/blogContent/SideBar";
import "./content.css";
import WardContent from "../../components/PageContent/WardContent";
const Content = ({ page, service, event, wardProjects }) => {
  const { wardName } = useParams();
  const normalizedWardName = wardName.replace(/-/g, " ").trim().toLowerCase();
  return (
    <div className="contentContainer">
      <section
        className={
          page === "Events"
            ? "eventsLeft"
            : page === "Services"
            ? "serviceLeft"
            : "left"
        }
      >
        {page === "Blogs" ? (
          <BlogContent />
        ) : page === "Projects" ? (
          <ProjectsContent />
        ) : page === "Services" ? (
          <ServiceContent service={service} />
        ) : page === "Events" ? (
          <EventsContent event={event} />
        ) : page === normalizedWardName ? (
          <WardContent wardProjects={wardProjects} />
        ) : null}
      </section>
      {page === "Services" || "Events" || normalizedWardName ? null : (
        <section className="right">
          <SideBar />
        </section>
      )}
    </div>
  );
};

export default Content;
