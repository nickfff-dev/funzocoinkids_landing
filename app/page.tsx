import type { Metadata } from "next"
import { DigitalWellness } from "@/components/funzo/DigitalWellness"
import { Gallery } from "@/components/funzo/Gallery"
import { About } from "../components/funzo/about"
import { Ethics } from "../components/funzo/ethics"
import { Events } from "../components/funzo/events"
import { FinalCTA } from "../components/funzo/final-cta"
import { Hero } from "../components/funzo/hero"
import { Impact } from "../components/funzo/impact"
import { Investors } from "../components/funzo/investors"
import { Partners } from "../components/funzo/patners"
import { Pillars } from "../components/funzo/pillars"
import { Testimonials } from "../components/funzo/testimonials"
import { WhoWeAre } from "../components/funzo/who-we-are"
import { FAQ } from "../components/funzo/faq"

const baseUrl =
  process.env.NEXT_PUBLIC_LANDING_URL || "https://funzocoinkids.com"
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "FunzoCoin Kids — AI, Finance & Innovation for African Youth",
    template: "%s | FunzoCoin Kids",
  },

  description:
    "Kenya-based youth initiative teaching AI, blockchain, financial literacy, online safety and creativity through workshops, school programs and innovation labs.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "FunzoCoin Kids",
    title: "FunzoCoin Kids — Africa's Future Innovators",
    description:
      "Future-ready skills for African children: AI, blockchain, digital finance, online safety and creativity.",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "FunzoCoin Kids — Africa's Future Innovators",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FunzoCoin Kids — Africa's Future Innovators",
    description:
      "Future-ready skills for African children: AI, blockchain, digital finance, online safety and creativity.",
    images: ["/assets/video-poster.jpg"],
  },
}
export default function Landing() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden overflow-y-auto bg-background text-foreground"
    >
      <Hero />
      <Partners />
      <About />
      <Pillars />
      <Impact />
      <Investors />
      <Gallery />
      <Events />
      <DigitalWellness />
      <Ethics />
      {/*<WhoWeAre />*/}
      <FAQ />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}
