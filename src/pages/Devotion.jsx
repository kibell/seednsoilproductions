import { devotionals } from "../data/content";
import { formatLocalDate } from "../utils/date";
import "./Devotion.css";

export default function Devotion() {
  return (
    <main className="page-wrapper devotion-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Reflections</span>
          <h1>Devotion</h1>
          <div className="divider divider-center" />
          <p className="page-hero-desc">
            Short reflections rooted in Scripture, honesty, and the journey of
            growing in faith.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured post */}
          <div className="devotion-featured">
            <span className="section-label">Featured</span>
            <div className="devotion-featured-card card">
              <div className="dev-featured-meta">
                <span className="dev-category">{devotionals[0].category}</span>
                <span className="dev-read-time">{devotionals[0].readTime} read</span>
              </div>
              <h2 className="dev-featured-title">{devotionals[0].title}</h2>
              <div className="dev-scripture">
                <span className="text-gold">✦</span>
                <span>{devotionals[0].scriptureRef}</span>
              </div>
              <p className="dev-featured-excerpt">{devotionals[0].excerpt}</p>
              <div className="dev-actions">
                <button className="btn btn-primary">Read Full Reflection</button>
                {devotionals[0].relatedSong && (
                  <span className="dev-related">
                    Related: <em>{devotionals[0].relatedSong}</em>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Grid of posts */}
          <div className="devotion-grid">
            <div className="devotion-main">
              <span className="section-label">All Reflections</span>
              <div className="dev-cards">
                {devotionals.slice(1).map((post) => (
                  <article key={post.id} className="dev-card card">
                    <div className="dev-card-meta">
                      <span className="dev-category">{post.category}</span>
                      <span className="dev-read-time">{post.readTime} read</span>
                    </div>
                    <h3 className="dev-card-title">{post.title}</h3>
                    <div className="dev-scripture-small">
                      <span className="text-gold">✦</span>
                      <span>{post.scriptureRef}</span>
                    </div>
                    <p className="dev-card-excerpt">{post.excerpt}</p>
                    <div className="dev-card-footer">
                      <span className="dev-date">
                        {formatLocalDate(post.date, {
                          year: "numeric", month: "long", day: "numeric",
                        })}
                      </span>
                      <button className="btn btn-ghost">Read More →</button>
                    </div>
                    {post.relatedSong && (
                      <div className="dev-related-tag">
                        🎵 {post.relatedSong}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="devotion-sidebar">
              <div className="sidebar-widget">
                <h4>Scripture Focus</h4>
                <div className="scripture-block">
                  <p>
                    "But the seed on good soil stands for those with a noble
                    and good heart, who hear the word, retain it, and by
                    persevering produce a crop."
                  </p>
                  <cite>Luke 8:15</cite>
                </div>
              </div>

              <div className="sidebar-widget">
                <h4>Join the Journey</h4>
                <p className="sidebar-text">
                  Get new devotionals, music releases, and episode updates
                  delivered to your inbox.
                </p>
                <div className="email-form">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="email-input"
                    aria-label="Email address"
                  />
                  <button className="btn btn-primary" style={{ width: "100%" }}>
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="sidebar-widget">
                <h4>Reflection Question</h4>
                <p className="sidebar-reflection">
                  "What kind of soil is your heart becoming?"
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
