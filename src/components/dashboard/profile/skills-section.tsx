export const SkillsSection = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "TailwindCSS", level: 90 },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Skills</h2>
      <div className="mt-6 space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-gray-100 dark:bg-gray-700">
              <div
                className="h-2 rounded-full bg-indigo-600 dark:bg-indigo-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
