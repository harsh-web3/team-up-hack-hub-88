
import { useState } from "react";
import { FilterSection } from "./FilterSection";
import { ProfileCard } from "./ProfileCard";
import { MessageModal } from "./MessageModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Users, TrendingUp, Loader } from "lucide-react";

// Sample data
const SAMPLE_PROFILES = [
  {
    id: 1,
    name: "Alex Chen",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    hackathons: ["ETHGlobal", "MLH Fellowship"]
  },
  {
    id: 2,
    name: "Sarah Miller",
    location: "London, UK",
    skills: ["UI/UX", "Figma", "Frontend", "Motion Design"],
    hackathons: ["Devpost Online"]
  },
  {
    id: 3,
    name: "Michael Kim",
    location: "Remote",
    skills: ["Python", "Machine Learning", "AWS", "TensorFlow"],
    hackathons: ["MLH Fellowship", "AI Hackathon"]
  },
  {
    id: 4,
    name: "Emma Wilson",
    location: "Berlin, Germany",
    skills: ["Full Stack", "React Native", "GraphQL", "Firebase"],
    hackathons: ["ETHGlobal", "Devpost Online"]
  },
  {
    id: 5,
    name: "Jason Wright",
    location: "Austin, TX",
    skills: ["Blockchain", "Solidity", "Web3", "Smart Contracts"],
    hackathons: ["ETHGlobal", "Chainlink Hackathon"]
  },
  {
    id: 6,
    name: "Sophia Lee",
    location: "Toronto, Canada",
    skills: ["Backend", "Java", "Spring", "Microservices"],
    hackathons: ["MLH Fellowship", "Hackathon Global"]
  }
];

export const TeammateFinder = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <FilterSection />
      
      <div className="mb-8">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Users className="w-4 h-4 mr-2" />
                All Teammates
              </TabsTrigger>
              <TabsTrigger value="trending" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </TabsTrigger>
            </TabsList>
            
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">
                {activeTab === "all" ? SAMPLE_PROFILES.length : Math.floor(SAMPLE_PROFILES.length / 2)}
              </span> results
            </div>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMPLE_PROFILES.map((profile, index) => (
                <div key={profile.id} style={{animationDelay: `${index * 0.1}s`}}>
                  <ProfileCard
                    name={profile.name}
                    location={profile.location}
                    skills={profile.skills}
                    hackathons={profile.hackathons}
                    onMessage={() => setSelectedUser(profile.name)}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMPLE_PROFILES.slice(0, 3).map((profile, index) => (
                <div key={profile.id} style={{animationDelay: `${index * 0.1}s`}}>
                  <ProfileCard
                    name={profile.name}
                    location={profile.location}
                    skills={profile.skills}
                    hackathons={profile.hackathons}
                    onMessage={() => setSelectedUser(profile.name)}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="gap-2 border-slate-200">
            <Loader className="w-4 h-4 animate-spin" />
            Load More
          </Button>
        </div>
      </div>

      <MessageModal
        open={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        recipientName={selectedUser || ""}
      />
    </div>
  );
};
