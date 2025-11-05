import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container-px max-w-6xl mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          Rimvydas
        </Link>
        <nav className="flex gap-5 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
