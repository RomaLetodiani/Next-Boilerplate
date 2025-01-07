import { Search } from "lucide-react";

export const BlogsHeader = () => (
  <div className="relative md:pt-24 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg lg:p-12">
    <div className="relative z-10">
      <h1 className="text-center text-3xl font-bold lg:text-4xl">Blog & Articles</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
        Insights, tutorials, and updates from our team to help you build better software.
      </p>

      {/* Search Bar */}
      <div className="mx-auto mt-8 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-xl border-0 bg-white/10 px-12 py-4 text-white placeholder-white/60 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-grid opacity-50" />
  </div>
);
