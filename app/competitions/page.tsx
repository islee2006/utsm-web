import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CompetitionSlideshow from "@/components/CompetitionSlideshow";

export const metadata: Metadata = { title: "COMPETITIONS | UTSM" };

type Event = {
  id: string;
  name: string;
  location: string;
  dates: string;
  subtitle: string;
  categories: string[];
  youtubeId: string | null;
  results: string[];
  photos: { src: string; caption: string }[];
};

type YearGroup = {
  year: string;
  isCurrent: boolean;
  events: Event[];
};

const competitions: YearGroup[] = [
  {
    year: "2025–2026",
    isCurrent: true,
    events: [
      {
        id: "2026-shell",
        name: "Shell Eco-Marathon Americas",
        location: "Indianapolis Motor Speedway, IN",
        dates: "April 7–11, 2026",
        subtitle: "A milestone year for UTSM, with both vehicles passing technical inspection, a top-10 Prototype finish, and Urban Concept's first successful competition run",
        categories: ["Prototype — Battery Electric", "Urban Concept — Hydrogen Fuel Cell"],
        youtubeId: null,
        results: [
          "Prototype secured 7th place in its category",
          "Both vehicles successfully passed technical inspection",
          "Urban Concept successfully ran in competition for the first time",
          "Both teams gained valuable technical feedback for their next-generation vehicles",
        ],
        photos: [],
      },
    ],
  },
  {
    year: "2024–2025",
    isCurrent: false,
    events: [
      {
        id: "2025-shell",
        name: "Shell Eco-Marathon Americas",
        location: "Indianapolis Motor Speedway, IN",
        dates: "April 2–6, 2025",
        subtitle: "Urban Concept passed technical inspection — U of T's first functioning hydrogen vehicle cleared for racing",
        categories: ["Prototype — Battery Electric", "Urban Concept — Hydrogen Fuel Cell"],
        youtubeId: "BwQ7UxCYDAU?start=57&loop=1&playlist=BwQ7UxCYDAU&controls=0&rel=0&modestbranding=1&iv_load_policy=3",
        results: [
          "30 student leads attended from UTSM",
          "Competed against 64 teams across North & South America",
          "Urban Concept passed technical inspection for the first time",
          "Historic milestone: U of T's first functioning hydrogen vehicle cleared for racing",
        ],
        photos: [
          { src: "/2025 Competition/2025PROTO4.JPG", caption: "Celebrating passing technical inspection" },
          { src: "/2025 Competition/2025PROTO2.JPG", caption: "Team photo with the Prototype, \"Tempest\"" },
          { src: "/2025 Competition/2025PROTO1.JPG", caption: "Wheeling Tempest to the grid" },
          { src: "/2025 Competition/2025PROTO3.JPG", caption: "Tempest in the garage" },
          { src: "/2025 Competition/2025URB2.JPG", caption: "Urban Concept hydrogen vehicle in the garage" },
          { src: "/2025 Competition/2025URB1.JPG", caption: "Urban Concept ready for inspection" },
          { src: "/2025 Competition/2025URB3.JPG", caption: "Officials reviewing the Urban Concept" },
          { src: "/2025 Competition/2025URB4.JPG", caption: "Cockpit electronics under inspection" },
        ],
      },
    ],
  },
  {
    year: "2023–2024",
    isCurrent: false,
    events: [
      {
        id: "2024-shell",
        name: "Shell Eco-Marathon Americas",
        location: "Indianapolis Motor Speedway, IN",
        dates: "April 2024",
        subtitle: "Technical Inspection Passed — Prototype Battery Electric & Urban Concept Hydrogen",
        categories: ["Prototype — Battery Electric", "Urban Concept — Hydrogen Fuel Cell"],
        youtubeId: null,
        results: [
          "Prototype Battery Electric passed technical inspection",
          "Urban Concept Hydrogen competed for the first time",
        ],
        photos: [
          { src: "/2024 Competition/2024SEMA1.JPG", caption: "Unloading the car — now electric" },
          { src: "/2024 Competition/2024SEMA3.JPG", caption: "Final measurements before technical inspection" },
          { src: "/2024 Competition/2024SEMA4.JPG", caption: "Team prepping the car in the garage" },
        ],
      },
    ],
  },
  {
    year: "2022–2023",
    isCurrent: false,
    events: [
      {
        id: "2023-shell",
        name: "Shell Eco-Marathon Americas",
        location: "Indianapolis Motor Speedway, IN",
        dates: "April 2023",
        subtitle: "1st to Pass Technical Inspection, Prototype ICE",
        categories: ["Prototype — Internal Combustion Engine"],
        youtubeId: null,
        results: ["First team to pass technical inspection at the competition"],
        photos: [],
      },
      {
        id: "2023-quebec",
        name: "Compétition Supermiléage de Québec",
        location: "Québec, Canada",
        dates: "2023",
        subtitle: "2nd Place Overall, Prototype ICE",
        categories: ["Prototype — Internal Combustion Engine"],
        youtubeId: null,
        results: ["Finished 2nd place overall in the Prototype ICE category"],
        photos: [],
      },
    ],
  },
  {
    year: "2021–2022",
    isCurrent: false,
    events: [
      {
        id: "2022-shell",
        name: "Shell Eco-Marathon Americas",
        location: "Indianapolis Motor Speedway, IN",
        dates: "April 2022",
        subtitle: "Technical Inspection Passed, Prototype ICE",
        categories: ["Prototype — Internal Combustion Engine"],
        youtubeId: null,
        results: [
          "First team to pass technical inspection on Day 1",
          "Honourable mention — Technical Innovation Award for custom-built engine",
          "Final race cancelled due to severe weather (tornado warning)",
          "Team rebuilt from 3 members to 30+ in a single year",
        ],
        photos: [
          { src: "/2022 Competition/2022SEMA2.jpg", caption: "Prepping the car in the paddock" },
          { src: "/2022 Competition/2022SEMA1.jpg", caption: "Driver ready on the grid" },
          { src: "/2022 Competition/2022SEMA3.jpg", caption: "On track at Sunset Speedway" },
          { src: "/2022 Competition/2022SEMA4.jpg", caption: "Driver's-eye view from the cockpit" },
          { src: "/2022 Competition/2022SEMA5.jpg", caption: "Crossing the finish line" },
        ],
      },
    ],
  },
];

export default function CompetitionsPage() {
  return (
    <div style={{ backgroundColor: "#1a3464", minHeight: "100dvh" }}>

      {/* ── Hero ── */}
      <div className="relative" style={{ minHeight: "100dvh", overflow: "hidden" }}>
        <img
          src="/UC 2026.JPG"
          alt="UTSM at Shell Eco-Marathon"
          className="hero-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%", display: "block", position: "absolute", inset: 0 }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(8,16,48,0.60)" }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "500px", background: "linear-gradient(to bottom, transparent, #1a3464 90%)" }} />

        <div className="absolute z-10 animate-fade-up" style={{ bottom: "clamp(1.5rem, 4vh, 3rem)", left: "clamp(2rem, 6vw, 6rem)" }}>
          <div className="flex items-center gap-2 mb-5" style={{ opacity: 0.7 }}>
            <div style={{ width: "2rem", height: "2px", backgroundColor: "#3b82f6" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", color: "#93c5fd", textTransform: "uppercase" }}>
              Shell Eco-Marathon Americas
            </span>
          </div>
          <h1
            className="text-white uppercase animate-fade-up-delay-1"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(4rem, 11vw, 9rem)", lineHeight: 0.95, letterSpacing: "0.01em", textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
          >
            COMPETI<br />TIONS
          </h1>
          <p className="text-gray-300 mt-6 animate-fade-up-delay-2" style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", maxWidth: "440px", lineHeight: 1.65, opacity: 0.8 }}>
            Competing at the Indianapolis Motor Speedway against the best energy-efficiency engineering teams in North and South America.
          </p>
        </div>
      </div>

      {/* ── About strip ── */}
      <ScrollReveal>
        <div style={{ backgroundColor: "#152a4e", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: "min(1100px, 90vw)", margin: "0 auto", padding: "2.5rem 2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ width: "2px", height: "3rem", backgroundColor: "#3b82f6", flexShrink: 0 }} />
              <p style={{ color: "rgba(220,235,255,0.95)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                Shell Eco-marathon is a global engineering challenge asking student teams to design, build, and drive the most energy-efficient vehicle possible. The Americas edition is held annually at world-class racing venues — most recently the Indianapolis Motor Speedway, home of the Indy 500.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Competition entries ── */}
      <div style={{ maxWidth: "min(1280px, 92vw)", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
        {competitions.map((group, i) => (
          <ScrollReveal key={group.year} delay={0.04}>
            <div style={{ marginBottom: i < competitions.length - 1 ? "4rem" : 0 }}>

              {/* Year heading — shown once per group */}
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <div style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(4rem, 10vw, 7rem)",
                  lineHeight: 1,
                  color: group.isCurrent ? "rgba(59,130,246,0.38)" : "rgba(255,255,255,0.15)",
                  letterSpacing: "0.02em",
                  marginBottom: "0.25rem",
                  userSelect: "none",
                  animation: group.isCurrent
                    ? "yearReveal 1.1s cubic-bezier(0.23,1,0.32,1) 0.1s both, yearGlow 3.5s ease-in-out 1.2s infinite"
                    : "yearReveal 1.1s cubic-bezier(0.23,1,0.32,1) 0.1s both",
                }}>
                  {group.year}
                </div>
                {group.isCurrent && (
                  <span className="badge-latest" style={{ fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#60a5fa", backgroundColor: "rgba(59,130,246,0.14)", padding: "0.2rem 0.65rem", borderRadius: "2px" }}>
                    Latest
                  </span>
                )}
              </div>

              {/* Events within this year */}
              {group.events.map((comp, j) => (
                <div key={comp.id} style={{ marginBottom: j < group.events.length - 1 ? "1.5rem" : 0 }}>

                  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <span style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "0.55rem", animation: "fadeSlideDown 0.5s cubic-bezier(0.23,1,0.32,1) 0.45s both" }}>
                      {comp.location} · {comp.dates}
                    </span>

                    <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.05, marginBottom: "0.65rem", animation: "fadeUp 0.6s cubic-bezier(0.23,1,0.32,1) 0.55s both" }}>
                      {comp.name}
                    </h2>

                    <p style={{ fontSize: "0.88rem", color: "rgba(210,225,245,0.9)", lineHeight: 1.65, maxWidth: "500px", margin: "0 auto 1rem", animation: "fadeUp 0.6s cubic-bezier(0.23,1,0.32,1) 0.65s both" }}>
                      {comp.subtitle}
                    </p>

                    <div style={{ display: "flex", justifyContent: "center", gap: "0.45rem", flexWrap: "wrap" }}>
                      {comp.categories.map((cat) => (
                        <span key={cat} className="comp-tag" style={{ fontSize: "0.57rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.35)", background: "rgba(59,130,246,0.1)", padding: "0.25rem 0.7rem", borderRadius: "2px" }}>
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video */}
                  {comp.youtubeId && (
                    <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "16/9", marginBottom: "1.75rem", animation: "fadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 0.5s both" }}>
                      <iframe loading="lazy"
                        src={`https://www.youtube.com/embed/${comp.youtubeId}&autoplay=1&mute=1`}
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: "block" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`${comp.name} ${group.year}`}
                      />
                    </div>
                  )}

                  {/* Results grid */}
                  <div style={{ display: "grid", gridTemplateColumns: comp.results.length > 1 ? "1fr 1fr" : "1fr", gap: "0.5rem 3rem", maxWidth: "680px", margin: "0 auto 1.75rem" }}>
                    {comp.results.map((r, ri) => (
                      <div key={r} className="comp-result" style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", padding: "0.6rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ height: "1px", backgroundColor: group.isCurrent ? "rgba(59,130,246,0.7)" : "rgba(255,255,255,0.35)", flexShrink: 0, marginTop: "0.6rem", animation: `dashGrow 0.4s cubic-bezier(0.23,1,0.32,1) ${0.75 + ri * 0.07}s both` }} />
                        <p style={{ color: "rgba(220,235,255,0.95)", fontSize: "0.83rem", lineHeight: 1.6 }}>{r}</p>
                      </div>
                    ))}
                  </div>

                  {comp.photos.length > 0 && (
                    <CompetitionSlideshow photos={comp.photos} isCurrent={group.isCurrent} />
                  )}

                </div>
              ))}

            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        @keyframes kenBurns     { from { transform: scale(1); } to { transform: scale(1.07); } }
        @keyframes badgePulse   { 0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.5); } 50% { box-shadow: 0 0 0 7px rgba(59,130,246,0); } }
        @keyframes tagIn        { from { opacity: 0; transform: scale(0.85) translateY(6px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes resultSlide  { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes yearReveal   { from { opacity: 0; transform: translateY(50px) scale(0.88); filter: blur(18px); } to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
        @keyframes yearGlow     { 0%,100% { filter: drop-shadow(0 0 0px rgba(59,130,246,0)); } 50% { filter: drop-shadow(0 0 28px rgba(59,130,246,0.35)); } }
        @keyframes fadeUp       { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeSlideDown{ from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dashGrow     { from { width: 0; opacity: 0; } to { width: 14px; opacity: 1; } }

        .hero-img    { animation: kenBurns 14s ease-out forwards; }
        .badge-latest { animation: badgePulse 2.5s ease-in-out infinite; }
        .comp-tag    { animation: tagIn 0.45s cubic-bezier(0.23,1,0.32,1) 0.75s both; }
        .comp-tag:nth-child(2) { animation-delay: 0.82s; }
        .comp-result { animation: resultSlide 0.5s cubic-bezier(0.23,1,0.32,1) 0.75s both; }
        .comp-result:nth-child(2) { animation-delay: 0.82s; }
        .comp-result:nth-child(3) { animation-delay: 0.89s; }
        .comp-result:nth-child(4) { animation-delay: 0.96s; }
        .slide-arrow { transition: all 0.2s cubic-bezier(0.23,1,0.32,1) !important; }
        .slide-arrow:hover { background: rgba(59,130,246,0.25) !important; border-color: rgba(59,130,246,0.5) !important; transform: translateY(-50%) scale(1.15) !important; }

        @media (max-width: 640px) { .comp-photo-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </div>
  );
}
