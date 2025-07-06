import Polaroid from "../components/polaroid"
import Image from "next/image"
import Link from "next/link"

function ImageTrigger({ text, imageSrc, altText, href } : { text: string, imageSrc: string, altText: string, href?: string }) {
    return (
        <span className="relative inline-block group">
            {href ? <Link href={href} className="bg-teal border-b-2 border-dotted border-gray-400 hover:border-gray-600 transition-colors duration-200 cursor-pointer" target="_blank">
                {text}
            </Link> : <span className="border-b-2 border-dotted border-gray-400 hover:border-gray-600 transition-colors duration-200 cursor-pointer">
                {text}
            </span>}
            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 w-[500px]">
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

                    From coding <ImageTrigger text="warrior cat games on Scratch" imageSrc="/images/greenfur.png" altText="image of warrior cat games on Scratch"></ImageTrigger>, to selling digital drawings on Deviantart, 
                    to <ImageTrigger text="selling clothing with original art" imageSrc="/images/picnic.png" altText="image of clothing designed" href="https://www.instagram.com/shop.cerulean"></ImageTrigger>, 
                    to <ImageTrigger text="singing and writing songs" imageSrc="/images/bittermilk.png" altText="image of me singing and writing songs" href="https://open.spotify.com/artist/0sWDV5UY1Rfbk4ZAR3HCUq"></ImageTrigger>, 
                    to <ImageTrigger text="planning photoshoots with friends" imageSrc="/images/chess.jpg" altText="photography example"></ImageTrigger>, I have always found creating to be the most meaningful way to spend my time.
                    <br></br>
                    <br></br>

                </p>
            </div>
        </div>
    )
}