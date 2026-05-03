import { useState } from "react";
import { videos, videoCategories } from "../data/content";
import VideoEmbed from "../components/VideoEmbed";
import { formatLocalDate } from "../utils/date";
import "./Videos.css";

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const featured = videos.find((v) => v.featured);

  return (
    <main className="page-wrapper videos-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Watch</span>
          <h1>Videos</h1>
          <div className="divider divider-center" />
          <p className="page-hero-desc">
            Episodes, lyric videos, devotionals, and behind-the-scenes — the
            full visual story.
          </p>
        </div>
      </section>

      {/* Featured video */}
      {featured && (
        <section className="section featured-video-hero">
          <div className="container">
            <div className="fv-layout">
              <VideoEmbed embedId={featured.embedId} title={featured.title} />
              <div className="fv-info">
                <span className="category-tag">{featured.categoryLabel}</span>
                <h2>{featured.title}</h2>
                <p className="fv-date">
                  {formatLocalDate(featured.date, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>{featured.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="section videos-grid-section">
        <div className="container">
          <div className="video-filters">
            {videoCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn${activeCategory === cat.id ? " active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="videos-grid">
            {filtered.map((video) => (
              <div key={video.id} className="video-card card">
                <VideoEmbed embedId={video.embedId} title={video.title} />
                <div className="video-card-info">
                  <span className="category-tag">{video.categoryLabel}</span>
                  <h4>{video.title}</h4>
                  <p className="video-date">
                    {formatLocalDate(video.date, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="video-desc">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <span className="text-gold">✦</span>
              <p>No videos in this category yet. Check back soon.</p>
            </div>
          )}

          <div className="add-content-hint" style={{ marginTop: "3rem" }}>
            <p>
              <span className="text-gold">✦ Adding videos:</span> Open{" "}
              <code>src/data/content.js</code> and add an entry to the{" "}
              <code>videos</code> array. Set <code>embedId</code> to your
              YouTube video ID (the part after <code>?v=</code> in the URL).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
