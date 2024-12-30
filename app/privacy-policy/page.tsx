// app/privacy-policy/page.tsx
// import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-2 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At TechBlog, we value your privacy and are committed to protecting your
        personal information. This Privacy Policy outlines the types of
        information we collect, how we use it, and your rights regarding your
        data.
      </p>
      <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        and any other details you provide when interacting with our website,
        subscribing to newsletters, or leaving comments.
      </p>
      <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To improve our content and user experience</li>
        <li>To respond to your inquiries</li>
        <li>To send updates and newsletters (if subscribed)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal data. For
        any concerns, please contact us through our{" "}
        <a href="/contact" className="text-blue-500 underline">
          Contact page
        </a>
        .
      </p>
      <p>
        For more details or questions, feel free to reach out. We’re here to
        help!
      </p>
    </div>
  );
};

export default PrivacyPolicy;
