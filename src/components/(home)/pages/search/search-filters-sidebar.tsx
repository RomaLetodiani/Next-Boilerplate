import {
  Book,
  Command,
  FileText,
  HelpCircle,
  SlidersHorizontal,
  Tag,
  Terminal,
} from "lucide-react";

export const SearchFiltersSidebar = () => (
  <div className="mb-8 lg:mb-0 lg:w-64">
    <div className="sticky top-8 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Filters</h2>
        <SlidersHorizontal className="h-5 w-5 text-gray-400" />
      </div>

      {/* Categories */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Categories</h3>
        <div className="mt-4 space-y-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-indigo-400"
            >
              <div className="flex items-center space-x-3">
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </div>
              <span className="text-xs text-gray-400">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Popular Tags</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-400"
            >
              <Tag className="mr-1.5 h-3 w-3" />
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const categories = [
  { name: "Documentation", icon: FileText, count: 245 },
  { name: "API Reference", icon: Terminal, count: 189 },
  { name: "Guides", icon: Book, count: 124 },
  { name: "Tutorials", icon: Command, count: 97 },
  { name: "Community", icon: HelpCircle, count: 56 },
];

const popularTags = [
  "authentication",
  "api",
  "getting-started",
  "security",
  "deployment",
  "database",
  "performance",
  "monitoring",
];
