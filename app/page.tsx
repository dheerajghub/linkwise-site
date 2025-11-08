import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-bold mb-6 text-blue-600">
        Linkwise (Beta)
      </h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Your intelligent bookmarking companion. Save, organize, and understand
        the web — powered by AI.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/feedback"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold"
        >
          Give Feedback
        </Link>
        <Link
          href="/feature-request"
          className="px-5 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold"
        >
          Request a Feature
        </Link>
      </div>

      <div className="mt-16 text-left max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold">What’s Inside</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>🧠 AI-Powered Understanding: Ask questions about your saved links.</li>
          <li>📂 Smart Collections: Organize links neatly by topic or project.</li>
          <li>⚡ Instant Previews: Save any link and view rich metadata instantly.</li>
          <li>💬 AI Chat for Collections: Chat directly with your saved links.</li>
          <li>☁️ Supabase Sync: Your data stays private and synced.</li>
          <li>💎 Pro Access (Beta): Unlock more credits and link limits.</li>
        </ul>
      </div>
    </section>
  );
}
