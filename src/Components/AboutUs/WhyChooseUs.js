import React from "react";
import "./WhyChooseUs.css";
import DataDriven from "../../Images/AboutUs/DataDriven.webp";
import Tailored from "../../Images/AboutUs/Tailored.webp";
import AffordableCost from "../../Images/AboutUs/AffordableCost.webp";
import ExperiancedTeam from "../../Images/AboutUs/ExperiancedTeam.webp";
import Holistic from "../../Images/AboutUs/Holistic.webp";
import Transparancy from "../../Images/AboutUs/Transparancy.webp";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseBody">
      <div style={{ backgroundColor: "rgb(248, 188, 218)" }}></div>

      <div className="container py-2">
        <div className="second-page-heading2 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 style={{ textAlign: "center" }}>
                  Why Choose <span style={{ color: "#22b3c1" }}> Us </span>?
                </h2>
              </div>
            </div>
          </div>
        </div>

        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src={DataDriven}
              alt="data driven approach"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1
              className="postcard__title blue"
              style={{ background: "transparent" }}
            >
              <a href="#" id="cardHeading">
                A Data-Driven Approach
              </a>
            </h1>
            <div className="postcard__subtitle small"></div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt" id="cardText">
              In the realm of digital marketing, data is the heartbeat of
              success. At iSearch, our approach is the cornerstone of every
              strategy we craft. We leverage analytics and insights to
              understand audience behaviors, measure campaign effectiveness, and
              optimize for continuous improvement. This empirical foundation
              ensures that every decision we make it rooted in real-time data,
              driving results that matter.
            </div>
          </div>
        </article>
        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src={Tailored}
              alt="tailored solutions"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1
              className="postcard__title red"
              style={{ background: "transparent" }}
            >
              <a href="#" id="cardHeading">
                Tailored Solutions
              </a>
            </h1>
            <div className="postcard__subtitle small"></div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt" id="cardText">
              Recognizing that one size does not fit all, we pride ourselves on
              delivering accurate solutions to meet your unique digital
              marketing needs. Our team takes the time to understand your
              business, industry, and goals, crafting customized strategies that
              resonate with your audience. From personalized content to targeted
              campaigns, our approach is all about ensuring that every solution
              is a perfect fit for your brand.
            </div>
          </div>
        </article>
        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src={Transparancy}
              alt="transparency & accountability"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title green">
              <a href="#" id="cardHeading">
                Transparency & Accountability
              </a>
            </h1>
            <div className="postcard__subtitle small"></div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt" id="cardText">
              Trust is paramount in our client relationships. Throughout our
              collaboration, you can expect open communication, detailed
              reporting, and a clear understanding of the strategies in play.
              Our commitment to accountability means that we take responsibility
              for results, providing you with the confidence that your digital
              marketing investments are in capable hands.
            </div>
          </div>
        </article>
        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src={Holistic}
              alt="holistic approach"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title yellow">
              <a href="#" id="cardHeading">
                Holistic Approach
              </a>
            </h1>
            <div className="postcard__subtitle small"></div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt" id="cardText">
              Digital marketing is not a series of isolated tactics, it is a
              journey. Our approach considers every touchpoint of the customer
              journey, ensuring a seamless and consistent brand experience. From
              SEO and social media to content and paid advertising, we
              orchestrate a comprehensive strategy that works in harmony to
              maximize your brand's impact across all channels.
            </div>
          </div>
        </article>

        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src={ExperiancedTeam}
              alt="experience team"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title green">
              <a href="#" id="cardHeading">
                Experienced Team
              </a>
            </h1>
            <div className="postcard__subtitle small"></div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt" id="cardText">
              Behind every successful digital campaign is a team of experienced
              professionals. Our team brings a wealth of industry knowledge,
              creativity, and technical expertise to the table. With a deep
              understanding of the ever-evolving digital landscape, we navigate
              challenges with agility and deliver solutions that propel your
              brand forward.
            </div>
          </div>
        </article>

        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src={AffordableCost}
              alt="affordable cost"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title yellow">
              <a href="#" id="cardHeading">
                Affordable Cost
              </a>
            </h1>
            <div className="postcard__subtitle small"></div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt" id="cardText">
              "Quality digital marketing shouldn't come at a premium that breaks
              the bank." At iSearch, we believe in providing effective solutions
              at an affordable cost. Our pricing structures are transparent,
              offering value for your investment. We ensure that our services
              align with your budget without compromising on the quality and
              impact of our digital marketing strategies.{" "}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WhyChooseUs;
