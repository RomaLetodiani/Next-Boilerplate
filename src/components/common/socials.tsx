import { socials } from "@/utils/const";
import Link from "next/link";

export const Socials = () => (
  <div className="mt-6 flex space-x-4">
    {socials.map((social) => (
      <Link
        key={social.href}
        href={social.href}
        className="text-gray-400 transition-colors hover:text-gray-500 dark:hover:text-gray-300"
      >
        <span className="sr-only">{social.href.split("/").pop()}</span>
        {social.icon()}
      </Link>
    ))}
  </div>
);
