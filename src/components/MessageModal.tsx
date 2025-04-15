
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";

interface MessageModalProps {
  open: boolean;
  onClose: () => void;
  recipientName: string;
}

export const MessageModal = ({ open, onClose, recipientName }: MessageModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Message {recipientName}</DialogTitle>
          <DialogDescription>
            Send a message to connect and discuss potential collaboration
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <Textarea
            placeholder="Write your message here..."
            className="min-h-[120px]"
          />
          <div className="flex justify-end">
            <Button className="bg-[#6E59A5] hover:bg-[#9b87f5]">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
