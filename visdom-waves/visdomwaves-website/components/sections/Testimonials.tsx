"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    content:
      "VisdomWaves transformed our entire digital infrastructure. Their expertise in AI and automation helped us reduce operational costs by 40% while improving efficiency. Truly exceptional work!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "EduTech Innovations",
    content:
      "Working with VisdomWaves on our EdTech platform was a game-changer. They understood our vision and delivered a solution that exceeded our expectations. Our student engagement has increased by 3x!",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Director of Operations",
    company: "HealthCare Plus",
    content:
      "The telemedicine platform developed by VisdomWaves has revolutionized how we serve our patients. Their attention to detail and commitment to quality is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Williams",
    role: "Founder",
    company: "BuildSmart Construction",
    content:
      "VisdomWaves helped us implement BIM and IoT solutions that have modernized our construction projects. Their team's technical expertise and professionalism are outstanding.",
    rating: 5,
  },
  {
    id: 5,
    name: "Anjali Reddy",
    role: "Temple Administrator",
    company: "Heritage Temple Trust",
    content:
      "The digital donation management system has streamlined our operations beautifully. VisdomWaves understood our unique requirements and delivered a perfect solution that respects our traditions.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-vibrantTeal rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-purple rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-display-sm font-heading text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, idx) => (
                  <FiStar
                    key={idx}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-neutral-700 text-center mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {currentTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="text-lg font-heading font-semibold text-primary-navy">
                  {currentTestimonial.name}
                </h4>
                <p className="text-primary-blue font-medium">
                  {currentTestimonial.role}
                </p>
                <p className="text-neutral-600">{currentTestimonial.company}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
