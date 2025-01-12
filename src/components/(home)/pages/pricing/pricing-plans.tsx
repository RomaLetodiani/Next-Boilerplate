import { pricingPlans } from "@/utils/pricings.const";
import { Check } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const PricingPlans = () => (
  <section id="pricing" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-3">
      {pricingPlans.map((plan, index) => (
        <div
          key={plan.name}
          className={twMerge(
            "slide-left relative rounded-2xl",
            plan.highlighted
              ? "bg-gradient-to-b from-indigo-500 to-purple-600 p-0.5 shadow-xl dark:from-indigo-400 dark:to-purple-500"
              : "border border-gray-200 dark:border-gray-700",
            index === 0 ? "stagger-3" : "",
            index === 1 ? "stagger-2" : "",
            index === 2 ? "stagger-1" : "",
          )}
        >
          <div className="h-full overflow-hidden rounded-2xl bg-white p-8 dark:bg-gray-800">
            <h3 className="slide-left stagger-1 text-xl font-semibold text-gray-900 dark:text-white">
              {plan.name}
            </h3>
            <div className="slide-left stagger-2 mt-4 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {plan.price}
              </span>
              {plan.period && (
                <span className="ml-1 text-lg text-gray-500 dark:text-gray-400">{plan.period}</span>
              )}
            </div>
            <p className="slide-left stagger-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
              {plan.description}
            </p>

            <ul className="mt-8 space-y-4">
              {plan.features.map((feature, index) => (
                <li
                  key={feature}
                  className={twMerge(
                    "slide-up flex items-start",
                    !!(index % 2) ? "stagger-4" : "stagger-5",
                  )}
                >
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.highlighted ? "/login" : "/contact"}
              className={twMerge(
                "slide-up stagger-4 mt-8 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors",
                plan.highlighted
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  : "bg-gray-50 text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
              )}
            >
              {plan.cta}
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);
