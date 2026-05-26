"use client"

import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("gallery")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 opacity-30" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/20 rotate-12 opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-linear-to-r from-transparent to-primary/60" />
          <div className="w-2 h-2 rotate-45 border border-primary" />
          <div className="w-16 h-px bg-linear-to-l from-transparent to-primary/60" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wider text-foreground mb-6">
          <span className="block text-primary">Remilia</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 tracking-[0.3em] text-muted-foreground">
            Scarlet
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground font-(--font-cormorant) leading-relaxed max-w-2xl mx-auto mb-4">
          The Eternal Mistress of the Scarlet Devil Mansion
        </p>

        {/* Description */}
        <p className="text-base text-muted-foreground/80 font-(--font-cormorant) leading-relaxed max-w-xl mx-auto mb-12">
          A charismatic vampire of approximately 500 years, ruling over Gensokyo&apos;s most prestigious mansion with elegance, power, and an undying spirit.
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-24 h-px bg-linear-to-r from-transparent to-primary/40" />
          <div className="text-primary text-xl">✦</div>
          <div className="w-24 h-px bg-linear-to-l from-transparent to-primary/40" />
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
