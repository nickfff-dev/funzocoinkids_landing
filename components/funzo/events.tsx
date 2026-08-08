'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import {


  ArrowRight,

  Volume2,
  VolumeX,

  Calendar,

  Play,

} from "lucide-react";

import { Section, SectionHeader } from "./shared";

export function Events() {
  const events = [
    {
      tag: "Bootcamp",
      title: "AI Bootcamp for Teens",
      date: "Mar 15",
      color: "var(--electric)",
    },
    {
      tag: "Tour",
      title: "School Innovation Tour",
      date: "Apr 02",
      color: "var(--cyan-glow)",
    },
    {
      tag: "Hackathon",
      title: "FunzoHack Nairobi",
      date: "May 10",
      color: "var(--purple-glow)",
    },
    {
      tag: "Creative",
      title: "Rap & Code Competition",
      date: "Jun 21",
      color: "var(--gold)",
    },
    {
      tag: "Festival",
      title: "Africa Innovation Festival",
      date: "Aug 14",
      color: "var(--electric)",
    },
    {
      tag: "Online",
      title: "Live Learning Sessions",
      date: "Weekly",
      color: "var(--cyan-glow)",
    },
  ];

  return (
    <Section id="events" className="adinkra-pattern">
      <SectionHeader
        eyebrow="Events & Activities"
        title="Where the future is built — together."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((e, i) => (
          <motion.article
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl overflow-hidden hover:glow-shadow transition-all"
          >
            <div
              className="h-32 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${e.color}, color-mix(in oklab, ${e.color} 40%, transparent))`,
              }}
            >
              <div className="absolute inset-0 adinkra-pattern opacity-50" />

              <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium">
                {e.tag}
              </div>

              <div className="absolute bottom-3 right-3 glass rounded-xl px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5">
                <Calendar className="h-3 w-3" />
                {e.date}
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg">
                {e.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                Hands-on, mentor-led and built for impact.
              </p>

              <div className="mt-3 inline-flex items-center text-sm font-medium gradient-text">
                Register
                <ArrowRight className="ml-1 h-4 w-4 text-[var(--electric)]" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

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
      className="mt-12 glass rounded-3xl overflow-hidden"
    >
      <div className="relative aspect-video bg-black">
        {!playing ? (
          <>
            <img
              src='/assets/video-poster.jpg'
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
                <Play
                  className="h-7 w-7 sm:h-8 sm:w-8 ml-1"
                  fill="currentColor"
                />
              </div>
            </button>

            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-sm opacity-80">
                Watch the film
              </div>

              <div className="text-xl font-semibold">
                FunzoCoin Kids — In Action
              </div>
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
