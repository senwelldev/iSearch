import React, { useEffect, useState } from "react";
import "./RatingsBand.css";
import Star from "../../Images/Footer/Ratings/Star.png";
import StartLogo from "../../Images/Footer/Ratings/StartLogo.png";
import GlassDoor from "../../Images/Footer/Ratings/GlassDoor.png";
import Clutch from "../../Images/Footer/Ratings/Clutch.png";
import Google from "../../Images/Footer/Ratings/Google.png";
import India from "../../Images/Footer/Ratings/India.png";
import UK from "../../Images/Footer/Ratings/UK.png";
import USA from "../../Images/Footer/Ratings/USA.png";
import { FaPhoneAlt } from "react-icons/fa";
import db from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore/lite";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const RatingsBand = () => {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  // console.log(email);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(true);

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    };
  }, []);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(validateEmail(enteredEmail));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [email];
    console.log("RequiredField", requiredFields);
    // console.log(email);
    if (requiredFields.some((field) => !field || field.trim() === "")) {
      alert("Please fill in all required fields");
      return;
    }

    if (!isValidEmail) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      // Assuming "contacts" is your Firestore collection name
      const docRef = await addDoc(collection(db, "Isearch-Contact"), {
        email,
      });

      console.log("Document written with ID: ", docRef.id);
      // Trigger SweetAlert for success
      Swal.fire({
        title: "Success!",
        text: "Thank you for contacting us..",
        icon: "success",
      });
      // Reset form fields
      setEmail("");
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="RatingsBandBody">
      {/* <hr style={{color:'black'}}/> */}
      <div className="container-fluid">
        <div className="row" style={{ padding: "20px 1px" }}>
          <div className="col-lg-6 RatingsBandBody-row1-Parent">
            <div className="row RatingsBandBody-row1">
              <div className="col-lg-3 ratingCard">
                <div className="row ExxonUperpart">
                  <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={Star} className="start-exon" alt="StartLogo" />
                  </div>
                  <div className="col-lg-6">
                    <span>4.7</span>
                  </div>
                </div>
                <img
                  src={StartLogo}
                  alt="Goodfrims"
                  className="ExxonUnderImg"
                />
              </div>

              <div className="col-lg-3 ratingCard">
                <div className="row ExxonUperpart">
                  <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={Star} className="start-exon" alt="startlogo" />
                  </div>
                  <div className="col-lg-6">
                    <span>4.8</span>
                  </div>
                </div>
                <img
                  src={GlassDoor}
                  alt="galssdoor"
                  className="ExxonUnderImg"
                />
              </div>

              <div className="col-lg-3 ratingCard">
                <div className="row ExxonUperpart">
                  <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={Star} className="start-exon" alt="startLogo" />
                  </div>
                  <div className="col-lg-6">
                    <span>4.5</span>
                  </div>
                </div>
                <img src={Google} alt="google" className="ExxonUnderImg" />
              </div>

              <div className="col-lg-3 ratingCard">
                <div className="row ExxonUperpart">
                  <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={Star} className="start-exon" alt="startLogo" />
                  </div>
                  <div className="col-lg-6">
                    <span>4.6</span>
                  </div>
                </div>
                <img src={Clutch} alt="clutch" className="ExxonUnderImg" />
              </div>
            </div>
            {/*---------- subscribeDiv----- */}
            <div className="ReatingssubscribeDiv">
              <h6>Get the Estimation of your project</h6>
              <p>
                Most newsletters suck but this isn’t 'industry standards' and
                'best practices' only the real stuff that moves the needle.
              </p>
              Email*
              <br />
              <input
                type="text"
                id="email"
                placeholder="Enter Email-Id"
                className={`medium-input ${isValidEmail ? "" : "invalid"}`}
                autoFocus
                onChange={handleEmailChange}
              />
              {!isValidEmail && (
                <p className="error-message">Enter a valid email address</p>
              )}
              <br />
              <button onClick={handleFormSubmit}>Submit</button>
            </div>
            {/* -------------------------------------- */}
          </div>

          <div className="col-lg-6">
            <div className="row RatingsBandBody-row2">
              <div className="col-lg-4 RatingsBandBody-row2-Card">
                <div className="row Exxon-Numberrow ">
                  <div
                    className="col-lg-6"
                    style={{
                      marginRight: "-22px",
                      marginTop: "-9px",
                      // marginLeft: "17px",
                    }}
                  >
                    <img
                      src={UK}
                      alt="United Kingdom"
                      className="country-logo"
                    />
                  </div>
                  <div className="col-lg-6">
                    <p>UK</p>
                  </div>
                </div>
                <p className="Exxon-Call">
                  <FaPhoneAlt />
                  <a href="tel:+44 7818 818981">+447818818981</a>
                </p>
              </div>

              <div className="col-lg-4 RatingsBandBody-row2-Card">
                <div className="row Exxon-Numberrow">
                  <div
                    className="col-lg-6"
                    // style={{ marginRight: "-22px" }}
                  >
                    <img src={USA} alt="usa" className="country-logo" />
                  </div>
                  <div className="col-lg-6">
                    <p>USA</p>
                  </div>
                </div>
                <p className="Exxon-Call">
                  <FaPhoneAlt />
                  <a href="tel:+1 618 423 7605">+1 6184237605</a>
                </p>
              </div>
              <div className="col-lg-4 RatingsBandBody-row2-Card">
                <div className="row Exxon-Numberrow">
                  <div className="col-lg-6" style={{ marginRight: "-22px" }}>
                    <img src={India} alt="ind" className="country-logo" />
                  </div>
                  <div className="col-lg-6">
                    <p>India</p>
                  </div>
                </div>
                <p className="Exxon-Call">
                  <FaPhoneAlt />
                  <a href="tel:+91 9175277758">+91 9175277758</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        © 2023 isearch.co.in {"  |  "} All Rights Reserved |{"   "}
        <a style={{ color: "white" }} href="mailto:contactus@isearch.co.in">
          contactus@isearch.co.in
        </a>
        {"  |  "}
        <a href="tel:+919175277758">+91 9175277758</a>
      </p>
    </div>
  );
};

export default RatingsBand;
