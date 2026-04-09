import React from 'react';
import BlurText from '../components/BlurText';
import useSEO from '../hooks/useSEO';

function Terms() {
  const { component: seoComponent } = useSEO('terms');
  
  return (
    <div className="terms-page container mx-auto max-w-4xl px-4 py-12 pt-24">
      {seoComponent}
      <BlurText
        text="Terms and Conditions"
        className="text-4xl sm:text-5xl font-extrabold mb-6"
        animateBy="words"
        direction="top"
        delay={200}
      />
      <p className="text-base leading-7 text-gray-700 mb-6">Welcome to The Stratedgee. By using our website and services, you agree to the following terms and conditions.</p>

      <BlurText
        text="Service Agreement Terms"
        className="text-2xl font-bold mt-8 mb-3"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p className="text-base leading-7 text-gray-700 mb-4">Our services are provided as-is and are subject to availability. We reserve the right to modify or discontinue services at any time.</p>

      <BlurText
        text="Payment and Refund Policies"
        className="text-2xl font-bold mt-6 mb-3"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p className="text-base leading-7 text-gray-700 mb-4">All payments are final and non-refundable unless otherwise stated in a written agreement.</p>

      <BlurText
        text="Course Enrollment Terms"
        className="text-2xl font-bold mt-6 mb-3"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p className="text-base leading-7 text-gray-700 mb-4">By enrolling in our courses, you agree to adhere to the course schedule and complete all assignments as required.</p>

      <BlurText
        text="Intellectual Property Rights"
        className="text-2xl font-bold mt-6 mb-3"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p className="text-base leading-7 text-gray-700 mb-4">All content on this website, including text, graphics, and logos, is the property of The Stratedgee and is protected by copyright laws.</p>

      <BlurText
        text="Limitation of Liability"
        className="text-2xl font-bold mt-6 mb-3"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p className="text-base leading-7 text-gray-700 mb-4">We are not liable for any direct, indirect, or consequential damages arising from the use of our services.</p>

      <BlurText
        text="Governing Law"
        className="text-2xl font-bold mt-6 mb-3"
        animateBy="words"
        direction="top"
        delay={150}
      />
      <p className="text-base leading-7 text-gray-700 mb-4">These terms are governed by the laws of Tamil Nadu, India.</p>
    </div>
  );
}

export default Terms;