import React from "react";
// Import your CSS file for additional styling if needed

const ThankYouPage = () => {
  return (
    <div
      className="container-fluid h-100 my-10"
      style={{
        marginTop: "8rem",
        marginBottom: "10rem",
        paddingBottom: "5rem",
      }}
    >
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-8 col-sm-12 ">
          <div className="card shadow-lg">
            <div className="card-body text-center">
              <h2 className="card-title" style={{ fontSize: "2rem" }}>
                Thank You!
              </h2>
              <p className="card-text" style={{ fontSize: "1rem" }}>
                Your submission has been received.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
