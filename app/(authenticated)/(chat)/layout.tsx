import Link from "next/link";
import React from "react";

export default function chatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh border-r border-r-gray-1/50 w-fit">
      <div className="flex justify-between">
        <Link href="/chat">Chat</Link>
        <Link href="/my-shifts">My shifts</Link>
      </div>
      {children}
    </div>
  );
}

{
  /* <Tabs>
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="my-shifts">My shifts</TabsTrigger>
        </TabsList>
        <TabsContent value="chat">chat chat chatr</TabsContent>
        <TabsContent value="my-shifts">My shifts</TabsContent>
      </Tabs> */
}
