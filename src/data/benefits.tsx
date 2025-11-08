import { FiBookOpen, FiSearch, FiZap, FiTag, FiCpu, FiFolder, FiShare2, FiLock, FiTrendingUp } from "react-icons/fi";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Smarter Link Organization",
    description:
      "Say goodbye to cluttered bookmarks. Linkwise automatically organizes your saved links into clean, searchable collections — powered by AI.",
    bullets: [
      {
        title: "Automatic Categorization",
        description: "Every link you save is intelligently tagged and grouped for effortless browsing.",
        icon: <FiFolder size={26} />,
      },
      {
        title: "Smart Search",
        description: "Find any link instantly using context-aware AI search — no more endless scrolling.",
        icon: <FiSearch size={26} />,
      },
      {
        title: "Clean Collections",
        description: "Keep your resources neatly structured with intuitive, modern collections.",
        icon: <FiTag size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Don’t just save links — understand them. Linkwise lets you ask questions, summarize content, and extract key takeaways from your saved articles.",
    bullets: [
      {
        title: "Instant Summaries",
        description: "Get quick AI-generated summaries of any link you save.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Ask Anything",
        description: "Chat with your saved content — get answers directly from your collections.",
        icon: <FiCpu size={26} />,
      },
      {
        title: "Learn Faster",
        description: "Turn saved resources into structured knowledge for personal or professional growth.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Private and Secure",
    description:
      "Your saved data stays yours. Linkwise ensures end-to-end privacy and robust encryption so your knowledge remains safe.",
    bullets: [
      {
        title: "End-to-End Encryption",
        description: "Your bookmarks and notes are encrypted and protected at all times.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Private by Design",
        description: "No data selling, no tracking — your content belongs only to you.",
        icon: <FiBookOpen size={26} />,
      },
      {
        title: "Secure Cloud Sync",
        description: "Access your collections seamlessly across all your devices, safely synced.",
        icon: <FiShare2 size={26} />,
      },
    ],
    imageSrc: "/images/mockup-3.webp",
  },
];
