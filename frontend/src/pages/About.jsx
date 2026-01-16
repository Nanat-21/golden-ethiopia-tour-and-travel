// frontend/src/pages/About.jsx
import React from "react";

import "../styles/style.css";

const About = () => {
  return (
    <>
    

      <main>
        <section className="section section-dark">
          <div className="container">
            <h2 className="section-title text-white">Our Story</h2>
            <p className="section-subtitle text-white">
              Experience the Difference with Golden Ethiopia
            </p>

            <div className="icon-grid">
              <div className="icon-box">
                <i className="fa fa-gem"></i>
                <h3>Our Vision</h3>
                <p>
                  To be the premier travel guide for those seeking authentic,
                  sustainable, and unforgettable journeys through Ethiopia's
                  historical and natural wonders.
                </p>
              </div>

              <div className="icon-box">
                <i className="fa fa-handshake"></i>
                <h3>Our Mission</h3>
                <p>
                  To deliver exceptional travel experiences while promoting local
                  culture, supporting community development, and practicing
                  environmental stewardship.
                </p>
              </div>

              <div className="icon-box">
                <i className="fa fa-map-marker-alt"></i>
                <h3>Our Values</h3>
                <p>
                  Authenticity, Integrity, Customer Focus, and Sustainability
                  drive every decision we make.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section team-section">
          <div className="container">
            <h2 className="section-title">Meet Our Experienced Team</h2>

            <div className="team-container">
              <div className="team-card">
                <img
                  src="https://placehold.co/250x250?text=CEO"
                  alt="Selam Getachew"
                  className="team-img"
                />
                <h3>Selam Getachew</h3>
                <p className="team-title">Founder & CEO</p>
                <p>15 years experience in cultural tourism.</p>
              </div>

              <div className="team-card">
                <img
                  src="https://placehold.co/250x250?text=Guide"
                  alt="Tafari Kebede"
                  className="team-img"
                />
                <h3>Tafari Kebede</h3>
                <p className="team-title">Lead Historical Guide</p>
                <p>Expert on Axum and Lalibela history.</p>
              </div>

              <div className="team-card">
                <img
                  src="https://placehold.co/250x250?text=Ops"
                  alt="Aisha Musa"
                  className="team-img"
                />
                <h3>Aisha Musa</h3>
                <p className="team-title">Operations Manager</p>
                <p>Ensures smooth logistics for every trip.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
};

export default About;

