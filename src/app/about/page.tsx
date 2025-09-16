// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 px-4 lg:pl-8 lg:pr-0">
      {/* Main content */}
      <article className="py-6">
        <h1 className="font-clash text-4xl font-bold mb-6">about me</h1>

        <p className="font-archivo text-lg leading-relaxed mb-10">
          hi there! i'm hannah, a creative coder and  music-maker exploring where code meets creativity. 
          i am currently at pomona college (graduating december '25), where i am a double major in 
          computer science and music. i am empassioned by building tools that empower creativity, 
          foster community, and promote user agency. i also love music and all things creative; aside from
          music fuelling my passion for creative support tools, i love to make music and am lucky to have
          a plethora of experiences doing that!
        </p>

        <section className="mb-10">
          <h2 className="font-clash text-2xl font-bold mb-4">current work</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-clash text-xl font-semibold">
                HCI Research Assistant · The Doodle Lab
              </h3>
              <p className="font-archivo text-sm opacity-70">Pomona College · 2024–Present</p>
              <ul className="font-archivo list-disc ml-5 mt-2 space-y-1">
                <li>Co-designed a parametric embroidery tool enabling function-based manipulation and 
                    stacking of object properties for multi-level control.</li>
                <li>Scoped features via user flow storyboards & lit reviews.</li>
                <li>Spearheaded design specs and roadmap planning.</li>
                <li>Built interactive prototypes in Python/JS to support stitch logic & creative control.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-clash text-xl font-semibold">
                Music Director · Mood Swing A Cappella
              </h3>
              <p className="font-archivo text-sm opacity-70">Pomona College · 2022-Present</p>
              <ul className="font-archivo list-disc ml-5 mt-2 space-y-1">
                <li>Led rehearsals with a group of 18 singers, determining musical direction while facilitating 
                    varying opinions.</li>
                <li>Performed 8 shows per year. Southern California A Cappella Music Festival (SCAMFest) saw 
                    2000 people in attendance.</li>
                <li>Facilitated recording and audio production for the group’s songs, 
                    out on streaming services such as Spotify.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-clash text-xl font-semibold">
                Music Theory Mentor · Music Department
              </h3>
              <p className="font-archivo text-sm opacity-70">Pomona College · 2025-Present</p>
              <ul className="font-archivo list-disc ml-5 mt-2 space-y-1">
                <li>Helped students with their theory and musicianship questions by approaching 
                    complex music theory concepts through different perspectives.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-clash text-2xl font-bold mb-4">personal</h2>
          <ul className="font-archivo list-disc pl-5 space-y-1 text-sm leading-relaxed">
            <li><span className="font-medium"></span>my chinese name is 郭慧心.</li>
            <li><span className="font-medium"></span>i enjoy singing, listening to all sorts of music, 
                coffee shops, journalling, spending time with family and friends, thrifting, warm lighting, 
                and trying all sorts of matcha powders.</li>
            <li><span className="font-medium"></span> community is important to me! i enjoy teaching, 
                mentorship, social singing spaces.</li>            
            <li><span className="font-medium"></span> email me if you’d like to work on any tech or music projects together!</li>
          </ul>
        </section>
      </article>

      {/* Sticky right rail */}
      <aside className="hidden lg:block sticky top-24 self-start py-6 justify-self-end w-[320px]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl">
            {/* Put an image in /public/about-side.jpg (or change the src) */}
            <Image
              src="/about-side.jpeg"
              alt="Hannah Guo"
              width={280}
              height={360}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="rounded-2xl p-4">
            <h3 className="font-clash text-lg font-semibold mb-2">get in touch!</h3>
            <ul className="font-archivo text-sm space-y-1">
              <li>
                music: <a href="mailto:hannahguomusic@gmail.com" className="underline hover:opacity-80">
                    hannahguomusic@gmail.com
                </a>
              </li>
              <li>
                tech & else: <a href="mailto:hannah.guo123@gmail.com" className="underline hover:opacity-80">
                  hannah.guo123@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/huixinhannahguo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/hannahhguo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}