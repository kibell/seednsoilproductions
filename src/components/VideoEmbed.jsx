import "./VideoEmbed.css";

export default function VideoEmbed({ embedId, title = "Video", className = "" }) {
  if (!embedId) {
    return (
      <div className={`video-embed-placeholder ${className}`}>
        <div className="placeholder-inner">
          <span className="placeholder-icon">▶</span>
          <p>Video Coming Soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`video-embed ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?rel=0&modestbranding=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
