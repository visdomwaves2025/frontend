import React, { useState } from 'react';
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaCity,
  FaBuilding,
  FaLanguage
} from "react-icons/fa";
import Swal from "sweetalert2";
import "animate.css";

function Step3({ form, update, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});
  const [loadingLocation, setLoadingLocation] = useState(false);

  // ===========================
  // 📍 GET CURRENT LOCATION
  // ===========================
  const fetchCurrentAddress = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
        const data = await res.json();
        const addr = data.address;

        update("address", addr.road || addr.suburb || "");
        update("city", addr.city || addr.town || addr.village || "");
        update("district", addr.county || addr.state_district || "");
        update("state", addr.state || "");
        update("country", addr.country || "");
        update("pincode", addr.postcode || "");

        setErrors({});
      } catch (error) {
        console.error("Error fetching address:", error);
        alert("Unable to fetch address!");
      }

      setLoadingLocation(false);
    });
  };

  // ===========================
  // HANDLE FIELD CHANGE
  // ===========================
  const handleChange = (field, value) => {
    if (field === "pAltMobile" || field === "pincode") {
      value = value.replace(/\D/g, "");
    }
    update(field, value);
    setErrors({ ...errors, [field]: "" });
  };

  // ===========================
  // HANDLE FORM SUBMIT
  // ===========================
  const handleSubmit = () => {
    let newErrors = {};
    let valid = true;

    // VALIDATIONS
    if (!form.pName.trim()) { newErrors.pName = "Please enter your name"; valid = false; }
    if (!form.pSurname.trim()) { newErrors.pSurname = "Please enter your surname"; valid = false; }
    if (!form.pEmail.trim()) { newErrors.pEmail = "Please enter your email"; valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.pEmail)) { newErrors.pEmail = "Invalid email address"; valid = false; }
    if (!form.pMotherTongue.trim()) { newErrors.pMotherTongue = "Please select your Mother Tongue"; valid = false; }
    if (!form.address.trim()) { newErrors.address = "Please enter your address"; valid = false; }
    if (!/^\d{6}$/.test(form.pincode)) { newErrors.pincode = "Pincode must be 6 digits"; valid = false; }

    setErrors(newErrors);
    if (!valid) return;

    // CONFIRMATION POPUP
    Swal.fire({
      title: "Confirm Submission",
      text: "Do you want to submit parent details?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Submit",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#076afe",
      cancelButtonColor: "#aaa",
      showClass: { popup: "animate__animated animate__zoomIn" },
      hideClass: { popup: "animate__animated animate__zoomOut" }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success 👍",
          text: "Parent Details Submitted Successfully!",
          showConfirmButton: false,
          timer: 2600,
          showClass: { popup: "animate__animated animate__backInDown" },
          hideClass: { popup: "animate__animated animate__backOutUp" }
        });

        setTimeout(() => { nextStep(); }, 2400);
      }
    });
  };

  return (
    <div className="step-content">

      {/* Name */}
      <div className={`input-row ${errors.pName ? "error-border" : ""}`}>
        <div className="icon-col"><FaUser /></div>
        <input
          type="text"
          placeholder="Name"
          value={form.pName}
          onChange={(e) => handleChange("pName", e.target.value)}
        />
      </div>
      {errors.pName && <p className="error-text">{errors.pName}</p>}

      {/* Surname */}
      <div className={`input-row ${errors.pSurname ? "error-border" : ""}`}>
        <div className="icon-col"><FaUser /></div>
        <input
          type="text"
          placeholder="Surname"
          value={form.pSurname}
          onChange={(e) => handleChange("pSurname", e.target.value)}
        />
      </div>
      {errors.pSurname && <p className="error-text">{errors.pSurname}</p>}

      {/* Alternate Mobile */}
      <div className={`input-row ${errors.pAltMobile ? "error-border" : ""}`}>
        <div className="icon-col"><FaPhoneAlt /></div>
        <input
          type="text"
          maxLength={10}
          placeholder="Alternate Mobile (Optional)"
          value={form.pAltMobile}
          onChange={(e) => handleChange("pAltMobile", e.target.value)}
        />
      </div>
      {errors.pAltMobile && <p className="error-text">{errors.pAltMobile}</p>}

      {/* Email */}
      <div className={`input-row ${errors.pEmail ? "error-border" : ""}`}>
        <div className="icon-col"><FaEnvelope /></div>
        <input
          type="email"
          placeholder="Email"
          value={form.pEmail}
          onChange={(e) => handleChange("pEmail", e.target.value)}
        />
      </div>
      {errors.pEmail && <p className="error-text">{errors.pEmail}</p>}

      {/* Mother Tongue */}
      <div className={`input-row ${errors.pMotherTongue ? "error-border" : ""}`}>
        <div className="icon-col"><FaLanguage /></div>
        <select
          value={form.pMotherTongue}
          onChange={(e) => handleChange("pMotherTongue", e.target.value)}
        >
          <option value="">Select Mother Tongue</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Telugu">Telugu</option>
          <option value="Tamil">Tamil</option>
          <option value="Punjabi">Punjabi</option>
        </select>
      </div>
      {errors.pMotherTongue && <p className="error-text">{errors.pMotherTongue}</p>}

      {/* Current Location Button */}
      <button
        type="button"
        onClick={fetchCurrentAddress}
        className="btn btn-light mb-3 w-100"
        disabled={loadingLocation}
      >
        {loadingLocation ? "Fetching Location..." : "📍Use Current Location"}
      </button>

      {/* Address */}
      <div className={`input-row ${errors.address ? "error-border" : ""}`}>
        <div className="icon-col"><FaMapMarkerAlt /></div>
        <input
          type="text"
          placeholder="Flat / Home no./ Building name."
          value={form.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
      </div>
      {errors.address && <p className="error-text">{errors.address}</p>}

      {/* City */}
      <div className={`input-row ${errors.city ? "error-border" : ""}`}>
        <div className="icon-col"><FaCity /></div>
        <input
          type="text"
          placeholder="City"
          value={form.city}
          onChange={(e) => handleChange("city", e.target.value)}
        />
      </div>
      {errors.city && <p className="error-text">{errors.city}</p>}

      {/* District */}
      <div className={`input-row ${errors.district ? "error-border" : ""}`}>
        <div className="icon-col"><FaMapMarkerAlt /></div>
        <input
          type="text"
          placeholder="District"
          value={form.district}
          onChange={(e) => handleChange("district", e.target.value)}
        />
      </div>
      {errors.district && <p className="error-text">{errors.district}</p>}

      {/* State */}
      <div className={`input-row ${errors.state ? "error-border" : ""}`}>
        <div className="icon-col"><FaUser /></div>
        <input
          type="text"
          placeholder="State"
          value={form.state}
          onChange={(e) => handleChange("state", e.target.value)}
        />
      </div>
      {errors.state && <p className="error-text">{errors.state}</p>}

      {/* Pincode */}
      <div className={`input-row ${errors.pincode ? "error-border" : ""}`}>
        <div className="icon-col"><FaBuilding /></div>
        <input
          type="text"
          maxLength={6}
          placeholder="Pincode"
          value={form.pincode}
          onChange={(e) => handleChange("pincode", e.target.value)}
        />
      </div>
      {errors.pincode && <p className="error-text">{errors.pincode}</p>}

      {/* Country */}
      <div className={`input-row ${errors.country ? "error-border" : ""}`}>
        <div className="icon-col"><FaGlobe /></div>
        <input
          type="text"
          placeholder="Country"
          value={form.country}
          onChange={(e) => handleChange("country", e.target.value)}
        />
      </div>
      {errors.country && <p className="error-text">{errors.country}</p>}

      {/* Buttons */}
      <div className="btn-row spaced">
        <button type="button" className="btn btn-secondary" onClick={prevStep}>
          Previous
        </button>
        <button type="button" className="btn btn-primary ghost" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step3;
