import "../App.css";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ContinueIcon } from "../icons/ContinueIcon";
import { useState } from "react";

export function StepThree({ prevStep, submitHandler }) {
  const [url, setUrl] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleInputFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setUrl(newUrl);
    } else {
      setUrl("");
    }
  };

  const isFormValid = url && dateOfBirth; // Хоёулаа бөглөгдсөн үү?

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
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="Date of birth"
            />
            Profile image*
            <input
              type="file"
              accept="image/*"
              className="inputs"
              onChange={handleInputFile}
            />
            {url && (
              <img
                src={url}
                alt="profileImage"
                style={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginTop: "8px",
                }}
              />
            )}
          </div>
        </div>

        <div className="buttons">
          <button className="backButton" onClick={prevStep}>
            Back
          </button>
          <button
            className="stepTwoContinueButton"
            onClick={submitHandler}
            disabled={!isFormValid}
            style={{
              opacity: isFormValid ? 1 : 0.5,
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            <div className="inter continueButtonText">Submit</div>
            <div className="inter continueButtonText">3/3</div>
            <ContinueIcon />
          </button>
        </div>
      </div>
    </>
  );
}
