import React, { useState, useEffect } from "react";
import "../styles/style.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // --- FETCH DATA FROM DATABASE ---
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/gallery");
        const data = await response.json();
        setImages(data);
        setFilteredImages(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // --- FILTER LOGIC ---
  useEffect(() => {
    if (category === "All") {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter((img) => img.category === category));
    }
  }, [category, images]);

  if (loading) return <div className="loader">Loading Ethiopia in Pictures...</div>;

  return (
    <main>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">Visual stories from the heart of Ethiopia.</p>

          {/* Filter Buttons */}
          <div className="filter-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
            {["All", "Nature", "History", "Culture"].map((cat) => (
              <button 
                key={cat}
                className={category === cat ? "btn-gold" : "btn-outline"}
                onClick={() => setCategory(cat)}
                style={{ padding: '8px 20px', cursor: 'pointer', borderRadius: '5px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="packages-container"> {/* Reusing your grid CSS */}
            {filteredImages.length > 0 ? (
              filteredImages.map((img) => (
                <div key={img._id} className="package-card gallery-card">
                  <img 
                    src={img.imageUrl} 
                    alt={img.title} 
                    style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="package-content" style={{ textAlign: 'center' }}>
                    <h3 className="package-title">{img.title}</h3>
                    <span className="package-duration">{img.category}</span>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', width: '100%' }}>No images found in this category.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;