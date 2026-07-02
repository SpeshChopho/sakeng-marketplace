'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1C243A] text-white sticky top-0 z-50 shadow-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Comfortable height for your logo badge */}
          
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
                <span className="text-lg font-black tracking-wider text-[#E5AA27] leading-none">SAKENG</span>
                <span className="text-zinc-400 text-[10px] font-bold tracking-widest mt-0.5 uppercase">Livestock</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center text-sm font-semibold">
            <Link href="/" className="hover:text-[#E5AA27] text-zinc-200 transition-colors">Marketplace</Link>
            <Link href="#" className="hover:text-[#E5AA27] text-zinc-200 transition-colors">How It Works</Link>
            <Link href="#" className="hover:text-[#E5AA27] text-zinc-200 transition-colors">About Us</Link>
            <Link href="#" className="bg-[#E5AA27] text-[#1C243A] px-5 py-2.5 rounded-xl font-black hover:bg-yellow-500 transition-all shadow-sm transform active:scale-95">
              Enlist Livestock
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 hover:text-[#E5AA27] focus:outline-none"
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
        <div className="md:hidden bg-[#1C243A] border-t border-white/5 px-4 pt-2 pb-6 space-y-2 shadow-inner">
          <Link href="/" className="block px-3 py-2.5 rounded-xl text-zinc-200 hover:bg-white/5 hover:text-[#E5AA27] font-medium">Marketplace</Link>
          <Link href="#" className="block px-3 py-2.5 rounded-xl text-zinc-200 hover:bg-white/5 hover:text-[#E5AA27] font-medium">How It Works</Link>
          <Link href="#" className="block px-3 py-2.5 rounded-xl text-zinc-200 hover:bg-white/5 hover:text-[#E5AA27] font-medium">About Us</Link>
          <div className="pt-4">
            <Link href="#" className="block text-center bg-[#E5AA27] text-[#1C243A] px-4 py-3 rounded-xl font-black shadow-md">
              Enlist Livestock
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}