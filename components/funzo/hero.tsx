"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 overflow-hidden adinkra-pattern">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--brand-navy)] opacity-15 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--brand-gold)] opacity-20 blur-3xl" />

      <img
        src='/assets/funzo-logo.png'
        alt=""
        aria-hidden
        className="watermark right-[-8%] top-[10%] w-[640px] max-w-[70vw] float"
      />

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-[var(--cyan-glow)] animate-pulse" />
            Nairobi · Building Africa&apos;s Innovation Generation
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Empowering Africa&apos;s Next Generation Through{" "}
            <span className="gradient-text animated-gradient">
              AI, Finance & Innovation
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            FunzoCoin Kids equips children and youth with future-ready skills
            in AI, blockchain, digital finance, creativity, and online safety
            through engaging workshops, school programs, and innovation labs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="gradient-bg animated-gradient text-white border-0 glow-shadow"
            >
              <a
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Partner With Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2"
            >
              <a
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor a School
              </a>
            </Button>

            <Button size="lg" variant="ghost">
              <a
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Movement
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {[
              "Child-safe by design",
              "Ethical AI",
              "Open to partners",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--cyan-glow)]" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden glow-shadow border border-white/10">
            <img
              src='/assets/hero.jpg'
              alt="African children learning AI, robotics and blockchain in a Nairobi innovation lab"
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-4 -bottom-6 glass rounded-2xl p-4 float glow-shadow hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                <Brain className="h-5 w-5" />
              </div>

              <div>
                <div className="text-xs text-muted-foreground">
                  AI Literacy
                </div>
                <div className="text-sm font-semibold">
                  12,400+ kids trained
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute -right-4 top-8 glass rounded-2xl p-4 float glow-shadow hidden sm:block"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3">
              <img
                src='/assets/funzo-logo.png'
                alt="FunzoCoin token"
                className="h-10 w-10"
              />

              <div>
                <div className="text-xs text-muted-foreground">
                  Live cohort
                </div>
                <div className="text-sm font-semibold">
                  Blockchain 101
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}