import React from "react";
import ChatHeader from "@modules/chats/components/ChatHeader";

export const ChatConversation = ({ currentChat }: { currentChat: any }) => {
  console.log(currentChat);
  
  return (
    <div>
      <div className="border-b border-b-gray-2 pl-5 pt-5">
        <ChatHeader />
      </div>
    </div>
  );
};
