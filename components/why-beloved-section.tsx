import { Heart, Sparkles, Crown, Moon } from "lucide-react"

const reasons = [
  {
    icon: Crown,
    title: "Charismatic Leadership",
    description:
      "As the head of the Scarlet Devil Mansion, Remilia commands respect with her natural authority and aristocratic bearing, while maintaining a playful and mischievous personality.",
  },
  {
    icon: Moon,
    title: "Timeless Elegance",
    description:
      "Her gothic-lolita aesthetic, combined with her vampire nature, creates an unforgettable visual presence that has captivated fans for decades.",
  },
  {
    icon: Sparkles,
    title: "Compelling Abilities",
    description:
      "The power to manipulate fate itself makes her one of the most intriguing characters in Gensokyo, adding depth to her already fascinating persona.",
  },
  {
    icon: Heart,
    title: "Endearing Personality",
    description:
      "Behind her proud exterior lies a character who cares deeply for her household, especially her sister Flandre, showing a softer, more relatable side.",
  },
]

export function WhyBelovedSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wider text-foreground mb-4">
            Why She Is Beloved
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <p className="text-muted-foreground font-[var(--font-cormorant)] text-lg max-w-2xl mx-auto">
            For over two decades, Remilia Scarlet has captured the hearts of fans worldwide.
            Here&apos;s what makes her so special.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-foreground mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground font-[var(--font-cormorant)] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl text-foreground font-[var(--font-cormorant)] italic max-w-3xl mx-auto">
            &ldquo;The night belongs to those who dare to embrace it.&rdquo;
          </blockquote>
          <p className="text-primary mt-4 tracking-wider text-sm">— Remilia Scarlet</p>
        </div>
      </div>
    </section>
  )
}
