import { Calendar, Clock } from "lucide-react";

export const Availability = () => {
  const schedule = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 4:00 PM" },
  ];

  const timezone = "Pacific Time (PT)";
  const status = "Available";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Availability</h2>

      {/* Status */}
      <div className="mt-4 flex items-center space-x-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white">{status}</span>
      </div>

      {/* Timezone */}
      <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <Clock className="h-4 w-4" />
        <span>{timezone}</span>
      </div>

      {/* Schedule */}
      <div className="mt-6 space-y-3">
        {schedule.map((item) => (
          <div
            key={item.day}
            className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-2 dark:border-gray-700"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.day}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{item.hours}</span>
          </div>
        ))}
      </div>

      {/* Book Meeting Button */}
      <button className="mt-6 w-full rounded-lg bg-indigo-50 py-2 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-400 dark:hover:bg-indigo-900">
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>Book a meeting</span>
        </div>
      </button>
    </div>
  );
};
