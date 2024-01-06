import React from "react";
// import LifeAt1 from "../../Images/Career/LifeAt/LifeAt1.png";
import LifeAt2 from "../../Images/Career/LifeAt/LifeAt2.webp";
import LifeAt3 from "../../Images/Career/LifeAt/LifeAt3.webp";
import LifeAt4 from "../../Images/Career/LifeAt/LifeAt4.webp";
import LifeAt5 from "../../Images/Career/LifeAt/LifeAt5.webp";
import LifeAt6 from "../../Images/Career/LifeAt/LifeAt6.webp";
import LifeAt7 from "../../Images/Career/LifeAt/LifeAt7.webp";
import LifeAt8 from "../../Images/Career/LifeAt/LifeAt8.webp";
import SangramSir from "../../Images/Career/LifeAt/SangramSir.webp";
import VaibhavSir from "../../Images/Career/LifeAt/VaibhavSir.webp";
import "./CareerPage.css";
import "./WelcomeToiSearchComponent.css";

const WelcomeToiSearchComponent = () => {
  return (
    <div className="container-fluid welcomeToIsearchBody">
      <div className="row  section-4  -flex align-items-center">
        {/* Left Part */}
        <div className="col-md-6  ">
          <div className="left-part join-us -flex align-items-center justify-content-center flex-column shapeFuture">
            <h1>Welcome to iSearch,</h1>
            <p>
              where careers take flight in the dynamic realm of digital
              marketing, design, and advertising. As a visionary and
              high-achieving team, we invite you to join us in pushing the
              boundaries of innovation. Our employee-centric culture,
              competitive pay scale, and vibrant work environment provide the
              perfect ecosystem for your professional growth. Collaborate with
              super-talented peers, contribute to cutting-edge campaigns, and
              shape the visual identity of brands. Whether you're passionate
              about digital marketing excellence, mastering the art of design,
              or crafting compelling advertising narratives, iSearch is the
              place to nurture your career and make a lasting impact. Ready to
              elevate your journey? Explore opportunities with us today!
            </p>
          </div>
        </div>

        {/* Right Part */}
        <div className="col-md-6">
          <div
            id="carouselExampleControls"
            className="carousel slide Career-CarouselBody"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner carouselBody">
              <div className="carousel-item active">
                <img
                  src={LifeAt7}
                  className="d-block w-100"
                  alt="Wild Landscape"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={SangramSir}
                  className="d-block w-100"
                  alt="Camera"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={VaibhavSir}
                  className="d-block w-100"
                  alt="Camera"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={LifeAt3}
                  className="d-block w-100"
                  alt="Exotic Fruits"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={LifeAt4}
                  className="d-block w-100"
                  alt="Exotic Fruits"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={LifeAt5}
                  className="d-block w-100"
                  alt="Exotic Fruits"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={LifeAt6}
                  className="d-block w-100"
                  alt="Exotic Fruits"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={LifeAt8}
                  className="d-block w-100"
                  alt="Exotic Fruits"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={LifeAt2}
                  className="d-block w-100"
                  alt="Camera"
                  loading="lazy"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToiSearchComponent;
