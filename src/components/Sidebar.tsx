// src/components/Sidebar.tsx
import Link from "next/link";

// Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-48 bg-gray-100 text-slate-900 shadow-md p-6 overflow-y-auto">
      <nav className="flex flex-col space-y-4">
        <Link href="/cs-projects" className="hover:opacity-70">cs projects</Link>
        <Link href="/music-projects" className="hover:opacity-70">music projects</Link>
        <Link href="/about" className="font-archivo hover:opacity-70">about</Link>
      </nav>
    </aside>
  );
}


