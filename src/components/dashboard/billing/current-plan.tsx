import { CreditCard } from "lucide-react";

export const CurrentPlan = () => (
  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Current Plan</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          You are currently on the Pro plan
        </p>
      </div>
      <button className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-400 dark:hover:bg-indigo-900">
        Manage Subscription
      </button>
    </div>

    <div className="mt-6">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
        <span className="ml-1 text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <CreditCard className="h-4 w-4" />
        <span>Next billing date: April 1, 2024</span>
      </div>
    </div>
  </div>
);
