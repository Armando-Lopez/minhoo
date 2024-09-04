"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ChatsChatsList = ({ chats }: { chats: any[], currentChat: any }) => {

  return (
    <div className="border-1 border-t border-gray-2">
      {chats.map((chat) => (
        <Link href={`/chat/${chat.id}`} className="flex px-5 py-3" key={chat.id}>
          <Image
            src={chat.image}
            width="44"
            height="44"
            alt="Image Post"
            className="rounded-full h-11"
          />
          <div className="pl-3">
            <p className="font-bold">{chat.name} </p>
            <p>{chat.lastMessage}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
