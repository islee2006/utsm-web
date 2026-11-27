import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "CARS | UTSM" };

const cars = [
  {
    id: "2026-prototype",
    season: "2025–2026 Season",
    year: "2025–26",
    name: "TEMPEST",
    class: "PROTOTYPE",
    accentColor: "#3b82f6",
    image: "/tempest.jpg",
    imagePosition: "41% center",
    flipLayout: false,
    isCurrent: true,
    href: null,
    desc: "An ultralight, battery-electric vehicle engineered to maximize energy efficiency through aerodynamic design, lightweight construction, and an optimized electric powertrain.",
  },
  {
    id: "2026-urban-concept",
    season: "2025–2026 Season",
    year: "2025–26",
    name: "JACKSON STORM",
    class: "URBAN CONCEPT",
    accentColor: "#3b82f6",
    image: "/urban-concept-2026.jpg",
    imagePosition: "52% center",
    flipLayout: true,
    isCurrent: true,
    href: "/cars/jackson-storm",
    desc: "A hydrogen-powered vehicle designed to advance sustainable urban transportation by combining energy efficiency, innovative fuel cell technology, and practical automotive design.",
  },
  {
    id: "raven",
    season: "2024–2025 Season",
    year: "2024–25",
    name: "RAVEN",
    class: "PROTOTYPE",
    accentColor: "#3b82f6",
    image: "/Prototype 2025.jpg",
    imagePosition: "center 80%",
    flipLayout: false,
    isCurrent: false,
    href: "/cars/prototype",
    desc: "A battery-electric-powered vehicle with a custom motor controller. Engineered for maximum efficiency at Shell Eco-Marathon Americas.",
  },
  {
    id: "lightning",
    season: "2024–2025 Season",
    year: "2024–25",
    name: "LIGHTNING McWIN",
    class: "URBAN CONCEPT",
    accentColor: "#ef4444",
    image: "/UC 2025.JPG",
    imagePosition: "center 55%",
    flipLayout: true,
    isCurrent: false,
    href: "/cars/urban-concept",
    desc: "The University of Toronto's first ever functioning, student-built hydrogen-powered vehicle — a milestone for the team and clean energy engineering.",
  },
  {
    id: "shadow",
    season: "2023–2024 Season",
    year: "2023–24",
    name: "SHADOW",
    class: "PROTOTYPE",
    accentColor: "#64748b",
    image: "/Prototype 2024.JPG",
    imagePosition: "15% 75%",
    flipLayout: false,
    isCurrent: false,
    href: null,
    desc: "UTSM's first functioning battery-electric-powered vehicle — a pivotal step in the team's transition from ICE to sustainable powertrains.",
  },
  {
    id: "mist-rider",
    season: "2023–2024 Season",
    year: "2023–24",
    name: "MIST RIDER",
    class: "URBAN CONCEPT",
    accentColor: "#64748b",
    image: "/mist-rider.jpg",
    imagePosition: "center",
    showWhole: true, // the car is too wide to survive the card's near-square crop
    flipLayout: true,
    isCurrent: false,
    href: null,
    desc: "The University of Toronto's first iteration of a student-built hydrogen-powered vehicle. Debuted at Shell Eco-Marathon Americas 2024.",
  },
];

const sections: Record<string, { label: string; lineColor: string }> = {
  "2025–2026 Season": { label: "2025–2026 Season", lineColor: "#3b82f6" },
  "2024–2025 Season": { label: "2024–2025 Season", lineColor: "rgba(255,255,255,0.15)" },
  "2023–2024 Season": { label: "2023–2024 Season", lineColor: "rgba(255,255,255,0.15)" },
};

export default function CarsPage() {
  const seasons = Array.from(new Set(cars.map((c) => c.season)));

  return (
    <div style={{ backgroundColor: "#1a3464", minHeight: "100dvh" }}>

      {/* ── Hero ── */}
      <div className="relative" style={{ minHeight: "100dvh", overflow: "hidden" }}>
        <img
          src="/Prototype 2025.jpg"
          alt="UTSM Prototype Raven"
          className="hero-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 75%", display: "block", position: "absolute", inset: 0 }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,20,55,0.6)" }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "420px", background: "linear-gradient(to bottom, transparent, #1a3464 88%)" }} />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center" style={{ paddingTop: "4rem" }}>
          <div className="animate-fade-up">
            <div className="flex items-center justify-center gap-3 mb-6" style={{ opacity: 0.75 }}>
              <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#3b82f6" }} />
              <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.35em", color: "#93c5fd", textTransform: "uppercase" }}>
                University of Toronto Supermileage
              </span>
              <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#3b82f6" }} />
            </div>
            <h1
              className="text-white uppercase animate-fade-up-delay-1"
              style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(5rem, 14vw, 12rem)", lineHeight: 0.9, letterSpacing: "0.02em", textShadow: "0 4px 60px rgba(0,0,0,0.5)" }}
            >
              OUR<br />CARS
            </h1>
            <p
              className="text-gray-300 mt-8 mx-auto animate-fade-up-delay-2"
              style={{ fontSize: "clamp(0.85rem, 1.4vw, 1rem)", maxWidth: "460px", lineHeight: 1.7, opacity: 0.75 }}
            >
              Every vehicle is designed, fabricated, and raced entirely by UTSM
              students — from raw carbon fibre to the track at Indianapolis Motor Speedway.
            </p>
          </div>
        </div>
      </div>

      {/* ── Seasons ── */}
      {seasons.map((season) => {
        const meta = sections[season];
        const seasonCars = cars.filter((c) => c.season === season);
        const isCurrent = season === seasons[0];

        return (
          <div key={season}>
            <ScrollReveal>
              <div style={{ maxWidth: "1300px", margin: "0 auto", padding: isCurrent ? "5rem 2rem 2.5rem" : "2.5rem 2rem 2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <div style={{ flex: 1, height: isCurrent ? "2px" : "1px", background: `linear-gradient(to left, ${meta.lineColor}, transparent)` }} />
                  <span style={{
                    fontFamily: "var(--font-anton)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    letterSpacing: "0.04em",
                    color: isCurrent ? "white" : "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}>
                    {meta.label}
                  </span>
                  <div style={{ flex: 1, height: isCurrent ? "2px" : "1px", background: `linear-gradient(to right, ${meta.lineColor}, transparent)` }} />
                </div>
              </div>
            </ScrollReveal>

            <div style={{ maxWidth: "1300px", margin: "0 auto", padding: isCurrent ? "0 2rem 2rem" : "0 2rem 6rem" }}>
              {seasonCars.map((car, i) => {
                const CardWrapper = car.href
                  ? ({ children }: { children: React.ReactNode }) => (
                      <Link href={car.href!} className="car-card block" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        height: "65vh",
                        overflow: "hidden",
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        marginBottom: i < seasonCars.length - 1 ? "1.5rem" : 0,
                        textDecoration: "none",
                        cursor: "pointer",
                      }}>{children}</Link>
                    )
                  : ({ children }: { children: React.ReactNode }) => (
                      <div className="car-card" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        height: "65vh",
                        overflow: "hidden",
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        marginBottom: i < seasonCars.length - 1 ? "1.5rem" : 0,
                      }}>{children}</div>
                    );
                return (
                <ScrollReveal key={car.id} delay={i * 0.08}>
                  <CardWrapper>
                    <div style={{
                      order: car.flipLayout ? 2 : 1,
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: "#060f22",
                    }}>
                      {car.image ? (
                        <>
                          <img
                            src={car.image}
                            alt={`${car.class} ${car.name}`}
                            className="car-photo"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: car.showWhole ? "contain" : "cover",
                              objectPosition: car.imagePosition,
                              display: "block",
                              transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                              filter: car.isCurrent ? "none" : "saturate(0.75) brightness(0.85)",
                            }}
                          />
                          <div style={{
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            background: car.flipLayout
                              ? "linear-gradient(to left, rgba(6,15,34,0.55) 0%, transparent 45%)"
                              : "linear-gradient(to right, rgba(6,15,34,0.55) 0%, transparent 45%)",
                          }} />
                        </>
                      ) : (
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                          <span style={{
                            fontFamily: "var(--font-anton)",
                            fontSize: "clamp(4rem, 9vw, 7rem)",
                            color: "rgba(255,255,255,0.04)",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            userSelect: "none",
                            textAlign: "center",
                            lineHeight: 1.1,
                            padding: "1rem",
                          }}>
                            {car.name}
                          </span>
                        </div>
                      )}
                    </div>

                    <div style={{
                      order: car.flipLayout ? 1 : 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "clamp(2rem, 5vw, 4rem)",
                      background: "linear-gradient(145deg, #06111e 0%, #0b1a3a 100%)",
                      borderLeft: car.flipLayout ? "none" : `4px solid ${car.accentColor}`,
                      borderRight: car.flipLayout ? `4px solid ${car.accentColor}` : "none",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.2)",
                    }}>
                      <div style={{ marginBottom: "1.5rem" }}>
                        <span style={{
                          display: "inline-block",
                          padding: "0.3rem 0.85rem",
                          fontSize: "0.6rem",
                          fontWeight: 800,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.6)",
                          backgroundColor: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          borderRadius: "2px",
                        }}>
                          {car.year}
                        </span>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.65rem" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: car.accentColor, flexShrink: 0 }} />
                        <span style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.22em",
                          color: "rgba(255,255,255,0.5)",
                          textTransform: "uppercase",
                        }}>
                          {car.class}
                        </span>
                      </div>

                      <h2 style={{
                        fontFamily: "var(--font-anton)",
                        fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                        lineHeight: 0.95,
                        color: "white",
                        letterSpacing: "0.03em",
                        marginBottom: "1.5rem",
                      }}>
                        {car.name}
                      </h2>

                      <div style={{
                        width: "3rem",
                        height: "2px",
                        backgroundColor: car.accentColor,
                        marginBottom: "1.5rem",
                        opacity: 0.9,
                      }} />

                      <p style={{
                        color: "rgba(190,210,240,0.78)",
                        lineHeight: 1.75,
                        fontSize: "0.88rem",
                        maxWidth: "380px",
                      }}>
                        {car.desc}
                      </p>
                    </div>
                  </CardWrapper>
                </ScrollReveal>
                );
              })}
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.07); }
        }
        .hero-img {
          animation: kenBurns 14s ease-out forwards;
        }
        @media (max-width: 767px) {
          .car-card {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .car-card > div {
            order: unset !important;
            border-left: none !important;
            border-right: none !important;
            min-height: 260px;
          }
        }
        .car-card {
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .car-card:hover {
          border-color: rgba(255,255,255,0.35);
          box-shadow: 0 0 60px rgba(0,0,0,0.4);
        }
        .car-card:hover .car-photo {
          transform: scale(1.05);
        }
        .car-card:hover .accent-bar {
          opacity: 1;
          box-shadow: 0 0 20px rgba(59,130,246,0.5);
        }
      `}</style>
    </div>
  );
}
