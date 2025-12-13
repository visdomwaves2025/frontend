import React, { useState } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaTransgender,
  FaBookOpen,
  FaSchool,
  FaLanguage,
  FaLock
} from "react-icons/fa";
import Swal from "sweetalert2";

function Step4({ form, update, prevStep, submitForm }) {
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    let newErrors = {};

    if (!form.childName.trim()) newErrors.childName = "Please enter child name";
    if (!form.childSurname.trim()) newErrors.childSurname = "Please enter child surname";
    if (!form.childDOB.trim()) newErrors.childDOB = "Please select date of birth";
    if (!form.childGender.trim()) newErrors.childGender = "Please select gender";
    if (!form.childClass.trim()) newErrors.childClass = "Please select class";
    if (!form.childSyllabus) newErrors.childSyllabus = "Please select syllabus";
    if (!form.medium) newErrors.medium = "Please select medium";
    if (!form.firstLanguage) newErrors.firstLanguage = "Please select first language";
    if (!form.pin) newErrors.pin = "Enter PIN";
    if (!form.rePin) newErrors.rePin = "Re-enter PIN";
    if (form.pin && form.rePin && form.pin !== form.rePin)
      newErrors.rePin = "PIN does not match";
    if (!form.agree) newErrors.agree = "You must accept Terms & Conditions";

    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;

    Swal.fire({
      title: "Confirm Submission",
      text: "Do you want to submit child details?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Submit",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#aaa",
    }).then((confirmResult) => {
      if (!confirmResult.isConfirmed) return;

      Swal.fire({
        icon: "success",
        title: "Success 🎉",
        text: "Child Details Submitted Successfully!",
        confirmButtonText: "OK",
        confirmButtonColor: "#28a745",
        allowOutsideClick: false,
      }).then((successResult) => {
        if (successResult.isConfirmed) submitForm();
      });
    });
  };

  return (
    <div className="step-content">

      {/* Child Name */}
      <div className={`input-row ${errors.childName ? "error-border" : ""}`}>
        <div className="icon-col"><FaUser /></div>
        <input
          type="text"
          placeholder="Child Name"
          value={form.childName}
          onChange={(e) => {
            update("childName", e.target.value);
            setErrors({ ...errors, childName: "" });
          }}
        />
      </div>
      {errors.childName && <p className="error-text">{errors.childName}</p>}

      {/* Child Surname */}
      <div className={`input-row ${errors.childSurname ? "error-border" : ""}`}>
        <div className="icon-col"><FaUser /></div>
        <input
          type="text"
          placeholder="Child Surname"
          value={form.childSurname}
          onChange={(e) => {
            update("childSurname", e.target.value);
            setErrors({ ...errors, childSurname: "" });
          }}
        />
      </div>
      {errors.childSurname && <p className="error-text">{errors.childSurname}</p>}

      {/* DOB */}
      <div className={`input-row ${errors.childDOB ? "error-border" : ""}`}>
        <div className="icon-col"><FaCalendarAlt /></div>
        <input
          type="date"
          value={form.childDOB}
          onChange={(e) => {
            update("childDOB", e.target.value);
            setErrors({ ...errors, childDOB: "" });
          }}
        />
      </div>
      {errors.childDOB && <p className="error-text">{errors.childDOB}</p>}

      {/* Gender */}
      <div className={`input-row ${errors.childGender ? "error-border" : ""}`}>
        <div className="icon-col"><FaTransgender /></div>
        <select
          value={form.childGender}
          onChange={(e) => {
            update("childGender", e.target.value);
            setErrors({ ...errors, childGender: "" });
          }}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      {errors.childGender && <p className="error-text">{errors.childGender}</p>}

      {/* Class */}
      <div className={`input-row ${errors.childClass ? "error-border" : ""}`}>
        <div className="icon-col"><FaBookOpen /></div>
        <select
          value={form.childClass}
          onChange={(e) => {
            update("childClass", e.target.value);
            setErrors({ ...errors, childClass: "" });
          }}
        >
          <option value="">Select Class</option>
          <option>Nursery</option>
          <option>Class I</option>
          <option>Class II</option>
          <option>Class III</option>
          <option>Class IV</option>
          <option>Class V</option>
          <option>Class VI</option>
          <option>Class VII</option>
          <option>Class VIII</option>
          <option>Class IX</option>
          <option>Class X</option>
          <option>Class XI</option>
          <option>Class XII</option>
          <option>Degree</option>
        </select>
      </div>
      {errors.childClass && <p className="error-text">{errors.childClass}</p>}

      {/* Syllabus */}
      <div className={`input-row ${errors.childSyllabus ? "error-border" : ""}`}>
        <div className="icon-col"><FaSchool /></div>
        <select
          value={form.childSyllabus}
          onChange={(e) => update("childSyllabus", e.target.value)}
        >
          <option value="">Select Syllabus</option>
          <option>CBSE</option>
          <option>ICSE</option>
          <option>State Board</option>
          <option>IB</option>
        </select>
      </div>
      {errors.childSyllabus && <p className="error-text">{errors.childSyllabus}</p>}

      {/* Medium */}
      <div className={`input-row ${errors.medium ? "error-border" : ""}`}>
        <div className="icon-col"><FaLanguage /></div>
        <select
          value={form.medium}
          onChange={(e) => update("medium", e.target.value)}
        >
          <option value="">Select Medium</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Regional</option>
        </select>
      </div>
      {errors.medium && <p className="error-text">{errors.medium}</p>}

      {/* First Language */}
      <div className={`input-row ${errors.firstLanguage ? "error-border" : ""}`}>
        <div className="icon-col"><FaLanguage /></div>
        <select
          value={form.firstLanguage}
          onChange={(e) => update("firstLanguage", e.target.value)}
        >
          <option value="">First Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
          <option>Tamil</option>
          <option>Kannada</option>
        </select>
      </div>
      {errors.firstLanguage && <p className="error-text">{errors.firstLanguage}</p>}

      {/* PIN */}
      <div className={`input-row ${errors.pin ? "error-border" : ""}`}>
        <div className="icon-col"><FaLock /></div>
        <input
          type="password"
          placeholder="Create PIN"
          value={form.pin}
          onChange={(e) => update("pin", e.target.value)}
        />
      </div>
      {errors.pin && <p className="error-text">{errors.pin}</p>}

      <div className={`input-row ${errors.rePin ? "error-border" : ""}`}>
        <div className="icon-col"><FaLock /></div>
        <input
          type="password"
          placeholder="Confirm PIN"
          value={form.rePin}
          onChange={(e) => update("rePin", e.target.value)}
        />
      </div>
      {errors.rePin && <p className="error-text">{errors.rePin}</p>}

      {/* Terms */}
      <div className="agree-row">
        <label>
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(e) => {
              update("agree", e.target.checked);
              setErrors({ ...errors, agree: "" });
            }}
          />{" "}
          I agree with the <span className="linkish">Terms & Conditions</span>
        </label>
      </div>
      {errors.agree && <p className="error-text">{errors.agree}</p>}

      {/* Buttons */}
      <div className="btn-row spaced">
        <button type="button" className="btn btn-secondary" onClick={prevStep}>
          Previous
        </button>
        <button type="button" className="btn btn-submit btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </div>

    </div>
  );
}

export default Step4;
