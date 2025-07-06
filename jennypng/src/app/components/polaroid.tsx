import Image from "next/image";

export default function Polaroid({ imageSrc, altText, caption }: { imageSrc: string; altText: string; caption?: string }) {
    return (
        <div className="bg-white min-w-[340px] p-4 mb-8 pb-8 shadow-lg -rotate-1 transition-transform duration-300 hover:rotate-0 hover:scale-105 hover:animate-[jiggle_0.6s_ease-in-out_forwards] w-[340px] h-[470px]">
            <Image src={imageSrc} width={400} height={400} alt={altText} className="object-cover w-[320px] h-[350px]" />
            {caption && <p className="text-sm text-secondary-green mt-4 font-caveat font-[500]">{caption}</p>}
        </div>
    )
}