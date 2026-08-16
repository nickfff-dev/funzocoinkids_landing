"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Programs" },
  { href: "#events", label: "Events" },
  { href: "#impact", label: "Impact" },
  { href: "#trust", label: "Trust" },
  { href: "#investors", label: "Invest" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass glow-shadow" : ""}`}>
          <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-lg">
            <img src={"/assets/funzo-logo.png"} alt="FunzoCoin Kids" className="h-10 w-10 drop-shadow-[0_4px_12px_rgba(212,160,23,0.35)]" />
            <span className="brand-text text-xl">FunzoCoin Kids</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
              className="h-9 w-9 inline-flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button className="hidden sm:inline-flex gradient-bg animated-gradient text-white border-0">
              <a href="#contact" target="_blank" rel="noopener noreferrer">Partner With Us</a>
            </Button>
            <button
              aria-label="Toggle menu"
              className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-lg hover:bg-muted"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}