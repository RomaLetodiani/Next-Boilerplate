"use client";

import { Bell, Check, X } from "lucide-react";
import { useState } from "react";

export const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "New project invitation",
      description: "John Doe invited you to Project X",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      title: "System update",
      description: "New features are now available",
      time: "1h ago",
      unread: true,
    },
    {
      id: 3,
      title: "Task completed",
      description: "Homepage redesign is now complete",
      time: "2h ago",
      unread: false,
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
      >
        <span className="sr-only">View notifications</span>
        <Bell className="h-6 w-6" />
        {notifications.some((n) => n.unread) && (
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h2>
            <button className="text-xs text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
              Mark all as read
            </button>
          </div>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start space-x-4 rounded-lg p-2 transition-colors ${
                  notification.unread
                    ? "bg-indigo-50 dark:bg-indigo-900/20"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                }`}
              >
                <div className="flex-1">
                  <p
                    className={`text-sm ${
                      notification.unread
                        ? "font-medium text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {notification.description}
                  </p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                    {notification.time}
                  </p>
                </div>
                <button className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700">
                  {notification.unread ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </button>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-lg bg-gray-50 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            View all notifications
          </button>
        </div>
      )}
    </div>
  );
};
