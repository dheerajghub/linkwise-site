import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata = {
  title: "Terms of Service | Linkwise",
  description:
    "Read the Terms of Service for Linkwise, the AI-powered bookmarking and link analysis platform.",
};

export default function TermsPage() {
  return (
    <main className="relative pt-28 pb-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(100%_100%_at_top_center,rgba(70,70,70,0.05),rgba(255,255,255,0))]" />

      <Container>
        <Section id="terms" title="">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-gray-500 mt-2 text-lg">
                Please read these terms carefully before using Linkwise.
              </p>
            </div>

            <article className="prose prose-gray prose-lg max-w-none rounded-xl border border-gray-200 bg-white/70 p-8 shadow-md backdrop-blur-md">
              <h2>1. Acceptance of Terms</h2>
              <p>
                Welcome to <strong>Linkwise</strong> — an AI-powered bookmarking platform designed 
                to help you collect, organize, and query your saved links intelligently.
                By accessing or using Linkwise (the “App”, “Service”, or “Platform”), 
                you agree to comply with and be bound by these Terms of Service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                Linkwise allows users to save and manage web links, organize them into collections, 
                and ask AI-powered questions about their saved content. 
                Additional features may include user accounts, synchronization across devices, 
                and access to premium functionality through paid subscriptions.
              </p>

              <h2>3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities under your account. Linkwise reserves the right 
                to suspend or terminate accounts found to be in violation of these terms.
              </p>

              <h2>4. Subscription and Payments</h2>
              <p>
                Some features of Linkwise are available only to paid subscribers. 
                Subscriptions are managed securely through our payment partner. 
                All fees are non-refundable once a billing period has begun unless 
                otherwise required by applicable law.
              </p>

              <h2>5. Use Restrictions</h2>
              <ul>
                <li>Reversing, decompiling, or attempting to extract source code.</li>
                <li>Uploading harmful, illegal, or offensive content.</li>
                <li>Using AI features to generate or distribute prohibited material.</li>
                <li>Violating intellectual property rights of others.</li>
              </ul>

              <h2>6. AI-Generated Content Disclaimer</h2>
              <p>
                AI responses in Linkwise are generated automatically and may contain 
                inaccuracies. They are provided for informational purposes only 
                and should not be considered professional or factual advice.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                In no event shall Linkwise, its developers, or affiliates be liable for 
                any indirect, incidental, or consequential damages arising from your 
                use or inability to use the Service.
              </p>

              <h2>8. Intellectual Property</h2>
              <p>
                All trademarks, designs, and proprietary features of Linkwise remain 
                the exclusive property of the developers. You may not copy or 
                redistribute any part of the Service without prior written consent.
              </p>

              <h2>9. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Service 
                at any time without prior notice for violations of these Terms or 
                other conduct deemed harmful to the Service or other users.
              </p>

              <h2>10. Modifications</h2>
              <p>
                Linkwise may update these Terms from time to time. Continued use of the Service 
                after changes are posted constitutes your acceptance of the new Terms.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India, without regard to conflict 
                of law principles. Any disputes shall be resolved in courts located in India.
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