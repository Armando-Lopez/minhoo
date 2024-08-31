import Link from "next/link";
import React from "react";

export default function chatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh grid grid-cols-12 grid-rows-12 gap-1">
      <div className="col-span-6 row-span-1 right-1 flex justify-between">
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
