import React, { useState } from "react";
import "./SignUp.css";


import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    mobile: "",
    parentPin: "",
    parentPinConfirm: "",
    pName: "",
    pSurname: "",
    pAltMobile: "",
    pEmail: "",
    pMotherTongue: "",
    country: "",
    pincode: "",
    state: "",
    city: "",
    district: "",
    address: "",
    childName: "",
    childSurname: "",
    childDOB: "",
    childGender: "",
    childClass: "",
    childSyllabus: "",
    medium: "",
    firstLanguage: "",
    secondLanguage: "",
    thirdLanguage: "",
    pin: "",
    rePin: "",
    agree: false,
  });

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const submitForm = () => {
    console.log(form);
    alert("Form Submitted!");
  };

  return (
  <>

  <video autoPlay loop muted playsInline className="bg-videos">
    <source src="/Signup Background/singupBack.mp4" type="video/mp4" />
  </video>
    
    <div className="reg-page">
      <div className="reg-card">

        <h2 className="reg-title">
          {step === 1 && "Get Started Now"}
          {step === 2 && "Parent Pin"}
          {step === 3 && "Parent Details"}
          {step === 4 && "Child Details"}
        </h2>

        {step === 1 && <Step1 form={form} update={update} nextStep={nextStep} />}
        {step === 2 && <Step2 form={form} update={update} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 form={form} update={update} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 form={form} update={update} prevStep={prevStep} submitForm={submitForm} />}
       
        <div className="signin-note">
          Already Have An Account? <span className="linkish">Sign In</span>
         </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;