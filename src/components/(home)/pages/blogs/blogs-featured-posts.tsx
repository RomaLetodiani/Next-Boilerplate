import { BlogPost } from "@/types/blogs.types";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { BlogsCategories } from "./blogs-categories";

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

export const BlogsFeaturedPosts = () => (
  <section id="featured-posts" className="pt-8 md:pt-24">
    <BlogsCategories />

    <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">Featured Articles</h2>
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
            <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
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
  </section>
);
