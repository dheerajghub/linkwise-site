import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} secure?`,
    answer:
      'Absolutely. We use end-to-end encryption to protect your data. Your saved links and AI interactions remain private and accessible only to you.',
  },
  {
    question: `Can I use ${siteDetails.siteName} on multiple devices?`,
    answer:
      'Yes! Your Linkwise account syncs seamlessly across all your devices — so you can save, search, and learn from anywhere.',
  },
  {
    question: 'How does the AI feature work?',
    answer:
      `${siteDetails.siteName} uses advanced language models to understand the content of your saved links. You can ask questions, get summaries, and discover insights — just like chatting with your personal research assistant.`,
  },
  {
    question: 'What types of links can I save?',
    answer:
      'You can save almost anything — articles, research papers, YouTube videos, newsletters, and more. Linkwise automatically extracts metadata and organizes them intelligently.',
  },
  {
    question: 'Will my data be shared or sold?',
    answer:
      `Never. Your data belongs entirely to you. ${siteDetails.siteName} is private by design — we do not sell or share your information with any third party.`,
  },
  {
    question: 'Do I need a subscription to use AI features?',
    answer:
      `Linkwise offers both free and Pro plans. AI-powered summaries and Q&A features are available under the Pro plan, while basic bookmarking remains free.`,
  },
  {
    question: 'What if I need help using the app?',
    answer:
      `Our support team is always ready to help via in-app chat or email. We also provide a step-by-step onboarding guide and FAQs to help you get started quickly.`,
  },
];