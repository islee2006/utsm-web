import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "TEAMS" };

// One panoramic image. Each card shows a different third via background-position.
const IMG = "/tempest-car.png";

const teams = [
  {
    name: "PROTOTYPE",
    type: "BATTERY ELECTRIC",
    description: "Reaching new heights in battery electric hyper efficiency and aerodynamics.",
    href: "/teams/prototype",
    bgPos: "0% 56%",   // left third of the image, framed on the car
  },
  {
    name: "URBAN CONCEPT",
    type: "HYDROGEN FUEL CELL",
    description: "Resembling a traditional vehicle but powered only by hydrogen and oxygen.",
    href: "/teams/urban-concept",
    bgPos: "50% 56%",  // middle third, framed on the car
  },
  {
    name: "BUSINESS",
    type: "BACK-END MANAGEMENT",
    description: "Achieving synergy between business operations and engineering.",
    href: "/teams/business",
    bgPos: "100% 56%", // right third, framed on the car
  },
];

export default function TeamsPage() {
  return (
    <section style={{ padding: "48px 24px 80px", display: "flex", justifyContent: "center" }}>
      <div className="teams-grid" style={{ width: "100%" }}>
        {teams.map((team) => (
          <Link key={team.name} href={team.href} className="team-card">

            {/* Image: 300% wide background so each card shows exactly 1/3 of the photo */}
            <div
              className="team-img"
              style={{
                height: "380px",
                backgroundImage: `url('${IMG}')`,
                backgroundSize: "300% auto",
                backgroundPosition: team.bgPos,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0b1929",
              }}
            />

            {/* Full-width blue label — sits between image and white panel */}
            <div
              className="team-label"
              style={{
                backgroundColor: "#2a5298",
                padding: "16px 20px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-anton)",
                  color: "#ffffff",
                  fontSize: "1.3rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {team.name}
              </span>
            </div>

            {/* White content panel */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "32px 24px 44px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontWeight: 900,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#111111",
                  margin: "0 0 14px",
                }}
              >
                {team.type}
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                  color: "#555555",
                  margin: 0,
                }}
              >
                {team.description}
              </p>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
