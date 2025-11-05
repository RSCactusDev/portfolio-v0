export type Project = {
  title: string;
  description: string | string[];
  year: number;
  stack: string[];
  live?: string;
  repo?: string;
  image: string; // NEW
  imageAlt: string; // NEW
};

export const ProjectList: Project[] = [
  {
    title: "ViboBox – Interactive Gifting App",
    year: 2025,
    description:
      "Next.js + TypeScript + MongoDB app with Stripe payments, countdowns, and mini-games (memory, scratch-off).",
    stack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Vercel/VPS"],
    live: "https://vibobox.com",
    repo: "",
    image: "/images/vibobox.png",
    imageAlt: "ViboBox app preview",
  },

  {
    title: "WordPress E-commerce Store",
    year: 2025,
    description: [
      "Final project for the CodeAcademy course — a multilingual e-commerce website built with WordPress and Elementor.",
      "Implemented responsive design, integrated Google Analytics, and applied SEO best practices with Yoast SEO.",
      "Optimized site structure for performance, accessibility, and multilingual usability.",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "Analytics",
      "Multilingual",
    ],
    live: "https://darkturquoise-dog-555659.hostingersite.com/",
    repo: "",
    image: "/images/wordpress-ecommerce.png",
    imageAlt: "WooCommerce store preview",
  },
  {
    title: "3DModernFantazy – E-commerce",
    year: 2024,
    description: [
      "Full-stack e-commerce platform for 3D art marketplace with Django REST Framework backend serving React frontend.",
      "Integrated PayPal and Montonio payment gateways using webhooks for real-time payment verification and automated invoice generation.",
      "Implemented Google Analytics and Meta Pixel for conversion tracking.",
      "Monolithic deployment on Koyeb with Aiven-managed MySQL database (originally hosted on Hostinger VPS).",
    ],
    stack: [
      "Django REST Framework",
      "React",
      "MySQL",
      "PayPal",
      "Montonio",
      "Google Analytics",
      "Meta Pixel",
    ],
    live: "https://retired-cayla-rimvydas-aa4afe98.koyeb.app/",
    repo: "",
    image: "/images/3dmodernfantazy.png",
    imageAlt: "3DModernFantazy storefront",
  },
  {
    title: "Land Survey Automation - AutoLaiškai – ",
    year: 2024,
    description: [
      "Django web app for land surveyors automating letters and invitations for adjacent plots.",
      "Features PDF parsing, CRUD interface, and Selenium automation to fetch land data from Geomatininkas and Regia.lt.",
      "Evolved from my earlier Python script LT-CadastreInvitationGenerator.",
    ],
    stack: ["Python", "Django", "MySQL", "Selenium", "Bootstrap"],
    repo: "https://github.com/RSCactusDev/autoLaiskai-django",
    image: "/images/django-projects.png",
    imageAlt: "AutoLaiškai Django app preview",
  },
];
