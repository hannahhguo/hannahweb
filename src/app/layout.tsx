import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar"; 
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Hannah Guo — CS & Music",
  description: "Portfolio of Hannah Guo — CS & Music projects.",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono  = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=archivo@400&f[]=clash-display@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen bg-white text-slate-900 antialiased">
        {/* Noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/asfalt-light.png')",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Actual site content */}
        <div className="relative z-10">
          <Navbar />
          <Sidebar />
          <main className="ml-48 pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
