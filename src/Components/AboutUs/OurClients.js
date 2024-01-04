import React, { useEffect, useState } from "react";
import "./OurClients.css";
import Lotto from "../../Images/AboutUs/Clients/Lotto.webp";
import Fooz from "../../Images/AboutUs/Clients/Fooz.webp";
import Fork from "../../Images/AboutUs/Clients/Fork.webp";
import Mind from "../../Images/AboutUs/Clients/Mind.webp";
import Virus from "../../Images/AboutUs/Clients/Virus.webp";
import CountUp from "../Home/CountUp";

const OurClients = () => {
  const [results, setResults] = useState(100);
  const [retention, setRetention] = useState(10);
  const [ctr, setCtr] = useState(20);
  const [roi, setROI] = useState(10);
  const [likes, setLikes] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setResults((prevCount) => prevCount + 102);
      setRetention((prevCount) => prevCount + 12);
      setCtr((prevCount) => prevCount + 12);
      setROI((prevCount) => prevCount + 38);
      setLikes((prevCount) => prevCount + 4);
    }, 200); // Adjust the interval as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="OurClientsBody">
      <div className="OurClients-Heading">
        <h1>
          <b>This is how we do it</b>
        </h1>
      </div>
      <div className="OurClients-Content">
        <div className="OurClients-Card">
          <div className="OurClients-Card-Image">
            <div className="ImageFrame">
              <div className="Image">
                <img src={Fooz} alt=".." />
              </div>
            </div>
          </div>
          <div className="OurClients-Card-Text">
            <p>THE CLIENT:</p>
            <h3>Fooz</h3>
            <p>THE RESULTS:</p>
            <h1>
              <b>
                <CountUp start={120} end={1200} duration={2000} />{" "}
              </b>
              {"+"}
            </h1>
            <h6>Content assets leads</h6>
          </div>
        </div>
        <div className="OurClients-Card">
          <div className="OurClients-Card-Image">
            <div className="ImageFrame">
              <div className="Image">
                <img src={Lotto} alt=".." />
              </div>
            </div>
          </div>
          <div className="OurClients-Card-Text">
            <p>THE CLIENT:</p>
            <h3>Lotto Social</h3>
            <p>THE RESULTS:</p>
            <h1>
              <b>
                <CountUp start={40} end={400} duration={2000} />{" "}
              </b>
              {"%+"}
            </h1>
            <h6>ROI Increase</h6>
          </div>
        </div>
        <div className="OurClients-Card">
          <div className="OurClients-Card-Image">
            <div className="ImageFrame">
              <div className="Image">
                <img src={Fork} alt=".." />
              </div>
            </div>
          </div>
          <div className="OurClients-Card-Text">
            <p>THE CLIENT:</p>
            <h3>Fork Freight</h3>
            <p>THE RESULTS:</p>
            <h1>
              <b>
                <CountUp start={20} end={200} duration={2000} />{" "}
              </b>
              {"%+"}
            </h1>
            <h6>Increase in CTR</h6>
          </div>
        </div>
        <div className="OurClients-Card">
          <div className="OurClients-Card-Image">
            <div className="ImageFrame">
              <div className="Image">
                <img src={Mind} alt=".." />
              </div>
            </div>
          </div>
          <div className="OurClients-Card-Text">
            <p>THE CLIENT:</p>
            <h3>Mind Life</h3>
            <p>THE RESULTS:</p>
            <h1>
              <b>
                <CountUp start={9} end={100} duration={2000} />{" "}
              </b>
              {"%"}
            </h1>
            <h6>Retention Rate</h6>
          </div>
        </div>
        <div className="OurClients-Card">
          <div className="OurClients-Card-Image">
            <div className="ImageFrame">
              <div className="Image">
                <img src={Virus} alt=".." />
              </div>
            </div>
          </div>
          <div className="OurClients-Card-Text">
            <p>THE CLIENT:</p>
            <h3>Virus Geeks</h3>
            <p>THE RESULTS:</p>
            <h1>
              <b>
                <CountUp start={4} end={35} duration={2000} />{" "}
              </b>
              {"k+"}
            </h1>
            <h6>Average likes count on socials</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
