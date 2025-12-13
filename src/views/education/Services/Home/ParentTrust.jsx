import React from 'react';
import './ParentTrust.css';

const parentTestimonials = [
  {
    name: 'Rohit',
    child: 'Class 5',
    location: 'Delhi',
    feedback: "Visdom Waves has made learning fun for my child and improved their confidence.",
    image: '/Parent Image/class5.jpg',
  },
  {
    name: 'Sneha',
    child: 'Class 8',
    location: 'Chennai',
    feedback: "I trust Visdom Waves to provide quality education and help my child excel.",
    image: '/Parent Image/class8.jpg',
  },
  {
    name: 'Amit',
    child: 'Class 6',
    location: 'Bihar',
    feedback: "The personalized approach and engaging content make learning effective.",
    image: '/Parent Image/class6.jpg',
  },
  {
    name: 'Priya',
    child: 'Class 7',
    location: 'Bangalore',
    feedback: "My child loves the lessons and asks for more every day!",
    image: '/Parent Image/class7.jpg',
  },
  {
    name: 'Ankit',
    child: 'Class 10',
    location: 'Mumbai',
    feedback: "Excellent support for parents and kids, highly recommended!",
    image: '/Parent Image/class10.jpg',
  }
];

function ParentTrust() {
  return (
    <div className="parenttrust-section">
      <div className="container py-5">
        <h2 className="text-center mb-5 text-white">Parents Trust Us</h2>

        {/* Stats Section */}
        <div className="row text-center mb-5 stats-row">
          <div className="col-md-3">
            <h3><span className="stats-number text-white">1M+</span></h3>
            <p className="text-white">happy parents</p>
          </div>
          <div className="col-md-3">
            <h3><span className="stats-number text-white">4.8+ Star</span></h3>
            <p className="text-white">app rating</p>
          </div>
          <div className="col-md-3">
            <h3><span className="stats-number text-white">1200+ Cities</span></h3>
            <p className="text-white">covered</p>
          </div>
          <div className="col-md-3">
            <h3><span className="stats-number text-white">75 mins</span></h3>
            <p className="text-white">avg. learning time daily</p>
          </div>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="auto-carousel-wrapper">
          <div className="auto-carousel">
            {parentTestimonials.concat(parentTestimonials).map((testimonial, idx) => (
              <div key={idx} className="parent-card text-center">
                <div className="parent-img mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="img-fluid"
                  />
                </div>
                <p><strong>{testimonial.name}</strong></p>
                <p>Child: {testimonial.child} | {testimonial.location}</p>
                <p>{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentTrust;
