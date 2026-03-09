import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Clock,
} from "lucide-react";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const blogPosts = [
  {
    id: 1,
    title:
      "Investment Management for the Digital Age: Bridging the Gap Between Fintech and Expert Advice",
    excerpt:
      "You've outgrown your savings app. Learn when it's time to move from DIY fintech to professional investment management to secure your financial future.",
    author: "Run Alpha Team",
    date: "2025-09-15",
    readTime: "8 min read",
    category: "Investment Management",
    image: "/desk-from-top-view.jpg",
    imageAlt:
      "Professional investment advisor reviewing digital portfolio management tools at modern desk",
    slug: "investment-management-digital-age",
  },
  {
    id: 2,
    title:
      "The Silent Wealth Killer: How Foreign Exchange (FX) Fluctuations Erode Your Portfolio",
    excerpt:
      "FX fluctuations are one of the least talked about threats to wealth, yet they are often the most damaging. Learn how to protect your portfolio from currency risk.",
    author: "Run Alpha Team",
    date: "2025-09-12",
    readTime: "10 min read",
    category: "FX Risk Management",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Foreign exchange currency trading charts showing portfolio fluctuations and risk analysis",
    slug: "fx-fluctuations-portfolio-risks",
  },
  {
    id: 3,
    title:
      "Hedging Strategies for FX Fluctuations: Protecting Wealth in Nigeria and Beyond",
    excerpt:
      "Discover how hedging strategies for FX fluctuations protect Nigerian and African investors from currency risk. Learn about forwards, swaps, and diversification.",
    author: "Run Alpha Team",
    date: "2025-09-10",
    readTime: "12 min read",
    category: "Hedging Strategies",
    image:
      "/coworkers-addressing-innovation-initiatives-research-development-efforts (1).jpg",
    imageAlt:
      "Investment team discussing hedging strategies and risk management for Nigerian portfolios",
    slug: "hedging-strategies-fx-fluctuations",
  },
  {
    id: 4,
    title:
      "Riding the Storm: How FX Assets Can Protect Nigerian Investment Portfolios",
    excerpt:
      "Facing a volatile market? Learn how a strategic investment management approach using foreign exchange assets can protect and grow your portfolio.",
    author: "Run Alpha Team",
    date: "2025-09-08",
    readTime: "9 min read",
    category: "Portfolio Protection",
    image: "/towfiqu-barbhuiya-joqWSI9u_XM-unsplash.jpg",
    imageAlt:
      "Financial charts showing portfolio protection strategies during market volatility in Nigeria",
    slug: "fx-assets-protect-nigerian-portfolios",
  },
];

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === blogPosts.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === blogPosts.length - 1 ? 0 : prev + 1,
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? blogPosts.length - 1 : prev - 1,
    );

  return (
    <section
      className="bg-gray-50 py-20 md:py-28"
      aria-label="Investment insights and articles"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.header
          className="mb-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            className="mb-4 flex items-center justify-center gap-3"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="bg-secondary h-[2px] w-8 rounded-full" />
            <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
              Blog
            </span>
            <div className="bg-secondary h-[2px] w-8 rounded-full" />
          </motion.div>
          <motion.h2
            className="font-lora text-alpha mb-4 text-3xl font-bold md:text-4xl"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Investment Insights & Market Analysis
          </motion.h2>
          <motion.p
            className="font-quicksand mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Expert insights on investment management, wealth planning, estate
            planning, and portfolio strategies for high-net-worth investors in
            Nigeria. Stay informed with data-driven analysis from Run Alpha's
            wealth advisory team in Lagos.
          </motion.p>
        </motion.header>

        {/* Carousel */}
        <motion.div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          role="region"
          aria-label="Blog posts carousel"
          aria-live="polite"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="w-full flex-shrink-0"
                  aria-hidden={currentIndex !== index}
                >
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-lg">
                    <div className="md:flex">
                      {/* Image */}
                      <div className="relative overflow-hidden md:w-1/2">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full md:min-h-[380px]"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="font-quicksand bg-alpha rounded-full px-3 py-1 text-xs font-semibold text-white">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between p-6 md:w-1/2 md:p-8">
                        <div>
                          <h3 className="font-lora group-hover:text-alpha mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 md:text-2xl">
                            {post.title}
                          </h3>
                          <p className="font-quicksand mb-6 text-sm leading-relaxed text-gray-600 md:text-base">
                            {post.excerpt}
                          </p>
                          <div className="font-quicksand mb-6 flex flex-wrap items-center gap-4 text-xs text-gray-400 md:text-sm">
                            <div className="flex items-center gap-1.5">
                              <User size={14} aria-hidden="true" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} aria-hidden="true" />
                              <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  },
                                )}
                              </time>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock size={14} aria-hidden="true" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <a
                          href={`https://blog.runalpha.co/blog/${post.slug}`}
                          className="text-alpha font-quicksand group/btn inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-secondary"
                          aria-label={`Read more about ${post.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Full Article
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:outline-none md:left-4 md:p-3"
            aria-label={`Previous article: ${blogPosts[currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1].title}`}
          >
            <ChevronLeft size={22} className="text-alpha" aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:outline-none md:right-4 md:p-3"
            aria-label={`Next article: ${blogPosts[currentIndex === blogPosts.length - 1 ? 0 : currentIndex + 1].title}`}
          >
            <ChevronRight size={22} className="text-alpha" aria-hidden="true" />
          </button>

          {/* Dots */}
          <div
            className="mt-8 flex justify-center gap-2"
            role="tablist"
            aria-label="Article navigation"
          >
            {blogPosts.map((post, index) => (
              <button
                key={post.id}
                onClick={() => setCurrentIndex(index)}
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`Go to article ${index + 1}: ${post.title}`}
                className={`h-2 rounded-full transition-all duration-500 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:outline-none ${
                  currentIndex === index
                    ? "bg-alpha w-8"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* View all */}
        <div className="mt-12 text-center">
          <a
            href="https://blog.runalpha.co"
            className="bg-alpha font-quicksand inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110 sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Articles
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
