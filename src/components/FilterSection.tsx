
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Search, Filter, MapPin, Code, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const FilterSection = () => {
  return (
    <div className="w-full mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <h2 className="text-2xl font-semibold mb-4">Find Teammates</h2>
      <Card className="overflow-hidden bg-gradient-card border-slate-100 shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6">
          <div className="md:col-span-4 relative">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, skills or location..."
                className="pl-10 bg-white/80 border-slate-200 rounded-lg h-12"
              />
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1.5">
                      <Code className="h-3.5 w-3.5" />
                      <span>Skills</span>
                    </div>
                    <Select>
                      <SelectTrigger className="bg-white/80 border-slate-200 h-12 rounded-lg">
                        <SelectValue placeholder="Select skills" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frontend">Frontend</SelectItem>
                        <SelectItem value="backend">Backend</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="mobile">Mobile</SelectItem>
                        <SelectItem value="ai">AI/ML</SelectItem>
                        <SelectItem value="blockchain">Blockchain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Filter by skills</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Location</span>
                    </div>
                    <Select>
                      <SelectTrigger className="bg-white/80 border-slate-200 h-12 rounded-lg">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Remote/Online</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="eu">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Filter by location</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Hackathon</span>
                    </div>
                    <Select>
                      <SelectTrigger className="bg-white/80 border-slate-200 h-12 rounded-lg">
                        <SelectValue placeholder="Select hackathon" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eth">ETHGlobal</SelectItem>
                        <SelectItem value="devpost">Devpost Online</SelectItem>
                        <SelectItem value="mlh">MLH Fellowship</SelectItem>
                        <SelectItem value="hackathon">HackHarvard</SelectItem>
                        <SelectItem value="treeHacks">TreeHacks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Filter by hackathon</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        <div className="flex justify-end px-6 pb-6">
          <Button variant="outline" className="mr-3 border-slate-200">
            <Filter className="w-4 h-4 mr-2" />
            Clear Filters
          </Button>
          <Button className="bg-brand-600 hover:bg-brand-700">
            Search
          </Button>
        </div>
      </Card>
    </div>
  );
};
