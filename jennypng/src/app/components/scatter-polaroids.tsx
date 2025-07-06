"use client"
import Polaroid from "./polaroid";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScatterPolaroid {
    imageSrc: string;
    altText: string;
    caption?: string;
    initialOffset: { x: number; y: number };
    finalOffset: { x: number; y: number };
    mobileFinalOffset: { x: number; y: number };
}

const polaroids: ScatterPolaroid[] = [
    {
        imageSrc: "/images/emo.gif",
        altText: "emo gif",
        caption: "Emotional moments",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: -900, y: 0 },
        mobileFinalOffset: { x: 0, y: -200 }
    },
    {
        imageSrc: "/images/crown.gif",
        altText: "crown gif",
        caption: "Royal vibes",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: -100, y: 0 },
        mobileFinalOffset: { x: 0, y: -100 }
    },
    {
        imageSrc: "/images/runring.gif",
        altText: "running ring gif",
        caption: "Always moving",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: 100, y: 0 },
        mobileFinalOffset: { x: 0, y: 100 }
    },
    {
        imageSrc: "/images/jj-gif.gif",
        altText: "jj gif",
        caption: "Good times",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: 300, y: 0 },
        mobileFinalOffset: { x: 0, y: 200 }
    }
];

export default function ScatterPolaroids() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Check if we're on mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div 
            ref={containerRef}
            className="relative w-full min-h-screen md:min-h-fit h-[500px] p-0 m-0 pb-4 -mt-32 flex items-center justify-center overflow-hidden"
        >
            {polaroids.map((polaroid, index) => {
                // Use mobile or desktop final offset based on screen size
                const finalOffset = isMobile ? polaroid.mobileFinalOffset : polaroid.finalOffset;
                
                const xTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [polaroid.initialOffset.x, finalOffset.x]
                );
                const yTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [polaroid.initialOffset.y, finalOffset.y]
                );
                const rotationTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [0, 10 * (index % 2 === 0 ? 1 : -1)]
                );
                const scaleTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [0.8, 1]
                );
                
                return (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            x: xTransform,
                            y: yTransform,
                            rotate: rotationTransform,
                            scale: scaleTransform,
                            zIndex: index
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Polaroid 
                            imageSrc={polaroid.imageSrc}
                            altText={polaroid.altText}
                            caption={polaroid.caption}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
} 