import { Check, CreditCard, Package, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and small teams",
    features: [
      "Up to 3 team members",
      "Basic analytics",
      "1GB storage",
      "Community support",
      "Basic integrations",
    ],
    current: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing teams and businesses",
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "10GB storage",
      "Priority support",
      "Advanced integrations",
      "Custom domains",
      "API access",
      "SSO Authentication",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Unlimited everything",
      "24/7 dedicated support",
      "Unlimited storage",
      "Custom contracts",
      "SLA guarantee",
      "Custom integrations",
      "On-premise deployment",
      "Dedicated account manager",
    ],
    current: false,
  },
];

const invoices = [
  {
    id: "INV-2024-001",
    date: "Mar 1, 2024",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-2024-002",
    date: "Feb 1, 2024",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-2024-003",
    date: "Jan 1, 2024",
    amount: "$29.00",
    status: "Paid",
  },
];

const BillingPage = () => (
  <div className="space-y-8">
    {/* Header Section */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="mt-2 max-w-2xl text-indigo-100">
          Manage your subscription, payment methods, and billing history
        </p>
      </div>
      <div className="absolute inset-0 bg-grid-modern opacity-10" />
    </div>

    {/* Current Plan */}
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

    {/* Payment Method */}
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Method</h2>
      <div className="mt-4 flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700">
            <CreditCard className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Expires 12/2024</p>
          </div>
        </div>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
          Update
        </button>
      </div>
    </div>

    {/* Available Plans */}
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Available Plans</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border ${
              plan.current
                ? "border-indigo-600 dark:border-indigo-500"
                : "border-gray-200 dark:border-gray-700"
            } p-6`}
          >
            {plan.current && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white dark:bg-indigo-500">
                Current Plan
              </div>
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              {plan.current ? (
                <Package className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              ) : (
                <Zap className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
              {plan.period && (
                <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
              )}
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
            {!plan.current && (
              <button className="mt-6 w-full rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/50">
                Upgrade Plan
              </button>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Billing History */}
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Billing History</h2>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
          Download All
        </button>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Invoice
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Status
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                Download
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900 dark:text-white">
                  {invoice.id}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {invoice.date}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {invoice.amount}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm">
                  <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-900/50 dark:text-green-400">
                    {invoice.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right text-sm">
                  <button className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                    PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default BillingPage;
