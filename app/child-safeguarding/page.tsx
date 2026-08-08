import { Shield, ArrowLeft, Mail, Phone, Globe2 } from "lucide-react";
import { Nav } from "@/components/funzo/Nav";
import Link from "next/link";
import type { Metadata } from "next";

   export const metadata: Metadata = {
    title: "Child Safeguarding Policy | FunzoCoin Kids",
      
        description: 
      "Our commitment to protecting personal data — what we collect, why, how it's secured, and the rights of parents and guardians.",
        
      
        robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/child-safeguarding",
  },
    openGraph: {
    type: "article",
    url: "/child-safeguarding",
    siteName: "FunzoCoin Kids",
    title: "Child Safeguarding Policy | FunzoCoin Kids",
    description:
                "How FunzoCoin Kids protects children in every workshop, classroom and digital activity — safeguarding principles, code of conduct, reporting and online safety.",
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
    title: "Child Safeguarding Policy | FunzoCoin Kids",
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
        FunzoCoin Kids is fully committed to safeguarding and promoting the safety, wellbeing and
        rights of every child participating in our programs. We believe every child has the right
        to learn, grow and participate in a safe, inclusive and supportive environment — free from
        harm, abuse, neglect or exploitation.
      </>
    ),
  },
  {
    title: "2. Purpose",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Protect children from all forms of harm or abuse</li>
        <li>Provide clear guidelines for safe interactions</li>
        <li>Ensure staff, facilitators and partners uphold safeguarding standards</li>
        <li>Promote a culture of respect, safety and accountability</li>
      </ul>
    ),
  },
  {
    title: "3. Scope",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>All FunzoCoin Kids staff and facilitators</li>
        <li>Partner schools and institutions</li>
        <li>Volunteers and third-party collaborators</li>
        <li>Any individual involved in program delivery</li>
      </ul>
    ),
  },
  {
    title: "4. Definitions",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li><strong>Child:</strong> Any person under the age of 18</li>
        <li><strong>Safeguarding:</strong> Actions taken to protect children from harm</li>
        <li><strong>Abuse:</strong> Includes physical, emotional and sexual abuse, neglect and exploitation</li>
      </ul>
    ),
  },
  {
    title: "5. Key Principles",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Putting the best interests of the child first</li>
        <li>Equal protection for all children, regardless of background</li>
        <li>Zero tolerance for abuse or misconduct</li>
        <li>Promoting safe digital and physical environments</li>
        <li>Listening to and respecting children's voices</li>
      </ul>
    ),
  },
  {
    title: "6. Code of Conduct",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Treat children with dignity and respect</li>
        <li>Avoid any inappropriate physical or verbal interaction</li>
        <li>Never be alone with a child in a private, unmonitored space</li>
        <li>Use appropriate language at all times</li>
        <li>Obtain consent before taking photos or videos</li>
        <li>Report any concerns immediately</li>
      </ul>
    ),
  },
  {
    title: "7. Child Protection Measures",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Sessions run in supervised, school-approved environments</li>
        <li>At least one teacher or responsible adult present at all times</li>
        <li>Age-appropriate content and tools</li>
        <li>Avoid collection of unnecessary personal data</li>
        <li>All digital platforms used are safe and monitored</li>
      </ul>
    ),
  },
  {
    title: "8. Online Safety",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Children are never exposed to unsafe online environments</li>
        <li>No direct private communication between facilitators and children</li>
        <li>All digital activities are supervised</li>
        <li>Education on cyber safety, scams and misinformation is included</li>
      </ul>
    ),
  },
  {
    title: "9. Reporting & Response",
    body: (
      <>
        <p>Any safeguarding concern must be:</p>
        <ol className="list-decimal pl-6 space-y-1.5 mt-2">
          <li>Reported immediately to the designated safeguarding lead</li>
          <li>Documented clearly and confidentially</li>
          <li>Escalated to school authorities where necessary</li>
        </ol>
        <p className="mt-3">
          FunzoCoin Kids will take all reports seriously, act promptly and responsibly, and
          cooperate with school and legal authorities if required.
        </p>
      </>
    ),
  },
  {
    title: "10. Confidentiality",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>All safeguarding concerns are handled with strict confidentiality</li>
        <li>Information is only shared with relevant authorities when necessary</li>
        <li>Child privacy is always respected</li>
      </ul>
    ),
  },
  {
    title: "11. Training & Awareness",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>All facilitators receive safeguarding guidance</li>
        <li>Schools and partners are briefed on program safety standards</li>
        <li>Children are educated on their rights and how to stay safe</li>
      </ul>
    ),
  },
  {
    title: "12. Parental / Guardian Involvement",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>Parents/guardians are informed about program activities</li>
        <li>Consent is obtained before participation</li>
        <li>Open communication is encouraged at all times</li>
      </ul>
    ),
  },
  {
    title: "13. Policy Review",
    body: (
      <>
        This policy is reviewed regularly to ensure it remains effective, up to date with
        regulations, and aligned with best practices in child protection.
      </>
    ),
  },
  {
    title: "14. Commitment",
    body: (
      <>
        FunzoCoin Kids is dedicated to creating a safe, empowering and inspiring environment for
        every child. Safeguarding is a shared responsibility, and we expect all stakeholders to
        uphold the highest standards of child protection.
      </>
    ),
  },
];

export default function ChildSafeguarding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 pt-32 pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-2xl gradient-bg flex items-center justify-center text-white">
            <Shield className="h-6 w-6" />
          </div>
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium">
            Policy · Child Protection
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Child Safeguarding Policy
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Protecting every child · Ensuring safe learning environments
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.title} className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">{s.title}</h2>
              <div className="text-muted-foreground leading-relaxed">{s.body}</div>
            </section>
          ))}

          <section className="rounded-2xl border bg-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Safeguarding Lead — Contact</h2>
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
                Report a concern via WhatsApp
              </a>
              <Link href="/privacy" className="inline-flex items-center rounded-xl border-2 px-5 py-2.5 text-sm font-semibold">
                Read our Data Protection Policy
              </Link>
            </div>
            <p className="mt-6 italic text-sm text-muted-foreground">
              "Every child deserves to feel safe, valued, and empowered to learn."
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
