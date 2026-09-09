"use client"
import { motion } from "framer-motion"

import {
  Brain,
  Coins,
  Shield,
  Lightbulb,
  Rocket,
  Blocks,
  ArrowRight,
} from "lucide-react"
import { Section, SectionHeader } from "./shared"

export function Pillars() {
  const cards = [
    {
      icon: Brain,
      title: "AI 101 for Kids",
      desc: "Hands-on intro to machine learning, prompting, and ethical AI use.",
      href: "#ai-holiday-bootcamp",
    },
    {
      icon: Blocks,
      title: "Blockchain 101",
      desc: "Learn how blockchains, wallets, and digital assets actually work.",
      href: "#blockchain-digital-futures-workshop",
    },
    {
      icon: Coins,
      title: "Financial Literacy",
      desc: "Saving, budgeting, investing and entrepreneurship for the digital age.",
      href: "#events",
    },
    {
      icon: Shield,
      title: "Online Safety",
      desc: "Privacy, scams, digital identity and healthy screen habits.",
      href: "#wellness",
    },
    {
      icon: Lightbulb,
      title: "Creativity & Innovation",
      desc: "Design thinking, music, storytelling and maker challenges.",
      href: "#rap-and-code",
    },
    {
      icon: Rocket,
      title: "Future Careers",
      desc: "Pathways into tech, fintech, creative industries and entrepreneurship.",
      href: "#funzohack",
    },
  ]

  return (
    <Section id="pillars">
      <SectionHeader
        eyebrow="Program Pillars"
        title="Six pillars. One future-ready generation."
        sub="A balanced curriculum that mixes hard tech, financial confidence, and human creativity."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group glass hover:glow-shadow rounded-3xl p-6 transition-all"
          >
            <div className="gradient-bg animated-gradient mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform group-hover:scale-110">
              <c.icon className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold">{c.title}</h3>

            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>

            <a
              href={c.href}
              className="gradient-text mt-4 inline-flex items-center text-sm font-medium transition-opacity hover:opacity-80"
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 text-electric" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
