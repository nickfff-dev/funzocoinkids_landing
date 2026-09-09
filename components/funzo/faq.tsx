"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Section, SectionHeader } from "./shared"

/**
 * IMPORTANT — read before publishing:
 * The answers below assume FunzoCoin, inside the Kids program, is a
 * non-transferable in-app rewards/points mechanic (not a cryptocurrency).
 * That assumption must be confirmed against how the token actually works
 * before this goes live — the reviewer specifically flagged inconsistent
 * messaging between the website, LinkedIn ("utility token") and Instagram
 * ("education reward token"). If FunzoCoin is in fact a transferable
 * token, these answers need to be rewritten accordingly, and the
 * discrepancy across channels should be resolved first.
 */
const FAQS = [
  {
    q: "Is FunzoCoin a cryptocurrency?",
    a: "No. Inside the FunzoCoin Kids program, FunzoCoin is an educational rewards system — not a cryptocurrency, security or investment product.",
  },
  {
    q: "Does my child receive cryptocurrency?",
    a: "No. Children earn in-app FunzoCoin points for completing lessons, quizzes and offline activities. These points are for use within the FunzoCoin Kids program only.",
  },
  {
    q: "Can children buy or trade FunzoCoin?",
    a: "No. FunzoCoin points cannot be bought, sold or traded by children within the program.",
  },
  {
    q: "Can FunzoCoin have monetary value?",
    a: "No. FunzoCoin points earned in the Kids program carry no monetary value and are not redeemable for cash.",
  },
  {
    q: "Do parents need to provide a cryptocurrency wallet?",
    a: "No. No wallet, exchange account or crypto knowledge is required to take part in FunzoCoin Kids.",
  },
  {
    q: "Is FunzoCoin transferable outside of the FunzoCoin Kids program?",
    a: "No. FunzoCoin points earned through the Kids program are not transferable outside the platform.",
  },
  {
    q: "What is the relationship between FunzoCoin Kids and the broader Funzo ecosystem?",
    a: "FunzoCoin Kids is our children's education program. We are clarifying and will publish the precise legal and organizational relationship between FunzoCoin Kids, Funzo Coin, and any affiliated entities in our Who We Are section.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="Frequently Asked Questions"
        title="Is FunzoCoin a cryptocurrency? Let's be direct."
        sub="FunzoCoin Kids is an education initiative. Here are straight answers to the questions we get asked most about the FunzoCoin name."
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border bg-card"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-medium sm:text-base">{f.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-4 text-sm text-muted-foreground"
                >
                  {f.a}
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
