import React from "react";
import "./OurCoreValues.css";
import Champion from "../../Images/CoreValues/Champion-Mindset.webp";
import Creativity from "../../Images/CoreValues/Creativity-at-Core.webp";
import Excellent from "../../Images/CoreValues/Excellent-Problem-Solving.webp";
import Work from "../../Images/CoreValues/Work-Oriented.webp";

const OurCoreValues = () => {
  return (
    <div className="ourCoreValuesBody">
      <div className="corevaluesHeading">
        <h1>Our Core Values</h1>
      </div>
      <div className="coreValues-Row">
        <div className="coreValuesRow-Card">
          <div className="coreValues-Row-Card-Img">
            <img src={Work} alt=".." />
          </div>
          <div className="coreValues-Row-Card-Content">
            <h3>Work Oriented</h3>
            <p>
              We embody a work-oriented culture that places a premium on
              commitment, efficiency, and results. Our team is driven by a
              collective passion for delivering excellence in every project we
              undertake.
            </p>
          </div>
        </div>
        <div className="coreValuesRow-Card">
          <div className="coreValues-Row-Card-Img">
            <img src={Excellent} alt=".." />
          </div>
          <div className="coreValues-Row-Card-Content">
            <h3>Excellent Problem Solving</h3>
            <p>
              Our team is dedicated to navigating challenges with a proactive
              and solution-driven approach. Fueled by innovation and a
              commitment to overcoming obstacles, we thrive in turning
              complexities into opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="coreValues-Row">
        <div className="coreValuesRow-Card">
          <div className="coreValues-Row-Card-Img">
            <img src={Champion} alt=".." />
          </div>
          <div className="coreValues-Row-Card-Content">
            <h3>Champion Mindset</h3>
            <p>
              With resilience at our core, we approach each task with unwavering
              determination, viewing every project as an opportunity to showcase
              excellence. Our team embodies the spirit of champions, rising to
              the occasion and consistently delivering results that distinguish
              us in the competitive landscape.
            </p>
          </div>
        </div>
        <div className="coreValuesRow-Card">
          <div className="coreValues-Row-Card-Img">
            <img src={Creativity} alt=".." />
          </div>
          <div className="coreValues-Row-Card-Content">
            <h3>Creativity at Core</h3>
            <p>
              Creativity is woven into our culture, driving our team to approach
              projects with fresh perspectives and imaginative flair. From
              content creation to problem-solving, we infuse creativity into
              every aspect of our work. We redefine possibilities and bring your
              brand to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues;
