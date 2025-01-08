export const BlogsCategories = () => (
  <div className="mb-8 flex flex-wrap items-center gap-2">
    {categories.map((category) => (
      <button
        key={category}
        className="button-pop rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50 hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
      >
        {category}
      </button>
    ))}
  </div>
);

const categories = [
  "All Posts",
  "Engineering",
  "Product",
  "Design",
  "Technology",
  "Architecture",
  "Security",
];
