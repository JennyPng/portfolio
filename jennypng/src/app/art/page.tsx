import { PhotoGallery } from "../components/photo-gallery"

const images = [
    { src: "/images/swing.jpg", alt: "girl swinging large chess piece", caption: "one of my favorite grad photos i took of my friend" },
    { src: "/images/rem.jpg", alt: "dxarts project", caption: "[remember where you came from?](https://github.com/JennyPng/remember-where-you-came-from)" },
    { src: "/images/frog.png", alt: "frog", caption: "lazy frog" },
    { src: "/images/orv.png", alt: "digital painting", caption: "characters from my favorite webnovel, for a color palette challenge with my friend" },
    { src: "/images/necklace.png", alt: "a necklace", caption: "a necklace i made" },
    { src: "/images/blossom.jpg", alt: "girl standing under cherry blossoms at night", caption: "my friend under blooming cherry blossoms at night, in the quad" },
]

export default function Art() {
    return (
         <div className="items-center justify-center min-h-screen p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] space-y-6">
            <div className="space-y-2">
                <p className="text-secondary-green">- some curated creations</p>
            </div>
            <PhotoGallery images={images} />
        </div>
    )
}