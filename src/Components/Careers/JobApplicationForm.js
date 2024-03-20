import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { css } from "@emotion/react";
import db from "../../firebase.config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore/lite";
import "./JobApplicationForm.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const JobApplicationForm = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [file, setFile] = useState(null);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [experienceError, setExperienceError] = useState("");
  const [currentLocationError, setCurrentLocationError] = useState("");
  //-----------------------------------------------------------------------
  const [fileUrl, setFileUrl] = useState("");
  const [fileError, setFileError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);

  useEffect(() => {
    if (uploadProgress === 100) {
      setUploadComplete(true);
    }
  }, [uploadProgress]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const value = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value) || value === "") {
      setEmail(value);
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleMobileNumberChange = (phone) => {
    setMobileNumber(phone);
    setMobileNumberError("");
  };

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    // Ensure that the entered value is a valid number or an empty string
    if (!isNaN(value) || value === "") {
      setExperience(value);
      setExperienceError("");
    } else {
      setExperienceError("Please enter a valid numeric value for experience.");
    }
  };

  const handleCurrentLocationChange = (e) => {
    const value = e.target.value;

    if (/^[A-Za-z\s]+$/.test(value) || value === "") {
      setCurrentLocation(value);
      setCurrentLocationError("");
    } else {
      setCurrentLocationError(
        "Please enter a valid alphabetic value for location."
      );
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileError("");
      setUploadComplete(false);
      setUploadProgress(0);
      startUpload(selectedFile);
    } else {
      setFile(null);
      setFileError("Please upload a file.");
    }
  };

  const startUpload = async (selectedFile, documentId) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `uploads/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      const unsubscribe = uploadTask.on(
        "upload_progress",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            // Update the document with the file URL
            await updateDoc(doc(db, "Isearch-Applications", documentId), {
              fileUrl: downloadURL,
            });

            // Now, the file upload is complete
            setFileUrl(downloadURL);
            setUploadComplete(true);
            setLoading(false);
          } catch (error) {
            console.error("Error updating document with file URL:", error);
            setLoading(false);
          }
        }
      );

      // Cleanup the event listener when the component is unmounted
      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.error("Error handling file upload: ", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation logic
    if (!firstName.trim()) {
      setFirstNameError("Please enter your first name.");
    }

    if (!lastName.trim()) {
      setLastNameError("Please enter your last name.");
    }

    if (!email.trim()) {
      setEmailError("Please enter a valid email.");
    }

    if (!mobileNumber.trim()) {
      setMobileNumberError("Please provide a valid Mobile Number.");
    }

    if (!experience.trim()) {
      setExperienceError("Please provide a valid experience.");
    }

    if (!currentLocation.trim()) {
      setCurrentLocationError("Please provide a valid location.");
    }

    if (!file) {
      setFileError("Please upload a file.");
    }

    // If all validations pass, submit the form
    if (
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      mobileNumber.trim() &&
      experience.trim() &&
      currentLocation.trim() &&
      file
    ) {
      try {
        setLoading(true);
        // Store data in Firebase without starting the file upload process here
        const docRef = await addDoc(collection(db, "Isearch-Applications"), {
          firstName,
          lastName,
          email,
          mobileNumber,
          experience,
          currentLocation,
          appliedOn: new Date(),
        });
        console.log("Document ID:", docRef.id);

        // Trigger SweetAlert for success
        Swal.fire({
          title: "Success!",
          text: "Your application has been submitted successfully.",
          icon: "success",
        });

        const cleanup = startUpload(file, docRef.id);
        return () => {
          cleanup();
        };
      } catch (error) {
        console.error("Error handling form submission: ", error);
        setLoading(false);
      } finally {
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobileNumber("");
        setExperience("");
        setCurrentLocation("");
        setFile(null);
        setUploadProgress(0);
        setLoading(false);
        // setFileUrl("");
      }
    }
  };

  return (
    <div className="container-fluid  pt-5 JobApplicationFormBody1">
      <div className="row justify-content-center is-job-form">
        <div className="col-md-12  ms-5 ">
          <h1 className="isA-header">Apply For a Job</h1>
          <form onSubmit={handleSubmit} noValidate className="is-contantForm">
            <div className="form-row mb-3 d-flex flex-wrap ">
              <div className="col-md-3 position-relative me-4">
                <label htmlFor="firstName" className="is-uppername">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    firstNameError ? "is-invalid" : firstName ? "is-valid" : ""
                  }`}
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
                <div className="invalid-tooltip position-absolute">
                  {firstNameError}
                </div>
              </div>
              <div className="col-md-4 position-relative me-4">
                <label htmlFor="lastName" className="is-uppername">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    lastNameError ? "is-invalid" : lastName ? "is-valid" : ""
                  }`}
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
                <div className="invalid-tooltip position-absolute">
                  {lastNameError}
                </div>
              </div>
              <div className="col-md-4 position-relative">
                <label htmlFor="email" className="is-uppername">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    emailError ? "is-invalid" : email ? "is-valid" : ""
                  }`}
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <div className="invalid-tooltip position-absolute">
                  {emailError}
                </div>
              </div>
            </div>
            <div className="form-row mb-3 d-flex flex-wrap">
              <div className="col-md-3 position-relative me-4">
                <label htmlFor="mobileNumber" className="is-uppername">
                  Mobile Number
                </label>
                <PhoneInput
                  country={"in"}
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  className="mob-tel"
                />
                <div className="invalid-tooltip position-absolute">
                  {mobileNumberError}
                </div>
              </div>
              <div className="col-md-4 position-relative me-4">
                <label htmlFor="experience" className="is-uppername">
                  Experience
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    experienceError
                      ? "is-invalid"
                      : experience
                      ? "is-valid"
                      : ""
                  }`}
                  id="experience"
                  placeholder="Experience"
                  value={experience}
                  onChange={handleExperienceChange}
                  required
                />
                <div className="invalid-tooltip position-absolute">
                  {experienceError}
                </div>
              </div>
              <div className="col-md-4 position-relative ">
                <label htmlFor="currentLocation" className="is-uppername">
                  Current Location
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    currentLocationError
                      ? "is-invalid"
                      : currentLocation
                      ? "is-valid"
                      : ""
                  }`}
                  id="currentLocation"
                  placeholder="Current Location"
                  value={currentLocation}
                  onChange={handleCurrentLocationChange}
                  required
                />
                <div className="invalid-tooltip position-absolute">
                  {currentLocationError}
                </div>
              </div>
            </div>
            <div className="form-group mb-3 position-relative">
              <input
                type="file"
                className={`form-control-file ${
                  fileError ? "is-invalid" : file ? "is-valid" : ""
                }`}
                id="exampleFormControlFile1"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
              />
              <div className="invalid-tooltip position-absolute">
                {fileError}
              </div>

              {file && (
                <div className="progress mt-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${uploadProgress}%` }}
                    aria-valuenow={uploadProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {uploadProgress.toFixed(2)}%
                  </div>
                </div>
              )}
            </div>
            <button
              className={`btn btn-primary ${
                uploadComplete ? "show-hover" : ""
              }`}
              type="submit"
              disabled={!uploadComplete}
              style={{
                marginTop: "23px",
                background:
                  "linear-gradient(90deg, hsla(200, 69%, 50%, 1) 24%, hsla(216, 62%, 39%, 1) 83%)",
                color: "white",
                padding: "11px 41px",
                border: "2px solid rgb(31 142 203)",
                fontSize: "1.1rem",
              }}
            >
              APPLY
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default JobApplicationForm;
