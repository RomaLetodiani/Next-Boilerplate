import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import Link from "next/link";

export const ContactQuickOptions = () => (
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {quickOptions.map((item) => (
      <div
        key={item.title}
        className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
      >
        <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 dark:bg-indigo-900" />
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
            <item.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
          <Link
            href={item.link}
            className="mt-4 inline-flex items-center space-x-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
          >
            <span>{item.action}</span>
            <Send className="h-4 w-4" />
          </Link>
        </div>
      </div>
    ))}
  </div>
);

const quickOptions = [
  {
    icon: Phone,
    title: "Talk to Sales",
    description: "Interested in our solutions? Let's talk about how we can help.",
    action: "Call us",
    link: "tel:+15551234567",
  },
  {
    icon: MessageSquare,
    title: "Technical Support",
    description: "Need technical help? We're here 24/7 to solve any issues.",
    action: "Chat with us",
    link: "#support",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about our company? Send us an email.",
    action: "Email us",
    link: "mailto:contact@example.com",
  },
];
