"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Globe2,
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { InstagramLogoIcon, TwitterLogoIcon, LinkedinLogoIcon, FacebookLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"

export function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") || "");
    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

    if (!apiUrl) {
      setNewsletterStatus("error");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Newsletter subscription failed");
      setNewsletterStatus("success");
    } catch {
      setNewsletterStatus("error");
    }
  }

  return (
    <footer className="border-t bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 font-display font-bold text-lg mb-3">
            <img
              src='/assets/funzo-logo.png'
              alt="FunzoCoin Kids"
              className="h-10 w-10"
            />

            <span className="brand-text text-xl">
              FunzoCoin Kids
            </span>
          </div>

          <p className="text-sm text-muted-foreground max-w-md">
            A Nairobi-born, Africa-wide initiative preparing children and youth
            for the global digital economy through AI, finance, blockchain,
            safety and creativity.
          </p>

          <div className="mt-5 space-y-2 text-sm">

            <a
              href="tel:+254710641703"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              +254 710 641 703
            </a>

            <a
              href="mailto:admin@funzocoinkids.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              admin@funzocoinkids.com
            </a>

            <a
              href="https://funzocoinkids.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Globe2 className="h-4 w-4" />
              funzocoinkids.com
            </a>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Nairobi, Kenya
            </div>
          </div>

          <div className="mt-5 flex gap-2">
            {[
              InstagramLogoIcon,
              XLogoIcon,
              LinkedinLogoIcon,
              YoutubeLogoIcon,
              FacebookLogoIcon,
            ].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:gradient-bg hover:text-white transition-colors"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">
            Quick Links
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              ["About", "#about"],
              ["Programs", "#pillars"],
              ["Events", "#events"],
              ["Impact", "#impact"],
              ["Trust Centre", "#trust"],
              ["Investors", "#investors"],
            ].map(([l, h]) => (
              <li key={l}>
                <a
                  href={h}
                  className="hover:text-foreground"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-sm font-semibold mt-6 mb-3">
            Policies
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/child-safeguarding"
                className="hover:text-foreground"
              >
                Child Safeguarding
              </Link>
            </li>

            <li>
              <Link
                href="/privacy"
                className="hover:text-foreground"
              >
                Data Protection &amp; Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">
            Stay in the loop
          </div>

          <p className="text-sm text-muted-foreground mb-3">
            Newsletter for partners, parents, educators.
          </p>

          <form
            className="flex gap-2"
            onSubmit={handleNewsletterSubmit}
          >
            {newsletterStatus === "success" ? (
              <div className="flex min-h-10 flex-1 items-center gap-2 rounded-lg border border-[var(--cyan-glow)]/30 bg-[var(--cyan-glow)]/10 px-3 text-sm text-[var(--cyan-glow)]">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Thanks for joining the loop.</span>
              </div>
            ) : (
              <>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={newsletterStatus === "submitting"}
                />

                <Button
                  type="submit"
                  disabled={newsletterStatus === "submitting"}
                  className="gradient-bg text-white border-0"
                >
                  {newsletterStatus === "submitting" ? "Joining..." : "Join"}
                </Button>
              </>
            )}
          </form>
          {newsletterStatus === "error" && (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-[var(--gold)]" role="alert">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              We couldn&apos;t subscribe you right now. Please try again.
            </p>
          )}
        </div>
      </div>
      <div className="border-t py-5 px-4 text-center">
        <div className="max-w-3xl mx-auto text-center text-xs text-muted-foreground">
          FunzoCoin Kids is an education initiative focused on children&apos;s
          learning in AI, financial literacy, blockchain, digital safety,
          creativity and innovation. Nothing on this site is an offer of
          financial products, tokens or investment services.
        </div>
      </div>


      <div className="border-t py-6 text-center text-xs text-muted-foreground px-4">
        © {new Date().getFullYear()} FunzoCoin Kids. All rights reserved.
        Built with love in Nairobi. ·{" "}
        <Link
          href="/child-safeguarding"
          className="hover:text-foreground"
        >
          Safeguarding
        </Link>{" "}
        ·{" "}
        <Link
          href="/privacy"
          className="hover:text-foreground"
        >
          Privacy
        </Link>
      </div>
    </footer>
  );
}