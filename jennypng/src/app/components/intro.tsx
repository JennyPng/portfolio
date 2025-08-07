'use client'
import Card from "./card";
import cardsData from "../data/cards.json";
import Image from "next/image";
import { useState } from "react";

export default function Intro({className} : {className?: string}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-[400px] flex flex-col md:flex-row items-center md:-mt-10">
        <div 
          className="relative w-[100%] md:w-[1200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} 
        >
          <Image
            src={isHovered ? "/images/2025me2.png" : "/images/2025me1.png"}
            alt="Jenny"
            width={1200}
            height={1500}
            className="object-cover transition-opacity mx-0 duration-300"
          />
        </div>
        <Card {...cardsData.intro} maxWidth={400} className={`${className}`} />
      </div>
  );
}
 