import { CreditCard } from "lucide-react";

export const PaymentMethod = () => (
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
);
