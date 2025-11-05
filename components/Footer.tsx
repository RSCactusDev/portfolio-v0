export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-px max-w-6xl mx-auto py-6 text-sm text-white/60">
        © {new Date().getFullYear()} Rimvydas Skališius • Built with Next.js &
        Tailwind • Deployed on Vercel
      </div>
    </footer>
  );
}
