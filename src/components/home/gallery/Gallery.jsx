import React, { useState } from "react";
import "./gallery.css";

const Gallery = () => {

  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-header">

        <p>LOVE IN FRAMES</p>

        <h2>
          Our
          <span>Memories</span>
        </h2>

        <p>
          A collection of moments that brought us
          to this beautiful day.
        </p>

      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (
          <button
            className={`gallery-item gallery-item-${index + 1}`}
            key={index}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Amondi and Ajuma memory ${index + 1}`} />
          </button>
        ))}

      </div>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Rose and Ted"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </section>
  );
};

export default Gallery;