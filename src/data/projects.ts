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
