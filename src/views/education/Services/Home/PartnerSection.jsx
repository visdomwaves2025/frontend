import React from "react";
import "./PartnerSection.css";

const partners = [
  { name: "Amazon", logo: "https://i.pinimg.com/736x/7a/75/b9/7a75b9d313bc0a24d09b326d382dec8a.jpg" },
  { name: "Google", logo: "https://i.pinimg.com/1200x/8c/44/cd/8c44cdb758a09ec33d865b44c60f35ad.jpg" },
  { name: "Microsoft", logo: "https://i.pinimg.com/736x/cc/4e/72/cc4e72f2e8ec933d0fb124f64b7df12b.jpg" },
  { name: "Apple", logo: "https://i.pinimg.com/1200x/99/e8/d6/99e8d6526f09705b853091106ba1151a.jpg" },
  { name: "WhatsApp", logo: "https://i.pinimg.com/736x/46/75/1d/46751da002771b66e065018ab6078307.jpg" },
  { name: "Netflix", logo: "https://i.pinimg.com/1200x/8f/b2/19/8fb219fa9a12b75ae5bf1786185b85d1.jpg" }
];

/* Duplicate for seamless infinite scroll */
const loopedPartners = [...partners, ...partners];

function PartnersSection() {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Trusted Partners</h2>

      <div className="partners-marquee">
        <div className="partners-track">
          {loopedPartners.map((partner, index) => (
            <div className="partner-logo" key={index} title={partner.name}>
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
