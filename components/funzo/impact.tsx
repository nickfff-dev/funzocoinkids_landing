"use client"
import { motion } from "framer-motion"
import { Globe2, CheckCircle2, Circle, Clock } from "lucide-react"
import { Section, SectionHeader } from "./shared"

/**
 * We're in pilot phase. Even non-zero placeholder counters (100+ students,
 * 10 schools...) invite "how do you know that?" before we can answer it
 * credibly — that's the reviewer's #1 flag. Milestones let us be honest
 * about exactly where we are without looking inactive.
 *
 * Update MILESTONES' status as each one actually lands. Only switch back to
 * numeric counters once figures are real, dated and independently
 * verifiable (a workshop register, a school MOU, etc) — not before.
 *
 * status: "done" | "in-progress" | "planned"
 */
const MILESTONES: {
  label: string
  status: "done" | "in-progress" | "planned"
}[] = [
  { label: "Pilot curriculum developed", status: "done" },
  { label: "Curriculum testing underway", status: "in-progress" },
  { label: "Schools engaged for pilot discussions", status: "in-progress" },
  { label: "Pilot program preparing for launch in Nairobi", status: "planned" },
  { label: "First cohort impact data collected", status: "planned" },
]

const ambitionStats = [
  { n: "10", l: "African countries by 2030" },
  { n: "1M+", l: "Learners reached by 2030" },
  { n: "500+", l: "Partner schools by 2030" },
]

function StatusIcon({
  status,
}: {
  status: "done" | "in-progress" | "planned"
}) {
  if (status === "done")
    return <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-glow" />
  if (status === "in-progress")
    return <Clock className="h-5 w-5 shrink-0 text-gold" />
  return <Circle className="h-5 w-5 shrink-0 text-muted-foreground/50" />
}

const statusLabel: Record<string, string> = {
  done: "Done",
  "in-progress": "In progress",
  planned: "Planned",
}

export function Impact() {
  return (
    <Section id="impact" className="adinkra-pattern">
      <SectionHeader
        eyebrow="Our Impact"
        title="Where we are today — and where we're headed."
        sub="FunzoCoin Kids is currently in its pilot phase. Rather than publish numbers we can't yet independently verify, here's exactly what's been done, what's underway, and what's next."
      />

      <div className="mx-auto mb-16 max-w-2xl">
        <div className="mb-4 text-sm font-semibold tracking-wide text-foreground/70 uppercase">
          Launch progress
        </div>
        <div className="glass space-y-4 rounded-3xl p-6 sm:p-8">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <StatusIcon status={m.status} />
              <span
                className={`flex-1 text-sm ${
                  m.status === "planned"
                    ? "text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {m.label}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                  m.status === "done"
                    ? "bg-(--cyan-glow)/15 text-cyan-glow"
                    : m.status === "in-progress"
                      ? "bg-(--gold)/15 text-gold"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {statusLabel[m.status]}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          We&apos;ll publish our first Impact Report — with verified,
          independently reviewable figures — once pilot data is collected.
          Target: Q2 2027.{" "}
          {/* TODO: confirm the exact target quarter with the team before this goes live */}
        </p>
      </div>

      <div className="mb-3 text-center text-sm font-semibold tracking-wide text-foreground/70 uppercase">
        2030 ambition
      </div>
      <div className="mx-auto mb-4 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {ambitionStats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-dashed border-(--purple-glow)/40 p-6 text-center"
          >
            <div className="text-3xl font-bold text-purple-glow sm:text-4xl">
              {s.n}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
      <p className="mx-auto mb-12 max-w-xl text-center text-xs text-muted-foreground">
        These are targets, not current results — we&apos;ll only report
        current-impact figures once they&apos;re real and verifiable.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 h-4 w-4 animate-pulse rounded-full bg-cyan-glow" />
          <div
            className="absolute top-1/2 left-1/2 h-4 w-4 animate-pulse rounded-full bg-purple-glow"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute right-1/4 bottom-1/3 h-4 w-4 animate-pulse rounded-full bg-gold"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative flex flex-col items-center gap-8 lg:flex-row">
          <Globe2
            className="h-32 w-32 text-electric opacity-80 sm:h-40 sm:w-40"
            strokeWidth={1}
          />
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Starting in Nairobi. Scaling across Africa.
            </h3>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Kenya is our current base of operations. The countries below
              represent our expansion roadmap, not existing operations —
              we&apos;ll only mark a country active once we&apos;re actually
              delivering there.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Kenya (current base)",
                "Uganda",
                "Tanzania",
                "Rwanda",
                "Ghana",
                "Nigeria",
                "South Africa",
              ].map((c) => (
                <span key={c} className="glass rounded-full px-3 py-1 text-xs">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
