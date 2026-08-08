"use client";
import { motion } from "framer-motion";

import {
  Star,
} from "lucide-react";
import { Section, SectionHeader } from "./shared";


export function Testimonials() {
  const t = [
    {
      name: "Amina K.",
      role: "Parent, Nairobi",
      quote:
        "My daughter went from curious to confident. She now teaches me about AI safety.",
    },
    {
      name: "Mr. Otieno",
      role: "Teacher, Kisumu",
      quote:
        "The hands-on Blockchain 101 session unlocked something in our students I haven't seen before.",
    },
    {
      name: "Brian, 14",
      role: "Student",
      quote:
        "I built my first chatbot and learned how to save money. Best weekend ever.",
    },
    {
      name: "Equity Foundation",
      role: "CSR Sponsor",
      quote:
        "Measurable impact, transparent reporting, and a team that delivers what they promise.",
    },
  ];

  return (
    <Section id="testimonials" className="adinkra-pattern">
      <SectionHeader
        eyebrow="Voices"
        title="Loved by parents, teachers, students & partners."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {t.map((q, i) => (
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
                <Star
                  key={k}
                  className="h-4 w-4 fill-current"
                />
              ))}
            </div>

            <blockquote className="text-sm flex-1">
              &quot;{q.quote}&quot;
            </blockquote>

            <figcaption className="mt-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                {q.name[0]}
              </div>

              <div>
                <div className="text-sm font-semibold">
                  {q.name}
                </div>

                <div className="text-xs text-muted-foreground">
                  {q.role}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}