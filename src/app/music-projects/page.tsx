// src/app/music-projects/page.tsx
import React from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function MusicProjectsPage() {
  return (
    <PageShell
      right={
        <div className="space-y-3">
          <h3 className="font-clash text-lg font-semibold">elsewhere</h3>
          <ul className="font-archivo text-sm space-y-1">
            <li>
              <Link href="https://www.imdb.com/name/nm14475638/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
                IMDb
              </Link>
            </li>
          </ul>
        </div>
      }
    >
      <h1 className="font-clash text-4xl font-bold mb-6 not-italic">music projects</h1>

      <p className="font-archivo mb-10 text-lg not-italic">
        explore more of my projects on{" "}
        <Link href="https://www.imdb.com/name/nm14475638/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
          IMDb
        </Link>!
      </p>

      {/* Film */}
      <section className="mb-12">
        <h2 className="font-clash text-2xl font-bold mb-4 not-italic">film</h2>
        <ul className="font-archivo list-disc list-inside space-y-2 italic">
          <li>
            <Link
              href="https://drive.google.com/file/d/1UDaypKk6C_3R2hTmL3njt5H9s4v9_lul/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Three Body Problem (film rescore) (2025)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=D8Pn6BGdOc0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              The Waves Won't Remember Me | 海不曾記 - Official Trailer (2023)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.imdb.com/title/tt26315266/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Rented Life (2023)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=bzajXOWBXl4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Seeds in the Soup (2021)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=5lkv6ZLrndA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Bearhead (2020)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=OhNjy4KjcBE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Remember to Dust the Carpet (2019)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=ZCRsSmexyUs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Fantastic Beasts and Where to Find Them (film rescore) (2018)
            </Link>
          </li>
        </ul>
      </section>

      {/* Orchestral / Classical */}
      <section className="mb-12">
        <h2 className="font-clash text-2xl font-bold mb-4 not-italic">orchestral / classical</h2>
        <ul className="font-archivo list-disc list-inside space-y-2 italic">
          <li>
            <Link
              href="https://www.youtube.com/watch?v=63WjytfP7Nk&t=3136s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Studio Ghibli Suite, arr. for Hong Kong Metropolian Youth Orchestra (2023)
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/drive/folders/1lVihs2HLrawsl7gD5Ouu2NfR3TpqfZP6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Trois Morceaux Pour Piano, arr. for full orchestra (2022)
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/drive/folders/138T5zS_xQAYdR4nVeki89lwhqWlqqfJN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Parasite Orchestral Suite, arr. for full orchestra (2021)
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/file/d/1Isp14WA1bOn_6V0_GUqX5nTelpCMwm2w/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Do Not Stand at My Grave and Weep, arr. for SATB (2020)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=SMflZmaDAnw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Poetry in Motion - "Birches" (poetry inspired orchestral work) (2020)
            </Link>
          </li>
        </ul>
      </section>

      {/* A Cappella */}
      <section>
        <h2 className="font-clash text-2xl font-bold mb-4 not-italic">a cappella</h2>
        <ul className="font-archivo list-disc list-inside space-y-2 italic">
          <li>
            <Link
              href="https://www.youtube.com/watch?v=rwJMDExgvmU&t=911s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Slow Dancing in the Dark, opb. Joji (2023)
            </Link>
          </li>
          <li>
            <Link
              href="https://open.spotify.com/album/2YUEmU0w7bnyHeTx0FEy7K?si=EsgsA7E0SyiSsYiU0RCEPQ&nd=1&dlsi=ea886ef82f9c46e8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Mood Swing A Cappella Debut EP (2022)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=s2aeiuUmo5M&t=5120s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Finesse, opb. Bruno Mars (2022)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=s2aeiuUmo5M&t=4766s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Fix You, opb. Coldplay (2022)
            </Link>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}