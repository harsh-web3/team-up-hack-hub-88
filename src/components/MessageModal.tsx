
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send, X } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface MessageModalProps {
  open: boolean;
  onClose: () => void;
  recipientName: string;
}

export const MessageModal = ({ open, onClose, recipientName }: MessageModalProps) => {
  // Get initials for avatar
  const initials = recipientName.split(' ').map(n => n?.[0] || '').join('');
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] rounded-xl border-slate-200 shadow-lg">
        <DialogHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-brand-500 text-white">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <DialogTitle className="text-xl">Message {recipientName}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Connect and discuss potential collaboration
            </DialogDescription>
          </div>
          <Button 
            type="button" 
            variant="ghost" 
            size="icon"
            className="absolute right-4 top-4 rounded-full h-8 w-8 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <Textarea
            placeholder="Write your message here..."
            className="min-h-[150px] resize-none border-slate-200"
          />
        </div>
        <DialogFooter>
          <Button className="bg-gradient-to-r from-brand-600 to-blue-500 hover:opacity-90 btn-glow border-0">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
