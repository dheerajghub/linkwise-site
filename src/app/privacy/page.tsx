import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata = {
  title: "Privacy Policy",
  description: "Our Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="relative pt-28 pb-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_top_center,rgba(55,55,55,0.04),rgba(255,255,255,0))]" />
      
      <Container>
        <Section id="privacy" title="Privacy Policy">
          <div className="prose prose-gray prose-lg mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-white/50 p-10 shadow-sm backdrop-blur">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, information we
                obtain automatically when you use our application, and information
                from third party sources.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to operate and improve our
                services, communicate with you, and for security and fraud
                prevention.
              </p>

              <h2>3. Information Sharing</h2>
              <p>
                We do not share your personal information with third parties except
                as described in this privacy policy.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect the security of your personal information.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal
                information. You can exercise these rights by contacting us.
              </p>

              <h2>6. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify
                you of any changes by posting the new privacy policy on this page.
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}