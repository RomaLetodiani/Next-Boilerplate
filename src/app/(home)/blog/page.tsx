// Blog listing
// src / app / home / blog / [slug] / page.tsx;
// Individual blog posts

import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  href: string;
}

const featuredPosts: BlogPost[] = [
  {
    title: "10 Tips for Scaling Your SaaS Application",
    description:
      "Learn the best practices for scaling your application to handle millions of users efficiently.",
    image: "/images/blog/scaling-tips.jpg",
    category: "Engineering",
    readTime: "8 min read",
    date: "Mar 15, 2024",
    author: {
      name: "John Doe",
      avatar: "/images/avatars/john.jpg",
    },
    href: "/blog/scaling-tips",
  },
  {
    title: "The Future of Cloud Computing",
    description:
      "Exploring emerging trends and technologies in cloud computing for 2024 and beyond.",
    image: "/images/blog/cloud-future.jpg",
    category: "Technology",
    readTime: "6 min read",
    date: "Mar 10, 2024",
    author: {
      name: "Jane Smith",
      avatar: "/images/avatars/jane.jpg",
    },
    href: "/blog/cloud-future",
  },
];

const recentPosts: BlogPost[] = [
  {
    title: "Understanding Microservices Architecture",
    description: "A comprehensive guide to building and deploying microservices.",
    image: "/images/blog/microservices.jpg",
    category: "Architecture",
    readTime: "10 min read",
    date: "Mar 5, 2024",
    author: {
      name: "Mike Johnson",
      avatar: "/images/avatars/mike.jpg",
    },
    href: "/blog/microservices",
  },
  // ... more posts
];

const categories = [
  "All Posts",
  "Engineering",
  "Product",
  "Design",
  "Technology",
  "Architecture",
  "Security",
];

const BlogPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg lg:p-12">
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
            <div className="absolute inset-0 bg-grid-modern opacity-10" />
          </div>

          {/* Categories */}
          <div className="mb-12 flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
              Featured Articles
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                    {/* Replace with next/image when you have actual images */}
                    <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">{post.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                          {/* Author avatar */}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {post.author.name}
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 dark:text-gray-500" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
              Recent Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="relative mt-16 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
              <p className="mt-2 text-indigo-100">
                Get the latest articles and insights delivered straight to your inbox.
              </p>
              <div className="mx-auto mt-6 max-w-md">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border-0 bg-white/10 px-4 py-2.5 text-white placeholder-white/60 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <button className="flex items-center justify-center rounded-lg bg-white px-6 py-2.5 font-medium text-indigo-600 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-grid-modern opacity-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
