import Link from "next/link";

const HomeLogo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <div className="rounded-lg bg-indigo-600 p-2 dark:bg-indigo-500">
      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </div>
    <span className="text-xl font-bold text-gray-900 dark:text-white">NextJS Template</span>
  </Link>
);

export default HomeLogo;
