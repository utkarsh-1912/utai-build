import React from "react";
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="w-full md:m-4">
      <Head>
        <title>Privacy Policy | Utkristi AI Labs</title>
      </Head>
      <div className="w-full p-8 md:p-12 bg-black mx-auto max-w-screen-xl">
        <h1 className="text-4xl font-bold mb-4 gradient-title text-center">Privacy Policy</h1>
        <p className="mb-6 text-center text-gray-300">Effective Date: <strong className='text-yellow-600'>01/12/2024</strong> | Last Updated: <strong className='text-yellow-600'>09/10/2024</strong></p>

        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-6">
          Welcome to <strong>Utkristi AI Labs</strong>. We are committed to safeguarding your privacy. This Privacy Policy
          explains how we collect, use, and disclose your personal information when you use our services or interact with
          our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

        <h3 className="text-xl font-semibold mb-2">1.1 Personal Information</h3>
        <p className="mb-4">
          We may collect personal information that you provide directly to us, such as:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment information (if applicable)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">1.2 Non-Personal Information</h3>
        <p className="mb-4">
          We may also collect non-personal information such as:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Browser type</li>
          <li>IP address</li>
          <li>Device information</li>
          <li>Usage data (e.g., time spent on the website)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">1.3 Cookies and Tracking Technologies</h3>
        <p className="mb-6">
          We use cookies, web beacons, and similar tracking technologies to collect information about your interactions
          with our website. You may control cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>

        <h3 className="text-xl font-semibold mb-2">2.1 To Provide Our Services</h3>
        <p className="mb-4">
          We use your personal information to provide and improve our services, such as:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Managing your account</li>
          <li>Processing payments</li>
          <li>Providing customer support</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">2.2 To Improve User Experience</h3>
        <p className="mb-6">
          We use non-personal information to analyze usage trends and improve our website, ensuring a better experience
          for you.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell or rent your personal information. We may share your data with trusted third parties only under
          the following circumstances:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Service providers (e.g., payment processors)</li>
          <li>Legal obligations (e.g., to comply with laws or legal processes)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-6">
          We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-6">
          You have the right to access, update, or delete your personal information. You can contact us to exercise
          these rights.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Changes to this Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated
          effective date.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy, please contact us at:
        </p>
        <p className="mt-2">
          <strong className="text-yellow-600">Email:</strong> privacy@utkristi-labs.io
        </p>
        <p>
          <strong className="text-yellow-600">Address:</strong> Utkristi AI Labs, Electronic City, Bengaluru, India
        </p>
      </div>
    </div>
  );
}
