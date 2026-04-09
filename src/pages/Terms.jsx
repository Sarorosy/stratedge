import React from 'react';
import './Terms.css';
import BlurText from '../components/BlurText';
import useSEO from '../hooks/useSEO';

function Terms() {
  const { component: seoComponent } = useSEO('terms');
  
  return (
    <div className="terms-page">
      {seoComponent}
      <BlurText
        text="Terms and Conditions"
        className="h1-blur-terms"
        animateBy="words"
        direction="top"
        delay={200}
      />
      <style>{`
        .h1-blur-terms {
          font-size: 2.5rem !important;
          font-weight: 900 !important;
          margin-bottom: 24px !important;
        }
      `}</style>
      <p>Welcome to The Stratedgee. By using our website and services, you agree to the following terms and conditions.</p>

      <BlurText
        text="Service Agreement Terms"
        className="h2-blur-terms"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <style>{`
        .h2-blur-terms {
          font-size: 1.5rem !important;
          font-weight: 700 !important;
          margin-top: 32px !important;
          margin-bottom: 16px !important;
        }
      `}</style>
      <p>Our services are provided as-is and are subject to availability. We reserve the right to modify or discontinue services at any time.</p>

      <BlurText
        text="Payment and Refund Policies"
        className="h2-blur-terms"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p>All payments are final and non-refundable unless otherwise stated in a written agreement.</p>

      <BlurText
        text="Course Enrollment Terms"
        className="h2-blur-terms"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p>By enrolling in our courses, you agree to adhere to the course schedule and complete all assignments as required.</p>

      <BlurText
        text="Intellectual Property Rights"
        className="h2-blur-terms"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p>All content on this website, including text, graphics, and logos, is the property of The Stratedgee and is protected by copyright laws.</p>

      <BlurText
        text="Limitation of Liability"
        className="h2-blur-terms"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p>We are not liable for any direct, indirect, or consequential damages arising from the use of our services.</p>

      <BlurText
        text="Governing Law"
        className="h2-blur-terms"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p>These terms are governed by the laws of Tamil Nadu, India.</p>
    </div>
  );
}

export default Terms;