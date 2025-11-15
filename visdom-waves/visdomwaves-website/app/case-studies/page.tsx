import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  FiCode,
  FiTrendingUp,
  FiZap,
  FiUsers,
  FiTarget,
  FiCpu,
  FiSmartphone,
  FiCloud,
  FiShield,
  FiArrowRight,
  FiPlay
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Our Work & Capabilities | VisdomWaves Solutions Portfolio",
  description: "Explore VisdomWaves' product portfolio and development capabilities. From our live EduWave platform to custom solutions across AI, web, and mobile development.",
  openGraph: {
    title: "VisdomWaves Work & Capabilities",
    description: "Real products and proven capabilities from a fresh startup perspective",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-navy to-primary-blue pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                Our Work & <span className="text-brand-vibrantTeal">Capabilities</span>
              </h1>
              <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                From live products to custom solutions - see what we've built and what we can create for you
              </p>
            </div>
          </div>
        </section>

        {/* Live Product Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                Our Live Product
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Real, working solutions you can try right now
              </p>
            </div>

            {/* EduWave Platform Card */}
            <div className="card border-2 border-primary-blue/20 hover:shadow-2xl transition-all max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl">
                      <FiCode className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-heading-xl font-heading text-primary-navy">
                        EduWave Platform
                      </h3>
                      <span className="text-sm text-green-600 font-semibold">✓ Live & Operational</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-lg leading-relaxed">
                    AI-powered Learning Management System designed for modern educational institutions.
                    Built from the ground up with scalability, personalization, and user experience in mind.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary-navy">Key Features</h4>
                    <ul className="space-y-2">
                      {[
                        "Personalized learning paths with AI recommendations",
                        "Real-time analytics and progress tracking",
                        "Interactive course creation tools",
                        "Seamless integration capabilities",
                        "Mobile-responsive design",
                        "Cloud-based infrastructure"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start text-neutral-700">
                          <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "EdTech", "React", "Next.js", "Cloud-Based", "TypeScript"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl p-8 text-white flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-heading font-bold mb-4">
                      Try It Live
                    </h4>
                    <p className="text-white/90 mb-6">
                      Experience our EdTech platform firsthand. See the interface,
                      explore features, and understand the user experience we deliver.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold">Development</span>
                        <span className="text-sm">100%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-vibrantTeal rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>

                    <Link
                      href="https://visdom-wave-main-iu5j.vercel.app/"
                      target="_blank"
                      className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 w-full text-center inline-flex items-center justify-center"
                    >
                      <FiPlay className="mr-2" />
                      Launch Live Demo
                    </Link>

                    <Link
                      href="/products/edtech-platform"
                      className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue w-full text-center"
                    >
                      View Full Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Capabilities */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                What We Build
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our technical expertise spans the full stack of modern development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiCpu className="w-8 h-8" />,
                  title: "AI & Machine Learning",
                  description: "Intelligent systems with ML algorithms, predictive analytics, and automated decision-making",
                  capabilities: ["Natural Language Processing", "Recommendation Systems", "Predictive Analytics", "Computer Vision"]
                },
                {
                  icon: <FiCode className="w-8 h-8" />,
                  title: "Web Applications",
                  description: "Enterprise-grade web platforms built with modern frameworks and best practices",
                  capabilities: ["React & Next.js", "Responsive Design", "Real-time Features", "API Development"]
                },
                {
                  icon: <FiSmartphone className="w-8 h-8" />,
                  title: "Mobile Development",
                  description: "Native and cross-platform mobile apps for iOS and Android",
                  capabilities: ["React Native", "Cross-platform", "Offline-first", "Push Notifications"]
                },
                {
                  icon: <FiCloud className="w-8 h-8" />,
                  title: "Cloud Solutions",
                  description: "Scalable cloud infrastructure and deployment strategies",
                  capabilities: ["AWS/Azure/GCP", "Auto-scaling", "Microservices", "CI/CD Pipelines"]
                },
                {
                  icon: <FiShield className="w-8 h-8" />,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security measures and industry compliance",
                  capabilities: ["Data Encryption", "GDPR Compliance", "Secure APIs", "Audit Logging"]
                },
                {
                  icon: <FiTrendingUp className="w-8 h-8" />,
                  title: "Digital Transformation",
                  description: "End-to-end modernization of business processes and systems",
                  capabilities: ["Process Automation", "System Integration", "Legacy Migration", "Analytics"]
                }
              ].map((capability, idx) => (
                <div key={idx} className="card hover:shadow-xl transition-all group">
                  <div className="p-4 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl inline-block mb-4 text-white">
                    {capability.icon}
                  </div>
                  <h3 className="text-heading-lg font-heading text-primary-navy mb-3 group-hover:text-primary-blue transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.capabilities.map((cap, capIdx) => (
                      <li key={capIdx} className="flex items-center text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                How We Work
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our startup approach combines agility with deep technical expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery & Planning",
                  description: "Deep dive into your requirements, goals, and technical constraints. We map out the complete solution architecture.",
                  icon: <FiTarget className="w-6 h-6" />
                },
                {
                  number: "02",
                  title: "Rapid Prototyping",
                  description: "Quick iterations to validate ideas and get early feedback. See your vision come to life in weeks, not months.",
                  icon: <FiZap className="w-6 h-6" />
                },
                {
                  number: "03",
                  title: "Development & Testing",
                  description: "Clean code, best practices, and continuous testing. We build for scale and maintainability from day one.",
                  icon: <FiCode className="w-6 h-6" />
                },
                {
                  number: "04",
                  title: "Launch & Support",
                  description: "Smooth deployment and ongoing support. We don't disappear after launch - we ensure your success.",
                  icon: <FiUsers className="w-6 h-6" />
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="card hover:shadow-xl transition-all h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-5xl font-bold text-primary-blue/20">
                        {step.number}
                      </div>
                      <div className="p-2 bg-primary-blue/10 rounded-lg text-primary-blue">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-heading-lg font-heading text-primary-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-blue/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Expertise */}
        <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-heading mb-4">
                Backed by Deep Expertise
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                While we're a new startup, our team brings decades of combined experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-white/80 text-lg">Years Combined Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-5xl font-bold mb-2">6+</div>
                <div className="text-white/80 text-lg">Industry Verticals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-white/80 text-lg">Code Quality Focus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/80 text-lg">Dedicated Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-display-sm font-heading text-primary-navy mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary bg-primary-blue hover:bg-primary-navy text-white inline-flex items-center justify-center"
              >
                Start Your Project
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/products"
                className="btn-outline border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}