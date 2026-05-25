import type { Metadata } from "next";
import { SideNavbar } from "@/components/side-navbar";
import { PrayerSection } from "@/components/prayer-section";

export const metadata: Metadata = {
  title: "Pray — Remilia Scarlet Shrine",
  description:
    "Offer your prayer to Remilia Scarlet, the eternal mistress of the Scarlet Devil Mansion. Leave your name in her registry of the faithful.",
};

export default function PrayPage() {
  return (
    <div className="min-h-screen bg-background">
      <SideNavbar />

      <main className="ml-16 lg:ml-56 py-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-serif tracking-wider text-foreground mb-4">
              Pray
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-linear-to-r from-transparent to-primary/50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-12 h-px bg-linear-to-l from-transparent to-primary/50" />
            </div>
            <p className="text-muted-foreground font-(--font-cormorant) text-lg leading-relaxed max-w-md mx-auto">
              Kneel before the Scarlet Devil and leave your name in her eternal
              registry. She sees all who come to her shrine.
            </p>
          </div>

          {/* Interactive section (client component) */}
          <PrayerSection />
        </div>
      </main>
    </div>
  );
}
