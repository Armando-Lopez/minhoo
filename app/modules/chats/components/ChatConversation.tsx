import React from "react";
import ChatHeader from "@modules/chats/components/ChatHeader";
import { Input } from "@/components/shared/ui/AppInput";
import AppIcon from "@/components/shared/AppIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";
import { Button } from "@/components/shared/ui/button";

export const ChatConversation = ({ currentChat }: { currentChat: any }) => {
  console.log(currentChat);

  return (
    <>
      <div className="border-b border-b-gray-2 pl-5 pt-5">
        <ChatHeader />
      </div>
      <div className="max-h-[80vh] overflow-auto p-3">
       
      </div>
      <div className="p-3 mt-auto">
        <div className="flex items-center gap-2 p-2 border-1 border border-gray-2 rounded-lg">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AppIcon icon="plus" width={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="px-10 py-6 mb-5 flex gap-10 bg-gray-150 rounded-xl"
              align="start"
            >
              <div>
                <Button className="grid place-items-center w-14 h-14 rounded-full">
                  <AppIcon icon="picture" width={22} className="text-white" />
                </Button>{" "}
                Images
              </div>
              <div>
                <Button className="grid place-items-center w-14 h-14 rounded-full">
                  <AppIcon
                    icon="attachment"
                    width={28}
                    className="text-white"
                  />
                </Button>
                Archives
              </div>
              <div>
                <Button className="grid place-items-center w-14 h-14 rounded-full">
                  <AppIcon icon="user" width={22} className="text-white" />
                </Button>
                My contact
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder="Write a message"
            variant="no-border"
            className="flex-grow w-full"
          />
        </div>
      </div>
    </>
  );
};
