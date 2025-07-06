"use client"
import Card from "./card";
import cardsData from "../data/cards.json";
import { CardProps } from "./card";
import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

const CardTags = ["featured", "all", "ar/vr", "web", "ai/ml", "game", "systems", "hackathon", "course" , "research"]

const projects : CardProps[] = cardsData.projects

// TODO check t's - would it be better to have this in folders rather than one json?
export default function Projects({className} : {className?: string}) {
    const [projectFilter, setProjectFilter] = useState("featured")

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 15 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.3,
                ease: easeOut
            }
        }
    };

    const filteredProjects = projects.filter((project) => {
        if (projectFilter === "all") return project;
        if (project.tags?.includes(projectFilter)) return project;
        return false;
    });

    const getColumnClass = () => {
        return projectFilter === "featured" 
            ? "projects-cards columns-1 md:columns-2 gap-8"
            : "projects-cards columns-1 md:columns-2 lg:columns-3 gap-8";
    };

    return(
        <div className={`${className}`} id="projects" scroll-mt="15px">
            <p className="text-4xl font-semibold align-middle text-secondary-green mb-4">projects</p>
            <div className="projects-filter flex flex-wrap pb-4">
                {CardTags.map((tag) => {
                    if (tag == projectFilter) {
                        return <button key={tag} className="p-2 text-tertiary-green mx-4 ml-0 bg-secondary-pink hover:bg-primary-pink hover:cursor-pointer duration-170">{tag}</button>
                    }
                    return <button onClick={(e) => setProjectFilter(tag)} key={tag} className="p-2 mx-4 ml-0 hover:bg-secondary-pink hover:cursor-pointer hover:text-tertiary-green duration-170">{tag}</button>
                })}
            </div>
            <AnimatePresence mode="wait">
                <motion.div 
                    key={projectFilter}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className={getColumnClass()}
                >
                    {filteredProjects.map((project) => (
                        <motion.div 
                            key={project.title} 
                            variants={itemVariants}
                            className="break-inside-avoid mb-8"
                        >
                            <Card {...project}></Card>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
