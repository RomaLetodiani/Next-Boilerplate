import { Activity, ArrowDown, ArrowUp, Briefcase, Clock, Eye, Target, Users } from "lucide-react";

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
          {change} from last month
        </span>
      </div>
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

const DashboardPage = () => (
  <div className="space-y-8">
    {/* Welcome Section */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold">Welcome back, User! 👋</h1>
        <p className="mt-2 max-w-2xl text-indigo-100">
          Here&apos;s what&apos;s happening with your projects today.
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

    {/* Recent Activity */}
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

    {/* Quick Actions */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {[
            { title: "New Project", icon: Briefcase },
            { title: "Invite Team", icon: Users },
            { title: "Set Goals", icon: Target },
            { title: "View Analytics", icon: Activity },
          ].map((action) => (
            <button
              key={action.title}
              className="flex items-center space-x-2 rounded-xl bg-gray-50 p-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              <action.icon className="h-5 w-5" />
              <span>{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Performance</h3>
        <div className="mt-4">
          {/* Add a chart or other visualization here */}
          <div className="h-[200px] rounded-lg bg-gray-50 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  </div>
);

const stats = [
  {
    title: "Total Views",
    value: "1,234",
    change: "12%",
    changeType: "increase" as const,
    icon: Eye,
  },
  {
    title: "Active Users",
    value: "56",
    change: "8%",
    changeType: "increase" as const,
    icon: Users,
  },
  {
    title: "Projects",
    value: "12",
    change: "2%",
    changeType: "decrease" as const,
    icon: Briefcase,
  },
  {
    title: "Engagement",
    value: "89%",
    change: "5%",
    changeType: "increase" as const,
    icon: Activity,
  },
];

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

export default DashboardPage;
