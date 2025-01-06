import { ActivityFeed } from "@/components/profile/activity-feed";
import { Availability } from "@/components/profile/availability";
import { ContactInfo } from "@/components/profile/contact-info";
import { ProjectsGrid } from "@/components/profile/projects-grid";
import { SkillsSection } from "@/components/profile/skills-section";
import { TeamMembers } from "@/components/profile/team-members";
import { Camera } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Profile Header */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800">
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="absolute right-4 top-4">
            <button className="rounded-lg bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/30">
              Edit Cover
            </button>
          </div>
        </div>
        <div className="relative px-6 pb-6">
          <div className="relative -top-12 flex items-end space-x-6">
            <div className="relative">
              <div className="h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-800">
                <div className="flex h-full items-center justify-center text-2xl font-bold text-gray-600 dark:text-gray-400">
                  JD
                </div>
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-white p-1.5 text-gray-700 shadow-lg transition-colors hover:text-indigo-600 dark:bg-gray-700 dark:text-gray-300">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="pb-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ActivityFeed />
          <ProjectsGrid />
          <SkillsSection />
        </div>
        <div className="space-y-8">
          <ContactInfo />
          <TeamMembers />
          <Availability />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
