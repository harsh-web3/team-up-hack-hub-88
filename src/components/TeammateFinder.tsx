
import { useState } from "react";
import { FilterSection } from "./FilterSection";
import { ProfileCard } from "./ProfileCard";
import { MessageModal } from "./MessageModal";

// Sample data
const SAMPLE_PROFILES = [
  {
    id: 1,
    name: "Alex Chen",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js"],
    hackathons: ["ETHGlobal", "MLH Fellowship"]
  },
  {
    id: 2,
    name: "Sarah Miller",
    location: "London, UK",
    skills: ["UI/UX", "Figma", "Frontend"],
    hackathons: ["Devpost Online"]
  },
  {
    id: 3,
    name: "Michael Kim",
    location: "Remote",
    skills: ["Python", "Machine Learning", "AWS"],
    hackathons: ["MLH Fellowship", "AI Hackathon"]
  },
  {
    id: 4,
    name: "Emma Wilson",
    location: "Berlin, Germany",
    skills: ["Full Stack", "React Native", "GraphQL"],
    hackathons: ["ETHGlobal", "Devpost Online"]
  }
];

export const TeammateFinder = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <FilterSection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PROFILES.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            location={profile.location}
            skills={profile.skills}
            hackathons={profile.hackathons}
            onMessage={() => setSelectedUser(profile.name)}
          />
        ))}
      </div>

      <MessageModal
        open={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        recipientName={selectedUser || ""}
      />
    </div>
  );
};
