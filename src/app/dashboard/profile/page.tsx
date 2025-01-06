const ProfilePage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 dark:text-white">Profile</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Your name"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="your.email@example.com"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Joined
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value="January 1, 2024"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
