import { Bug, CheckCircle, GitCommit, Rocket, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ChangeType = "feature" | "improvement" | "bugfix" | "security" | "breaking";

interface Change {
  type: ChangeType;
  title: string;
  description: string;
}

interface Release {
  version: string;
  date: string;
  description: string;
  changes: Change[];
}

const releases: Release[] = [
  {
    version: "2.4.0",
    date: "March 15, 2024",
    description: "New dashboard features and performance improvements",
    changes: [
      {
        type: "feature",
        title: "Advanced Analytics Dashboard",
        description:
          "Introducing a new analytics dashboard with real-time metrics and customizable charts.",
      },
      {
        type: "improvement",
        title: "Enhanced Performance",
        description: "Improved application loading speed by 50% through code optimization.",
      },
      {
        type: "bugfix",
        title: "Data Export Issue",
        description: "Fixed an issue where CSV exports would fail for large datasets.",
      },
    ],
  },
  {
    version: "2.3.0",
    date: "March 1, 2024",
    description: "Security updates and new integrations",
    changes: [
      {
        type: "security",
        title: "Enhanced Authentication",
        description: "Implemented additional security measures for user authentication.",
      },
      {
        type: "feature",
        title: "Slack Integration",
        description: "Added native Slack integration for real-time notifications.",
      },
      {
        type: "breaking",
        title: "API Changes",
        description:
          "Updated API endpoints with breaking changes. Please refer to the migration guide.",
      },
    ],
  },
];

const getChangeIcon = (type: ChangeType) => {
  const icons = {
    feature: Rocket,
    improvement: Sparkles,
    bugfix: Bug,
    security: Wrench,
    breaking: GitCommit,
  };
  return icons[type];
};

const getChangeStyle = (type: ChangeType) => {
  const styles = {
    feature:
      "bg-indigo-50 text-indigo-600 ring-indigo-500/30 dark:bg-indigo-950 dark:text-indigo-400",
    improvement:
      "bg-purple-50 text-purple-600 ring-purple-500/30 dark:bg-purple-950 dark:text-purple-400",
    bugfix: "bg-green-50 text-green-600 ring-green-500/30 dark:bg-green-950 dark:text-green-400",
    security: "bg-blue-50 text-blue-600 ring-blue-500/30 dark:bg-blue-950 dark:text-blue-400",
    breaking: "bg-red-50 text-red-600 ring-red-500/30 dark:bg-red-950 dark:text-red-400",
  };
  return styles[type];
};

const Changelog = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-50" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg lg:p-12">
            <div className="relative z-10">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  <GitCommit className="h-8 w-8" />
                </div>
              </div>
              <h1 className="mt-4 text-center text-3xl font-bold lg:text-4xl">Product Updates</h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
                Stay up to date with new features, improvements, and bug fixes.
              </p>
            </div>
            <div className="absolute inset-0 bg-grid opacity-20" />
          </div>

          {/* Version Timeline */}
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-indigo-500/20 to-transparent dark:from-indigo-400/20 lg:left-1/2" />

            {releases.map((release, index) => (
              <div key={release.version} className="mb-16 last:mb-0">
                {/* Version Header */}
                <div className="flex items-center lg:justify-center">
                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg ring-4 ring-indigo-500/10 dark:ring-indigo-400/10">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <div
                    className={twMerge(
                      "ml-4 lg:absolute",
                      index % 2 === 0
                        ? "lg:right-1/2 lg:mr-[-2rem] lg:pr-20 lg:text-right"
                        : "lg:left-1/2 lg:ml-[-2rem] lg:pl-20 lg:text-left",
                    )}
                  >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Version {release.version}
                    </h2>
                    <time className="text-sm text-gray-500 dark:text-gray-400">{release.date}</time>
                  </div>
                </div>

                {/* Changes */}
                <div
                  className={twMerge(
                    "ml-16 mt-6 lg:w-1/2",
                    index % 2 !== 0
                      ? "lg:ml-0 lg:mr-auto lg:pr-16 lg:text-right"
                      : "lg:ml-auto lg:mr-0 lg:pl-16 lg:text-left",
                  )}
                >
                  <div className="rounded-xl bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl dark:bg-gray-800/50">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {release.description}
                    </p>
                    <div className="mt-6 space-y-6">
                      {release.changes.map((change, changeIndex) => {
                        const Icon = getChangeIcon(change.type);
                        return (
                          <div
                            key={changeIndex}
                            className="group relative rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md dark:bg-gray-800/50"
                          >
                            <div className="flex items-start space-x-4">
                              <div
                                className={`rounded-lg p-2 ring-1 transition-all group-hover:shadow-md ${getChangeStyle(
                                  change.type,
                                )}`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium text-gray-900 dark:text-white">
                                  {change.title}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                  {change.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="relative mt-16 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-semibold">Never Miss an Update</h2>
              <p className="mt-2 text-indigo-100">
                Subscribe to our newsletter to get notified about new features and changes.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/blogs"
                  className="flex w-full items-center justify-center rounded-lg bg-white px-6 py-2.5 text-indigo-600 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg sm:w-auto"
                >
                  Read Our Blog
                </Link>
                <Link
                  href="/docs"
                  className="flex w-full items-center justify-center rounded-lg bg-indigo-400/20 px-6 py-2.5 text-white backdrop-blur-sm transition-all hover:bg-indigo-400/30 sm:w-auto"
                >
                  View Documentation
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-grid opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
