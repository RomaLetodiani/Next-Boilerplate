"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

const notificationsSettingsSchema = z.object({
  emailNotifications: z.boolean().default(true),
  pushNotifications: z.boolean().default(true),
});

type NotificationsSettings = z.infer<typeof notificationsSettingsSchema>;

export const NotificationsForm = () => {
  const form = useForm<NotificationsSettings>({
    resolver: zodResolver(notificationsSettingsSchema),
    defaultValues: {
      emailNotifications: true,
      pushNotifications: true,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const updateSettings = async (data: NotificationsSettings) => {
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
      {/* Notifications Section */}
      <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Notification Preferences
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Choose how you want to be notified
        </p>

        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="relative flex h-6 items-center">
              <input
                type="checkbox"
                {...register("emailNotifications")}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                Email Notifications
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive email updates about your account activity
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="relative flex h-6 items-center">
              <input
                type="checkbox"
                {...register("pushNotifications")}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                Push Notifications
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive push notifications in your browser
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
