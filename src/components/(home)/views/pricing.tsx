import { pricingPlans } from "@/utils/pricings.const";
import { Check } from "lucide-react";

export const Pricing = () => (
  <section
    id="pricing"
    className="relative overflow-hidden border-t border-gray-200 bg-white/50 py-24 dark:border-gray-700 dark:bg-gray-800/50"
  >
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="slide-up stagger-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="slide-up stagger-2 mt-4 text-lg text-gray-600 dark:text-gray-300">
          Choose the perfect plan for your needs. Always know what you&apos;ll pay.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl ${
              plan.highlighted
                ? "bg-gradient-to-b from-indigo-500 to-indigo-600 p-0.5 shadow-xl dark:from-indigo-400 dark:to-indigo-500"
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

              <button
                className={`mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
