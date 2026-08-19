"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Volume2,
  VolumeX,
  Calendar,
  MapPin,
  Users,
  Target,
  Play,
  Heart,
  Handshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./shared";
import { EnquiryModal } from "./enquiries";
import { PartnershipForm } from "./partnership-form";
import { RegistrationForm } from "./registration-form";

/**
 * ---------------------------------------------------------------------------
 * DATA
 * Fill in real dates/locations as they're confirmed. Anything marked
 * "Coming Soon" should stay that way rather than showing a fabricated date —
 * see assessment feedback, Priority 1 (verify all public-facing numbers/claims).
 * ---------------------------------------------------------------------------
 */
type CtaConfig = {
  label: string;
  /** Sponsor CTA only. Defaults to `label` when omitted. */
  presetInterest?: string;
};
type EventItem = {
  slug: string;
  emoji: string;
  tag: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  ageGroup: string;
  format?: string;
  focus: string[];
  primaryCta: CtaConfig;
  sponsorCta: CtaConfig;
  color: string;
};

type EventCategory = {
  id: string;
  label: string;
  blurb: string;
  items: EventItem[];
};

const CATEGORIES: EventCategory[] = [
  {
    id: "education-programs",
    label: "Education Programs",
    blurb: "Structured, curriculum-linked learning experiences delivered in schools and community venues.",
    items: [
      {
        slug: "ai-holiday-bootcamp",
        emoji: "🤖",
        tag: "Bootcamp",
        title: "AI Holiday Bootcamp",
        subtitle: "Building the next generation of responsible AI users & creators",
        date: "Coming Soon",
        location: "Nairobi, Kenya",
        ageGroup: "8–14 years",
        format: "Physical + digital learning",
        focus: [
          "What Artificial Intelligence is",
          "How AI works in everyday life",
          "Prompting & responsible AI use",
          "AI creativity & problem-solving",
          "AI safety and ethics",
          "Online safety & digital citizenship",
        ],
        primaryCta: { label: "Register Your Child" },
        sponsorCta: { label: "Sponsor a Child", presetInterest: "Sponsor a Child" },
        color: "var(--electric)",
      },
      {
        slug: "blockchain-digital-futures-workshop",
        emoji: "⛓",
        tag: "Workshop",
        title: "Blockchain & Digital Futures Workshop",
        subtitle: "Making blockchain simple, practical and child-friendly",
        date: "Coming Soon",
        location: "Kenya",
        ageGroup: "8–14 years",
        format: "Workshop",
        focus: [
          "What blockchain is",
          "How digital records work",
          "Digital identity",
          "Transparency & trust",
          "Intro to Web3 concepts",
          "Responsible digital participation",
        ],
        primaryCta: { label: "Register", presetInterest: "Register For Event" },
        sponsorCta: { label: "Become a Technology Partner", presetInterest: "Technology Partnership" },
        color: "var(--purple-glow)",
      },
      {
        slug: "school-innovation-tour",
        emoji: "🏫",
        tag: "Tour",
        title: "School Innovation Tour",
        subtitle: "Taking future skills directly to schools",
        date: "Ongoing",
        location: "Partner schools across Kenya",
        ageGroup: "Primary & secondary learners",
        focus: [
          "Interactive technology sessions",
          "AI awareness",
          "Digital safety education",
          "Financial literacy activities",
          "Innovation challenges",
          "Teacher & parent engagement",
        ],
        primaryCta: { label: "Invite Us to Your School", },
        sponsorCta: { label: "Sponsor a School", presetInterest: "Sponsor a School" },
        color: "var(--cyan-glow)",
      },
    ],
  },
  {
    id: "competitions",
    label: "Competitions",
    blurb: "Challenge-based experiences where young people apply what they've learned to real problems.",
    items: [
      {
        slug: "funzohack",
        emoji: "💡",
        tag: "Hackathon",
        title: "FunzoHack",
        subtitle: "Young minds. Real problems. Creative solutions.",
        date: "Coming Soon",
        location: "Nairobi, Kenya",
        ageGroup: "10–17 years",
        focus: [
          "Environment",
          "Education",
          "Financial literacy",
          "Digital safety",
          "Community wellbeing",
          "Artificial Intelligence",
        ],
        primaryCta: { label: "Join the Challenge" },
        sponsorCta: { label: "Sponsor FunzoHack", presetInterest: "FunzoHack" },
        color: "var(--purple-glow)",
      },
      {
        slug: "rap-and-code",
        emoji: "🎤",
        tag: "Creative",
        title: "Rap & Code Challenge",
        subtitle: "Creativity meets technology",
        date: "Coming Soon",
        location: "Kenya",
        ageGroup: "10–17 years",
        focus: [
          "Communication skills",
          "Creative & storytelling skills",
          "Digital skills",
          "Confidence & teamwork",
          "Innovation mindset",
        ],
        primaryCta: { label: "Participate", },
        sponsorCta: { label: "Become a Creative Partner", presetInterest: "Creative Partnership" },
        color: "var(--gold)",
      },
      {
        slug: "innovation-challenge",
        emoji: "🏆",
        tag: "Challenge",
        title: "FunzoCoin Kids Innovation Challenge",
        subtitle: "Imagine. Create. Solve.",
        date: "Coming Soon",
        location: "Kenya",
        ageGroup: "10–17 years",
        focus: [
          "Design thinking",
          "Prototyping & pitching",
          "Digital and non-digital solutions",
          "Mentorship from industry judges",
        ],
        primaryCta: { label: "Enter the Challenge",  },
        sponsorCta: { label: "Judge or Mentor", presetInterest: "Mentorship" },
        color: "var(--electric)",
      },
    ],
  },
  {
    id: "community-events",
    label: "Community Events",
    blurb: "Bringing learning, sport and family engagement together outside the classroom.",
    items: [
      {
        slug: "football-innovation-day",
        emoji: "⚽",
        tag: "Community",
        title: "FunzoCoin Kids Football & Innovation Day",
        subtitle: "Where sport meets technology, creativity & life skills",
        date: "Coming Soon",
        location: "Kenya",
        ageGroup: "All ages, family-friendly",
        format: "Sport + technology + financial literacy",
        focus: [
          "Football activities",
          "AI learning",
          "Financial literacy",
          "Digital skills & online safety",
          "Creativity challenges",
          "Teamwork & leadership",
        ],
        primaryCta: { label: "Register", },
        sponsorCta: { label: "Sponsor the Event", presetInterest: "Sponsor an Event" },
        color: "var(--cyan-glow)",
      },
      {
        slug: "live-learning-sessions",
        emoji: "💻",
        tag: "Online",
        title: "Live Learning Sessions",
        subtitle: "Weekly online sessions for learners and parents",
        date: "Weekly",
        location: "Online",
        ageGroup: "8–17 years, with parent sessions available",
        focus: ["AI & digital literacy", "Financial literacy", "Online safety", "Parent digital-literacy sessions"],
        primaryCta: { label: "Join a Session",  },
        sponsorCta: { label: "Sponsor a Session", presetInterest: "Sponsor an Event" },
        color: "var(--electric)",
      },
    ],
  },
  {
    id: "flagship",
    label: "Annual Flagship Event",
    blurb: "Our long-term vision: one continent-scale gathering bringing the whole ecosystem together.",
    items: [
      {
        slug: "africa-future-skills-festival",
        emoji: "🌍",
        tag: "Festival",
        title: "Africa Future Skills Festival",
        subtitle: "A celebration of Africa's young innovators",
        date: "In development",
        location: "Kenya, expanding regionally",
        ageGroup: "Children, families, schools & partners",
        focus: [
          "AI & technology",
          "Education",
          "Finance & blockchain",
          "Creativity & sport",
          "Innovation & entrepreneurship",
        ],
        primaryCta: { label: "Express Interest", },
        sponsorCta: { label: "Become a Founding Partner", presetInterest: "Funding Partnership" },
        color: "var(--gold)",
      },
    ],
  },
];

const SPONSORSHIP_TIERS = [
  {
    icon: Heart,
    title: "Sponsor a Child",
    desc: "Help a child access learning materials, digital tools, facilitation and participation support for a FunzoCoin Kids experience.",
    cta: "Sponsor a Child",
  },
  {
    icon: Users,
    title: "Sponsor a School",
    desc: "Fund a full school cohort — learner workshops, teacher engagement, learning materials and impact reporting.",
    cta: "Sponsor a School",
  },
  {
    icon: Target,
    title: "Sponsor an Event",
    desc: "Back a specific bootcamp, workshop, competition or community day — venue, devices, facilitators, materials and documentation.",
    cta: "Sponsor an Event",
  },
  {
    icon: Handshake,
    title: "Institutional Partnership",
    desc: "CSR, technology, education, community, media, development or funding partnership — ongoing, structured collaboration.",
    cta: "Become a Partner",
  },
];

const PARTNERSHIP_PROMISES = [
  "Partnership recognition & brand visibility",
  "Event branding opportunities",
  "Employee volunteering opportunities",
  "Mentorship opportunities",
  "Programme participation",
  "Impact reporting after each engagement",
  "Certificate / letter of partnership",
  "Approved photography & video documentation",
];

/**
 * ---------------------------------------------------------------------------
 * COMPONENTS
 * ---------------------------------------------------------------------------
 */

function EventCard({ e, index }: { e: EventItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.06 }}
      whileHover={{ y: -6 }}
      className="glass rounded-3xl overflow-hidden hover:glow-shadow transition-all flex flex-col"
    >
      <div className="h-28 relative overflow-hidden flex items-center justify-center text-5xl"
        style={{ background: `linear-gradient(135deg, ${e.color}, color-mix(in oklab, ${e.color} 40%, transparent))` }}>
        <div className="absolute inset-0 adinkra-pattern opacity-50" />
        <span className="relative drop-shadow">{e.emoji}</span>
        <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium">{e.tag}</div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg leading-snug">{e.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{e.subtitle}</p>

        <div className="mt-4 grid grid-cols-1 gap-1.5 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 shrink-0" /> {e.date}</span>
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 shrink-0" /> {e.location}</span>
          <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5 shrink-0" /> {e.ageGroup}</span>
        </div>

        {e.focus?.length > 0 && (
          <div className="mt-4">
            <div className="text-xs font-semibold text-foreground/70 mb-1.5 inline-flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5" /> What participants explore
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              {e.focus.slice(0, 4).map((f) => (
                <li key={f} className="flex gap-1.5"><span className="text-[color:var(--brand-gold)]">•</span>{f}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border/60">
          <EnquiryModal
            title={`Register — ${e.title}`}
            description="Tell us about the participant and we'll follow up with next steps."
            trigger={
              <Button size="sm" className="gradient-bg text-white border-0">
                {e.primaryCta.label}
              </Button>
            }
          >
            <RegistrationForm presetEvent={e.title} />
          </EnquiryModal>

          <EnquiryModal
            title={`${e.sponsorCta.label} — ${e.title}`}
            description="Tell us about your organization and how you'd like to support this."
            trigger={
              <Button size="sm" variant="outline" className="border-2">
                <span className="inline-flex items-center gap-1">
                  {e.sponsorCta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Button>
            }
          >
            <PartnershipForm
              presetInterest={e.sponsorCta.presetInterest ?? e.sponsorCta.label}
              presetEvent={e.title}
            />
          </EnquiryModal>
        </div>
      </div>
    </motion.article>
  );
}

function SponsorshipSection() {
  return (
    <div className="mt-20">
      <SectionHeader
        eyebrow="Partner With Us"
        title="Help equip Africa's next generation with future-ready skills"
        sub="Every FunzoCoin Kids event creates an opportunity for a child to access knowledge, technology, mentorship and experience. Your organization can help make it possible."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SPONSORSHIP_TIERS.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border bg-card p-6 hover:border-[var(--purple-glow)] transition-colors flex flex-col"
          >
            <div className="h-10 w-10 rounded-xl bg-[var(--purple-glow)]/10 flex items-center justify-center text-[var(--purple-glow)] mb-3">
      <t.icon className="h-5 w-5" />
    </div>
    <h3 className="font-semibold">{t.title}</h3>
    <p className="text-sm text-muted-foreground mt-1 flex-1">{t.desc}</p>
    <EnquiryModal
      title={t.title}
      description="Tell us about your organization and how you'd like to get involved."
      trigger={
        <button className="mt-4 inline-flex items-center text-sm font-semibold gradient-text">
          {t.cta}
          <ArrowRight className="ml-1 h-4 w-4 text-[var(--electric)]" />
        </button>
      }
    >
      <PartnershipForm presetInterest={t.cta} />
    </EnquiryModal>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 glass rounded-3xl p-8"
      >
        <h3 className="font-semibold text-lg mb-4">Our partnership promise</h3>
        <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
          Depending on the partnership, partners can expect the following. All
          child-related photography, stories and media are subject to consent
          and safeguarding requirements — see our{" "}
          <a href="/child-safeguarding" className="underline underline-offset-2">
            Child Safeguarding Policy
          </a>
          .
        </p>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {PARTNERSHIP_PROMISES.map((p) => (
            <div key={p} className="flex items-center gap-2 text-sm">
              <span className="text-[color:var(--cyan-glow)]">✓</span>
              {p}
            </div>
          ))}
        </div>

        <div className="mt-6">
         <EnquiryModal
    title="Request Sponsorship Deck"
    description="Tell us about your organization and we'll share our sponsorship deck and next steps."
    trigger={
      <Button size="lg" className="gradient-bg animated-gradient text-white border-0 glow-shadow">
        Request Sponsorship Deck
      </Button>
    }
  >
    <PartnershipForm presetInterest="Request Sponsorship Deck" />
  </EnquiryModal>
        </div>
      </motion.div>
    </div>
  );
}

const audiences = [
  { emoji: "👨‍👩‍👧", label: "Parents & Guardians", desc: "Register your child for an upcoming learning experience.", cta: "Register a Child", kind: "registration" as const },
  { emoji: "🏫", label: "Schools", desc: "Invite FunzoCoin Kids to your school or explore a programme partnership.", cta: "Partner With Us", kind: "partnership" as const },
  { emoji: "🏢", label: "Corporates & CSR Teams", desc: "Sponsor an event, school, child or programme.", cta: "Sponsor an Event", kind: "partnership" as const },
  { emoji: "💻", label: "Technology & Professional Partners", desc: "Provide technology, mentorship, expertise or resources.", cta: "Become a Partner", kind: "partnership" as const },
  { emoji: "🤝", label: "Volunteers & Mentors", desc: "Support young learners by sharing your knowledge and experience.", cta: "Volunteer / Mentor", kind: "partnership" as const },
];

function RegistrationFunnel() {
  return (
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {audiences.map((a) => (
        <div key={a.label} className="glass rounded-2xl p-5 flex flex-col">
          <div className="text-3xl mb-2">{a.emoji}</div>
          <div className="font-semibold text-sm">{a.label}</div>
          <p className="text-xs text-muted-foreground mt-1 flex-1">{a.desc}</p>
          <EnquiryModal
            title={a.cta}
            description={
              a.kind === "registration"
                ? "Tell us about the participant and we'll follow up with next steps."
                : "Tell us about your organization and how you'd like to get involved."
            }
            trigger={
              <button className="mt-3 text-xs font-semibold gradient-text inline-flex items-center">
                {a.cta}
                <ArrowRight className="ml-1 h-3 w-3 text-[var(--electric)]" />
              </button>
            }
          >
            {a.kind === "registration" ? <RegistrationForm /> : <PartnershipForm presetInterest={a.cta} />}
          </EnquiryModal>
        </div>
      ))}
    </div>
  );
}

export function Events() {
  return (
    <Section id="events" className="adinkra-pattern">
      <SectionHeader
        eyebrow="Programs, Events & Experiences"
        title="Inspiring Africa's next generation through technology, creativity & innovation"
        sub="From AI and blockchain workshops to sport, competitions and school outreach — our events bring learning, creativity and real-world experience together for children, schools and partners alike."
      />

      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="mb-16 last:mb-0">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold">{cat.label}</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{cat.blurb}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.items.map((e, i) => (
              <EventCard key={e.slug} e={e} index={i} />
            ))}
          </div>
        </div>
      ))}

      <RegistrationFunnel />
      <SponsorshipSection />
      <FilmEmbed />
    </Section>
  );
}

function FilmEmbed() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const src = `https://www.youtube.com/embed/PhnAY3Sg5sU?autoplay=1&mute=${
    muted ? 1 : 0
  }&controls=1&loop=1&playlist=PhnAY3Sg5sU&playsinline=1&modestbranding=1&rel=0`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 glass rounded-3xl overflow-hidden"
    >
      <div className="relative aspect-video bg-black">
        {!playing ? (
          <>
            <img
              src="/assets/video-poster.jpg"
              alt="FunzoCoin Kids — In Action"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="h-7 w-7 sm:h-8 sm:w-8 ml-1" fill="currentColor" />
              </div>
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-sm opacity-80">Watch the film</div>
              <div className="text-xl font-semibold">FunzoCoin Kids — In Action</div>
            </div>
          </>
        ) : (
          <>
            <iframe
              key={muted ? "m" : "u"}
              src={src}
              title="FunzoCoin Kids — In Action"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
            <button
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-white hover:scale-105 transition-transform"
            >
              {muted ? (
                <>
                  <VolumeX className="h-4 w-4" />
                  Unmute
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4" />
                  Mute
                </>
              )}
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}