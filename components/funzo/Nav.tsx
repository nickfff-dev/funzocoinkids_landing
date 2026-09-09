"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PartnershipForm } from "./partnership-form"
import { EnquiryModal } from "./enquiries"

const links = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Programs" },
  { href: "#events", label: "Events" },
  { href: "#impact", label: "Impact" },
  { href: "#trust", label: "Trust" },
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#investors", label: "Invest" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all sm:px-6 ${scrolled ? "glass glow-shadow" : ""}`}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 font-display text-lg font-bold"
          >
            <img
              src={"/assets/funzo-logo.png"}
              alt="FunzoCoin Kids"
              className="h-10 w-10 drop-shadow-[0_4px_12px_rgba(212,160,23,0.35)]"
            />
            <span className="brand-text text-xl">FunzoCoin Kids</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-muted"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <EnquiryModal
              title="Partner With FunzoCoin Kids"
              description="Tell us a little about your organization and how you'd like to get involved."
              trigger={
                <Button className="gradient-bg animated-gradient hidden border-0 text-white sm:inline-flex">
                  Partner With Us
                </Button>
              }
            >
              <PartnershipForm />
            </EnquiryModal>

            <button
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted lg:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="glass mt-2 flex flex-col gap-3 rounded-2xl p-4 lg:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
