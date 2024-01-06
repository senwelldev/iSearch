import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Helmet } from "react-helmet";

const YourComponent = () => {
  const navigate = useNavigate();

  const options = {
    direction: "ttb",
    height: "115vh",
    rewind: false,
    // gap: "0px",
    wheel: true,
    waitForTransition: true,
    releaseWheel: true,
    speed: 1000,
    arrows: false,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Blogs</title>
        <link rel="canonical" href="https://isearch.co.in/blog" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Find expert insight and expertise on Digital Marketing, SEO, Paid Adds marketing, digital and media solutions through our articles, white papers, blogs, analyst reports, case studies and more"
        />
        <meta property="og:site_name" content="isearch" />
        <meta property="og:title" content="Blogs" />
        <meta
          property="og:description"
          content="Find expert insight and expertise on Digital Marketing, SEO, Paid Adds marketing, digital and media solutions through our articles, white papers, blogs, analyst reports, case studies and more"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/BlogImage1.b7208fdf67c4182d5e70.webp"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/BlogImage1.b7208fdf67c4182d5e70.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/BlogImage1.b7208fdf67c4182d5e70.webp"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
      <Splide
        className="blogSplideBody"
        options={options}
        aria-label="My Favorite Images"
      >
        <SplideSlide className="splideSlide">
          <section className="section">
            <h2 className="section__heading">
              Understanding SEO: Technical, On-Page & Off-Page
            </h2>
            <br />
            <p>The better visibility your pages have in search results ...</p>
            <button
              onClick={() => {
                navigate("/blog/blog1");
                scrollToTop();
              }}
            >
              <b>Read more</b>
            </button>
          </section>
        </SplideSlide>
        <SplideSlide className="splideSlide">
          <section className="section">
            <h2 className="section__heading">
              Effective Social Media Strategies for Small Businesses
            </h2>
            <br />
            <p>
              A social media strategy is like a plan that outlines what ....
            </p>
            <button
              onClick={() => {
                navigate("/blog/blog2");
                scrollToTop();
              }}
            >
              <b>Read more</b>
            </button>
          </section>
        </SplideSlide>
        <SplideSlide className="splideSlide">
          <section className="section">
            <h2 className="section__heading">
              Difference Between Universal Analytics & Google Analytics -4
            </h2>
            <br />
            <p>To better comprehend the advantages of Google's ...</p>
            <button
              onClick={() => {
                navigate("/blog/blog3");
                scrollToTop();
              }}
            >
              <b>Read more</b>
            </button>
          </section>
        </SplideSlide>
        <br />
        <br />
      </Splide>
    </div>
  );
};

export default YourComponent;
