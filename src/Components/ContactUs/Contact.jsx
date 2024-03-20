import React, { useState, useEffect } from "react";
import "./Contact.css";
import db from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore/lite";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Helmet } from "react-helmet";
import ContactBanner from "./ContactBanner";
import LocationMap from "./LocationMap";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

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
          content="https://isearch.co.in/static/media/LeftImages1.5fca7e95525d776d6118.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://isearch.co.in/static/media/LeftImages1.5fca7e95525d776d6118.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact us" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/LeftImages1.5fca7e95525d776d6118.webp"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
      <ContactBanner />
      <ContactForm />
      <LocationMap />
    </div>
  );
};

export default Contact;
