import React from "react";

const JoinCard = ({title , descrption,icon}) => {
  return (
    <>
      <div className="card">
        <div className="card-body d-flex align-items-center justify-content-center flex-column">
            {icon}
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descrption}</p>
        </div>
      </div>
    </>
  );
};

export default JoinCard;
