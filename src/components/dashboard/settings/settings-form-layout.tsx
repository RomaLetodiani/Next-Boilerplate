interface SettingsFormLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  isDirty?: boolean;
}

export const SettingsFormLayout = ({
  title,
  description,
  children,
  onSubmit,
  isDirty = false,
}: SettingsFormLayoutProps) => (
  <form onSubmit={onSubmit} className="space-y-8 md:col-span-2">
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      <div className="mt-6 space-y-6">{children}</div>
    </div>

    {/* Save Button */}
    <div className="flex justify-end">
      <button
        type="submit"
        disabled={!isDirty}
        className={`rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors ${
          isDirty
            ? "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            : "cursor-not-allowed bg-gray-400 dark:bg-gray-600"
        }`}
      >
        Save Changes
      </button>
    </div>
  </form>
);
