import { pricingFaqs, pricingPlans } from "@/utils/pricings.const";
import { Check } from "lucide-react";
import Link from "next/link";

const PricingPage = () => (
  <>
    {/* Header */}
    <div className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-modern opacity-5" />
      <div className="relative mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Choose the perfect plan for your needs. All plans include a 14-day free trial.
        </p>
      </div>
    </div>

    {/* Pricing Plans */}
    <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl ${
              plan.highlighted
                ? "bg-gradient-to-b from-indigo-500 to-purple-600 p-0.5 shadow-xl dark:from-indigo-400 dark:to-purple-500"
                : "border border-gray-200 dark:border-gray-700"
            }`}
          >
            <div className="h-full rounded-2xl bg-white p-8 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-1 text-lg text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.highlighted ? "/auth/register" : "/contact"}
                className={`mt-8 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mx-auto mt-24 max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Frequently asked questions
      </h2>
      <div className="mt-12">
        <dl className="space-y-8">
          {pricingFaqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </dt>
              <dd className="mt-4 text-gray-600 dark:text-gray-300">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Still have questions?
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Contact Support
        </Link>
      </div>
    </div>
  </>
);

export default PricingPage;
