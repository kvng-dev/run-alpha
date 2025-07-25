import { FaLinkedin } from "react-icons/fa";

export const navLinksItems = [
  { name: "Home", href: "/", id: 1 },
  { name: "About Us", href: "/aboutus", id: 2 },
  { name: "What we Offer", href: "/offerings", id: 3 },
  { name: "Team", href: "/team", id: 4 },
  { name: "Contact Us", href: "/contact", id: 5 },
];

export const socials = [
  {
    id: 1,
    href: "",
    name: "LinkedIn",
    icon: FaLinkedin,
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Ajoke Toluwaloju",
    title: "Head, Fund Management",
    quote: `Ajoke Toluwaloju has over 6 years of experience spanning accounting, audit, tax, research,
      and fund and portfolio management. She is experienced in formulating complex investment
      management solutions to institutional investors and high net worth investors.
      Previously, she worked at FBNQuest Asset Management, curating investment/trading
      strategies for over NGN300bn in funds under management.`,
    qualification: {
      degree: "BSc. Accounting University of Lagos, Nigeria",
      institute:
        "Institute of Certified Chartered Accountant of Nigeria (ACCA)",
    },
    image: "/team-assets/Picture3.jpg",
  },
  {
    id: 2,
    name: "Ayooluwade Ogunwale",
    title: "Head, Fixed Income/Macro Strategy",
    quote: `Ayooluwade Ogunwale has over 4 years of experience in the financial services industry,
      spanning Research, Portfolio/Fund management. He leverages macro data to maximize
      financial returns by identifying optimal investment opportunities.
      Prior to joining Run Alpha, he worked at FBNQuest Asset Management Ltd where he
      developed macro-driven investment strategies for NGN500bn in funds managed under his
      purview.`,
    image: "/team-assets/Picture1.jpg",
    qualification: {
      degree: "BSc. Accounting,Ekiti State University, Nigeria",
      institute: "Institute of Chartered Accountant of Nigeria (ACA)",
    },
  },
  {
    id: 3,
    name: "Reanat Adamson",
    title: "Head, Finance",
    quote: `Reanat Adamson has over six years in the Audit practice specializing in the financial
      statement audits of corporate listed and regulated entities in the UK.
      With extensive experience in auditing complex financial structures and internal controls, she
      has developed a deep understanding of regulatory requirements, risk assessment, and
      compliance within highly regulated industries.
`,
    image: "/team-assets/Picture4.jpg",
    qualification: {
      degree: "B.Sc. Accounting, University of Swansea, England",
      institute:
        "Member, Association of Certified Chartered Accountants (ACCA)",
    },
  },
  {
    id: 4,
    name: "Folashade Adedun",
    title: "Head, Risk Management",
    quote: `Folashade has over six years in Risk Management specializing in developing compliance
      initiatives for Systemically Important Banks and leading regulatory change management
      initiatives for FAANG companies.`,
    image: "/team-assets/Picture2.jpg",
    qualification: {
      degree: "B.Sc. Accounting, University of Lagos, Nigeria",
    },
  },
  {
    id: 6,
    name: "Tochukwu Njoku",
    title: "Head, Business Development",
    quote: `Tochukwu is a dynamic business development strategist with a strong track record in scaling and unlocking new revenue streams and high-impact partnerships.
      He previously worked with MoetHennessy Nigeria and CNN Nigeria as the country representatives, driving market expansion plans and strategic partnerships.",
`,
    image: "/team-assets/Picture6.png",
    qualification: {},
  },
];

export default teamMembers;

export const strategies = [
  {
    id: "family-office", // Added an id field
    title: "Family Office",
    description: `Create lasting legacies and ensure seamless wealth transfer with our comprehensive family office services and financial planning to suit your needs.`,
    image: "/pexels-rdne-7951553.jpg",
  },
  {
    id: "private-wealth", // Added an id field
    title: "Private Wealth",
    description: `Experience personalized private wealth management and expert investment advisory designed exclusively for discerning high-net-worth individuals.`,
    image: "/pexels-pixabay-235990.jpg",
  },
  {
    id: "hedge-fund", // Added an id field
    title: "Hedge Fund",
    description: `Diversify your portfolio and pursue enhanced risk-adjusted returns with our access to sophisticated hedge fund investment opportunities.`,
    image: "/pexels-rickyrecap-2295433.jpg",
  },
  {
    id: "fx-currency-solution", // Added an id field
    title: "FX Currency Solution",
    description:
      "Proactively manage currency exposures and optimize international transactions with our strategic foreign exchange risk management solutions.",
    image: "/pexels-pixabay-210600.jpg",
  },
];

export const statisticsData = {
  founded: {
    year: 2021,
    description:
      "We have crafted winning investing strategies which have demonstrated resilience and adaptability across market cycles and attracted a diverse group of high-net-worth individuals.",
  },
  assets: {
    title: "Assets Management",
    amount: 1500000000,
    description:
      "We currently manage over NGN 1.50bn in assets, driving strong returns for our investors.",
  },
  clients: {
    title: "Client Retention Rate",
    percent: 95,
    description:
      "Our client rate is a testament to our commitment to excellence, reflecting trust and satisfaction within our service",
  },
  team: {
    title: "Experienced Team",
    count: 6,
    description:
      "Our team of experts is dedicated to providing you with the best investment opportunities.",
  },
  years: {
    title: "Cumulative Experience",
    count: 36,
    description:
      "With a combined 36 years of experience, our team excels at navigating complex market conditions.",
  },
};

export const heroSectionData = {
  about: {
    title: "ABOUT US",
    backgroundImage: "/pexels.jpg",
    description:
      "Headquartered in Lagos, Nigeria, a leading investment and financial advisory partner for discerning high-net-worth individuals in Africa and the diaspora, we believe the future of investment opportunities lies at the intersection of technology and human ingenuity. We strive to create a platform that empowers individuals to make informed decisions through data-driven investment strategies while fostering a culture of continuous learning and growth within our financial advisory services.",
  },
  strategies: {
    title: "OFFERINGS",
    backgroundImage: "/skyline.jpg",
    description:
      "Our offerings are built on data-driven insights, advanced algorithms, and expert analysis. We harness the power of artificial intelligence and machine learning to optimize risk management and investment opportunities, refining our strategies to provide comprehensive investment and financial advisory solutions in Africa.",
  },
  teams: {
    title: "MEET OUR TEAM",
    backgroundImage: "/pexels-edmond-dantes-8553867.jpg",
    description:
      "Our team is comprised of seasoned professionals with diverse backgrounds and expertise. We are dedicated to providing innovative solutions that drive success for our clients.",
  },
  contact: {
    title: "Contact Us",
    backgroundImage: "/pexels-mart-production-7709242.jpg",
    description: "Get Intouch with us today",
  },

  hedgefund: {
    title: "Hedge Fund",
    backgroundImage: "/pexels-googledeepmind-17485658.jpg",
    description:
      "At Run Alpha, we provide strategic foreign exchange (FX) solutions to help clients manage currency exposure, optimize international transactions, and hedge against market volatility.",
  },
};

export const strategiesData = [
  {
    id: "family-office",
    title: "Family Office",
    description: `
      The event that will go down in history as the most significant transfer of wealth is right around the corner.
      The great wealth transfer is happening. Globally, it is projected that baby boomers will transfer more than USD60 trillion in wealth to millennials over the course of the next decade.
      <br />
      Beyond investment management, we provide an exclusive suite of family office services, ensuring a smooth transition of wealth to Millennials and Gen Z and aligning investment strategies with the family’s evolving investment preferences. Our services include:
    `,
    services: [
      {
        id: 1,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify"><span class="font-bold">Wealth Planning and Preservation</span> – structuring portfolios for long-term financial security.</p>`,
      },
      {
        id: 2,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify"><span class="font-bold">Estate and Planning Succession</span> – ensuring seamless wealth transfer across
    generations.</p>`,
      },
      {
        id: 3,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify"><span class="font-bold">Tax and Legal Coordination</span> – collaborating with top-tier professionals for optimal
    financial efficiency.</p>`,
      },
      {
        id: 4,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify"><span class="font-bold">Philanthropy and Legacy Building</span> – setting common family values and crafting
    strategies to align wealth with purpose.</p>`,
      },
    ],
    image: "/pexels-rdne-7951553.jpg",
  },
  {
    id: "private-wealth",
    title: "Private Wealth",
    description: `
      Your wealth is more than money. Our Private Wealth services are designed to help High-Net-Worth Individuals and Ultra High-Net-Worth Individuals navigate the complexities of wealth management with confidence, transparency, and clarity.
      <br />
      We provide personalized strategies that focus on liquidity management, financial planning, and long-term wealth preservation, ensuring that your financial resources are optimized for both immediate needs and future goals. We help clients develop:
    `,
    services: [
      {
        id: 1,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify"><span class="font-bold">Strategic Liquidity Management</span> – optimizing cash flow and liquidity to meet your immediate and future needs.</p>`,
      },
      {
        id: 2,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify"><span class="font-bold">Investment Risk Management</span> – managing and mitigating risks in investment portfolios to ensure stability.</p>`,
      },
      {
        id: 3,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify"><span class="font-bold">Access to Customized Lending Solutions</span> – offering tailored credit solutions for wealth management.</p>`,
      },
      {
        id: 4,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify"><span class="font-bold">Comprehensive Financial Planning</span> – helping clients develop long-term, sustainable wealth strategies.</p>`,
      },
    ],

    image: "/pexels-pixabay-235990.jpg",
  },

  {
    id: "hedge-fund",
    title: "Hedge Fund",
    description: `
    Please note that the offering cannot proceed until clients have reviewed the disclaimer.
    For more information, kindly review the disclaimer or contact us directly.
  `,
    services: [],
    image: "/pexels-rickyrecap-2295433.jpg",
    disclaimerButton: true,
  },
  {
    id: "fx-currency-solution",
    title: "FX Currency Solution",
    description: `
      At Run Alpha, we provide strategic foreign exchange (FX) solutions to help clients manage currency exposure, optimize international transactions, and hedge against market volatility.
      <br />
      Whether you are an investor, business owner, or family office managing global wealth, our FX services are designed to enhance financial efficiency and mitigate currency risks. Our FX Currency Solutions include:
    `,
    services: [
      {
        id: 1,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify">Currency Risk Management</p> `,
      },
      {
        id: 2,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify">Global Payments and Investment Transactions</p>`,
      },
      {
        id: 3,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify">FX Liquidity Management</p>`,
      },
      {
        id: 4,
        desc: `<p class="text-lg md:text-lg xl:text-xl leading-6 md:leading-8 font-quicksand text-justify">Cross-border transactions facilitation</p>`,
      },
    ],
    image: "/pexels-pixabay-210600.jpg",
  },
];

export const aboutSections = [
  {
    title: "Driven by Alpha. Powered by Data",
    text: `True alpha comes from resilience, innovation, adaptability, and a relentless pursuit of excellence. That's why we combine robust institutional investment services expertise with a boutique, client-centric approach, offering tailored wealth management solutions that align with your financial goals. Whether you’re navigating volatile markets or securing multi-generational wealth through advanced financial planning, our commitment remains unwavering: to protect, grow, and optimize your financial legacy with integrity, transparency, and a long-term perspective, consistently aiming for risk-adjusted returns and capital growth.`,
    imageUrl: "/about/pexels-filipgrobgaard-28426645.jpg",
  },
  {
    title: "Proven Performance, Trusted by Investors",
    text: `At Run Alpha, our commitment to delivering consistent capital growth has led to a growing track record of success and increasing investor confidence in investment management in Africa. As our performance continues to strengthen, we have attracted a diverse group of high-net-worth individuals and institutional investors. By refining our portfolio strategies and leveraging data-driven insights, we have further optimized risk-adjusted performance and portfolio optimization, deepening trust among our investors and partners. Our dedication to excellence and innovation has positioned us as a trusted partner in investment advisory in Africa, driving long-term growth and success for our clients.`,
    imageUrl: "/two-african-businessman-sitting-outside-cafe.jpg",
  },
  {
    title: "Our Investment Philosophy",
    text: `Our philosophy is centered on generating consistent, risk-adjusted returns by employing a dynamic mix of fundamental research, quantitative analysis, and macroeconomic insights. Our investment strategies span across equities, fixed income, derivatives, and alternative assets such as hedge fund investment opportunities, providing diversified exposure while maintaining a strong focus on risk management and portfolio optimization. By staying adaptable and offering sustainable investment solutions, we aim to protect and grow our client’s wealth over the long term. Our quantitative investment strategies are designed to deliver alpha in any market environment, providing a competitive edge and driving long-term success for our clients' financial security and capital growth.`,
    imageUrl: "/pexels-googledeepmind-17485658.jpg",
  },
  {
    title: "Building for the future",
    text: `Investor confidence is built on transparency, integrity, and a relentless focus on delivering results for clients seeking investment management in Africa and the diaspora. We maintain open communication, providing insights and strategic financial advisory guidance to our clients. With a proven track record of success, we continue to refine and expand our approach, ensuring alignment with evolving market opportunities for comprehensive wealth management. As we grow, our mission remains unchanged: to generate data-driven alpha and create lasting value for our client's long-term and short-term investments. At Run Alpha, our momentum is strong, our strategies are refined, and our clients’ trust continues to grow as we scale new heights; we remain focused on delivering excellence and positioning our clients for sustained success.`,
    imageUrl: "/unsplash.jpg",
  },
];

export const logos = [
  "/strategies/growth.jpg",
  "/strategies/valueinvestment.jpg",
  "/strategies/splash.jpg",
  "/strategies/spooky.jpg",
  "/strategies/strategy-one.jpg",
  "/strategies/redd-francisco.jpg",
  "/strategies/incomeinvestment.jpg",
];
