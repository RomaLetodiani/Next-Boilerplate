import { ArrowDown, ArrowUp } from "lucide-react";

export type StatCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: React.ElementType;
};

export const StatCard = ({ title, value, change, changeType, icon: Icon }: StatCardProps) => (
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
