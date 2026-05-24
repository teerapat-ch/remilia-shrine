import { SideNavbar } from "@/components/side-navbar";
import { HeroSection } from "@/components/hero-section";
import { ImageGallery } from "@/components/image-gallery";
import { AboutSection } from "@/components/about-section";
import { WhyBelovedSection } from "@/components/why-beloved-section";
import { SupportSection } from "@/components/support-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SideNavbar />

      <main className="ml-16 lg:ml-56">
        <HeroSection />
        <ImageGallery />
        <AboutSection />
        <WhyBelovedSection />
        <SupportSection />

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <div className="w-1 h-1 rotate-45 bg-primary" />
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <p className="text-muted-foreground font-(--font-cormorant) text-sm">
              © 2024 Remilia Scarlet Fan Shrine • Made with devotion
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
