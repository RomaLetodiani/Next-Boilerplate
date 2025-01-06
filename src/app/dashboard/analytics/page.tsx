import {
  ArrowDown,
  ArrowUp,
  BarChart2,
  DollarSign,
  LineChart,
  PieChart,
  TrendingUp,
  Users,
} from "lucide-react";

const StatCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: React.ElementType;
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y--6 dark:bg-indigo-900" />
    <div className="relative">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className="rounded-lg bg-gray-50 p-2 dark:bg-gray-700">
          <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </div>
      </div>
      <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
      <div className="mt-2 flex items-center">
        {changeType === "increase" ? (
          <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
        ) : (
          <ArrowDown className="mr-1 h-4 w-4 text-rose-500" />
        )}
        <span
          className={`text-sm font-medium ${
            changeType === "increase" ? "text-emerald-500" : "text-rose-500"
          }`}
        >
          {change} vs last month
        </span>
      </div>
    </div>
  </div>
);

const ChartCard = ({
  title,
  description,
  icon: Icon,
  chart,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  chart: React.ReactNode;
}) => (
  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <div className="rounded-lg bg-gray-50 p-2 dark:bg-gray-700">
        <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </div>
    </div>
    {chart}
  </div>
);

const AnalyticsPage = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,234",
      change: "12%",
      changeType: "increase" as const,
      icon: DollarSign,
    },
    {
      title: "Active Users",
      value: "2,345",
      change: "8%",
      changeType: "increase" as const,
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "2%",
      changeType: "decrease" as const,
      icon: TrendingUp,
    },
    {
      title: "Avg. Order Value",
      value: "$89.34",
      change: "5%",
      changeType: "increase" as const,
      icon: BarChart2,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Analytics Overview</h1>
          <p className="mt-2 max-w-2xl text-indigo-100">
            Track your performance and growth with detailed insights
          </p>
        </div>
        <div className="absolute inset-0 bg-grid-modern" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Revenue Overview"
          description="Monthly revenue performance"
          icon={LineChart}
          chart={
            <div className="relative h-[300px] w-full rounded-lg bg-gray-50 dark:bg-gray-700">
              {/* Replace with actual chart component */}
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">Revenue Chart</p>
              </div>
            </div>
          }
        />

        <ChartCard
          title="User Distribution"
          description="Active users by region"
          icon={PieChart}
          chart={
            <div className="relative h-[300px] w-full rounded-lg bg-gray-50 dark:bg-gray-700">
              {/* Replace with actual chart component */}
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">Distribution Chart</p>
              </div>
            </div>
          }
        />
      </div>

      {/* Detailed Stats */}
      <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Detailed Statistics
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Comprehensive view of your analytics data
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Source
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Users
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Revenue
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Conversion
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
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
              ].map((item) => (
                <tr key={item.source}>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {item.source}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {item.users}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {item.revenue}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {item.conversion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
