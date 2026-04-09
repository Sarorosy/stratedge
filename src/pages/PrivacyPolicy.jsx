import React from 'react';
import BlurText from '../components/BlurText';
import useSEO from '../hooks/useSEO';

export default function PrivacyPolicy() {
  const { component: seoComponent } = useSEO('privacy');

  return (
    <div className="privacy-page pt-24 container mx-auto max-w-4xl px-4 py-12">
      {seoComponent}
      <BlurText
        text="Privacy Policy"
        className="text-4xl sm:text-5xl font-extrabold mb-6"
        animateBy="words"
        direction="top"
        delay={200}
      />

      <p className="text-base leading-7 text-gray-700 mb-6 max-w-3xl">
        At The Stratedgee, we respect your privacy. This policy explains what information we collect, how we use it,
        and the choices you have regarding your information.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h3>
      <p className="text-base leading-7 text-gray-700 mb-4">We collect information you provide directly (contact forms, newsletter signups) and data collected automatically (cookies, analytics).</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h3>
      <p className="text-base leading-7 text-gray-700 mb-4">We use collected information to provide services, communicate updates, improve our website, and for analytics.</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Cookies & Tracking</h3>
      <p className="text-base leading-7 text-gray-700 mb-4">We use cookies and similar technologies to enhance user experience and for analytics. You can manage cookie preferences in your browser.</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h3>
      <p className="text-base leading-7 text-gray-700 mb-4">We may share information with trusted third-party providers for analytics, hosting, or payment processing as described in this policy.</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Contact</h3>
      <p className="text-base leading-7 text-gray-700">If you have questions about this policy, email us at admin@thestratedgee.com.</p>
    </div>
  );
}
