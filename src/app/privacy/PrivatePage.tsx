import Container from "@/components/Container"
import Section from "@/components/Section"

const PrivacyPage = () => {
  return (
    <Container>
      <Section id="privacy" title="Privacy Policy">
        <div className="prose prose-gray mx-auto max-w-4xl">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, information we obtain automatically when you use our application, and information from third party sources.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to operate and improve our services, communicate with you, and for security and fraud prevention.</p>

          <h2>3. Information Sharing</h2>
          <p>We do not share your personal information with third parties except as described in this privacy policy.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect the security of your personal information.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. You can exercise these rights by contacting us.</p>

          <h2>6. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
        </div>
      </Section>
    </Container>
  )
}

export default PrivacyPage