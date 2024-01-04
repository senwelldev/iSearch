import React from "react";
import { Link } from "react-router-dom";
import jobDescriptions from "./Jobs.json";

const CarouselComponent = () => {
  return (
    <div className="container text-center p-5">
      <h1>Open Positions</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {jobDescriptions.jobs.map((job) => (
          <div className="col" key={job.jobTitle}>
            {/* {console.log(job.jobTitle)} */}
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
      <br />
    </div>
  );
};

export default CarouselComponent;
