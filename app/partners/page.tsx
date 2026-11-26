import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "PARTNERS | UTSM" };

type Sponsor = { name: string; logo: string | null; url?: string; darkBg?: boolean; blurb?: string };

const visionarySponsors: Sponsor[] = [
  {
    name: "Altium", logo: "/sponsors/altium.png", url: "https://www.altium.com",
    blurb: "Altium provides our electrical sub-teams with Altium Designer Professional licenses, allowing us to design custom PCBs used in our Proto and UC vehicles. Altium provides a host of electronic design software enabling engineers to design and print PCBs, with Altium Student Lab providing students resources for electronics design.",
  },
  {
    name: "DS SolidWorks", logo: "/sponsors/solidworks.png", url: "https://www.solidworks.com",
    blurb: "Providing our technical teams with SolidWorks licenses, SolidWorks enables both our Proto and UC teams to design our vehicles in a CAD environment, allowing us to fine-tune our aerobodies and test aerodynamics before manufacturing. SolidWorks provides a range of 3D CAD software, along with student support and software, fueling engineering design.",
  },
  {
    name: "Easy Composites", logo: "/sponsors/easycomposites.png", url: "https://www.easycomposites.co.uk",
  },
  {
    name: "SKF", logo: "/sponsors/skf.png", url: "https://www.skf.com",
    blurb: "Providing a variety of quality components such as bearings, chains, and sprockets, SKF plays a key role in the manufacturing of our mechanical systems, such as our drivetrain. As a global leader in bearings, seals, lubrication, and power transmission equipment, SKF designs and manufactures innovative solutions that improve energy efficiency by reducing friction.",
  },
  {
    name: "Skule™", logo: "/sponsors/skule.png", url: "https://skule.ca",
    blurb: "The SKULE student body directly supports UTSM through our student levy, enabling our team to design, manufacture, and race hyper fuel-efficient vehicles.",
  },
  {
    name: "Volta Energy", logo: "/sponsors/voltaenergy.png", url: "https://www.voltaenergy.ca",
    blurb: "Volta Energy provides our team with hands-on access to their laboratory, essential for our Urban Concept to test and rehydrate our hydrogen fuel cell. Pushing the boundaries of sustainable energy, Volta Energy utilizes new green hydrogen technologies and chemistry to shift away from fossil fuel utilization.",
  },
  {
    name: "Swagelok", logo: "/sponsors/swagelok.png", url: "https://www.swagelok.com",
    blurb: "Swagelok's hydrogen-safe tubing, regulators, flow meters, and fittings enable our team to utilize a hydrogen fuel cell, supporting our mission to push the boundaries of fuel efficiency. Primarily specializing in fluid system products, Swagelok offers a host of fittings, valves, regulators, and hoses across a wide range of industries and operating environments.",
  },
  {
    name: "SOPREMA", logo: "/sponsors/soprema.png", url: "https://www.soprema.ca",
    blurb: "SOPREMA supplies the foam we need to effectively and accurately complete our aerobody layups — an essential part of manufacturing a hyper fuel-efficient vehicle. SOPREMA specializes in sustainable and innovative waterproofing, soundproofing, insulation, and vegetated solutions for civil engineering applications.",
  },
  {
    name: "U of T Applied Science & Engineering", logo: "/sponsors/uoft-fase.png", url: "https://www.engineering.utoronto.ca",
    blurb: "With support from across all engineering faculties, the Engineering Alumni Network, and the Dean's Office, FASE supports our efforts to design, build, and race hyper-fuel efficient vehicles, directly enabling our members to apply in-class knowledge to a real-world engineering challenge.",
  },
  {
    name: "Spectronik", logo: "/sponsors/spectronik.png", url: "https://www.spectronik.com",
  },
  {
    name: "Shannonville Motorsport Park", logo: "/sponsors/shannonville.png", url: "https://shannonville.com",
    blurb: "As the birthplace of champions since 1953, Shannonville hosts a variety of high-octane races and events for spectators. They offer track rentals and on-track activities for the public, such as drags, drifting, and motorcycle track days. Shannonville's track allowed our Prototype team to test, race, and verify our battery-electric vehicle, validating our setup for the SEMA competition.",
  },
];

const otherSponsors: Sponsor[] = [
  {
    name: "Sticker Canada", logo: "/sponsors/stickercanada.png", url: "https://www.stickercanada.com",
    blurb: "Supporting our outreach initiatives, Sticker Canada provides UTSM with high-quality vinyl stickers to distribute at our open house, workshops, events, and F!rosh Week kits.",
  },
  {
    name: "Composites Canada", logo: "/sponsors/compositescanada.png", url: "https://compositescanada.com",
    blurb: "By providing us with specialized student rates on high-performance materials like carbon fiber, Composites Canada enables us to manufacture hyper fuel-efficient vehicles.",
  },
  {
    name: "Polymaker", logo: "/sponsors/polymaker.png", url: "https://polymaker.com",
    blurb: "Supporting UTSM's 3D printing needs, Polymaker is our exclusive filament sponsor, enabling both our UC and Proto teams to manufacture custom parts for our vehicles from a host of different filaments.",
  },
];


export default function PartnersPage() {
  return (
    <div style={{ backgroundColor: "#1a3464", minHeight: "100dvh" }}>

      {/* ── Hero ── */}
      <div className="relative" style={{ minHeight: "100dvh", overflow: "hidden" }}>
        <img
          src="/DSC08454.jpg"
          alt="UTSM team"
          className="hero-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block", position: "absolute", inset: 0 }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(8,16,48,0.62)" }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "500px", background: "linear-gradient(to bottom, transparent, #1a3464 90%)" }} />

        <div className="absolute z-10 animate-fade-up" style={{ bottom: "clamp(1.5rem, 4vh, 3rem)", left: "clamp(2rem, 6vw, 6rem)" }}>
          <div className="flex items-center gap-2 mb-5" style={{ opacity: 0.7 }}>
            <div style={{ width: "2rem", height: "2px", backgroundColor: "#3b82f6" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", color: "#93c5fd", textTransform: "uppercase" }}>
              University of Toronto Supermileage
            </span>
          </div>
          <h1
            className="text-white uppercase animate-fade-up-delay-1"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(4rem, 11vw, 9rem)", lineHeight: 0.95, letterSpacing: "0.01em", textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
          >
            OUR<br />PARTNERS
          </h1>
          <p className="text-gray-300 mt-6 animate-fade-up-delay-2" style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", maxWidth: "440px", lineHeight: 1.65, opacity: 0.8 }}>
            Our work is made possible by the generous support of industry leaders, institutions, and community partners.
          </p>
        </div>
      </div>

      {/* ── Your Support Matters ── */}
      <ScrollReveal>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem 5rem" }}>

          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "2rem", height: "1px", backgroundColor: "#3b82f6" }} />
              <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.3em", color: "#93c5fd", textTransform: "uppercase" }}>Become a Sponsor</span>
              <div style={{ width: "2rem", height: "1px", backgroundColor: "#3b82f6" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "white", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1 }}>
              Your Support Matters
            </h2>
          </div>

          <div className="support-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "stretch" }}>

            {/* Left — text content */}
            <div>
              <div style={{ marginBottom: "3rem" }}>
                <h3 style={{ fontFamily: "var(--font-anton)", fontSize: "1.25rem", color: "white", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
                  Get In Touch
                </h3>
                <div style={{ width: "2rem", height: "2px", backgroundColor: "#3b82f6", marginBottom: "1.25rem" }} />
                <p style={{ color: "rgba(210,225,245,0.85)", lineHeight: 1.8, fontSize: "0.875rem", marginBottom: "1rem" }}>
                  We offer sponsorship opportunities for companies we believe would be a great fit for our vision and goals.
                </p>
                <p style={{ color: "rgba(210,225,245,0.85)", lineHeight: 1.8, fontSize: "0.875rem", marginBottom: "1rem" }}>
                  We would love to chat more if you&apos;re interested in providing discounted materials and/or technical advice. We would be honoured to have your company become a part of the UTSM family!
                </p>
                <p style={{ color: "rgba(210,225,245,0.85)", lineHeight: 1.8, fontSize: "0.875rem" }}>
                  Feel free to reach out to{" "}
                  <a href="mailto:business@utsm.skule.ca" style={{ color: "#7eb3e8", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    business@utsm.skule.ca
                  </a>{" "}
                  with any inquiries. Learn more in our sponsorship package.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: "var(--font-anton)", fontSize: "1.25rem", color: "white", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
                  Donations
                </h3>
                <div style={{ width: "2rem", height: "2px", backgroundColor: "#3b82f6", marginBottom: "1.25rem" }} />
                <p style={{ color: "rgba(210,225,245,0.85)", lineHeight: 1.8, fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                  Interested in supporting the team through a monetary donation? Click below!
                </p>
                <a
                  href="#"
                  className="donate-btn"
                  style={{
                    display: "inline-block",
                    padding: "0.85rem 2.75rem",
                    backgroundColor: "transparent",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.68rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.35)",
                    borderRadius: "2px",
                    transition: "all 0.25s ease",
                  }}
                >
                  Donate
                </a>
              </div>
            </div>

            {/* Right — Sponsorship package card */}
            <div className="pkg-card" style={{
              backgroundColor: "#0d1e3d",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "6px",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ padding: "1.25rem 1.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.25em", color: "#93c5fd", textTransform: "uppercase" }}>
                  Sponsorship Package
                </span>
              </div>
              <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
                <img
                  src="/cover_image_only_preview.png"
                  alt="Sponsorship Package Preview"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 80%" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,15,40,0.92) 0%, rgba(5,15,40,0.15) 55%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.75rem", right: "1.75rem" }}>
                  <p style={{ fontFamily: "var(--font-anton)", fontSize: "1.3rem", color: "white", textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1.1, marginBottom: "0.35rem" }}>
                    University of Toronto<br />Supermileage Team
                  </p>
                  <p style={{ fontSize: "0.52rem", letterSpacing: "0.28em", color: "rgba(180,210,255,0.65)", textTransform: "uppercase" }}>
                    Sponsorship Package
                  </p>
                </div>
              </div>
              <div style={{ padding: "1.25rem 1.75rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <a
                  href="#"
                  className="pkg-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#93c5fd",
                    textDecoration: "none",
                    transition: "color 0.2s ease, gap 0.2s ease",
                  }}
                >
                  Download PDF
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Visionary Sponsors ── */}
      <ScrollReveal>
        <section className="sp-section">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "white", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 1rem" }}>
              Visionary Sponsors
            </h2>
            <div style={{ width: "64px", height: "3px", background: "#3b82f6", margin: "0 auto", borderRadius: "999px" }} />
          </div>
          <div className="sp-grid">
            {visionarySponsors.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.04}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="sp-card" title={s.name} style={s.darkBg ? { backgroundColor: "#1a3464" } : undefined}>
                  <div className="sp-card-inner">
                    {s.logo
                      ? <img src={s.logo} alt={s.name} className="sp-logo" />
                      : <span className="sp-fallback" style={s.darkBg ? { color: "white" } : undefined}>{s.name}</span>}
                  </div>
                  {s.blurb && (
                    <div className="sp-blurb-wrap">
                      <div><p className="sp-blurb-text">{s.blurb}</p></div>
                    </div>
                  )}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Other Sponsors ── */}
      <ScrollReveal>
        <section className="sp-section" style={{ backgroundColor: "#1a3464" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "white", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 1rem" }}>
              Affiliate Sponsors
            </h2>
            <div style={{ width: "64px", height: "3px", background: "#3b82f6", margin: "0 auto", borderRadius: "999px" }} />
          </div>
          <div className="sp-grid sp-grid-sm">
            {otherSponsors.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.06}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="sp-card" title={s.name} style={s.darkBg ? { backgroundColor: "#1a3464" } : undefined}>
                  <div className="sp-card-inner">
                    {s.logo
                      ? <img src={s.logo} alt={s.name} className="sp-logo" />
                      : <span className="sp-fallback" style={s.darkBg ? { color: "white" } : undefined}>{s.name}</span>}
                  </div>
                  {s.blurb && (
                    <div className="sp-blurb-wrap">
                      <div><p className="sp-blurb-text">{s.blurb}</p></div>
                    </div>
                  )}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Beyond the Track (Outreach + Media) ── */}
      <ScrollReveal>
        <section className="reach-section">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "white", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 1rem" }}>
              Beyond the Track
            </h2>
            <div style={{ width: "64px", height: "3px", background: "#3b82f6", margin: "0 auto", borderRadius: "999px" }} />
          </div>

          <div className="reach-grid">

            {/* Outreach Events */}
            <div className="reach-card">
              <div className="reach-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M3 11l18-7-7 18-2.5-7.5L3 11z" stroke="#60a5fa" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="reach-tag">Community</span>
              <h3 className="reach-title">Outreach Events</h3>
              <p className="reach-text">
                Our team participates in many outreach events both on and off campus, sharing our engineering work with students and the public.
              </p>
              <div className="reach-chips">
                <span className="reach-chip">U of T Open House</span>
                <span className="reach-chip">U of T Sustainability Conference</span>
                <span className="reach-chip">Shell V-Power NiTRO+ Fuel Launch</span>
                <span className="reach-chip">On-Campus Events</span>
              </div>
            </div>

            {/* Media Appearances */}
            <div className="reach-card">
              <div className="reach-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="7" width="18" height="13" rx="2" stroke="#60a5fa" strokeWidth="1.6" />
                  <path d="M8 7l3-4 3 4M7 20v1M17 20v1" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="12" cy="13.5" r="3" stroke="#60a5fa" strokeWidth="1.6" />
                </svg>
              </div>
              <span className="reach-tag">Press</span>
              <h3 className="reach-title">Media Appearances</h3>
              <p className="reach-text">
                Our team has been featured across national outlets, helping bring student-engineered fuel efficiency to a wider audience.
              </p>
              <div className="reach-chips">
                <span className="reach-chip">CTV</span>
                <span className="reach-chip">Canadian Geographic</span>
                <span className="reach-chip">Toronto Star</span>
                <span className="reach-chip">CP24</span>
                <span className="reach-chip">Global</span>
                <span className="reach-chip">SiriusXM Canada</span>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA strip ── */}
      <ScrollReveal>
        <div style={{ backgroundColor: "#0d1e3d", borderTop: "1px solid rgba(59,130,246,0.2)", padding: "4rem 2rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "white", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
            Ready to Partner With Us?
          </p>
          <p style={{ color: "rgba(190,210,240,0.65)", fontSize: "0.85rem", marginBottom: "2rem" }}>
            Reach out at{" "}
            <a href="mailto:business@utsm.skule.ca" style={{ color: "#7eb3e8", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              business@utsm.skule.ca
            </a>
          </p>
          <Link
            href="/contact"
            className="cta-btn"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.75rem",
              backgroundColor: "#3b82f6",
              color: "white",
              fontWeight: 700,
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.2s ease",
            }}
          >
            Get In Touch
          </Link>
        </div>
      </ScrollReveal>

      <style>{`
        @keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.07); } }
        .hero-img { animation: kenBurns 14s ease-out forwards; }

        /* ── Sponsor grid ── */
        .sp-section {
          background: #152a4e;
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 5rem 2rem 5.5rem;
        }
        .sp-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        /* Target the motion.div ScrollReveal wrappers, not the grandchild cards */
        .sp-grid > div {
          flex: 0 0 calc(25% - 12px);
          min-width: 200px;
        }
        .sp-grid-sm > div {
          flex: 0 0 calc(33.333% - 11px);
          min-width: 180px;
        }
        .sp-card {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          background: #ffffff;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          text-decoration: none;
          overflow: hidden;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .sp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.22);
          border-color: rgba(59,130,246,0.4);
        }
        .sp-card-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
          padding: 20px 24px;
          flex-shrink: 0;
        }
        .sp-blurb-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }
        .sp-card:hover .sp-blurb-wrap {
          grid-template-rows: 1fr;
        }
        .sp-blurb-wrap > div {
          overflow: hidden;
        }
        .sp-blurb-text {
          font-size: 0.72rem;
          line-height: 1.7;
          color: #334155;
          margin: 0;
          padding: 0.6rem 1.25rem 1rem;
          border-top: 1px solid rgba(0,0,0,0.07);
        }
        .sp-logo {
          display: block;
          max-width: 100%;
          max-height: 64px;
          width: auto;
          height: auto;
        }
        .sp-fallback {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1a2a4a;
          text-align: center;
          line-height: 1.4;
        }

        /* ── Beyond the Track ── */
        .reach-section {
          background: #152a4e;
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 5rem 2rem 5.5rem;
        }
        .reach-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem;
        }
        .reach-card {
          background: #0d1e3d;
          border: 1px solid rgba(59,130,246,0.18);
          border-radius: 10px;
          padding: 2.25rem 2rem;
          transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
        }
        .reach-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.28);
          border-color: rgba(59,130,246,0.4);
        }
        .reach-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .reach-tag {
          display: block;
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          color: #93c5fd;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }
        .reach-title {
          font-family: var(--font-anton);
          font-size: 1.4rem;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.85rem;
        }
        .reach-text {
          color: rgba(210,225,245,0.85);
          line-height: 1.75;
          font-size: 0.85rem;
          margin: 0 0 1.5rem;
        }
        .reach-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .reach-chip {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: #93c5fd;
          border: 1px solid rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.08);
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
        }
        @media (max-width: 768px) {
          .reach-grid { grid-template-columns: 1fr; }
        }

        /* ── Other interactions ── */
        .pkg-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.45); }
        .donate-btn:hover { background: rgba(59,130,246,0.15) !important; border-color: rgba(59,130,246,0.55) !important; }
        .pkg-link:hover { color: #60a5fa !important; gap: 0.75rem !important; }
        .cta-btn:hover { background-color: #2563eb !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,130,246,0.35); }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .sp-grid > div { flex: 0 0 calc(33.333% - 11px); }
        }
        @media (max-width: 768px) {
          .support-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .sp-grid > div,
          .sp-grid-sm > div { flex: 0 0 calc(50% - 8px); min-width: 0; }
          .sp-card-inner { height: 100px; padding: 14px 16px; }
          .sp-logo { max-height: 48px; }
        }
        @media (max-width: 400px) {
          .sp-grid > div,
          .sp-grid-sm > div { flex: 0 0 100%; }
        }
      `}</style>
    </div>
  );
}
