
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, MessageSquare, Star, Sparkles, Calendar } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface ProfileCardProps {
  name: string;
  location: string;
  skills: string[];
  hackathons: string[];
  onMessage: () => void;
}

export const ProfileCard = ({ 
  name, 
  location, 
  skills, 
  hackathons, 
  onMessage 
}: ProfileCardProps) => {
  // Get initials for avatar
  const initials = name.split(' ').map(n => n[0]).join('');
  
  // Generate color based on name
  const getRandomColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
      'from-blue-500 to-indigo-500',
      'from-emerald-500 to-teal-500', 
      'from-orange-500 to-amber-500',
      'from-pink-500 to-rose-500',
      'from-purple-500 to-violet-500',
    ];
    return colors[Math.abs(hash) % colors.length];
  };
  
  const avatarColor = getRandomColor(name);
  
  return (
    <Card className="w-full overflow-hidden border-slate-100 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in">
      <div className={`h-3 bg-gradient-to-r ${avatarColor} w-full`}></div>
      <CardContent className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className={`h-14 w-14 rounded-full bg-gradient-to-br ${avatarColor} text-white`}>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-0.5">
                  <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                  {location}
                </div>
              </div>
              {Math.random() > 0.5 && (
                <Badge variant="outline" className="flex items-center gap-1 border-amber-200 bg-amber-50 text-amber-700 text-xs py-1">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  Top Match
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              Skills
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-accent font-normal text-xs py-0.5 px-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-brand-500" />
              Interested Hackathons
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {hackathons.map((hackathon) => (
                <Badge 
                  key={hackathon} 
                  variant="outline" 
                  className="border-brand-200 bg-brand-50 text-brand-700 text-xs py-0.5 px-2"
                >
                  {hackathon}
                </Badge>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={onMessage}
            className="w-full mt-2 bg-gradient-to-r from-brand-600 to-blue-500 hover:opacity-90 btn-glow border-0"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
