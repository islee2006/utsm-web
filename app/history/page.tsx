import React from "react";
import type { Metadata } from "next";
import TimelineEntry from "@/components/TimelineEntry";
import CarSlideshow from "@/components/CarSlideshow";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "HISTORY | UTSM" };

const timeline: { year: string; side: "left" | "right"; content: React.ReactNode }[] = [
  { year: "2011", side: "right", content: <>UTSM established as U of T&apos;s first high-efficiency design team</> },
  { year: "2012", side: "left", content: <>1st gen Prototype ICE vehicle, <em>UT1</em>, designed using a lawnmower engine</> },
  { year: "2013", side: "right", content: <>Capstone students built a custom engine for <em>UT1</em>; placed 2nd in Prototype ICE at debut Shell Eco-Marathon Americas</> },
  { year: "2014", side: "left", content: <>2nd gen prototype, <em>UT2</em>, enters design phase with a custom engine</> },
  { year: "2015", side: "right", content: <>Won 1st place Prototype ICE at SEMA with 3,421 mpg fuel efficiency</> },
  { year: "2016", side: "left", content: <>Won 2nd place Prototype ICE at SEMA in Detroit with 3rd gen vehicle, <em>UT3</em></> },
  { year: "2017", side: "right", content: <>Won 5th place Prototype ICE at SEMA; attempted a battery electric powertrain design</> },
  { year: "2018", side: "left", content: <>Won 2nd place Prototype ICE at SEMA with 4th gen vehicle, <em>Shadow</em></> },
  { year: "2019", side: "right", content: <>Capstone students design ergonomic aerobody for 5th gen vehicle, <em>Endurance</em>, to compete in California</> },
  { year: "2020", side: "left", content: <>Urban Concept team created to design U of T&apos;s first hydrogen vehicle; <em>Mist Rider</em> design begins — COVID-19 limitations</> },
  { year: "2021", side: "right", content: <><em>Mist Rider</em> and <em>Endurance</em> design continues through COVID-19 limitations</> },
  { year: "2022", side: "left", content: <>Large team expansion; <em>Endurance</em> competed at SEMA at Indianapolis Motor Speedway and passed Technical Inspection</> },
  { year: "2023", side: "right", content: <><em>Endurance</em> becomes first UTSM vehicle to pass Technical Inspection at SEMA; Prototype transitions to battery electric with <em>Shadow</em></> },
  { year: "2024", side: "left", content: <><em>Mist Rider</em> debuts at SEMA as U of T&apos;s first student-built hydrogen vehicle; <em>Shadow</em> (battery electric) passes Technical Inspection</> },
  { year: "2025", side: "right", content: <>2nd gen UC hydrogen vehicle <em>Lightning McWin</em> becomes the first hydrogen vehicle to race at SEMA; 2nd gen battery electric prototype <em>Raven</em> passes Technical Inspection</> },
  { year: "2026", side: "left", content: <>Prototype places 7th at the Shell Eco-marathon Americas and 2nd in Laval; Urban Concept successfully completes its first competition run</> },
];

export default function HistoryPage() {
  return (
    <div style={{ backgroundColor: "#1a3464", minHeight: "100dvh" }}>

      {/* ── Hero ── */}
      <div className="relative" style={{ minHeight: "100dvh", overflow: "hidden" }}>
        <img
          src="/DSC08945%20(2).jpg"
          alt="UTSM team working on a car"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 25%", display: "block", position: "absolute", inset: 0 }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(20,45,110,0.55)" }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "420px", background: "linear-gradient(to bottom, transparent, #1a3464 88%)" }} />

        <div className="absolute z-10 animate-fade-up" style={{ bottom: "clamp(1.5rem, 4vh, 3rem)", left: "clamp(2rem, 6vw, 6rem)" }}>
          <div className="flex items-center gap-2 mb-5" style={{ opacity: 0.7 }}>
            <div style={{ width: "2rem", height: "2px", backgroundColor: "#3b82f6" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", color: "#93c5fd", textTransform: "uppercase" }}>
              University of Toronto Supermileage
            </span>
          </div>
          <h1
            className="text-white uppercase animate-fade-up-delay-1"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(4.5rem, 12vw, 10rem)", lineHeight: 0.95, letterSpacing: "0.01em", textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}
          >
            OUR<br />HISTORY
          </h1>
          <p
            className="text-gray-300 mt-6 animate-fade-up-delay-2"
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", maxWidth: "440px", lineHeight: 1.65, opacity: 0.8 }}
          >
            From a lawnmower engine in 2011 to hydrogen-powered vehicles racing at Indianapolis — a decade of innovation by U of T students.
          </p>
        </div>
      </div>

      {/* ── Timeline ── */}
      <ScrollReveal>
        <div className="px-4 md:px-8" style={{ maxWidth: "1100px", margin: "0 auto", paddingTop: "2rem", paddingBottom: "2.5rem" }}>
          <div className="relative">
            <div
              className="absolute top-0 bottom-0 md:hidden"
              style={{ left: "11px", width: "2px", backgroundColor: "rgba(180,210,255,0.25)" }}
            />
            <div
              className="absolute top-0 bottom-0 hidden md:block"
              style={{ left: "calc(50% - 1px)", width: "2px", backgroundColor: "rgba(180,210,255,0.25)" }}
            />
            {timeline.map((entry) => (
              <TimelineEntry key={entry.year} year={entry.year} side={entry.side}>
                {entry.content}
              </TimelineEntry>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Car Slideshow ── */}
      <CarSlideshow />
    </div>
  );
}
