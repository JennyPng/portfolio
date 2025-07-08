import Image from "next/image";

interface BlogPostProps {
    title: string,
    date?: string,
    description?: string,
    image?: string
}

export default function BlogPostCard({ title, date, description, image } : BlogPostProps ) {
    return(
        <div className="relative w-[500px] h-[500px] transition-transform duration-175 hover:scale-105 brightness-107">
            <Image src="/images/notebook.png" fill alt="notebook image" className="object-cover"/>
            <div className="absolute inset-0 flex flex-col ml-[9rem] justify-center">
                {image && <Image src={image} width={220} height={220} alt="blog image" className="ml-2 mb-2"></Image>}
                <p className="text-md max-w-[220px] font-caveat font-[700]">{title}</p>
                {date && <p className="text-sm max-w-[220px] mb-2 font-caveat font-[500]">{new Date(date).toDateString()}</p>}
                <hr className="max-w-[200px] border-1 text-primary-green mb-2"></hr>
                {description && <p className="text-sm max-w-[200px] font-caveat font-[500]">{description}</p>}
            </div>
        </div>
    )
}