import "../App.css";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ContinueIcon } from "../icons/ContinueIcon";
import { useState } from "react";

export function StepThree({ prevStep, submitHandler }) {
  const [url, setUrl] = useState("");
  const handleInputFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setUrl(newUrl);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container1-2">
          <div className="headers">
            <PineconeLogo />
            <div className="header1 inter">Join Us! 😎</div>
            <div className="header2 inter">
              Please provide all current information accurately.
            </div>
          </div>
          <div className="stepOneInputs inter">
            Date of birth*
            <input
              type="date"
              className="inputs"
              placeholder="Date of birth"
              // value={dateOfBirth}
            />
            Profile image*
            <input
              type="file"
              accept="image/*"
              className="inputs"
              onChange={handleInputFile}
              // value={profileImage}
            />
            <img
              src={url}
              alt="profileImage"
              style={{ width: "100%", height: "220px", borderRadius: "8px" }}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="backButton" onClick={prevStep}>
            Back
          </button>
          <button className="stepTwoContinueButton" onClick={submitHandler}>
            <div className="inter continueButtonText">Submit</div>
            <div className="inter continueButtonText">3/3</div>
            <ContinueIcon />
          </button>
        </div>
      </div>
    </>
  );
}
