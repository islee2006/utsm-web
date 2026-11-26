import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "COMPLAINTS POLICY | UTSM" };

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
      <div style={{ width: "3px", height: "1.25rem", backgroundColor: "#3b82f6", borderRadius: "2px", flexShrink: 0 }} />
      <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", color: "#60a5fa", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}

function PolicyCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <div className="policy-card">
        <SectionLabel label={label} />
        <div className="policy-body">{children}</div>
      </div>
    </ScrollReveal>
  );
}

export default function ComplaintsPolicyPage() {
  return (
    <div style={{ backgroundColor: "#1a3464", minHeight: "100dvh" }}>

      {/* ── Header ── */}
      <div style={{ paddingTop: "9rem", paddingBottom: "3rem", paddingLeft: "2rem", paddingRight: "2rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex items-center justify-center gap-2 mb-5" style={{ opacity: 0.7 }}>
          <div style={{ width: "2rem", height: "2px", backgroundColor: "#3b82f6" }} />
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", color: "#93c5fd", textTransform: "uppercase" }}>
            University of Toronto Supermileage
          </span>
          <div style={{ width: "2rem", height: "2px", backgroundColor: "#3b82f6" }} />
        </div>
        <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1, letterSpacing: "0.02em", color: "white", textTransform: "uppercase", marginBottom: "1rem" }}>
          Complaints Policy
        </h1>
        <p style={{ color: "rgba(210,225,245,0.85)", fontSize: "0.9rem", maxWidth: "560px", margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
          Summary of our Complaints Policy, made public in line with the Skule&trade; Policy on Affiliated Clubs.
        </p>
        <a
          href="mailto:ombudsperson@g.skule.ca"
          className="policy-doc-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "white",
            textDecoration: "none",
            padding: "0.75rem 1.75rem",
            border: "1px solid rgba(255,255,255,0.35)",
            borderRadius: "2px",
            transition: "all 0.25s ease",
          }}
        >
          Email for the Complaints Policy
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M2.5 5.5l9.5 7 9.5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* ── Policy summary ── */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "4rem 2rem 6rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

        <PolicyCard label="Where Complaints Go">
          <p>
            Complaints go to{" "}
            <a href="mailto:ombudsperson@g.skule.ca" className="policy-inline-link">ombudsperson@g.skule.ca</a>{" "}
            — the Ombudsperson, a neutral third-party officer.
          </p>
          <p style={{ marginTop: "0.6rem" }}>
            Complaints against the Ombudsperson go to{" "}
            <a href="mailto:speaker@g.skule.ca" className="policy-inline-link">speaker@g.skule.ca</a>.
          </p>
        </PolicyCard>

        <PolicyCard label="Who You Can Complain About">
          <div className="policy-chips">
            <span className="policy-chip">Officers</span>
            <span className="policy-chip">Project Directors (and members of their team)</span>
            <span className="policy-chip">Board of Directors members</span>
            <span className="policy-chip">Affiliated Clubs members</span>
          </div>
        </PolicyCard>

        <PolicyCard label="Reasons for Complaints">
          <p>Harassment, sexual violence, defamation, slander, or a failure to do their job.</p>
          <p style={{ marginTop: "0.6rem" }}>
            Or violations of the{" "}
            <a href="https://governingcouncil.utoronto.ca/secretariat/policies/code-student-conduct" target="_blank" rel="noopener noreferrer" className="policy-inline-link">University of Toronto Code of Student Conduct</a>{" "}
            or Standards of Affiliation according to the{" "}
            <a href="https://skule.github.io/bylaws/policies/policy-on-affiliated-clubs.html" target="_blank" rel="noopener noreferrer" className="policy-inline-link">Policy on Affiliated Clubs</a>.
          </p>
        </PolicyCard>

        <div className="policy-mini-grid">
          <PolicyCard label="Anonymity">
            <p>Unless your identity as the complainant is necessary for the complaint, yes.</p>
          </PolicyCard>

          <PolicyCard label="What to Include">
            <p>Sufficient detail to begin an investigation.</p>
          </PolicyCard>
        </div>

        <PolicyCard label="Possible Response">
          <ul className="policy-list">
            <li>No action (lack of proof / actions not considered misconduct / actions happened outside the time period of their role)</li>
            <li>Offer to mediate a solution</li>
            <li>A factual recommendation report is created, which is executed according to the voting of the relevant executive body (typically the Club Affiliation Committee or Board of Directors), with care taken for privacy. The investigator cannot take any executive action on their own accord.</li>
          </ul>
        </PolicyCard>

        <PolicyCard label="Possible Recommendations">
          <ul className="policy-list">
            <li>Recall subject of complaint from their position.</li>
            <li>Take steps under the Policy on Affiliated Clubs, section 0.9.</li>
            <li>Mandate additional training.</li>
            <li>Require subject of complaint to issue an official apology.</li>
            <li>Escalate matter to campus police.</li>
            <li>Escalate matter to governmental law enforcement.</li>
            <li>Escalate matter to the Office of the Faculty Dean.</li>
            <li>Escalate matter to the Division of Student Life.</li>
            <li>Escalate matter to the Office of the University Provost.</li>
            <li>Amend EngSoc Bylaws and/or Policies.</li>
            <li>Take some other specific action, with additional justification for such an extraordinary recommendation.</li>
            <li>Any combination of the above.</li>
          </ul>
        </PolicyCard>

      </div>

      <style>{`
        .policy-doc-link:hover { background-color: rgba(59,130,246,0.15) !important; border-color: rgba(59,130,246,0.55) !important; }

        .policy-card {
          background: #152a4e;
          border: 1px solid rgba(59,130,246,0.18);
          border-radius: 10px;
          padding: 1.75rem 2rem;
        }
        .policy-body p {
          color: rgba(210,225,245,0.9);
          font-size: 0.88rem;
          line-height: 1.75;
          margin: 0;
        }
        .policy-inline-link {
          color: #7eb3e8;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .policy-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .policy-chip {
          font-size: 0.72rem;
          font-weight: 600;
          color: #93c5fd;
          border: 1px solid rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.08);
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
        }
        .policy-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .policy-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .policy-list li {
          position: relative;
          padding-left: 1.1rem;
          color: rgba(210,225,245,0.9);
          font-size: 0.88rem;
          line-height: 1.7;
        }
        .policy-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.62rem;
          width: 6px;
          height: 1px;
          background: rgba(147,197,253,0.7);
        }

        @media (max-width: 640px) {
          .policy-mini-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
