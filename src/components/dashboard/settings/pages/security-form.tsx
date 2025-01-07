"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SettingsCheckbox } from "../settings-checkbox";
import { SettingsFormLayout } from "../settings-form-layout";

const securitySchema = z.object({
  twoFactorAuth: z.boolean().default(false),
  loginAlerts: z.boolean().default(true),
  deviceHistory: z.boolean().default(true),
});

type SecuritySettings = z.infer<typeof securitySchema>;

export const SecurityForm = () => {
  const form = useForm<SecuritySettings>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      twoFactorAuth: false,
      loginAlerts: true,
      deviceHistory: true,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const updateSettings = async (data: SecuritySettings) => {
    toast.promise(
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Settings updated:", data);
      },
      {
        loading: "Updating security settings...",
        success: "Security settings updated!",
        error: "Failed to update security settings",
      },
    );
  };

  return (
    <SettingsFormLayout
      title="Security Settings"
      description="Manage your account security preferences"
      onSubmit={handleSubmit(updateSettings)}
      isDirty={isDirty}
    >
      <SettingsCheckbox
        label="Two-Factor Authentication"
        description="Add an extra layer of security to your account"
        {...register("twoFactorAuth")}
      />
      <SettingsCheckbox
        label="Login Alerts"
        description="Get notified of new sign-ins to your account"
        {...register("loginAlerts")}
      />
      <SettingsCheckbox
        label="Device History"
        description="Keep track of devices that have accessed your account"
        {...register("deviceHistory")}
      />
    </SettingsFormLayout>
  );
};
