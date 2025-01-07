import { GitHub, Google, Microsoft } from "@/assets/svgs";

export const LoginFeatures = () => (
  <div className="hidden lg:flex lg:w-1/2">
    <div className="relative flex w-full items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 px-8">
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Start Building Today</h2>
          <p className="mt-4 text-lg text-indigo-100">
            Join thousands of developers building modern applications
          </p>
        </div>

        {/* Feature list */}
        <div className="mt-12 space-y-8">
          {loginFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-indigo-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12">
          <p className="mb-4 text-center text-sm font-medium text-indigo-100">
            Trusted by developers from
          </p>
          <div className="flex justify-center space-x-8">
            {socialProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center gap-1 space-x-2 rounded-lg bg-white/40 px-4 py-2 text-sm font-medium text-white"
              >
                <div className="h-6 w-6">{provider.icon()}</div>
                <p className="text-sm font-bold text-white">{provider.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-600/90" />
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-80" />
    </div>
  </div>
);

const loginFeatures = [
  {
    icon: "⚡",
    title: "Lightning Fast Development",
    description: "Build and deploy applications in record time",
  },
  {
    icon: "🛠️",
    title: "Modern Tech Stack",
    description: "Next.js 15, React 19, and TypeScript ready",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank-grade security with OAuth and encryption",
  },
  {
    icon: "📱",
    title: "Responsive by Default",
    description: "Perfect experience on any device",
  },
];

// Add social logins
const socialProviders = [
  { name: "Google", icon: Google },
  { name: "GitHub", icon: GitHub },
  { name: "Microsoft", icon: Microsoft },
];
