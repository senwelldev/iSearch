import React, { useEffect, useState } from "react";
import "./RatingsBand.css";
import Star from "../../Images/Footer/Ratings/Star.webp";
import StartLogo from "../../Images/Footer/Ratings/StartLogo.webp";
import GlassDoor from "../../Images/Footer/Ratings/GlassDoor.webp";
import Clutch from "../../Images/Footer/Ratings/Clutch.webp";
import Google from "../../Images/Footer/Ratings/Google.webp";
import India from "../../Images/Footer/Ratings/India.webp";
import UK from "../../Images/Footer/Ratings/UK.webp";
import USA from "../../Images/Footer/Ratings/USA.webp";
import { FaPhoneAlt } from "react-icons/fa";
import db from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore/lite";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Link, useNavigate } from "react-router-dom";

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
          {/*<div className="col-lg-6 RatingsBandBody-row1-Parent">
            <div className="row RatingsBandBody-row1">
              <div className="col-lg-3 ratingCard">
                <div className="row ExxonUperpart">
                  <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img
                      height="20px"
                      width="20px"
                      src={Star}
                      className="start-exon"
                      alt="StartLogo"
                    />
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
  </div>*/}
          <div className="col-lg-6 RatingsBandBody-row1-Parent">
            <div className="row RatingsBandBody-row1">
              {[
                { rating: 4.7, imageSrc: StartLogo },
                { rating: 4.8, imageSrc: GlassDoor },
                { rating: 4.5, imageSrc: Google },
                { rating: 4.6, imageSrc: Clutch },
              ].map((item, index) => (
                <div className="col-lg-3 ratingCard" key={index}>
                  <div className="row ExxonUperpart">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                      <img
                        height="20px"
                        width="20px"
                        src={Star}
                        className="start-exon"
                        alt="StarLogo"
                      />
                    </div>
                    <div className="col-lg-6">
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <img
                    height="30px"
                    width="90px"
                    src={item.imageSrc}
                    alt={`image-${index}`}
                    className="ExxonUnderImg"
                  />
                </div>
              ))}
            </div>
          </div>
          {/*<div className="col-lg-6">
            <div className="row RatingsBandBody-row2">
              <div className="col-lg-4 RatingsBandBody-row2-Card">
                <div className="row Exxon-Numberrow ">
                  <div
                    className="col-lg-6"
                    style={
                      {
                        // marginRight: "-22px",
                        // marginTop: "-9px",
                        // marginLeft: "17px",
                        // border: "1px solid red",
                      }
                    }
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
                  </div>*/}
          <div className="col-lg-6">
            <div className="row RatingsBandBody-row2">
              {[
                { country: "UK", flag: UK, phoneNumber: "+447818818981" },
                { country: "USA", flag: USA, phoneNumber: "+1 6184237605" },
                {
                  country: "India",
                  flag: India,
                  phoneNumber: "+91 9175277758",
                },
              ].map((item, index) => (
                <div className="col-lg-4 RatingsBandBody-row2-Card" key={index}>
                  <div className="row Exxon-Numberrow ">
                    <div className="col-lg-6">
                      <img
                        src={item.flag}
                        alt={item.country}
                        className="country-logo"
                      />
                    </div>
                    <div className="col-lg-6">
                      <p>{item.country}</p>
                    </div>
                  </div>
                  <p className="Exxon-Call">
                    <FaPhoneAlt />
                    <a href={`tel:${item.phoneNumber}`}>{item.phoneNumber}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        © 2023 isearch.co.in {"  |  "} All Rights Reserved |
        <Link to="/privacy" style={{ textDecoration: "none", color: "white" }}>
          Privacy Policy {" | "}
        </Link>
        {"   "}
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
