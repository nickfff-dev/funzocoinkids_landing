"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Brain,

  Shield,

  ArrowRight,

  CheckCircle2,
  Globe2,

  Building2,

  Lock,
  FileText,

} from "lucide-react";
import { Section, SectionHeader } from "./shared";



export function Ethics() {
  const items = [
    {
      icon: Shield,
      title: "Child Safeguarding Policy",
      desc: "Zero tolerance for harm. Supervised sessions, code of conduct, consent-based photography and clear reporting channels.",
      to: "/child-safeguarding",
      cta: "Read the policy",
    },
    {
      icon: Lock,
      title: "Data Protection & Privacy",
      desc: "Aligned with the Kenya Data Protection Act — parental consent, data minimization, secure storage and full parental rights.",
      to: "/privacy",
      cta: "Read the policy",
    },
    {
      icon: Brain,
      title: "Ethical AI Education",
      desc: "AI literacy taught with a focus on bias, consent, transparency and responsible, age-appropriate use.",
    },
    {
      icon: CheckCircle2,
      title: "Age-Appropriate Content",
      desc: "Every workshop, tool and platform is reviewed for suitability and delivered under adult supervision.",
    },
    {
      icon: Building2,
      title: "Compliance-Ready",
      desc: "Built to meet Ministry of Education, data protection and CSR governance standards for institutional partners.",
    },
    {
      icon: Globe2,
      title: "Regulatory-Aligned",
      desc: "Designed to partner with fintech, education and innovation sandboxes across the region.",
    },
  ];

  return (
    <Section id="ethics">
      <SectionHeader
        eyebrow="Policies · Ethics · Compliance"
        title="Built on trust. Designed for scale."
        sub="Public safeguarding and data-protection policies underpin every workshop, classroom and digital activity."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((i, idx) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="rounded-2xl border bg-card p-6 hover:border-[var(--purple-glow)] transition-colors flex flex-col"
          >
            <div className="h-10 w-10 rounded-xl bg-[var(--purple-glow)]/10 flex items-center justify-center text-[var(--purple-glow)] mb-3">
              <i.icon className="h-5 w-5" />
            </div>

            <h3 className="font-semibold">
              {i.title}
            </h3>

            <p className="text-sm text-muted-foreground mt-1 flex-1">
              {i.desc}
            </p>

            {i.to && (
              <Link
                href={i.to}
                className="mt-4 inline-flex items-center text-sm font-semibold gradient-text"
              >
                {i.cta}
                <ArrowRight className="ml-1 h-4 w-4 text-[var(--electric)]" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <Link
          href="/child-safeguarding"
          className="glass rounded-2xl p-5 flex items-center gap-4 hover:glow-shadow transition-all"
        >
          <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
            <FileText className="h-5 w-5" />
          </div>

          <div>
            <div className="font-semibold">
              Child Safeguarding Policy
            </div>

            <div className="text-sm text-muted-foreground">
              Protecting every child — principles, code of conduct, reporting.
            </div>
          </div>
        </Link>

        <Link
          href="/privacy"
          className="glass rounded-2xl p-5 flex items-center gap-4 hover:glow-shadow transition-all"
        >
          <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
            <FileText className="h-5 w-5" />
          </div>

          <div>
            <div className="font-semibold">
              Data Protection &amp; Privacy Policy
            </div>

            <div className="text-sm text-muted-foreground">
              Kenya DPA-aligned data handling, consent and parental rights.
            </div>
          </div>
        </Link>
      </div>
    </Section>
  );
}