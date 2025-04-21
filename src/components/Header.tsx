
import { Button } from "./ui/button";
import { MessageCircle, User, UserPlus } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">TeamSync</h1>
            <p className="text-xs text-muted-foreground">Find your hackathon dream team</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Messages</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 border-slate-200"
          >
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </Button>
          <Button 
            className="bg-gradient-to-r from-brand-600 to-blue-500 hover:opacity-90 transition-opacity btn-glow border-0 flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Join Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
