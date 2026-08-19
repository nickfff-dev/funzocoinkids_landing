"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, CheckCircle2 } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center pt-24 pb-10 sm:pt-28 sm:pb-12 px-4 overflow-hidden adinkra-pattern">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--brand-navy)] opacity-15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--brand-gold)] opacity-20 blur-3xl" />

      <img
        src="/assets/funzo-logo.png"
        alt=""
        aria-hidden
        className="watermark right-[-8%] top-[10%] w-[480px] max-w-[60vw] float"
      />

      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center relative">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-[var(--cyan-glow)] animate-pulse" />
            Nairobi · Africa&apos;s Future-Skills Education Initiative
          </span>

          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08]">
            Empowering Africa&apos;s Next Generation Through{" "}
            <span className="gradient-text animated-gradient">
              AI, Finance & Innovation
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            FunzoCoin Kids equips children and youth with future-ready skills
            in AI, blockchain, digital finance, creativity, and online safety
            through engaging workshops, school programs, and innovation labs.
          </p>

          <p className="mt-2.5 text-sm font-medium text-foreground/70">
            AI · Financial Literacy · Digital Safety · Blockchain · Creativity · Innovation
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" className="gradient-bg animated-gradient text-white border-0 glow-shadow">
              <a href="#contact" target="_blank" rel="noopener noreferrer">
                Partner With Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>

            <Button size="lg" variant="outline" className="border-2">
              <a href="#contact" target="_blank" rel="noopener noreferrer">
                Sponsor a School
              </a>
            </Button>

            <Button size="lg" variant="ghost">
              <a href="#contact" target="_blank" rel="noopener noreferrer">
                Register a Child
              </a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Child-safe by design", "Ethical AI", "Open to partners"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--cyan-glow)]" />
                {t}
              </span>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground max-w-md">
            FunzoCoin Kids is an education initiative, not an offer of
            financial products or investment services.{" "}
            <a href="#trust" className="underline underline-offset-2">
              Visit our Trust Centre
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative rounded-3xl overflow-hidden glow-shadow border border-white/10 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
            <img
              src="/assets/hero.jpg"
              alt="African children learning AI, robotics and blockchain in a Nairobi innovation lab"
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-4 -bottom-5 glass rounded-2xl p-3.5 float glow-shadow hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">AI Literacy</div>
                <div className="text-sm font-semibold">Building future-ready skills</div>
              </div>
            </div>
          </div>

          <div
            className="absolute -right-4 top-6 glass rounded-2xl p-3.5 float glow-shadow hidden sm:block"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3">
              <img src="/assets/funzo-logo.png" alt="FunzoCoin Kids" className="h-10 w-10 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">Now enrolling</div>
                <div className="text-sm font-semibold">Blockchain 101</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}