import { pricingPlans } from "@/utils/pricings.const";
import { Check, Package, Zap } from "lucide-react";

export const AvailablePlans = () => (
  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Available Plans</h2>
    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      {pricingPlans.map((plan, index) => (
        <div
          key={plan.name}
          className={`relative rounded-xl border ${
            index === 1
              ? "border-indigo-600 dark:border-indigo-500"
              : "border-gray-200 dark:border-gray-700"
          } p-6`}
        >
          {index === 1 && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white dark:bg-indigo-500">
              Current Plan
            </div>
          )}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
            {index === 1 ? (
              <Package className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            ) : (
              <Zap className="h-5 w-5 text-gray-400" />
            )}
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
            {plan.period && <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>}
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
          <ul className="mt-6 space-y-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <Check className="mr-3 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                {feature}
              </li>
            ))}
          </ul>
          {index !== 1 && (
            <button className="mt-6 w-full rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/50">
              Upgrade Plan
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);
