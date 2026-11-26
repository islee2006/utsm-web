'use client';

import { motion } from 'framer-motion';

const ease = [0.23, 1, 0.32, 1] as const;

export default function PrototypeBanner() {
  return (
    <div style={{ paddingTop: '72px', width: '100%' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 7',
          overflow: 'hidden',
          background:
            'linear-gradient(130deg, #1c5aad 0%, #0f3270 25%, #081d45 55%, #030b1c 100%)',
        }}
      >

        {/* ── Layer 2: Narrow diagonal texture stripe (accent only) ── */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'polygon(69% 0%, 69% 0%, 49% 100%, 49% 100%)' }}
          animate={{ opacity: 0.35, clipPath: 'polygon(58% 0%, 80% 0%, 60% 100%, 38% 100%)' }}
          transition={{ duration: 1.1, ease, delay: 0.7 }}
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
          }}
        >
          <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: "url('/Car%20Banners/Material%20for%20Animation/DSC08924%20(2).jpg')",
              backgroundSize: '45%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '63% 30%',
              filter: 'brightness(0.65) saturate(0.75)',
            }} />
          <div style={{
            position: 'absolute', inset: 0,
            background:
              'linear-gradient(to right, rgba(8,29,69,0.6) 0%, transparent 25%, transparent 75%, rgba(3,11,28,0.7) 100%)',
          }} />
        </motion.div>

        {/* ── Layer 3: "PROTOTYPE" — behind vehicle upper half ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.28 }}
          style={{
            position: 'absolute', zIndex: 3,
            top: '15%', left: '19%',
            fontFamily: 'var(--font-anton)',
            fontSize: 'clamp(2.5rem, 11vw, 17rem)',
            color: 'rgba(160, 205, 255, 0.46)',
            fontStyle: 'italic',
            letterSpacing: '0.025em',
            lineHeight: 1,
            textTransform: 'uppercase',
            textShadow: '0 0 40px rgba(30, 90, 200, 0.35)',
            userSelect: 'none', pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          PROTOTYPE
        </motion.div>

        {/* ── Layer 4: RAVEN isolated vehicle cutout ──
            Div fills the full banner (inset:0). Portrait PNG with
            objectFit:contain floats centered; transparent bg shows through. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease, delay: 0.33 }}
          style={{
            position: 'absolute',
            top: '-46%', bottom: '-4%', left: 0, right: 0,
            zIndex: 4,
          }}
        >
          <img
            src="/Car%20Banners/Material%20for%20Animation/5d53bbe2-4a38-4e61-add6-9dce4976059d.png"
            alt="RAVEN Prototype"
            style={{
              width: '100%', height: '100%',
              objectFit: 'contain',
              objectPosition: 'center center',
              filter:
                'drop-shadow(0 14px 36px rgba(0,0,0,0.82)) drop-shadow(0 4px 18px rgba(20,80,200,0.35))',
            willChange: 'transform, opacity',
            }}
          />
        </motion.div>

        {/* ── Layer 5: RAVEN title + subtitle grouped ──
            Both elements share one container so the subtitle
            always sits flush below RAVEN with no overlap.
            text-align: right on the subtitle aligns it to the
            trailing edge of whichever element is wider. */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.56 }}
          style={{
            position: 'absolute', zIndex: 5,
            top: '58%', left: '44%',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-anton)',
              fontSize: 'clamp(2.5rem, 12vw, 18.5rem)',
              color: 'white',
              fontStyle: 'italic',
              letterSpacing: '0.025em',
              lineHeight: 1,
              textTransform: 'uppercase',
              textShadow: '0 4px 32px rgba(0,0,0,0.7)',
              userSelect: 'none', whiteSpace: 'nowrap',
            }}
          >
            RAVEN
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.88 }}
            style={{
              fontSize: 'clamp(0.4rem, 0.85vw, 1.05rem)',
              color: 'rgba(190, 218, 255, 0.62)',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              textAlign: 'right',
              marginTop: '0.45em',
            }}
          >
            Battery-Powered Hyper-Efficient Vehicle
          </motion.div>
        </motion.div>


      </motion.div>
    </div>
  );
}
