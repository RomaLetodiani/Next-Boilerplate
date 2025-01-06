"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

const subscribeToUpdatesSchema = z.object({
  email: z.string().email(),
});

type SubscribeToUpdatesSchema = z.infer<typeof subscribeToUpdatesSchema>;

const SubscribeToUpdates = () => {
  const form = useForm<SubscribeToUpdatesSchema>({
    resolver: zodResolver(subscribeToUpdatesSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = form;

  const subscribeToUpdates = async (data: SubscribeToUpdatesSchema) => {
    toast.promise(
      async () => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Subscribed to updates:", data);
        reset();
      },
      {
        loading: "Subscribing to updates...",
        success: "Subscribed to updates successfully!",
        error: "Failed to subscribe to updates",
      },
    );
  };

  return (
    <div className="mt-16 rounded-xl bg-gray-50 p-8 dark:bg-gray-800/50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Subscribe to Status Updates
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Get notified when we have system issues or maintenance windows.
        </p>
        <form
          onSubmit={handleSubmit(subscribeToUpdates)}
          className="mt-6 flex items-center justify-center space-x-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          <button
            type="submit"
            disabled={!isDirty}
            className={twMerge(
              "rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",
              isDirty ? "cursor-pointer" : "cursor-not-allowed",
            )}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeToUpdates;
