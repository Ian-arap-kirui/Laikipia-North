import BlogContent from "../../components/blogContent/BlogContent";
import SideBar from "../../components/blogContent/SideBar";
import "./content.css";
const Content = ({ page }) => {
  return (
    <div className="contentContainer">
      <section className="left">
        {page === "Blogs" ? (
          <BlogContent />
        ) : page === "Projects" ? (
          <>project content</>
        ) : page === "Services" ? (
          <>service content</>
        ) : page === "Events" ? (
          <>Events content</>
        ) : null}
      </section>
      <section className="right">
        <SideBar />
      </section>
    </div>
  );
};

export default Content;
