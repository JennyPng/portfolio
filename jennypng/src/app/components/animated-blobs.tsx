'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      const blobs = container.querySelectorAll('.blob');
      blobs.forEach((blob, index) => {
        const element = blob as HTMLElement;
        const speed = (index + 1) * 0.5;
        const translateX = deltaX * 50 * speed;
        const translateY = deltaY * 50 * speed;
        
        element.style.transform = `translate(${translateX}px, ${translateY}px) scale(${1 + Math.abs(deltaX + deltaY) * 0.1})`;
      });
    };

    const handleMouseLeave = () => {
      const blobs = container.querySelectorAll('.blob');
      blobs.forEach((blob) => {
        const element = blob as HTMLElement;
        element.style.transform = 'translate(0px, 0px) scale(1)';
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ filter: 'blur(1px)' }}
    >
      {/* Teal Blob 1 */}
      <div className="blob absolute top-1/4 left-1/4 w-96 h-96 transition-transform duration-700 ease-out">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="tealGradient1" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#84cdda" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#cee9f3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#cee9f3" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M 100 100 Q 150 50 200 100 Q 250 150 200 200 Q 150 250 100 200 Q 50 150 100 100 Z"
            fill="url(#tealGradient1)"
            className="animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </svg>
      </div>

      {/* Pink Blob 1 */}
      <div className="blob absolute top-3/4 right-1/4 w-80 h-80 transition-transform duration-700 ease-out">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="pinkGradient1" cx="70%" cy="70%">
              <stop offset="0%" stopColor="#EDC0C0" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#f3e0e0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f3e0e0" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M 120 120 Q 180 80 240 120 Q 280 180 240 240 Q 180 280 120 240 Q 80 180 120 120 Z"
            fill="url(#pinkGradient1)"
            className="animate-pulse"
            style={{ animationDuration: '10s' }}
          />
        </svg>
      </div>

      {/* Teal Blob 2 */}
      <div className="blob absolute bottom-1/4 left-1/3 w-72 h-72 transition-transform duration-700 ease-out">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="tealGradient2" cx="40%" cy="60%">
              <stop offset="0%" stopColor="#84cdda" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#cee9f3" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#cee9f3" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M 80 80 Q 140 40 200 80 Q 240 140 200 200 Q 140 240 80 200 Q 40 140 80 80 Z"
            fill="url(#tealGradient2)"
            className="animate-pulse"
            style={{ animationDuration: '12s' }}
          />
        </svg>
      </div>

      {/* Pink Blob 2 */}
      <div className="blob absolute top-1/2 right-1/3 w-64 h-64 transition-transform duration-700 ease-out">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="pinkGradient2" cx="60%" cy="40%">
              <stop offset="0%" stopColor="#EDC0C0" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#f3e0e0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f3e0e0" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M 60 60 Q 120 20 180 60 Q 220 120 180 180 Q 120 220 60 180 Q 20 120 60 60 Z"
            fill="url(#pinkGradient2)"
            className="animate-pulse"
            style={{ animationDuration: '9s' }}
          />
        </svg>
      </div>

      {/* Small floating blobs */}
      <div className="blob absolute top-1/6 right-1/6 w-32 h-32 transition-transform duration-700 ease-out">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="smallTeal" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#84cdda" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#cee9f3" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="80" fill="url(#smallTeal)" />
        </svg>
      </div>

      <div className="blob absolute bottom-1/6 right-1/6 w-24 h-24 transition-transform duration-700 ease-out">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="smallPink" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#EDC0C0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f3e0e0" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="60" fill="url(#smallPink)" />
        </svg>
      </div>
    </div>
  );
} 