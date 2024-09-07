import SectionHeader from "../../components/Headers/SectionHeader";
import ServiceCards from "../../components/cards/ServiceCards";
import "./latestNews.css";
const LatestNews = () => {
  return (
    <section className="latestNews">
      <SectionHeader
        title={"Stay Updated with Laikipia North"}
        subtitle={
          "Get the latest news on development projects, events, and important announcements for Laikipia North residents."
        }
      />
      <div className="latestNewsSectionContent">
        <ServiceCards carDFor="latestBlogs" />
        <ServiceCards carDFor="latestBlogs" />
        <ServiceCards carDFor="latestBlogs" />
      </div>
    </section>
  );
};

export default LatestNews;
