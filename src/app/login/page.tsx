import { auth, signIn } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 relative">
            <Image src="/vercel.svg" alt="Logo" fill className="object-contain" priority />
          </div>
        </div>

        {/* Sign in card */}
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-xl rounded-lg sm:px-10 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Sign in to access your dashboard</p>
          </div>

          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/dashboard" });
            }}
            className="space-y-6"
          >
            <button
              type="submit"
              className="w-full group relative flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 dark:focus:ring-offset-gray-800"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/google.svg"
                  alt="Google Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                />
                <span>Continue with Google</span>
              </div>
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Protected by Google Auth
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
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
};

export default SignIn;
