export default function StreamingButtons({ links = {}, size = "default" }) {
  const buttons = [
    { key: "spotify", label: "Spotify", className: "spotify" },
    { key: "appleMusic", label: "Apple Music", className: "apple" },
    { key: "youtube", label: "YouTube", className: "youtube" },
    { key: "youtubeMusic", label: "YT Music", className: "youtube-music" },
    { key: "amazon", label: "Amazon", className: "amazon" },
    { key: "soundcloud", label: "SoundCloud", className: "soundcloud" },
  ];

  const available = buttons.filter((b) => links[b.key]);

  if (!available.length) return null;

  return (
    <div className="streaming-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {available.map((b) => (
        <a
          key={b.key}
          href={links[b.key]}
          className={`platform-btn ${b.className}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Listen on ${b.label}`}
          style={size === "sm" ? { fontSize: "0.72rem", padding: "0.4rem 0.8rem" } : {}}
        >
          {b.label}
        </a>
      ))}
    </div>
  );
}
