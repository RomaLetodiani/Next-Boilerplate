export const ContactOfficeHours = () => (
  <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Office Hours</h2>
    <div className="mt-6 space-y-3">
      {officeHours.map((schedule) => (
        <div key={schedule.days} className="flex justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{schedule.days}</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {schedule.hours}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const officeHours = [
  { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
  { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { days: "Sunday", hours: "Closed" },
];
