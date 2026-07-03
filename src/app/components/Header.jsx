"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Browse Livestock", href: "#listings" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  const whatsappUrl = "https://wa.me/26658566600?text=Hi%20Sakeng%2C%20I%20want%20to%20sell%20my%20livestock.";

  return (
    <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Brand Frame - Anchors directly back to top of the page */}
          <Link href="#" className="flex items-center space-x-3 group">
            <div className="relative w-[70px] h-[70px] transition-transform group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Sakeng Livestock Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="block font-black text-lg tracking-tight text-[#20352E] uppercase leading-none">
                Sakeng
              </span>
              <span className="block text-[10px] font-black tracking-widest text-[#3D7A5E] uppercase mt-0.5">
                Livestock
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Link Strip */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-[#3F564C] hover:text-[#3D7A5E] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#20352E] text-white text-xs font-black tracking-wide px-5 py-3 rounded-xl hover:bg-[#15231F] transition-colors"
            >
              Sell Livestock
            </a>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#20352E] hover:bg-[#F8F6F2] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Canvas Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB]">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-bold text-[#3F564C] hover:bg-[#F8F6F2] hover:text-[#3D7A5E] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#20352E] text-white text-sm font-black tracking-wide py-3.5 rounded-xl hover:bg-[#15231F] transition-colors"
              >
                Sell Livestock
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}