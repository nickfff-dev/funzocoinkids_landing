"use client";
import { motion } from "framer-motion";
import { 
  Sparkles,
  
} from "lucide-react";
export const fadeUp = {
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

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 px-4 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="max-w-3xl mx-auto text-center mb-14"
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80 mb-4">
          <Sparkles className="h-3 w-3 text-purple-glow" /> {eyebrow}
        </span>
      )}

      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
        {title}
      </h2>

      {sub && (
        <p className="mt-4 text-lg text-muted-foreground">
          {sub}
        </p>
      )}
    </motion.div>
  );
}