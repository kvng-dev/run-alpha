import React, { useState } from "react";
import SEO from "../components/SEO";
import { useNavigate } from "react-router-dom";

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
    <div className="font-quicksand bg-black/20">
      <div className="mx-start px-8 py-32 text-gray-700 md:px-34 xl:max-w-7xl xl:px-48">
        <h1 className="mb-6 text-3xl font-bold">Disclaimer</h1>

        <section className="mb-6">
          {/* [Your existing disclaimer content here] */}

          <h2 className="text-2xl font-semibold">
            Online Access and Terms of Use Agreement
          </h2>
          <p className="text-base">
            Welcome to Run Alpha’s website. By clicking “accept” and accessing
            this website (the "Site"), you agree that your access to and use of
            the Site, including any text, images, graphics, user interfaces,
            information, data, tools, products, services, software, code, and
            other content (collectively, the "Content") provided by Run Alpha
            shall be exclusively governed by the terms and conditions set forth
            in this Online Access and Terms of Use Agreement (the "Agreement").
            You should read the terms and conditions of this Agreement
            carefully, as your access and use of the Site are expressly
            conditioned upon your acceptance of these terms. Run Alpha may
            refuse access to and usage of the Site to anyone at any time, in its
            sole discretion.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            2. Purpose of the Site: No Offer of Securities; No Advice
          </h3>
          <p className="text-base">
            The Site is intended to provide an overview of Run Alpha and its
            products, and is for general information purposes only. The Site is
            not intended to provide investment, accounting, tax, or legal
            advice. You should consult your own investment, legal and/or tax
            professionals regarding your specific situation.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            3. Summary of Risk Factors
          </h3>
          <p className="text-base">
            Investments in hedge funds and other investment funds, including
            those managed by Run Alpha and such funds' investments in any other
            funds (collectively, the "Funds"), are speculative and involve a
            high degree of risk and are intended only for experienced and
            sophisticated investors.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            4. Confidentiality, Intellectual Property Rights
          </h3>
          <p className="text-base">
            Run Alpha owns and maintains this Site. The Content is the
            intellectual property of Run Alpha. Nothing at this Site shall be
            construed as granting by implication, estoppel, or otherwise any
            license or right to use any of the Content of the Site.
          </p>

          <h3 className="mt-4 text-xl font-semibold">5. Disclaimers</h3>
          <p className="text-base">
            The Site is operated by Run Alpha on an "AS IS," "AS AVAILABLE"
            basis, without representations or warranties of any kind. Run Alpha
            disclaims any and all representations and warranties with respect to
            this Site and its content, whether express, implied, or statutory.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            6. Limitation of Liability
          </h3>
          <p className="text-base">
            Under no circumstances, shall Run Alpha and its affiliates or any of
            their employees, directors, officers, agents, vendors, or suppliers
            be liable for any direct or indirect losses or damages arising out
            of or in connection with the use of or inability to use the Site.
          </p>

          <h3 className="mt-4 text-xl font-semibold">7. No Endorsements</h3>
          <p className="text-base">
            References on the Site to any names, marks, products, or services of
            third parties or hypertext links to third-party sites or information
            do not constitute or imply an endorsement by Run Alpha.
          </p>

          <h3 className="mt-4 text-xl font-semibold">8. Monitoring the Site</h3>
          <p className="text-base">
            Run Alpha reserves the right to monitor and record activity on the
            Site at its sole discretion and may report any activity that it
            suspects may violate any law or regulation as it deems appropriate.
          </p>

          <h3 className="mt-4 text-xl font-semibold">9. Law</h3>
          <p className="text-base">
            This Agreement (including non-contractual disputes or claims) shall
            be governed by and construed in accordance with the laws of the
            Federal Republic of Nigeria.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            Please read and accept the disclaimer to proceed
          </h3>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="accept"
              className="mr-2"
              checked={accepted}
              onChange={handleAcceptance}
            />
            <label htmlFor="accept" className="text-base">
              I accept the terms of the disclaimer.
            </label>
          </div>

          {!accepted && (
            <p className="mt-2 text-sm text-red-600">
              You must accept the terms to proceed.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
