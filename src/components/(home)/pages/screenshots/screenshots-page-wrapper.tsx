export const ScreenshotsPageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div className="absolute inset-0 bg-grid-modern opacity-[0.02] dark:opacity-[0.05]" />
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">{children}</div>
    </div>
  </div>
);
