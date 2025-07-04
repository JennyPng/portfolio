import Image from "next/image";

interface BlogPostProps {
    title: string,
    date?: string,
    description?: string,
    image?: string
}

export default function BlogPostCard({ title, date, description, image } : BlogPostProps ) {
    return(
        <div className="relative w-[400px] h-[400px] transition-transform duration-175 hover:scale-105 brightness-107">
            <Image src="/images/notebook.png" fill alt="notebook image" className="object-cover"/>
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-md max-w-[150px] top-0">{title}</p>
            </div>
        </div>
    )
}