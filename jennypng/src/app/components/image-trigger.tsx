import Link from "next/link"
import Image from "next/image"

export function ImageTrigger({ text, imageSrc, altText, href } : { text: string, imageSrc: string, altText: string, href?: string }) {
    return (
        <span className="relative inline-block group">
            {href ? <Link href={href} className="bg-teal border-b-2 border-dotted border-gray-400 hover:border-gray-600 transition-colors duration-200 cursor-pointer" target="_blank">
                {text}
            </Link> : <span className="border-b-2 border-dotted border-gray-400 hover:border-gray-600 transition-colors duration-200 cursor-pointer">
                {text}
            </span>}
            <span className="absolute left-0 top-full mt-2 md:left-full md:ml-2 md:top-1/2 md:transform md:-translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 w-[500px]">
                <Image 
                    src={imageSrc} 
                    alt={altText} 
                    width={400}
                    height={500}
                    className="w-[400px] h-full rounded-sm shadow-lg object-cover"
                />
            </span>
        </span>
    )
}