import { Share2, Palette, MessageCircle, Coffee } from "lucide-react"

const supportWays = [
  {
    icon: Share2,
    title: "Spread the Word",
    description:
      "Share this website with fellow Touhou fans and help grow our community of Remilia admirers.",
  },
  {
    icon: Palette,
    title: "Submit Artwork",
    description:
      "Are you an artist? Submit your Remilia fanart to be featured in our gallery collection.",
  },
  {
    icon: MessageCircle,
    title: "Join the Forum",
    description:
      "Participate in discussions, share theories, and connect with other fans in our community forum.",
  },
  {
    icon: Coffee,
    title: "Support the Site",
    description:
      "Help keep this shrine running by supporting the hosting and development costs.",
  },
]

export function SupportSection() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wider text-foreground mb-4">
            Support The Mistress
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <p className="text-muted-foreground font-(--font-cormorant) text-lg max-w-2xl mx-auto">
            There are many ways you can contribute to this community and show your
            appreciation for Remilia Scarlet.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportWays.map((way, index) => {
            const Icon = way.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-2">
                  {way.title}
                </h3>
                <p className="text-sm text-muted-foreground font-(--font-cormorant) leading-relaxed mb-4 flex-1">
                  {way.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-(--font-cormorant) text-sm">
            This is a fan-made website. Touhou Project and all related characters are
            property of Team Shanghai Alice.
          </p>
        </div>
      </div>
    </section>
  )
}
