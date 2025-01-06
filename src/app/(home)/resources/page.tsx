import { Book, FileText, Lightbulb, Play, Search } from "lucide-react";
import Link from "next/link";

interface Resource {
  title: string;
  description: string;
  category: "case-study" | "whitepaper" | "tutorial" | "template";
  image: string;
  readTime: string;
  date: string;
  href: string;
}

const resources: Resource[] = [
  {
    title: "How Company X Increased Revenue by 300%",
    description: "Learn how our platform helped scale their business operations efficiently.",
    category: "case-study",
    image: "/images/resources/case-study-1.jpg",
    readTime: "5 min read",
    date: "Mar 15, 2024",
    href: "/resources/case-studies/company-x",
  },
  {
    title: "Enterprise Security Best Practices",
    description: "A comprehensive guide to securing your enterprise applications.",
    category: "whitepaper",
    image: "/images/resources/whitepaper-1.jpg",
    readTime: "15 min read",
    date: "Mar 10, 2024",
    href: "/resources/whitepapers/security",
  },
  {
    title: "Getting Started with Our API",
    description: "Step-by-step guide to integrate our API into your application.",
    category: "tutorial",
    image: "/images/resources/tutorial-1.jpg",
    readTime: "10 min read",
    date: "Mar 5, 2024",
    href: "/resources/tutorials/api-integration",
  },
  {
    title: "Project Planning Template",
    description: "Ready-to-use template for planning your next big project.",
    category: "template",
    image: "/images/resources/template-1.jpg",
    readTime: "2 min read",
    date: "Mar 1, 2024",
    href: "/resources/templates/project-planning",
  },
];

const categories = [
  {
    name: "Case Studies",
    description: "Real-world examples of successful implementations",
    icon: Lightbulb,
    href: "/resources/case-studies",
  },
  {
    name: "Whitepapers",
    description: "In-depth research and industry insights",
    icon: FileText,
    href: "/resources/whitepapers",
  },
  {
    name: "Tutorials",
    description: "Step-by-step guides and how-to content",
    icon: Play,
    href: "/resources/tutorials",
  },
  {
    name: "Templates",
    description: "Ready-to-use documents and frameworks",
    icon: Book,
    href: "/resources/templates",
  },
];

const ResourcesPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg lg:p-12">
            <div className="relative z-10">
              <h1 className="text-center text-3xl font-bold lg:text-4xl">Resources Hub</h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
                Explore our collection of guides, templates, and best practices to help you succeed.
              </p>

              {/* Search Bar */}
              <div className="mx-auto mt-8 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full rounded-xl border-0 bg-white/10 px-12 py-4 text-white placeholder-white/60 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-grid-modern opacity-10" />
          </div>

          {/* Categories */}
          <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6 dark:bg-indigo-900" />
                <div className="relative">
                  <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Resources */}
          <div>
            <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
              Featured Resources
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                    {/* Replace with next/image when you have actual images */}
                    <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                        {resource.category.split("-").join(" ")}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {resource.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {resource.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="relative mt-16 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-semibold">Stay Updated</h2>
              <p className="mt-2 text-indigo-100">
                Get the latest resources and updates delivered to your inbox.
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

export default ResourcesPage;
