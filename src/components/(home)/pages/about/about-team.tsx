export const AboutTeam = () => (
  <section id="team" className="pt-24 px-4 pb-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Meet Our Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Passionate individuals working together to create amazing experiences.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="aspect-w-1 aspect-h-1 relative mb-4 overflow-hidden rounded-xl">
              <div className="h-48 w-full rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
                <div className="flex h-full w-full items-center justify-center text-4xl font-medium text-indigo-600 dark:text-indigo-400">
                  {member.name[0]}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {member.role}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "/team/sarah.jpg", // Add team member images
    bio: "10+ years of experience in SaaS and product development.",
  },
  {
    name: "Michael Johnson",
    role: "CTO",
    image: "/team/michael.jpg",
    bio: "Former tech lead at major tech companies.",
  },
  {
    name: "Emma Williams",
    role: "Head of Design",
    image: "/team/emma.jpg",
    bio: "Award-winning designer with a passion for user experience.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager",
    image: "/team/jane.jpg",
    bio: "Creative marketer with a focus on brand awareness.",
  },
  // Add more team members as needed
];
