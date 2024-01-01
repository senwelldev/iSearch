import React from "react";
import "./CareerPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BookIcon from "@mui/icons-material/Book";
import JoinCard from "./JoinCard";
import MediaCard from "./MediaCard";
import OpenCard from "./OpenCard";
import Team from "../../Images/Career/Team.png";
import { Link } from "react-router-dom";
import LifeAt1 from "../../Images/Career/LifeAt/LifeAt1.png";
import LifeAt2 from "../../Images/Career/LifeAt/LifeAt2.png";
import LifeAt3 from "../../Images/Career/LifeAt/LifeAt3.png";
import LifeAt4 from "../../Images/Career/LifeAt/LifeAt4.png";
import LifeAt5 from "../../Images/Career/LifeAt/LifeAt5.png";
import LifeAt6 from "../../Images/Career/LifeAt/LifeAt6.png";
import LifeAt7 from "../../Images/Career/LifeAt/LifeAt7.png";
import LifeAt8 from "../../Images/Career/LifeAt/LifeAt8.png";
import SangramSir from "../../Images/Career/LifeAt/SangramSir.png";
import VaibhavSir from "../../Images/Career/LifeAt/VaibhavSir.png";

import jobDescriptions from "../Careers/Jobs.json";

// import VaibhavSir from "../../Images/Career/LifeAt/VaibhavSir.png";

const CareerPage = () => {
  return (
    // ---------------Lets Create Impactfull--------------
    <div className="career-page ">
      <div className="container-fluid lets-create pb-5 pt-5">
        <div className="row text-white lets-createpage">
          <img src={Team} class="img-fluid" alt="..." />
          <div className="impact-head text-center pb-5 pt-5 CareerBannerText">
            <h1 className="display-4">
              <b>Transform Your Passion into Profession</b>
            </h1>
            <h6 className="lead">
              iSearch Opens Doors to Digital Marketing Excellence.
            </h6>
          </div>
        </div>
      </div>

      {/* ----------------------Join Coditas------------------ */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="left-part join-us d-flex align-items-center justify-content-center flex-column shapeFuture">
              <h1>Shape the Future</h1>
              <p>
                iSearch Invites You to Join a World of Design, Advertising, and
                Career Growth.- Unlock boundless opportunities and shape your
                future at iSearch, the epicenter of digital marketing, design,
                and advertising innovation. Join a team of visionaries and
                achievers where your career growth is our top priority. Our
                employee-centric culture fosters a vibrant and collaborative
                work environment, complemented by a competitive pay scale that
                recognizes your skills and contributions. Dive into the
                forefront of digital marketing excellence, design mastery, and
                advertising prowess, collaborating with super-talented peers who
                share your passion for pushing boundaries. At iSearch, we don't
                just offer jobs; we provide a platform to make a lasting impact
                and nurture your professional journey. Ready to redefine your
                career? Join iSearch and embark on a thrilling adventure of
                growth and innovation!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col">
              <JoinCard
                title={"150+"}
                descrption={"Team of Professionals"}
                icon={
                  <ManageAccountsIcon fontSize="large"></ManageAccountsIcon>
                }
              />
            </div>
            <div className="col">
              <JoinCard
                title={"500+"}
                descrption={"Social Media Accounts handled"}
                icon={<DevicesOtherIcon fontSize="large"></DevicesOtherIcon>}
              ></JoinCard>
            </div>
            <div className="col">
              <JoinCard
                title={"200+"}
                descrption={"Web and Mobile applications built"}
                icon={<BookIcon fontSize="large"></BookIcon>}
              ></JoinCard>
            </div>
            <div className="col">
              <JoinCard
                title={"90%"}
                descrption={"Client retention"}
                icon={
                  <SignalCellularAltIcon fontSize="large"></SignalCellularAltIcon>
                }
              ></JoinCard>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------Coditas Media------------------- */}
      <div className="container-fluid in-media mt-5">
        <div className="row section-3 justify-content-center">
          {/* Section Heading */}
          <div className="col-md-8 text-center mb-5">
            <h1>Digital Echoes</h1>
            <p>
              Media Praises iSearch for Innovative Thoughts and Achievements -
              Explore the digital buzz surrounding iSearch as we turn heads and
              capture attention on our extraordinary journey. Dive into the
              digital realm to discover what the online community is saying
              about our innovative thoughts, notable achievements, and the
              dynamic culture that sets us apart.
            </p>
          </div>

          {/* Cards Section */}
          <div className="row row-cols-1 row-cols-md-4   cardParent  ">
            <div className="col mb-4 d-flex justify-content-center align-content-center">
              {/* <MediaCard
                title={"Title"}
                description={
                  "This is a longer card with supporting text below as a natural lead-in to additional content."
                }
                imageUrl={
                  "	https://coditas.com/assets/iitBombayCover-5e12a5ee.png"
                }
              ></MediaCard> */}
              <iframe
                width="560"
                height="320"
                src="https://www.youtube.com/embed/lPwt4XBWO6I?si=z0bJcenhpYoC_7-j"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col mb-4 d-flex justify-content-center align-content-center">
              {/* <MediaCard
                title={"Title"}
                description={
                  "This is a longer card with supporting text below as a natural lead-in to additional content."
                }
                imageUrl={
                  "https://coditas.com/assets/startUpCover-63752a2c.png"
                }
              ></MediaCard> */}
              <iframe
                width="560"
                height="320"
                src="https://www.youtube.com/embed/j4hTtvSKs5o?si=LNPGZneY7SAHkG-L"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col mb-4 d-flex justify-content-center align-content-center">
              {/* <MediaCard
                title={"Title"}
                description={
                  "This is a longer card with supporting text below as a natural lead-in to additional content."
                }
                imageUrl={
                  "https://coditas.com/assets/startUpCover-63752a2c.png"
                }
              ></MediaCard> */}
              <iframe
                width="560"
                height="320"
                src="https://www.youtube.com/embed/uFILt-NDnLI?si=28jjU_qrUBkqO2pp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <-----------------------> */}

      {/*  */}
      <div className="container-fluid ">
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
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={SangramSir}
                    className="d-block w-100"
                    alt="Camera"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={VaibhavSir}
                    className="d-block w-100"
                    alt="Camera"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={LifeAt3}
                    className="d-block w-100"
                    alt="Exotic Fruits"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={LifeAt4}
                    className="d-block w-100"
                    alt="Exotic Fruits"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={LifeAt5}
                    className="d-block w-100"
                    alt="Exotic Fruits"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={LifeAt6}
                    className="d-block w-100"
                    alt="Exotic Fruits"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={LifeAt8}
                    className="d-block w-100"
                    alt="Exotic Fruits"
                  />
                </div>
                <div className="carousel-item">
                  <img src={LifeAt2} className="d-block w-100" alt="Camera" />
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

      {/* ---------------OPEN POSITIONS-------------------- */}
      <div className="container text-center p-5">
        <h1>Open Positions</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {jobDescriptions.jobs.map((job) => (
            <div className="col" key={job.jobTitle}>
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-center flex-column">
                  <h5 className="card-title">{job.jobTitle}</h5>
                  <p className="card-text">
                    {/* Display a brief description if needed */}
                  </p>
                  <Link
                    className="btn btn-primary"
                    to={`/career/job/${job.jobId}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
