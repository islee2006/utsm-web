import Link from "next/link";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOME | UTSM",
};

const stats = [
  { value: 1, suffix: "x", label: "Shell Eco-Marathon Americas Winner" },
  { value: 5, suffix: "x", label: "Top 5 ICE Prototype Category Placements" },
  { value: 3421, suffix: "", label: "mpg Team Record Vehicle Efficiency" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Video ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100dvh" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Timeline 1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 20, 50, 0.45)" }} />

        <div className="absolute bottom-0 left-0 px-8 pb-10" style={{ zIndex: 10 }}>
          <Image
            src="/Logo.avif"
            alt="UTSM"
            width={460}
            height={143}
            className="mb-2"
            priority
            style={{ maxWidth: "60vw", height: "auto", filter: "brightness(0) invert(1)" }}
          />
          <p
            className="text-white"
            style={{
              fontWeight: "700",
              fontStyle: "italic",
              fontSize: "clamp(0.9rem, 2vw, 1.4rem)",
              letterSpacing: "0.05em",
            }}
          >
            UNIVERSITY OF TORONTO SUPERMILEAGE
          </p>
        </div>
      </section>

      {/* ── Two-column: Text + Car Photo ── */}
      <ScrollReveal>
        <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "65vh" }}>
          <div
            className="flex flex-col justify-center px-8 md:px-12 py-16 md:py-20"
            style={{ backgroundColor: "#1a3464" }}
          >
            <h2
              className="text-white uppercase mb-8"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                lineHeight: 1.0,
                letterSpacing: "0.02em",
              }}
            >
              ULTRALIGHT.
              <br />
              HYPER-EFFICIENT.
            </h2>
            <p
              className="text-gray-300 mb-10 leading-relaxed"
              style={{ fontSize: "1rem", maxWidth: "460px" }}
            >
              University of Toronto Supermileage is a group of dedicated students committed
              to the design and fabrication of hyper fuel efficient vehicles. We are currently
              working on a new iteration of a Prototype class Battery Electric Vehicle and an
              Urban Concept class Hydrogen Fuel Cell vehicle. Our team competes annually in
              the Shell Eco Marathon Americas competition.
            </p>
            <div>
              <Link
                href="/teams"
                className="inline-block px-8 py-4 text-sm font-semibold tracking-widest text-white transition-all duration-200 hover:bg-white hover:text-[#1a3464] active:scale-[0.97]"
                style={{ border: "2px solid white" }}
              >
                LEARN ABOUT OUR TEAMS
              </Link>
            </div>
          </div>

          <div
            className="min-h-[300px] md:min-h-0"
            style={{
              backgroundImage: "url('/DSC09057.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#0d1a33",
            }}
          />
        </section>
      </ScrollReveal>

      {/* Section transition */}
      <div style={{ height: "64px", background: "linear-gradient(to bottom, #1a3464, #0f2040)" }} />

      {/* ── Stats ── */}
      <section
        style={{
          backgroundColor: "#0f2040",
        }}
      >
        <div
          className="mx-auto px-6 pt-14 pb-6 grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ maxWidth: "1000px" }}
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: "var(--font-anton)",
                    fontSize: "clamp(3rem, 6vw, 4.5rem)",
                    lineHeight: 1,
                  }}
                >
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-xs tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Two competition photos ── */}
      <ScrollReveal>
        <section className="px-4 md:px-8 pt-4 pb-4" style={{ backgroundColor: "#0f2040" }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "6px", maxWidth: "1300px", margin: "0 auto" }}
          >
            <div
              className="relative h-[280px] md:h-[480px] photo-zoom overflow-hidden"
              style={{
                backgroundImage: "url('/DSC08454.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#0a1830",
                borderRadius: "2px",
              }}
            />
            <div
              className="relative h-[280px] md:h-[480px] photo-zoom overflow-hidden"
              style={{
                backgroundImage: "url('/DSC09306%20(1).jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#0a1830",
                borderRadius: "2px",
              }}
            />
          </div>
        </section>
      </ScrollReveal>

      {/* ── About ── */}
      <ScrollReveal>
        <section className="px-8 md:px-16 pt-4 pb-10" style={{ backgroundColor: "#0f2040" }}>
          <div className="max-w-4xl mx-auto">
            <div
              className="pl-8"
              style={{ borderLeft: "3px solid #3b82f6" }}
            >
              <p
                className="text-white mb-6 leading-relaxed"
                style={{ fontStyle: "italic", fontSize: "1.05rem" }}
              >
                We are a passionate group of students at the University of Toronto. Formed in 2011,
                we design, build, and race super-efficient vehicles to compete in the Shell
                Eco-marathon Americas Competition. We have been competing since 2013, placing 1st in
                2015 and 2nd in 2018 with a gas-powered engine. UTSM prioritizes sustainable energy
                and has recently pivoted to working with Battery Electric and Hydrogen powered
                vehicles in an effort to remain at the forefront of energy innovation.
              </p>
              <p
                className="text-white leading-relaxed"
                style={{ fontStyle: "italic", fontSize: "1.05rem" }}
              >
                Although most of our members are undergraduate engineering students from multiple
                disciplines, we have many members from other academic areas and welcome students from
                all backgrounds to join us in our vision to redefine fuel efficiency!
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <style>{`
        .photo-zoom {
          transition: background-size 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          background-size: 100%;
        }
        .photo-zoom:hover {
          background-size: 108%;
        }
      `}</style>
    </>
  );
}
