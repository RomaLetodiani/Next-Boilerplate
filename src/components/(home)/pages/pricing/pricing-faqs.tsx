"use client";

import { FAQSection } from "@/components/common/faq-section";
import { pricingFaqs } from "@/utils/pricings.const";
import Link from "next/link";
import { useState } from "react";

export const PricingFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-16 pt-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="slide-up stagger-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>
      <FAQSection faqs={pricingFaqs} openIndex={openIndex} toggleAnswer={toggleAnswer} />

      {/* CTA Section */}
      <div className="slide-up stagger-2 mt-16 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Still have questions?
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help!
        </p>
        <Link
          href="/contact"
          className="relative z-10 mt-8 inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};
