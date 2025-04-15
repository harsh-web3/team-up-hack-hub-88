
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const FilterSection = () => {
  return (
    <Card className="w-full mb-8">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative">
            <Label>Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search teammates..."
                className="pl-9"
              />
            </div>
          </div>

          <div>
            <Label>Skills</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Location</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Remote/Online</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="eu">Europe</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Hackathon</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select hackathon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eth">ETHGlobal</SelectItem>
                <SelectItem value="devpost">Devpost Online</SelectItem>
                <SelectItem value="mlh">MLH Fellowship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button variant="outline" className="mr-2">
            <Filter className="w-4 h-4 mr-2" />
            Clear Filters
          </Button>
          <Button className="bg-[#6E59A5] hover:bg-[#9b87f5]">
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
