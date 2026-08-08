"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,

} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "./shared";

export function FinalCTA() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden gradient-bg animated-gradient glow-shadow p-1"
      >
        <div className="rounded-[calc(2.5rem-4px)] bg-card/95 backdrop-blur p-10 sm:p-16 text-center">
          <GraduationCap className="h-12 w-12 mx-auto text-purple-glow mb-4" />

          <h2 className="text-3xl sm:text-5xl font-bold">
            Help Shape{" "}
            <span className="gradient-text">
              Africa&apos;s Digital Future
            </span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join investors, sponsors, schools and governments building the
            next generation of African innovators.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button
              size="lg"
              className="gradient-bg animated-gradient text-white border-0 glow-shadow"
            >
              <a
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Partner
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
                Sponsor a Workshop
              </a>
            </Button>

            <Button size="lg" variant="ghost">
              <a
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Presentation
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}