import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

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
    speed: 2000,
    arrows: false,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
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
          <p>A social media strategy is like a plan that outlines what ....</p>
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
  );
};

export default YourComponent;
