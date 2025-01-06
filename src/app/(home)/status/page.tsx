import SubscribeToUpdates from "@/components/(home)/pages/status/subscribe-to-updates";
import { CheckCircle, Clock, TriangleAlert, XCircle } from "lucide-react";
import { ReactNode } from "react";

type Status = "operational" | "degraded" | "outage" | "maintenance";

type SystemComponent = {
  name: string;
  status: Status;
  description: string;
  uptime: string;
};

type Incident = {
  title: string;
  date: string;
  status: Status;
  description: string;
  updates: {
    timestamp: string;
    message: string;
  }[];
};

const systems: SystemComponent[] = [
  {
    name: "API",
    status: "operational",
    description: "Core API services and endpoints",
    uptime: "99.99%",
  },
  {
    name: "Dashboard",
    status: "operational",
    description: "Web dashboard and user interface",
    uptime: "99.95%",
  },
  {
    name: "Database",
    status: "degraded",
    description: "Database and storage systems",
    uptime: "99.90%",
  },
  {
    name: "Authentication",
    status: "operational",
    description: "User authentication and authorization",
    uptime: "99.99%",
  },
  {
    name: "Background Jobs",
    status: "maintenance",
    description: "Scheduled tasks and background processing",
    uptime: "99.95%",
  },
];

const recentIncidents: Incident[] = [
  {
    title: "Database Performance Degradation",
    date: "March 15, 2024",
    status: "degraded",
    description: "We are investigating slow response times in our database cluster.",
    updates: [
      {
        timestamp: "09:45 UTC",
        message: "Investigating increased latency in database queries.",
      },
      {
        timestamp: "10:15 UTC",
        message: "Identified the root cause as increased load on primary database.",
      },
      {
        timestamp: "10:45 UTC",
        message: "Implementing mitigation measures to improve performance.",
      },
    ],
  },
  {
    title: "Scheduled Maintenance",
    date: "March 10, 2024",
    status: "maintenance",
    description: "Planned system upgrade to improve service reliability.",
    updates: [
      {
        timestamp: "02:00 UTC",
        message: "Started scheduled maintenance window.",
      },
      {
        timestamp: "03:30 UTC",
        message: "Successfully completed system upgrades.",
      },
    ],
  },
];

const StatusBadge = ({ status }: { status: Status }) => {
  const config: Record<Status, { icon: ReactNode; text: string; className: string }> = {
    operational: {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Operational",
      className: "bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-400",
    },
    degraded: {
      icon: <TriangleAlert className="h-5 w-5" />,
      text: "Degraded",
      className: "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400",
    },
    outage: {
      icon: <XCircle className="h-5 w-5" />,
      text: "Outage",
      className: "bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-400",
    },
    maintenance: {
      icon: <Clock className="h-5 w-5" />,
      text: "Maintenance",
      className: "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400",
    },
  };

  const { icon, text, className } = config[status];

  return (
    <span
      className={`inline-flex items-center space-x-1.5 rounded-full px-3 py-1 text-sm ${className}`}
    >
      {icon}
      <span>{text}</span>
    </span>
  );
};

const StatusPage = () => (
  <div className="container mx-auto px-4 py-16">
    {/* Overall Status */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold">System Status</h1>
        <p className="mt-2 text-indigo-100">Current status of our services and system components</p>
        <div className="mt-6">
          <StatusBadge status="operational" />
          <p className="mt-2 text-sm text-indigo-100">All systems are operating normally</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-modern opacity-10" />
    </div>

    {/* System Components */}
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">System Components</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {systems.map((system) => (
          <div
            key={system.name}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {system.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {system.description}
                </p>
              </div>
              <StatusBadge status={system.status} />
            </div>
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Uptime:</span>
              <span className="font-medium text-gray-900 dark:text-white">{system.uptime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Recent Incidents */}
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Recent Incidents</h2>
      <div className="mt-6 space-y-6">
        {recentIncidents.map((incident) => (
          <div key={incident.title} className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {incident.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{incident.date}</p>
              </div>
              <StatusBadge status={incident.status} />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{incident.description}</p>

            {/* Incident Updates */}
            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Updates</h4>
              <div className="mt-4 space-y-4">
                {incident.updates.map((update, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-none text-sm text-gray-500 dark:text-gray-400">
                      {update.timestamp}
                    </div>
                    <div className="flex-1 text-sm text-gray-600 dark:text-gray-300">
                      {update.message}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <SubscribeToUpdates />
  </div>
);

export default StatusPage;
