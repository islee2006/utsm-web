import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "NEWSLETTERS | UTSM" };

const newsletters = [
  {
    id: "fall-2024",
    issue: "01",
    season: "2024–2025",
    date: "February 2025",
    label: "FALL 2024",
    description: "In this issue, the team has designed and begun manufacturing their new 2024–2025 vehicles.",
    authors: "Abby De Joseph & Aidan Torres",
    authorTitle: "UTSM Captains, 2024–2025",
    pdf: "/UTSM-Newsletter-Fall-2024.pdf",
  },
];

export default function NewslettersPage() {
  return (
    <div style={{ backgroundColor: "#1a3464", minHeight: "100dvh", paddingTop: "64px" }}>

      {/* ── Header ── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "4rem 2rem 3rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#7eb3e8" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.3em", color: "#7eb3e8", textTransform: "uppercase" }}>
              University of Toronto Supermileage
            </span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(4rem, 12vw, 9rem)",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            lineHeight: 0.9,
          }}>
            NEWS<br />LETTERS
          </h1>
        </div>
      </div>

      {/* ── Newsletter entries ── */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem 6rem" }}>
        {newsletters.map((n, i) => (
          <ScrollReveal key={n.id} delay={i * 0.1}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "4rem 0",
              alignItems: "start",
            }}>
              {/* Left: PDF preview embed */}
              <div style={{ paddingRight: "3rem" }}>
                <div
                  className="newsletter-card"
                  style={{
                    borderRadius: "3px",
                    overflow: "hidden",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
                    transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    backgroundColor: "white",
                    height: "480px",
                  }}
                >
                  <iframe loading="lazy"
                    src={`${n.pdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                    style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                    title={`UTSM Newsletter ${n.label}`}
                  />
                </div>
              </div>

              {/* Right: info */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingLeft: "1rem", paddingTop: "1rem", textAlign: "center", height: "480px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.25em", color: "#7eb3e8", textTransform: "uppercase", marginBottom: "1.5rem", display: "block" }}>
                  {n.season} · {n.label}
                </span>

                <h2 style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "3.5rem",
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}>
                  {n.date}
                </h2>

                <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#7eb3e8", margin: "0 auto 1.75rem", opacity: 0.6 }} />

                <p style={{
                  color: "rgba(200,218,245,0.8)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  maxWidth: "300px",
                  marginBottom: "2.5rem",
                }}>
                  {n.description}
                </p>

                {/* Author */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", width: "100%", maxWidth: "280px" }}>
                  <p style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "0.35rem", letterSpacing: "0.02em" }}>
                    {n.authors}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(190,210,240,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {n.authorTitle}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* More coming soon */}
        <ScrollReveal delay={0.15}>
          <div style={{ paddingTop: "4rem", display: "flex", alignItems: "center", gap: "2rem" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
            <p style={{
              fontFamily: "var(--font-anton)",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>
              More Coming Soon
            </p>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .newsletter-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.5) !important;
        }
      `}</style>
    </div>
  );
}
