"use client"
import Card from "./card";
import cardsData from "../data/cards.json";
import { CardProps } from "./card";
import { useState } from "react";

const CardTags = ["featured", "all", "ar/vr", "web", "game", "hackathon", "course" , "research" , "design"]

const projects : CardProps[] = cardsData.projects

// TODO check t's - would it be better to have this in folders rather than one json?
export default function Projects({className} : {className?: string}) {
    const [projectFilter, setProjectFilter] = useState("featured")

    return(
        <div className={`projects ${className}`}>
            <h1 className="text-md align-middle text-tertiary-green">projects</h1>
            <div className="projects-filter flex flex-wrap pb-4">
                {CardTags.map((tag) => {
                    if (tag == projectFilter) {
                        return <button key={tag} className="p-2 text-tertiary-green mx-4 ml-0 bg-secondary-pink hover:bg-primary-pink hover:cursor-pointer duration-170">{tag}</button>
                    }
                    return <button onClick={(e) => setProjectFilter(tag)} key={tag} className="p-2 mx-4 ml-0 hover:bg-secondary-pink hover:cursor-pointer hover:text-tertiary-green duration-170">{tag}</button>
                })}
            </div>
            <div className="projects-cards grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {
                projects.filter((project) => {
                    if (projectFilter == "all") return project
                    if (project.tags?.includes(projectFilter)) return project
                }).map((project) => {
                    return <Card key={project.title} className="" {...project}></Card>
                })
            }
            </div>
        </div>
    )
}
