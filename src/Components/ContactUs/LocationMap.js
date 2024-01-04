import React from "react";
import "./Contact.css";

const LocationMap = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div style={{ marginTop: "50px" }}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3824607765223!2d73.95239607494348!3d18.55678826806748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c1479e6abd%3A0x3d3672047e8413fe!2sGera&#39;s%20Imperium%20Alpha!5e0!3m2!1sen!2sin!4v1702102753119!5m2!1sen!2sin"
            style={{
              border: "0",
              height: "260px",
              marginBottom: "10px",
              width: "100%",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LocationMap;
