"use client"
import { motion } from "framer-motion"
import { Section, fadeUp } from "./shared"
import { CheckCircle2, Sparkles } from "lucide-react"

export function About() {
  const items = [
    "Financial literacy",
    "AI fundamentals",
    "Blockchain technology",
    "Digital citizenship",
    "Online safety",
    "Creativity & entrepreneurship",
  ]

  // "Languages" intentionally isn't a numeric tile — see LANGUAGES below.
  // Claiming "5 Languages" as a stat implies 5 are live today; be explicit
  // about which are actually available vs planned instead. Update this
  // list (and the pilot/planned split) once confirmed with the team.
  const statTiles = [
    { n: "6", l: "Pillars" },
    { n: "2026", l: "Founded" },
  ]

  const LANGUAGES = [
    { name: "English", status: "available" as const },
    { name: "Kiswahili", status: "available" as const },
    // TODO: confirm additional languages before listing as "available" —
    // placeholders below reflect the roadmap, not current availability.
    { name: "French", status: "planned" as const },
    { name: "Amharic", status: "planned" as const },
    { name: "Portuguese", status: "planned" as const },
  ]

  return (
    <Section id="about" className="adinkra-pattern">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
            About
          </span>

          <h2 className="text-3xl font-bold sm:text-5xl">
            What is <span className="gradient-text">FunzoCoin Kids</span>?
          </h2>

          <p className="mt-3 text-sm font-semibold text-foreground/70">
            Africa&apos;s Future-Skills Education Initiative for Children &
            Youth
          </p>

          <p className="mt-5 text-lg text-muted-foreground">
            FunzoCoin Kids is an educational and innovation-driven initiative
            helping young people understand the technologies shaping the future
            digital economy. Through interactive workshops, competitions,
            storytelling, media, and innovation labs, we prepare African youth
            to lead — not just participate.
          </p>

          <p className="mt-3 rounded-xl border border-dashed border-(--purple-glow)/40 px-4 py-3 text-sm text-muted-foreground">
            We&apos;re currently in our{" "}
            <strong className="text-foreground">pilot phase</strong> — testing
            our curriculum, reward model, technology and delivery approach in
            Nairobi before scaling. See our{" "}
            <a href="#impact" className="underline underline-offset-2">
              launch progress
            </a>
            .
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {items.map((i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-purple-glow" />
                {i}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="mb-2 text-xs font-semibold tracking-wide text-foreground/70 uppercase">
              Languages
            </div>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <span
                  key={l.name}
                  className={`rounded-full px-3 py-1 text-xs ${
                    l.status === "available"
                      ? "glass font-medium"
                      : "border border-dashed border-input text-muted-foreground"
                  }`}
                >
                  {l.name}
                  {l.status === "planned" && " (planned)"}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="gradient-bg animated-gradient glow-shadow aspect-square rounded-3xl p-1">
            <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-card p-8">
              <div>
                <Sparkles className="h-8 w-8 text-purple-glow" />
                <h3 className="mt-4 text-2xl font-bold">
                  A future-skills academy for African youth
                </h3>
                <p className="mt-3 text-muted-foreground">
                  From rural classrooms to Nairobi innovation hubs — we meet
                  kids where they are and unlock what they can become.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {statTiles.map((s) => (
                  <div key={s.l} className="glass rounded-xl p-3 text-center">
                    <div className="gradient-text text-2xl font-bold">
                      {s.n}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
