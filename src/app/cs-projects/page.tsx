"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";

// Deterministic date formatter to avoid hydration mismatches.
// Expects YYYY-MM-DD and outputs MM/DD/YYYY (zero-padded)
function fmtMDY(iso: string) {
    const parts = iso?.split("-");
    if (!parts || parts.length !== 3) return iso;
    const [y, m, d] = parts;
    const mm = m.padStart(2, "0");
    const dd = d.padStart(2, "0");
    return `${mm}/${dd}/${y}`;
}  


// =====================================
// CS Projects — Compact List with Left Thumbnails
// Save as: app/cs-projects/page.tsx
// Put images in /public/projects/* and reference them below.
// =====================================

type Project = {
  id: string;
  title: string;
  summary: string;
  tech?: string[];
  date?: string; // optional
  image: { src: string; alt: string };
  links?: { demo?: string; repo?: string; writeup?: string };
};

const PROJECTS: Project[] = [
  {
    id: "prism",
    title: "Prism — AI-Curated Moodboard for Artists",
    summary:
      "Turning creative prompts into curated moodboards using retrieval and text analysis. Built to inspire artists through other multimodal artwork.",
    tech: ["Next.js", "TypeScript", "Edge API", "RAG"],
    date: "2025-09-07",
    image: { src: "/projects/prism-cover.png", alt: "Prism moodboard UI" },
    links: { demo: "https://moodboard-app.vercel.app/intro", repo: "https://github.com/hannahhguo/moodboard-app"},
  },
  {
    id: "playlist-anatomy",
    title: "Anatomy of a Playlist",
    summary:
      "Co-developed an interactive Jupyter notebook tutorial guiding users to generate tailor-made playlist art from Spotify data.",
    tech: ["Jupyter Notebook", "Python", "Seaborn", "Spotify API"],
    date: "2023-12-04",
    image: { src: "/projects/playlist-anatomy.png", alt: "Screenshot of tutorial" },
    links: { repo: "https://github.com/HMC-CS123-F23/cs-123-class-project-hannah-amy-daisy" },
  },
  {
    id: "www2",
    title: "WWW-2",
    summary: "Designed, programmed, and collaborated on a 2D platformer game which uses gravity flips and jumps to successfully move through levels of obstacle courses. Iterated through user feedback to create a fun and engaging experience for with progression and momentum :) Password to link is: www2",
    tech: ["Unity", "C#"],
    date: "2024-05-03",
    image: { src: "/projects/www2.png", alt: "WWW-2 Gameplay" },
    links: { demo: "https://cor100.itch.io/www2", repo: "https://github.com/cor100/WWW" },
  },
];

export default function CSProjectsPage() {
  return (
    <PageShell
      right={
        <div className="space-y-3">
          <h3 className="font-clash text-lg font-semibold">quick links</h3>
          <ul className="font-archivo text-sm space-y-1">
            <li><Link href="/" className="underline hover:opacity-80">Home</Link></li>
            <li><Link href="/about" className="underline hover:opacity-80">About</Link></li>
          </ul>
        </div>
      }
    >
      <h1 className="font-clash text-4xl font-bold mb-6">cs projects</h1>

      <ul className="space-y-6">
        {PROJECTS.map((p) => (
          <li key={p.id} className="rounded-2xl border border-black/5 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Left: 40% thumbnail */}
              <div className="relative w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden border border-black/10 bg-black/5">
                <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" priority />
              </div>

              {/* Right: 60% content */}
              <div className="sm:w-3/5 min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-semibold leading-tight break-words">{p.title}</h3>
                  {p.date && (
                    <time className="shrink-0 text-xs opacity-70" dateTime={p.date}>
                      {fmtMDY(p.date)}
                    </time>
                  )}
                </div>

                <p className="mt-2 text-sm leading-relaxed">{p.summary}</p>

                {p.tech?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-black/10 px-2 py-0.5 text-[11px]">{t}</span>
                    ))}
                  </div>
                ) : null}

                {(p.links?.demo || p.links?.repo || p.links?.writeup) && (
                  <div className="mt-3 flex flex-wrap gap-4">
                    {p.links?.demo && <Link href={p.links.demo} className="text-sm underline underline-offset-4 hover:opacity-80" target="_blank">Demo</Link>}
                    {p.links?.repo && <Link href={p.links.repo} className="text-sm underline underline-offset-4 hover:opacity-80" target="_blank">GitHub</Link>}
                    {p.links?.writeup && <Link href={p.links.writeup} className="text-sm underline underline-offset-4 hover:opacity-80" target="_blank">Write-up</Link>}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

