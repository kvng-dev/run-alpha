import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Clock,
} from "lucide-react";

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, blogPosts.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20"
      aria-label="Investment insights and articles"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - SEO Optimized */}
        <header className="mb-16 text-center">
          <h2 className="font-lora mb-6 text-2xl font-bold text-gray-900 md:text-4xl">
            <span className="from-alpha to-alpha bg-gradient-to-r bg-clip-text text-transparent">
              Investment Insights & Market Analysis
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Expert insights on investment management, wealth planning, and
            portfolio strategies for Nigerian investors. Stay informed with
            data-driven analysis from RunAlpha's financial advisory team.
          </p>
        </header>

        {/* Carousel Container */}
        <div
          className="relative grid grid-cols-1"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          role="region"
          aria-label="Blog posts carousel"
          aria-live="polite"
        >
          {/* Blog Cards */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="w-full flex-shrink-0 px-4"
                  aria-hidden={currentIndex !== index}
                >
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
                    <div className="md:flex">
                      {/* Image Section with proper alt text */}
                      <div className="relative overflow-hidden md:w-1/2">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-full"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="font-quicksand bg-alpha rounded-full px-3 py-1 text-xs font-semibold text-white">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col justify-between p-8 md:w-1/2">
                        <div className="font-inter">
                          <h3 className="group-hover:text-alpha mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="mb-6 leading-relaxed text-gray-600">
                            {post.excerpt}
                          </p>

                          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <User size={16} aria-hidden="true" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} aria-hidden="true" />
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
                            <div className="flex items-center gap-1">
                              <Clock size={16} aria-hidden="true" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <a
                          href={`https://blog.runalpha.co/${post.slug}`}
                          className="group/btn hover:text-alpha text-alpha inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                          aria-label={`Read more about ${post.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight
                            size={16}
                            className="pt-1 transition-transform duration-300 group-hover/btn:translate-x-1"
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

          {/* Navigation Buttons with better accessibility */}
          <button
            onClick={prevSlide}
            className="group absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none"
            aria-label={`Previous article: ${blogPosts[currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1].title}`}
          >
            <ChevronLeft
              size={24}
              className="text-gray-700 transition-colors duration-300 group-hover:text-blue-600"
              aria-hidden="true"
            />
          </button>

          <button
            onClick={nextSlide}
            className="group absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none"
            aria-label={`Next article: ${blogPosts[currentIndex === blogPosts.length - 1 ? 0 : currentIndex + 1].title}`}
          >
            <ChevronRight
              size={24}
              className="text-gray-700 transition-colors duration-300 group-hover:text-blue-600"
              aria-hidden="true"
            />
          </button>

          {/* Dot Indicators with accessibility */}
          <div
            className="mt-8 flex justify-center gap-3"
            role="tablist"
            aria-label="Article navigation"
          >
            {blogPosts.map((post, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`Go to article ${index + 1}: ${post.title}`}
                className={`h-3 w-3 rounded-full transition-all duration-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none ${
                  currentIndex === index
                    ? "bg-alpha w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="https://blog.runalpha.co"
            className="font-inter to-alpha from-alpha/80 inline-block rounded-full bg-gradient-to-r px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Investment Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
