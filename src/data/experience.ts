export type ExperienceCertificate = {
  imageSrc: string;
  alt: string;
  title: string;
};

export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "internship" | "full-time" | "contract" | "freelance";
  summary: string;
  responsibilities: string[];
  technologies: string[];
  projects: {
    name: string;
    slug?: string;
    href?: string;
  }[];
  /** Optional completion certificate (image opens in a lightbox) */
  certificate?: ExperienceCertificate;
};

export const experienceIntro = {
  headline: "Real work, real products",
  description:
    "Industry internship experience shipping production interfaces, dashboards, and full-stack features — not just coursework.",
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "cynosylix-mern-intern",
    role: "MERN Stack Intern",
    organization: "Cynosylix Technology",
    period: "July 2025",
    type: "internship",
    summary:
      "Completed a one-month intensive MERN stack internship at Cynosylix Technology — building full-stack web applications with MongoDB, Express, React, and Node.js as part of the academic curriculum at SJCET.",
    responsibilities: [
      "MERN stack development",
      "REST API implementation",
      "React UI development",
      "Database modeling with MongoDB",
      "Full-stack feature delivery",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "REST APIs",
    ],
    projects: [],
    certificate: {
      imageSrc: "/certificates/cynosylix-mern-internship-certificate.png",
      alt: "Certificate of completion for Cynosylix Technology one-month MERN stack internship, July 2025",
      title: "Cynosylix MERN Stack Internship Certificate",
    },
  },
  {
    id: "nexus-sjcet-intern",
    role: "Frontend Developer Intern",
    organization: "The Nexus Project · SJCET",
    period: "June 2025",
    type: "internship",
    summary:
      "Completed a one-month industry internship program organized by The Nexus Project — building and shipping frontend features for internal products, from dashboard layouts to responsive UI components, in an agile team environment.",
    responsibilities: [
      "Frontend development",
      "Dashboard implementation",
      "Product feature development",
      "UI engineering",
      "Responsive design",
    ],
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "Responsive Design",
    ],
    projects: [],
    certificate: {
      imageSrc: "/certificates/nexus-internship-certificate.png",
      alt: "Certificate of completion for The Nexus Project one-month internship program, June 2025",
      title: "Nexus Project Internship Certificate",
    },
  },
];

export const experienceSummary = {
  totalRoles: experienceEntries.length,
  internshipLabel: "Industry internships",
};
