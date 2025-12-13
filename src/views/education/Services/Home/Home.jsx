import React, { useState, useEffect } from 'react';
import './Home.css';
import { ArrowRight } from 'react-bootstrap-icons';
import StudentLover from './StudentLover';
import PlatformTrusted from './PlatformTrusted';
import ParentTrust from './ParentTrust';
import LeaderVoice from './LeaderVoice';
import BoardSection from './BoardSection';
import PartnersSection from './PartnerSection';
import Footer from './Footer';
import Navbar from './Navbar';

// Placeholder images
const image1 = '/Multilingual Future/StudentWithTeacher.jpg';
const image2 = '/Multilingual Future/StudentReading.jpg';
const image3 = '/Multilingual Future/StudentLearning.jpg';
const image4 = '/Multilingual Future/SchoolStudents.jpg';

function Home() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoEl = document.getElementById("motivVideo");
    if (videoEl) {
      videoEl.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
    const videoEl = document.getElementById("motivVideo");
    if (videoEl) videoEl.muted = !videoEl.muted;
  };

  return (
    <>
      <Navbar />
      {/* ---------- Landing Video Section ---------- */}
      <section className='Landing Video'>
        <div className="home-container">
          <video
            className="bg-video"
            src="/Landing Video/landingPage.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="overlay">
            <h1 className="title">
              <span className="text-success">Education • Empower • Elevate</span> AI-Enhanced Learning for the 21st Century
            </h1>
            <p className="subtitle">
              Journey into a New Learning Era: Embrace Our Voice-Interactive AI Platform for a Brighter Educational Future.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Motivation Video Section ---------- */}
      <section className="motivation-video-section">
        <div className="video-wrapper">
          <video
            className="about-video"
            src="/Landing Video/VisdomWaves1.mp4"
            loop
            playsInline
            autoPlay
            muted
            id="motivVideo"
          />
          <button className="unmute-btn" onClick={toggleMute}>
            {isMuted ? "🔊 Unmute" : "🔇 Mute"}
          </button>
        </div>
      </section>

      {/* Leader Voice Section */}
      <section className='leader-voice'>
        <LeaderVoice />
      </section>

      {/* Multilingual Future Section */}
      <section className="hero-section py-5">
        <video
          className="hero-bg-video"
          src="/Multilingual Future/MultiLang.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-bg-overlay"></div>
        <div className="container position-relative">
          <div className="row">
            <div className="col-12 text-center text-lg-start position-relative">
              <div className="shape-blob shape-blob-1 mt-3"></div>
              <h1 className="hero-title display-2 fw-bold mb-4">
                Empowering <br className="d-none d-md-block" />
                <span className="multilingual-text">Multilingual Future</span>
              </h1>
              <p className="hero-description col-lg-7 mx-auto mx-lg-0 mb-5">
                Master three languages, unlock global opportunities, and prepare for a successful, interconnected future ahead.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start mb-5">
                <button className="btn btn-dark btn-lg hero-btn d-flex align-items-center me-3">
                  Enroll Now
                </button>
                <div className="arrow-icon-container">
                  <ArrowRight className="arrow-icon" size={24} />
                </div>
              </div>
              <div className="row g-4 mt-5 image-gallery">
                <div className="col-lg-3 col-sm-6">
                  <img src={image1} alt="Students with teacher" className="img-fluid gallery-img" />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <img src={image2} alt="Students reading" className="img-fluid gallery-img" />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <img src={image3} alt="Students learning" className="img-fluid gallery-img" />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <img src={image4} alt="Happy students" className="img-fluid gallery-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='board-section'>
        <BoardSection />
      </section>
      <section className='studentLove'>
        <StudentLover />
      </section>
      <section className='parentTrust'>
        <ParentTrust />
      </section>
      <section className='trusted'>
        <PlatformTrusted />
      </section>
      <section>
        <PartnersSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
