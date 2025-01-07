export const ScreenshotsHeader = () => (
  <section
    id="screenshots-header"
    className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg"
  >
    <div className="relative z-10">
      <h1 className="text-center text-3xl font-bold lg:text-4xl">Screenshots Gallery</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
        Explore our interface through detailed screenshots
      </p>
    </div>
    <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-40" />
  </section>
);
