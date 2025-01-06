import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="flex min-h-screen">
        {/* Left side - Sign in form */}
        <div className="flex w-full items-center justify-center px-4 sm:px-6 lg:w-1/2 lg:px-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2 rounded-xl bg-white px-4 py-2 shadow-lg dark:bg-gray-800">
                <div className="rounded-lg bg-indigo-600 p-2 dark:bg-indigo-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">NextSaaS</span>
              </div>
            </div>

            {/* Sign in card */}
            <div className="rounded-2xl bg-white/80 px-8 py-10 shadow-xl backdrop-blur-sm dark:bg-gray-800/80 sm:px-12">
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Welcome Back
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Sign in to continue to your dashboard
                </p>
              </div>

              <form
                action={async () => {
                  "use server";
                  redirect("/dashboard");
                }}
                className="mt-8"
              >
                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center space-x-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  <Image
                    src="/google.svg"
                    alt="Google Logo"
                    width={20}
                    height={20}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>Continue with Google</span>
                </button>
              </form>

              {/* Security badges */}
              <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>GDPR Compliant</span>
                </div>
              </div>

              {/* Terms and Privacy */}
              <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                By signing in, you agree to our{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Help text */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Need help?{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                  Contact support
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Features */}
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
                  {["Google", "Microsoft", "Adobe", "Shopify"].map((company) => (
                    <div
                      key={company}
                      className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-600/90" />
            <div className="absolute inset-0 bg-grid-modern" />
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default SignIn;
