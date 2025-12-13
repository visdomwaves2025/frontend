import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper text-white">
        <div className="container py-5">
          <div className="row">

            {/* Study Materials */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-title">Study Materials</h5>
              <ul className="list-unstyled footer-links">
                <li>NCERT TextBooks</li>
                <li>NCERT Solutions</li>
                <li>CBSE Materials</li>
                <li>State Boards</li>
              </ul>
            </div>

            {/* Community */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-title">Community</h5>
              <ul className="list-unstyled footer-links">
                <li>Learning Network</li>
                <li>FAQ's</li>
                <li>Support</li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-title">Company</h5>
              <ul className="list-unstyled footer-links">
                <li>About Us</li>
                <li>What Makes Us Different?</li>
                <li>Partners</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-title">Contact Us</h5>
              <p className="footer-text">
                Corporate Office: Building<br />
                3A & 3B, Raheja Mindspace,<br />
                HUDA Techno Enclave,<br />
                HITEC City, Telangana<br />
                500081
              </p>
              <p className="footer-text">info@vidyasphere.com</p>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="footer-bottom text-center pt-4">
            <div className="footer-globe mb-3">
              🌐
            </div>

            <p className="mb-2 footer-copy">
              ©2025 Vidya Sphere. All rights reserved | Terms & Conditions | Privacy Policy
            </p>

            <div className="footer-socials">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook mx-3"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;

// import React from "react";
// import './Footer.css'
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaLinkedinIn,
//   FaTwitter,
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer-container">
//       {/* Dark overlay */}
//       <div className="footer-overlay"></div>

//       <div className="footer-content">
//         {/* Left section */}
//         <div className="footer-left">
//           <div className="footer-logo">
//             <span className="logo-bold">Visdom</span>
//             <span className="logo-highlight">Waves</span>
//           </div>
//           <p className="footer-description">
//             Transform your business with AI-driven solutions and digital
//             transformation. Expert consulting for Education, Healthcare,
//             Technology, and more.
//           </p>
//           <div className="footer-contact">
//             <div className="contact-item">
//               <FaEnvelope className="contact-icon" />
//               <a href="mailto:info@visdomwavess.com">
//                 info@visdomwavess.com
//               </a>
//             </div>
//             <div className="contact-item">
//               <FaPhoneAlt className="contact-icon" />
//               <a href="tel:+917997755133">+91 7997755133</a>
//             </div>
//             <div className="contact-item address">
//               <FaMapMarkerAlt className="contact-icon" />
//               <address>
//                 Flat no : 102, A block Prabhat Signature Apartment
//                 <br />
//                 Beside kalamandir, KPHB, kukatpally 500085
//                 <br />
//                 Hyderabad, Telangana, India
//               </address>
//             </div>
//           </div>
//         </div>

//         {/* Middle sections */}
//         <div className="footer-links">
//           <div className="footer-column">
//             <h4>Industries</h4>
//             <ul>
//               <li>Education</li>
//               <li>Technology</li>
//               <li>Consulting</li>
//               <li>Healthcare</li>
//               <li>Construction</li>
//               <li>Temple Projects</li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <h4>Services</h4>
//             <ul>
//               <li>AI & Automation</li>
//               <li>Digital Transformation</li>
//               <li>Web Development</li>
//               <li>Mobile Apps</li>
//               <li>IT Consulting</li>
//               <li>Cloud Solutions</li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <h4>Company</h4>
//             <ul>
//               <li>About Us</li>
//               <li>Careers</li>
//               <li>Case Studies</li>
//               <li>Blog</li>
//               <li>Contact</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom section */}
//       <div className="footer-bottom">
//         <p>© 2025 Visdom Waves Innovations Private Limited. All rights reserved.</p>
//         <div className="social-icons">
//           <a href="#" aria-label="LinkedIn">
//             <FaLinkedinIn />
//           </a>
//           <a href="#" aria-label="Twitter">
//             <FaTwitter />
//           </a>
//           <a href="#" aria-label="Facebook">
//             <FaFacebookF />
//           </a>
//           <a href="#" aria-label="Instagram">
//             <FaInstagram />
//           </a>
//           <a href="#" aria-label="YouTube">
//             <FaYoutube />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
