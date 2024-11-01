import { Input } from "@/components/shared/ui/input";
import { ChatConversation } from "@/modules/chats/components/ChatConversation";
import { ChatsChatsList } from "@/modules/chats/components/ChatsChatsList";

export default function chatPage({ params }: { params: { chatId: string[] } }) {
  const chats = [
    {
      id: "1",
      name: "Wildelmy Colina",
      image: "/team/wildelmy-colina.jpg",
      lastMessage: "Hi, how are you?",
      messages: [],
    },
    {
      id: "2",
      name: "Wildelmy Colina",
      image: "/team/wildelmy-colina.jpg",
      lastMessage: "Hi, how are you?",
      messages: [],
    },
    {
      id: "3",
      name: "Wildelmy Colina",
      image: "/team/wildelmy-colina.jpg",
      lastMessage: "Hi, how are you?",
      messages: [],
    },
  ];

  const currentChat =
    chats.find((chat) => chat.id === params.chatId?.[0]) || chats[0];
  return (
    <>
      <div className="col-span-6 row-span-12 flex flex-col border-l pb-2 border-l-gray-2">
        <ChatConversation currentChat={currentChat} />
      </div>
      <div className="col-span-6 row-span-11">
        <div className="mx-5 bg-gray-150 rounded-full pl-4 my-3">
          <Input type="search" placeholder="Search" />
        </div>
        <ChatsChatsList chats={chats} currentChat={currentChat} />
      </div>
    </>
  );
}
