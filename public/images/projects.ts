export type Project = {
  title: string;
  description: string;
  stack: string[];
  live?: string;
  repo?: string;
  image: string; // NEW
  imageAlt: string; // NEW
};

export const ProjectList: Project[] = [
  {
    title: "ViboBox – Interactive Gifting App",
    description:
      "Next.js + TypeScript + MongoDB app with Stripe payments, countdowns, and mini-games (memory, scratch-off).",
    stack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Vercel/VPS"],
    live: "https://vibobox.com",
    repo: "https://github.com/yourname/vibobox",
    image: "/images/vibobox.jpg",
    imageAlt: "ViboBox app preview",
  },
  {
    title: "3DModernFantazy – E-commerce",
    description:
      "Django backend + React frontend e-commerce for 3D art. Deployed on VPS with SQLite/MySQL.",
    stack: ["Django", "React", "SQLite", "VPS"],
    live: "https://example.com",
    repo: "https://github.com/yourname/3dmodernfantazy",
    image: "/images/3dmodernfantazy.jpg",
    imageAlt: "3DModernFantazy storefront",
  },
  {
    title: "WordPress E-commerce Clone (Hostinger)",
    description:
      "WooCommerce store cloned and optimized for structure, responsiveness, and SEO.",
    stack: ["WordPress", "WooCommerce", "Elementor", "SEO"],
    live: "https://example.com",
    repo: "https://github.com/yourname/wp-clone",
    image: "/images/wordpress-clone.jpg",
    imageAlt: "WooCommerce store preview",
  },
  {
    title: "Django Projects (GitHub)",
    description:
      "Self-taught journey with Python/Django; deployed/demo projects showing CRUD, auth, templating.",
    stack: ["Python", "Django", "SQLite"],
    repo: "https://github.com/yourname?tab=repositories&q=django",
    image: "/images/django-projects.jpg",
    imageAlt: "Django projects preview",
  },
];
