"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { Modal, Field, ConsentCheck, fieldClass } from "./modal";

/**
 * TODO(backend): this currently only simulates a submission locally.
 * Wire `handleSubmit` to a real endpoint — e.g. POST to
 * https://api.funzo.../enquiries/register — once that route exists.
 * Keep the payload shape below so the API contract is obvious.
 */
interface RegistrationPayload {
  participantName: string;
  age: string;
  school: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  location: string;
  event: string;
  hearAbout: string;
}

export function RegisterTrigger({
  eventName,
  label = "Register",
  variant = "default",
  className,
}: {
  eventName?: string;
  label?: string;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        size="sm"
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
        {label}
      </Button>
      <RegistrationModal open={open} onClose={() => setOpen(false)} eventName={eventName} />
    </>
  );
}

export function RegistrationModal({
  open,
  onClose,
  eventName,
}: {
  open: boolean;
  onClose: () => void;
  eventName?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);

  function handleClose() {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setC1(false);
      setC2(false);
      setC3(false);
      setC4(false);
    }, 250);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: RegistrationPayload = {
      participantName: String(data.get("participantName") || ""),
      age: String(data.get("age") || ""),
      school: String(data.get("school") || ""),
      guardianName: String(data.get("guardianName") || ""),
      guardianPhone: String(data.get("guardianPhone") || ""),
      guardianEmail: String(data.get("guardianEmail") || ""),
      location: String(data.get("location") || ""),
      event: eventName ?? "General interest",
      hearAbout: String(data.get("hearAbout") || ""),
    };

    // TODO(backend): replace with a real fetch() to your enquiries API.
    // await fetch("https://api.funzo.../enquiries/register", { method: "POST", body: JSON.stringify(payload) });
    console.log("Registration submitted", payload);

    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Register for a FunzoCoin Kids Experience"
      description={
        eventName
          ? `You're registering interest for: ${eventName}`
          : "Tell us about the child you'd like to register."
      }
    >
      {submitted ? (
        <div className="text-center py-6">
          <CheckCircle2 className="h-10 w-10 mx-auto text-[var(--cyan-glow)] mb-3" />
          <p className="font-semibold">Thank you!</p>
          <p className="text-sm text-muted-foreground mt-1">
            We&apos;ve received your registration and will follow up by email
            or WhatsApp with next steps.
          </p>
          <Button className="mt-6 gradient-bg text-white border-0" onClick={handleClose}>
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Participant's name" required>
              <Input required name="participantName" className={fieldClass} placeholder="Full name" />
            </Field>
            <Field label="Age" required>
              <Input required name="age" type="number" min={3} max={18} className={fieldClass} placeholder="Age" />
            </Field>
          </div>

          <Field label="School">
            <Input name="school" className={fieldClass} placeholder="School name (optional)" />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Parent / Guardian name" required>
              <Input required name="guardianName" className={fieldClass} placeholder="Full name" />
            </Field>
            <Field label="Parent / Guardian phone" required>
              <Input required name="guardianPhone" type="tel" className={fieldClass} placeholder="+254 7xx xxx xxx" />
            </Field>
          </div>

          <Field label="Parent / Guardian email" required>
            <Input required name="guardianEmail" type="email" className={fieldClass} placeholder="you@example.com" />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Location / County" required>
              <Input required name="location" className={fieldClass} placeholder="e.g. Nairobi" />
            </Field>
            <Field label="Event">
              <Input readOnly disabled value={eventName ?? "General interest"} className={`${fieldClass} opacity-70`} />
            </Field>
          </div>

          <Field label="How did you hear about us?">
            <Input name="hearAbout" className={fieldClass} placeholder="e.g. school, social media, a friend" />
          </Field>

          <div className="space-y-2 pt-1">
            <ConsentCheck required checked={c1} onChange={setC1} label="I am the parent/guardian of the participant." />
            <ConsentCheck required checked={c2} onChange={setC2} label="I confirm that the information provided is accurate." />
            <ConsentCheck required checked={c3} onChange={setC3} label="I have read the relevant programme information." />
            <ConsentCheck
              required
              checked={c4}
              onChange={setC4}
              label="I understand participation is subject to programme capacity and applicable safeguarding requirements."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="w-full gradient-bg animated-gradient text-white border-0 glow-shadow"
          >
            {submitting ? "Submitting…" : "Submit Registration"}
          </Button>

          <p className="text-[11px] text-muted-foreground text-center">
            Photography/video consent is handled separately — see our{" "}
            <a href="/child-safeguarding" className="underline underline-offset-2">
              Child Safeguarding Policy
            </a>
            .
          </p>
        </form>
      )}
    </Modal>
  );
}