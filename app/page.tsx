import { ProjectList } from "@/lib/projects";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiJavascript } from "react-icons/si";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiWordpress,
  SiWoocommerce,
  SiVercel,
  SiNodedotjs,
  SiStripe,
  SiYoast,
  SiGoogleanalytics,
} from "react-icons/si";

import { FaMeta } from "react-icons/fa6";
import { SiDocker, SiNginx } from "react-icons/si";
import { FaServer } from "react-icons/fa6";
import { BsBoxes } from "react-icons/bs"; // fallback icon
import { RiBootstrapLine } from "react-icons/ri";
import { SiSelenium } from "react-icons/si";
import { SiElementor } from "react-icons/si";
// or for a generic magnifier:
// import { FiSearch } from "react-icons/fi";

export default function HomePage() {
  const techIcons: Record<string, ReactElement> = {
    React: <SiReact size={18} color="#61dafb" />,
    "Next.js": <SiNextdotjs size={18} color="#fff" />,
    Tailwind: <SiTailwindcss size={18} color="#38bdf8" />,
    TypeScript: <SiTypescript size={18} color="#3178c6" />,
    Python: <SiPython size={18} color="#ffde57" />,
    Django: <SiDjango size={18} color="#092e20" />,
    MongoDB: <SiMongodb size={18} color="#47a248" />,
    MySQL: <SiMysql size={18} color="#00758f" />,
    "Vercel/VPS": <SiVercel size={18} color="#fff" />,
    WordPress: <SiWordpress size={18} color="#21759b" />,
    WooCommerce: <SiWoocommerce size={18} color="#96588a" />,
    Stripe: <SiStripe size={18} color="#635bff" />,
    SQLite: <FaServer size={18} color="#aaa" />,
    VPS: <FaServer size={18} color="#ccc" />,
    Bootstrap: <RiBootstrapLine size={18} color="#7952b3" />,
    Selenium: <SiSelenium size={18} color="#ccc" />,
    Analytics: <SiGoogleanalytics size={18} color="#fbbc05" />,
    Elementor: <SiElementor size={18} color="#ccc" />,
  };

  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="container-prose grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="badge">Full‑Stack Developer</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Hi, I’m <span className="gradient-text">Rimvydas Skališius</span>{" "}
              —
              <br /> I build practical, modern web apps.
            </h1>
            <p className="text-neutral-300">
              Self‑taught developer transitioning from land surveying to
              software engineering. Experienced with
              <strong>
                {" "}
                React, Next.js, TypeScript, Python/Django, WordPress
              </strong>
              , and SEO.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-ghost">
                Contact
              </a>
              <a
                href="https://github.com/RSCactusDev"
                className="btn-ghost"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://lt.linkedin.com/in/rimvydas-skali%C5%A1ius-55554a181"
                className="btn-ghost"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="card p-6 space-y-4 text-center">
            {/* Frontend */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-3">
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { Icon: SiReact, name: "React", color: "#61dafb" },
                  { Icon: SiNextdotjs, name: "Next.js", color: "#fff" },
                  { Icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8" },
                  { Icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
                  { Icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
                  {
                    Icon: RiBootstrapLine,
                    name: "Bootstrap",
                    color: "#7952b3",
                  },
                ].map(({ Icon, name, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#111] border border-neutral-800 text-sm text-neutral-300 hover:border-pink-500 transition-all"
                  >
                    <Icon size={18} style={{ color }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-3">
                Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { Icon: SiPython, name: "Python", color: "#ffde57" },
                  { Icon: SiDjango, name: "Django", color: "#092e20" },
                  { Icon: SiNodedotjs, name: "Node.js", color: "#5fa04e" },
                ].map(({ Icon, name, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#111] border border-neutral-800 text-sm text-neutral-300 hover:border-pink-500 transition-all"
                  >
                    <Icon size={18} style={{ color }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
            {/* Databases */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-3">
                Databases
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { Icon: SiMysql, name: "MySQL", color: "#00758f" },
                  { Icon: SiMongodb, name: "MongoDB", color: "#47a248" },
                ].map(({ Icon, name, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#111] border border-neutral-800 text-sm text-neutral-300 hover:border-pink-500 transition-all"
                  >
                    <Icon size={18} style={{ color }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Payments */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-3">
                Payments Integrations
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[{ Icon: SiStripe, name: "Stripe", color: "#635bff" }].map(
                  ({ Icon, name, color }) => (
                    <span
                      key={name}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#111] border border-neutral-800 text-sm text-neutral-300 hover:border-pink-500 transition-all"
                    >
                      <Icon size={18} style={{ color }} />
                      {name}
                    </span>
                  )
                )}
                <span
                  key="Montonio"
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#111] border border-neutral-800 text-sm text-neutral-300 hover:border-pink-500 transition-all"
                >
                  <Image
                    src="/images/montonio.png"
                    alt="Montonio"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                  Montonio
                </span>
              </div>
            </div>
            {/* CMS & SEO */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-3">
                CMS & SEO
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { Icon: SiWordpress, name: "WordPress", color: "#21759b" },
                  {
                    Icon: SiWoocommerce,
                    name: "WooCommerce",
                    color: "#96588a",
                  },
                  { Icon: SiYoast, name: "Yoast SEO", color: "#a4286a" },
                  {
                    Icon: SiGoogleanalytics,
                    name: "Analytics",
                    color: "#fbbc05",
                  },
                  { Icon: FaMeta, name: "Meta Pixel", color: "#1877f2" },
                ].map(({ Icon, name, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#111] border border-neutral-800 text-sm text-neutral-300 hover:border-pink-500 transition-all"
                  >
                    <Icon size={18} style={{ color }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
            {/* Deployment & Hosting */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-3">
                Deployment & Hosting
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { Icon: SiDocker, name: "Docker", color: "#2496ed" },
                  { Icon: SiNginx, name: "Nginx", color: "#009639" },
                  { Icon: SiVercel, name: "Vercel", color: "#fff" },
                  {
                    Icon: SiNodedotjs,
                    name: "Hostinger / VPS",
                    color: "#8c4bff",
                  },
                ].map(({ Icon, name, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#111] border border-neutral-800 text-sm text-neutral-300 hover:border-pink-500 transition-all"
                  >
                    <Icon size={18} style={{ color }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container-prose">
          {/* <div className="flex items-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight mr-4">Projects</h2>
            <div className="flex-1 h-px bg-linear-to-r from-pink-500 to-cyan-400 rounded-full mt-2"></div>
          </div> */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-3">Projects</h2>
            <div className="mx-auto h-[2px] w-48 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"></div>
          </div>

          <div className="space-y-10">
            {ProjectList.map((p, idx) => {
              const isReversed = idx % 2 === 1;
              const showYear =
                idx === 0 || ProjectList[idx - 1].year !== p.year;
              return (
                <div key={p.title}>
                  {showYear && (
                    <h3 className="text-2xl font-semibold text-neutral-300 mb-6 flex items-center gap-4">
                      {p.year}
                      <div className="flex-1 h-px bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"></div>
                    </h3>
                  )}

                  <div
                    className={`md:flex md:items-stretch md:gap-0 ${
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* IMAGE block — 60% of row */}
                    <div className="relative h-64 md:h-[400px] lg:h-[480px] md:[flex:0_0_60%] rounded-2xl overflow-hidden group">
                      {p.live || p.repo ? (
                        <a
                          href={p.live || p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="block w-full h-full"
                        >
                          <Image
                            src={p.image}
                            alt={p.imageAlt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(min-width: 768px) 60vw, 100vw"
                          />
                          {/* Subtle overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />

                          {/* Hover label */}
                          <span className="absolute bottom-4 right-4 bg-black/60 text-white text-sm font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {p.live ? "View Site →" : "View Code →"}
                          </span>
                        </a>
                      ) : (
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 60vw, 100vw"
                        />
                      )}
                    </div>

                    {/* ARTICLE block — 40% of row */}
                    <div
                      className={`glow-border-thin md:[flex:0_0_40%]  min-w-0 self-center ${
                        isReversed
                          ? "glow-no-left md:rounded-r-2xl md:rounded-l-none"
                          : "glow-no-right md:rounded-l-2xl md:rounded-r-none"
                      }`}
                    >
                      <article
                        className={`card md:[flex:0_0_40%]  min-w-0 p-6 md:p-8 flex flex-col self-center ${
                          isReversed
                            ? "md:!rounded-r-2xl md:!rounded-l-none"
                            : "md:!rounded-l-2xl md:!rounded-r-none"
                        }`}
                      >
                        <div className="mb-4 flex items-center justify-between gap-2">
                          <h3 className="text-xl font-semibold">{p.title}</h3>
                          <div className="flex items-center gap-2">
                            {p.live && (
                              <>
                                <a
                                  className="px-4 py-2 text-base md:text-base font-medium
                                          rounded-full border-2 border-blue-400 
                                          hover:bg-blue-500/10 hover:shadow-[0_0_12px_#60a5fa]
                                          hover:text-white transition-all duration-200 hover:scale-105"
                                  href={p.live}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Live
                                </a>
                              </>
                            )}
                            {p.repo && (
                              <a
                                className="px-4 py-2 text-base md:text-base font-medium
                              rounded-full border-2 border-green-400 
                              hover:bg-blue-500/10 hover:shadow-[0_0_12px_#60a5fa]
                              hover:text-white transition-all duration-200 hover:scale-105"
                                href={p.repo}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Code
                              </a>
                            )}
                          </div>
                        </div>

                        {Array.isArray(p.description) ? (
                          <ul className="mb-4 text-neutral-300 list-disc list-inside space-y-1">
                            {p.description.map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mb-4 text-neutral-300">
                            {p.description}
                          </p>
                        )}

                        {p.title.includes("AutoLaiškai") && (
                          <a
                            href="https://github.com/RSCactusDev/LT-CadastreInvitationGenerator"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-blue-400 hover:underline mb-3"
                          >
                            View the first version (Python script) →
                          </a>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {p.stack.map((tech) => (
                            <span
                              key={tech}
                              className="flex items-center gap-2 px-3 py-2 rounded-full
                            bg-[#111] border border-neutral-800 text-sm text-neutral-300
                            hover:border-pink-400 hover:shadow-[0_0_10px_#60a5fa]/30 transition-all"
                            >
                              {techIcons[tech] || <BsBoxes size={16} />} {tech}
                            </span>
                          ))}
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      {/*<section id="skills" className="section">
        <div className="container-prose">
          <h2 className="mb-6 text-3xl font-semibold">Tech Stack</h2>
          <p className="text-neutral-300 mb-6 max-w-2xl">
            I’m comfortable across the stack, deploying apps end‑to‑end. Here
            are the tools I use the most.
          </p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Node.js",
              "Python",
              "Django",
              "MongoDB",
              "SQLite",
              "MySQL",
              "WordPress",
              "WooCommerce",
              "Vercel",
              "VPS",
              "Stripe",
              "SEO",
            ].map((k) => (
              <li key={k} className="badge">
                {k}
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container-prose grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">About</h2>
            <p className="text-neutral-300">
              I’m a self‑taught developer transitioning from land surveying to
              software engineering. I build practical products and enjoy clean
              UI, stable APIs, and shipping. Recently I’ve focused on
              React/Next.js, TypeScript, and Python/Django, plus WordPress for
              SEO‑driven sites.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="mb-2 text-lg font-semibold">Highlights</h3>
            <ul className="list-disc space-y-2 pl-5 text-neutral-300">
              <li>
                Built and deployed multiple real projects with modern stacks.
              </li>
              <li>
                Practical knowledge of hosting: Vercel, VPS, and shared hosting.
              </li>
              <li>
                Comfortable integrating Stripe and working with NoSQL/SQL
                databases.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container-prose">
          <h2 className="mb-4 text-3xl font-semibold">Contact</h2>
          <p className="text-neutral-300 mb-6">
            Open to junior dev roles, internships, or freelancing. The fastest
            way to reach me:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:rimvydas.skalisius@gmail.com"
              className="btn-primary"
            >
              Email me
            </Link>
            <a
              href="https://github.com/RSCactusDev"
              className="btn-ghost"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://lt.linkedin.com/in/rimvydas-skali%C5%A1ius-55554a181"
              className="btn-ghost"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
