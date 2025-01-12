"use client";

import { FAQItem } from "@/types/faq.types";
import { ChevronDownIcon } from "lucide-react";

type FAQSectionProps = {
  faqs: FAQItem[];
  openIndex: number | null;
  toggleAnswer: (index: number) => void;
};

// TODO: Make this a component without client side with css only for the animation and the accordion effect
export const FAQSection = ({ faqs, openIndex, toggleAnswer }: FAQSectionProps) => (
  <div className="mx-auto mt-16 max-w-3xl space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="card-hover slide-up overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
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
);
