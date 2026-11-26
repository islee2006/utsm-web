import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "NEWSLETTERS" };

const newsletters = [
  {
    title: "Fall 2024 News",
    date: "February 2025",
    description: "In this issue, the team has designed and begun manufacturing their new 2024–2025 vehicles. MORE COMING SOON.",
    href: "#",
    tag: "2024",
  },
];

export default function NewslettersPage() {
  return (
    <>
      <PageHero
        label="Newsletters"
        title="LATEST UPDATES"
        subtitle="Stay up to date with UTSM's build progress, events, and competition results."
      />

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((n) => (
              <a
                key={n.title}
                href={n.href}
                className="group p-7 rounded-2xl border border-white/5 bg-[#0d0d0d] card-hover flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-600/10 border border-blue-600/20">
                    {n.tag}
                  </span>
                  <span className="text-xs text-gray-600">{n.date}</span>
                </div>
                <h3 className="text-lg font-black text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{n.description}</p>
                <div className="flex items-center gap-2 mt-6 text-sm text-blue-400 font-semibold group-hover:gap-4 transition-all">
                  Download
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
            ))}

            {/* Placeholder for future newsletters */}
            <div className="p-7 rounded-2xl border border-dashed border-white/10 bg-[#0d0d0d] flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="text-3xl mb-3">📰</div>
              <p className="text-sm text-gray-600">More newsletters coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
