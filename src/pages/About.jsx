import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <main className="page-wrapper about-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">The Story</span>
          <h1>About</h1>
          <div className="divider divider-center" />
        </div>
      </section>

      {/* Main about section */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about-photo">
              <div className="photo-placeholder">
                <span className="photo-icon">✦</span>
                <p>Artist Photo</p>
                <small>Replace with your image</small>
              </div>
              <div className="about-quick-facts">
                <div className="quick-fact">
                  <span className="fact-label">Project</span>
                  <span className="fact-value">Seed & Soil</span>
                </div>
                <div className="quick-fact">
                  <span className="fact-label">Series</span>
                  <span className="fact-value">The Parable</span>
                </div>
                <div className="quick-fact">
                  <span className="fact-label">Scripture</span>
                  <span className="fact-value">Matthew 13 / Luke 8</span>
                </div>
                <div className="quick-fact">
                  <span className="fact-label">Focus</span>
                  <span className="fact-value">Faith · Music · Story</span>
                </div>
              </div>
            </div>

            <div className="about-text">
              <span className="section-label">The Mission</span>
              <h2>What Is Seed & Soil?</h2>
              <div className="divider" />

              <p>
                Seed & Soil is a faith-driven music and storytelling project
                that blends Scripture, music, real-life experience, fatherhood,
                purpose, and honest reflection. It's not a polished platform —
                it's a process. A public journal of what it looks like to trust
                God with the seeds He's planted in you, even when the soil
                feels hard.
              </p>

              <p>
                The project is built around the many parables of Jesus — one of
                the most important things Jesus ever said. The idea is simple:{" "}
                <em>
                  people are like soil, and the Word, gifts, calling, and
                  purpose are seeds being planted.
                </em>{" "}
                The question the project keeps asking is: what kind of ground
                are you?
              </p>

              <div className="scripture-block">
                <p>
                  "But the seed falling on good soil refers to someone who
                  hears the word and understands it. This is the one who
                  produces a crop, yielding a hundred, sixty or thirty times
                  what was sown."
                </p>
                <cite>Matthew 13:23</cite>
              </div>

              <p>
                This project was born out of personal conviction — years of
                wrestling with calling, sitting with dreams that hadn't grown
                yet, and learning what it means to actually be faithful. It's
                about fatherhood and what you want to model for your kids. It's
                about faith that isn't performance but persistence. It's about
                the honest tension between who you are and who God is making
                you.
              </p>

              <p>
                The music isn't designed to be "Christian music" in the
                programmatic sense. It's designed to be <em>honest music</em>{" "}
                — where Christ shows up because He's actually in the story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: "center" }}>
            <span className="section-label">The Pillars</span>
            <h2>What This Project Is About</h2>
            <div className="divider divider-center" />
          </div>
          <div className="pillars-grid">
            {[
              { icon: "📖", title: "Scripture", desc: "Every song, episode, and reflection is rooted in the Word. Not as decoration — as foundation." },
              { icon: "🎵", title: "Music", desc: "Songs that carry weight. Written to sit with, not just stream and forget." },
              { icon: "📖", title: "Story", desc: "The Parable series is cinematic storytelling for people who take their faith seriously." },
              { icon: "👨‍👦", title: "Fatherhood", desc: "Being a dad shapes this project. What you carry, what you model, what you pass on." },
              { icon: "🌱", title: "Growth", desc: "This isn't a destination — it's a process. Seed & Soil is about the long work of becoming." },
              { icon: "💬", title: "Honesty", desc: "No performance. The doubts, the dry seasons, the breakthroughs — all of it." },
            ].map((p) => (
              <div key={p.title} className="pillar-card">
                <span className="pillar-icon">{p.icon}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container">
          <div className="about-cta-inner">
            <h2>Join the Journey</h2>
            <div className="divider divider-center" />
            <p>Listen to the music. Watch the series. Read the reflections. Follow along.</p>
            <div className="about-cta-btns">
              <Link to="/music" className="btn btn-primary">Listen to the Music</Link>
              <Link to="/the-parable" className="btn btn-outline">Watch The Parable</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
