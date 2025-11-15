"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiSearch, FiX, FiFileText, FiBriefcase, FiLayers } from "react-icons/fi";
import { getAllPosts } from "@/lib/data/blogPosts";
import { getAllIndustries } from "@/lib/data/industries";

interface SearchResult {
  type: "blog" | "industry" | "service" | "page";
  title: string;
  description: string;
  url: string;
  category?: string;
}

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [blogContent, setBlogContent] = useState<SearchResult[]>([]);

  // All searchable content
  const allContent: SearchResult[] = [
    // Pages
    { type: "page", title: "About Us", description: "Learn about VisdomWaves Innovations", url: "/about" },
    { type: "page", title: "Services", description: "Explore our technology services", url: "/services" },
    { type: "page", title: "Contact", description: "Get in touch with our team", url: "/contact" },
    { type: "page", title: "Case Studies", description: "View our success stories", url: "/case-studies" },

    // Services
    {
      type: "service",
      title: "AI & Automation",
      description: "Transform your business with intelligent automation",
      url: "/services#ai-automation",
      category: "AI",
    },
    {
      type: "service",
      title: "Digital Transformation",
      description: "Modernize your business operations",
      url: "/services#digital-transformation",
      category: "Consulting",
    },
    {
      type: "service",
      title: "Web Development",
      description: "Build scalable, high-performance web applications",
      url: "/services#web-development",
      category: "Development",
    },
    {
      type: "service",
      title: "Mobile App Development",
      description: "Create engaging mobile experiences",
      url: "/services#mobile-development",
      category: "Development",
    },
    {
      type: "service",
      title: "IT Consulting",
      description: "Expert guidance on technology strategy",
      url: "/services#it-consulting",
      category: "Consulting",
    },
    {
      type: "service",
      title: "Design Services",
      description: "User-centric design solutions",
      url: "/services#design",
      category: "Design",
    },
    {
      type: "service",
      title: "Cloud Solutions",
      description: "Leverage cloud computing for scalability",
      url: "/services#cloud",
      category: "Infrastructure",
    },
    {
      type: "service",
      title: "Cybersecurity",
      description: "Protect your digital assets",
      url: "/services#security",
      category: "Security",
    },
  ];

  // Load blog posts asynchronously
  useEffect(() => {
    async function loadBlogPosts() {
      try {
        const posts = await getAllPosts();
        const industries = getAllIndustries();

        const blogResults: SearchResult[] = posts.map((post) => ({
          type: "blog" as const,
          title: post.title,
          description: post.excerpt,
          url: `/blog/${post.slug}`,
          category: post.category,
        }));

        const industryResults: SearchResult[] = industries.map((industry) => ({
          type: "industry" as const,
          title: industry.name,
          description: industry.tagline,
          url: `/industries/${industry.slug}`,
          category: "Industries",
        }));

        setBlogContent([...blogResults, ...industryResults]);
      } catch (error) {
        console.error('Error loading search content:', error);
      }
    }

    loadBlogPosts();
  }, []);

  const searchContent = [...allContent, ...blogContent];

  // Perform search
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const searchQuery = query.toLowerCase();

    const filtered = searchContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category?.toLowerCase().includes(searchQuery)
    );

    // Simulate search delay for better UX
    setTimeout(() => {
      setResults(filtered.slice(0, 10)); // Limit to 10 results
      setIsSearching(false);
    }, 200);
  }, [query, blogContent]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const getIcon = (type: string) => {
    switch (type) {
      case "blog":
        return <FiFileText className="w-5 h-5 text-primary-blue" />;
      case "industry":
        return <FiBriefcase className="w-5 h-5 text-primary-purple" />;
      case "service":
        return <FiLayers className="w-5 h-5 text-brand-vibrantTeal" />;
      default:
        return <FiSearch className="w-5 h-5 text-neutral-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center p-4 border-b border-neutral-200">
                <FiSearch className="w-6 h-6 text-neutral-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search for services, industries, articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 text-lg outline-none"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="ml-3 p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <FiX className="w-5 h-5 text-neutral-600" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.trim().length < 2 ? (
                  <div className="p-8 text-center text-neutral-500">
                    <FiSearch className="w-12 h-12 mx-auto mb-3 text-neutral-300" />
                    <p>Start typing to search...</p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="inline-block w-8 h-8 border-4 border-primary-blue border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-3 text-neutral-600">Searching...</p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-8 text-center text-neutral-500">
                    <p>No results found for "{query}"</p>
                    <p className="text-sm mt-2">Try different keywords or browse our pages</p>
                  </div>
                ) : (
                  <div className="py-2">
                    {results.map((result, idx) => (
                      <Link
                        key={idx}
                        href={result.url}
                        onClick={onClose}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="mt-1">{getIcon(result.type)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-primary-navy truncate">
                                {result.title}
                              </h4>
                              <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-xs rounded">
                                {getTypeLabel(result.type)}
                              </span>
                            </div>
                            <p className="text-sm text-neutral-600 line-clamp-1">
                              {result.description}
                            </p>
                            {result.category && (
                              <p className="text-xs text-neutral-500 mt-1">{result.category}</p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Links */}
              {query.trim().length < 2 && (
                <div className="p-4 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-sm font-semibold text-neutral-700 mb-2">Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {["AI Solutions", "Web Development", "Healthcare", "EdTech", "Blog"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1 bg-white text-sm text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Search;
