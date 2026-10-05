export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  description: string;
  liveLink: string;
  githubLink: string;
  challenges: string[];
  improvements: string[];
}

export const projects: Project[] = [
  {
    id: "edunexus",
    name: "EduNexus",
    shortDescription:
      "A team-built school management platform connecting administrators, teachers, students, and parents in one digital ecosystem.",
    image: "/edunexus.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Better Auth",
    ],
    description:
      "EduNexus is a team project: a school management platform designed to simplify administration and support academic engagement. It brings together tools for school operations, student progress, attendance, courses, and communication, with dedicated access points for administrators, teachers, and students. The application is built with Next.js and TypeScript, backed by an Express.js API and MongoDB with Prisma, and uses Better Auth for authentication.",
    liveLink: "https://school-management-system-psi-ten.vercel.app/",
    githubLink: "",
    challenges: [
      "Collaborating as a team to build and connect the frontend, API, data layer, and authentication.",
      "Bringing the needs of administrators, teachers, students, and parents together in one clear experience.",
      "Presenting school operations and student learning progress through an easy-to-understand dashboard.",
    ],
    improvements: [
      "Add more detailed reporting and analytics for school administrators.",
      "Expand the connected workflows available to teachers, students, and parents.",
    ],
  },
  {
    id: "loop-market",
    name: "Loop Market",
    shortDescription:
      "A sustainable marketplace with a user dashboard and admin panel for buying and selling pre-owned goods.",
    image: "/loop-market.png",
    techStack: [
      "Next.js",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    description:
      "Loop Market is a sustainable marketplace where people can buy and sell pre-owned products in a trusted community. It includes a user dashboard for managing listings, orders, and profile activity, plus an admin panel for overseeing products, users, and overall marketplace operations. Users can browse listings, post items for sale, and complete deals while supporting a more eco-friendly way of shopping. The app is built with a Next.js frontend and a Node.js/Express backend powered by MongoDB.",
    liveLink: "https://loop-market-iota.vercel.app/",
    githubLink: "",
    challenges: [
      "Building both a user dashboard and an admin panel with different roles and permissions.",
      "Designing a clean marketplace flow for browsing, listing, and selling products.",
      "Connecting the Next.js frontend with an Express API and MongoDB data.",
      "Building a responsive UI that works well on both mobile and desktop.",
    ],
    improvements: [
      "Improve analytics and reporting inside the admin panel.",
      "Add more dashboard insights for sellers (views, sales, and earnings).",
      "Add order tracking and in-app messaging between buyers and sellers.",
      "Connect a real payment system for secure checkout.",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
