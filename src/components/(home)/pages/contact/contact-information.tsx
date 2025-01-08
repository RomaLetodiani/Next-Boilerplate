import { Mail, MapPin, Phone } from "lucide-react";

export const ContactInformation = () => (
  <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
    <div className="relative">
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-50" />
      <div className="relative">
        <h2 className="text-xl font-semibold">Visit Our Office</h2>
        <p className="mt-4 max-w-xl text-indigo-100">
          We&apos;d love to meet in person. Visit us at our office for a coffee and a chat.
        </p>

        <div className="mt-8 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-indigo-100">Address</p>
              <p className="text-sm font-medium">
                123 Business Street
                <br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-indigo-100">Phone</p>
              <p className="text-sm font-medium">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-indigo-100">Email</p>
              <p className="text-sm font-medium">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
