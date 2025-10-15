import "../App.css";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ContinueIcon } from "../icons/ContinueIcon";
import { useState } from "react";

export function StepTwo({ nextStep, prevStep }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{8,15}$/;
  const passwordRegex = /^.{8,20}$/;

  const handleNext = () => {
    const newErrors = {};
    if (!emailRegex.test(email)) newErrors.Email = "Invalid email";
    if (!phoneRegex.test(phone)) newErrors.Phone = "Invalid phone number";
    if (!passwordRegex.test(password))
      newErrors.Password = "Password must be 6-20 characters";
    if (password !== confirmPassword)
      newErrors.ConfirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) nextStep();
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
          Email*
          <input
            type="email"
            className="inputs"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.Email) setErrors((prev) => ({ ...prev, Email: "" }));
            }}
          />
          {errors.Email && <span style={{ color: "red" }}>{errors.Email}</span>}
          Phone number*
          <input
            type="text"
            className="inputs"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.Phone) setErrors((prev) => ({ ...prev, Phone: "" }));
            }}
          />
          {errors.Phone && <span style={{ color: "red" }}>{errors.Phone}</span>}
          Password*
          <input
            type="password"
            className="inputs"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.Password)
                setErrors((prev) => ({ ...prev, Password: "" }));
            }}
          />
          {errors.Password && (
            <span style={{ color: "red" }}>{errors.Password}</span>
          )}
          Confirm Password*
          <input
            type="password"
            className="inputs"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (errors.ConfirmPassword)
                setErrors((prev) => ({ ...prev, ConfirmPassword: "" }));
            }}
          />
          {errors.ConfirmPassword && (
            <span style={{ color: "red" }}>{errors.ConfirmPassword}</span>
          )}
        </div>
      </div>

      <div className="buttons">
        <button className="backButton" onClick={prevStep}>
          Back
        </button>
        <button className="stepTwoContinueButton" onClick={handleNext}>
          <div className="inter continueButtonText">Continue</div>
          <div className="inter continueButtonText">2/3</div>
          <ContinueIcon />
        </button>
      </div>
    </div>
  );
}
