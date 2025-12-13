import React, { useEffect } from "react";
import './BoardSection.css';

function BoardSection() {
  const boards = [
    "CBSE", "ICSE", "Andhra Pradesh State Board", "Assam SEBA", "Assam AHSEC",
    "BSEB", "Chhattisgarh Board", "Goa Board", "Gujarat Board", "Haryana Board",
    "Himachal Board", "Jammu & Kashmir Board", "Jharkhand Board", "Karnataka Board",
    "Kerala Board", "Madhya Pradesh Board", "Maharashtra Board", "Manipur Board",
    "Meghalaya Board", "Mizoram Board", "Nagaland Board", "Odisha Board",
    "Punjab Board", "Rajasthan Board", "Sikkim Board", "Tamil Nadu Board",
    "Telangana Board", "Tripura Board", "Uttar Pradesh Board", "Uttarakhand Board",
    "West Bengal Board"
  ];

  const earlyClasses = ["LKG", "UKG"];
  const schoolClasses = Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`);
  const classes = [...earlyClasses, ...schoolClasses];

  useEffect(() => {
    const elements = document.querySelectorAll('.board-box, .class-box');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="classes">
      <h2 className="section-title text-white">Visdom Waves Supports All the Boards</h2>

      <div className="boards-scroll">
        {boards.map((board, idx) => (
          <div className="board-box" key={idx}>
            {board}
          </div>
        ))}
      </div>

      <h2 className="section-title mt-4 text-white">All Classes Available Here</h2>
      <p className="section-subtitle">
        Get access to notes, videos, worksheets, and quizzes for your class.
      </p>

      <div className="classes-grid">
        {classes.map((stdClass, index) => (
          <div className="class-box" key={index}>
            <h3>{stdClass}</h3>
            <button className="btn-secondary">Demo</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoardSection;
