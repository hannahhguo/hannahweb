"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function IntroHero() {
  return (
    <section className="text-slate-900 grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
      {/* Left: name + tagline + blurb + CTAs */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl font-extrabold tracking-tight md:text-7xl"
        >
          Hannah Guo
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.07 }}
          className="mt-4 text-xl font-medium text-slate-700 md:text-2xl"
        >
          creative technologist and music-maker. welcome to my corner of the internet!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
          className="mt-5 max-w-xl text-slate-600"
        >
          computer science & music: exploring where code meets creativity and everything
          in between. i'm intruiged by music, art, and new ways of considering their creation. 
          born and raised in hong kong and currently in los angeles. thank you for stopping by!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/cs-projects"
            className="rounded-2xl border border-slate-200 bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            explore CS projects!
          </Link>
          <Link
            href="/music-projects"
            className="rounded-2xl border border-slate-200 bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            listen to music!
          </Link>
        </motion.div>
      </div>

      {/* Right: portrait card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="group relative mx-auto w-56 md:w-64"
      >
        <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-fuchsia-200 via-pink-100 to-sky-200 opacity-60 blur-xl transition group-hover:opacity-80" />
        <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200">
          <Image
            src="/me.jpg"
            alt="Portrait of Hannah Guo"
            width={640}
            height={800}
            priority
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </motion.div>
    </section>
  );
}
