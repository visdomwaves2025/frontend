import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllProducts } from "@/lib/data/products";
import { FiArrowRight, FiCheck, FiCpu, FiBarChart2, FiBook, FiEdit, FiVideo, FiSmartphone, FiHome, FiZap, FiShield, FiWind, FiMic, FiActivity, FiDollarSign, FiCalendar, FiUsers, FiBookmark, FiPackage, FiGlobe, FiTool, FiStar } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Products | VisdomWaves Ready-Made Solutions",
  description:
    "Explore our ready-made software products: EdTech Platform, Home Automation Suite, and Temple Management System. Proven solutions for immediate deployment.",
  openGraph: {
    title: "VisdomWaves Products",
    description: "Proven software solutions ready to deploy",
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-navy to-primary-blue pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                Ready-Made <span className="text-brand-vibrantTeal">Products</span>
              </h1>
              <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                Proven solutions designed for immediate deployment. No development time, just
                results.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {products.map((product, idx) => (
                <div
                  key={product.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold mb-4">
                      {product.category}
                    </div>
                    <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                      {product.name}
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {product.benefits.slice(0, 4).map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="flex items-start">
                          <FiCheck className="w-6 h-6 text-primary-blue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="btn-primary bg-primary-blue hover:bg-primary-navy text-white inline-flex items-center"
                      >
                        Learn More
                        <FiArrowRight className="ml-2" />
                      </Link>
                      <Link
                        href="/contact"
                        className="btn-outline border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-white rounded-2xl shadow-2xl p-8">
                      <h3 className="text-heading-xl font-heading text-primary-navy mb-6">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.features.slice(0, 4).map((feature, featureIdx) => (
                          <div
                            key={featureIdx}
                            className="p-4 bg-neutral-50 rounded-xl hover:bg-primary-blue/5 transition-colors"
                          >
                            <div className="w-10 h-10 mb-3 flex items-center justify-center">
                              {getIconComponent(feature.icon)}
                            </div>
                            <h4 className="font-semibold text-primary-navy mb-2">
                              {feature.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                      <p className="text-primary-blue mt-6 font-semibold">
                        + {product.features.length - 4} more features
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-display-sm font-heading mb-6">
              Don't See What You Need?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              We also build custom solutions tailored to your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="btn-primary bg-white text-primary-blue hover:bg-neutral-100"
              >
                Explore Custom Services
              </Link>
              <Link
                href="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Helper function to get icon component for icon names
function getIconComponent(iconName: string) {
  const iconMap: Record<string, React.ReactNode> = {
    brain: <FiCpu className="w-6 h-6 text-primary-blue" />,
    chart: <FiBarChart2 className="w-6 h-6 text-primary-blue" />,
    building: <FiBook className="w-6 h-6 text-primary-blue" />,
    edit: <FiEdit className="w-6 h-6 text-primary-blue" />,
    video: <FiVideo className="w-6 h-6 text-primary-blue" />,
    mobile: <FiSmartphone className="w-6 h-6 text-primary-blue" />,
    home: <FiHome className="w-6 h-6 text-primary-blue" />,
    zap: <FiZap className="w-6 h-6 text-primary-blue" />,
    shield: <FiShield className="w-6 h-6 text-primary-blue" />,
    wand: <FiTool className="w-6 h-6 text-primary-blue" />,
    mic: <FiMic className="w-6 h-6 text-primary-blue" />,
    activity: <FiActivity className="w-6 h-6 text-primary-blue" />,
    dollar: <FiDollarSign className="w-6 h-6 text-primary-blue" />,
    calendar: <FiCalendar className="w-6 h-6 text-primary-blue" />,
    users: <FiUsers className="w-6 h-6 text-primary-blue" />,
    bookmark: <FiBookmark className="w-6 h-6 text-primary-blue" />,
    package: <FiPackage className="w-6 h-6 text-primary-blue" />,
    globe: <FiGlobe className="w-6 h-6 text-primary-blue" />,
  };
  return iconMap[iconName] || <FiStar className="w-6 h-6 text-primary-blue" />;
}