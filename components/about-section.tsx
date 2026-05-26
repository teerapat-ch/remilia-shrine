export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wider text-foreground mb-4">
            About This Shrine
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center">
          <p className="text-lg md:text-xl text-foreground font-(--font-cormorant) leading-relaxed">
            Welcome to the unofficial fan shrine dedicated to{" "}
            <span className="text-primary font-semibold">Remilia Scarlet</span>,
            the beloved vampire mistress from the Touhou Project series.
          </p>

          <p className="text-base md:text-lg text-muted-foreground font-(--font-cormorant) leading-relaxed">
            This website serves as a gathering place for fans who admire the elegance,
            charisma, and enduring charm of Gensokyo&apos;s most distinguished vampire.
            Here you&apos;ll find artwork, discussions, and a community of devoted admirers.
          </p>

          <div className="pt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2">Fan Art</h3>
              <p className="text-sm text-muted-foreground font-(--font-cormorant)">
                Curated collection of beautiful artwork from talented artists
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">💬</span>
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2">Community</h3>
              <p className="text-sm text-muted-foreground font-(--font-cormorant)">
                Connect with fellow fans and share your appreciation
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">📚</span>
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2">Lore</h3>
              <p className="text-sm text-muted-foreground font-(--font-cormorant)">
                Deep dives into the character&apos;s history and significance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
