import { BlogPost } from "@/types/blogs.types";
import Link from "next/link";

export const BlogsRecentPosts = () => (
  <section id="recent-posts" className="pt-8 md:pt-24">
    <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">Recent Articles</h2>
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
              <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

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
];
