"use client";
import React, { useState } from "react";
import ChatHeader from "@/modules/chats/components/ChatHeader";
import { Input } from "@/components/shared/ui/input";
import { ChatAddAttachments } from "@/modules/chats/components/ChatAddAttachments";
import { ChatAddAttachmentsProfile } from "@/modules/chats/components/ChatAddAttachmentsProfile";

export const ChatConversation = ({ currentChat }: { currentChat: any }) => {
  const [messages, setMessages] = useState(currentChat.messages);

  function addMessage(message: any) {
    setMessages([...messages, message]);
  }

  return (
    <>
      <div className="border-b border-b-gray-2 pl-5 pt-5">
        <ChatHeader />
      </div>
      <div className="overflow-auto p-3">
        <div className="grid gap-3">
          {messages.map((message: any, i: number) => {
            if (message.type === "profileCard") {
              return <ChatAddAttachmentsProfile key={i} />;
            }
          })}
        </div>
      </div>
      <div className="p-3 mt-auto">
        <div className="flex items-center gap-2 p-2 border-1 border border-gray-2 rounded-lg">
          <ChatAddAttachments onAddMessage={addMessage} />
          <Input placeholder="Write a message" className="flex-grow w-full" />
        </div>
      </div>
    </>
  );
};
