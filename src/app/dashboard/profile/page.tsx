import { Calendar, Camera, Mail, MapPin, Shield } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Profile Header */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800">
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="absolute right-4 top-4">
            <button className="rounded-lg bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/30">
              Edit Cover
            </button>
          </div>
        </div>
        <div className="relative px-6 pb-6">
          <div className="relative -top-12 flex items-end space-x-6">
            <div className="relative">
              <div className="h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-800">
                <div className="flex h-full items-center justify-center text-2xl font-bold text-gray-600 dark:text-gray-400">
                  JD
                </div>
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-white p-1.5 text-gray-700 shadow-lg transition-colors hover:text-indigo-600 dark:bg-gray-700 dark:text-gray-300">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="pb-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Profile Info */}
        <div className="md:col-span-2 space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Details</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    john.doe@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    San Francisco, CA
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Joined</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    January 1, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">About</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Full-stack developer with a passion for building beautiful and functional web
              applications. Experienced in React, Node.js, and TypeScript.
            </p>
          </div>
        </div>

        {/* Side Section */}
        <div className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
              <Shield className="h-5 w-5" />
              <span>Account Status</span>
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Email verified</span>
                <span className="flex items-center space-x-1 text-sm font-medium text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Verified</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">2FA enabled</span>
                <span className="flex items-center space-x-1 text-sm font-medium text-amber-600">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span>Disabled</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
