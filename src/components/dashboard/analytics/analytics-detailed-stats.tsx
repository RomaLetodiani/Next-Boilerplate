export const AnalyticsDetailedStats = () => (
  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Detailed Statistics</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Comprehensive view of your analytics data
      </p>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            {analyticsDetailedStatsTitles.map((title) => (
              <th
                key={title}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {analyticsDetailedStats.map((item) => (
            <tr key={item.source}>
              {analyticsDetailedStatsTitles.map((title) => (
                <td
                  key={title}
                  className="whitespace-nowrap px-4 py-3 text-sm text-gray-900 dark:text-white"
                >
                  {item[title.toLowerCase() as keyof typeof item]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const analyticsDetailedStatsTitles = ["Source", "Users", "Revenue", "Conversion"];

const analyticsDetailedStats = [
  {
    source: "Direct",
    users: "1,234",
    revenue: "$12,345",
    conversion: "2.3%",
  },
  {
    source: "Referral",
    users: "834",
    revenue: "$8,234",
    conversion: "3.1%",
  },
  {
    source: "Social",
    users: "642",
    revenue: "$6,234",
    conversion: "2.8%",
  },
];
