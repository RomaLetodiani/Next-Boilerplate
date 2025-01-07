"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

const privacySettingsSchema = z.object({
  publicProfile: z.boolean().default(false),
  activityStatus: z.boolean().default(true),
});

type PrivacySettings = z.infer<typeof privacySettingsSchema>;

export const PrivacyForm = () => {
  const form = useForm<PrivacySettings>({
    resolver: zodResolver(privacySettingsSchema),
    defaultValues: {
      publicProfile: false,
      activityStatus: true,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const updateSettings = async (data: PrivacySettings) => {
    toast.promise(
      async () => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Settings updated:", data);
      },
      {
        loading: "Updating settings...",
        success: "Settings updated successfully!",
        error: "Failed to update settings",
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(updateSettings)} className="md:col-span-2 space-y-8">
      {/* Privacy Section */}
      <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy Settings</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Manage your privacy preferences
        </p>

        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="relative flex h-6 items-center">
              <input
                type="checkbox"
                {...register("publicProfile")}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                Public Profile
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Make your profile visible to everyone
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="relative flex h-6 items-center">
              <input
                type="checkbox"
                {...register("activityStatus")}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                Show Activity Status
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Let others see when you&apos;re active
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!isDirty}
          className={twMerge(
            "rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors",
            isDirty
              ? "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              : "cursor-not-allowed bg-gray-400 dark:bg-gray-600",
          )}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};
