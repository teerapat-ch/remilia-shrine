import { SideNavbar } from "@/components/side-navbar";

export default function BioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SideNavbar />

      <main className="ml-16 lg:ml-56 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif tracking-wider text-foreground mb-4">
              Biography
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-12 h-px bg-primary/40" />
            </div>
            <p className="text-muted-foreground font-(--font-cormorant) text-lg">
              The life and legacy of the Scarlet Devil
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-muted-foreground font-(--font-cormorant) text-lg leading-relaxed">
            <div className="p-8 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-serif text-foreground mb-4">
                Origins
              </h2>
              <p>
                Remilia Scarlet is a vampire who has lived for approximately 500
                years. She is the owner and head of the Scarlet Devil Mansion,
                located on the shores of the Misty Lake in Gensokyo.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-serif text-foreground mb-4">
                Abilities
              </h2>
              <p>
                Her most notable ability is the power to manipulate fate. This
                means she can control the destiny of any individual or object,
                making her one of the most powerful beings in Gensokyo.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-serif text-foreground mb-4">
                Personality
              </h2>
              <p>
                Despite her aristocratic demeanor and sometimes childish
                behavior, Remilia is genuinely caring toward her household staff
                and especially protective of her younger sister, Flandre
                Scarlet.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-serif text-foreground mb-4">
                Appearances
              </h2>
              <p>
                Remilia first appeared as the final boss of &ldquo;Embodiment of
                Scarlet Devil&rdquo; (2002), the sixth game in the Touhou
                Project series. She has since become one of the most popular and
                recognizable characters in the franchise.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
