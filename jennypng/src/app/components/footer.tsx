"use client"
import { useState } from "react";
import { useEffect } from "react";

const words = ["$2 heytea in china 🧋", "a love of documenting process 📝", "obsidian dev logging 💜", "a post-grad sense of free will 😇", "my favorite shade of green 🌱", "inspiration from other artists in tech 🎨"]

export default function Footer() {
    const [wordIdx, setWordIdx] = useState(0)
    
    useEffect(() => {
        setWordIdx(Math.floor(Math.random() * words.length))
    }, [])

    return(
        <footer className="text-sm p-4 mx-8 flex flex-col md:flex-row justify-between">
          <p>Jenny Peng © 2025</p>
          <p>built with next.js, tailwind css, figma, and <button className="bg-secondary-pink hover:bg-teal duration-170 hover:cursor-pointer" onClick={() => {setWordIdx((wordIdx + 1) % words.length)}}>{words[wordIdx]}</button></p>
        </footer>
    )
}