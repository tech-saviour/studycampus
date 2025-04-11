'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/slider/slider.png', alt: 'Children playing in classroom' },
  { src: '/slider/slider1.png', alt: 'Kids learning and drawing' },
  { src: '/slider/slider2.png', alt: 'Kids learning and drawing' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full" aria-label="Image Carousel">
      <div className="relative w-full mx-auto overflow-hidden  shadow-lg flex justify-center items-center">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1440} // adjust based on your actual image size
          height={400} // adjust based on your actual image size
          className="object-contain w-full h-auto transition duration-500 ease-in-out"
          priority
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
