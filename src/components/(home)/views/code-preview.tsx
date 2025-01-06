export const CodePreview = () => (
  <section
    id="code-preview"
    className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 dark:from-gray-900 dark:to-gray-800"
  >
    <div className="container mx-auto px-4">
      <div className="text-center">
        <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
          Developer Experience
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Write Clean, Modern Code
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Built with TypeScript and modern best practices for reliable, maintainable applications
        </p>
      </div>

      <div className="mt-16">
        <div className="relative rounded-2xl bg-gray-900 p-4 shadow-2xl">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <pre className="mt-4 overflow-x-auto">
            <code className="text-sm text-gray-300">
              {`// Example of our clean, modern code

const DashboardPage = () => (
  <div className="space-y-8">
    {/* Welcome Section */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold">Welcome back, User! 👋</h1>
        <p className="mt-2 max-w-2xl text-indigo-100">
          Here's what's happening with your projects today.
        </p>
      </div>
      <div className="absolute inset-0 bg-grid-modern" />
    </div>

    {/* Your Dashboard Content... */}
  </div>
);

export default DashboardPage;`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </section>
);
