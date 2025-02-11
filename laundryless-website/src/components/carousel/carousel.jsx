import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../carousel/carousel.css";

import img1 from "../../assets/imgs/img1.jpg";
import img2 from "../../assets/imgs/img2.jpg";
import img3 from "../../assets/imgs/img3.jpg";
import img4 from "../../assets/imgs/img4.jpg";
import img5 from "../../assets/imgs/img5.jpg";
import img6 from "../../assets/imgs/img6.jpg";
import img7 from "../../assets/imgs/img7.jpg";

const slides = [
  { id: 1, image: img1, alt: "Client Lockers 1" },
  { id: 2, image: img2, alt: "Client Lockers 2" },
  { id: 3, image: img3, alt: "Client Lockers 3" },
  { id: 4, image: img4, alt: "Client Lockers 4" },
  { id: 5, image: img5, alt: "Client Lockers 5" },
  { id: 6, image: img6, alt: "Client Lockers 6" },
  { id: 7, image: img7, alt: "Client Lockers 7" },
];

// Extend slides to show last image before the first and first after the last
const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 to avoid duplicate jump

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    if (currentIndex === extendedSlides.length - 1) {
      setTimeout(() => {
        setCurrentIndex(1);
      }, 500);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    if (currentIndex === 0) {
      setTimeout(() => {
        setCurrentIndex(extendedSlides.length - 2);
      }, 500);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}vw))`,
          transition:
            currentIndex === 0 || currentIndex === extendedSlides.length - 1
              ? "none"
              : "transform 0.5s ease-in-out",
          display: "flex",
          width: `${extendedSlides.length * 100}vw`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.alt}
            className="carousel-slide"
            style={{ width: "100vw" }}
          />
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-button left">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="carousel-button right">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`indicator ${
              currentIndex - 1 === index ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
