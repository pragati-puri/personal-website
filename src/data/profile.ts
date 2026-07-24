export type ProfileRole = {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
};

export type TimelineMilestone = {
  date: string;
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Education = {
  degree: string;
  institution: string;
  expectedGraduation: string;
  location: string;
  scholarship: string;
};

export const experience: ProfileRole[] = [
  {
    role: "AI Software Developer Intern",
    organization: "Alberta Machine Intelligence Institute (Amii) · AI4Good Lab · Mila",
    period: "May 2026–Present",
    bullets: [
      "Develop a production full-stack AI application with TypeScript and Next.js.",
      "Build modular service-layer architecture for a multi-agent system and deliver features with senior-engineer direction.",
      "Use Git workflows, code review, and Agile practices while triaging bugs and tracking quality metrics.",
    ],
  },
  {
    role: "Soar With Mentor Program - Mentee",
    organization: "Dell Technologies",
    period: "Oct 2025–Mar 2026",
    bullets: [
      "Explored software-engineering pathways through mentorship focused on data structures, algorithms, and software design principles.",
      "Volunteered as a Girls Who Game judge, providing feedback on technology projects that encourage problem-solving and teamwork.",
    ],
  },
];

export const leadership: ProfileRole[] = [
  {
    role: "Director of Women in Tech Council",
    organization: "Computing Councils of Canada",
    period: "Oct 2025–Present",
    bullets: [
      "Lead nationwide initiatives across 10+ universities, supporting more than 1,000 students.",
      "Organize national events that address opportunities and challenges in computing careers.",
    ],
  },
  {
    role: "Vice President Finance",
    organization: "Undergraduate Association of Computing Science",
    period: "Oct 2025–Present",
    bullets: [
      "Manage end-to-end finances for a 1,200+ member student association.",
      "Administer DigitalOcean and NameCheap accounts, including timely payments and credential management.",
    ],
  },
];

export const timeline: TimelineMilestone[] = [
  {
    date: "Oct 2025",
    title: "Soar With Mentor Program",
    description: "Began Dell Technologies mentorship focused on software-engineering pathways.",
  },
  {
    date: "Oct 2025",
    title: "Women in Tech Council Director",
    description: "Began leading nationwide initiatives across Canadian universities.",
  },
  {
    date: "Oct 2025",
    title: "Vice President Finance",
    description:
      "Began stewarding finances for the Undergraduate Association of Computing Science.",
  },
  {
    date: "May 2026",
    title: "AI Software Developer Intern",
    description:
      "Began building a production full-stack AI application with Amii, AI4Good Lab, and Mila.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C", "HTML/CSS"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Version Control", "Android Studio"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "LangChain", "Streamlit", "Pandas", "NumPy"],
  },
  {
    title: "Fundamentals & AI",
    skills: ["Data Structures", "Algorithms", "Software Design Principles", "AI", "ML"],
  },
];

export const education: Education = {
  degree: "Bachelor of Science in Computing Science",
  institution: "University of Alberta",
  expectedGraduation: "Expected Dec 2028",
  location: "Edmonton, AB",
  scholarship: "International Undergraduate Scholarship — $5,000",
};
