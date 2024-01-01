import React from "react";
import './Counts.css';
import CountUp from "./CountUp";

const Counts = () => {

  return (
    <div className="countsBody">
      <div>
        <h1>
            <b><CountUp start={9} end={100} duration={2000}/> </b>{"+"}
        </h1>
         <p>Projects</p>
      </div>
      <div>
        
        <h1>
        <b><CountUp start={0} end={10} duration={2000}/> </b>{"k+"}
        </h1> 
        <p>Webpages</p>
      </div>
      <div>
        <h1>
            <b><CountUp start={0} end={10} duration={2000}/> </b>{"+"}
        </h1>
        <p> Countries</p>
      </div>
      <div>
        <h1>
            <b><CountUp start={40} end={400} duration={2000}/> </b>{"%"}
        </h1>
         <p>Increase in ROI</p>
      </div>
    </div>
  );
};

export default Counts;
