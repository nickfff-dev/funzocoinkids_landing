"use client"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "./shared"

/**
 * ACTION NEEDED BEFORE PUBLISHING THIS SECTION:
 * The reviewer found conflicting public claims about who leads FunzoCoin
 * Kids (one source lists Tito Kuu Mgharo as Founder & Project Lead /
 * Founder of Funzo Coin, tied to Stylus Mixx Africa Ltd; a separate public
 * profile lists Nderitu Mathü as founder). Publishing this section with
 * the wrong information would do more damage to trust than not having one.
 * Before this goes live:
 *   1. Confirm, internally, who legally owns/leads FunzoCoin Kids.
 *   2. Fill in ROLES below with real names, titles and (ideally) headshots.
 *   3. Fill in ENTITIES with the actual legal relationship between
 *      FunzoCoin Kids, Funzo Coin, and Stylus Mixx Africa Ltd (same legal
 *      entity? separate entities? brand names under one company?).
 *   4. Make sure this page, LinkedIn, and Instagram all describe the same
 *      structure — the reviewer specifically flagged that they currently
 *      don't.
 */

const ROLES = [
  { title: "Founder / Executive Director", name: "Tito Mgharo" },
  { title: "Program Director", name: "TBC" },
  { title: "Curriculum Lead", name: "TBC" },
  { title: "Child Safeguarding & Wellbeing Officer", name: "TBC" },
  { title: "Monitoring, Evaluation & Learning", name: "TBC" },
  { title: "Technology Lead", name: "Nickson Makori" },
  { title: "Finance & Administration", name: "TBC" },
  { title: "Advisory Board", name: "TBC" },
]

const ENTITIES = [
  {
    q: "Who legally owns FunzoCoin Kids?",
    a: "TBC — to be confirmed and published here.",
  },
  {
    q: "What is the relationship between FunzoCoin Kids, Funzo Coin, and Stylus Mixx Africa Ltd.?",
    a: "TBC — are these the same legal entity, separate entities, or brand names under one company?",
  },
  {
    q: "Who is ultimately accountable for the Kids program?",
    a: "TBC — name the accountable individual/body here once confirmed.",
  },
]

export function WhoWeAre() {
  return (
    <Section id="who-we-are">
      <SectionHeader
        eyebrow="Who We Are"
        title="The people and structure behind FunzoCoin Kids"
        sub="We're building this organization to be transparent from day one — here's who leads it and how it's structured."
      />

      <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ROLES.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-5 text-center"
          >
            <div className="gradient-bg mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white">
              {r.name === "TBC" ? "?" : r.name[0]}
            </div>
            <div className="text-sm font-semibold">{r.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">{r.title}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass mx-auto max-w-3xl rounded-3xl p-8"
      >
        <h3 className="mb-4 text-lg font-semibold">Organizational structure</h3>
        <div className="space-y-4">
          {ENTITIES.map((e) => (
            <div key={e.q}>
              <div className="text-sm font-medium">{e.q}</div>
              <div className="mt-0.5 text-sm text-muted-foreground">{e.a}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
