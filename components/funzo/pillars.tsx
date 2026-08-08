"use client";
import { motion } from "framer-motion";

import {
  Brain,
  Coins,
  Shield,
  Lightbulb,
  Rocket,
  Blocks,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeader } from "./shared";

export function Pillars() {
  const cards = [
    {
      icon: Brain,
      title: "AI 101 for Kids",
      desc: "Hands-on intro to machine learning, prompting, and ethical AI use.",
    },
    {
      icon: Blocks,
      title: "Blockchain 101",
      desc: "Learn how blockchains, wallets, and digital assets actually work.",
    },
    {
      icon: Coins,
      title: "Financial Literacy",
      desc: "Saving, budgeting, investing and entrepreneurship for the digital age.",
    },
    {
      icon: Shield,
      title: "Online Safety",
      desc: "Privacy, scams, digital identity and healthy screen habits.",
    },
    {
      icon: Lightbulb,
      title: "Creativity & Innovation",
      desc: "Design thinking, music, storytelling and maker challenges.",
    },
    {
      icon: Rocket,
      title: "Future Careers",
      desc: "Pathways into tech, fintech, creative industries and entrepreneurship.",
    },
  ];

  return (
    <Section id="pillars">
      <SectionHeader
        eyebrow="Program Pillars"
        title="Six pillars. One future-ready generation."
        sub="A balanced curriculum that mixes hard tech, financial confidence, and human creativity."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-3xl p-6 hover:glow-shadow transition-all"
          >
            <div className="h-12 w-12 rounded-2xl gradient-bg animated-gradient flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
              <c.icon className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold">
              {c.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {c.desc}
            </p>

            <div className="mt-4 inline-flex items-center text-sm font-medium gradient-text">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 text-[var(--electric)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
