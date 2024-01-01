import React from "react";
import './MediaCard.css';

const MediaCard = ({ title, description, imageUrl }) => {
  return (
    <>
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
