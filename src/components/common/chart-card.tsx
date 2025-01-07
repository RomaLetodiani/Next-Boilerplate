type ChartCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  chart: React.ReactNode;
};

export const ChartCard = ({ title, description, icon: Icon, chart }: ChartCardProps) => (
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

export const MockCardChart = ({ title }: { title: string }) => (
  <div className="relative h-[300px] w-full rounded-lg bg-gray-50 dark:bg-gray-700">
    {/* Replace with actual chart component */}
    <div className="flex h-full items-center justify-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
    </div>
  </div>
);
