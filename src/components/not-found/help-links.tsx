import Link from "next/link";

export const HelpLinks = () => (
  <div className="mt-12">
    <p className="text-base text-gray-600 flex flex-col gap-2 dark:text-gray-400">
      <span>Looking for something specific?</span>

      <span>
        <Link
          href="/contact"
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          Contact support
        </Link>{" "}
        or{" "}
        <Link
          href="/sitemap"
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          view sitemap
        </Link>
      </span>
    </p>
  </div>
);
