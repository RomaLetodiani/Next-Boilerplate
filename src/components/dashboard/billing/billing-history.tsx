export const BillingHistory = () => (
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
            {invoiceTableHeaderTitles.map((title, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                {title}
              </th>
            ))}
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
);

const invoiceTableHeaderTitles = ["Invoice", "Date", "Amount", "Status", "Download"];

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
