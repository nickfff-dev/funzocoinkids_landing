
const features = [
  { title: "Smart Screen Time", description: "Helping children develop healthy and productive technology habits through guided digital learning.", icon: "⏰" },
  { title: "Creativity Over Consumption", description: "Children learn AI, storytelling, coding, design, music, and innovation instead of endless scrolling.", icon: "🎨" },
  { title: "Offline Rewards", description: "Kids earn rewards for reading, sports, exercise, teamwork, creativity, and community activities.", icon: "🏆" },
  { title: "Parent-Friendly Monitoring", description: "Designed with parents in mind using safe learning environments and healthy digital wellness principles.", icon: "🛡️" },
];

const promises = [
  "Healthy digital habits",
  "Creativity and innovation",
  "Child online safety",
  "Balanced screen time",
  "Positive real-world activities",
  "Safe AI education for children",
];

export function DigitalWellness() {
  return (
    <section id="wellness" className="w-full py-20 px-4 sm:px-6 md:px-12 adinkra-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block glass text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Healthy Digital Habits
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Helping Children Use Technology{" "}
            <span className="gradient-text">Safely, Creatively & Responsibly</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            FunzoCoin Kids transforms screen time into learning time through AI education,
            creativity, financial literacy, innovation, and healthy real-world activities.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="glass rounded-3xl p-8 hover:glow-shadow transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Balanced Learning Model */}
        <div className="gradient-bg animated-gradient rounded-[2rem] p-8 md:p-16 text-white mb-20 glow-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Balanced Learning Model</h3>
              <p className="text-white/85 text-lg leading-relaxed mb-8">
                We encourage children to balance digital learning with physical activity,
                creativity, family interaction, sports, and healthy offline experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Learn", "Create", "Play", "Move", "Rest"].map((t) => (
                  <div key={t} className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl text-lg font-semibold">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-3xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold mb-6 text-center">30-30 Balance Model</h4>
              <div className="space-y-5">
                <div className="p-6 rounded-2xl border" style={{ background: "color-mix(in oklab, var(--electric) 8%, transparent)" }}>
                  <h5 className="text-xl font-bold mb-2" style={{ color: "var(--brand-navy)" }}>30 Minutes Learning</h5>
                  <p className="text-muted-foreground">AI learning, coding, creativity, financial literacy, and innovation.</p>
                </div>
                <div className="p-6 rounded-2xl border" style={{ background: "color-mix(in oklab, var(--gold) 14%, transparent)" }}>
                  <h5 className="text-xl font-bold mb-2" style={{ color: "var(--brand-gold)" }}>30 Minutes Offline Activity</h5>
                  <p className="text-muted-foreground">Sports, reading, fitness, art, teamwork, family interaction, and outdoor play.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="inline-block glass text-accent-foreground text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Why This Matters
            </span>
            <h3 className="text-4xl font-bold text-foreground mb-6 leading-tight">
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
                  <span className="text-2xl leading-none" style={{ color: "var(--brand-gold)" }}>•</span>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[2rem] p-10 glow-shadow">
            <h4 className="text-3xl font-bold text-foreground mb-8 text-center">Our Promise</h4>
            <div className="space-y-4">
              {promises.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-muted/60 p-4 rounded-2xl">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0" style={{ background: "var(--brand-navy)" }}>
                    ✓
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center gradient-bg animated-gradient rounded-[2rem] p-10 md:p-12 text-white glow-shadow">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Create More. Scroll Less.</h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join FunzoCoin Kids and help children build healthy digital habits,
            future-ready skills, creativity, and responsible technology use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href='#contact'
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-lg font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:scale-105"
              style={{ color: "var(--brand-navy)" }}
            >
              Join the Safe Digital Future
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white hover:bg-white text-lg font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:text-[color:var(--brand-navy)]"
            >
              About FunzoCoin Kids
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
