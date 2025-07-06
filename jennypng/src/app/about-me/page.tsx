import Polaroid from "../components/polaroid"
import ScatterPolaroids from "../components/scatter-polaroids"
import { ImageTrigger } from "../components/image-trigger"


export default function AboutMe() {
    return (
        <div className="w-full">
            <div className="flex flex-col overflow-x-hidden sm:flex-row min-h-screen p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Polaroid imageSrc="/images/grad.jpg" altText="picture of me" caption="I graduated from the University of Washington with a bachelors in CS 🥳" />
                <div className="flex-col flex-1 mt-8 sm:mt-0 sm:ml-8">
                    <h1>hi! i'm jenny, and</h1>
                    <p className="max-w-full sm:max-w-[65%] text-tertiary-green">
                        I have always loved to create, though the medium of choice has shifted over the years.
                        <br></br>
                        <br></br>

                        From coding <ImageTrigger text="warrior cat games on Scratch" imageSrc="/images/greenfur.png" altText="image of warrior cat games on Scratch"></ImageTrigger>, to <ImageTrigger imageSrc="" altText="photo of art vending" text="making art prints & stickers"></ImageTrigger>,
                        to <ImageTrigger text="selling clothing with original art" imageSrc="/images/picnic.png" altText="image of clothing designed" href="https://www.instagram.com/shop.cerulean"></ImageTrigger>, 
                        to <ImageTrigger text="singing and writing songs" imageSrc="/images/bittermilk.png" altText="image of me singing and writing songs" href="https://open.spotify.com/artist/0sWDV5UY1Rfbk4ZAR3HCUq"></ImageTrigger>, 
                        to <ImageTrigger text="planning photoshoots with friends" imageSrc="/images/chess.jpg" altText="photography example"></ImageTrigger>, I have always found creating to be the most meaningful way to spend my time.
                        <br></br>
                        <br></br>

                    </p>
                </div>
            </div>
            <div className="w-full">
                <ScatterPolaroids />
            </div>
        </div>
    )
}