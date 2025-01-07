"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SettingsCheckbox } from "../settings-checkbox";
import { SettingsFormLayout } from "../settings-form-layout";

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
    <SettingsFormLayout
      title="Notification Preferences"
      description="Choose how you want to be notified"
      onSubmit={handleSubmit(updateSettings)}
      isDirty={isDirty}
    >
      <SettingsCheckbox
        label="Email Notifications"
        description="Receive email notifications"
        {...register("emailNotifications")}
      />
      <SettingsCheckbox
        label="Push Notifications"
        description="Receive email updates about your account activity"
        {...register("pushNotifications")}
      />
    </SettingsFormLayout>
  );
};
