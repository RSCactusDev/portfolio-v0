import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // replace on deploy
  title: {
    default: "Rimvydas Skališius – Full‑Stack Developer",
    template: "%s | Rimvydas Skališius",
  },
  description:
    "Self‑taught full‑stack developer: React, Next.js, Django, WordPress. Portfolio and projects.",
  openGraph: {
    title: "Rimvydas Skališius – Full‑Stack Developer",
    description: "React / Next.js / Django / WordPress",
    url: "https://example.com",
    siteName: "Rimvydas Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <header className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
          <div className="container-prose flex items-center justify-between py-4">
            <Link
              href="#"
              className="font-bold text-lg sm:text-xl text-neutral-100 tracking-tight"
            >
              <span className="gradient-text">Skalisius.dev</span>
            </Link>
            <nav className="flex items-center gap-6 text-base sm:text-[1rem] text-neutral-300">
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
              {/* <a href="#skills" className="hover:text-white">
                Skills
              </a> */}
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
              <a
                href="https://github.com/RSCactusDev"
                target="_blank"
                className="btn-ghost"
              >
                GitHub →
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-neutral-800/70">
          <div className="container-prose py-10 text-sm text-neutral-400">
            © {new Date().getFullYear()} Rimvydas Skališius. Built with Next.js
            & Tailwind.
          </div>
        </footer>
      </body>
    </html>
  );
}
