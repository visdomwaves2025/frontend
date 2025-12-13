import React, { useState } from "react";
import { FaLock, FaEye } from "react-icons/fa";

function Step2({ form, update, nextStep, prevStep }) {
  const [errors, setErrors] = useState({
    pin: "",
    confirmPin: ""
  });

  const handleNext = () => {
    let valid = true;
    let newErrors = { pin: "", confirmPin: "" };

    if (!/^\d{4}$/.test(form.parentPin)) {
      newErrors.pin = "PIN must be exactly 4 digits";
      valid = false;
    }

    if (!/^\d{4}$/.test(form.parentPinConfirm)) {
      newErrors.confirmPin = "Confirm PIN must be exactly 4 digits";
      valid = false;
    } else if (form.parentPin !== form.parentPinConfirm) {
      newErrors.confirmPin = "PINs do not match";
      valid = false;
    }

    setErrors(newErrors);
    if (valid) nextStep();
  };

  return (
    <div className="step-content">

      {/* Parent PIN */}
      <div className={`input-row ${errors.pin ? "error-border" : ""}`}>
        <div className="icon-col"><FaLock /></div>

        <input
          type="password"
          placeholder="Set 4-Digit Parent Pin"
          value={form.parentPin}
          maxLength={4}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            update("parentPin", value);
            setErrors({ ...errors, pin: "" });
          }}
        />

        <div className="eye-icon"><FaEye /></div>
      </div>
      {errors.pin && <p className="error-text">{errors.pin}</p>}

      {/* Confirm PIN */}
      <div className={`input-row ${errors.confirmPin ? "error-border" : ""}`}>
        <div className="icon-col"><FaLock /></div>

        <input
          type="password"
          placeholder="Re-enter Pin"
          value={form.parentPinConfirm}
          maxLength={4}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            update("parentPinConfirm", value);
            setErrors({ ...errors, confirmPin: "" });
          }}
        />

        <div className="eye-icon"><FaEye /></div>
      </div>
      {errors.confirmPin && <p className="error-text">{errors.confirmPin}</p>}

      <div className="btn-row spaced">
        <button type="button" className="btn btn-secondary" onClick={prevStep}>
          Previous
        </button>

        <button type="button" className="btn btn-primary ghost" onClick={handleNext}>
          Next
        </button>
      </div>

    </div>
  );
}

export default Step2;
