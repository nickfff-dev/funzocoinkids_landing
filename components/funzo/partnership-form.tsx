"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Field, fieldClass } from "./form-utils";

const ORG_TYPES = [
  "Corporate", "CSR / Foundation", "Government", "NGO / Development Partner",
  "School", "Technology Company", "Media", "University / Research", "Other",
];

// Generic checkbox options for the standalone "Partner With Us" flow
// (no presetInterest). Doesn't need to cover event-specific labels anymore —
// see hasPinnedInterest below.
const INTERESTS = [
  "Sponsor a Child", "Sponsor a School", "Sponsor an Event", "Sponsor a Workshop",
  "AI Bootcamp", "Blockchain Workshop", "Football & Innovation Day", "School Innovation Tour",
  "FunzoHack", "Technology Partnership", "Mentorship", "Funding Partnership",
  "Media Partnership", "Creative Partnership", "Other",
];

const STEPS = [{ label: "Organization" }, { label: "Interests" }, { label: "Message" }];

export function PartnershipForm({
  presetInterest,
  presetEvent,
}: {
  presetInterest?: string;
  presetEvent?: string;
}) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Any presetInterest other than the literal "Other" is pinned: shown as a
  // locked chip, always included in the payload, no matching against
  // INTERESTS required. This is what lets arbitrary CTA labels like
  // "Sponsor the Event", "Judge or Mentor", "Volunteer / Mentor" work
  // without ever touching this file again.
  const hasPinnedInterest = Boolean(presetInterest) && presetInterest !== "Other";

   const [interests, setInterests] = useState<string[]>(
    presetInterest ? [presetInterest] : []
  );
  const [otherChecked, setOtherChecked] = useState(presetInterest === "Other");
  const [otherText, setOtherText] = useState("");

  const [organizationName, setOrganizationName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organizationType, setOrganizationType] = useState("");

  function toggleInterest(v: string) {
    if (v === "Other") {
      // FIX: previously this only ever set otherChecked to true and never
      // toggled it off, and the checkbox's `checked` prop read
      // interests.includes('Other') which was never true either way —
      // so the "Other" box could never show as checked or be unchecked.
      setOtherChecked((prev) => !prev);
      return;
    }
    setInterests((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  }

  const step1Valid = organizationName.trim() && contactPerson.trim() && email.trim() && organizationType;
  const step2Valid =
    hasPinnedInterest || interests.length > 0 || (otherChecked && otherText.trim().length > 0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step !== STEPS.length - 1) {
      goNext();
      return;
    }

    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const finalInterests = [
      // ...(hasPinnedInterest ? [presetInterest as string] : []),
      ...interests,
      ...(otherChecked && otherText.trim() ? [otherText.trim()] : []),
    ];

    const payload = {
      organizationName,
      contactPerson,
      email,
      phone,
      organizationType,
      interests: finalInterests,
      event: presetEvent, // which specific event/program this relates to, if any
      message: String(data.get("message") || ""),
    };

    console.log("Partnership enquiry submitted", payload);
    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    setSubmitted(true);
  }

  function goNext(e?: React.MouseEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function goBack(e?: React.MouseEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    setStep((s) => Math.max(s - 1, 0));
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle2 className="h-10 w-10 mx-auto text-[var(--cyan-glow)] mb-3" />
        <p className="font-semibold">Thank you!</p>
        <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
          Your partnership enquiry has been received. Our team will follow up
          within a few business days with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex items-center gap-2 mb-6 px-0.5">
        {STEPS.map((s, i) => {
          const active = i === step;
          const done = i < step;
          return (
            <div key={s.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-2">
                <div
                  className={[
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium border transition-colors",
                    done
                      ? "bg-[var(--purple-glow)] border-[var(--purple-glow)] text-white"
                      : active
                      ? "border-[var(--purple-glow)] text-[var(--purple-glow)]"
                      : "border-input text-muted-foreground",
                  ].join(" ")}
                >
                  {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </div>
                <span
                  className={[
                    "text-xs whitespace-nowrap hidden sm:inline",
                    active ? "text-foreground font-medium" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={[
                    "h-px flex-1 mx-2 transition-colors",
                    done ? "bg-[var(--purple-glow)]" : "bg-input",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>

      {step === 0 && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Organization name" required>
              <Input required name="organizationName" value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)} className={fieldClass} placeholder="Organization" />
            </Field>
            <Field label="Contact person" required>
              <Input required name="contactPerson" value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)} className={fieldClass} placeholder="Full name" />
            </Field>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Email" required>
              <Input required name="email" type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} className={fieldClass} placeholder="you@company.com" />
            </Field>
            <Field label="Phone">
              <Input name="phone" type="tel" value={phone}
                onChange={(e) => setPhone(e.target.value)} className={fieldClass} placeholder="+254 7xx xxx xxx" />
            </Field>
          </div>
          <Field label="Organization type" required>
            <select required name="organizationType" value={organizationType}
              onChange={(e) => setOrganizationType(e.target.value)} className={fieldClass}>
              <option value="" disabled>Select organization type</option>
              {ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </Field>
        </div>
      )}

      {step === 1 && (
        <div>
          <span className="text-xs font-medium text-foreground/80 mb-2 inline-block">
            Interested in <span className="text-[var(--gold)]">*</span>
          </span>

          {hasPinnedInterest && (
            <div className="mb-3 flex items-start gap-2 rounded-lg border border-[var(--purple-glow)]/40 bg-[var(--purple-glow)]/10 px-3 py-2">
              <Check className="h-3.5 w-3.5 mt-0.5 text-[var(--purple-glow)] shrink-0" />
              <p className="text-xs text-foreground/80">
                <span className="font-medium">{presetInterest}</span>
                {presetEvent && <> — {presetEvent}</>}
                <span className="block text-muted-foreground mt-0.5">
                  Added from the button you clicked. Add more areas below if relevant.
                </span>
              </p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-2">
            {INTERESTS.map((i) => (
              <label key={i} className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer rounded-lg border border-input px-2.5 py-2 hover:border-[var(--purple-glow)] transition-colors">
                <input
                  type="checkbox"
                  checked={i === "Other" ? otherChecked : interests.includes(i)}
                  onChange={() => toggleInterest(i)}
                  className="h-3.5 w-3.5 rounded border-input accent-[var(--purple-glow)] shrink-0"
                />
                {i}
              </label>
            ))}
          </div>

          {otherChecked && (
            <div className="mt-3">
              <Input name="otherInterest" required={otherChecked} value={otherText}
                onChange={(e) => setOtherText(e.target.value)} className={fieldClass}
                placeholder="Tell us what you're interested in" autoFocus />
            </div>
          )}

          {!step2Valid && (
            <p className="text-[11px] text-muted-foreground mt-2">Select at least one area of interest.</p>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <Field label="Tell us about your partnership interest">
            <textarea name="message" rows={6} className={fieldClass}
              placeholder="A few sentences about what you'd like to explore with us" />
          </Field>

          <div className="rounded-lg border border-input bg-muted/30 px-3 py-2.5 space-y-1">
            <p className="text-xs text-muted-foreground">
              <span className="text-foreground/80 font-medium">Organization: </span>
              {organizationName || "—"}
            </p>
            {presetEvent && (
              <p className="text-xs text-muted-foreground">
                <span className="text-foreground/80 font-medium">Event: </span>
                {presetEvent}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              <span className="text-foreground/80 font-medium">Interests: </span>
              {[
                // ...(hasPinnedInterest ? [presetInterest as string] : []),
                ...interests,
                ...(otherChecked && otherText ? [otherText] : []),
              ].join(", ") || "—"}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-input">
        <Button type="button" variant="outline" size="sm" onClick={goBack} disabled={step === 0}
          className={step === 0 ? "invisible" : ""}>
          <ChevronLeft className="h-4 w-4 mr-1" /> Back
        </Button>
        {step < STEPS.length - 1 ? (
          <Button type="button" size="sm" onClick={goNext} disabled={step === 0 ? !step1Valid : !step2Valid}
            className="gradient-bg animated-gradient text-white border-0 glow-shadow">
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        ) : (
          <Button type="submit" size="sm" disabled={submitting}
            className="gradient-bg animated-gradient text-white border-0 glow-shadow">
            {submitting ? "Submitting…" : "Submit Enquiry"}
          </Button>
        )}
      </div>
    </form>
  );
}