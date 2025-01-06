const HomePage = async () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-indigo-600">Your Next.js Project</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Start building scalable applications with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/dashboard"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">Key Features</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105"
              >
                <div className="text-indigo-600">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const features = [
  {
    icon: "🚀",
    title: "Next.js 14",
    description:
      "Built with the latest version of Next.js for optimal performance and developer experience.",
  },
  {
    icon: "🎨",
    title: "Tailwind CSS",
    description: "Fully customizable design system with utility-first CSS framework.",
  },
  {
    icon: "🔒",
    title: "Authentication",
    description: "Secure authentication system with role-based access control.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Fully responsive layout that works seamlessly across all devices.",
  },
  {
    icon: "⚡",
    title: "Fast Performance",
    description: "Optimized for speed with automatic image optimization and code splitting.",
  },
  {
    icon: "🛠️",
    title: "TypeScript",
    description: "Built with TypeScript for better development experience and type safety.",
  },
];

export default HomePage;
