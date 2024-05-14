import SectionHeader from "../../components/Headers/SectionHeader";
import ServiceCards from "../../components/cards/ServiceCards";
import "./latestNews.css";
const LatestNews = () => {
  return (
    <section className="latestNews">
      <SectionHeader
        title={"Latest News & Updates"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse"
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
