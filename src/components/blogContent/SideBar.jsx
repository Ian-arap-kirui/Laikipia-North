import React from "react";
import "./BlogContent.css";
import { Link } from "react-router-dom";
import dummyImg from "../../assets/heroImg.jpg";
import { AllBlogs } from "../../utils/blogs";
import { shortenDescription } from "../../utils/ShortenDesc";

const SideBar = () => {
  // Extract categories and popular tags from the data
  const popularTags = [
    "Laikipia",
    "Sosian",
    "Segera",
    "Culture",
    "NGCDF",
    "Mukogodo",
  ];

  return (
    <div className="contentSideBar">
      <div className="categoriesContainer">
        <div className="headContainer">
          <h4>Categories</h4>
          <span style={{ color: "#219D80" }}>&#9473;&#9473;&#9473;&#9473;</span>
        </div>
        <div className="categs">
          <li>
            <Link to={`/blogs`}>category</Link> <span>(3)</span>
          </li>
        </div>
      </div>
      <div className="recentsPost">
        <div className="headContainer">
          <h4> Popular Posts</h4>
          <span style={{ color: "#219D80", fontSize: "10px" }}>
            &#9473;&#9473;&#9473;&#9473;
          </span>
        </div>
        <div className="recents">
          {AllBlogs.map((blog) => (
            <Link to={`/blogs/3`} key={blog.id} className="recentPost">
              <div className="recentImgContainer">
                <img src={blog.img} alt="post-image" loading="lazy" />
              </div>
              <div className="details">
                <h6>{shortenDescription(blog.title, 4)}</h6>
                <a className="read-more-btn" href="">
                  Read more
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="popularTags">
        <div className="headContainer">
          <h4>Popular Tags </h4>
          <span style={{ color: "#219D80" }}>&#9473;&#9473;&#9473;&#9473;</span>
        </div>
        <div className="tags">
          {popularTags.map((tag, index) => (
            <li key={index}>
              <Link to={`/blogs`} className="tagBtn">
                {tag}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
