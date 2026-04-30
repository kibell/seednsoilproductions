import { songs } from "../data/content";
import StreamingButtons from "../components/StreamingButtons";
import { formatLocalDate } from "../utils/date";
import "./Music.css";

export default function Music() {
  const featured = songs.find((s) => s.featured) || songs[0];
  const rest = songs.filter((s) => !s.featured);

  return (
    <main className="page-wrapper music-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Discography</span>
          <h1>Music</h1>
          <div className="divider divider-center" />
          <p className="page-hero-desc">
            Songs rooted in Scripture, real life, and the soil of the heart.
          </p>
        </div>
      </section>

      {/* Featured Release */}
      <section className="section">
        <div className="container">
          <span className="section-label">Latest Release</span>
          <div className="music-featured">
            <div className="music-art-large">
              <div className="art-bg">
                {/* <span className="art-number">✦</span> */}
                {/* <span className="art-title">{featured.title}</span> */}
              </div>
              <div className="featured-badge">Latest</div>
            </div>
            <div className="music-featured-info">
              <span className="release-type">{featured.subtitle}</span>
              <h2>{featured.title}</h2>
              <div className="divider" />
              <p className="release-date">
                Released{" "}
                {formatLocalDate(featured.releaseDate, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="release-desc">{featured.description}</p>
              <StreamingButtons links={featured.streamingLinks} />
            </div>
          </div>
        </div>
      </section>

      {/* All releases */}
      <section className="section music-all">
        <div className="container">
          <span className="section-label">All Releases</span>
          <h2>Songs</h2>
          <div className="divider" style={{ marginBottom: "2.5rem" }} />
          <div className="releases-grid">
            {songs.map((song) => (
              <div key={song.id} className="release-card card">
                <div className="release-art">
                  {song.coverArt ? (
                    <img
                      src={song.coverArt}
                      alt={`${song.title} cover art`}
                      className="release-art-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="release-art-inner">
                      <span className="release-art-icon">✦</span>
                      <span className="release-art-name">{song.title}</span>
                    </div>
                  )}
                  {song.featured && (
                    <span className="release-featured-dot">Latest</span>
                  )}
                </div>
                <div className="release-info">
                  <span className="release-type-small">{song.subtitle}</span>
                  <h4 className="release-title">{song.title}</h4>
                  <p className="release-date-small">
                    {formatLocalDate(song.releaseDate, {
                      year: "numeric",
                      month: "short",
                    })}
                  </p>
                  <p className="release-desc-short">{song.description}</p>
                  <StreamingButtons links={song.streamingLinks} size="sm" />
                </div>
              </div>
            ))}
          </div>

          {/* Add song instructions */}
          <div className="add-content-hint">
            <p>
              <span className="text-gold">✦ Adding new songs:</span> Open{" "}
              <code>src/data/content.js</code> and add a new object to the{" "}
              <code>songs</code> array. Update streaming links, cover art path,
              and description.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
