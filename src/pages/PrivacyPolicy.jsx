import { motion } from "framer-motion";
import { HiOutlineShieldCheck } from "react-icons/hi";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const sections = [
  {
    number: "1",
    title: "Introduction",
    body: "This Privacy Policy explains how Run Alpha collects, uses, and protects your personal data when you visit our website. By using our website, you consent to the practices outlined in this Privacy Policy.",
  },
  {
    number: "2",
    title: "Information We Collect",
    body: "We collect information that you voluntarily provide when you visit our site, such as your name, email address, and any other contact details you may provide. Additionally, we may collect usage data about your visit, including IP addresses, browser types, and operating system information.",
  },
  {
    number: "3",
    title: "How We Use Your Information",
    body: "We use your personal data to improve our services, respond to inquiries, send updates, and communicate with you. We may also use cookies to track your preferences and improve the functionality of our site.",
  },
  {
    number: "4",
    title: "Sharing Your Information",
    body: "We do not sell, trade, or rent your personal information to third parties. We may share your information with third-party service providers who assist us in operating the website and providing services to you, as long as they agree to keep the information confidential.",
  },
  {
    number: "5",
    title: "Security of Your Information",
    body: "We take reasonable measures to protect your personal data from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    number: "6",
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your personal information. If you wish to exercise these rights or have any concerns, please contact us.",
  },
  {
    number: "7",
    title: "Changes to This Privacy Policy",
    body: "We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised policy will be effective when posted.",
  },
];

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Data Protection | RunAlpha Lagos Nigeria"
        description="RunAlpha's privacy policy explains how we collect, use, and protect your personal data. Learn about your rights regarding information security and data handling when using our investment advisory website."
        keywords="RunAlpha privacy policy, data protection Nigeria, personal data security, investment advisory privacy, financial services data policy Lagos"
      />

      <div className="bg-alpha/5 min-h-screen">
        {/* Header band */}
        <div className="bg-alpha pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
            <motion.div
              className="flex items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <HiOutlineShieldCheck className="text-secondary" size={40} />
              <h1 className="font-lora text-4xl font-bold text-white md:text-5xl">
                Privacy Policy
              </h1>
            </motion.div>
            <motion.p
              className="font-quicksand mt-4 max-w-2xl text-lg text-white/70"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              How we collect, use, and protect your personal data.
            </motion.p>
          </div>
        </div>

        {/* Content */}
        <motion.div
          className="mx-auto max-w-4xl px-6 py-16 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <div className="space-y-8">
            {sections.map((section) => (
              <motion.div
                key={section.number}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="bg-alpha/10 text-alpha flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    {section.number}
                  </span>
                  <h2 className="font-lora text-alpha text-xl font-semibold md:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <p className="font-quicksand leading-relaxed text-gray-600">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact card */}
          <motion.div
            className="mt-12 rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-lora text-alpha mb-2 text-2xl font-semibold">
              Contact Us
            </h2>
            <p className="font-quicksand mb-4 text-gray-600">
              If you have any questions or concerns about this Privacy Policy, please contact us at
            </p>
            <a
              href="mailto:hello@runalpha.co"
              className="text-secondary font-quicksand inline-block text-lg font-semibold underline decoration-secondary/30 underline-offset-4 transition-colors duration-300 hover:decoration-secondary"
            >
              hello@runalpha.co
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
