import { SearchIcon } from "lucide-react";

export const SearchHeader = () => (
  <div className="mx-auto max-w-4xl text-center">
    <div className="flex items-center justify-center">
      <div className="rounded-full bg-indigo-50 p-3 dark:bg-indigo-900/50">
        <SearchIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      </div>
    </div>
    <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
      Search Our Knowledge Base
    </h1>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
      Find documentation, tutorials, guides, and community resources
    </p>
  </div>
);
