'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode, type CSSProperties } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
}

export default function ScrollReveal({ children, className, style, delay = 0, y = 22 }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
