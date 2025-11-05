import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  summary: string;
  tech: readonly string[];
  href?: string;
  image?: string;
};

export default function ProjectCard({
  slug,
  title,
  summary,
  tech,
  href,
  image,
}: Props) {
  return (
    <article className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
      {image ? (
        <Image
          src={image}
          alt={title}
          width={1200}
          height={630}
          className="w-full h-44 object-cover"
        />
      ) : null}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-white/70">{summary}</p>
        <div className="text-xs text-white/50">{tech.join(" • ")}</div>
        <div className="pt-2">
          {href ? (
            <a href={href} className="link-underline">
              Live
            </a>
          ) : (
            <Link href={`/projects#${slug}`} className="link-underline">
              Details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
