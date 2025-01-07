"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SettingsCheckbox } from "../settings-checkbox";
import { SettingsFormLayout } from "../settings-form-layout";

const appearanceSchema = z.object({
  darkMode: z.boolean().default(true),
  reducedMotion: z.boolean().default(false),
  highContrast: z.boolean().default(false),
});

type AppearanceSettings = z.infer<typeof appearanceSchema>;

export const AppearanceForm = () => {
  const form = useForm<AppearanceSettings>({
    resolver: zodResolver(appearanceSchema),
    defaultValues: {
      darkMode: true,
      reducedMotion: false,
      highContrast: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const updateSettings = async (data: AppearanceSettings) => {
    toast.promise(
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Settings updated:", data);
      },
      {
        loading: "Updating appearance settings...",
        success: "Appearance settings updated!",
        error: "Failed to update appearance settings",
      },
    );
  };

  return (
    <SettingsFormLayout
      title="Appearance Settings"
      description="Customize how the application looks and feels"
      onSubmit={handleSubmit(updateSettings)}
      isDirty={isDirty}
    >
      <SettingsCheckbox
        label="Dark Mode"
        description="Use dark theme across the application"
        {...register("darkMode")}
      />
      <SettingsCheckbox
        label="Reduced Motion"
        description="Minimize animations and transitions"
        {...register("reducedMotion")}
      />
      <SettingsCheckbox
        label="High Contrast"
        description="Increase contrast for better visibility"
        {...register("highContrast")}
      />
    </SettingsFormLayout>
  );
};
