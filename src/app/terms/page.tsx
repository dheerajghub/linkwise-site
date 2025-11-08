import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata = {
  title: "Terms of Service",
  description: "Our Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="relative pt-28 pb-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_top_center,rgba(55,55,55,0.04),rgba(255,255,255,0))]" />
      
      <Container>
        <Section id="terms" title="Terms of Service">
          <div className="prose prose-gray prose-lg mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-white/50 p-10 shadow-sm backdrop-blur">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this application, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the
                application for personal, non-commercial transitory viewing only.
              </p>

              <h2>3. Disclaimer</h2>
              <p>
                The materials on the application are provided on an 'as is' basis. We
                make no warranties, expressed or implied, and hereby disclaim and
                negate all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other
                violation of rights.
              </p>

              <h2>4. Limitations</h2>
              <p>
                In no event shall we or our suppliers be liable for any damages
                (including, without limitation, damages for loss of data or profit, or
                due to business interruption) arising out of the use or inability to
                use the materials on our application.
              </p>

              <h2>5. Revisions</h2>
              <p>
                We may revise these terms of service for the application at any time
                without notice. By using this application you are agreeing to be bound
                by the then current version of these terms of service.
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}