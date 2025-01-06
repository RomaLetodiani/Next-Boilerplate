import { Code2, FileText, GitBranch, MessageSquare } from "lucide-react";

export const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: "code",
      title: "Pushed 3 commits to",
      project: "next-template",
      time: "2 hours ago",
      icon: Code2,
      branch: "main",
    },
    {
      id: 2,
      type: "comment",
      title: "Commented on",
      project: "PR #123: Add dark mode support",
      time: "4 hours ago",
      icon: MessageSquare,
    },
    {
      id: 3,
      type: "pr",
      title: "Created pull request",
      project: "Add authentication flow",
      time: "1 day ago",
      icon: GitBranch,
    },
    {
      id: 4,
      type: "doc",
      title: "Updated documentation for",
      project: "API endpoints",
      time: "2 days ago",
      icon: FileText,
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
        <button className="text-sm text-nowrap text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
          View all
        </button>
      </div>

      <div className="mt-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, index) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {index !== activities.length - 1 && (
                    <span
                      className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 ring-8 ring-white dark:bg-indigo-900/50 dark:ring-gray-800">
                        <activity.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {activity.title}{" "}
                        </span>
                        <span className="font-medium text-indigo-600 dark:text-indigo-400">
                          {activity.project}
                        </span>
                        {activity.branch && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            {activity.branch}
                          </span>
                        )}
                        <span className="whitespace-nowrap">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
