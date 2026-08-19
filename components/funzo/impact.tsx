"use client";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

import { Counter } from "@/components/funzo/Counter";
import { Section, SectionHeader } from "./shared";

/**
 * IMPORTANT — read before editing numbers:
 * `currentStats` must only contain figures the team can stand behind if
 * asked "how do you know that?" (a workshop register, a school MOU, etc).
 * Everything aspirational belongs in `ambitionStats` instead. Mixing the two
 * on a single page is the #1 credibility risk flagged in the site review —
 * do not let this list silently drift out of sync with what's shown
 * elsewhere on the site (hero badges, about.tsx stat tiles, etc).
 */
const currentStats = [
  { n: 100, s: "+", l: "Students reached" },
  { n: 10, s: "", l: "Schools engaged" },
  { n: 5, s: "+", l: "Workshops delivered" },
  { n: 1, s: "", l: "Active partnerships" },
];

const ambitionStats = [
  { n: 10, s: "", l: "African countries by 2030" },
  { n: 1, s: "M+", l: "Learners reached by 2030" },
  { n: 500, s: "+", l: "Partner schools by 2030" },
];

export function Impact() {
  return (
    <Section id="impact" className="adinkra-pattern">
      <SectionHeader
        eyebrow="Our Impact"
        title="Measurable progress. Continental ambition."
        sub="We report current, verified reach separately from our 2030 ambition — so partners always know exactly where we stand today."
      />

      <div className="mb-3 text-sm font-semibold text-foreground/70 uppercase tracking-wide">
        Current impact
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {currentStats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-4xl sm:text-5xl font-bold gradient-text">
              <Counter to={s.n} suffix={s.s} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mb-16 max-w-2xl">
        Updated as programmes launch and are verified. Full methodology available in our
        downloadable Impact Report (coming soon).
      </p>

      <div className="mb-3 text-sm font-semibold text-foreground/70 uppercase tracking-wide">
        2030 ambition
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {ambitionStats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-dashed border-[var(--purple-glow)]/40 p-6 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold text-[var(--purple-glow)]">
              <Counter to={s.n} suffix={s.s} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative glass rounded-3xl p-8 sm:p-12 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 h-4 w-4 rounded-full bg-[var(--cyan-glow)] animate-pulse" />
          <div
            className="absolute top-1/2 left-1/2 h-4 w-4 rounded-full bg-[var(--purple-glow)] animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 h-4 w-4 rounded-full bg-[var(--gold)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative flex flex-col lg:flex-row items-center gap-8">
          <Globe2
            className="h-32 w-32 sm:h-40 sm:w-40 text-[var(--electric)] opacity-80"
            strokeWidth={1}
          />
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Scaling across Africa — and beyond.
            </h3>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Starting in Nairobi, our roadmap brings future-skills education
              to 10 African countries by 2030, through strategic partnerships
              with schools, governments, technology companies and CSR
              sponsors at every step.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Kenya", "Uganda", "Tanzania", "Rwanda", "Ghana", "Nigeria", "South Africa"].map(
                (c) => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full glass">
                    {c}
                  </span>
                )
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Kenya is our current base of operations; other countries reflect
              our expansion roadmap, not existing operations.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}