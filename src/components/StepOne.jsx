import "../App.css";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ContinueIcon } from "../icons/ContinueIcon";
import { useState, useEffect } from "react";

export function StepOne({ nextStep }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const nameRegex = /^[A-Za-z\s-]{2,20}$/;
  const usernameRegex = /^[a-zA-Z0-9_.]{3,15}$/;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedFirstname = localStorage.getItem("firstname");
    const storedLastname = localStorage.getItem("lastname");
    const storedUsername = localStorage.getItem("username");

    if (storedFirstname) setFirstname(storedFirstname);
    if (storedLastname) setLastname(storedLastname);
    if (storedUsername) setUsername(storedUsername);
  }, []);

  useEffect(() => {
    localStorage.setItem("firstname", firstname);
  }, [firstname]);

  useEffect(() => {
    localStorage.setItem("lastname", lastname);
  }, [lastname]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const handleNext = () => {
    const newErrors = {};
    if (!nameRegex.test(firstname)) newErrors.Firstname = "Invalid firstname";
    if (!nameRegex.test(lastname)) newErrors.Lastname = "Invalid lastname";
    if (!usernameRegex.test(username)) newErrors.Username = "Invalid username";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) nextStep();
  };

  const validateFirstname = (value) => {
    setFirstname(value);
    if (!nameRegex.test(value))
      setErrors((prev) => ({ ...prev, Firstname: "Invalid firstname" }));
    else setErrors((prev) => ({ ...prev, Firstname: "" }));
  };

  const validateLastname = (value) => {
    setLastname(value);
    if (!nameRegex.test(value))
      setErrors((prev) => ({ ...prev, Lastname: "Invalid lastname" }));
    else setErrors((prev) => ({ ...prev, Lastname: "" }));
  };

  const validateUsername = (value) => {
    setUsername(value);
    if (!usernameRegex.test(value))
      setErrors((prev) => ({ ...prev, Username: "Invalid username" }));
    else setErrors((prev) => ({ ...prev, Username: "" }));
  };

  return (
    <div className="container containerNormal">
      <div className="container1-2">
        <div className="headers">
          <PineconeLogo />
          <div className="header1 inter">Join Us! 😎</div>
          <div className="header2 inter">
            Please provide all current information accurately.
          </div>
        </div>

        <div className="stepOneInputs inter">
          <label>Firstname*</label>
          <input
            type="text"
            className={`inputs ${errors.Firstname ? "inputError" : ""}`}
            placeholder="Firstname"
            value={firstname}
            onChange={(e) => validateFirstname(e.target.value)}
          />
          {errors.Firstname && (
            <span className="errorText">{errors.Firstname}</span>
          )}

          <label>Lastname*</label>
          <input
            type="text"
            className={`inputs ${errors.Lastname ? "inputError" : ""}`}
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => validateLastname(e.target.value)}
          />
          {errors.Lastname && (
            <span className="errorText">{errors.Lastname}</span>
          )}

          <label>Username*</label>
          <input
            type="text"
            className={`inputs ${errors.Username ? "inputError" : ""}`}
            placeholder="Username"
            value={username}
            onChange={(e) => validateUsername(e.target.value)}
          />
          {errors.Username && (
            <span className="errorText">{errors.Username}</span>
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
