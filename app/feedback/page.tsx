"use client";
import { useState } from "react";

export default function FeedbackPage() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Later: connect to Formspree or Supabase Function
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Feedback</h1>
      <p className="text-gray-600 mb-6">
        Share your thoughts, report bugs, or suggest improvements. We value every
        piece of feedback.
      </p>

      {submitted ? (
        <p className="text-green-600 font-medium">
          Thank you for your feedback! 💙
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your feedback here..."
            className="w-full border border-gray-300 rounded-lg p-3"
            rows={5}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </section>
  );
}
