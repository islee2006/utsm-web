'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({ value, suffix = '', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const duration = 1800;
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = progress < 1 ? Math.floor(eased * value) : value;
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
