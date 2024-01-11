import React from "react";
import "./Blogs1.css";
import { Helmet } from "react-helmet";
import Blog1Img from "../../Images/Blogs/BlogImage1.webp";
import Blog2Img from "../../Images/Blogs/BlogImage2.webp";
import Blog3Img from "../../Images/Blogs/BlogImage3.webp";
import { useNavigate } from "react-router-dom";

const Blogs1 = () => {
  const navigate = useNavigate();
  return (
    <div className="Blogs1Body">
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Blogs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Find expert insight and expertise on Digital Marketing, SEO, Paid Adds marketing, digital and media solutions through our articles, white papers, blogs, analyst reports, case studies and more"
        />
        <meta property="og:site_name" content="isearch.co.in" />
        <meta property="og:title" content="Blogs" />
        <meta
          property="og:description"
          content="Find expert insight and expertise on Digital Marketing, SEO, Paid Adds marketing, digital and media solutions through our articles, white papers, blogs, analyst reports, case studies and more"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/guest.36a15616312ea08cc690.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://isearch.co.in/static/media/guest.36a15616312ea08cc690.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/guest.36a15616312ea08cc690.webp"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
      <div className="Blogs1Banner"></div>
      <div className="Blogs1Heading">
        <h2>Blogs</h2>
        <p>Our blogs on various topics</p>
      </div>
      <div className="card-container blogscardsContainer">
        <div className="blogsCard">
          <img
            src={Blog1Img}
            className="card-img-top img-fluid"
            alt="Fissure in Sandstone"
          />
          <div className="card-body">
            <p> 11 Dec, 2023</p>
            <h5
              className="card-title"
              onClick={() => {
                navigate("/blog/blog1");
              }}
            >
              Understanding SEO: Technical, On-Page & Off-Page
            </h5>
          </div>
        </div>
        <div className="blogsCard">
          <img
            src={Blog2Img}
            className="card-img-top img-fluid"
            alt="Fissure in Sandstone"
          />
          <div className="card-body">
            <p> 12 Dec, 2023</p>
            <h5
              className="card-title"
              onClick={() => {
                navigate("/blog/blog2");
              }}
            >
              Effective Social Media Strategies for Small Businesses
            </h5>
          </div>
        </div>
        <div className="blogsCard">
          <img
            src={Blog3Img}
            className="card-img-top img-fluid"
            alt="Fissure in Sandstone"
          />
          <div className="card-body">
            <p> 13 Dec, 2023</p>
            <h5
              className="card-title"
              onClick={() => {
                navigate("/blog/blog3");
              }}
            >
              Difference Between Universal Analytics & Google Analytics -4
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs1;
