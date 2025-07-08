"use client"
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/#projects", label: "projects" },
  { href: "/#experience", label: "resume" },
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
              <motion.svg
                width="48"
                height="12"
                viewBox="0 0 48 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -4,
                  width: "100%",
                  height: 12,
                  pointerEvents: "none"
                }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: hovered === idx ? 1 : 0,
                  opacity: hovered === idx ? 1 : 0
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <motion.path
                  d="M2 9 Q6 3 12 7 Q18 1 24 9 Q30 2 36 8 Q42 1 46 7"
                  stroke="var(--color-primary-pink)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: hovered === idx ? 1 : 0 }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                />
              </motion.svg>
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <motion.span 
            className="block w-6 h-0.5 bg-secondary-green"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0
            }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span 
            className="block w-6 h-0.5 bg-secondary-green"
            animate={{
              opacity: isMenuOpen ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span 
            className="block w-6 h-0.5 bg-secondary-green"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0
            }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? "visible" : "hidden"
        }}
        transition={{ duration: 0.3 }}
        onClick={closeMenu}
      >
        <motion.div 
          className="flex flex-col items-center justify-center h-full space-y-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: isMenuOpen ? 0 : 20,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ 
            duration: 0.3,
            delay: 0.1
          }}
        >
          {navLinks.map((link, idx) => (
            <motion.div 
              key={link.href} 
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: isMenuOpen ? 0 : 20,
                opacity: isMenuOpen ? 1 : 0
              }}
              transition={{ 
                duration: 0.3,
                delay: 0.1 + (idx * 0.1)
              }}
            >
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
              <motion.svg
                width="80"
                height="16"
                viewBox="0 0 80 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.path
                  d="M4 13 Q10 5 18 11 Q26 3 34 13 Q42 4 50 10 Q58 2 66 12 Q74 5 76 9"
                  stroke="var(--color-primary-pink)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileHover={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <hr className="border-1 -mx-3 border-primary-green" />
    </div>
  );
}
