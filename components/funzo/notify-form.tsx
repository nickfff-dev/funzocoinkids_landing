"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"
import { Field, fieldClass } from "./form-utils"

const AUDIENCES = [
  "Parent / Guardian",
  "Student",
  "School / Educator",
  "Sponsor / Partner",
]

/**
 * TODO(backend): wire this up to your mailing-list provider (e.g. a
 * Resend Audience/Topic, Mailchimp list, etc.) — one list per programme
 * name so you can send targeted "registration is open" emails later.
 */
export function NotifyForm({ programName }: { programName: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [audience, setAudience] = useState(AUDIENCES[0])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      program: programName,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      audience,
    }

    // TODO(backend): POST to e.g. https://api.funzocoinkids.com/enquiries/notify
    console.log("Notify-me signup", payload)

    await new Promise((r) => setTimeout(r, 400))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-cyan-glow" />
        <p className="font-semibold">You&apos;re on the list!</p>
        <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
          We&apos;ll email you within 24 hours of registration opening for{" "}
          {programName}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Your name" required>
        <Input
          required
          name="name"
          className={fieldClass}
          placeholder="Full name"
        />
      </Field>

      <Field label="Email" required>
        <Input
          required
          name="email"
          type="email"
          className={fieldClass}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="I am a" required>
        <select
          required
          name="audience"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className={fieldClass}
        >
          {AUDIENCES.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="gradient-bg animated-gradient glow-shadow w-full border-0 text-white"
      >
        {submitting ? "Joining…" : "Notify Me"}
      </Button>
    </form>
  )
}
