import { Button } from "../ui/button"
import { EnquiryModal } from "./enquiries"
import { RegistrationForm } from "./registration-form"
import { NotifyForm } from "./notify-form"

const features = [
  {
    title: "Smart Screen Time",
    description:
      "Helping children develop healthy and productive technology habits through guided digital learning.",
    icon: "⏰",
  },
  {
    title: "Creativity Over Consumption",
    description:
      "Children learn AI, storytelling, coding, design, music, and innovation instead of endless scrolling.",
    icon: "🎨",
  },
  {
    title: "Offline Rewards",
    description:
      "Kids earn rewards for reading, sports, exercise, teamwork, creativity, and community activities.",
    icon: "🏆",
  },
  {
    title: "Parent-Friendly Monitoring",
    description:
      "Designed with parents in mind using safe learning environments and healthy digital wellness principles.",
    icon: "🛡️",
  },
]

const promises = [
  "Healthy digital habits",
  "Creativity and innovation",
  "Child online safety",
  "Balanced screen time",
  "Positive real-world activities",
  "Safe AI education for children",
]

export function DigitalWellness() {
  return (
    <section
      id="wellness"
      className="adinkra-pattern w-full px-4 py-20 sm:px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="glass mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold text-primary">
            Healthy Digital Habits
          </span>
          <h2 className="mb-6 text-4xl leading-tight font-bold text-foreground md:text-6xl">
            Helping Children Use Technology{" "}
            <span className="gradient-text">
              Safely, Creatively & Responsibly
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            FunzoCoin Kids transforms screen time into learning time through AI
            education, creativity, financial literacy, innovation, and healthy
            real-world activities.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass hover:glow-shadow rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 text-5xl">{f.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {f.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Balanced Learning Model */}
        <div className="gradient-bg animated-gradient glow-shadow mb-20 rounded-4xl p-8 text-white md:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-4xl font-bold">
                Balanced Learning Model
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-white/85">
                We encourage children to balance digital learning with physical
                activity, creativity, family interaction, sports, and healthy
                offline experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Learn", "Create", "Play", "Move", "Rest"].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl bg-white/20 px-5 py-3 text-lg font-semibold backdrop-blur-md"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-card p-8 text-card-foreground shadow-xl">
              <h4 className="mb-6 text-center text-2xl font-bold">
                30-30 Balance Model
              </h4>
              <div className="space-y-5">
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    background:
                      "color-mix(in oklab, var(--electric) 8%, transparent)",
                  }}
                >
                  <h5
                    className="mb-2 text-xl font-bold"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    30 Minutes Learning
                  </h5>
                  <p className="text-muted-foreground">
                    AI learning, coding, creativity, financial literacy, and
                    innovation.
                  </p>
                </div>
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    background:
                      "color-mix(in oklab, var(--gold) 14%, transparent)",
                  }}
                >
                  <h5
                    className="mb-2 text-xl font-bold"
                    style={{ color: "var(--brand-gold)" }}
                  >
                    30 Minutes Offline Activity
                  </h5>
                  <p className="text-muted-foreground">
                    Sports, reading, fitness, art, teamwork, family interaction,
                    and outdoor play.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="glass mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold text-accent-foreground">
              Why This Matters
            </span>
            <h3 className="mb-6 text-4xl leading-tight font-bold text-foreground">
              Creating a Safer Digital Future for Children
            </h3>
            <div className="space-y-5 text-lg text-muted-foreground">
              {[
                "Children are spending increasing hours online every day.",
                "Excessive screen time can affect focus, sleep, and physical activity.",
                "Many children consume content without learning valuable digital skills.",
                "Parents need safe, educational, and balanced technology platforms.",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    className="text-2xl leading-none"
                    style={{ color: "var(--brand-gold)" }}
                  >
                    •
                  </span>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass glow-shadow rounded-4xl p-10">
            <h4 className="mb-8 text-center text-3xl font-bold text-foreground">
              Our Promise
            </h4>
            <div className="space-y-4">
              {promises.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl bg-muted/60 p-4"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white"
                    style={{ background: "var(--brand-navy)" }}
                  >
                    ✓
                  </div>
                  <p className="font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="gradient-bg animated-gradient glow-shadow rounded-4xl p-10 text-center text-white md:p-12">
          <h3 className="mb-6 text-4xl font-bold md:text-5xl">
            Create More. Scroll Less.
          </h3>
          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white/90">
            Join FunzoCoin Kids and help children build healthy digital habits,
            future-ready skills, creativity, and responsible technology use.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <EnquiryModal
              title="Enroll a Learner to FunzoCoin Kids Program"
              description="Tell us about the child you'd like to register."
              trigger={
                <Button
                  variant="link"
                  style={{ color: "var(--brand-navy)" }}
                  className="rounded-2xl bg-white px-8 py-8 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:no-underline"
                >
                  Join the Safe Digital Future
                </Button>
              }
            >
              <RegistrationForm />
            </EnquiryModal>

            {/* <a
              href='#contact'
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-lg font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:scale-105"
              style={{ color: "var(--brand-navy)" }}
            >
              Join the Safe Digital Future
            </a> */}
            <a
              href="#about"
              className="rounded-2xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-(--brand-navy)"
            >
              About FunzoCoin Kids
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
