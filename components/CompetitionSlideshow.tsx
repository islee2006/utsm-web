"use client";
import { useState } from "react";

type Photo = { src: string; caption: string };

export default function CompetitionSlideshow({ photos, isCurrent }: { photos: Photo[]; isCurrent: boolean }) {
  const [offset, setOffset] = useState(0);
  const hasPhotos = photos.length > 0;
  const count = hasPhotos ? photos.length : 3;

  const visible = [0, 1, 2].map(i => {
    const idx = (offset + i) % count;
    return hasPhotos ? photos[idx] : null;
  });

  const prev = () => setOffset(o => (o - 1 + count) % count);
  const next = () => setOffset(o => (o + 1) % count);

  return (
    <div style={{ position: "relative", marginBottom: "1.75rem" }}>

      {/* Arrow left */}
      <button
        onClick={prev}
        className="slide-arrow" style={{ position: "absolute", left: "-1.25rem", top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "rgba(15,30,65,0.85)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%", width: "2rem", height: "2rem", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", lineHeight: 1 }}
        aria-label="Previous"
      >‹</button>

      {/* 3-photo grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", overflow: "hidden" }}>
        {visible.map((photo, i) =>
          photo ? (
            <div key={`${offset}-${i}`} className="comp-slide" style={{ position: "relative", overflow: "hidden", borderRadius: "5px", aspectRatio: "4/3", backgroundColor: "#0d1e3d" }}>
              <img
                src={photo.src}
                alt={photo.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,15,40,0.7) 0%, transparent 50%)", opacity: 0, transition: "opacity 0.3s ease" }} className="slide-overlay" />
              <span style={{ position: "absolute", bottom: "0.6rem", left: "0.6rem", fontSize: "0.65rem", color: "white", fontWeight: 600, letterSpacing: "0.04em", opacity: 0, transition: "opacity 0.3s ease" }} className="slide-caption">
                {photo.caption}
              </span>
            </div>
          ) : (
            <div key={i} className="placeholder-shimmer" style={{ borderRadius: "5px", aspectRatio: "4/3", border: "1px solid rgba(255,255,255,0.06)" }} />
          )
        )}
      </div>

      {/* Arrow right */}
      <button
        onClick={next}
        className="slide-arrow" style={{ position: "absolute", right: "-1.25rem", top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "rgba(15,30,65,0.85)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%", width: "2rem", height: "2rem", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", lineHeight: 1 }}
        aria-label="Next"
      >›</button>

      {/* Dot indicators */}
      {count > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: "0.35rem", marginTop: "0.75rem" }}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{ width: i === offset ? "1.25rem" : "0.35rem", height: "0.35rem", borderRadius: "2px", backgroundColor: i === offset ? (isCurrent ? "#3b82f6" : "rgba(255,255,255,0.7)") : "rgba(255,255,255,0.25)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .placeholder-shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.02) 75%);
          background-size: 200% 100%;
          animation: shimmer 2.2s ease-in-out infinite;
        }
        .comp-slide:hover .slide-overlay { opacity: 1 !important; }
        .comp-slide:hover .slide-caption { opacity: 1 !important; }
        .comp-slide { transition: transform 0.4s cubic-bezier(0.23,1,0.32,1); }
        .comp-slide:hover { transform: scale(1.02); }
      `}</style>
    </div>
  );
}
