"use client";
import { motion } from "framer-motion";

import {

  Building2,

} from "lucide-react";
import { Section, SectionHeader } from "./shared";



export function Partners() {
  const groups = [
    "Schools",
    "NGOs",
    "Government",
    "Fintech",
    "CSR Partners",
    "Innovation Hubs",
  ];

  return (
    <Section id="partners">
      <SectionHeader
        eyebrow="Trust & Partners"
        title="Building Strategic Partnerships Across Africa"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {groups.map((g, i) => (
          <motion.div
            key={g}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl px-4 py-6 text-center hover:glow-shadow transition-all"
          >
            <Building2 className="h-6 w-6 mx-auto mb-2 text-[var(--electric)]" />

            <div className="text-sm font-medium text-foreground/80">
              {g}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}