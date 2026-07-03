'use client';
import { useState } from 'react';

export default function ImageCarousel({ images = [], isVerified = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Enforce the strict maximum limit of 3 images
  const carouselImages = images.slice(0, 3);

  if (carouselImages.length === 0) {
    return (
      <div className="w-full h-[220px] md:h-[240px] bg-zinc-200 flex items-center justify-center rounded-t-3xl border-b border-zinc-100">
        <span className="text-zinc-400 font-bold tracking-wide text-xs">No Images Provided</span>
      </div>
    );
  }

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[220px] md:h-[240px] overflow-hidden rounded-t-3xl group bg-zinc-900">
      
      {/* Optimized Height Container using standard HTML img for dynamic URLs */}
      <div className="relative w-full h-full">
        <img
          src={carouselImages[currentIndex]}
          alt={`Livestock slide view ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {isVerified && (
        <div className="absolute top-3 left-3 bg-[#E5AA27] text-[#1C243A] text-[9px] font-black px-2.5 py-1.5 rounded-lg shadow-md flex items-center space-x-1 z-10 select-none">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="uppercase tracking-wider font-extrabold">Sakeng Verified</span>
        </div>
      )}

      {carouselImages.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-[#1C243A] hover:text-black flex items-center justify-center shadow-md font-black text-sm z-10"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-[#1C243A] hover:text-black flex items-center justify-center shadow-md font-black text-sm z-10"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {carouselImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full flex space-x-1.5 items-center shadow-md z-10">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-4 bg-[#1C243A]' : 'w-1.5 bg-zinc-300'
              }`}
              aria-label={`Jump to image slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}