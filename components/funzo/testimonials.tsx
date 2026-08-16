"use client";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import { Section, SectionHeader } from "./shared";

/**
 * IMPORTANT: only add a quote here once it is a real, attributable
 * testimonial you can document (name + role +, ideally, consent/source).
 * Never ship a placeholder as if it were real feedback — see assessment
 * feedback, Priority 1. Leave this array empty until the first verified
 * quote comes in from a pilot school, parent or partner; the section will
 * show an honest "coming soon" state instead of manufactured praise.
 */
type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const verifiedTestimonials: Testimonial[] = [
  // { name: "Full Name", role: "Parent, City — pilot cohort", quote: "..." },
];

export function Testimonials() {
  return (
    <Section id="testimonials" className="adinkra-pattern">
      <SectionHeader
        eyebrow="Voices"
        title="Loved by parents, teachers, students & partners."
      />

      {verifiedTestimonials.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {verifiedTestimonials.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-3xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm flex-1">&quot;{q.quote}&quot;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                  {q.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 sm:p-14 text-center max-w-2xl mx-auto"
        >
          <MessageSquareQuote className="h-8 w-8 mx-auto text-[var(--purple-glow)] mb-3" />
          <p className="text-muted-foreground">
            Testimonials from our pilot schools, families and partners are on
            their way as our programmes launch. We only publish verified,
            attributable feedback — check back soon.
          </p>
        </motion.div>
      )}
    </Section>
  );
}