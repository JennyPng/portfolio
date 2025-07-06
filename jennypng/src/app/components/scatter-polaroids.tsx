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
}

const polaroids: ScatterPolaroid[] = [
    {
        imageSrc: "/images/emo.gif",
        altText: "emo gif",
        caption: "Emotional moments",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: -300, y: 0 }
    },
    {
        imageSrc: "/images/crown.gif",
        altText: "crown gif",
        caption: "Royal vibes",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: -100, y: 0 }
    },
    {
        imageSrc: "/images/runring.gif",
        altText: "running ring gif",
        caption: "Always moving",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: 100, y: 0 }
    },
    {
        imageSrc: "/images/jj-gif.gif",
        altText: "jj gif",
        caption: "Good times",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: 300, y: 0 }
    }
];

export default function ScatterPolaroids() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-[600px] flex items-center justify-center overflow-hidden"
        >
            {polaroids.map((polaroid, index) => {
                const xTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [polaroid.initialOffset.x, polaroid.finalOffset.x]
                );
                const yTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [polaroid.initialOffset.y, polaroid.finalOffset.y]
                );
                const rotationTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [0, 15 * (index % 2 === 0 ? 1 : -1)]
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