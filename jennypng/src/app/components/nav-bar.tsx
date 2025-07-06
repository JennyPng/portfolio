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

  return (
    <div className="nav">
      <div className="flex flex-wrap text-secondary-green duration-175 justify-between items-center p-4 md:mx-24">
        <Link href="/" className="text-md font-miniver">jenny peng</Link>
        <nav className="flex flex-wrap justify-between items-center p-4 pb-0 mb-0">
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
                  className="text-sm hover:text-tertiary-green"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className="text-sm hover:text-tertiary-green">
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
      </div>
      <hr className="border-1 -mx-3 border-primary-green" />
    </div>
  );
}
