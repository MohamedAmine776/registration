import React, {  useState } from "react";
import TermsRegister from "./content/TermsRegister";
import UserDetails from "./content/UserDetails";
import AdressDetails from "./content/AdressDetails";
import IncomesDetails from "./content/IncomesDetails";

export default function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    birthday: "",
    nationality: "",
    email: "",
    password: "",
    fullAdress: "",
    building: "",
    flat: "",
    city: "",
    incomeSource: "",
    annualIncome: "",
    plannedInvestement: "",
  });
  const [step, setStep] = useState(0);
  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setUser((user) => ({
      ...user,
      [input]: e.target.value,
    }));
  };

  switch (step) {
    case 0:
      return (
        <TermsRegister
          step={step}
          nextStep={nextStep}
          handleChange={handleChange}
          setUser={setUser}
          values={user}
        />
      );
    case 1:
      return (
        <UserDetails
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          setUser={setUser}
          values={user}
        />
      );
    case 2:
      return (
        <AdressDetails
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          setUser={setUser}
          values={user}
        />
      );
    case 3:
      return (
        <IncomesDetails
          step={step}
          prevStep={prevStep}
          handleChange={handleChange}
          setUser={setUser}
          values={user}
        />
      );
    default:
      return (
        <TermsRegister
          step={step}
          nextStep={nextStep}
          handleChange={handleChange}
          setUser={setUser}
          values={user}
        />
      );
  }
}
