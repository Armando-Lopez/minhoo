import React, { useState } from "react";
import AppIcon from "@/components/shared/AppIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";
import { Button } from "@/components/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";

import { ChatAddAttachmentsProfile } from "@/modules/chats/components/ChatAddAttachmentsProfile";
export const ChatAddAttachments = ({
  onAddMessage,
}: {
  // eslint-disable-next-line no-unused-vars
  onAddMessage: ({ type }: { type: string }) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  function addMessage() {
    const message = { type: "profileCard" };
    onAddMessage(message);
    setIsOpen(false);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AppIcon icon="plus" width={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="px-10 py-6 mb-5 flex gap-10 bg-gray-150 rounded-xl"
        align="start"
      >
        <div className="flex flex-col items-center">
          <Button className="grid place-items-center w-14 h-14 rounded-full">
            <AppIcon icon="picture" width={22} className="text-white" />
          </Button>{" "}
          Images
        </div>
        <div className="flex flex-col items-center">
          <Button className="grid place-items-center w-14 h-14 rounded-full">
            <AppIcon icon="attachment" width={28} className="text-white" />
          </Button>
          Archives
        </div>
        <div className="flex flex-col items-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="grid place-items-center w-14 h-14 rounded-full">
                <AppIcon icon="user" width={22} className="text-white" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-3 text-center text-gray-3">
                  My contact
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="grid gap-3">
                    <ChatAddAttachmentsProfile />
                    <Button
                      className="rounded-full"
                      onClick={() => addMessage()}
                    >
                      Share my contact
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          My contact
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
