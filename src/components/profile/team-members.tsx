export const TeamMembers = () => {
  const team = [
    { name: "Sarah Chen", role: "Designer", avatar: "SC" },
    { name: "Mike Johnson", role: "Developer", avatar: "MJ" },
    { name: "Anna Lee", role: "Product Manager", avatar: "AL" },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Team Members</h2>
      <div className="mt-6 space-y-4">
        {team.map((member) => (
          <div key={member.name} className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
              <div className="flex h-full w-full items-center justify-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {member.avatar}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
