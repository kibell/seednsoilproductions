import { episodes } from "../data/content";
import VideoEmbed from "../components/VideoEmbed";
import { formatLocalDate } from "../utils/date";
import "./TheParable.css";

export default function TheParable() {
  return (
    <main className="page-wrapper parable-page">
      <section className="page-hero parable-hero">
        <div className="container">
          <span className="section-label">Series</span>
          <h1>The Parable</h1>
          <div className="divider divider-center" />
          <p className="page-hero-desc parable-hero-desc">
            A multi-episode series exploring the Parable of the Sower — and
            what it means for our calling, our hearts, and our lives.
          </p>
          <div className="scripture-block" style={{ maxWidth: "600px", margin: "2rem auto 0", textAlign: "left" }}>
            <p>
              "Listen! A farmer went out to sow his seed... Still other seed
              fell on good soil. It came up and yielded a crop, a hundred times
              more than was sown."
            </p>
            <cite>Luke 8:5, 8</cite>
          </div>
        </div>
      </section>

      {/* Concept section */}
      <section className="section concept-section">
        <div className="container">
          <div className="concept-grid">
            <div className="concept-text">
              <span className="section-label">The Concept</span>
              <h2>What Is The Parable?</h2>
              <div className="divider" />
              <p>
                The Parable is a creative project built around one of the most
                important stories Jesus ever told — the Parable of the Sower.
                In it, a farmer scatters seed on four different types of ground:
                the path, rocky soil, thorny ground, and good soil.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Jesus said, <em>"He who has ears, let him hear."</em> The
                question isn't just about the seed — it's about the soil. It's
                about us. What kind of ground are our hearts? What are we doing
                with what God has planted in us?
              </p>
              <p style={{ marginTop: "1rem" }}>
                Through music, storytelling, and reflection, The Parable
                explores these questions honestly — through the lens of faith,
                fatherhood, purpose, and the real work of growth.
              </p>
            </div>
            <div className="soil-types">
              {[
                { type: "The Path", desc: "The word is heard but not received — stolen before it can take root.", icon: "⬜" },
                { type: "Rocky Ground", desc: "The word brings joy, but shallow roots can't survive the heat.", icon: "🪨" },
                { type: "Thorny Ground", desc: "Worries, wealth, and distraction choke out what was growing.", icon: "🌿" },
                { type: "Good Soil", desc: "The word is received, understood, and bears fruit — thirty, sixty, a hundredfold.", icon: "🌱" },
              ].map((soil) => (
                <div key={soil.type} className="soil-card">
                  <span className="soil-icon">{soil.icon}</span>
                  <div>
                    <h4>{soil.type}</h4>
                    <p>{soil.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="section episodes-section">
        <div className="container">
          <span className="section-label">The Episodes</span>
          <h2>Watch the Series</h2>
          <div className="divider" style={{ marginBottom: "3rem" }} />

          <div className="episodes-list">
            {episodes.map((ep) => (
              <div
                key={ep.id}
                className={`episode-block${ep.status === "coming-soon" ? " coming-soon" : ""}`}
              >
                <div className="episode-header">
                  <span className="ep-label">Episode</span>
                  <span className="ep-number">{ep.number}</span>
                  <div className="ep-title-block">
                    <h3>{ep.title}</h3>
                    <p className="ep-subtitle">{ep.subtitle}</p>
                  </div>
                  {ep.status === "coming-soon" && (
                    <span className="ep-soon-badge">Coming Soon</span>
                  )}
                  {ep.releaseDate && ep.status !== "coming-soon" && (
                    <span className="ep-date">
                      {formatLocalDate(ep.releaseDate, {
                        year: "numeric", month: "long",
                      })}
                    </span>
                  )}
                </div>

                <div className="episode-content">
                  <div className="episode-main">
                    {ep.status !== "coming-soon" ? (
                      <VideoEmbed embedId={ep.embedId} title={ep.title} />
                    ) : (
                      <div className="coming-soon-placeholder">
                        <span>✦</span>
                        <p>Episode {ep.number} — In Production</p>
                        <small>Subscribe to be notified</small>
                      </div>
                    )}

                    <div className="scripture-block" style={{ marginTop: "1.5rem" }}>
                      <p>{ep.scripture}</p>
                      <cite>{ep.scriptureRef}</cite>
                    </div>
                  </div>

                  <div className="episode-sidebar">
                    <div className="ep-summary">
                      <h4>About This Episode</h4>
                      <p>{ep.summary}</p>
                    </div>

                    {ep.themes.length > 0 && (
                      <div className="ep-themes">
                        <h4>Themes</h4>
                        <div className="theme-tags">
                          {ep.themes.map((t) => (
                            <span key={t} className="theme-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {ep.reflectionQuestions.length > 0 && (
                      <div className="ep-reflection">
                        <h4>Reflection Questions</h4>
                        <ol className="reflection-list">
                          {ep.reflectionQuestions.map((q, i) => (
                            <li key={i}>{q}</li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {ep.songs.length > 0 && (
                      <div className="ep-songs">
                        <h4>Related Songs</h4>
                        {ep.songs.map((s) => (
                          <span key={s} className="theme-tag">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
