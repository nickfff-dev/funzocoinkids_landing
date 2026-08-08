"use client";
import { motion } from "framer-motion";
import { Section,  fadeUp } from "./shared";
import {
  CheckCircle2,
  Sparkles,

} from "lucide-react";


export function About() {
  const items = [
    "Financial literacy",
    "AI fundamentals",
    "Blockchain technology",
    "Digital citizenship",
    "Online safety",
    "Creativity & entrepreneurship",
  ];

  return (
    <Section id="about" className="adinkra-pattern">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium mb-4">
            About
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold">
            What is{" "}
            <span className="gradient-text">
              FunzoCoin Kids
            </span>
            ?
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            FunzoCoin Kids is an educational and innovation-driven initiative
            helping young people understand the technologies shaping the future
            digital economy. Through interactive workshops, competitions,
            storytelling, media, and innovation labs, we prepare African youth
            to lead — not just participate.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {items.map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--purple-glow)]" />
                {i}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl gradient-bg animated-gradient glow-shadow p-1">
            <div className="h-full w-full rounded-3xl bg-card p-8 flex flex-col justify-between">
              <div>
                <Sparkles className="h-8 w-8 text-[var(--purple-glow)]" />

                <h3 className="mt-4 text-2xl font-bold">
                  A future-skills academy for African youth
                </h3>

                <p className="mt-3 text-muted-foreground">
                  From rural classrooms to Nairobi innovation hubs — we meet
                  kids where they are and unlock what they can become.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { n: "6", l: "Pillars" },
                  { n: "47", l: "Schools" },
                  { n: "12k+", l: "Learners" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="glass rounded-xl p-3 text-center"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      {s.n}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}