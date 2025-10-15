import "./App.css";
import { useState } from "react";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { AllSet } from "./Allset";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const submitHandler = () => {
    setStep(4);
  };

  return (
    <div className="app">
      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && (
        <StepThree prevStep={prevStep} submitHandler={submitHandler} />
      )}
      {step === 4 && <AllSet />}
    </div>
  );
}

export default App;
