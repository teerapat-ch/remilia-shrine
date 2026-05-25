"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface QuizChoice {
  id: string
  text: string
}

interface QuizQuestion {
  question: string
  choices: QuizChoice[]
  correctId: string
  explanation: string
}

const quizData: QuizQuestion[] = [
  {
    question: "What is Remilia Scarlet's species?",
    choices: [
      { id: "A", text: "Vampire" },
      { id: "B", text: "Magician" },
      { id: "C", text: "Ghost" },
      { id: "D", text: "Fairy" },
    ],
    correctId: "A",
    explanation:
      'Remilia Scarlet is a vampire, often referred to as the "Scarlet Devil." She is one of the most powerful youkai in Gensokyo.',
  },
  {
    question: "What is the name of Remilia's signature spell card, which references Norse mythology?",
    choices: [
      { id: "A", text: "Scarlet Sign" },
      { id: "B", text: "Spear the Gungnir" },
      { id: "C", text: "Vampire Illusion" },
      { id: "D", text: "Red Magic" },
    ],
    correctId: "B",
    explanation:
      '"Spear the Gungnir" is Remilia\'s most famous spell card, named after Odin\'s spear Gungnir from Norse mythology.',
  },
  {
    question: "What is the name of the mansion Remilia Scarlet lives in?",
    choices: [
      { id: "A", text: "Hakurei Shrine" },
      { id: "B", text: "Scarlet Devil Mansion" },
      { id: "C", text: "Myouren Temple" },
      { id: "D", text: "Moriya Shrine" },
    ],
    correctId: "B",
    explanation:
      "The Scarlet Devil Mansion is the residence of Remilia, her sister Flandre, and their servants including Sakuya Izayoi, Patchouli Knowledge, and Hong Meiling.",
  },
  {
    question: "Who is Remilia's younger sister?",
    choices: [
      { id: "A", text: "Sakuya Izayoi" },
      { id: "B", text: "Hong Meiling" },
      { id: "C", text: "Patchouli Knowledge" },
      { id: "D", text: "Flandre Scarlet" },
    ],
    correctId: "D",
    explanation:
      "Flandre Scarlet is Remilia's younger sister, also a vampire. She was sealed in the basement of the Scarlet Devil Mansion for 495 years.",
  },
  {
    question: "What ability does Remilia Scarlet possess?",
    choices: [
      { id: "A", text: "Manipulation of time" },
      { id: "B", text: "Manipulation of fate" },
      { id: "C", text: "Control over darkness" },
      { id: "D", text: "Flight" },
    ],
    correctId: "B",
    explanation:
      "Remilia Scarlet's ability is the manipulation of fate. She can manipulate destiny, though the exact extent and limitations of this power remain mysterious.",
  },
]

function getChoiceState(questionIndex: number, choiceId: string, correctId: string, selectedId: string | undefined) {
  if (!selectedId) return "unselected"
  if (selectedId === choiceId && choiceId === correctId) return "correct-selected"
  if (selectedId === choiceId && choiceId !== correctId) return "wrong-selected"
  if (selectedId !== choiceId && choiceId === correctId) return "correct-unselected"
  return "dimmed"
}

function ChoiceLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border text-sm font-medium shrink-0">
      {children}
    </span>
  )
}

export function RemiliaQuiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const totalQuestions = quizData.length
  const answeredCount = Object.keys(answers).length
  const correctCount = quizData.filter((q, i) => answers[i] === q.correctId).length

  function handleSelect(questionIndex: number, choiceId: string) {
    if (answers[questionIndex] !== undefined) return
    setAnswers((prev) => ({ ...prev, [questionIndex]: choiceId }))
  }

  function handleReset() {
    setAnswers({})
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-(--font-cormorant) text-muted-foreground">Score</span>
          <span className="text-2xl font-serif tracking-wider text-foreground">
            {answeredCount > 0 ? correctCount : 0}
          </span>
          <span className="text-muted-foreground font-(--font-cormorant) text-lg">
            / {totalQuestions}
          </span>
        </div>
        <button
          onClick={handleReset}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md border transition-colors cursor-pointer",
            "text-muted-foreground hover:text-foreground hover:bg-accent",
            answeredCount === 0 && "opacity-50 pointer-events-none",
          )}
        >
          Reset
        </button>
      </div>

      {quizData.map((q, qi) => {
        const selectedId = answers[qi]
        const isAnswered = selectedId !== undefined
        const isCorrect = isAnswered && selectedId === q.correctId

        return (
          <div
            key={qi}
            className="rounded-xl border bg-card text-card-foreground shadow-sm"
          >
            <div className="p-6 pb-0">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-serif shrink-0 mt-0.5">
                  {qi + 1}
                </span>
                <h3 className="text-lg font-serif tracking-wider text-foreground pt-1 leading-relaxed">
                  {q.question}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {q.choices.map((choice) => {
                const state = getChoiceState(qi, choice.id, q.correctId, selectedId)
                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelect(qi, choice.id)}
                    disabled={isAnswered}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all cursor-pointer",
                      state === "unselected" &&
                        "border-border hover:border-primary/50 hover:bg-accent/50",
                      state === "correct-selected" &&
                        "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200",
                      state === "wrong-selected" &&
                        "border-red-400 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300",
                      state === "correct-unselected" &&
                        "border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300",
                      state === "dimmed" &&
                        "border-border opacity-40",
                    )}
                  >
                    <ChoiceLabel>{choice.id}</ChoiceLabel>
                    <span className="font-(--font-cormorant) text-base">{choice.text}</span>
                    {state === "correct-selected" && (
                      <span className="ml-auto text-emerald-600 dark:text-emerald-400 text-sm font-medium">✓</span>
                    )}
                    {state === "wrong-selected" && (
                      <span className="ml-auto text-red-500 dark:text-red-400 text-sm font-medium">✗</span>
                    )}
                    {state === "correct-unselected" && (
                      <span className="ml-auto text-emerald-600 dark:text-emerald-400 text-sm font-medium">✓</span>
                    )}
                  </button>
                )
              })}
            </div>

            {isAnswered && (
              <div
                className={cn(
                  "mx-6 mb-6 p-4 rounded-lg text-sm leading-relaxed",
                  isCorrect
                    ? "bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200"
                    : "bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200",
                )}
              >
                <span className="font-medium block mb-1">
                  {isCorrect ? "Correct!" : "Not quite."}
                </span>
                {q.explanation}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
