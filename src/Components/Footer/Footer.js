import React, { useEffect, useState } from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../Images/isearchLogo3.webp";
import LinkedIn from "../../Images/Footer/LinkedIn.webp";
import Fb from "../../Images/Footer/Facebook.webp";
import WP from "../../Images/Footer/WhatsApp_icon.webp";
import Insta from "../../Images/Footer/Instagram.webp";
import Youtube from "../../Images/Footer/Youtube.webp";
import RatingsBand from "./RatingsBand";
import db from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore/lite";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Footer = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Format the time as HH:mm
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Subscribe----------------------------

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
    <div className="footerBody">
      <div className="SocialMediaIcons">
        <div className="wpme">
          <a
            href="https://wa.me/+919175277758"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WP} alt="..." />
          </a>
        </div>
        <div className="insta">
          <a
            href="https://www.linkedin.com/company/isearch-india/people/"
            target="_blank"
          >
            <img src={LinkedIn} alt="..." />
          </a>
        </div>
        <div className="insta">
          <a
            href="https://www.facebook.com/people/Senwell-Group/100068983571168/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Fb} alt="..." />
          </a>
        </div>
        <div className="insta">
          <a href="https://www.instagram.com/isearch.india/" target="_blank">
            <img src={Insta} alt="..." />
          </a>
        </div>
        <div className="insta">
          <a href="https://www.youtube.com/@senwellgroup" target="_blank">
            <img src={Youtube} alt="..." />
          </a>
        </div>
      </div>
      <footer>
        <div className="footerContent-Container">
          <div className="footerContent">
            <div className="footerContent-Left">
              <div className="subscribeDiv">
                <p className="time">
                  {formattedTime}
                  <section>
                    <i class="fa-solid fa-wifi"></i>
                    <span> </span>
                    <i class="fa-solid fa-battery-full"></i>
                  </section>
                </p>
                <h3>Get the Estimation of your Project</h3>
                <p>
                  Accurately assess time, resources, and costs for successful
                  project planning and management.
                </p>
                <label for="email">EMAIL*</label>
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
                <div className="pointing">
                  {/* <img src={Pointing} alt="..."/> */}
                  👆
                </div>
              </div>
            </div>
            <div className="footerContent-Right">
              <div
                className="footerLogo"
                onClick={() => {
                  navigate("/");
                  scrollToTop();
                }}
              >
                <img src={Logo} class="img-thumbnail" alt="..."></img>
              </div>
              <ul class="menu">
                <li>
                  <div
                    onClick={() => {
                      navigate("/about");
                      scrollToTop();
                    }}
                  >
                    About
                  </div>
                </li>
                <li className="seperator">|</li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/services");
                      scrollToTop();
                    }}
                  >
                    Services
                  </div>
                </li>
                <li className="seperator">|</li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/blog");
                      scrollToTop();
                    }}
                  >
                    Blog
                  </div>
                </li>
                <li className="seperator">|</li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/careers");
                      scrollToTop();
                    }}
                  >
                    Careers
                  </div>
                </li>
                <li className="seperator">|</li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/contact");
                      scrollToTop();
                    }}
                  >
                    Contact
                  </div>
                </li>
              </ul>
              <div className="address">
                7th floor, Gera's Imperium Alpha, Near EON IT Park, Kharadi,
                Pune, Maharashtra, India-411014.
              </div>
              <ul class="social_icon">
                <li>
                  <a
                    href="https://www.linkedin.com/company/isearch-india/people/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/Senwell-Group/100068983571168/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/isearch.india/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@senwellgroup"
                    target="_blank"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2FiSearch_india"
                    target="_blank"
                  >
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <p className="copyright">
            © 2023 isearch.co.in  {"  |  "} All Rights Reserved |{"   "}
            <a style={{ color: "white" }} href="mailto:contactus@isearch.co.in">
              contactus@isearch.co.in
            </a>
            {"  |  "}
            <a href="tel:+919175277758">+91 9175277758</a>
          </p> */}
        </div>
      </footer>
      <div className="ratingsBandDiv">
        <RatingsBand />
      </div>
    </div>
  );
};

export default Footer;
