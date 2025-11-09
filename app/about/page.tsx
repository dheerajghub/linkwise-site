import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to LinkWise, your premier destination for professional networking and career advancement. 
          We're dedicated to connecting talented professionals with exciting opportunities.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            At LinkWise, we believe in the power of meaningful connections. Our platform is designed 
            to help professionals build valuable relationships, share knowledge, and advance their careers 
            through authentic networking opportunities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc pl-6">
            <li>Professional networking opportunities</li>
            <li>Career advancement resources</li>
            <li>Industry insights and trends</li>
            <li>Community-driven knowledge sharing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            Have questions or suggestions? We'd love to hear from you. 
            Reach out to us at <a href="mailto:contact@linkwise.com" className="text-blue-600 hover:underline">
            contact@linkwise.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
