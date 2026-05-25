import type { Metadata } from "next"
import { SideNavbar } from "@/components/side-navbar"
import { RemiliaQuiz } from "@/components/remilia-quiz"

export const metadata: Metadata = {
  title: "Quiz — Remilia Scarlet Shrine",
  description: "Test your knowledge about the Scarlet Devil",
}

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-background">
      <SideNavbar />
      <main className="ml-16 lg:ml-56 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif tracking-wider text-foreground mb-4">
              Quiz
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-12 h-px bg-primary/40" />
            </div>
            <p className="text-muted-foreground font-(--font-cormorant) text-lg">
              Test your knowledge about the Scarlet Devil
            </p>
          </div>

          <RemiliaQuiz />
        </div>
      </main>
    </div>
  )
}
