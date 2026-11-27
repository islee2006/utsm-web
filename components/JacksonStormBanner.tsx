import { Barlow_Condensed } from 'next/font/google';

// heavy condensed italic, closest Google match to the banner reference lettering
const display = Barlow_Condensed({ subsets: ['latin'], weight: '800', style: 'italic', variable: '--font-storm' });

export default function JacksonStormBanner() {
  return (
    <header className={`storm ${display.variable}`}>
      <div className="storm-stage">
        {/* light sweeps; viewBox matches the desktop banner so the shapes land where the reference has them */}
        <svg className="storm-sweeps" viewBox="0 0 1894 830" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            {/* stops and opacities sampled from the reference so the sheen peaks around x≈180 and fades both ways */}
            {/* opacities are the reference's, scaled to ~0.32 so the background sits back behind the car and title */}
            <linearGradient id="storm-corner" x1="0" y1="0" x2="0.7" y2="0.7">
              <stop offset="0" stopColor="#0040b0" stopOpacity="0" />
              <stop offset="1" stopColor="#0040b0" stopOpacity="0.26" />
            </linearGradient>
            <linearGradient id="storm-band" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#a6c6ff" stopOpacity="0.04" />
              <stop offset="0.08" stopColor="#a6c6ff" stopOpacity="0.13" />
              <stop offset="0.25" stopColor="#a6c6ff" stopOpacity="0.28" />
              <stop offset="0.42" stopColor="#a6c6ff" stopOpacity="0.27" />
              <stop offset="0.5" stopColor="#a6c6ff" stopOpacity="0.24" />
              <stop offset="0.58" stopColor="#a6c6ff" stopOpacity="0.21" />
              <stop offset="0.67" stopColor="#a6c6ff" stopOpacity="0.14" />
              <stop offset="0.75" stopColor="#a6c6ff" stopOpacity="0.08" />
              <stop offset="0.83" stopColor="#a6c6ff" stopOpacity="0.04" />
              <stop offset="1" stopColor="#a6c6ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="storm-floor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#0a3c9e" stopOpacity="0.12" />
              <stop offset="1" stopColor="#0a3c9e" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* band edges are curves fitted to the reference's sheen (rms error under 6px) */}
          <path className="storm-sweep" d="M0,0 L700,0 C578,28 402,-27 0,274 Z" fill="url(#storm-corner)" />
          <path className="storm-sweep" d="M0,390 C444,99 282,60 720,0 L700,0 C578,28 402,-27 0,274 Z" fill="url(#storm-band)" />
          <path className="storm-sweep" d="M0,560 C140,690 330,780 600,830 L0,830 Z" fill="url(#storm-floor)" />
        </svg>

        <div className="storm-livery">
          <img src="/jackson-storm/livery.webp" alt="Sponsor logos on the bodywork of Jackson Storm" />
        </div>

        {/* thin corner line that frames the top right of STORM */}
        <svg className="storm-frame" viewBox="0 0 1894 830" aria-hidden="true">
          <path d="M1178,342 L1435,342 L1290,632" pathLength="1" />
        </svg>

        <div className="storm-car">
          <img src="/jackson-storm/car.webp" alt="Jackson Storm, the UTSM 2025–26 Urban Concept car" />
        </div>

        <div className="storm-title">
          <h1>
            <span className="storm-mask"><span className="storm-line storm-line--top">Jackson</span></span>{' '}
            <span className="storm-mask"><span className="storm-line">Storm</span></span>
          </h1>
          <div className="storm-sub">
            <span className="storm-rule" />
            <span>Urban Concept</span>
            <span className="storm-bars" aria-hidden="true"><i /><i /><i /></span>
          </div>
        </div>
      </div>

      <style>{`
        .storm {
          --storm-accent: #0a62fd;
          --storm-ease: cubic-bezier(0.23, 1, 0.32, 1);
          container-type: inline-size;
          padding-top: 72px;
          background: #061848;
        }
        .storm-stage {
          position: relative;
          aspect-ratio: 1894 / 830;
          overflow: hidden;
          /* the reference's palette (royal left third, navy elsewhere), darkened so the car and title lead */
          background:
            linear-gradient(90deg, #031b48 0%, #031a46 18%, #031a43 25%, #03193f 32%, #031736 42%, #021532 60%, #021330 100%);
        }

        .storm-sweeps { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
        .storm-sweep { animation: storm-fade 1.2s ease both; }
        .storm-sweep:nth-child(3) { animation-delay: 0.1s; }

        .storm-livery {
          position: absolute; z-index: 1; top: 0; bottom: 0; right: 0; width: 42%;
          /* ~20° diagonal fade running with the logos, eased (smoothstep stops) so it has no hard start or end.
             The ramp starts just past the bottom-left corner's projection (27.5%), so the panel edge never shows. */
          --storm-fade: linear-gradient(110deg, transparent 28.4%, rgba(0,0,0,0.03) 30.3%, rgba(0,0,0,0.1) 32.2%,
            rgba(0,0,0,0.22) 34.2%, rgba(0,0,0,0.35) 36.1%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.65) 39.9%,
            rgba(0,0,0,0.78) 41.8%, rgba(0,0,0,0.9) 43.8%, rgba(0,0,0,0.97) 45.7%, #000 47.6%);
          -webkit-mask-image: var(--storm-fade);
          mask-image: var(--storm-fade);
          animation: storm-wipe 1.1s var(--storm-ease) 0.1s both;
        }
        .storm-livery img {
          width: 100%; height: 100%; display: block;
          object-fit: cover; object-position: 50% 22%;
          animation: storm-settle 1.6s var(--storm-ease) both;
        }
        /* livery.webp is colour-graded offline (body = #021432, the navy it fades into), so it needs no tint here.
           This navy wash over the fading side makes it dissolve into the background instead of turning grey. */
        .storm-livery::before {
          content: ''; position: absolute; inset: 0; z-index: 1;
          background:
            linear-gradient(to top, rgba(2,21,50,0.5), rgba(2,21,50,0) 40%),
            linear-gradient(110deg, #021532 28%, rgba(2,21,50,0.5) 42%, rgba(2,21,50,0) 58%);
        }

        .storm-frame {
          position: absolute; inset: 0; width: 100%; height: 100%; z-index: 2;
          fill: none; stroke: #0563fc; stroke-width: 3;
          stroke-dasharray: 1; stroke-dashoffset: 0;
          animation: storm-draw 0.9s var(--storm-ease) 0.75s both;
        }

        .storm-car {
          position: absolute; z-index: 3;
          left: 12%; top: 20%; width: 34%;
          /* drives in along its heading, toward the lower left */
          --storm-from: translate(6cqw, -2.4cqw);
          animation: storm-in 1.2s var(--storm-ease) 0.12s both;
        }
        .storm-car img {
          display: block; width: 100%; height: auto;
          filter: saturate(1.3) brightness(1.15) contrast(1.06) drop-shadow(0 1.6cqw 1.8cqw rgba(2,10,40,0.6));
        }

        .storm-title {
          position: absolute; z-index: 4;
          /* STORM's S overlaps the car's flank; JACKSON is indented back right via its own margin */
          left: 32.3%; top: 23.3%;
        }
        .storm-title h1 {
          font-family: var(--font-storm), var(--font-anton), sans-serif;
          font-weight: 800; font-style: italic;
          text-transform: uppercase;
          line-height: 0.84;
          letter-spacing: 0.005em;
          margin: 0;
        }
        /* inline padding keeps the italic overhang from being clipped by the reveal mask */
        /* padding also leaves room for the text halo, which the mask would otherwise clip */
        .storm-mask {
          display: block; overflow: hidden;
          padding: 0.15em 0.22em; margin: -0.15em -0.22em;
          /* the font's own italic is ~9°, the reference leans ~13°; skew from the baseline so lines stay put */
          transform: skewX(-4deg); transform-origin: 0 100%;
        }
        /* smaller JACKSON keeps its baseline where it was, so STORM and the subtitle don't move up */
        .storm-mask:first-child { margin-top: calc(-0.15em + 0.6cqw); }
        /* pulls STORM up under JACKSON: the font's tall line box leaves a gap the reference doesn't have */
        .storm-mask + .storm-mask { margin-top: calc(-0.13em - 0.8cqw); }
        .storm-line {
          display: block;
          font-size: 16.5cqw;
          color: #fcfcfd;
          /* layered navy halo: a tight edge, a soft lift, and a wide pool that separates the letters from the car and logos */
          text-shadow:
            0 0 0.12cqw rgba(2,10,40,0.7),
            0 0.15cqw 0.45cqw rgba(2,10,40,0.6),
            0 0.3cqw 2.2cqw rgba(2,10,40,0.55);
          animation: storm-rise 0.9s var(--storm-ease) 0.38s both;
        }
        .storm-line--top {
          /* sized so it ends where the corner line starts */
          font-size: 8.6cqw;
          color: #d9e6ff;
          margin-left: 1.76cqw;
          animation-delay: 0.3s;
        }
        .storm-sub {
          display: flex; align-items: center; gap: 1.6cqw;
          margin: 0.97cqw 0 0 -1.8cqw;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 600;
          font-size: 1.42cqw;
          letter-spacing: 0.52em; text-transform: uppercase;
          color: #e1ebfb;
          text-shadow: 0 0 0.1cqw rgba(2,10,40,0.7), 0 0.1cqw 0.8cqw rgba(2,10,40,0.6);
          animation: storm-in 0.6s var(--storm-ease) 0.7s both;
        }
        /* shorter than the reference's so it stops short of the car's front wheel */
        .storm-rule { width: 4cqw; height: 2px; background: #c4c6d0; }
        .storm-bars { display: flex; gap: 0.5cqw; }
        .storm-bars i {
          display: block; width: 2cqw; height: 2.05cqw;
          background: var(--storm-accent); transform: skewX(-22deg);
        }

        @keyframes storm-fade { from { opacity: 0; } }
        @keyframes storm-wipe { from { clip-path: inset(0 0 0 100%); } to { clip-path: inset(0); } }
        @keyframes storm-settle { from { transform: scale(1.08); } }
        /* 140% clears the taller mask padding, so no letter tops peek out before the reveal */
        @keyframes storm-rise { from { transform: translateY(140%); } }
        @keyframes storm-draw { from { stroke-dashoffset: 1; } }
        @keyframes storm-in { from { opacity: 0; transform: var(--storm-from, translateY(6px)); } }

        @container (max-width: 640px) {
          .storm-stage {
            aspect-ratio: 0.8;
            background:
              linear-gradient(160deg, #031b48 0%, #031a43 35%, #021532 65%, #021330 100%);
          }
          .storm-frame { display: none; }
          .storm-livery {
            width: 55%; opacity: 0.6;
            -webkit-mask-image: linear-gradient(to right, transparent, #000 65%);
            mask-image: linear-gradient(to right, transparent, #000 65%);
          }
          .storm-title { left: 7cqw; top: 9cqw; }
          .storm-line { font-size: 27cqw; }
          .storm-line--top { font-size: 17cqw; margin-left: 1cqw; }
          .storm-sub { margin: 3.4cqw 0 0 1cqw; gap: 2.6cqw; font-size: 3.4cqw; letter-spacing: 0.26em; }
          .storm-rule { display: none; }
          .storm-bars { gap: 1cqw; }
          .storm-bars i { width: 4cqw; height: 3.8cqw; }
          .storm-car { left: 3%; top: auto; bottom: 3%; width: 82%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .storm *, .storm-frame { animation-name: storm-fade !important; }
        }
      `}</style>
    </header>
  );
}
