"use client"
import Card from "./card";
import cardsData from "../data/cards.json";
import { CardProps } from "./card";

const experience: CardProps[] = cardsData.experience || []

export default function Experience({className} : {className?: string}) {
    const filteredExperience = experience;

    return(
        <div className={`${className}`} id="experience" scroll-mt="15px">
            <p className="text-4xl font-semibold align-middle text-secondary-green mb-4">experience</p>
            <div className="experience-cards flex flex-col gap-6">
                {filteredExperience.map((exp) => (
                    <div key={exp.title}>
                        <Card {...exp}></Card>
                    </div>
                ))}
            </div>
        </div>
    )
} 