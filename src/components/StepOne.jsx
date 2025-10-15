import "../App.css";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ContinueIcon } from "../icons/ContinueIcon";
import { useState } from "react";

export function StepOne({ nextStep }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const nameRegex = /^[A-Za-z\s-]{2,20}$/;
  const usernameRegex = /^[a-zA-Z0-9_.]{3,15}$/;

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (!nameRegex.test(firstname)) newErrors.Firstname = "Invalid firstname";
    if (!nameRegex.test(lastname)) newErrors.Lastname = "Invalid lastname";
    if (!usernameRegex.test(username)) newErrors.Username = "Invalid username";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  const validateFirstname = (value) => {
    if (!nameRegex.test(value))
      setErrors((prev) => ({ ...prev, Firstname: "Invalid firstname" }));
    else setErrors((prev) => ({ ...prev, Firstname: "" }));
    setFirstname(value);
  };

  const validateLastname = (value) => {
    if (!nameRegex.test(value))
      setErrors((prev) => ({ ...prev, Lastname: "Invalid lastname" }));
    else setErrors((prev) => ({ ...prev, Lastname: "" }));
    setLastname(value);
  };

  const validateUsername = (value) => {
    if (!usernameRegex.test(value))
      setErrors((prev) => ({ ...prev, Username: "Invalid username" }));
    else setErrors((prev) => ({ ...prev, Username: "" }));
    setUsername(value);
  };

  return (
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
          Firstname*
          <input
            type="text"
            className="inputs"
            placeholder="Firstname"
            value={firstname}
            onChange={(e) => validateFirstname(e.target.value)}
          />
          {errors.Firstname && (
            <span style={{ color: "red" }}>{errors.Firstname}</span>
          )}
          Lastname*
          <input
            type="text"
            className="inputs"
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => validateLastname(e.target.value)}
          />
          {errors.Lastname && (
            <span style={{ color: "red" }}>{errors.Lastname}</span>
          )}
          Username*
          <input
            type="text"
            className="inputs"
            placeholder="Username"
            value={username}
            onChange={(e) => validateUsername(e.target.value)}
          />
          {errors.Username && (
            <span style={{ color: "red" }}>{errors.Username}</span>
          )}
        </div>
      </div>

      <button className="stepOneContinueButton" onClick={handleNext}>
        <div className="inter continueButtonText">Continue</div>
        <div className="inter continueButtonText">1/3</div>
        <ContinueIcon />
      </button>
    </div>
  );
}
