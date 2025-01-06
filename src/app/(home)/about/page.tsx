import { Code2, Globe, HeartHandshake, Users } from "lucide-react";

const stats = [
  { label: "Active Users", value: "20K+", icon: Users },
  { label: "Countries", value: "150+", icon: Globe },
  { label: "Team Members", value: "50+", icon: HeartHandshake },
  { label: "Code Components", value: "200+", icon: Code2 },
];

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

const AboutPage = () => (
  <>
    {/* Hero Section */}
    <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              NextJS Template
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            We&apos;re building the future of web development with modern tools and frameworks. Our
            mission is to make development faster, easier, and more enjoyable.
          </p>
        </div>
      </div>
    </section>
    {/* Stats Section */}
    <section className="mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y--6 dark:bg-indigo-900" />
              <div className="relative">
                <stat.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Mission Section */}
    <section className="mt-24 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-xl dark:from-indigo-600 dark:to-purple-700">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 max-w-3xl text-lg text-indigo-100">
            We believe in creating tools that empower developers to build amazing applications. Our
            platform combines the best of modern web technologies with intuitive design to make
            development a joy.
          </p>
        </div>
      </div>
    </section>
    {/* Team Section */}
    <section className="mt-24 px-4 pb-24 sm:px-6 lg:px-8">
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
    </section>{" "}
  </>
);

export default AboutPage;
