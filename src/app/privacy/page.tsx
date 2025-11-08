import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata = {
  title: "Privacy Policy | Linkwise",
  description:
    "Learn how Linkwise collects, uses, and protects your data responsibly.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 pt-28 pb-12 text-sm leading-relaxed text-gray-700">
        <p className="mb-8"></p>
      <h1 className="text-4xl font-bold mb-4">Privacy & Policy</h1>
      <p className="mb-10">
        Welcome to Linkwise! By using our services, you agree to comply with the following terms and conditions that govern your use of our platform. Please read them carefully before proceeding.
      </p>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">1. Use of the Service</h2>
        <p className="mb-1">
          Linkwise provides AI-powered bookmarking and organization tools to help you save, manage, and analyze your links efficiently. You agree to use the platform responsibly and only for lawful purposes.
        </p>
        <p>
          - You must not use the platform for any fraudulent or malicious activity.<br /> 
          - You agree not to reverse engineer, duplicate, or exploit any part of the service.<br /> 
          - We reserve the right to restrict or terminate access for misuse or policy violations.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">2. Accounts and Security</h2>
        <p className="mb-1">
          To access premium features, you must create a Linkwise account and provide accurate information. You are solely responsible for maintaining the confidentiality of your login credentials.
        </p>
        <p>
        - Linkwise is not liable for losses caused by unauthorized account access.<br />
        - You must notify us immediately of any breach or suspicious activity.<br />
        - We may suspend or delete accounts that violate our terms.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">3. Subscriptions and Payments</h2>
        <p className="mb-1">
          Linkwise offers both free and premium subscription plans. Payments for premium plans are securely processed through trusted payment partners.
        </p>
        <p>
          - Subscription fees are charged in advance and are non-refundable.<br />
          - Your plan may automatically renew unless canceled before the renewal date.<br />
          - We reserve the right to modify pricing or features with prior notice.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">4. Intellectual Property</h2>
        <p className="mb-1">
          All trademarks, code, design, and content on Linkwise belong to the company and are protected under applicable intellectual property laws.
        </p>
        <p>
          - You may not copy, reproduce, or distribute any Linkwise content without written permission.<br />  
          - Any unauthorized use of our assets or branding will lead to legal action.<br /> 
          - All user-generated content remains owned by the user but may be used within the service’s functionality.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">5. Termination</h2>
        <p className="mb-1">
          We may suspend or terminate your access to Linkwise at any time for violations of these terms or other reasons deemed necessary.
        </p>
        <p>
          - Upon termination, your access to all services and stored data will cease.<br />  
          - You can request permanent deletion of your data through your account settings.<br />  
          - Outstanding payments or obligations remain enforceable after termination.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">6. Limitation of Liability</h2>
        <p className="mb-1">
          Linkwise is provided “as is” without warranties of any kind. We are not responsible for damages or data loss resulting from the use of our services.
        </p>
        <p>
          - We do not guarantee uninterrupted access or error-free operation.<br /> 
          - You assume full responsibility for how you use and rely on Linkwise.<br /> 
          - Our total liability shall not exceed the amount you paid for your subscription.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-semibold mb-2">7. Changes to These Terms</h2>
        <p className="mb-1">
          We may update these terms periodically to reflect product, policy, or legal changes. Updates will take effect immediately upon posting.
        </p>
        <p>
          - You will be notified of significant updates via email or in-app messages.<br /> 
          - Continued use after updates implies acceptance of the revised terms.
        </p>
      </section>

      <p className="mt-8 text-gray-500 text-xs">
        Last updated: November 2025
      </p>
    </main>
  );
}
