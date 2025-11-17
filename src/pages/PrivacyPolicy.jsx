import React from "react";
import SEO from "../components/SEO";

const PrivacyPolicyPage = () => {
  return (
    <div className="font-quicksand bg-black/20">
      <SEO
        title="Privacy Policy | Run Alpha"
        description="Understand the terms, risks, and limitations associated with the financial strategies presented by Run Alpha."
        url="https://runalpha.co/privacy-policy"
        type="website"
        noIndex={true}
      />
      <div className="mx-start px-8 py-32 md:px-34 xl:max-w-7xl xl:px-48">
        <h2 className="mb-6 text-3xl font-bold">Privacy Policy</h2>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-base">
            This Privacy Policy explains how Run Alpha collects, uses, and
            protects your personal data when you visit our website. By using our
            website, you consent to the practices outlined in this Privacy
            Policy.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            2. Information We Collect
          </h3>
          <p className="text-base">
            We collect information that you voluntarily provide when you visit
            our site, such as your name, email address, and any other contact
            details you may provide. Additionally, we may collect usage data
            about your visit, including IP addresses, browser types, and
            operating system information.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            3. How We Use Your Information
          </h3>
          <p className="text-base">
            We use your personal data to improve our services, respond to
            inquiries, send updates, and communicate with you. We may also use
            cookies to track your preferences and improve the functionality of
            our site.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            4. Sharing Your Information
          </h3>
          <p className="text-base">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with third-party service
            providers who assist us in operating the website and providing
            services to you, as long as they agree to keep the information
            confidential.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            5. Security of Your Information
          </h3>
          <p className="text-base">
            We take reasonable measures to protect your personal data from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h3 className="mt-4 text-xl font-semibold">6. Your Rights</h3>
          <p className="text-base">
            You have the right to access, correct, or delete your personal
            information. If you wish to exercise these rights or have any
            concerns, please contact us.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            7. Changes to This Privacy Policy
          </h3>
          <p className="text-base">
            We reserve the right to update this Privacy Policy from time to
            time. Any changes will be posted on this page, and the revised
            policy will be effective when posted.
          </p>

          <h3 className="mt-4 text-xl font-semibold">8. Contact Us</h3>
          <p className="text-base">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at
            <a href="mailto:hello@runalpha.co" className="pl-1 text-blue-500">
              hello@runalpha.co
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
