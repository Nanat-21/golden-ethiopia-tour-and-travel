import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]); // Now dynamic
  const [loading, setLoading] = useState(true);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState(null); // For success/error messages

  // --- FETCH TESTIMONIALS FROM DATABASE 
  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    getTestimonials();
  }, []);

  // --- KEYBOARD ACCESSIBILITY  ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && testimonials.length > 0) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [testimonials.length]);

  // --- FORM SUBMIT HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container">
            <h1>Journey to the Cradle of Humanity</h1>
            <p>Discover Ethiopia's ancient history, vibrant culture, and stunning landscapes with our premium travel experiences.</p>
            <Link to="/packages" className="btn-gold">Explore Packages</Link>
          </div>
        </section>

        {/* --- POPULAR DESTINATIONS SECTION --- */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Popular Destinations</h2>
            <div className="cards">
              <div className="card">
                <img src="images/photo_2025-11-28_03-59-10.jpg" alt="Lalibela Rock-Hewn Churches" />
                <div className="card-body">
                  <div className="card-title">Lalibela</div>
                  <p>The awe-inspiring rock-hewn churches, a UNESCO World Heritage site and a wonder of the world.</p>
                  <a href="#" className="btn-gold">View Details</a>
                </div>
              </div>

              <div className="card">
                <img src="images/photo_2025-11-28_04-02-12.jpg" alt="Simien Mountains National Park" />
                <div className="card-body">
                  <div className="card-title">Simien Mountains</div>
                  <p>Trekking through dramatic landscapes, home to the Gelada baboon and Walia ibex.</p>
                  <a href="#" className="btn-gold">View Details</a>
                </div>
              </div>

              <div className="card">
                <img src="images/photo_2025-11-28_03-59-13.jpg" alt="Ancient Obelisks of Axum" />
                <div className="card-body">
                  <div className="card-title">Axum</div>
                  <p>Explore the powerful ancient capital of the Aksumite Empire and its monumental obelisks.</p>
                  <a href="#" className="btn-gold">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DYNAMIC TESTIMONIALS SECTION */}
        <section className="section section-light" style={{ overflow: 'hidden' }}>
          <div className="container">
            <p className="section-subtitle">What our customers say about us</p>
            <h2 className="section-title">Testimonials</h2>

            <div className="testimonial-wrapper" style={{ 
              position: 'relative', display: 'flex', justifyContent: 'center', 
              alignItems: 'center', minHeight: '350px', marginTop: '40px'
            }}>
              {loading ? (
                <p>Loading travelers' stories...</p>
              ) : testimonials.length > 0 ? (
                testimonials.map((t, index) => {
                  const isActive = index === activeIndex;
                  const isPrevious = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
                  const isNext = index === (activeIndex + 1) % testimonials.length;

                  let positionStyle = { opacity: 0, transform: 'scale(0.8) translateX(0)', zIndex: 0 };
                  if (isActive) {
                    positionStyle = { opacity: 1, transform: 'scale(1) translateX(0)', zIndex: 3 };
                  } else if (isPrevious) {
                    positionStyle = { opacity: 0.3, transform: 'scale(0.8) translateX(-120%)', zIndex: 1 };
                  } else if (isNext) {
                    positionStyle = { opacity: 0.3, transform: 'scale(0.8) translateX(120%)', zIndex: 1 };
                  }

                  return (
                    <div 
                      key={t._id} 
                      className={`testimonial-card ${isActive ? 'active' : ''}`}
                      style={{
                        position: 'absolute', transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        width: '100%', maxWidth: '400px', ...positionStyle
                      }}
                    >
                      <img
                        src={t.img || `https://placehold.co/60x60/D4AF37/ffffff?text=${t.clientName[0]}`}
                        alt={t.clientName}
                        className="testimonial-avatar"
                      />
                      <p className="testimonial-name">{t.clientName}</p>
                      <p className="testimonial-title">{t.tripTaken}</p>
                      <p className="testimonial-text">"{t.review}"</p>
                    </div>
                  );
                })
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>

            <div className="testimonial-pagination">
              {testimonials.map((_, i) => (
                <span 
                  key={i} 
                  className={`testimonial-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT FORM SECTION--- */}
        <section className="section section-light">
          <div className="container contact-section-inner">
            <h2 className="section-title">Get In Touch & Book Your Trip</h2>
            <div className="contact-container">
              
              <div className="info-box">
                <h3>Contact Information</h3>
                <p><strong>Phone:</strong> <a href="tel:+251900123456">+251 900 123 456</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@goldenethiopia.com">info@goldenethiopia.com</a></p>
                <p><strong>Address:</strong> Bole Road, Addis Ababa, Ethiopia</p>
                <br />
                <h3>Why Book with Us?</h3>
                <ul>
                  <li>Expert Local Guides</li>
                  <li>Customized Itineraries</li>
                  <li>Sustainable Tourism</li>
                </ul>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <p style={{ marginTop: 0, fontWeight: 600 }}>Fill out the form below to inquire about a package or a custom tour.</p>
                
                <label>Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />

                <label>Your Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />

                <label>Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about Simien Trekking" 
                  required 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />

                <label>Message</label>
                <textarea 
                  rows="6" 
                  placeholder="I'm interested in the 8-day Simien Trek. What dates are available in March?" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>

                <button type="submit" className="btn-gold">Send Inquiry</button>

                {/* Status Messages*/}
                {status === 'success' && (
                  <p style={{ marginTop: '15px', fontWeight: '700' }}>Message sent successfully! We will contact you soon.</p>
                )}
                {status === 'error' && (
                  <p style={{ marginTop: '15px', fontWeight: '700' }}>Failed to send inquiry. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;