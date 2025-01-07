import { UseFormRegisterReturn } from "react-hook-form";

type SettingsCheckboxProps<T extends string> = {
  label: string;
  description: string;
} & UseFormRegisterReturn<T>;

export const SettingsCheckbox = <T extends string>({
  label,
  description,
  ...register
}: SettingsCheckboxProps<T>) => (
  <div className="flex items-start space-x-4">
    <div className="relative flex h-6 items-center">
      <input
        type="checkbox"
        {...register}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
      />
    </div>
    <div className="flex-1">
      <label className="text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  </div>
);
