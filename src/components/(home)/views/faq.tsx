"use client";

import { FAQItem } from "@/types/faq.types";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-white/50 py-24 dark:border-gray-700 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="slide-up button-pop mb-6 inline-block select-none rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
            Support & Help
          </div>
          <h2 className="hero-title text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Common Questions About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              Our Platform
            </span>
          </h2>
          <p className="hero-subtitle mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about our platform and services
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`card-hover overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all dark:border-gray-700 dark:bg-gray-800 ${
                index < 3 ? `stagger-${index + 1}` : ""
              }`}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  {faq.question}
                </dt>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={`h-6 w-6 transform text-indigo-500 transition-transform duration-200 dark:text-indigo-400 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
              <dd
                className={`overflow-hidden px-6 transition-all duration-200 ${
                  openIndex === index ? "max-h-48 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-600 dark:text-gray-300">
            Still have questions?{" "}
            <a
              href="/contact"
              className="button-pop font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>

      {/* Background gradients similar to hero section */}
      <div className="absolute -left-4 top-4 h-72 w-72 rounded-full bg-purple-300/30 opacity-70 blur-3xl filter dark:bg-purple-900/30"></div>
      <div className="absolute -right-4 bottom-4 h-72 w-72 rounded-full bg-indigo-300/30 opacity-70 blur-3xl filter dark:bg-indigo-900/30"></div>
    </section>
  );
};

const faqs: FAQItem[] = [
  {
    question: "Can I integrate with my existing tools?",
    answer:
      "Yes! We offer seamless integration with popular tools like Slack, GitHub, Jira, and more. Our REST API and webhooks allow you to connect with virtually any service you use.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 email support for all plans, with priority support and dedicated account managers for business and enterprise customers. Our documentation is comprehensive, and we offer regular webinars for new users.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan at any time during or after the trial.",
  },
  {
    question: "What's your uptime guarantee?",
    answer:
      "We maintain a 99.99% uptime SLA for all paid plans. Our status page provides real-time updates on system performance and any ongoing incidents.",
  },
  {
    question: "How do updates and new features work?",
    answer:
      "We release updates weekly with new features and improvements. Major features are announced in advance through our product newsletter, and all updates are automatically available to all customers at no additional cost.",
  },
];
