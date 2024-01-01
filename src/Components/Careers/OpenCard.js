import React from "react";
import { Link } from "react-router-dom";

const OpenCard = ({ title, descrption }) => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="card">
        <div className="card-body d-flex align-items-center justify-content-center flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descrption}</p>
          <Link to={"/jobapplication"} className="btn btn-primary">
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default OpenCard;
