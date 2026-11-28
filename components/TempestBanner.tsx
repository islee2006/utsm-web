import { Archivo } from 'next/font/google';
import { streamlines } from '@/components/tempestStreamlines';

// upright and extended: deliberately unlike the slanted condensed titles on the other car banners
const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-tempest' });

// Reference layout: name centred over a big car, the driver's face large on the right
export default function TempestBanner() {
  return (
    <header className={`tempest ${display.variable}`}>
      <div className="tempest-stage">
        <div className="tempest-glow" aria-hidden="true" />

        <div className="tempest-driver">
          {/* mirrored and navy-graded offline (public/tempest/driver.webp) so the driver looks up into the banner */}
          <img src="/tempest/driver.webp" alt="Tempest's driver in a helmet, looking up" />
        </div>

        {/* wind-tunnel streamlines bending over the car, with glints running along them */}
        <svg className="tempest-flow" viewBox="0 0 1894 830" preserveAspectRatio="none" aria-hidden="true">
          {streamlines.map((d, i) => (
            <g key={d.slice(0, 12)}>
              <path className="tempest-stream" d={d} />
              <path className="tempest-glint" d={d} pathLength={1000} style={{ animationDelay: `${-i * 0.55}s` }} />
            </g>
          ))}
        </svg>

        <div className="tempest-title">
          <p className="tempest-label">Prototype</p>
          <h1>
            <span className="tempest-mask"><span className="tempest-line">Tempest</span></span>
          </h1>
        </div>

        <div className="tempest-car">
          <img src="/tempest/car.webp" alt="Tempest, the UTSM 2025–26 battery-electric Prototype, race number 312" />
        </div>
      </div>

      <style>{`
        .tempest {
          --tempest-accent: #3b82f6;
          --tempest-ease: cubic-bezier(0.23, 1, 0.32, 1);
          container-type: inline-size;
          padding-top: 72px;
          background: #071a3d;
        }
        .tempest-stage {
          position: relative;
          aspect-ratio: 1894 / 830;
          overflow: hidden;
          background: linear-gradient(180deg, #0a2250 0%, #081d45 55%, #061736 100%);
        }
        .tempest-glow {
          position: absolute; inset: 0;
          background: radial-gradient(40% 42% at 44% 68%, rgba(70,126,230,0.22), rgba(70,126,230,0) 70%);
          animation: tempest-fade 1.4s ease both;
        }

        /* taller than the stage so the face lands big, as in the reference */
        .tempest-driver {
          position: absolute; z-index: 1;
          top: -10%; bottom: -20%; right: -4%; width: 40%;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 40%), linear-gradient(to top, transparent 12%, #000 42%);
          -webkit-mask-composite: source-in;
          mask-image: linear-gradient(to right, transparent 0%, #000 40%), linear-gradient(to top, transparent 12%, #000 42%);
          mask-composite: intersect;
          animation: tempest-wipe 1.2s var(--tempest-ease) 0.1s both;
        }
        .tempest-driver img {
          display: block; width: 100%; height: 100%;
          object-fit: cover; object-position: 50% 0%;
          animation: tempest-settle 1.8s var(--tempest-ease) both;
        }

        /* centred on the car, which sits left of centre to leave the right side to the driver */
        .tempest-title {
          position: absolute; z-index: 2;
          left: 4%; width: 80%; top: 13%;
          text-align: center;
        }
        .tempest-label {
          display: inline-flex; align-items: center; gap: 1.2cqw;
          margin: 0 0 1cqw;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 500;
          font-size: 1.1cqw;
          letter-spacing: 0.5em; text-transform: uppercase;
          color: #c9d6ef;
          animation: tempest-in 0.7s var(--tempest-ease) 0.55s both;
        }
        /* short accent rules either side; the trailing letter-spacing is evened out by the right rule's margin */
        .tempest-label::before, .tempest-label::after {
          content: ''; display: block; width: 2.4cqw; height: 2px;
          background: var(--tempest-accent);
        }
        .tempest-label::after { margin-left: -0.5em; }
        .tempest-title h1 {
          margin: 0;
          font-family: var(--font-tempest), sans-serif;
          font-stretch: 125%;
          font-weight: 800;
          font-size: 7.6cqw;
          line-height: 0.9;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #f6f8fc;
        }
        .tempest-mask { display: block; overflow: hidden; padding: 0.08em 0; margin: -0.08em 0; }
        .tempest-line { display: block; padding-left: 0.04em; animation: tempest-rise 0.9s var(--tempest-ease) 0.3s both; }

        .tempest-flow {
          position: absolute; inset: 0; z-index: 2;
          width: 100%; height: 100%;
          fill: none;
          /* the flow fades in from the left edge and dies out before the driver's face */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 64%, transparent 82%);
          mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 64%, transparent 82%);
          animation: tempest-fade 1.6s ease 0.7s both;
        }
        .tempest-stream { stroke: rgba(150,186,255,0.2); stroke-width: 1.2; vector-effect: non-scaling-stroke; }
        .tempest-glint {
          stroke: rgba(205,224,255,0.8); stroke-width: 1.5; vector-effect: non-scaling-stroke;
          stroke-linecap: round;
          /* two glints per line, travelling with the air (left to right); constant motion, so linear */
          stroke-dasharray: 34 466;
          animation: tempest-flow 3.8s linear infinite;
        }

        .tempest-car {
          position: absolute; z-index: 3;
          /* the streamlines are computed for this exact box: rerun scripts/tempest-streamlines.py if it moves */
          left: 17%; top: 43%; width: 54%;
          --tempest-from: translate(6cqw, -1.2cqw);
          animation: tempest-in 1.2s var(--tempest-ease) 0.15s both;
        }
        .tempest-car img {
          position: relative; z-index: 1;
          display: block; width: 100%; height: auto;
          filter: brightness(1.28) saturate(1.2) contrast(1.04);
        }
        /* contact shadow puts the cutout back on the ground */
        .tempest-car::after {
          content: ''; position: absolute; z-index: 0;
          left: 4%; right: 6%; bottom: -5%; height: 22%;
          background: radial-gradient(50% 50% at 50% 50%, rgba(0,5,18,0.75), rgba(0,5,18,0) 100%);
          transform: rotate(-2.5deg);
        }

        @keyframes tempest-fade { from { opacity: 0; } }
        @keyframes tempest-wipe { from { clip-path: inset(0 0 0 100%); } to { clip-path: inset(0); } }
        @keyframes tempest-settle { from { transform: scale(1.08); } }
        @keyframes tempest-rise { from { transform: translateY(110%); } }
        @keyframes tempest-in { from { opacity: 0; transform: var(--tempest-from, translateY(6px)); } }
        @keyframes tempest-flow { to { stroke-dashoffset: -500; } }

        /* phone: title on top, the face in its own band, the car along the bottom */
        @container (max-width: 640px) {
          .tempest-stage { aspect-ratio: 0.66; }
          .tempest-flow { display: none; } /* the lines are fitted to the desktop car position */
          .tempest-glow { background: radial-gradient(70% 34% at 50% 78%, rgba(70,126,230,0.24), rgba(70,126,230,0) 70%); }
          .tempest-driver {
            top: 12%; bottom: 14%; right: -22%; width: 96%;
            -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 45%), linear-gradient(to bottom, transparent 0%, #000 22%, #000 62%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, #000 45%), linear-gradient(to bottom, transparent 0%, #000 22%, #000 62%, transparent 100%);
          }
          .tempest-driver img { object-position: 50% 30%; }
          .tempest-title { left: 0; width: 100%; top: 8%; }
          .tempest-label { font-size: 3cqw; gap: 3cqw; margin-bottom: 2.4cqw; }
          .tempest-label::before, .tempest-label::after { width: 6cqw; }
          .tempest-title h1 { font-size: 13.5cqw; }
          .tempest-car { left: 5%; top: auto; bottom: 9%; width: 90%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tempest * { animation-name: tempest-fade !important; }
          /* the glints loop forever; as a fade they would flash, so they go and the static lines stay */
          .tempest-glint { display: none; }
        }
      `}</style>
    </header>
  );
}
