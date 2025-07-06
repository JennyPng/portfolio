import Polaroid from "../components/polaroid"
import Image from "next/image"

function ImageTrigger({ text, imageSrc, altText } : { text: string, imageSrc: string, altText: string }) {
    return (
        <span className="relative inline-block group">
            <span className="border-b-2 border-dotted border-gray-400 hover:border-gray-600 transition-colors duration-200 cursor-pointer">
                {text}
            </span>
            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 w-[500px]">
                <Image 
                    src={imageSrc} 
                    alt={altText} 
                    width={500}
                    height={500}
                    className="w-full h-[500px] rounded-sm shadow-lg object-cover"
                />
            </span>
        </span>
    )
}

export default function AboutMe() {
    return (
         <div className="flex flex-row flex-wrap min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Polaroid imageSrc="/images/grad.jpg" altText="picture of me" caption="I graduated from the University of Washington with a bachelors in CS 🥳" />
            <div className="flex-col flex-1 ml-8">
                <h1>hi! i'm jenny, and</h1>
                <p className="max-w-[70%] text-tertiary-green">
                    I have always loved to create, though the medium has shifted over the years.
                    <br></br>
                    <br></br>

                    From coding warrior cat games on Scratch, to selling digital drawings on Deviantart, to <ImageTrigger text="selling clothing with original art" imageSrc="/images/emo.gif" altText="image of clothing designed"></ImageTrigger>, to singing and writing songs, I have always found creating to be the most meaningful way to spend my time.
                    <br></br>
                    <br></br>

                </p>
            </div>
        </div>
    )
}