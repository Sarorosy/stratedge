import React from 'react';
import BlurText from '../components/BlurText';
import useSEO from '../hooks/useSEO';

export default function PrivacyPolicy() {
  const { component: seoComponent } = useSEO('privacy');

  return (
    <div className="privacy-page" style={{ padding: '60px 20px', fontFamily: "'DM Sans',sans-serif" }}>
      {seoComponent}
      <BlurText text="Privacy Policy" className="h1-blur-privacy" animateBy="words" direction="top" delay={200} />
      <style>{`
        .h1-blur-privacy{font-size:2.5rem!important;font-weight:900!important;margin-bottom:24px!important}
      `}</style>

      <p style={{ maxWidth: 900, lineHeight: 1.8, color: 'var(--color-text-faint)' }}>
        At The Stratedgee, we respect your privacy. This policy explains what information we collect, how we use it,
        and the choices you have regarding your information.
      </p>

      <h3 style={{ marginTop: 32 }}>Information We Collect</h3>
      <p>We collect information you provide directly (contact forms, newsletter signups) and data collected automatically (cookies, analytics).</p>

      <h3 style={{ marginTop: 24 }}>How We Use Information</h3>
      <p>We use collected information to provide services, communicate updates, improve our website, and for analytics.</p>

      <h3 style={{ marginTop: 24 }}>Cookies & Tracking</h3>
      <p>We use cookies and similar technologies to enhance user experience and for analytics. You can manage cookie preferences in your browser.</p>

      <h3 style={{ marginTop: 24 }}>Third-Party Services</h3>
      <p>We may share information with trusted third-party providers for analytics, hosting, or payment processing as described in this policy.</p>

      <h3 style={{ marginTop: 24 }}>Contact</h3>
      <p>If you have questions about this policy, email us at admin@thestratedgee.com.</p>
    </div>
  );
}
