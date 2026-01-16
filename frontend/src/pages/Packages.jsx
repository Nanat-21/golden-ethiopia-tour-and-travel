import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPackages } from "../api";
import "../styles/style.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await fetchPackages();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };
    getPackages();
  }, []);

  if (loading) return <div className="loader">Loading Ethiopia's Best Tours...</div>;

  return (
    // Wrap in a div that matches your layout's body background if necessary
    <div className="packages-page-wrapper">
      <main>
        {/* Make sure "section" is the class used in your CSS for padding */}
        <section className="section">
          {/* CRITICAL: The "container" class must be here to center the content */}
          <div className="container">
            
            <div className="section-header">
              <h2 className="section-title">Our Exciting Travel Packages</h2>
              <p className="section-subtitle">Curated tours to fit every traveler's dream.</p>
            </div>

            {/* This is the Flex/Grid container */}
            <div className="packages-container">
              {packages.length > 0 ? (
                packages.map((pkg) => (
                  <div key={pkg._id} className="package-card">
                    <img 
                      src={pkg.image || "images/default-tour.jpg"} 
                      alt={pkg.name} 
                    />
                    <div className="package-content">
                      <h3 className="package-title">{pkg.name}</h3>
                      <p className="package-duration">{pkg.duration || "Contact for Details"}</p>
                      <p className="package-description">{pkg.description}</p>
                      <div className="package-price">{pkg.price}</div>
                      <Link to="/contact" className="btn-gold">Book Now</Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No tours available at the moment.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Packages;

