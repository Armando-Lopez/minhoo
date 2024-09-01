import Image from "next/image";
import React from "react";

export const ChatsChatsList = ({ chatId }: { chatId: string }) => {
  console.log(chatId);

  return (
    <>
      <div className="flex px-5 py-3 bg-gray-150 border-1 border-t border-gray-2">
        <Image
          src="/team/wildelmy-colina.jpg"
          width="44"
          height="44"
          alt="Image Post"
          className="rounded-full h-11"
        />
        <div className="pl-3">
          <p className="font-bold">Wildelmy Colina </p>
          <p>New offer</p>
        </div>
      </div>
      <div className="flex px-5 py-3">
        <Image
          src="/team/wildelmy-colina.jpg"
          width="44"
          height="44"
          alt="Image Post"
          className="rounded-full h-11"
        />
        <div className="pl-3">
          <p className="font-bold">Wildelmy Colina </p>
          <p>New offer</p>
        </div>
      </div>
      <div className="flex px-5 py-3">
        <Image
          src="/team/wildelmy-colina.jpg"
          width="44"
          height="44"
          alt="Image Post"
          className="rounded-full h-11"
        />
        <div className="pl-3">
          <p className="font-bold">Wildelmy Colina </p>
          <p>New offer</p>
        </div>
      </div>
    </>
  );
};
