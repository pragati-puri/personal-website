export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: "vitalbyte" | "cipher-events" | "taskzen" | "delulu-core";
  name: string;
  status: "Completed";
  summary: string;
  coreFeatures: string[];
  technologies: string[];
  impact: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "vitalbyte",
    name: "VitalByte",
    status: "Completed",
    summary: "A full-stack AI-driven blood-analysis system for personalized dietary guidance.",
    coreFeatures: [
      "Ranks recipe options by cost and dietary restrictions based on blood-work abnormalities.",
      "Stores session-scoped dietary preferences.",
      "Provides validated REST API endpoints.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "REST API"],
    impact: [
      "Connects blood-work abnormalities with practical recipe recommendations.",
      "Uses a modular multi-agent service architecture with interchangeable model backends.",
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/jassica181/vitalbyte" }],
    featured: true,
  },
  {
    slug: "cipher-events",
    name: "Cipher Events",
    status: "Completed",
    summary: "An Android event-management application built with Java and Firebase Firestore.",
    coreFeatures: [
      "Manages real-time waiting lists, lottery draws, invitations, and replacement selection.",
      "Gives organizers entrant management, no-show tracking, and CSV export tools.",
      "Implements a Material Design interface from Figma mockups.",
    ],
    technologies: ["Java", "Android", "Firebase Firestore", "Material Design", "Figma", "GitHub"],
    impact: [
      "Streamlines the full event-selection workflow for organizers and entrants.",
      "Developed collaboratively with GitHub-based team workflows.",
    ],
    links: [
      { label: "View on GitHub", href: "https://github.com/CMPUT301W26cipher/cipher-events" },
    ],
    featured: true,
  },
  {
    slug: "taskzen",
    name: "TaskZen",
    status: "Completed",
    summary: "A full-stack task organizer built collaboratively at HackED.",
    coreFeatures: ["Task tracking", "Analytics dashboards", "Data visualization"],
    technologies: ["Python", "Streamlit", "SQLite", "Pandas", "Plotly"],
    impact: [
      "Organizes tasks alongside analytics and visualizations.",
      "Built collaboratively during HackED.",
    ],
    links: [
      { label: "View on Devpost", href: "https://devpost.com/software/task-zen" },
      { label: "View on GitHub", href: "https://github.com/Pragati-Puri/HackED_2025" },
    ],
    featured: false,
  },
  {
    slug: "delulu-core",
    name: "Delulu Core",
    status: "Completed",
    summary: "A Gen Z chatbot with chat and translation modes.",
    coreFeatures: [
      "Offers dedicated chat and translation modes.",
      "Uses the ChatGPT API for its chatbot experience.",
      "Applies custom visual styling.",
    ],
    technologies: ["ChatGPT API", "HTML", "CSS", "JavaScript", "Python"],
    impact: [
      "Built by a three-person team during a 24-hour hackathon.",
      "Delivers a custom-styled chatbot experience for a Gen Z audience.",
    ],
    links: [{ label: "View on Devpost", href: "https://devpost.com/software/delulu-core" }],
    featured: false,
  },
];
