import { Clock } from "lucide-react";

export const RecentActivity = () => (
  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Latest actions and updates from your team
        </p>
      </div>
      <button className="rounded-lg text-nowrap bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-400 dark:hover:bg-indigo-900">
        View all
      </button>
    </div>
    <div className="space-y-4">
      {activities.map((activity) => (
        <ActivityItem key={activity.title} {...activity} />
      ))}
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
  <div className="group relative rounded-xl bg-white p-4 shadow-sm transition-all hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50">
    <div className="flex items-start space-x-4">
      <div
        className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${
          status === "success"
            ? "bg-emerald-500"
            : status === "info"
              ? "bg-blue-500"
              : "bg-amber-500"
        }`}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
          <div className="flex items-center space-x-2">
            <Clock className="h-3 w-3 text-gray-400 dark:text-gray-500" />
            <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

const activities = [
  {
    title: "New user registration",
    time: "2 hours ago",
    status: "success" as const,
    description: "John Doe created a new account and completed onboarding",
  },
  {
    title: "Project milestone completed",
    time: "4 hours ago",
    status: "info" as const,
    description: "Team completed the Q1 objectives ahead of schedule",
  },
  {
    title: "System update completed",
    time: "6 hours ago",
    status: "warning" as const,
    description: "Successfully deployed version 2.1.0 with zero downtime",
  },
  {
    title: "New feature launched",
    time: "12 hours ago",
    status: "success" as const,
    description: "Dark mode support is now available across all pages",
  },
];
