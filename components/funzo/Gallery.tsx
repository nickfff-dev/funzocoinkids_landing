"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";


const SLIDES = [
  { src: "/assets/gallery-1.jpg", title: "Future Classrooms", caption: "Kids learning AI, coding & creativity through joyful play." },
  { src: "/assets/gallery-2.jpg", title: "Build & Innovate", caption: "From robotics to inventions — turning curiosity into capability." },
  { src: "/assets/gallery-3.jpg", title: "Community Workshops", caption: "Reaching schools and villages across Kenya with future skills." },
  { src: "/assets/gallery-4.jpg", title: "Immersive Learning", caption: "VR, AR and AI literacy for the next generation of African innovators." },
  { src: "/assets/gallery-5.jpg", title: "Financial Confidence", caption: "Young minds presenting real ideas in money, savings & enterprise." },
  { src: "/assets/gallery-6.jpg", title: "Create More. Scroll Less.", caption: "Creativity, design and digital art replacing passive screen time." },
];

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 4500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused]);

  const go = (dir: number) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  const current = SLIDES[index];
  const prev = SLIDES[(index - 1 + SLIDES.length) % SLIDES.length];
  const next = SLIDES[(index + 1) % SLIDES.length];

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 adinkra-pattern opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-[color:var(--brand-gold)]" />
            <span className="brand-text">In Action</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Moments from <span className="gradient-text">FunzoCoin Kids</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our workshops, innovation labs and the African youth shaping tomorrow.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Stage with peek of neighbors on desktop */}
          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-4 items-center">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="hidden md:block relative rounded-2xl overflow-hidden aspect-[4/3] opacity-50 hover:opacity-80 transition-opacity"
            >
              <img src={prev.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </button>

            <div className="relative rounded-3xl overflow-hidden glow-shadow aspect-[16/10] glass">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={current.src}
                  alt={current.title}
                  width={1280}
                  height={896}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cap-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white"
                >
                  <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">{current.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-white/85 max-w-xl">{current.caption}</p>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  aria-label="Previous slide"
                  onClick={() => go(-1)}
                  className="ml-3 sm:ml-4 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-[color:var(--brand-navy)] backdrop-blur shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  aria-label="Next slide"
                  onClick={() => go(1)}
                  className="mr-3 sm:mr-4 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-[color:var(--brand-navy)] backdrop-blur shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="hidden md:block relative rounded-2xl overflow-hidden aspect-[4/3] opacity-50 hover:opacity-80 transition-opacity"
            >
              <img src={next.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-[color:var(--brand-gold)]" : "w-4 bg-foreground/20 hover:bg-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
