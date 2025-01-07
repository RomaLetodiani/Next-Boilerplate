import { StatCard, StatCardProps } from "@/components/common/stats-card";

export type StatsGridProps = {
  stats: StatCardProps[];
};

export const StatsGrid = ({ stats }: StatsGridProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat) => (
      <StatCard key={stat.title} {...stat} />
    ))}
  </div>
);
