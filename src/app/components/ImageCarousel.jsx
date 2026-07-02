'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ImageCarousel({ images = [], isVerified = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Enforce the strict maximum limit of 3 images from your specification
  const carouselImages = images.slice(0, 3);

  // Fallback state if the listing has no images uploaded yet
  if (carouselImages.length === 0) {
    return (
      <div className="w-full h-[340px] bg-zinc-200 flex items-center justify-center rounded-t-3xl border-b border-zinc-100">
        <span className="text-zinc-400 font-bold tracking-wide">No Images Provided</span>
      </div>
    );
  }

  const handlePrev = (e) => {
    e.stopPropagation(); // Prevents clicking the arrow from triggering layout card actions
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[340px] md:h-[380px] overflow-hidden rounded-t-3xl group bg-zinc-900">
      
      {/* Core Optimized Image Box */}
      <div className="relative w-full h-full">
        <Image
          src={carouselImages[currentIndex]}
          alt={`Livestock slide view ${currentIndex + 1}`}
          fill
          priority={currentIndex === 0} // Boosts LCP performance optimization on the initial image
          sizes="(max-w-768px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300"
        />
      </div>

      {/* FINAL UI POLISH: Accent Yellow Sakeng Verified Badge (#E5AA27) matching image_6.png */}
      {isVerified && (
        <div className="absolute top-4 left-4 bg-[#E5AA27] text-[#1C243A] text-xs font-black px-3 py-2 rounded-xl shadow-md flex items-center space-x-1.5 z-10 select-none">
          {/* Checkmark icon badge */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="uppercase tracking-wider font-extrabold text-[10px]">Sakeng Verified</span>
        </div>
      )}

      {/* Carousel Navigation Arrows (Only displays if there are multiple images) */}
      {carouselImages.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#1C243A] hover:text-black flex items-center justify-center shadow-lg font-black text-lg transition-transform active:scale-90 z-10"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#1C243A] hover:text-black flex items-center justify-center shadow-lg font-black text-lg transition-transform active:scale-90 z-10"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {/* Slide Track Navigation Indicator Dots matching image_6.png */}
      {carouselImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full flex space-x-2 items-center shadow-md z-10">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-5 bg-[#1C243A]' : 'w-2.5 bg-zinc-300'
              }`}
              aria-label={`Jump to image slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}