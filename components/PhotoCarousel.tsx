'use client';

import { useState } from 'react';

type Photo = { src: string; alt?: string };

export default function PhotoCarousel({ photos }: { photos: Photo[] }) {
  const n = photos.length;
  const [index, setIndex] = useState(0);

  if (!n) return null;

  const prevIdx = (index - 1 + n) % n;
  const nextIdx = (index + 1) % n;

  const go = (i: number) => setIndex(i);
  const prev = () => go(prevIdx);
  const next = () => go(nextIdx);

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>

      <div style={{ display: 'flex', gap: '7px', alignItems: 'stretch' }}>

        {/* Prev thumbnail */}
        {n > 1 && (
          <button onClick={prev} aria-label="Previous photo"
            style={{ position: 'relative', flex: '0 0 13%', overflow: 'hidden', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', padding: 0, background: 'none' }}>
            <img src={photos[prevIdx].src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.55 }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.28)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </div>
          </button>
        )}

        {/* Main photo — all images in DOM, CSS opacity only */}
        <div style={{ flex: 1, position: 'relative', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '4px', backgroundColor: '#0d1e3d' }}>
          {photos.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={i === index ? (p.alt ?? '') : ''}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                opacity: i === index ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: i === index ? 1 : 0,
              }}
            />
          ))}

          {n > 1 && (
            <div style={{ position: 'absolute', bottom: 10, right: 12, zIndex: 4, fontSize: '0.6rem', letterSpacing: '0.1em', fontFamily: 'var(--font-anton)', color: 'rgba(255,255,255,0.65)', background: 'rgba(0,0,0,0.4)', padding: '2px 8px', borderRadius: '999px' }}>
              {index + 1} / {n}
            </div>
          )}
        </div>

        {/* Next thumbnail */}
        {n > 1 && (
          <button onClick={next} aria-label="Next photo"
            style={{ position: 'relative', flex: '0 0 13%', overflow: 'hidden', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', padding: 0, background: 'none' }}>
            <img src={photos[nextIdx].src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.55 }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.28)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </button>
        )}

      </div>

      {/* Dot indicators */}
      {n > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px' }}>
          {photos.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Photo ${i + 1}`}
              style={{ width: i === index ? '18px' : '5px', height: '5px', borderRadius: '999px', backgroundColor: i === index ? 'white' : 'rgba(255,255,255,0.28)', border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.3s ease', flexShrink: 0 }}
            />
          ))}
        </div>
      )}

    </div>
  );
}
