export const Testimonials = () => (
  <section
    id="testimonials"
    className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-24 dark:from-gray-800 dark:to-gray-900"
  >
    <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-40" />
    <div className="container relative mx-auto px-4">
      <div className="text-center">
        <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
          Testimonials
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
          Loved by Developers Worldwide
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          See what our community has to say about their experience
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="group-hover:translate-y--8 absolute right-0 top-0 h-32 w-32 translate-x-16 translate-y--16 transform rounded-full bg-indigo-50 opacity-10 transition-transform group-hover:translate-x-8 dark:bg-indigo-900" />
            <div className="relative">
              <svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{testimonial.quote}</p>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-indigo-400 to-purple-400">
                  <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white">
                    {testimonial.name[0]}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  {
    quote:
      "This template saved me weeks of development time. It's incredibly well-structured and easy to customize.",
    name: "Sarah Chen",
    title: "Senior Developer at TechCorp",
  },
  {
    quote: "The best Next.js template I've ever used. The dark mode implementation is flawless.",
    name: "Mike Johnson",
    title: "Frontend Lead at StartupX",
  },
  {
    quote: "Perfect balance of features and simplicity. Exactly what I needed for my SaaS project.",
    name: "Alex Rivera",
    title: "Independent Developer",
  },
];
