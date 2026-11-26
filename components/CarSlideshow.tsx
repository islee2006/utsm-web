'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { team: 'PROTOTYPE',     year: '2013', image: '/Prototype 2013.jpg',  position: 'center 80%' },
  { team: 'PROTOTYPE',     year: '2014', image: '/Prototype 2014.jpg',  position: 'center 60%' },
  { team: 'PROTOTYPE',     year: '2016', image: '/Prototype 2016.JPG',  position: 'center 80%' },
  { team: 'PROTOTYPE',     year: '2017', image: '/Prototype 2017.jpg',  position: 'center 80%' },
  { team: 'URBAN CONCEPT', year: '2020', image: '/UC 2020.JPG',         position: 'center 60%' },
  { team: 'PROTOTYPE',     year: '2020', image: '/Prototype 2020.JPG',  position: 'center 50%' },
  { team: 'PROTOTYPE',     year: '2022', image: '/Prototype 2022.jpg',  position: 'center 60%' },
  { team: 'PROTOTYPE',     year: '2024', image: '/Prototype 2024.JPG',  position: 'center 60%' },
  { team: 'URBAN CONCEPT', year: '2025', image: '/UC 2025.JPG',         position: 'center 75%' },
  { team: 'PROTOTYPE',     year: '2025', image: '/Prototype 2025.jpg',  position: 'center 75%' },
  { team: 'URBAN CONCEPT', year: '2026', image: '/UC 2026.JPG',         position: 'center 60%' },
  { team: 'PROTOTYPE',     year: '2026', image: '/Prototype 2026.JPG',  position: 'center 60%' },
];

export default function CarSlideshow() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative overflow-hidden" style={{ minHeight: '85vh' }}>

      {/* All slides always in DOM — CSS crossfade, no flicker */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0"
          style={{
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: i === index ? 1 : 0,
          }}
        >
          <img
            src={slide.image}
            alt={`${slide.team} car ${slide.year}`}
            className="w-full h-full object-cover"
            style={{ objectPosition: slide.position }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(10,20,50,0.88) 0%, rgba(10,20,50,0.25) 40%, transparent 65%)',
            }}
          />
        </div>
      ))}

      {/* Label animates in on slide change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="absolute bottom-16 left-8 md:left-16"
          style={{ zIndex: 10 }}
        >
          <div style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', lineHeight: 1.05, color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationThickness: '2px' }}>
            {slides[index].team} CAR
          </div>
          <div style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', lineHeight: 1.05, color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationThickness: '2px' }}>
            {slides[index].year}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
        style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%', color: 'white', cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'background-color 0.2s' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
        style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%', color: 'white', cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'background-color 0.2s' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Slide counter */}
      <div
        className="absolute bottom-6 right-8 md:right-16 z-10"
        style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-anton)' }}
      >
        {index + 1} / {slides.length}
      </div>
    </div>
  );
}
