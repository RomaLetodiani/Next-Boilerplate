import { ActivityFeed } from "@/components/dashboard/profile/activity-feed";
import { Availability } from "@/components/dashboard/profile/availability";
import { ContactInfo } from "@/components/dashboard/profile/contact-info";
import { ProfileHeader } from "@/components/dashboard/profile/profile-header";
import { ProjectsGrid } from "@/components/dashboard/profile/projects-grid";
import { SkillsSection } from "@/components/dashboard/profile/skills-section";
import { TeamMembers } from "@/components/dashboard/profile/team-members";

const ProfilePage = () => (
  <div className="mx-auto max-w-4xl space-y-8">
    <ProfileHeader />

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

export default ProfilePage;
