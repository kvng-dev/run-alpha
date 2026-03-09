import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const sections = [
  {
    number: "1",
    title: "Online Access and Terms of Use Agreement",
    body: `Welcome to Run Alpha's website. By clicking "accept" and accessing this website (the "Site"), you agree that your access to and use of the Site, including any text, images, graphics, user interfaces, information, data, tools, products, services, software, code, and other content (collectively, the "Content") provided by Run Alpha shall be exclusively governed by the terms and conditions set forth in this Online Access and Terms of Use Agreement (the "Agreement"). You should read the terms and conditions of this Agreement carefully, as your access and use of the Site are expressly conditioned upon your acceptance of these terms. Run Alpha may refuse access to and usage of the Site to anyone at any time, in its sole discretion.`,
  },
  {
    number: "2",
    title: "Purpose of the Site: No Offer of Securities; No Advice",
    body: "The Site is intended to provide an overview of Run Alpha and its products, and is for general information purposes only. The Site is not intended to provide investment, accounting, tax, or legal advice. You should consult your own investment, legal and/or tax professionals regarding your specific situation.",
  },
  {
    number: "3",
    title: "Summary of Risk Factors",
    body: `Investments in hedge funds and other investment funds, including those managed by Run Alpha and such funds' investments in any other funds (collectively, the "Funds"), are speculative and involve a high degree of risk and are intended only for experienced and sophisticated investors.`,
  },
  {
    number: "4",
    title: "Confidentiality, Intellectual Property Rights",
    body: "Run Alpha owns and maintains this Site. The Content is the intellectual property of Run Alpha. Nothing at this Site shall be construed as granting by implication, estoppel, or otherwise any license or right to use any of the Content of the Site.",
  },
  {
    number: "5",
    title: "Disclaimers",
    body: `The Site is operated by Run Alpha on an "AS IS," "AS AVAILABLE" basis, without representations or warranties of any kind. Run Alpha disclaims any and all representations and warranties with respect to this Site and its content, whether express, implied, or statutory.`,
  },
  {
    number: "6",
    title: "Limitation of Liability",
    body: "Under no circumstances, shall Run Alpha and its affiliates or any of their employees, directors, officers, agents, vendors, or suppliers be liable for any direct or indirect losses or damages arising out of or in connection with the use of or inability to use the Site.",
  },
  {
    number: "7",
    title: "No Endorsements",
    body: "References on the Site to any names, marks, products, or services of third parties or hypertext links to third-party sites or information do not constitute or imply an endorsement by Run Alpha.",
  },
  {
    number: "8",
    title: "Monitoring the Site",
    body: "Run Alpha reserves the right to monitor and record activity on the Site at its sole discretion and may report any activity that it suspects may violate any law or regulation as it deems appropriate.",
  },
  {
    number: "9",
    title: "Governing Law",
    body: "This Agreement (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
  },
];

const Disclaimer = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleAcceptance = (e) => {
    const checked = e.target.checked;
    setAccepted(checked);
    if (checked) {
      navigate("/hedge-fund");
    }
  };

  return (
    <>
      <SEO
        title="Disclaimer - Terms of Use | RunAlpha Investment Advisory Lagos Nigeria"
        description="Read RunAlpha's disclaimer and terms of use agreement. Understand the risks, limitations, and legal terms associated with accessing Run Alpha's investment management services and website content."
        keywords="RunAlpha disclaimer, terms of use, investment risk disclosure, hedge fund disclaimer Nigeria, financial advisory terms Lagos"
      />

      <div className="bg-alpha/5 min-h-screen">
        {/* Header band */}
        <div className="bg-alpha pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
            <motion.h1
              className="font-lora text-4xl font-bold text-white md:text-5xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Disclaimer
            </motion.h1>
            <motion.p
              className="font-quicksand mt-4 max-w-2xl text-lg text-white/70"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              Please read our terms of use agreement carefully before proceeding.
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

          {/* Acceptance card */}
          <motion.div
            className="mt-12 rounded-xl border-2 border-dashed border-gray-200 bg-white p-8 text-center"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-quicksand text-alpha mb-6 text-lg font-semibold">
              Please read and accept the disclaimer to proceed
            </p>
            <label
              htmlFor="accept"
              className="font-quicksand inline-flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-6 py-4 transition-all duration-300 select-none hover:border-secondary hover:bg-secondary/5"
            >
              <input
                type="checkbox"
                id="accept"
                checked={accepted}
                onChange={handleAcceptance}
                className="text-secondary focus:ring-secondary h-5 w-5 rounded border-gray-300"
              />
              <span className="text-gray-700">
                I accept the terms of the disclaimer.
              </span>
            </label>
            {!accepted && (
              <p className="mt-4 text-sm text-gray-400">
                You must accept the terms to proceed.
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Disclaimer;
