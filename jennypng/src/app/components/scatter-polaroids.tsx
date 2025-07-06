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
    mobileInitialOffset: { x: number; y: number };
    mobileFinalOffset: { x: number; y: number };
}

const polaroids: ScatterPolaroid[] = [
    {
        imageSrc: "/images/apt.jpg",
        altText: "picture of college apartment",
        caption: "Capturing my senior year apartment, when I lived with my friends💌",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: -70, y: 0 },
        mobileInitialOffset: { x: 0, y: -40 },
        mobileFinalOffset: { x: 0, y: -200 } 
    },
    {
        imageSrc: "/images/lab.jpg",
        altText: "picture of me",
        caption: "Commemorating the hours spent debugging in the CSE labs💻",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: -25, y: 0 },
        mobileInitialOffset: { x: 0, y: -25 },
        mobileFinalOffset: { x: 0, y: -50 } 
    },
    {
        imageSrc: "/images/cq.jpg",
        altText: "picture of chongqing temple",
        caption: "📍Chongqing. a temple beautiful at every angle",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: 20, y: 0 },
        mobileInitialOffset: { x: 0, y: 25 },
        mobileFinalOffset: { x: 0, y: 20 }
    },
    {
        imageSrc: "/images/jp.jpg",
        altText: "photo of tokyo skytree",
        caption: "Photo from my first trip to Japan📷",
        initialOffset: { x: 0, y: 0 },
        finalOffset: { x: 65, y: 0 }, 
        mobileInitialOffset: { x: 0, y: 100 },
        mobileFinalOffset: { x: 0, y: 60 } 
    }
];

export default function ScatterPolaroids() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Check if we're on mobile and get screen dimensions
    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setIsMobile(width < 768); // 768px is typical mobile breakpoint
            setScreenDimensions({ width, height });
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div 
            ref={containerRef}
            className="relative w-full min-h-screen md:min-h-fit h-[1500px] md:h-[500px] p-0 m-0 pb-4 md:-mt-8 lg:-mt-12 flex items-center justify-center overflow-hidden"
        >
            {polaroids.map((polaroid, index) => {
                // Use mobile or desktop offsets based on screen size
                const initialOffset = isMobile ? polaroid.mobileInitialOffset : polaroid.initialOffset;
                const finalOffset = isMobile ? polaroid.mobileFinalOffset : polaroid.finalOffset;
                
                // Convert percentage offsets to pixel values based on screen dimensions
                const finalXPixels = (finalOffset.x / 100) * screenDimensions.width;
                const finalYPixels = (finalOffset.y / 100) * screenDimensions.height;
                const initialXPixels = (initialOffset.x / 100) * screenDimensions.width;
                const initialYPixels = (initialOffset.y / 100) * screenDimensions.height;
                
                const xTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [initialXPixels, finalXPixels]
                );
                const yTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [initialYPixels, finalYPixels]
                );
                const rotationTransform = useTransform(
                    scrollYProgress,
                    [0, 1],
                    [0, 5 * (index % 2 === 0 ? 1 : -1)]
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