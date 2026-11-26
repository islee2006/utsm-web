'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface TimelineEntryProps {
  year: string;
  side: 'left' | 'right';
  children: ReactNode;
}

const ease = [0.23, 1, 0.32, 1] as const;

export default function TimelineEntry({ year, side, children }: TimelineEntryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-40px' });

  return (
    <div ref={ref}>
      {/* ── Mobile layout ── */}
      <motion.div
        className="flex items-start gap-4 py-3 md:hidden"
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
        transition={{ duration: 0.55, ease }}
      >
        <div
          className="flex-shrink-0 flex justify-center pt-1"
          style={{ width: '24px', position: 'relative', zIndex: 10 }}
        >
          <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: 'rgba(150, 190, 240, 0.35)', border: '2px solid rgba(180, 215, 255, 0.6)' }} />
        </div>
        <div>
          <span style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1.8rem, 6vw, 2.4rem)', lineHeight: 1, color: 'white', display: 'block', marginBottom: '4px' }}>
            {year}
          </span>
          <p style={{ color: '#e8edf8', fontSize: '1rem', lineHeight: 1.6 }}>
            {children}
          </p>
        </div>
      </motion.div>

      {/* ── Desktop layout ── */}
      <div
        className="hidden md:grid items-center"
        style={{ gridTemplateColumns: '1fr 24px 1fr', padding: '14px 0' }}
      >
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.55, ease }}
          style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', paddingRight: '4px' }}
        >
          {side === 'left' && (
            <>
              <p style={{ color: '#e8edf8', fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'right' }}>
                {children}
              </p>
              <span style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, flexShrink: 0, color: 'white' }}>
                {year}
              </span>
            </>
          )}
        </motion.div>

        {/* Center dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
          transition={{ duration: 0.4, ease }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}
        >
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(150, 190, 240, 0.35)', border: '2px solid rgba(180, 215, 255, 0.6)' }} />
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.55, ease }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '4px' }}
        >
          {side === 'right' && (
            <>
              <span style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, flexShrink: 0, color: 'white' }}>
                {year}
              </span>
              <p style={{ color: '#e8edf8', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {children}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
