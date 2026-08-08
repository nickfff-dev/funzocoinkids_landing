
import { Lock, ArrowLeft, Mail, Phone, Globe2 } from "lucide-react";
import { Nav } from "@/components/funzo/Nav";
import type { Metadata } from "next";
import Link from "next/link";

   export const metadata: Metadata = {
    title: "Data Protection & Privacy Policy | FunzoCoin Kids",
      
        description: "How FunzoCoin Kids protects data for children, parents and schools — Kenya Data Protection Act aligned: consent, minimization, security and parental rights.",
      
        robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/privacy",
  },
    openGraph: {
    type: "article",
    url: "/privacy",
    siteName: "FunzoCoin Kids",
    title: "Data Protection & Privacy Policy | FunzoCoin Kids",
    description:
      "Our commitment to protecting personal data — what we collect, why, how it's secured, and the rights of parents and guardians.",
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
    title: "Data Protection & Privacy Policy | FunzoCoin Kids",
    description:
           "Our commitment to protecting personal data — what we collect, why, how it's secured, and the rights of parents and guardians.",
    images: ["/assets/video-poster.jpg"],
  },
}
    

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Policy Statement",
    body: (
      <>
        FunzoCoin Kids is committed to protecting the privacy and personal data of every child,
        parent/guardian, school and partner involved in our program. All data is handled
        responsibly, securely and in compliance with applicable laws, including the{" "}
        <strong>Kenya Data Protection Act</strong>.
      </>
    ),
  },
  {
    title: "2. Purpose",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Explain what data we collect and why</li>
        <li>Ensure transparency in how data is used</li>
        <li>Protect children's personal information</li>
        <li>Define responsibilities for data handling and security</li>
      </ul>
    ),
  },
  {
    title: "3. Scope",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Students participating in FunzoCoin Kids</li>
        <li>Parents / guardians</li>
        <li>Schools and educators</li>
        <li>Program staff and facilitators</li>
        <li>Digital tools and platforms used within the program</li>
      </ul>
    ),
  },
  {
    title: "4. Types of Data Collected",
    body: (
      <>
        <p className="font-semibold text-foreground">a) Student data</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>Name, age, class/grade</li>
          <li>Participation records (activities completed, FunzoCoins earned)</li>
        </ul>
        <p className="mt-4 font-semibold text-foreground">b) Parent / guardian data</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>Name and contact information (phone / email)</li>
        </ul>
        <p className="mt-4 font-semibold text-foreground">c) Program data</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>Feedback and performance insights</li>
          <li>Activity engagement records</li>
        </ul>
        <p className="mt-4 rounded-xl bg-muted/60 px-4 py-3 text-sm">
          👉 We do <strong>not</strong> collect financial data or sensitive personal data unnecessarily.
        </p>
      </>
    ),
  },
  {
    title: "5. Purpose of Data Collection",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Managing participation in the program</li>
        <li>Tracking learning progress and engagement</li>
        <li>Communicating with parents/guardians and schools</li>
        <li>Improving program quality and effectiveness</li>
      </ul>
    ),
  },
  {
    title: "6. Legal Basis for Processing",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Parental / guardian consent</li>
        <li>Educational purpose and legitimate interest</li>
        <li>Compliance with applicable legal requirements</li>
      </ul>
    ),
  },
  {
    title: "7. Data Protection Principles",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Lawfulness, fairness and transparency</li>
        <li>Purpose limitation — data used only for stated purposes</li>
        <li>Data minimization — only necessary data is collected</li>
        <li>Accuracy — data kept up to date</li>
        <li>Security and confidentiality</li>
        <li>Limited storage duration</li>
      </ul>
    ),
  },
  {
    title: "8. Data Security Measures",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Secure storage (digital and physical)</li>
        <li>Restricted access to authorized personnel only</li>
        <li>Password-protected systems</li>
        <li>Regular monitoring of data handling practices</li>
      </ul>
    ),
  },
  {
    title: "9. Data Sharing",
    body: (
      <>
        <p>We do <strong>not</strong> sell or share personal data with third parties. Data may only be shared:</p>
        <ul className="list-disc pl-6 space-y-1.5 mt-2">
          <li>With the school for program coordination</li>
          <li>When required by law or regulatory authorities</li>
          <li>With parental / guardian consent</li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Data Retention",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Data is stored only for as long as necessary for program purposes</li>
        <li>After the program, data is securely deleted or anonymized</li>
      </ul>
    ),
  },
  {
    title: "11. Children's Data Protection",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Parental / guardian consent is mandatory</li>
        <li>No unnecessary personal information is collected</li>
        <li>No direct marketing to children</li>
        <li>Safe, supervised digital interactions only</li>
      </ul>
    ),
  },
  {
    title: "12. Rights of Parents / Guardians",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Access their child's data</li>
        <li>Request correction of inaccurate data</li>
        <li>Withdraw consent at any time</li>
        <li>Request deletion of data</li>
      </ul>
    ),
  },
  {
    title: "13. Breach Management",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Act immediately to contain the issue</li>
        <li>Notify relevant parties where necessary</li>
        <li>Take corrective measures to prevent recurrence</li>
      </ul>
    ),
  },
  {
    title: "14. Policy Review",
    body: (
      <>
        This policy is reviewed periodically to ensure compliance with legal requirements, best
        practices in data protection and continuous program improvements.
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 pt-32 pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-2xl gradient-bg flex items-center justify-center text-white">
            <Lock className="h-6 w-6" />
          </div>
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium">
            Policy · Data Protection
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Data Protection &amp; Privacy Policy
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Protecting information · Respecting privacy · Ensuring trust
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.title} className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">{s.title}</h2>
              <div className="text-muted-foreground leading-relaxed">{s.body}</div>
            </section>
          ))}

          <section className="rounded-2xl border bg-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Data Protection Contact</h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Tito Mwamukonu Mgharo</strong> — Founder &amp; Project Lead
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--electric)]" /><a href="tel:+254710641703" className="hover:underline">+254 710 641 703</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--electric)]" /><a href="mailto:admin@funzocoinkids.com" className="hover:underline">admin@funzocoinkids.com</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--electric)]" /><a href="mailto:funzokuu2@gmail.com" className="hover:underline">funzokuu2@gmail.com</a></li>
              <li className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-[var(--electric)]" /><a href="https://funzocoinkids.com" className="hover:underline">funzocoinkids.com</a></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href='#contact' target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-xl gradient-bg text-white px-5 py-2.5 text-sm font-semibold">
                Contact us on WhatsApp
              </a>
              <Link href="/child-safeguarding" className="inline-flex items-center rounded-xl border-2 px-5 py-2.5 text-sm font-semibold">
                Read our Child Safeguarding Policy
              </Link>
            </div>
            <p className="mt-6 italic text-sm text-muted-foreground">
              "Your trust matters. We protect every child's data with care and responsibility."
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
