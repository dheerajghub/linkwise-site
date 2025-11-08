import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata = {
  title: "Privacy Policy | Linkwise",
  description:
    "Learn how Linkwise collects, uses, and protects your data responsibly.",
};

export default function PrivacyPage() {
  return (
    <main className="relative pt-28 pb-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(100%_100%_at_top_center,rgba(70,70,70,0.05),rgba(255,255,255,0))]" />

      <Container>
        <Section id="privacy" title="">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-gray-500 mt-2 text-lg">
                Your privacy is our priority. Here’s how we handle your information.
              </p>
            </div>

            <article className="prose prose-gray prose-base max-w-none lg:prose-lg rounded-xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur-sm">
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy describes how <strong>Linkwise</strong> (“we”, “our”, “us”) 
                collects, uses, and protects your information when you use our 
                application and website.
              </p>

              <h2>2. Information We Collect</h2>
              <ul>
                <li><strong>Account Information:</strong> Name, email, and authentication credentials via Supabase.</li>
                <li><strong>Usage Data:</strong> Actions performed within the app, link interactions, and analytics to improve experience.</li>
                <li><strong>Device Data:</strong> Device type, browser version, and usage patterns (collected anonymously).</li>
              </ul>

              <h2>3. How We Use Information</h2>
              <ul>
                <li>Operate, maintain, and improve Linkwise services.</li>
                <li>Power AI-driven link analysis and insights.</li>
                <li>Provide customer support and technical assistance.</li>
                <li>Manage subscriptions and authentication.</li>
                <li>Ensure security, fraud prevention, and compliance.</li>
              </ul>

              <h2>4. AI Data Handling</h2>
              <p>
                Linkwise uses AI to summarize and analyze your saved links. 
                We may temporarily process snippets of content for embeddings 
                or retrieval but never sell or share your link data for marketing.
              </p>

              <h2>5. Data Sharing</h2>
              <ul>
                <li>Supabase and OpenAI — for storage and AI features.</li>
                <li>Payment processors — for managing subscriptions.</li>
                <li>Legal authorities — if required by law.</li>
              </ul>

              <h2>6. Data Security</h2>
              <p>
                We use bank-level encryption, secure authentication, and 
                best practices for data protection. Only essential operations 
                access your stored data.
              </p>

              <h2>7. Your Rights</h2>
              <ul>
                <li>Access and export your saved data.</li>
                <li>Request deletion of your account.</li>
                <li>Update preferences anytime via settings.</li>
              </ul>

              <h2>8. Cookies and Analytics</h2>
              <p>
                We use minimal cookies and analytics solely for understanding usage 
                and performance within the app. No personal browsing is tracked.
              </p>

              <h2>9. Children’s Privacy</h2>
              <p>
                Linkwise is not intended for users under 16. We do not knowingly 
                collect data from children.
              </p>

              <h2>10. Policy Updates</h2>
              <p>
                This policy may change over time. Updates will be posted here 
                with a new “Last Updated” date.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                Questions or concerns? Reach us at{" "}
                <a href="mailto:support@linkwise.app">support@linkwise.app</a>.
              </p>

              <hr className="my-8" />
              <p className="text-sm text-gray-500 text-center">
                <em>Last updated: November 2025</em>
              </p>
            </article>
          </div>
        </Section>
      </Container>
    </main>
  );
}
