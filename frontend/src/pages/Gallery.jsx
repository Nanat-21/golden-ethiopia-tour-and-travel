import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Use Link for fast, no-reload navigation
import "../styles/style.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- FETCH DATA FROM MONGODB ---
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/gallery");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  if (loading) return <div className="loader">Loading Ethiopia in Pictures...</div>;

  return (
    <main>
      <section className="section gallery">
        <div className="container">
          <h1>Our <span>Gallery</span></h1>

          <div className="gallery-grid">
            {images.map((img) => (
              /* We use <Link> instead of <a> for Single Page App speed */
              <Link key={img._id} className="gallery-tile" to="/packages">
                <img src={img.imageUrl} alt={img.title} />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{img.title}</h3>
                  <p className="gallery-desc">{img.description}</p>
                  <span className="gallery-cta">Book Now</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;

