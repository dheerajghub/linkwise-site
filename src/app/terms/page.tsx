import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata = {
  title: "Terms of Service | Linkwise",
  description: "Read the terms that govern your use of Linkwise services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 pt-28 pb-12 text-sm leading-relaxed text-gray-700">
        <p className="mb-8"></p>
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-10">
        Welcome to Linkwise! By accessing or using our services, you agree to comply with the following Terms of Service. Please read these terms carefully before proceeding.
      </p>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-1">
          By accessing and using Linkwise, you accept and agree to be bound by these terms, as well as any applicable laws and regulations.
        </p>
        <p>
          - You must be at least 18 years old to use Linkwise.<br />
          - Continued use of the service constitutes acceptance of updated terms.<br />
          - If you disagree with any part of the terms, you should discontinue using Linkwise immediately.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">2. Use License</h2>
        <p className="mb-1">
          Linkwise grants you a limited, non-exclusive, and non-transferable license to access and use the platform for personal, non-commercial purposes.
        </p>
        <p>
          - You may not modify, duplicate, or resell any portion of the application.<br />
          - Reverse engineering or unauthorized data scraping is strictly prohibited.<br />
          - Violations of this license may result in account suspension or legal action.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">3. Disclaimer</h2>
        <p className="mb-1">
          The materials and services provided by Linkwise are offered on an “as is” basis without any warranties, expressed or implied.
        </p>
        <p>
          - We make no guarantees of accuracy, reliability, or fitness for a particular purpose.<br />
          - Linkwise is not liable for any damages, losses, or issues caused by third-party integrations.<br />
          - Use of the service is entirely at your own risk.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">4. Limitations</h2>
        <p className="mb-1">
          Under no circumstances shall Linkwise or its suppliers be liable for any damages arising from the use or inability to use the platform.
        </p>
        <p>
          - This includes, but is not limited to, loss of data, profits, or business interruption.<br />
          - Certain jurisdictions may not allow such limitations, so they may not apply to you.<br />
          - Our total liability shall not exceed the amount you paid for your subscription.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">5. Revisions and Updates</h2>
        <p className="mb-1">
          We may revise these Terms of Service periodically to reflect updates, legal changes, or improvements to our platform.
        </p>
        <p>
          - Updates will be posted on our website and take effect immediately upon publication.<br />
          - You are encouraged to review these terms regularly to stay informed.<br />
          - Continued use of Linkwise after revisions implies acceptance of the new terms.
        </p>
      </section>

      <p className="mt-8 text-gray-500 text-xs">
        Last updated: November 2025
      </p>
    </main>
  );
}
