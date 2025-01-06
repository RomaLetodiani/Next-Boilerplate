export const WelcomeSection = () => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
    <div className="relative z-10">
      <h1 className="text-3xl font-bold">Welcome back, User! 👋</h1>
      <p className="mt-2 max-w-2xl text-indigo-100">
        Here&apos;s what&apos;s happening with your projects today.
      </p>
    </div>
    <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-40" />
  </div>
);
