import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Linkwise",
  description: "Your intelligent bookmarking companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        {/* NAVBAR */}
        <nav className="border-b border-gray-100 py-4">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Linkwise
            </Link>
            <div className="space-x-4 text-sm font-medium">
              <Link href="/faq">FAQ</Link>
              <Link href="/feedback">Feedback</Link>
              <Link href="/feature-request">Feature Request</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/support">Support</Link>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Linkwise. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
