
import React, { useEffect, useState } from "react";
import "./Hero.css";


import spooky from "../Images/After-Hours-Spooky-HP-D.jpg";
import bestseller from "../Images/ft_bestseller_hero_d.webp";
import mainHero from "../Images/FT_Main_hero_banner_d.webp";
import metalSeries from "../Images/FT_MetalSeries_Updated_D.jpg";
import mobileHero from "../Images/hero-mobile.jpg";
import ocean from "../Images/Oceanyx-2.0-HP-D.jpg";
import vyb from "../Images/Vyb_10_HP_D.jpg";

const slides = [
  spooky,
  bestseller,
  mainHero,
  metalSeries,
  mobileHero,
  ocean,
  vyb,
];


const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="hero-section">

      {/* Availability Top Bar */}
      <div className="availability-bar">
        <span className="location-icon">➤</span>
        <span>Select a location to check availability</span>
        <span className="availability-arrow">→</span>
      </div>

      {/* Carousel */}
      <div className="hero-carousel">

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((image, index) => (
            <div className="carousel-slide" key={image}>
              <img
                src={image}
                alt={`Fastrack promotional banner ${index + 1}`}
                className="hero-image"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="carousel-btn prev-btn"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          className="carousel-btn next-btn"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#8250;
        </button>

      </div>
    </section>
  );
};

export default HeroCarousel;
