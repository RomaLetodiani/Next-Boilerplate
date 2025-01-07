import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import Link from "next/link";

const ContactPage = () => (
  <>
    {/* Background decoration */}
    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <div className="absolute left-[10%] top-1/4 h-64 w-64 rounded-full bg-indigo-100 opacity-30 blur-3xl dark:bg-indigo-900" />
      <div className="absolute right-[10%] top-1/3 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl dark:bg-purple-900" />
    </div>

    <div className="container relative mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
          Contact Us
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Let&apos;s Start a Conversation
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond
          as soon as possible.
        </p>
      </div>

      {/* Quick Contact Options */}
      <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
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
        ].map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 dark:bg-indigo-900" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
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

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-32 translate-y--32 transform rounded-full bg-indigo-50 opacity-20 dark:bg-indigo-900" />
          <div className="relative">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Send a Message</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-50" />
              <div className="relative">
                <h2 className="text-xl font-semibold">Visit Our Office</h2>
                <p className="mt-4 max-w-xl text-indigo-100">
                  We&apos;d love to meet in person. Visit us at our office for a coffee and a chat.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-100">Address</p>
                      <p className="text-sm font-medium">
                        123 Business Street
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-100">Phone</p>
                      <p className="text-sm font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-100">Email</p>
                      <p className="text-sm font-medium">contact@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Office Hours</h2>
            <div className="mt-6 space-y-3">
              {[
                { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
                { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
                { days: "Sunday", hours: "Closed" },
              ].map((schedule) => (
                <div key={schedule.days} className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{schedule.days}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ContactPage;
