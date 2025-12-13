import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import './LeaderVoice.css';

const leaders = [
  {
    text: `This voice-interactive AI platform is a game-changer. It revolutionizes education, engages students like never before, and prepares them for success in the future.`,
    name: "Nambi Narayanan – Rocketry",
    videoUrl: "https://www.youtube.com/embed/z7C4qjp25Zc?enablejsapi=1"
  },
  {
    text: `By seamlessly integrating technology into the educational landscape, this platform becomes a game-changer with far-reaching implications.`,
    name: "Rakesh Sharma",
    videoUrl: "https://www.youtube.com/embed/xb1pkqrhd2E?enablejsapi=1"
  },
  {
    text: `By seamlessly integrating technology into the educational landscape, this platform becomes a game-changer with far-reaching implications.`,
    name: "Tessi Thomas",
    videoUrl: "https://www.youtube.com/embed/PMqLC4AbHeE?enablejsapi=1"
  },
  {
    text: `By seamlessly integrating technology into the educational landscape, this platform becomes a game-changer with far-reaching implications.`,
    name: "Sunita Williams",
    videoUrl: "https://www.youtube.com/embed/uYmUTjlkV2I?enablejsapi=1"
  },
  {
    text: `By seamlessly integrating technology into the educational landscape, this platform becomes a game-changer with far-reaching implications.`,
    name: "Venkatapathi Raju",
    videoUrl: "https://www.youtube.com/embed/SKvJYy8aSmg?enablejsapi=1"
  }
];

function LeaderVoice() {
  const iframeRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typing effect
  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const text = leaders[currentIndex].text;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 20); // typing speed
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Stop videos on slide change
  const handleSlide = () => {
    iframeRefs.current.forEach((iframe) => {
      if (iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"stopVideo","args":""}',
          '*'
        );
      }
    });
  };

  return (
    <section className="leaders-voice-section">
      <h2 className="leaders-title">Leader's Voice</h2>

      <Carousel
        indicators={false}
        controls={true}
        interval={6000}
        fade
        onSlide={handleSlide}
        onSelect={(index) => setCurrentIndex(index)}
      >
        {leaders.map((leader, index) => (
          <Carousel.Item key={index}>
            <div className="leader-card">
              <div className="animated-background"></div>
              <div className="leader-content">

                {/* LEFT: Typing Text */}
                <div className="leader-text fade-slide">
                  <p>{currentIndex === index ? displayText : ""}</p>
                  <h5>{leader.name}</h5>
                </div>

                {/* RIGHT: Video */}
                <div className="leader-video fade-slide">
                  <div className="video-frame">
                    <iframe
                      ref={(el) => iframeRefs.current[index] = el}
                      src={`${leader.videoUrl}&enablejsapi=1`}
                      title={leader.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default LeaderVoice;
