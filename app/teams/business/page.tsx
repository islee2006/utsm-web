import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Business Team" };

type Lead = { name: string; role: string; photo: string; linkedin: string };

// Archive: 2t6 business leads — flat list for compact grid
const archive2t6: Lead[] = [
  { name: "Ryan Hammer",  role: "Managing Director", photo: "/Ryan%20Hammer.JPG", linkedin: "https://www.linkedin.com/in/ryan-hammer-182111276/" },
  { name: "Willis Wu",    role: "Videography",        photo: "/Willis%20Wu.JPG", linkedin: "https://www.linkedin.com/in/willis-wu-wenyi/" },
  { name: "Rebecca Lee",  role: "Graphic Design",     photo: "/Rebecca%20Lee.JPG", linkedin: "https://www.linkedin.com/in/rebecca-lee-833932306/" },
  { name: "Isaac Lee",    role: "Photography",         photo: "/team-2t7/isaac.jpg", linkedin: "https://www.linkedin.com/in/isaac-lee-a45072339/" },
  { name: "Ethan Daroga", role: "Finance",             photo: "/Ethan%20Daroga.JPG", linkedin: "https://www.linkedin.com/in/ethan-daroga/" },
  { name: "Sarah Wang",   role: "Finance",             photo: "/Sarah%20Wang.JPG", linkedin: "https://www.linkedin.com/in/sarah-wang-013768256/" },
  { name: "Anita Du",     role: "Sponsorship",         photo: "/DSCF4139.JPG", linkedin: "https://www.linkedin.com/in/anita-du/" },
  { name: "Tej Patel",    role: "Sponsorship",         photo: "/Tej%20Patel.JPG", linkedin: "https://www.linkedin.com/in/tejrpatel/" },
];

const rows: Lead[][] = [
  [
    { name: "Ryan Hammer",                role: "Managing Director",              photo: "/Ryan%20Hammer.JPG",        linkedin: "https://www.linkedin.com/in/ryan-hammer-182111276/" },
    { name: "Ethan Daroga",               role: "Managing Director",              photo: "/Ethan%20Daroga.JPG",       linkedin: "https://www.linkedin.com/in/ethan-daroga/" },
  ],
  [
    { name: "Jason Wong",                 role: "Finance Lead",                   photo: "",                          linkedin: "https://www.linkedin.com/in/jason-wong-050074369/" },
    { name: "Rebecca Lee",                role: "Finance Lead",                   photo: "/team-2t7/rebecca.jpg",     linkedin: "https://www.linkedin.com/in/rebecca-lee-833932306/" },
  ],
  [
    { name: "Yana Khurana",               role: "Supply Chain Lead",              photo: "/team-2t7/yana.jpg",        linkedin: "https://www.linkedin.com/in/yana-khurana-691504219/" },
    { name: "Chance Hattrick",            role: "Supply Chain Lead",              photo: "/team-2t7/chance.jpg",      linkedin: "https://ca.linkedin.com/in/chance-hattrick-757707320" },
  ],
  [
    { name: "Tej Patel",                  role: "Sponsorship Lead",               photo: "/Tej%20Patel.JPG",          linkedin: "https://ca.linkedin.com/in/tej-patel-3958153b7" },
    { name: "Pierson Fritz",              role: "Sponsorship Lead",               photo: "/team-2t7/pierson.jpg",     linkedin: "https://ca.linkedin.com/in/pierson-fritz" },
    { name: "Diluxykaa Puvanenthirakumar", role: "Sponsorship Lead",               photo: "/team-2t7/diluxykaa.jpg",   linkedin: "https://www.linkedin.com/in/diluxykaap/" },
  ],
  [
    { name: "Fiona Duncan",               role: "Marketing & Outreach Lead",      photo: "/team-2t7/fiona.jpg",       linkedin: "https://www.linkedin.com/in/fiona-h-duncan/" },
    { name: "Isaac Lee",                  role: "Photography Lead & Webmaster",   photo: "/team-2t7/isaac.jpg",       linkedin: "https://www.linkedin.com/in/isaac-lee-a45072339/" },
  ],
];

const SIZES = "(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 440px";

export default function BusinessPage() {
  return (
    <>
      <section style={{ padding: "100px 24px 80px" }}>
        <h1
          style={{
            fontFamily: "var(--font-anton)",
            color: "#ffffff",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Business Leads
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
          {rows.map((row, ri) => (
            <div
              key={ri}
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "100%",
                maxWidth: "1400px",
              }}
            >
              {row.map((lead) => (
                <div
                  key={`${lead.name}-${lead.role}`}
                  className="lead-card"
                  style={{ flex: "1 1 300px", maxWidth: "440px" }}
                >
                  {/* Photo + LinkedIn overlay */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1 / 1",
                      overflow: "hidden",
                      backgroundColor: "#1a3464",
                    }}
                  >
                    {lead.photo && (
                      <Image
                        src={lead.photo}
                        alt={lead.name}
                        fill
                        sizes={SIZES}
                        priority={ri === 0}
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                      />
                    )}
                    {lead.linkedin && (
                      <a
                        href={lead.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-overlay"
                        aria-label={`${lead.name} on LinkedIn`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48" height="48">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Label */}
                  <div style={{ backgroundColor: "#2a5298", padding: "16px 20px 18px", textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-anton)",
                        color: "#ffffff",
                        fontSize: "1rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        margin: "0 0 6px",
                      }}
                    >
                      {lead.role}
                    </p>
                    <p
                      style={{
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        margin: 0,
                        fontFamily: "var(--font-geist-sans)",
                      }}
                    >
                      {lead.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── 2t6 Archive ── */}
      <section style={{ backgroundColor: "#152a4e", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.28em", color: "#93c5fd", textTransform: "uppercase", margin: "0 0 8px" }}>
              SEASON ARCHIVE
            </p>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "white", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
              Business Leads 2t6
            </h2>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {archive2t6.map((lead) => {
            return (
              <div key={`${lead.name}-${lead.role}`} className="lead-card" style={{ flex: "1 1 130px", maxWidth: "175px" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", overflow: "hidden", backgroundColor: "#1a3464" }}>
                  {lead.photo && (
                    <img
                      src={lead.photo}
                      alt={lead.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                    />
                  )}
                  {lead.linkedin && (
                    <a href={lead.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-overlay" aria-label={`${lead.name} on LinkedIn`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
                <div style={{ backgroundColor: "#1e3d6e", padding: "8px 10px 10px", textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-anton)", color: "#93c5fd", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 3px" }}>
                    {lead.role}
                  </p>
                  <p style={{ color: "#ffffff", fontSize: "0.72rem", fontWeight: 600, margin: 0, fontFamily: "var(--font-geist-sans)" }}>
                    {lead.name}
                  </p>
                </div>
              </div>
            );
          })}
          </div>

        </div>
      </section>
    </>
  );
}
