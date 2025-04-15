
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-[#6E59A5]">HackMate</h1>
          <span className="text-gray-500">Find Your Perfect Hackathon Team</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">
            <MessageCircle className="w-5 h-5 mr-2" />
            Messages
          </Button>
          <Button variant="outline">Sign In</Button>
          <Button className="bg-[#6E59A5] hover:bg-[#9b87f5]">Create Profile</Button>
        </div>
      </div>
    </header>
  );
};
