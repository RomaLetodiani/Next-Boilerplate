import { SearchIcon } from "lucide-react";

export const SearchBar = () => (
  <div className="mx-auto mt-8 max-w-3xl">
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search documentation, guides, and more..."
        className="block w-full rounded-xl border-0 bg-white py-4 pl-12 pr-4 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500 dark:focus:ring-indigo-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
        <kbd className="hidden rounded-lg bg-gray-100 px-2 py-1 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400 sm:block">
          ⌘K
        </kbd>
      </div>
    </div>
  </div>
);
