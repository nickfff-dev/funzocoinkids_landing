"use client";
import { motion } from "framer-motion";
import {

  Globe2,
} from "lucide-react";


import { Counter } from "@/components/funzo/Counter";
import { Section, SectionHeader } from "./shared";


export function Impact() {
  const stats = [
    { n: 12400, s: "+", l: "Students reached" },
    { n: 47, s: "", l: "Schools engaged" },
    { n: 180, s: "+", l: "Workshops delivered" },
    { n: 25, s: "", l: "Target partnerships" },
    { n: 10, s: "", l: "Countries by 2030" },
  ];

  return (
    <Section id="impact" className="adinkra-pattern">
      <SectionHeader
        eyebrow="Our Impact"
        title="Measurable progress. Continental ambition."
      />

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        {stats.map((s, i) => (
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

            <div className="mt-2 text-sm text-muted-foreground">
              {s.l}
            </div>
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
              From Nairobi to Lagos, Kigali, Accra and Cape Town — our roadmap
              brings future-skills education to 10 African countries by 2030,
              with strategic global partnerships powering every step.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Kenya",
                "Uganda",
                "Tanzania",
                "Rwanda",
                "Ghana",
                "Nigeria",
                "South Africa",
              ].map((c) => (
                <span
                  key={c}
                  className="text-xs px-3 py-1 rounded-full glass"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}