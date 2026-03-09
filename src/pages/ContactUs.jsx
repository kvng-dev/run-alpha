import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData } from "../data/data";
import { Toaster } from "react-hot-toast";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "RunAlpha",
  image: "https://runalpha.co/logos/run-logo.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Uwa Close, Off Billings Way, Oregun",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.5885",
    longitude: "3.3606",
  },
  telephone: "+2349093717972",
  email: "hello@runalpha.co",
  url: "https://runalpha.co",
  openingHours: "Mo-Fr 09:00-17:00",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
};

function ContactUs() {
  return (
    <>
      <SEO
        title="Contact RunAlpha - Schedule Investment Consultation | Financial Advisory Lagos Nigeria"
        description="Contact RunAlpha's investment advisors in Lagos, Nigeria. Schedule a consultation for wealth management, portfolio analysis, and financial planning services. Located at 1 Uwa Close, Oregun, Lagos. Call +234 909 371 7972 or email hello@runalpha.co for expert investment guidance."
        keywords="contact RunAlpha Lagos, investment consultation Nigeria, financial advisor consultation Lagos, wealth management meeting Nigeria, schedule investment review, portfolio consultation Lagos, financial planning appointment Nigeria"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.contact} />
      </motion.div>

      {/* Contact cards section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Section header */}
          <motion.div
            className="mb-14 text-center"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="bg-secondary h-[2px] w-8 rounded-full" />
              <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
              <div className="bg-secondary h-[2px] w-8 rounded-full" />
            </div>
            <h2 className="font-lora text-alpha mb-4 text-3xl font-bold md:text-4xl">
              We&apos;d Love To Hear From You
            </h2>
            <p className="font-quicksand mx-auto max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Whether you are looking to discuss private wealth management,
              family office solutions, investment opportunities, or simply want
              to learn more about how Run Alpha can help you achieve your
              financial goals — our team is ready to assist you.
            </p>
          </motion.div>

          {/* Contact details */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: HiOutlinePhone,
                label: "Phone",
                value: "+234 909 371 7972",
                href: "tel:+2349093717972",
              },
              {
                icon: HiOutlineMail,
                label: "Email",
                value: "hello@runalpha.co",
                href: "mailto:hello@runalpha.co",
              },
              {
                icon: HiOutlineLocationMarker,
                label: "Address",
                value: "1 Uwa Close, Off Billings Way, Oregun Ikeja, Lagos",
                href: null,
              },
            ].map((item) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Wrapper
                    {...(item.href ? { href: item.href, "aria-label": `${item.label}: ${item.value}` } : {})}
                    className="group flex flex-col items-center gap-3 text-center"
                  >
                    <div className="bg-secondary/10 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-secondary/20">
                      <item.icon className="text-secondary" size={22} />
                    </div>
                    <div>
                      <p className="font-quicksand text-secondary mb-1 text-xs font-semibold tracking-widest uppercase">
                        {item.label}
                      </p>
                      <p className="font-quicksand text-sm leading-relaxed text-gray-600 md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact form + info section */}
      <section className="bg-white py-20 md:py-28">
        <motion.div
          className="mx-auto grid max-w-7xl items-start gap-14 px-6 md:px-12 lg:grid-cols-2 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Left — text + quick info */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-secondary h-[2px] w-10 rounded-full" />
              <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
                Send A Message
              </span>
            </div>
            <h2 className="font-lora text-alpha text-3xl font-bold md:text-4xl">
              Schedule A Consultation
            </h2>
            <p className="font-quicksand max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
              Run Alpha is based in the heart of Lagos, Nigeria. We welcome you
              to visit our office for a confidential, no-obligation consultation
              about your wealth management needs. Our experienced advisors are
              ready to discuss tailored solutions for your family office,
              private wealth, and investment goals.
            </p>
            <p className="font-quicksand max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
              Whether you are a high-net-worth individual, an entrepreneur, or
              a family seeking comprehensive financial planning, we provide the
              personalized attention your wealth deserves. Every relationship
              begins with a conversation — let us start yours.
            </p>

            {/* What to expect */}
            <div className="space-y-4 border-t border-gray-100 pt-6">
              <h3 className="font-lora text-alpha text-lg font-bold">
                What To Expect
              </h3>
              {[
                "A confidential, no-obligation initial consultation",
                "A tailored assessment of your financial goals and needs",
                "Clear next steps with no pressure or hidden fees",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="bg-secondary mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="font-quicksand text-sm leading-relaxed text-gray-600 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm md:p-8"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-lora text-alpha mb-1 text-xl font-bold md:text-2xl">
              Send Us A Message
            </h3>
            <p className="font-quicksand mb-6 text-sm text-gray-500">
              Fill in the form below and we&apos;ll get back to you within 24
              hours.
            </p>
            <ContactForm variant="light" />
          </motion.div>
        </motion.div>
      </section>

      {/* Map section */}
      <section>
        <iframe
          title="RunAlpha Office Location - Oregun, Lagos, Nigeria"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.35!2d3.3606!3d6.5885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1+Uwa+Close%2C+Off+Billings+Way%2C+Oregun%2C+Lagos!5e0!3m2!1sen!2sng!4v1"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </section>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default ContactUs;
