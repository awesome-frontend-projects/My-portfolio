import {
  RiCodeFill,
  RiDatabase2Line,
  RiDownloadLine,
  RiEyeLine,
  RiGithubFill,
  RiGlobalLine,
  RiLinkedinBoxFill,
  RiMailLine,
  RiStackOverflowFill,
  RiTwitterXFill,
} from "@remixicon/react";

export const socialLink = [
  {
    id: 1,
    icon: RiGithubFill,
  },
  {
    id: 2,
    icon: RiLinkedinBoxFill,
  },
  {
    id: 3,
    icon: RiTwitterXFill,
  },
  {
    id: 4,
    icon: RiStackOverflowFill,
  },
];

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#",
  },
  {
    id: 2,
    label: "About Me",
    href: "#about",
  },
  {
    id: 3,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    label: "Contact Me",
    href: "#contact",
  },
];

export const heroItems = [
  {
    id: 1,
    icon: RiCodeFill,
    subtitle: "Frontend",
    text: "React, TypeScript",
  },
  {
    id: 3,
    icon: RiGlobalLine,
    subtitle: "Animations",
    text: "motion,GSAP",
  },
];

export const heroBtns = [
  {
    id: 1,
    icon: RiEyeLine,
    label: "View My Work",
    href: "#projects",
  },
  {
    id: 2,
    icon: RiMailLine,
    label: "Get In Touch",
    href: "#contact",
  },
  // {
  //   id: 3,
  //   icon: RiDownloadLine,
  //   label: "Download Resume",
  // },
];

export const aboutItems = [
  {
    id: 1,
    icon: "/images/icon-1.svg",
    label: "React",
  },
  {
    id: 2,
    icon: "/images/icon-2.svg",
    label: "Next.js",
  },
  {
    id: 3,
    icon: "/images/icon-3.svg",
    label: "JavaScript",
  },
  {
    id: 4,
    icon: "/images/icon-4.svg",
    label: "TypeScript",
  },
  // {
  //   id: 5,
  //   icon: "/images/icon-5.svg",
  //   label: "Redux",
  // },
  {
    id: 6,
    icon: "/images/icon-6.svg",
    label: "Tailwind",
  },
  // {
  //   id: 7,
  //   icon: "/images/icon-11.png",
  //   label: "Supabase",
  // },
  {
    id: 8,
    icon: "/images/icon-12.svg",
    label: "Vite",
  },
  {
    id: 9,
    icon: "/images/icon-14.svg",
    label: "Github",
  },

  // {
  //   id: 10,
  //   icon: "/images/icon-15.svg",
  //   label: "Sanity",
  // },
  // {
  //   id: 11,
  //   icon: "/images/icon-15.svg",
  //   label: "Stripe",
  // },
  {
    id: 12,
    icon: "/images/icon-17.svg",
    label: "Figma",
  },
];

export const timelineItems = [
  {
    id: 1,
    title: "Lead Front-end Engineer",
    list: ["Nexus Digital", "Amsterdam, Netherlands", "Full-Time"],
    time: "Jan 2024 - Present",
  },
  {
    id: 2,
    title: "Senior Front-end Developer",
    list: ["WebCraft Studios", "Rotterdam, Netherlands", "Contract"],
    time: "Apr 2023 - Dec 2023",
  },
  {
    id: 3,
    title: "Front-end Developer",
    list: ["CodeBase Agency", "Utrecht, Netherlands", "Full-Time"],
    time: "Sep 2021 - Mar 2023",
  },
  {
    id: 4,
    title: "Junior Front-end Developer",
    list: ["StartUp Hub", "Remote", "Full-Time"],
    time: "Jan 2021 - Aug 2021",
  },
  {
    id: 5,
    title: "Freelance Web Developer",
    list: ["Various Clients", "Worldwide"],
    time: "Jun 2019 - Dec 2020",
  },
];

export const projectsItems = [
  {
    id: 1,
    img: "/images/portfolio-1.png",
    title: "E-Commerce Platform",
    text: "A full-featured online shopping platform with payment integration, inventory management, and real-time order tracking.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://fullstack-e-commerce-website-six.vercel.app/",
  },
  {
    id: 2,
    img: "/images/portfolio-2.png",
    title: "Real estate listing platform",
    text: "Full-service restaurant website with online ordering, table reservations, menu management, and delivery tracking.",
    tags: ["Next.js", "Tailwindcss", "Sanity"],
    link: "https://estatein-mauve.vercel.app/",
  },
  {
    id: 3,
    img: "/images/portfolio-6.png",
    title: "Plumbing services website",
    text: "Full-service restaurant website with online ordering, table reservations, menu management, and delivery tracking.",
    tags: ["Next.js", "Tailwindcss", "Framer motion"],
    link: "https://plumbing-services-website.vercel.app/",
  },
  {
    id: 4,
    img: "/images/portfolio-4.png",
    title: "Healthly diet planning website",
    text: "Modern agency portfolio with stunning animations, case studies showcase, and seamless contact integration.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    link: "https://nutritionist-tau.vercel.app/",
  },
  {
    id: 5,
    img: "/images/portfolio-5.png",
    title: "Mobile app landing page",
    text: "Comprehensive medical platform for patient records, appointment scheduling, telemedicine, and health analytics.",
    tags: ["React", "TypeScript", "Framer motion"],
    link: "https://moble-app-landing-page.vercel.app/",
  },

  {
    id: 6,
    img: "/images/portfolio-3.png",
    title: "E-learning plateform",
    text: "Interactive travel platform for discovering unique glamping locations with booking system, reviews, and interactive maps.",
    tags: ["Next.js", "Tailwind CSS", "Framer motion"],
    link: "https://shillpath.vercel.app/",
  },
  {
    id: 7,
    img: "/images/portfolio-7.png",
    title: "Job finding website",
    text: "Full-service restaurant website with online ordering, table reservations, menu management, and delivery tracking.",
    tags: ["React.js", "Tailwindcss", "Framer motion"],
    link: "https://job-finder-website-landing-page.vercel.app/",
  },

  {
    id: 8,
    img: "/images/portfolio-8.png",
    title: "Agency website",
    text: "Full-service restaurant website with online ordering, table reservations, menu management, and delivery tracking.",
    tags: ["React.js", "Tailwind css", "Framer motion"],
    link: "https://acentiq-agency-website.vercel.app/",
  },
  {
    id: 9,
    img: "/images/portfolio-9.png",
    title: "Real Estate website",
    text: "Full-service restaurant website with online ordering, table reservations, menu management, and delivery tracking.",
    tags: ["React.js", "Tailwind css"],
    link: "https://homely-real-estate-website.vercel.app/",
  },
];

export const statsItems = [
  {
    id: 1,
    value: "4+",
    text: "Years Experience",
  },
  {
    id: 2,
    value: "9+",
    text: "Projects Completed",
  },
];
