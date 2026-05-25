import type { Metadata } from "next";
import { SideNavbar } from "@/components/side-navbar";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery — Remilia Scarlet Shrine",
  description:
    "A curated gallery of Remilia Scarlet artwork from the Scarlet Devil Mansion shrine.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SideNavbar />

      <main className="ml-16 lg:ml-56 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-serif tracking-wider text-foreground mb-4">
              Gallery
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-12 h-px bg-primary/40" />
            </div>
            <p className="text-muted-foreground font-(--font-cormorant) text-lg leading-relaxed max-w-2xl mx-auto">
              Portraits and fan artwork celebrating Remilia Scarlet, the Scarlet
              Devil of Gensokyo. Select any image to view it larger.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </main>
    </div>
  );
}
