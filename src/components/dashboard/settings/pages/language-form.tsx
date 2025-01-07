"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SettingsFormLayout } from "../settings-form-layout";

const languageSchema = z.object({
  language: z.string().min(1),
  region: z.string().min(1),
  dateFormat: z.string().min(1),
  timeFormat: z.string().min(1),
});

type LanguageSettings = z.infer<typeof languageSchema>;

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

const regions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "eu", label: "Europe" },
];

export const LanguageForm = () => {
  const form = useForm<LanguageSettings>({
    resolver: zodResolver(languageSchema),
    defaultValues: {
      language: "en",
      region: "us",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const updateSettings = async (data: LanguageSettings) => {
    toast.promise(
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Settings updated:", data);
      },
      {
        loading: "Updating language settings...",
        success: "Language settings updated!",
        error: "Failed to update language settings",
      },
    );
  };

  return (
    <SettingsFormLayout
      title="Language & Region"
      description="Set your language and regional preferences"
      onSubmit={handleSubmit(updateSettings)}
      isDirty={isDirty}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Language
          </label>
          <select
            {...register("language")}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Region
          </label>
          <select
            {...register("region")}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
          >
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </SettingsFormLayout>
  );
};
