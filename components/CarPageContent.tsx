'use client';

import { motion } from 'framer-motion';
import AnimatedStat from '@/components/AnimatedStat';

const ease = [0.23, 1, 0.32, 1] as const;

const vp = { once: true, margin: '-60px' as const };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.6, ease, delay },
});

const cars = {
  prototype: {
    name: 'RAVEN', type: 'Prototype', year: '2T6', speed: 60, power: ['Battery', 'Electric'],
    tagline: 'Battery-Powered Hyper-Efficient Vehicle',
    about: "RAVEN is the University of Toronto's battery-electric prototype vehicle, engineered for maximum efficiency in the Shell Eco-Marathon competition. Built with a carbon fibre aerobody and a precision-engineered drivetrain, every component is optimized to push the boundaries of energy efficiency.",
    sidePhoto: '/Prototype 2025.jpg', sidePosition: 'center 95%', heroPhoto: '/raven-hero-2t6.jpg', heroPosition: 'center 47%', teamPhoto: '/raven-team-2t6.jpg',
    base: '#040e22', dark: '#020914', panel: '#0c1f3d', hover: '#112540', accent: '#60a5fa', bar: '#3b82f6', text: '190,215,255', shade: '2,9,20',
    cards: [
      {
        title: 'Aerodynamics',
        body: 'A fully custom carbon fibre aerobody designed to minimize drag and maximize laminar airflow at competition speeds.',
      },
      {
        title: 'Powertrain',
        body: 'A high-efficiency battery-electric drivetrain with a custom motor controller engineered for peak energy conversion.',
      },
      {
        title: 'Electrical',
        body: 'Custom battery management and telemetry systems provide real-time data monitoring on vehicle performance during runs.',
      },
      {
        title: 'Chassis',
        body: 'Lightweight structural design engineered for rigidity and driver safety while meeting Shell Eco-Marathon regulations.',
      },
    ],
  },
  urbanConcept: {
    name: 'Lightning McWin', type: 'Urban Concept', year: '2T5', speed: 40, power: ['Hydrogen', 'Fuel Cell'],
    tagline: 'Hydrogen-Powered Urban Concept Vehicle',
    about: "Lightning McWin is the University of Toronto's hydrogen fuel cell urban concept vehicle, engineered for maximum efficiency in the Shell Eco-Marathon competition. Built with a carbon fibre aerobody and a precision-engineered hydrogen drivetrain, every component is optimized to push the boundaries of energy efficiency.",
    sidePhoto: '/uc-side-2t5.jpg', sidePosition: 'center 47%', heroPhoto: '/uc-hero-2t5.jpg', heroPosition: 'center 40%',
    base: '#1a0404', dark: '#120202', panel: '#2d0808', hover: '#3d0a0a', accent: '#f87171', bar: '#dc2626', text: '255,200,190', shade: '18,2,2',
    cards: [
      {
        title: 'Aerodynamics',
        body: 'A fully custom carbon fibre aerobody designed to minimize drag and maximize laminar airflow at competition speeds.',
      },
      {
        title: 'Hydrogen Fuel Cell',
        body: 'A custom hydrogen fuel cell powertrain precision-engineered for maximum energy conversion efficiency and zero-emission performance.',
      },
      {
        title: 'Electrical',
        body: 'Custom hydrogen control and telemetry systems provide real-time data monitoring on vehicle performance during runs.',
      },
      {
        title: 'Chassis',
        body: 'Lightweight structural design engineered for rigidity and driver safety while meeting Shell Eco-Marathon regulations.',
      },
    ],
  },
  jacksonStorm: {
    // shortcut: speed and the card copy are carried over from Lightning McWin, replace with Jackson Storm's real figures
    name: 'Jackson Storm', type: 'Urban Concept', year: '2T6', speed: 40, power: ['Hydrogen', 'Fuel Cell'],
    tagline: 'Hydrogen-Powered Urban Concept Vehicle',
    about: "Jackson Storm is the University of Toronto's 2025–26 hydrogen fuel cell urban concept vehicle. It is designed to advance sustainable urban transportation by combining energy efficiency, innovative fuel cell technology, and practical automotive design.",
    sidePhoto: '/urban-concept-2026.jpg', sidePosition: 'center 45%', heroPhoto: '/jackson-storm/livery.webp', heroPosition: 'center 40%', teamPhoto: '/jackson-storm/team-2t6.jpg',
    base: '#040e22', dark: '#020914', panel: '#0c1f3d', hover: '#112540', accent: '#60a5fa', bar: '#3b82f6', text: '190,215,255', shade: '2,9,20',
    cards: [
      {
        title: 'Aerodynamics',
        body: 'A fully custom carbon fibre aerobody designed to minimize drag and maximize laminar airflow at competition speeds.',
      },
      {
        title: 'Hydrogen Fuel Cell',
        body: 'A custom hydrogen fuel cell powertrain precision-engineered for maximum energy conversion efficiency and zero-emission performance.',
      },
      {
        title: 'Electrical',
        body: 'Custom hydrogen control and telemetry systems provide real-time data monitoring on vehicle performance during runs.',
      },
      {
        title: 'Chassis',
        body: 'Lightweight structural design engineered for rigidity and driver safety while meeting Shell Eco-Marathon regulations.',
      },
    ],
  },
};

export default function CarPageContent({ car }: { car: keyof typeof cars }) {
  const t = cars[car];
  return (
    <div style={{ backgroundColor: t.base }}>

      {/* ── Stats strip ── */}
      <div style={{ backgroundColor: t.dark, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <motion.div
          {...fadeUp(0)}
          className="stats-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: '1100px', margin: '0 auto' }}
        >
          <div style={{ padding: '2rem 1.5rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
            <AnimatedStat value={t.speed} style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: t.accent, lineHeight: 1, display: 'block' }} />
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: t.accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>km/h</span>
            <p style={{ margin: '0.4rem 0 0', fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Max Speed</p>
          </div>
          <div style={{ padding: '2rem 1.5rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1rem, 1.8vw, 1.45rem)', color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1 }}>{t.power[0]}<br />{t.power[1]}</span>
            <p style={{ margin: '0.4rem 0 0', fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Power Train</p>
          </div>
          <div style={{ padding: '2rem 1.5rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1rem, 1.8vw, 1.45rem)', color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1 }}>Carbon<br />Fibre</span>
            <p style={{ margin: '0.4rem 0 0', fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Aerobody</p>
          </div>
          <div style={{ padding: '2rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1rem, 1.8vw, 1.45rem)', color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1 }}>Shell<br />Eco-Marathon</span>
            <p style={{ margin: '0.4rem 0 0', fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Competition</p>
          </div>
        </motion.div>
      </div>

      {/* ── About RAVEN ── */}
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>

        <motion.div {...fadeUp(0.05)} style={{ backgroundColor: t.panel, padding: '4.5rem 3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.3em', color: t.accent, textTransform: 'uppercase', margin: '0 0 1rem' }}>
            {t.name} · {t.year}
          </p>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1, margin: '0 0 1.5rem' }}>
            About the<br />{t.type}
          </h2>
          <div style={{ width: '48px', height: '3px', backgroundColor: t.bar, marginBottom: '1.75rem' }} />
          <p style={{ color: `rgba(${t.text},0.7)`, lineHeight: 1.85, fontSize: '0.88rem', maxWidth: '420px', margin: 0 }}>
            {t.about}
          </p>
        </motion.div>

        <div style={{ position: 'relative', height: '500px', backgroundColor: t.base, overflow: 'hidden' }}>
          <img
            src={t.sidePhoto}
            alt={`${t.name} ${t.type}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.sidePosition, display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${t.panel} 0%, transparent 35%)` }} />
          <motion.div
            initial={{ x: '0%' }}
            whileInView={{ x: '-100%' }}
            viewport={vp}
            transition={{ duration: 1.1, ease, delay: 0.1 }}
            style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${t.panel} 0%, ${t.panel} 55%, transparent 100%)`, zIndex: 3, willChange: 'transform' }}
          />
        </div>

      </div>

      {/* ── Technical Highlights ── */}
      <div style={{ backgroundColor: t.dark, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.3em', color: t.accent, textTransform: 'uppercase', margin: '0 0 0.75rem' }}>Engineering</p>
            <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
              Technical Highlights
            </h2>
          </motion.div>

          <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }}>
            {t.cards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(i * 0.08)}
                whileHover={{ backgroundColor: t.hover, transition: { duration: 0.2 } }}
                style={{ backgroundColor: t.panel, padding: '2.75rem', cursor: 'default' }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={vp}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 + 0.25 }}
                  style={{ height: '3px', width: 36, backgroundColor: t.bar, marginBottom: '1.25rem', transformOrigin: 'left', willChange: 'transform' }}
                />
                <h3 style={{ fontFamily: 'var(--font-anton)', color: 'white', fontSize: '1.3rem', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 0.75rem' }}>{card.title}</h3>
                <p style={{ color: `rgba(${t.text},0.58)`, fontSize: '0.85rem', lineHeight: 1.8, margin: 0 }}>{card.body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Full-bleed photo showcase ── */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>

        <motion.img
          src={t.heroPhoto}
          alt={`${t.name} at Shell Eco-Marathon 2026`}
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={vp}
          transition={{ duration: 1.6, ease }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.heroPosition, display: 'block', willChange: 'transform, opacity' }}
        />

        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: `linear-gradient(to right, rgba(${t.shade},0.88) 0%, rgba(${t.shade},0.45) 50%, rgba(${t.shade},0.78) 100%)` }} />

        <motion.div {...fadeUp(0.4)} style={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 2rem' }}>
          <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.35em', color: t.accent, textTransform: 'uppercase', margin: '0 0 1rem' }}>
            {t.tagline}
          </p>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1, margin: '0 0 1.25rem', textShadow: '0 4px 32px rgba(0,0,0,0.6)' }}>
            Engineered for<br />Efficiency
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={vp}
            transition={{ duration: 0.6, ease, delay: 0.7 }}
            style={{ height: '3px', width: 56, backgroundColor: t.bar, transformOrigin: 'center', willChange: 'transform' }}
          />
        </motion.div>

      </div>

      {/* ── Team Section ── */}
      <motion.div {...fadeUp(0)} style={{ backgroundColor: t.panel, padding: '5rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.3em', color: t.accent, textTransform: 'uppercase', margin: '0 0 0.75rem' }}>
          The People Behind {t.name}
        </p>
        <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 3rem' }}>
          {t.type} Team {t.year}
        </h2>
        <div style={{ width: 'clamp(280px, 70%, 800px)', aspectRatio: '16/9', margin: '0 auto', backgroundColor: t.dark, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {'teamPhoto' in t ? (
            <img src={t.teamPhoto} alt={`${t.type} Team ${t.year} with ${t.name}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
              Team Photo Coming Soon
            </span>
          )}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .tech-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.07); }
        }
      `}</style>

    </div>
  );
}
