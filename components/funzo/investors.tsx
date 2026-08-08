"use client";
import { motion } from "framer-motion";

import {

  Download,
  Heart,

} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "./shared";

export function Investors() {
  const offers = [
    "CSR partnership opportunities",
    "School sponsorship programs",
    "Youth innovation labs",
    "Digital inclusion initiatives",
    "Public-private partnerships",
  ];

  return (
    <Section id="investors">
      <div className="relative rounded-[2rem] overflow-hidden gradient-bg animated-gradient p-1">
        <div className="rounded-[calc(2rem-4px)] bg-card p-8 sm:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium mb-4">
                For Investors & Sponsors
              </span>

              <h2 className="text-3xl sm:text-5xl font-bold">
                Invest in Africa&apos;s{" "}
                <span className="gradient-text">
                  Future Innovators
                </span>
              </h2>

              <p className="mt-4 text-muted-foreground text-lg">
                Back a continent-scale movement equipping the next generation
                with the skills that will define the global digital economy.
                Transparent reporting, measurable outcomes, real lives changed.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="gradient-bg animated-gradient text-white border-0 glow-shadow"
                >
                  <a
                    href="#contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Request Partnership Deck
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
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>

            <ul className="space-y-3">
              {offers.map((o, i) => (
                <motion.li
                  key={o}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-4 flex items-center gap-3"
                >
                  <span className="h-9 w-9 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                    <Heart className="h-4 w-4" />
                  </span>

                  <span className="font-medium">
                    {o}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}