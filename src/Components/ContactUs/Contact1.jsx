import React, { useState, useEffect } from "react";
import "./Contact.css";
import { InlineWidget } from "react-calendly";
import PhoneInput from "react-phone-input-2";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LeftImages from "../../Images/Contact/LeftImages1.webp";
import db from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore/lite";
import Loader from "./Loader";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  // //Loader handling of Calendly------------------------------
  // const [calendlyLoading, setCalendlyLoading] = useState(false);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setCalendlyLoading(false);
  //   };

  //   window.addEventListener("load", handleLoad);

  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  // useEffect(() => {
  //   fetch("https://calendly.com/isearch-digital/30min")
  //     .then(() => {
  //       setCalendlyLoading(true);
  //     })
  //     .catch((error) => {
  //       console.error("Error loading Calendly: ", error);
  //       setCalendlyLoading(true);
  //     });
  // }, []);

  //------------------------------------------------------

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

    const requiredFields = [name, email, phone, message];
    console.log("RequiredField", requiredFields);

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
        name,
        email,
        phone,
        message,
      });

      console.log("Document written with ID: ", docRef.id);

      // Trigger SweetAlert for success
      Swal.fire({
        title: "Success!",
        text: "Thank you for contacting us..",
        icon: "success",
      });

      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Contact Us</title>
        <link rel="canonical" href="https://isearch.co.in/contact" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="We&#039;re here to help. Contact our services, sales, partner, investor, press, analyst, product and web teams. Give feedback. See our locations. Reach out."
        />
        <meta property="og:site_name" content="isearch" />
        <meta property="og:title" content="Contact us" />
        <meta
          property="og:description"
          content="We&#039;re here to help. Contact our services, sales, partner, investor, press, analyst, product and web teams. Give feedback. See our locations. Reach out."
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/LeftImages1.76a139a6fefaa43ebdd2.png"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/LeftImages1.76a139a6fefaa43ebdd2.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact us" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/LeftImages1.76a139a6fefaa43ebdd2.png"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
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
      <div className="contactArea-Section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="sendMessageForm">
                <h3>Contact Us</h3>
                <from>
                  <div className="row Exxon-Contactus">
                    <div className="col-md-10">
                      <div className="form-group">
                        <input
                          type="text"
                          className="medium-input"
                          id="firstName"
                          name="firstName"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-10">
                      <div className="form-group">
                        <input
                          type="email"
                          className={`medium-input ${
                            isValidEmail ? "" : "invalid"
                          }`}
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={handleEmailChange}
                        ></input>
                      </div>
                      {!isValidEmail && (
                        <p className="error-message">
                          Please enter a valid email address
                        </p>
                      )}
                    </div>

                    <div className="col-md-10">
                      <div className="form-group">
                        <PhoneInput
                          country={"us"}
                          enableSearch={true}
                          type="tel"
                          inputProps={{
                            name: "phone",
                            placeholder: "Phone",
                            className: "phone-input",
                            id: "phone",
                          }}
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                        ></PhoneInput>
                      </div>
                    </div>

                    <div className="col-md-10">
                      <div className="form-group">
                        <textarea
                          className="medium-textarea h-100px bg-white"
                          name="message"
                          placeholder="Type your Message..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        className="Isearch-Submit"
                        onClick={handleFormSubmit}
                      >
                        {loading ? (
                          <div
                            className="spinner-border text-dark"
                            role="status"
                          >
                            <span className="sr-only"></span>
                          </div>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </div>
                </from>
              </div>
            </div>
            <div className="col-lg-4 Isearch-Reach">
              <h3>Reach Out to Us</h3>
              <ul className="contact-info">
                <li>
                  <div className="text-box">
                    <CiLocationOn className="Isearch-logo" />
                    <span>
                      {/* <b>India</b>
                       <br /> */}
                      <b>iSearch India, </b> <br />
                      7th Floor, Gera's Imperium Alpha, Near EON IT Park,
                      Kharadi Pune, Maharashtra- 411014
                    </span>
                  </div>
                </li>
                <br />
                <li>
                  <div className="text-box">
                    <FaPhoneAlt className="Isearch-logo" />{" "}
                    <a href="tel:+91 9175277758">+91 9175277758</a>
                  </div>
                </li>
                <br />

                <li>
                  <div className="text-box">
                    <MdEmail className="Isearch-logo" />{" "}
                    <a href="mailto:contactus@isearch.co.in">
                      contactus@isearch.co.in
                    </a>
                  </div>
                </li>
              </ul>
            </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
