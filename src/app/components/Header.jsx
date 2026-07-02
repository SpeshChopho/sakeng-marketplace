'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Header container with white background and your specific E5EFEB border line
    <header className="bg-white text-[#3F564C] sticky top-0 z-50 border-b border-[#E5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Frame */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 transition-transform group-hover:scale-105">
                <Image 
                  src="/logo.png"
                  alt="Sakeng Livestock Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-[#20352E] leading-none">SAKENG</span>
                <span className="text-[#6D8077] text-[10px] font-bold tracking-widest mt-0.5 uppercase">Livestock</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center text-sm font-bold">
            <Link href="/" className="text-[#20352E] hover:text-[#3D7A5E] transition-colors">Marketplace</Link>
            <Link href="#" className="text-[#3F564C] hover:text-[#20352E] transition-colors">How It Works</Link>
            <Link href="#" className="text-[#3F564C] hover:text-[#20352E] transition-colors">About Us</Link>
            <Link href="#" className="bg-[#3D7A5E] text-white px-5 py-2.5 rounded-xl font-black hover:bg-[#285F44] transition-all shadow-xs transform active:scale-95">
              Enlist Livestock
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              // Burger icon color set to #20352E with an F8F6F2 background circle frame
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#F8F6F2] text-[#20352E] hover:text-[#3D7A5E] focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E5EFEB] px-4 pt-2 pb-6 space-y-1.5 shadow-xs">
          <Link href="/" className="block px-3 py-2.5 rounded-xl bg-[#F8F6F2] text-[#20352E] font-bold">Marketplace</Link>
          <Link href="#" className="block px-3 py-2.5 rounded-xl text-[#3F564C] hover:text-[#20352E] font-semibold">How It Works</Link>
          <Link href="#" className="block px-3 py-2.5 rounded-xl text-[#3F564C] hover:text-[#20352E] font-semibold">About Us</Link>
          <div className="pt-4">
            <Link href="#" className="block text-center bg-[#3D7A5E] text-white px-4 py-3 rounded-xl font-black shadow-xs hover:bg-[#285F44]">
              Enlist Livestock
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}