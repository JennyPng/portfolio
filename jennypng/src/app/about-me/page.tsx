import Polaroid from "../components/polaroid"

function ImageTrigger() {

}

export default function AboutMe() {
    return (
         <div className="flex flex-row flex-wrap min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Polaroid imageSrc="/images/grad.jpg" altText="picture of me" caption="I graduated from the University of Washington with a bachelors in CS 🥳" />
            <div className="flex-col flex-1 ml-8">
                <h1>hi! i'm jenny, and</h1>
                <p className="max-w-[50%] text-tertiary-green">
                    I have always loved to create, though the medium has shifted over the years.
                    <br></br>
                    <br></br>

                    From coding warrior cat games on Scratch, to selling digital drawings on Deviantart, to playing violin in orchestras, to singing and writing songs, I have always found creating to be the most meaningful way to spend my time.
                    <br></br>
                    <br></br>

                </p>
            </div>
        </div>
    )
}