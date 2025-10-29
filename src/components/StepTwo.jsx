import "../App.css";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ContinueIcon } from "../icons/ContinueIcon";
import { useState, useEffect } from "react";

export function StepTwo({ nextStep, prevStep }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{8,15}$/;
  const passwordRegex = /^.{8,20}$/;

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone");
    const storedPassword = localStorage.getItem("password");
    const storedConfirmPassword = localStorage.getItem("confirmPassword");

    if (storedEmail) setEmail(storedEmail);
    if (storedPhone) setPhone(storedPhone);
    if (storedPassword) setPassword(storedPassword);
    if (storedConfirmPassword) setConfirmPassword(storedConfirmPassword);
  }, []);
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("phone", phone);
  }, [phone]);

  useEffect(() => {
    localStorage.setItem("password", password);
  }, [password]);
  useEffect(() => {
    localStorage.setItem("confirmPassword", confirmPassword);
  }, [confirmPassword]);

  const handleNext = () => {
    const newErrors = {};
    if (!emailRegex.test(email)) newErrors.Email = "Invalid email";
    if (!phoneRegex.test(phone)) newErrors.Phone = "Invalid phone number";
    if (!passwordRegex.test(password))
      newErrors.Password = "Password must be 8-20 characters";
    if (password !== confirmPassword)
      newErrors.ConfirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) nextStep();
  };

  const hasError = Object.keys(errors).some((key) => errors[key]);

  return (
    <div
      className={`container ${hasError ? "containerError" : "containerNormal"}`}
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
          <label>Email*</label>
          <input
            type="email"
            className={`inputs ${errors.Email ? "inputError" : ""}`}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.Email) setErrors((prev) => ({ ...prev, Email: "" }));
            }}
          />
          {errors.Email && <span className="errorText">{errors.Email}</span>}

          <label>Phone number*</label>
          <input
            type="text"
            className={`inputs ${errors.Phone ? "inputError" : ""}`}
            placeholder="Phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.Phone) setErrors((prev) => ({ ...prev, Phone: "" }));
            }}
          />
          {errors.Phone && <span className="errorText">{errors.Phone}</span>}

          <label>Password*</label>
          <input
            type="password"
            className={`inputs ${errors.Password ? "inputError" : ""}`}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.Password)
                setErrors((prev) => ({ ...prev, Password: "" }));
            }}
          />
          {errors.Password && (
            <span className="errorText">{errors.Password}</span>
          )}

          <label>Confirm Password*</label>
          <input
            type="password"
            className={`inputs ${errors.ConfirmPassword ? "inputError" : ""}`}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (errors.ConfirmPassword)
                setErrors((prev) => ({ ...prev, ConfirmPassword: "" }));
            }}
          />
          {errors.ConfirmPassword && (
            <span className="errorText">{errors.ConfirmPassword}</span>
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
