"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SettingsCheckbox } from "../settings-checkbox";
import { SettingsFormLayout } from "../settings-form-layout";

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
    <SettingsFormLayout
      title="Privacy Settings"
      description="Manage your privacy settings"
      onSubmit={handleSubmit(updateSettings)}
      isDirty={isDirty}
    >
      <SettingsCheckbox
        label="Public Profile"
        description="Make your profile visible to everyone"
        {...register("publicProfile")}
      />
      <SettingsCheckbox
        label="Public Profile"
        description="Make your profile visible to everyone
              </p"
        {...register("activityStatus")}
      />
    </SettingsFormLayout>
  );
};
