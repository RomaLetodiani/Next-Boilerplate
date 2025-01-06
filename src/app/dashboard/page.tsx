import { ArrowDown, ArrowUp, Briefcase, Clock, Eye, Users } from "lucide-react";

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
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
    <div className="flex items-center justify-between">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
      <Icon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
    </div>
    <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">{value}</p>
    <div className="mt-2 flex items-center">
      {changeType === "increase" ? (
        <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
      ) : (
        <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
      )}
      <span className={`text-sm ${changeType === "increase" ? "text-green-500" : "text-red-500"}`}>
        {change} from last month
      </span>
    </div>
  </div>
);

const ActivityItem = ({
  title,
  time,
  status,
  description,
}: {
  title: string;
  time: string;
  status: "success" | "info" | "warning";
  description: string;
}) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
    <div
      className={`w-2 h-2 rounded-full ${
        status === "success" ? "bg-green-500" : status === "info" ? "bg-blue-500" : "bg-orange-500"
      }`}
    />
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{title}</p>
        <div className="flex items-center">
          <Clock className="w-3 h-3 text-gray-400 dark:text-gray-500 mr-1" />
          <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
    </div>
  </div>
);

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Views",
      value: "1,234",
      change: "12%",
      changeType: "increase" as const,
      icon: Eye,
    },
    {
      title: "Total Users",
      value: "56",
      change: "8%",
      changeType: "increase" as const,
      icon: Users,
    },
    {
      title: "Active Projects",
      value: "12",
      change: "2%",
      changeType: "decrease" as const,
      icon: Briefcase,
    },
  ];

  const activities = [
    {
      title: "New user registration",
      time: "2 hours ago",
      status: "success" as const,
      description: "John Doe created a new account",
    },
    {
      title: "Project milestone completed",
      time: "4 hours ago",
      status: "info" as const,
      description: "Team completed the Q1 objectives",
    },
    {
      title: "System update completed",
      time: "6 hours ago",
      status: "warning" as const,
      description: "Successfully deployed version 2.1.0",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h3>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            View all
          </button>
        </div>
        <div className="space-y-4">
          {activities.map((activity) => (
            <ActivityItem key={activity.title} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
