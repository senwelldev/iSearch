import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { InlineWidget } from "react-calendly";
import "./Contact.css";
import LeftImages from "../../Images/Contact/LeftImages1.webp";

const ConactBanner = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(true);

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    };
  }, []);
  return (
    <div className="Contact-Section">
      <div className="col-lg-6 IsearchLeft">
        <div className="IsearchOutside">
          <img src={LeftImages} alt="img" />
        </div>
      </div>

      <div className="col-lg-6 calenderBox">
        {/* <div className="spinner-border text-green" role="status">
                  <span className="sr-only"></span>
                </div> */}

        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="Exxon-right-Calnder">
            <InlineWidget url="https://calendly.com/isearch-digital/30min" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConactBanner;
