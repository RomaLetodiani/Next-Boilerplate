import { twMerge } from "tailwind-merge";

type NewsletterProps = {
  rounded?: boolean;
};

export const Newsletter = ({ rounded = false }: NewsletterProps) => (
  <section id="newsletter" className="pt-24">
    <div
      className={twMerge(
        "relative bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-16 text-white shadow-lg",
        rounded && "rounded-xl",
      )}
    >
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
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>
  </section>
);
