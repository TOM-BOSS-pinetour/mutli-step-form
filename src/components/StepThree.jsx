import "../App.css";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ContinueIcon } from "../icons/ContinueIcon";
import { useState } from "react";

export function StepThree({ prevStep, submitHandler }) {
  const [url, setUrl] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [errors, setErrors] = useState({ date: "", image: "" });

  const handleInputFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setUrl(newUrl);
      setErrors((prev) => ({ ...prev, image: "" }));
    } else {
      setUrl("");
      setErrors((prev) => ({ ...prev, image: "Image cannot be blank" }));
    }
  };

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
    if (e.target.value) {
      setErrors((prev) => ({ ...prev, date: "" }));
    } else {
      setErrors((prev) => ({ ...prev, date: "Please select a date." }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      date: dateOfBirth ? "" : "Please select a date.",
      image: url ? "" : "Image cannot be blank",
    };
    setErrors(newErrors);
    return !newErrors.date && !newErrors.image;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      submitHandler();
    }
  };

  return (
    <div
      className="container containerNormal"
      style={{ minHeight: "655px", width: "480px" }}
    >
      <div className="container1-2">
        <div className="headers">
          <PineconeLogo />
          <div className="header1 inter">Join Us! 😎</div>
          <div className="header2 inter">
            Please provide all current information accurately.
          </div>
        </div>

        <div className="stepOneInputs inter">
          <label>Date of birth*</label>
          <input
            type="date"
            className={`inputs ${errors.date ? "inputError" : ""}`}
            value={dateOfBirth}
            onChange={handleDateChange}
          />
          {errors.date && <div className="errorText">{errors.date}</div>}

          <label>Profile image*</label>
          <div
            className={`image-upload-container ${
              errors.image ? "inputError" : ""
            }`}
          >
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              onChange={handleInputFile}
            />
            {!url ? (
              <label htmlFor="fileInput" className="image-placeholder">
                Add image
              </label>
            ) : (
              <img src={url} alt="profile" className="previewImage" />
            )}
          </div>
          {errors.image && <div className="errorText">{errors.image}</div>}
        </div>
      </div>

      <div className="buttons">
        <button className="backButton" onClick={prevStep}>
          Back
        </button>
        <button className="stepTwoContinueButton" onClick={handleSubmit}>
          <div className="inter continueButtonText">Submit</div>
          <div className="inter continueButtonText">3/3</div>
          <ContinueIcon />
        </button>
      </div>
    </div>
  );
}
