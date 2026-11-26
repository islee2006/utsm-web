"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  backgroundColor: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "4px",
  color: "white",
  fontSize: "0.9rem",
  outline: "none",
  boxSizing: "border-box" as const,
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  fontFamily: "inherit",
};

const labelStyle = {
  display: "block",
  fontSize: "0.62rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.78)",
  marginBottom: "0.5rem",
};

function SectionLabel({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
      <div style={{
        width: "3px",
        height: "1.25rem",
        backgroundColor: accent ? "#3b82f6" : "rgba(255,255,255,0.35)",
        borderRadius: "2px",
        flexShrink: 0,
      }} />
      <span style={{
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.25em",
        color: accent ? "#60a5fa" : "rgba(255,255,255,0.85)",
        textTransform: "uppercase",
      }}>
        {label}
      </span>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  const contacts = [
    { label: "General", value: "team@utsm.skule.ca", href: "mailto:team@utsm.skule.ca", primary: true },
    { label: "Prototype", value: "prototype@utsm.skule.ca", href: "mailto:prototype@utsm.skule.ca", primary: false },
    { label: "Urban Concept", value: "urbanconcept@utsm.skule.ca", href: "mailto:urbanconcept@utsm.skule.ca", primary: false },
    { label: "Business", value: "business@utsm.skule.ca", href: "mailto:business@utsm.skule.ca", primary: false },
  ];

  const locations = [
    { label: "McCaul", value: "256 McCaul St, Toronto, ON" },
    { label: "Myhal Arena", value: "55 St George St, Toronto, ON" },
  ];

  const socials = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/utsm_team/",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@utsupermileage",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/university-of-toronto-supermileage/",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/user/UofTSupermileage",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon fill="#1a3464" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/teamutsm",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: "#1a3464", minHeight: "100dvh" }}>

      {/* ── Hero ── */}
      <div className="relative" style={{ minHeight: "100dvh", overflow: "hidden" }}>
        <img
          src="/DSC09057.jpg"
          alt="UTSM team"
          className="contact-hero-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block", position: "absolute", inset: 0 }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,20,55,0.65)" }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "300px", background: "linear-gradient(to bottom, transparent, #1a3464 88%)" }} />

        <div className="absolute z-10 animate-fade-up" style={{ bottom: "clamp(1.5rem, 4vh, 3rem)", left: "clamp(2rem, 6vw, 6rem)" }}>
          <div className="flex items-center gap-2 mb-4" style={{ opacity: 0.7 }}>
            <div style={{ width: "2rem", height: "2px", backgroundColor: "#3b82f6" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", color: "#93c5fd", textTransform: "uppercase" }}>
              University of Toronto Supermileage
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 0.95, letterSpacing: "0.01em", color: "white", textTransform: "uppercase", textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}>
            GET IN<br />TOUCH
          </h1>
          <p style={{ color: "rgba(210,225,245,0.9)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "440px", marginTop: "1.25rem" }}>
            Whether you want to join the team, become a sponsor, or just learn more — we&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div
        className="contact-grid"
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}
      >

        {/* ── Left: Info ── */}
        <ScrollReveal>
          <div>

            <SectionLabel label="Contact" accent />
            <p style={{ fontSize: "0.82rem", color: "rgba(210,225,245,0.92)", marginBottom: "1rem", lineHeight: 1.6 }}>
              Not sure who to reach? Start with General.
            </p>

            <div style={{ marginBottom: "2.25rem" }}>
              {contacts.map((item) => (
                <div key={item.label} className="contact-row" style={{ display: "grid", gridTemplateColumns: "140px 1fr", padding: "0.85rem 0", borderBottom: "1px solid rgba(255,255,255,0.1)", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    {item.primary && <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#3b82f6", flexShrink: 0 }} />}
                    <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: item.primary ? "white" : "rgba(255,255,255,0.82)", paddingTop: "1px", marginLeft: item.primary ? 0 : "0.5rem" }}>
                      {item.label}
                    </span>
                  </div>
                  <a href={item.href} className="contact-link" style={{ fontSize: "0.87rem", color: item.primary ? "white" : "#dbeafe", textDecoration: "none", transition: "color 0.2s ease", fontWeight: item.primary ? 500 : 400 }}>
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <SectionLabel label="Locations" />
            <p style={{ fontSize: "0.82rem", color: "rgba(210,225,245,0.92)", marginBottom: "1rem", lineHeight: 1.6 }}>
              Where you&apos;ll find us on campus.
            </p>

            <div style={{ marginBottom: "2.25rem" }}>
              {locations.map((loc) => (
                <div key={loc.label} style={{ display: "grid", gridTemplateColumns: "140px 1fr", padding: "0.85rem 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.82)", paddingTop: "1px", paddingLeft: "0.5625rem" }}>
                    {loc.label}
                  </span>
                  <span style={{ fontSize: "0.87rem", color: "rgba(220,232,250,0.96)" }}>{loc.value}</span>
                </div>
              ))}
            </div>

            <SectionLabel label="Follow Us" />
            <p style={{ fontSize: "0.82rem", color: "rgba(210,225,245,0.92)", marginBottom: "1rem", lineHeight: 1.6 }}>
              Behind-the-scenes builds, competition updates, and more.
            </p>

            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-link" style={{ width: "2.4rem", height: "2.4rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "6px", color: "rgba(255,255,255,0.88)", textDecoration: "none", transition: "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease", flexShrink: 0 }}>
                  {s.icon}
                </a>
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* ── Right: Form ── */}
        <ScrollReveal delay={0.1}>
          {submitted ? (
            <div style={{ padding: "4rem 2.5rem", textAlign: "center", border: "1px solid rgba(59,130,246,0.3)", borderLeft: "4px solid #3b82f6", borderRadius: "6px", backgroundColor: "rgba(59,130,246,0.08)" }}>
              <div style={{ width: "3rem", height: "2px", backgroundColor: "#3b82f6", margin: "0 auto 1.5rem" }} />
              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: "1.8rem", color: "white", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>
                Message Sent
              </h3>
              <p style={{ color: "rgba(210,225,245,0.9)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                We&apos;ll get back to you as soon as we can.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem", background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "6px", padding: "2rem" }}
            >
              {/* Form heading — sized as a real heading, not a tiny label */}
              <div style={{ paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: "0.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <div style={{ width: "3px", height: "1.5rem", backgroundColor: "#3b82f6", borderRadius: "2px", flexShrink: 0 }} />
                  <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "1.4rem", color: "white", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                    Send a Message
                  </h2>
                </div>
                <p style={{ fontSize: "0.82rem", color: "rgba(210,225,245,0.88)", lineHeight: 1.6, paddingLeft: "0.9rem" }}>
                  We read every message and reply within a few days.
                </p>
              </div>

              <div>
                <label style={labelStyle}>Name</label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First" className="form-input" style={inputStyle} />
                  <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last" className="form-input" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="form-input" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what's on your mind..." className="form-input" style={{ ...inputStyle, resize: "none" }} />
              </div>

              <button
                type="submit"
                className="submit-btn"
                style={{ width: "100%", padding: "1rem", backgroundColor: "#3b82f6", color: "white", fontFamily: "var(--font-anton)", fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.2s ease, transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)" }}
              >
                Send Message →
              </button>
            </form>
          )}
        </ScrollReveal>

      </div>

      {/* ── Map ── */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2.5rem 2rem 6rem" }}>
        <SectionLabel label="Find Us" accent />
        <div className="map-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
          {[
            { label: "McCaul St", address: "256 McCaul St, Toronto, ON", q: "256+McCaul+St+Toronto+ON" },
            { label: "Myhal Arena", address: "55 St George St, Toronto, ON", q: "Myhal+Centre+for+Engineering+Innovation+Toronto" },
          ].map((loc) => (
            <div key={loc.label}>
              <div style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
                <iframe src={`https://maps.google.com/maps?q=${loc.q}&t=&z=17&ie=UTF8&iwloc=&output=embed`} width="100%" height="260" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={loc.label} />
              </div>
              <div style={{ marginTop: "0.65rem" }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.88)", marginBottom: "0.2rem" }}>
                  {loc.label}
                </p>
                <p style={{ fontSize: "0.82rem", color: "rgba(210,225,245,0.88)" }}>{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.07); } }
        @keyframes shimmerBtn { from { background-position: -200% 0; } to { background-position: 200% 0; } }
        @keyframes rowIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }

        .contact-hero-img { animation: kenBurns 14s ease-out forwards; }

        .contact-row { transition: background-color 0.2s ease, padding-left 0.2s ease; border-radius: 4px; }
        .contact-row:hover { background-color: rgba(255,255,255,0.04) !important; padding-left: 0.5rem !important; }

        .contact-link { transition: color 0.2s ease !important; }
        .contact-link:hover { color: white !important; text-decoration: underline !important; text-underline-offset: 3px !important; }

        .social-link { transition: all 0.25s cubic-bezier(0.23,1,0.32,1) !important; }
        .social-link:hover {
          color: white !important;
          border-color: rgba(59,130,246,0.6) !important;
          background-color: rgba(59,130,246,0.15) !important;
          transform: translateY(-4px) scale(1.1) !important;
          box-shadow: 0 8px 20px rgba(59,130,246,0.25) !important;
        }

        .form-input { transition: all 0.25s cubic-bezier(0.23,1,0.32,1) !important; }
        .form-input:focus {
          border-color: rgba(59,130,246,0.75) !important;
          background-color: rgba(255,255,255,0.1) !important;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12), 0 4px 16px rgba(59,130,246,0.08) !important;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.4); }

        .submit-btn { position: relative; overflow: hidden; transition: all 0.25s cubic-bezier(0.23,1,0.32,1) !important; }
        .submit-btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent); transform: translateX(-100%); transition: transform 0.55s ease; pointer-events: none; }
        .submit-btn:hover { background-color: #2563eb !important; transform: translateY(-2px) !important; box-shadow: 0 8px 24px rgba(59,130,246,0.4) !important; }
        .submit-btn:hover::after { transform: translateX(100%); }
        .submit-btn:active { transform: scale(0.98) translateY(0) !important; box-shadow: none !important; }

        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .map-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
