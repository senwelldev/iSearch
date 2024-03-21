import React, { useEffect, useState } from "react";
import "./Contact.css";
import PhoneInput from "react-phone-input-2";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import db from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore/lite";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();
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
      {
        /*Swal.fire({
        title: "Success!",
        text: "Thank you for contacting us..",
        icon: "success",
      });*/
      }
      navigate("/thankyou");
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
                        <div className="spinner-border text-dark" role="status">
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
                    7th Floor, Gera's Imperium Alpha, Near EON IT Park, Kharadi
                    Pune, Maharashtra- 411014
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
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
