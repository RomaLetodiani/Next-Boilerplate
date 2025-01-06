import { Mail, MapPin, Phone } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Information</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">john.doe@example.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">San Francisco, CA</span>
        </div>
      </div>
    </div>
  );
};
