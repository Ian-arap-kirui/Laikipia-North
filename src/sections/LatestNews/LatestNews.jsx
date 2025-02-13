import React, { useRef } from "react";
import SectionHeader from "../../components/Headers/SectionHeader";
import { AllBlogs } from "../../utils/blogs";
import ServiceCards from "../../components/cards/ServiceCards";
import "./latestNews.css"
const LatestNews = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="latestNews">
      <SectionHeader
        title={"Stay Updated with Laikipia North"}
        subtitle={
          "Get the latest news on development projects, events, and important announcements for Laikipia North residents."
        }
      />
      <div className="latestNewsSectionContent">
        <button className="carousel-button-news left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="carouselNews" ref={carouselRef}>
          {AllBlogs.map((blog) => (
            <div key={blog.id} className="carousel-item-news">
              <ServiceCards carDFor="latestBlogs" blog={blog} />
            </div>
          ))}
        </div>
        <button className="carousel-button-news right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default LatestNews;