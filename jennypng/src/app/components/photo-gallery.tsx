"use client"
import Image from "next/image"
import React, { useEffect, useMemo, useState } from "react"
import { formatText } from "./card"

type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

type PhotoGalleryProps = {
  images: GalleryImage[]
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number }>({
    width: 1600,
    height: 900,
  })

  const activeImage = useMemo(
    () => (activeIndex !== null ? images[activeIndex] : null),
    [activeIndex, images]
  )

  useEffect(() => {
    if (activeIndex === null) return

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null)
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % images.length
        )
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? images.length - 1 : (prev - 1 + images.length) % images.length
        )
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [activeIndex])

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {images.map((image, idx) => (
          <button
            key={image.src}
            className="group relative w-full overflow-hidden rounded-md aspect-square bg-secondary-pink/30"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Open ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 600px) 45vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover hover:cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="flex items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === null ? 0 : (prev - 1 + images.length) % images.length
                  )
                }
                className="rounded-md hover:cursor-pointer bg-background text-secondary-green px-3 py-2 text-sm shadow-md hover:bg-secondary-pink/60 transition"
                aria-label="Previous image"
              >
                ←
              </button>
            )}

            <div className="relative bg-background rounded-md shadow-xl">
              <div className="flex justify-center items-center w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={naturalSize.width}
                  height={naturalSize.height}
                  sizes="100vw"
                  loading="lazy"
                  onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                    setNaturalSize({ width: naturalWidth, height: naturalHeight })
                  }
                  className="h-auto w-auto max-w-full max-h-[80vh] object-contain"
                />
              </div>
              {activeImage.caption && (
                <div className="p-4 text-sm text-secondary-green max-w-full">
                  {formatText(activeImage.caption, "sm")}
                </div>
              )}
            </div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % images.length
                  )
                }
                className="rounded-md bg-background hover:cursor-pointer text-secondary-green px-3 py-2 text-sm shadow-md hover:bg-secondary-pink/60 transition"
                aria-label="Next image"
              >
                →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

