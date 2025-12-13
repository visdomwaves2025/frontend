import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Step1({ form, update, nextStep }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    const mobile = form.mobile.trim();

    if (!mobile) {
      setError("Please enter your mobile number");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    setError("");
    nextStep();
  };

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only digits and max 10
    if (!/^\d*$/.test(value) || value.length > 10) return;

    update("mobile", value);

    if (value.length === 10) {
      setError("");
    }
  };

  return (
    <div className="step-content">
      <div className={`input-row ${error ? "error-border" : ""}`}>
        <div className="icon-col">
          <FaPhoneAlt />
        </div>

        <input
          type="tel"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          maxLength={10}
        />
      </div>

      {error && <p className="error-text">{error}</p>}

      <div className="btn-row">
        <button
          type="button"
          className="btn btn-primary ghost"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step1;
