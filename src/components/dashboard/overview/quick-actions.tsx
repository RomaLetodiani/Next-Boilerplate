import { Briefcase, Target, Users } from "lucide-react";

import { Activity } from "lucide-react";

export const QuickActions = () => (
  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
    <div className="mt-4 grid grid-cols-2 gap-4">
      {actions.map((action) => (
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
);

const actions = [
  { title: "New Project", icon: Briefcase },
  { title: "Invite Team", icon: Users },
  { title: "Set Goals", icon: Target },
  { title: "View Analytics", icon: Activity },
];
