"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { remiliaGalleryImages } from "@/lib/remilia-gallery";

export function GalleryGrid() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = remiliaGalleryImages[activeIndex];

  const openAt = useCallback((index: number) => {
    setActiveIndex(index);
    setOpen(true);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex(
      (i) => (i - 1 + remiliaGalleryImages.length) % remiliaGalleryImages.length
    );
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % remiliaGalleryImages.length);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-10">
        {remiliaGalleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => openAt(index)}
            className={`group relative overflow-hidden rounded-lg border border-border bg-card text-left transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            aria-label={`View ${image.title}`}
          >
            <div
              className={`relative w-full bg-primary/5 ${
                index === 0 ? "aspect-4/5 md:aspect-auto md:h-full min-h-70" : "aspect-3/4"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 768px) 50vw, 480px"
                    : "(max-width: 768px) 50vw, 320px"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-sm text-foreground tracking-wide">
                  {image.title}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl border-border bg-card p-0 overflow-hidden gap-0">
          <DialogTitle className="sr-only">{activeImage.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {activeImage.alt}
          </DialogDescription>

          <div className="relative aspect-3/4 w-full bg-primary/5 md:aspect-4/3">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-contain"
              priority
            />

            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 py-4 border-t border-border flex items-center justify-between gap-4">
            <div>
              <p className="font-serif text-foreground tracking-wide">
                {activeImage.title}
              </p>
              <p className="text-sm text-muted-foreground font-(--font-cormorant) mt-1">
                {activeIndex + 1} of {remiliaGalleryImages.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
