export const ProjectsGrid = () => {
  const projects = [
    {
      name: "Project Alpha",
      description: "A modern web application built with Next.js",
      status: "In Progress",
      progress: 75,
    },
    {
      name: "Project Beta",
      description: "Mobile app development using React Native",
      status: "Completed",
      progress: 100,
    },
    // Add more projects as needed
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-gray-500 dark:text-gray-400">{project.progress}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-gray-100 dark:bg-gray-700">
                <div
                  className="h-2 rounded-full bg-indigo-600 dark:bg-indigo-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
