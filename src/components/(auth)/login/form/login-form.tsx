import { Google } from "@/assets/svgs";
import { Logo } from "@/components/common/logo";
import Link from "next/link";
import { redirect } from "next/navigation";

export const LoginForm = () => (
  <div className="flex w-full items-center justify-center px-4 sm:px-6 lg:w-1/2 lg:px-8">
    <div className="w-full max-w-md">
      <Link href="/" className="mb-8 flex justify-center">
        <div className="flex items-center space-x-2 rounded-xl bg-white px-4 py-2 shadow-lg dark:bg-gray-800">
          <Logo />
        </div>
      </Link>

      {/* Sign in card */}
      <div className="rounded-2xl bg-white/80 px-8 py-10 shadow-xl backdrop-blur-sm dark:bg-gray-800/80 sm:px-12">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Sign in to continue to your dashboard</p>
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
            <div className="h-6 w-6">
              <Google />
            </div>
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
);
