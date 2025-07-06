"use client"
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { href: "/#projects", label: "projects" },
  { href: "/about-me", label: "about" },
  { href: "/blog", label: "blog" },
  // { href: "/art", label: "art" },
  { href: "https://jennypng.netlify.app/", label: "🌱", external: true },
];

export default function NavBar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav">
      <div className="flex flex-wrap text-secondary-green duration-175 justify-between items-center p-4 md:mx-24">
        <Link href="/" className="text-md font-miniver hover:text-primary-green transition-colors duration-175">jenny peng</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-wrap justify-between items-center p-4 pb-0 mb-0">
          {navLinks.map((link, idx) => (
            <div
              key={link.href}
              className="relative px-4"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-green transition-colors duration-175"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className="text-sm hover:text-primary-green transition-colors duration-175">
                  {link.label}
                </Link>
              )}
              <svg
                width="48"
                height="8"
                viewBox="0 0 48 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -2,
                  width: "100%",
                  height: 8,
                  pointerEvents: "none"
                }}
              >
                <path
                  className={`squiggle-path${hovered === idx ? " squiggle-animate" : ""}`}
                  d="M2 6 Q12 2 24 6 Q36 10 46 6"
                  stroke="var(--color-primary-pink)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-secondary-green transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-secondary-green transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-secondary-green transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, idx) => (
            <div key={link.href} className="relative">
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-roboto-mono text-secondary-green hover:text-tertiary-green transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  href={link.href} 
                  className="text-lg font-roboto-mono text-secondary-green hover:text-tertiary-green transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )}
              <svg
                width="80"
                height="12"
                viewBox="0 0 80 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-200"
              >
                <path
                  d="M4 9 Q20 3 40 9 Q60 15 76 9"
                  stroke="var(--color-primary-pink)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-1 -mx-3 border-primary-green" />
    </div>
  );
}
