"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Field, fieldClass } from "./form-utils"

const STEPS = [
  { label: "Participant" },
  { label: "Guardian" },
  { label: "Consent" },
]

export function RegistrationForm({ presetEvent }: { presetEvent?: string }) {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Step 1: participant
  const [participantName, setParticipantName] = useState("")
  const [age, setAge] = useState("")
  const [school, setSchool] = useState("")

  // Step 2: guardian
  const [guardianName, setGuardianName] = useState("")
  const [guardianPhone, setGuardianPhone] = useState("")
  const [guardianEmail, setGuardianEmail] = useState("")
  const [location, setLocation] = useState("")
  const [hearAbout, setHearAbout] = useState("")

  // Step 3: consent
  const [c1, setC1] = useState(false)
  const [c2, setC2] = useState(false)
  const [c3, setC3] = useState(false)
  const [c4, setC4] = useState(false)

  const step1Valid = participantName.trim() && age.trim()
  const step2Valid =
    guardianName.trim() &&
    guardianPhone.trim() &&
    guardianEmail.trim() &&
    location.trim()
  const step3Valid = c1 && c2 && c3 && c4

  function goNext(e?: React.MouseEvent) {
    e?.preventDefault()
    e?.stopPropagation()
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  function goBack(e?: React.MouseEvent) {
    e?.preventDefault()
    e?.stopPropagation()
    setStep((s) => Math.max(s - 1, 0))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Guard: only the last step is allowed to actually submit.
    if (step !== STEPS.length - 1) {
      goNext()
      return
    }
    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "")
    setSubmitting(true)

    const payload = {
      participantName,
      age,
      school,
      guardianName,
      guardianPhone,
      guardianEmail,
      location,
      event: presetEvent ?? "General interest",
      hearAbout,
    }

    // TODO(backend): replace with a real fetch() to your enquiries API,
    // e.g. POST to https://api.funzo.../enquiries/register
    console.log("Registration submitted", payload)

    try {
      const response = await fetch(`${apiUrl}/eventregistration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error("Registration failed")
      setSubmitting(false)
      setSubmitted(true)
    } catch (err) {
      console.log(err instanceof Error ? err.message : "unknown error occured")
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-cyan-glow" />
        <p className="font-semibold">Thank you!</p>
        <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
          We&apos;ve received your registration and will follow up by email or
          WhatsApp with next steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* Step indicator */}
      <div className="mb-6 flex items-center gap-2 px-0.5">
        {STEPS.map((s, i) => {
          const active = i === step
          const done = i < step
          return (
            <div key={s.label} className="flex items-center last:flex-none">
              <div className="flex items-center gap-2">
                <div
                  className={[
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-medium transition-colors",
                    done
                      ? "border-purple-glow bg-purple-glow text-white"
                      : active
                        ? "border-purple-glow text-purple-glow"
                        : "border-input text-muted-foreground",
                  ].join(" ")}
                >
                  {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </div>
                <span
                  className={[
                    "hidden text-xs whitespace-nowrap sm:inline",
                    active
                      ? "font-medium text-foreground"
                      : "text-muted-foreground",
                  ].join(" ")}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={[
                    "mx-2 h-px flex-1 transition-colors",
                    done ? "bg-purple-glow" : "bg-input",
                  ].join(" ")}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Step 1: Participant */}
      {step === 0 && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Participant's name" required>
              <Input
                required
                name="participantName"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                className={fieldClass}
                placeholder="Full name"
              />
            </Field>
            <Field label="Age" required>
              <Input
                required
                name="age"
                type="number"
                min={3}
                max={18}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className={fieldClass}
                placeholder="Age"
              />
            </Field>
          </div>

          <Field label="School">
            <Input
              name="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className={fieldClass}
              placeholder="School name (optional)"
            />
          </Field>

          <Field label="Event">
            <Input
              readOnly
              disabled
              value={presetEvent ?? "General interest"}
              className={`${fieldClass} opacity-70`}
            />
          </Field>
        </div>
      )}

      {/* Step 2: Guardian */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Parent / Guardian name" required>
              <Input
                required
                name="guardianName"
                value={guardianName}
                onChange={(e) => setGuardianName(e.target.value)}
                className={fieldClass}
                placeholder="Full name"
              />
            </Field>
            <Field label="Parent / Guardian phone" required>
              <Input
                required
                name="guardianPhone"
                type="tel"
                value={guardianPhone}
                onChange={(e) => setGuardianPhone(e.target.value)}
                className={fieldClass}
                placeholder="+254 7xx xxx xxx"
              />
            </Field>
          </div>

          <Field label="Parent / Guardian email" required>
            <Input
              required
              name="guardianEmail"
              type="email"
              value={guardianEmail}
              onChange={(e) => setGuardianEmail(e.target.value)}
              className={fieldClass}
              placeholder="you@example.com"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Location / County" required>
              <Input
                required
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={fieldClass}
                placeholder="e.g. Nairobi"
              />
            </Field>
            <Field label="How did you hear about us?">
              <Input
                name="hearAbout"
                value={hearAbout}
                onChange={(e) => setHearAbout(e.target.value)}
                className={fieldClass}
                placeholder="e.g. school, social media"
              />
            </Field>
          </div>
        </div>
      )}

      {/* Step 3: Consent */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="space-y-2.5">
            <ConsentCheck
              checked={c1}
              onChange={setC1}
              label="I am the parent/guardian of the participant."
            />
            <ConsentCheck
              checked={c2}
              onChange={setC2}
              label="I confirm that the information provided is accurate."
            />
            <ConsentCheck
              checked={c3}
              onChange={setC3}
              label="I have read the relevant programme information."
            />
            <ConsentCheck
              checked={c4}
              onChange={setC4}
              label="I understand participation is subject to programme capacity and applicable safeguarding requirements."
            />
          </div>

          <div className="space-y-1 rounded-lg border border-input bg-muted/30 px-3 py-2.5">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">
                Participant:{" "}
              </span>
              {participantName || "—"} {age && `(${age})`}
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">Event: </span>
              {presetEvent ?? "General interest"}
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">Guardian: </span>
              {guardianName || "—"} · {guardianPhone || "—"}
            </p>
          </div>

          <p className="text-[11px] text-muted-foreground">
            Photography/video consent is handled separately — see our{" "}
            <a
              href="/child-safeguarding"
              className="underline underline-offset-2"
            >
              Child Safeguarding Policy
            </a>
            .
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between border-t border-input pt-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={goBack}
          disabled={step === 0}
          className={step === 0 ? "invisible" : ""}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>

        {step < STEPS.length - 1 ? (
          <Button
            type="button"
            size="sm"
            onClick={goNext}
            disabled={step === 0 ? !step1Valid : !step2Valid}
            className="gradient-bg animated-gradient glow-shadow border-0 text-white"
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            size="sm"
            disabled={submitting || !step3Valid}
            className="gradient-bg animated-gradient glow-shadow border-0 text-white"
          >
            {submitting ? "Submitting…" : "Submit Registration"}
          </Button>
        )}
      </div>
    </form>
  )
}

function ConsentCheck({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
}) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 text-xs text-muted-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-[var(--purple-glow)]"
      />
      <span>{label}</span>
    </label>
  )
}
