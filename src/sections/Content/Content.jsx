import EventsContent from "../../components/PageContent/EventsContent";
import ProjectsContent from "../../components/PageContent/ProjectsContent";
import ServiceContent from "../../components/PageContent/ServiceContent";
import EventsSidebar from "../../components/SideBar/EventsSidebar";
import BlogContent from "../../components/blogContent/BlogContent";
import SideBar from "../../components/blogContent/SideBar";
import "./content.css";
const Content = ({ page, service, event }) => {
  return (
    <div className="contentContainer">
      <section className={page === "Events" ? "eventsLeft" : "left"}>
        {page === "Blogs" ? (
          <BlogContent />
        ) : page === "Projects" ? (
          <ProjectsContent />
        ) : page === "Services" ? (
          <ServiceContent service={service} />
        ) : page === "Events" ? (
          <EventsContent event={event} />
        ) : null}
      </section>
      {page === "Events" ? null : (
        <section className="right">
          <SideBar />
        </section>
      )}
    </div>
  );
};

export default Content;
