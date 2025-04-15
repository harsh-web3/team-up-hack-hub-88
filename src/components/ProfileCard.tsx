
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { MapPin, MessageSquare } from "lucide-react";

interface ProfileCardProps {
  name: string;
  location: string;
  skills: string[];
  hackathons: string[];
  onMessage: () => void;
}

export const ProfileCard = ({ name, location, skills, hackathons, onMessage }: ProfileCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <div className="w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center text-white font-semibold text-lg">
          {name[0]}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-[#F1F0FB] text-[#6E59A5]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Interested Hackathons</h4>
            <div className="flex flex-wrap gap-2">
              {hackathons.map((hackathon) => (
                <Badge key={hackathon} variant="outline" className="text-[#0EA5E9] border-[#0EA5E9]">
                  {hackathon}
                </Badge>
              ))}
            </div>
          </div>
          <Button 
            onClick={onMessage}
            className="w-full bg-[#6E59A5] hover:bg-[#9b87f5]"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
