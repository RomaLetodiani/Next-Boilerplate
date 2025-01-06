import { Bell, Globe, Key, Palette, Shield } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Settings Navigation */}
        <div className="space-y-4">
          {[
            { icon: Bell, label: "Notifications", active: true },
            { icon: Shield, label: "Privacy" },
            { icon: Palette, label: "Appearance" },
            { icon: Globe, label: "Language" },
            { icon: Key, label: "Security" },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center space-x-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                item.active
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Notifications Section */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Notification Preferences
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Choose how you want to be notified
            </p>

            <div className="mt-6 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="relative flex h-6 items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                    defaultChecked
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Email Notifications
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive email updates about your account activity
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="relative flex h-6 items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                    defaultChecked
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Push Notifications
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive push notifications in your browser
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Privacy Settings
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your privacy preferences
            </p>

            <div className="mt-6 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="relative flex h-6 items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Public Profile
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Make your profile visible to everyone
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="relative flex h-6 items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                    defaultChecked
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Show Activity Status
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Let others see when you're active
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
