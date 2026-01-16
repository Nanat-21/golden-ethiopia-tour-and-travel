import React, { useState } from 'react';
import '../styles/style.css';

const Contact = () => {
  // 1. Logic for managing form data
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Logic for sending data to MongoDB Atlas
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', msg: 'Sending Inquiry...' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', msg: 'Message sent successfully! We will contact you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus({ type: 'error', msg: 'Failed to send inquiry. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Server error. Please ensure the backend is running.' });
    }
  };

  return (
    <main>
      <section className="section section-light">
        <div className="container contact-section-inner">
          <h2 className="section-title">Get In Touch & Book Your Trip</h2>

          <div className="contact-container">
            {/* LEFT SIDE: Contact Info */}
            <div className="info-box">
              <h3>Contact Information</h3>
              <p><strong>Phone:</strong> <a href="tel:+251911000000">+251 911 000 000</a></p>
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

            {/* RIGHT SIDE: React Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <p style={{ marginTop: 0, fontWeight: 600 }}>
                Fill out the form below to inquire about a package or a custom tour.
              </p>
              
              <label>Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              
              <label>Your Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              
              <label>Subject</label>
              <input 
                type="text" 
                name="subject" 
                placeholder="Inquiry about Simien Trekking" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
              
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="I'm interested in the 8-day Simien Trek. What dates are available in March?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              
              <button type="submit" className="btn-gold">Send Inquiry</button>
              
              {/* Status Message Display */}
              {status.msg && (
                <p className={`status-message ${status.type}`} style={{ marginTop: '10px', fontWeight: 'bold' }}>
                  {status.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
