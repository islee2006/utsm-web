'use client';

import { motion } from 'framer-motion';

const ease = [0.23, 1, 0.32, 1] as const;

export default function UCBanner() {
  return (
    <div style={{ paddingTop: '72px', width: '100%' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 7',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #bc2020 0%, #881616 45%, #460a0a 100%)',
        }}
      >

        {/* ── Layer 2: Background close-up car photo — right side ── */}
        <div
          style={{ position: 'absolute', right: '-5%', top: 0, width: '72%', height: '100%', WebkitMaskImage: 'linear-gradient(75deg, transparent 18%, black 55%)', maskImage: 'linear-gradient(75deg, transparent 18%, black 55%)' }}
        >
          <div style={{
              width: '100%', height: '100%',
              backgroundImage: "url('/Car%20Banners/Material%20for%20Animation/DSC09073%20(1).jpg')",
              backgroundSize: '90%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 25%',
              filter: 'brightness(0.38) saturate(0.75)',
            }} />
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
            style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #460a0a 0%, #460a0a 55%, transparent 100%)', zIndex: 1 }}
          />
        </div>

        {/* ── Layer 3a: Left-to-right vignette ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'linear-gradient(to right, #460a0a 0%, rgba(70,10,10,0.85) 25%, rgba(70,10,10,0.15) 55%, rgba(35,5,5,0.6) 100%)',
        }} />

        {/* ── Layer 3b: Bottom vignette ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'linear-gradient(to bottom, transparent 50%, rgba(8,1,1,0.88) 100%)',
        }} />

        {/* ── Layer 4: URBAN CONCEPT title ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.88, ease, delay: 0.3 }}
          style={{
            position: 'absolute', zIndex: 4,
            top: '22%', left: '33%',
            userSelect: 'none', pointerEvents: 'none',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-anton)',
            fontSize: 'clamp(2.8rem, 11.5vw, 18rem)',
            color: 'rgba(255, 226, 218, 0.95)',
            fontStyle: 'italic',
            letterSpacing: '0.015em',
            lineHeight: 0.9,
            textTransform: 'uppercase',
            textShadow: '0 4px 32px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.8)',
          }}>
            <div style={{ transform: 'translateX(-5vw)' }}>URBAN</div>
            <div>CONCEPT</div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.52 }}
            style={{
              fontFamily: 'var(--font-anton)',
              fontSize: 'clamp(0.85rem, 2.2vw, 3.2rem)',
              color: 'white',
              letterSpacing: '0.05em',
              fontStyle: 'italic',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.04em',
              marginTop: '0.05em',
              marginLeft: '2vw',
            }}
          >
            LIGHTNING McW
            <svg
              viewBox="145 24 225 464"
              style={{ width: '0.41em', height: '0.85em', flexShrink: 0, marginTop: '-0.05em', marginRight: '-0.1em', marginLeft: '0.06em' }}
            >
              <polygon points="290,24 145,285 250,285 215,488 370,215 265,215" fill="#fbbf24" />
            </svg>
            N
          </motion.div>
        </motion.div>

        {/* ── Layer 5: Foreground car cutout — anchored left ── */}
        <div style={{
          position: 'absolute', zIndex: 5,
          left: '-2%',
          top: '54%',
          transform: 'translateY(-50%)',
          width: 'clamp(260px, 48vw, 1220px)',
        }}>
          <motion.img
            src="/Car%20Banners/Material%20for%20Animation/1fd78395-7943-45c4-9743-5fe74e7e612c.png"
            alt="Lightning McWin Urban Concept"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease, delay: 0.18 }}
            style={{
              width: '100%', height: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 14px 40px rgba(0,0,0,0.82)) drop-shadow(0 4px 14px rgba(140,20,20,0.45))',
              willChange: 'transform, opacity',
            }}
          />
        </div>


        {/* ── Hydrogen Fuel Cell — below car ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.72 }}
          style={{
            position: 'absolute', zIndex: 6,
            bottom: '24%', left: '14%',
            fontSize: 'clamp(0.7rem, 1.3vw, 1.6rem)',
            color: 'rgba(255, 195, 185, 0.72)',
            letterSpacing: '0.07em',
            fontStyle: 'italic',
            whiteSpace: 'nowrap',
          }}
        >
          Hydrogen Fuel Cell
        </motion.div>

      </motion.div>
    </div>
  );
}
