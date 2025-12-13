import React, { useEffect } from 'react';
import './StudentLover.css';
import { Carousel as BSCarousel } from 'bootstrap'; // Bootstrap JS Carousel class

const testimonials = [
  {
    name: 'Manav',
    class: 'Class 9',
    location: 'Bangalore',
    feedback: "Visdom Waves helped Manav pick up his learning pace in Science.",
    image: 'https://t3.ftcdn.net/jpg/06/62/89/52/240_F_662895219_kD86egJjNFJen200GN3YYyvg64SL5o5y.jpg',
  },
  {
    name: 'Harshita',
    class: 'Class 4',
    location: 'Mumbai',
    feedback: "Visdom Waves videos have helped me understand and be more confident.",
    image: 'https://t3.ftcdn.net/jpg/01/87/83/26/240_F_187832626_Z0K54NuFDzPM10NZw6gWdRYMC763xJQM.jpg',
  },
  {
    name: 'Atri',
    class: 'Class 9',
    location: 'Kolkata',
    feedback: "I can balance my studies and sports well with BYJU'S - The Learning App.",
    image: 'https://t3.ftcdn.net/jpg/06/26/63/72/240_F_626637222_vTb3dAhrpb47oskhaCQjXFGPAygwDaD8.jpg',
  }
];

function StudentLover() {
  useEffect(() => {
    const carouselElement = document.getElementById('studentCarousel');
    if (carouselElement) {
      new BSCarousel(carouselElement, {
        interval: 5000,
        ride: 'carousel',
        pause: 'hover',
        wrap: true,
      });
    }
  }, []);

  return (
    <div className="studentlover-section">
      <div className="container py-5">
        <h2 className="text-center mb-5 text-white">Our Students Love Us</h2>

        {/* Stats Section */}
        <div className="row text-center mb-5 stats-row">
          <div className="col-md-3">
            <h3><span className="stats-number text-white">150+ Million</span></h3>
            <p className="text-white">downloads</p>
          </div>
          <div className="col-md-3">
            <h3><span className="stats-number text-white">4.7+ Star</span></h3>
            <p className="text-white">app rating</p>
          </div>
          <div className="col-md-3">
            <h3><span className="stats-number text-white">1701+ Cities</span></h3>
            <p className="text-white">worldwide</p>
          </div>
          <div className="col-md-3">
            <h3><span className="stats-number text-white">71 mins</span></h3>
            <p className="text-white">avg. time spent daily</p>
          </div>
        </div>

        {/* Carousel */}
        <div id="studentCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="row justify-content-center">
                  <div className="col-md-4 text-center">
                    <div className="student-card">
                      <div className="student-img mb-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="img-fluid"
                        />
                      </div>
                      <p><strong>{testimonial.name}</strong></p>
                      <p>{testimonial.class} | {testimonial.location}</p>
                      <p>{testimonial.feedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#studentCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#studentCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentLover;
