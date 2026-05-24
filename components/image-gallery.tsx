"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const placeholderImages = [
  {
    id: 1,
    src: "/remilia_full.png",
    alt: "Remilia Scarlet artwork 1",
  },
  {
    id: 2,
    src: "/remilia_pose.png",
    alt: "Remilia Scarlet artwork 2",
  },
  {
    id: 3,
    src: "/remilia_wine.png",
    alt: "Remilia Scarlet artwork 3",
  },
  {
    id: 4,
    src: "/remilia_front.png",
    alt: "Remilia Scarlet artwork 4",
  },
  {
    id: 5,
    src: "/remilia_drunk.png",
    alt: "Remilia Scarlet artwork 5",
  },
]

export function ImageGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wider text-foreground mb-4">
            Gallery
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {placeholderImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 transition-all duration-500 ${
                    index === selectedIndex ? "opacity-100 scale-100" : "opacity-50 scale-95"
                  }`}
                >
                  <div className="relative aspect-3/4 bg-card border border-border rounded-lg overflow-hidden group">
                    {/* Placeholder with gradient background */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-card to-accent/10 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-primary/40 rounded-lg flex items-center justify-center">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = "none"
                            }}
                          />
                          <span className="text-primary/60 text-2xl">+</span>
                        </div>
                        <p className="text-muted-foreground text-sm font-(--font-cormorant)">
                          Image {image.id}
                        </p>
                        <p className="text-muted-foreground/60 text-xs mt-1">
                          Replace with your artwork
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {placeholderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
