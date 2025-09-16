// src/components/Navbar.tsx  (note the path correction if needed)
import Link from "next/link";

// Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 h-16 w-full bg-white text-slate-900 shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center px-6">
        <Link href="/" className="font-clash text-2xl font-bold hover:opacity-80 transition">
          hannah guo
        </Link>
      </div>
    </nav>
  );
}
