import { SideNavbar } from "@/components/side-navbar"
import { MessageCircle, Users, Clock } from "lucide-react"

const forumTopics = [
  {
    title: "Favorite Remilia Spell Cards",
    author: "ScarletFan42",
    replies: 24,
    lastActive: "2 hours ago",
  },
  {
    title: "Best fan artwork of the month",
    author: "MistyLake",
    replies: 56,
    lastActive: "5 hours ago",
  },
  {
    title: "Remilia vs Other Touhou Vampires",
    author: "GensokyoExplorer",
    replies: 89,
    lastActive: "1 day ago",
  },
  {
    title: "The Scarlet Devil Mansion lore discussion",
    author: "LoreKeeper",
    replies: 42,
    lastActive: "2 days ago",
  },
  {
    title: "Introduce yourself!",
    author: "Admin",
    replies: 234,
    lastActive: "3 hours ago",
  },
]

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-background">
      <SideNavbar />
      
      <main className="ml-16 lg:ml-56 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif tracking-wider text-foreground mb-4">
              Forum
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-12 h-px bg-primary/40" />
            </div>
            <p className="text-muted-foreground font-[var(--font-cormorant)] text-lg">
              Discuss all things Remilia with fellow fans
            </p>
          </div>

          {/* Forum Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="p-4 bg-card border border-border rounded-lg text-center">
              <MessageCircle className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-serif text-foreground">1,247</p>
              <p className="text-xs text-muted-foreground">Topics</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg text-center">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-serif text-foreground">3,891</p>
              <p className="text-xs text-muted-foreground">Members</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg text-center">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-serif text-foreground">24/7</p>
              <p className="text-xs text-muted-foreground">Active</p>
            </div>
          </div>

          {/* Topic List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif text-foreground">Recent Topics</h2>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-serif tracking-wider hover:bg-accent transition-colors">
                New Topic
              </button>
            </div>

            {forumTopics.map((topic, index) => (
              <div
                key={index}
                className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-foreground font-serif mb-1 hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-[var(--font-cormorant)]">
                      by {topic.author}
                    </p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-muted-foreground">
                      <span className="text-primary">{topic.replies}</span> replies
                    </p>
                    <p className="text-muted-foreground/60 text-xs">
                      {topic.lastActive}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 p-6 bg-card/50 border border-border rounded-lg text-center">
            <p className="text-muted-foreground font-[var(--font-cormorant)]">
              Full forum functionality coming soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
