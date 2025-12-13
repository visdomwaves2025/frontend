import React from 'react';
import './Advantage.css'; // Make sure to include the CSS file

function Advantage() {
  return (
    <>
        <div className="container text-center my-5">
        <h2>Get the Visdom Wave advantage</h2>
        <div className="row">
            {/* Conceptual Clarity */}
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <div className="feature-box">
                <div className="image-box">
                <img src="https://t3.ftcdn.net/jpg/15/39/72/16/240_F_1539721683_L2Rck9loZDWlDmjF1lZLQE99DGfH6xFL.jpg" alt="Conceptual Clarity" />
                </div>
                <p className="feature-text">Conceptual clarity through visualisation</p>
            </div>
            </div>

            {/* Personalized Learning Programs */}
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <div className="feature-box">
                <div className="image-box">
                <img src="https://via.placeholder.com/150" alt="Personalized Learning Programs" />
                </div>
                <p className="feature-text">Personalised learning programs</p>
            </div>
            </div>

            {/* Unmatched Individual Attention */}
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <div className="feature-box">
                <div className="image-box">
                <img src="https://via.placeholder.com/150" alt="Unmatched Individual Attention" />
                </div>
                <p className="feature-text">Unmatched individual attention</p>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Advantage;
