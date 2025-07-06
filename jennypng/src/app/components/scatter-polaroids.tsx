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

    // Create individual transform hooks for each polaroid
    const polaroid0InitialOffset = isMobile ? polaroids[0].mobileInitialOffset : polaroids[0].initialOffset;
    const polaroid0FinalOffset = isMobile ? polaroids[0].mobileFinalOffset : polaroids[0].finalOffset;
    const polaroid0FinalXPixels = (polaroid0FinalOffset.x / 100) * screenDimensions.width;
    const polaroid0FinalYPixels = (polaroid0FinalOffset.y / 100) * screenDimensions.height;
    const polaroid0InitialXPixels = (polaroid0InitialOffset.x / 100) * screenDimensions.width;
    const polaroid0InitialYPixels = (polaroid0InitialOffset.y / 100) * screenDimensions.height;
    
    const polaroid0XTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [polaroid0InitialXPixels, polaroid0FinalXPixels]
    );
    const polaroid0YTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [polaroid0InitialYPixels, polaroid0FinalYPixels]
    );
    const polaroid0RotationTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 5]
    );
    const polaroid0ScaleTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0.8, 1]
    );

    const polaroid1InitialOffset = isMobile ? polaroids[1].mobileInitialOffset : polaroids[1].initialOffset;
    const polaroid1FinalOffset = isMobile ? polaroids[1].mobileFinalOffset : polaroids[1].finalOffset;
    const polaroid1FinalXPixels = (polaroid1FinalOffset.x / 100) * screenDimensions.width;
    const polaroid1FinalYPixels = (polaroid1FinalOffset.y / 100) * screenDimensions.height;
    const polaroid1InitialXPixels = (polaroid1InitialOffset.x / 100) * screenDimensions.width;
    const polaroid1InitialYPixels = (polaroid1InitialOffset.y / 100) * screenDimensions.height;
    
    const polaroid1XTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [polaroid1InitialXPixels, polaroid1FinalXPixels]
    );
    const polaroid1YTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [polaroid1InitialYPixels, polaroid1FinalYPixels]
    );
    const polaroid1RotationTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -5]
    );
    const polaroid1ScaleTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0.8, 1]
    );

    const polaroid2InitialOffset = isMobile ? polaroids[2].mobileInitialOffset : polaroids[2].initialOffset;
    const polaroid2FinalOffset = isMobile ? polaroids[2].mobileFinalOffset : polaroids[2].finalOffset;
    const polaroid2FinalXPixels = (polaroid2FinalOffset.x / 100) * screenDimensions.width;
    const polaroid2FinalYPixels = (polaroid2FinalOffset.y / 100) * screenDimensions.height;
    const polaroid2InitialXPixels = (polaroid2InitialOffset.x / 100) * screenDimensions.width;
    const polaroid2InitialYPixels = (polaroid2InitialOffset.y / 100) * screenDimensions.height;
    
    const polaroid2XTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [polaroid2InitialXPixels, polaroid2FinalXPixels]
    );
    const polaroid2YTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [polaroid2InitialYPixels, polaroid2FinalYPixels]
    );
    const polaroid2RotationTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 5]
    );
    const polaroid2ScaleTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0.8, 1]
    );

    const polaroid3InitialOffset = isMobile ? polaroids[3].mobileInitialOffset : polaroids[3].initialOffset;
    const polaroid3FinalOffset = isMobile ? polaroids[3].mobileFinalOffset : polaroids[3].finalOffset;
    const polaroid3FinalXPixels = (polaroid3FinalOffset.x / 100) * screenDimensions.width;
    const polaroid3FinalYPixels = (polaroid3FinalOffset.y / 100) * screenDimensions.height;
    const polaroid3InitialXPixels = (polaroid3InitialOffset.x / 100) * screenDimensions.width;
    const polaroid3InitialYPixels = (polaroid3InitialOffset.y / 100) * screenDimensions.height;
    
    const polaroid3XTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [polaroid3InitialXPixels, polaroid3FinalXPixels]
    );
    const polaroid3YTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [polaroid3InitialYPixels, polaroid3FinalYPixels]
    );
    const polaroid3RotationTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -5]
    );
    const polaroid3ScaleTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0.8, 1]
    );

    const polaroidTransforms = [
        {
            xTransform: polaroid0XTransform,
            yTransform: polaroid0YTransform,
            rotationTransform: polaroid0RotationTransform,
            scaleTransform: polaroid0ScaleTransform
        },
        {
            xTransform: polaroid1XTransform,
            yTransform: polaroid1YTransform,
            rotationTransform: polaroid1RotationTransform,
            scaleTransform: polaroid1ScaleTransform
        },
        {
            xTransform: polaroid2XTransform,
            yTransform: polaroid2YTransform,
            rotationTransform: polaroid2RotationTransform,
            scaleTransform: polaroid2ScaleTransform
        },
        {
            xTransform: polaroid3XTransform,
            yTransform: polaroid3YTransform,
            rotationTransform: polaroid3RotationTransform,
            scaleTransform: polaroid3ScaleTransform
        }
    ];

    return (
        <div 
            ref={containerRef}
            className="relative w-full min-h-screen md:min-h-fit h-[1500px] md:h-[500px] p-0 m-0 pb-4 md:-mt-8 lg:-mt-12 flex items-center justify-center overflow-hidden"
        >
            {polaroids.map((polaroid, index) => {
                const transforms = polaroidTransforms[index];
                
                return (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            x: transforms.xTransform,
                            y: transforms.yTransform,
                            rotate: transforms.rotationTransform,
                            scale: transforms.scaleTransform,
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