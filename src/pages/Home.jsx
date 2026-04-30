import { Link } from "react-router-dom";
import { songs, videos, socialLinks } from "../data/content";
import VideoEmbed from "../components/VideoEmbed";
import StreamingButtons from "../components/StreamingButtons";
import "./Home.css";

const featuredSong = songs.find((s) => s.featured) || songs[0];
const featuredVideo = videos.find((v) => v.featured) || videos[0];

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grain" />
          <div className="hero-radial" />
          <div className="hero-lines" />
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>The Parable — New Music & Story</span>
          </div>
          <h1 className="hero-title">
            Every seed
            <br />
            <em>needs soil.</em>
          </h1>
          <p className="hero-tagline">What kind of soil are you?</p>
          <p className="hero-desc">
            Seed & Soil is a faith-driven music and storytelling project
            exploring calling, purpose, growth, and the condition of the heart.
          </p>
          <div className="hero-cta">
            <Link to="/music" className="btn btn-primary">
              Listen Now
            </Link>
            <Link to="/videos" className="btn btn-outline">
              Watch the Story
            </Link>
            <Link to="/the-parable" className="btn btn-outline">
              Explore The Parable
            </Link>
          </div>
          <div className="hero-platforms">
            <a href={socialLinks.spotify} className="platform-btn spotify" target="_blank" rel="noopener noreferrer">Spotify</a>
            <a href={socialLinks.appleMusic} className="platform-btn apple" target="_blank" rel="noopener noreferrer">Apple Music</a>
            <a href={socialLinks.youtube} className="platform-btn youtube" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href={socialLinks.tiktok} className="platform-btn tiktok" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href={socialLinks.instagram} className="platform-btn instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="mission-strip">
        <div className="container">
          <div className="mission-inner">
            <span className="section-label">The Vision</span>
            <p className="mission-text">
              "Based on the Parable of the Sower — people are like soil, and the
              Word, gifts, calling, and purpose are seeds being planted. This
              project asks one question:{" "}
              <em>What kind of ground are you becoming?</em>"
            </p>
            <div className="mission-scripture">
              <span className="text-gold">Matthew 13 · Luke 8 · Mark 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RELEASE */}
      <section className="section featured-release">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Latest Release</span>
            <h2>New Music</h2>
            <div className="divider" />
          </div>
          <div className="featured-card">
            <div className="featured-art">
              <div className="art-placeholder">
                <div className="art-inner">
                  <span className="art-icon">✦</span>
                  <p>{featuredSong.title}</p>
                </div>
              </div>
              <div className="art-glow" />
            </div>
            <div className="featured-info">
              <span className="section-label">{featuredSong.subtitle}</span>
              <h3 className="featured-title">{featuredSong.title}</h3>
              <div className="divider" />
              <p className="featured-desc">{featuredSong.description}</p>
              <StreamingButtons links={featuredSong.streamingLinks} />
              <Link to="/music" className="btn btn-ghost" style={{ marginTop: "1.5rem" }}>
                View All Music →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="section featured-video">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Watch</span>
            <h2>The Parable Series</h2>
            <div className="divider" />
            <p>A cinematic storytelling project built around Scripture and real life.</p>
          </div>
          <div className="video-feature">
            <VideoEmbed embedId={featuredVideo.embedId} title={featuredVideo.title} className="video-feature-embed" />
            <div className="video-feature-info">
              <span className="category-tag">{featuredVideo.categoryLabel}</span>
              <h4>{featuredVideo.title}</h4>
              <p>{featuredVideo.description}</p>
              <Link to="/videos" className="btn btn-ghost">
                All Videos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE PARABLE TEASER */}
      <section className="section parable-teaser">
        <div className="container">
          <div className="parable-teaser-inner">
            <div className="parable-teaser-text">
              <span className="section-label">Series</span>
              <h2>The Parable</h2>
              <div className="divider" />
              <div className="scripture-block">
                <p>
                  "A farmer went out to sow his seed. As he was scattering the
                  seed, some fell along the path... other seed fell on good
                  soil, where it produced a crop—a hundred, sixty or thirty
                  times what was sown."
                </p>
                <cite>Matthew 13:3–8</cite>
              </div>
              <p style={{ marginBottom: "1.5rem" }}>
                The Parable is an ongoing series of episodes, music, and
                reflections exploring what it means to receive, grow in, and
                bear fruit from the Word of God.
              </p>
              <Link to="/the-parable" className="btn btn-primary">
                Explore The Parable
              </Link>
            </div>
            <div className="parable-teaser-episodes">
              <div className="episode-card-mini">
                <span className="ep-num">01</span>
                <div>
                  <h4>The Parable of the Talents</h4>
                  <p>Who casts the seed — and why?</p>
                </div>
              </div>
              <div className="episode-card-mini">
                <span className="ep-num">02</span>
                <div>
                  <h4>The Parable of the Sower</h4>
                  <p>The Parable of the Sower — explained.</p>
                </div>
              </div>
              <div className="episode-card-mini coming-soon">
                <span className="ep-num">03</span>
                <div>
                  <h4>Coming Soon</h4>
                  <p>The Parable of the Prodigal Son</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION PULL QUOTE */}
      <section className="reflection-quote">
        <div className="container">
          <blockquote>
            <p>"What kind of soil is your heart becoming?"</p>
            <cite>— Seed & Soil</cite>
          </blockquote>
          <Link to="/devotion" className="btn btn-outline">
            Read Devotionals
          </Link>
        </div>
      </section>
    </main>
  );
}
