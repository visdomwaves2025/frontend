// src/Login.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import bgVideo from "/public/Login Background/Video.mp4"; 

function Login() {
  // UI states
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("visdom:dark") === "true";
    } catch {
      return false;
    }
  });

  const [activeTab, setActiveTab] = useState("login"); // login | pin | face | voice
  const [mobile, setMobile] = useState("");
  const [isTypingPin, setIsTypingPin] = useState(false);
  const [pinDigits, setPinDigits] = useState([]); // stores up to 4 digits (as per PIN_LENGTH)
  const [cameraError, setCameraError] = useState(null);
  const [micError, setMicError] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  // Refs for media
  const videoRef = useRef(null);
  const audioRef = useRef(null); // Used to play back mic stream (for visualizer)
  const micStreamRef = useRef(null);
  const camStreamRef = useRef(null);

  // speech debounce
  const speakTimeoutRef = useRef(null);

  // Derived
  const pandaCover = isTypingPin || pinDigits.length > 0;

  useEffect(() => {
    localStorage.setItem("visdom:dark", String(darkMode));
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    return () => {
      stopCamera();
      stopMic();
      if (speakTimeoutRef.current) clearTimeout(speakTimeoutRef.current);
      window.speechSynthesis && window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --------------------
  // Speech helper (panda voice)
  // --------------------
  function speak(text, opts = {}) {
    try {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = opts.lang || "en-US";
      utter.rate = opts.rate ?? 1;
      utter.pitch = opts.pitch ?? 1.05;
      utter.volume = opts.volume ?? 1;
      window.speechSynthesis.speak(utter);
    } catch (e) {
      // browsers may block auto-speech — ignore gracefully
      // console.warn("speech error", e);
    }
  }

  function debounceSpeak(text, delay = 500) {
    if (speakTimeoutRef.current) clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(() => speak(text), delay);
  }

  // ---------------------------
  // Camera (Face ID)
  // ---------------------------
  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      camStreamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      // speak and panda action
      speak("Face ID ready. Look into the camera.");
    } catch (err) {
      setCameraError("Camera access denied or not available");
    }
  };

  const stopCamera = () => {
    try {
      if (camStreamRef.current) {
        camStreamRef.current.getTracks().forEach((t) => t.stop());
        camStreamRef.current = null;
      }
      if (videoRef.current) videoRef.current.srcObject = null;
    } catch {}
  };

  // ---------------------------
  // Microphone (Voice ID)
  // ---------------------------
  const startMic = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;
      if (audioRef.current) {
        // Attach stream to audio element (silent) to allow for the visualizer to pick up data (though visualizer logic is missing in JS, the stream is set up)
        audioRef.current.srcObject = stream; 
        audioRef.current.play().catch(() => {});
      }
      setIsRecording(true);
      speak("Recording started. Please say your passphrase.");
    } catch (err) {
      setMicError("Mic access denied or not available");
    }
  };

  const stopMic = () => {
    try {
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((t) => t.stop());
        micStreamRef.current = null;
      }
      if (audioRef.current) audioRef.current.srcObject = null;
    } catch {}
    setIsRecording(false);
    speak("Recording stopped.");
  };

  // ---------------------------
  // Pin pad logic ( digits)
  // ---------------------------
  const PIN_LENGTH = 4; // <-- This is the defined length

  const onNumberPress = (digit) => {
    if (pinDigits.length >= PIN_LENGTH) return;
    setPinDigits((prev) => {
      const next = [...prev, String(digit)];
      if (next.length > 0) setIsTypingPin(true);
      debounceSpeak("I am not watching your password. Keep typing.", 300);
      if (next.length === PIN_LENGTH) {
        setTimeout(() => {
          onSubmitPin(next.join(""));
        }, 600);
      }
      return next;
    });
  };

  const onDelete = () => {
    setPinDigits((prev) => {
      const next = prev.slice(0, -1);
      if (next.length === 0) setIsTypingPin(false);
      speak("Deleted one digit.");
      return next;
    });
  };

  const onClearPin = () => {
    setPinDigits([]);
    setIsTypingPin(false);
    speak("Cleared PIN.");
  };

  const onSubmitPin = (pinValue) => {
    speak("Submitting your PIN. Please wait.");
    // placeholder submit: replace with actual login logic
    setTimeout(() => {
      alert("PIN entered: " + pinValue);
      onClearPin();
      setActiveTab("login");
    }, 400);
  };

  // Handle clicking tab: ensure media/streams are started/stopped appropriately
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "face") {
      // flip card visually (CSS handles .flip class)
      startCamera();
      stopMic();
      setIsTypingPin(false);
      setPinDigits([]);
      speak("Switched to Face ID. Please position your face.");
    } else if (tab === "voice") {
      startMic();
      stopCamera();
      setIsTypingPin(false);
      setPinDigits([]);
      speak("Switched to Voice ID. Press start to record your voice.");
    } else if (tab === "pin") {
      stopCamera();
      stopMic();
      setTimeout(() => setIsTypingPin(pinDigits.length > 0), 120);
      speak("PIN login activated. Use the keypad.");
    } else {
      stopCamera();
      stopMic();
      setIsTypingPin(false);
      setPinDigits([]);
      speak("Standard login selected.");
    }
  };

  // render helpers
  const renderPinCircles = () => {
    const circles = [];
    for (let i = 0; i < PIN_LENGTH; i++) {
      const filled = i < pinDigits.length;
      circles.push(
        // FIXED: Used backticks for template literal
        <div key={i} className={`pin-circle ${filled ? "filled" : ""}`}>
          {filled ? "●" : ""}
        </div>
      );
    }
    return circles;
  };

  const numPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["", 0, "<"],
  ];

  // speak when user types mobile (debounced)
  const mobileSpeakTimeout = useRef(null);
  function handleMobileChange(e) {
    setMobile(e.target.value);
    if (mobileSpeakTimeout.current) clearTimeout(mobileSpeakTimeout.current);
    mobileSpeakTimeout.current = setTimeout(() => {
      speak("You are entering mobile number.");
    }, 800);
  }

  // Determine flip state for CSS (flip when face tab active)
  const isFlipped = activeTab === "face";

  return (
    // FIXED: Used backticks for template literal
    <div className={`login-container ${darkMode ? "dark" : ""}`}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="background-video"
        playsInline
        aria-hidden="true"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Logo and top-left mode toggle */}
      <div className="top-bar">
        <div className="logo-wrap" role="img" aria-label="Visdom Waves logo">
          {/* <div className="logo-circle">VW</div> */}
          {/* <div className="logo-text">Visdom Waves</div> */}
        </div>

        {/* <div className="mode-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode((s) => !s)}
              aria-label="toggle dark mode"
            />
            <span className="slider" />
          </label>
          <span className="mode-label">{darkMode ? "🌙Dark" : "☀Light"}</span>
        </div> */}
      </div>

      {/* Main card (3D flip container) */}
      {/* FIXED: Used backticks for template literal */}
      <div className={`login-box ${isFlipped ? "flip" : ""}`}>
        {/* Left: Panda (unchanged but more responsive) */}
        <div className="left-section">
          {/* FIXED: Used backticks for template literal */}
          <div className={`panda ${pandaCover ? "cover" : ""} ${isRecording ? "talk" : ""}`}>
            <div className="ear ear-left" />
            <div className="ear ear-right" />

            <div className="head">
              <div className="face">
                <div className="eye eye-left">
                  <div className="pupil" />
                </div>
                <div className="eye eye-right">
                  <div className="pupil" />
                </div>

                <div className="nose" />
                <div className="mouth" />

                {/* Hands that rise to cover eyes */}
                <div className="hand hand-left" />
                <div className="hand hand-right" />

                {/* Hands holding box */}
                <div className="hold-left" />
                <div className="hold-right" />
              </div>
            </div>

            {/* Speech bubble (panda "speaks" when typing PIN or covering) */}
            {/* FIXED: Used backticks for template literal */}
            <div className={`panda-bubble ${pandaCover ? "visible" : ""}`}>
              <span>{pandaCover ? "I am not watching your password 🙈" : "Hello!"}</span>
            </div>
          </div>
        </div>

        {/* Right: flip inner with front & back */}
        <div className="right-section">
          <div className="card-inner">
            {/* FRONT (regular login / pin / voice UI) */}
            <div className="card-face front">
              <h2 className="rainbow">Welcome to <span className="rainbow">Visdom Waves</span></h2>

              <div className="card-form">
                <label className="field-label">User name</label>
                <input
                  type="text"
                  className="login-input"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={handleMobileChange}
                />

                <div className="login-with-title">Login with</div>

                <div className="auth-buttons">
                  {/* FIXED: Used backticks for template literal */}
                  <button
                    className={`auth-btn ${activeTab === "pin" ? "active" : ""}`}
                    onClick={() => handleTabClick("pin")}
                    aria-pressed={activeTab === "pin"}
                  >
                    🔢 PIN 
                  </button>

                  {/* FIXED: Used backticks for template literal */}
                  <button
                    className={`auth-btn ${activeTab === "face" ? "active" : ""}`}
                    onClick={() => handleTabClick("face")}
                    aria-pressed={activeTab === "face"}
                  >
                    🤳 Face 
                  </button>

                  {/* FIXED: Used backticks for template literal */}
                  <button
                    className={`auth-btn ${activeTab === "voice" ? "active" : ""}`}
                    onClick={() => handleTabClick("voice")}
                    aria-pressed={activeTab === "voice"}
                  >
                    🗣 Voice 
                  </button>
                </div>

                {/* PIN UI */}
                {activeTab === "pin" && (
                  <div className="pin-section">
                    <div className="pin-circles">{renderPinCircles()}</div>

                    <div className="pin-pad glass">
                      {numPad.map((row, rIdx) => (
                        <div key={rIdx} className="num-row">
                          {row.map((col, cIdx) => {
                            if (col === "") {
                              return <div key={cIdx} className="num-cell empty" />;
                            }
                            if (col === "<") {
                              return (
                                <button
                                  key={cIdx}
                                  className="num-cell num-btn control"
                                  onClick={onDelete}
                                  aria-label="delete"
                                >
                                  ⌫
                                </button>
                              );
                            }
                            return (
                              <button
                                key={cIdx}
                                className="num-cell num-btn"
                                onClick={() => onNumberPress(col)}
                                aria-label={`digit-${col}`} // FIXED: Used backticks for template literal
                              >
                                {col}
                              </button>
                            );
                          })}
                        </div>
                      ))}

                      <div className="pin-actions">
                        <button className="ghost" onClick={onClearPin}>
                          Clear
                        </button>
                        <button
                          className="primary"
                          onClick={() => {
                            // FIXED: Changed length check from 6 to PIN_LENGTH (4)
                            if (pinDigits.length === PIN_LENGTH) {
                              onSubmitPin(pinDigits.join(""));
                            } else {
                              speak(`Enter ${PIN_LENGTH} digits to submit.`);
                            }
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Voice section inline on front for quick actions */}
                {activeTab === "voice" && (
                  <div className="voice-section">
                    {micError && <div className="error">{micError}</div>}
                    <div className="voice-stage">
                      <audio ref={audioRef} muted hidden /> {/* Removed controls */}
                      {/* FIXED: Used backticks for template literal */}
                      <div className={`voice-wave ${isRecording ? "recording" : ""}`}>
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="voice-bar" />
                        ))}
                      </div>
                    </div>

                    <div className="voice-actions">
                      {!isRecording ? (
                        <button
                          className="small-btn"
                          onClick={() => {
                            startMic();
                          }}
                        >
                          Start Recording
                        </button>
                      ) : (
                        <button
                          className="small-btn danger"
                          onClick={() => {
                            stopMic();
                          }}
                        >
                          Stop
                        </button>
                      )}
                      <button
                        className="small-btn secondary"
                        onClick={() => {
                          stopMic();
                          setActiveTab("login");
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

                {/* If none selected show simple login button */}
                {activeTab === "login" && (
                  <div className="login-actions">
                    <button
                      className="login-btn glow-btn"
                      onClick={() => {
                        speak("Normal login selected.");
                        alert("Normal login (implement as needed)");
                      }}
                    >
                      Login
                    </button>

                    <div className="register-section">
                      <span>Don't have an account?</span>{" "}
                      <a href="#" className="register-link">
                        Register
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* BACK (Face ID / visual) - shown after flip */}
            <div className="card-face back">
              <h3 className="face-title">Face ID Verification</h3>
              {cameraError && <div className="error">{cameraError}</div>}
              <div className="face-stage back-stage">
                <video ref={videoRef} className="face-video back-video" autoPlay playsInline />
                <div className="scan-ring back-ring" />
              </div>

              <div className="face-actions">
                <button
                  className="small-btn"
                  onClick={() => {
                    startCamera();
                  }}
                >
                  Start Camera
                </button>
                <button
                  className="small-btn secondary"
                  onClick={() => {
                    stopCamera();
                    setActiveTab("login");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;