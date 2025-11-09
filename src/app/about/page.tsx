import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata = {
  title: "About | Linkwise",
  description: "Discover the story and mission behind Linkwise — your intelligent bookmarking companion.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 pt-28 pb-12 text-sm leading-relaxed text-gray-700">
       <p className="mb-10"></p>
      <h1 className="text-4xl font-bold mb-4">About Linkwise</h1>
      <p className="mb-10">
        Linkwise is your intelligent bookmarking and link organization platform — designed to help you save, manage, and analyze your digital resources effortlessly.  
        We believe that the internet is full of knowledge, but true productivity comes from making that knowledge organized, searchable, and actionable.
      </p>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
        <p className="mb-1">
          We’re on a mission to simplify how people interact with the web.  
          Instead of just collecting links, Linkwise helps you *understand* them.
        </p>
        <p>
          - Empower users to turn scattered information into structured knowledge.<br />
          - Make bookmarking smarter through AI-powered insights.<br />
          - Help professionals, students, and creators stay focused and informed.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">What Makes Us Different</h2>
        <p className="mb-1">
          Unlike traditional bookmarking tools, Linkwise integrates intelligent features that make saved links useful beyond storage.
        </p>
        <p>
          - AI-powered summaries and Q&A from your saved links.<br />
          - Collections to group, search, and explore resources effortlessly.<br />
          - Real-time synchronization across all your devices.<br />
          - Privacy-first approach with complete user control over data.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">Our Values</h2>
        <p className="mb-1">
          Everything we build at Linkwise is rooted in these guiding principles:
        </p>
        <p>
          - <strong>Simplicity:</strong> Design tools that feel intuitive and minimal.<br />
          - <strong>Transparency:</strong> Respect user data and privacy with honesty.<br />
          - <strong>Innovation:</strong> Continuously evolve with the latest AI technologies.<br />
          - <strong>Empowerment:</strong> Enable people to make the most of their online knowledge.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">The Journey Ahead</h2>
        <p className="mb-1">
          We’re constantly working to improve Linkwise — from smarter AI agents to seamless collaboration tools for teams and creators.
        </p>
        <p>
          - Expect frequent updates with new productivity-focused features.<br />
          - Join our growing community to share feedback and ideas.<br />
          - Together, we’re redefining how people organize knowledge online.
        </p>
      </section>

      <p className="mt-8 text-gray-500 text-xs">
        Built with ❤️ by the Linkwise Team — November 2025
      </p>
    </main>
  );
}
