'use client';
import { useState } from 'react';
import ImageCarousel from './ImageCarousel';

export default function LivestockCard({ listing }) {
  // Status Badge style helper
  const getStatusStyle = (status) => {
    switch (status?.toUpperCase()) {
      case 'AVAILABLE':
        return 'bg-[#20352E]/10 text-[#20352E]';
      case 'RESERVED':
        return 'bg-[#914124]/10 text-[#914124]';
      case 'SOLD':
      default:
        return 'bg-zinc-100 text-zinc-500';
    }
  };

  // Dynamic WhatsApp URL construction for instant inquiries
  const whatsappNumber = "266XXXXXXXX"; // Replace with your actual phone number format later
  const encodedText = encodeURIComponent(
    `Hi Sakeng, I am inquiring about the ${listing.title} (${listing.serial_id || 'N/A'}) listed for M ${Number(listing.listing_price).toLocaleString()} in ${listing.location}.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 border border-zinc-100/80 flex flex-col w-full max-w-sm">
      
      {/* Dynamic Image Carousel Frame */}
      <ImageCarousel images={listing.image_urls} isVerified={listing.is_verified} />

      {/* Content & Data Layer */}
      <div className="p-6 flex-grow flex flex-col justify-between bg-white">
        <div>
          {/* Metadata String Meta Row */}
          <div className="flex justify-between items-center text-[11px] font-black tracking-wider uppercase">
            <span className="text-[#20352E] font-extrabold">{listing.category}</span>
            <span className="text-zinc-400 font-medium">{listing.serial_id}</span>
          </div>

          {/* Title - Deep Navy Information Color */}
          <h3 className="text-xl font-bold text-[#1C243A] tracking-tight mt-1">
            {listing.title}
          </h3>

          {/* Geo Location Tracker Pin */}
          <div className="flex items-center space-x-1 text-xs text-zinc-500 font-medium mt-1.5">
            <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{listing.location}</span>
          </div>

          {/* Commercial Pricing Block & Inventory Tracker */}
          <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-between items-center">
            <div>
              <div className="text-2xl font-black text-[#1C243A] tracking-tight">
                M {Number(listing.listing_price).toLocaleString()}
              </div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">
                ({listing.inventory_count} available)
              </div>
            </div>

            {/* STATUS BADGE: Maps Available/Reserved/Sold contextually */}
            <div className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1 ${getStatusStyle(listing.status)}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
              <span>{listing.status || 'Available'}</span>
            </div>
          </div>

          {/* Product Technical Features Grid Icons Area */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            {/* Breed Spec Box */}
            <div className="bg-zinc-50/70 border border-zinc-100 rounded-xl p-2.5 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#ecdec2]/50 flex items-center justify-center text-[#20352E]">
                🐄
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400">Breed</span>
                <span className="block text-xs font-bold text-[#1C243A]">{listing.breed}</span>
              </div>
            </div>

            {/* Age Spec Box */}
            <div className="bg-zinc-50/70 border border-zinc-100 rounded-xl p-2.5 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#ecdec2]/50 flex items-center justify-center text-[#20352E]">
                📅
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400">Age</span>
                <span className="block text-xs font-bold text-[#1C243A]">{listing.age_text}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button Layer */}
        <div className="mt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#20352E] hover:bg-[#1a2b25] text-white py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-xs hover:shadow-md flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.165.001 6.14 1.233 8.377 3.469 2.237 2.236 3.467 5.214 3.466 8.382-.003 6.582-5.339 11.93-11.87 11.93-2.01-.001-3.987-.51-5.742-1.48L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.316 0 9.642-4.32 9.644-9.636.002-2.573-1.002-4.994-2.83-6.822-1.829-1.828-4.253-2.831-6.829-2.831-5.322 0-9.65 4.321-9.653 9.637-.001 1.705.452 3.372 1.309 4.866l-.995 3.636 3.729-.977z"/>
            </svg>
            <span>Inquire</span>
          </a>

          <p className="text-center text-[10px] text-zinc-400 mt-3 font-medium">
            5% viewing commitment fee applies. <a href="#" className="underline font-bold text-[#914124] hover:text-[#20352E] transition-colors">Ask Sakeng for details.</a>
          </p>
        </div>

      </div>
    </div>
  );
}