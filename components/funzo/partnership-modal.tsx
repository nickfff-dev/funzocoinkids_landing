"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { Modal, Field, fieldClass } from "./modal";

/**
 * TODO(backend): wire `handleSubmit` to a real endpoint, e.g. POST to
 * https://api.funzo.../enquiries/partnership — this currently only
 * simulates a submission locally.
 */
const ORG_TYPES = [
  "Corporate",
  "CSR / Foundation",
  "Government",
  "NGO / Development Partner",
  "School",
  "Technology Company",
  "Media",
  "University / Research",
  "Other",
];

const INTERESTS = [
  "Sponsor a Child",
  "Sponsor a School",
  "Sponsor an Event",
  "AI Bootcamp",
  "Blockchain Workshop",
  "Football & Innovation Day",
  "School Innovation Tour",
  "FunzoHack",
  "Technology Partnership",
  "Mentorship",
  "Funding Partnership",
  "Media Partnership",
];

export function PartnerTrigger({
  presetInterest,
  label = "Become a Partner",
  variant = "outline",
  className,
}: {
  presetInterest?: string;
  label?: string;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        size="lg"
        variant={variant}
        className={
          className ??
          (variant === "outline"
            ? "border-2"
            : variant === "ghost"
            ? undefined
            : "gradient-bg text-white border-0")
        }
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex items-center gap-1">{label}</span>
      </Button>
      <PartnershipModal open={open} onClose={() => setOpen(false)} presetInterest={presetInterest} />
    </>
  );
}

export function PartnershipModal({
  open,
  onClose,
  presetInterest,
}: {
  open: boolean;
  onClose: () => void;
  presetInterest?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [interests, setInterests] = useState<string[]>(presetInterest ? [presetInterest] : []);

  function toggleInterest(v: string) {
    setInterests((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setInterests(presetInterest ? [presetInterest] : []);
    }, 250);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      organizationName: String(data.get("organizationName") || ""),
      contactPerson: String(data.get("contactPerson") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      organizationType: String(data.get("organizationType") || ""),
      interests,
      message: String(data.get("message") || ""),
    };

    // TODO(backend): replace with a real fetch() to your enquiries API.
    // await fetch("https://api.funzo.../enquiries/partnership", { method: "POST", body: JSON.stringify(payload) });
    console.log("Partnership enquiry submitted", payload);

    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Partner With FunzoCoin Kids"
      description="Tell us a little about your organization and how you'd like to get involved."
      widthClass="max-w-xl"
    >
      {submitted ? (
        <div className="text-center py-6">
          <CheckCircle2 className="h-10 w-10 mx-auto text-[var(--cyan-glow)] mb-3" />
          <p className="font-semibold">Thank you!</p>
          <p className="text-sm text-muted-foreground mt-1">
            Your partnership enquiry has been received. Our team will follow
            up within a few business days with next steps.
          </p>
          <Button className="mt-6 gradient-bg text-white border-0" onClick={handleClose}>
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Organization name" required>
              <Input required name="organizationName" className={fieldClass} placeholder="Organization" />
            </Field>
            <Field label="Contact person" required>
              <Input required name="contactPerson" className={fieldClass} placeholder="Full name" />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Email" required>
              <Input required name="email" type="email" className={fieldClass} placeholder="you@company.com" />
            </Field>
            <Field label="Phone">
              <Input name="phone" type="tel" className={fieldClass} placeholder="+254 7xx xxx xxx" />
            </Field>
          </div>

          <Field label="Organization type" required>
            <select required name="organizationType" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select organization type
              </option>
              {ORG_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>

          <div>
            <span className="text-xs font-medium text-foreground/80 mb-2 inline-block">
              Interested in <span className="text-[var(--gold)]">*</span>
            </span>
            <div className="grid sm:grid-cols-2 gap-2">
              {INTERESTS.map((i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer rounded-lg border border-input px-2.5 py-2 hover:border-[var(--purple-glow)] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={interests.includes(i)}
                    onChange={() => toggleInterest(i)}
                    className="h-3.5 w-3.5 rounded border-input accent-[var(--purple-glow)] shrink-0"
                  />
                  {i}
                </label>
              ))}
            </div>
            {interests.length === 0 && (
              <p className="text-[11px] text-muted-foreground mt-1.5">
                Select at least one area of interest.
              </p>
            )}
          </div>

          <Field label="Tell us about your partnership interest">
            <textarea
              name="message"
              rows={4}
              className={fieldClass}
              placeholder="A few sentences about what you'd like to explore with us"
            />
          </Field>

          <Button
            type="submit"
            size="lg"
            disabled={submitting || interests.length === 0}
            className="w-full gradient-bg animated-gradient text-white border-0 glow-shadow"
          >
            {submitting ? "Submitting…" : "Submit Partnership Enquiry"}
          </Button>
        </form>
      )}
    </Modal>
  );
}