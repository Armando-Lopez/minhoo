import { Input } from "@/components/shared/ui/AppInput";
import { ChatConversation } from "@/modules/chats/components/ChatConversation";
import { ChatsChatsList } from "@/modules/chats/components/ChatsChatsList";

export default function chatPage({ params }: { params: { chatId: string[] } }) {
  const chats = [
    {
      id: '1',
      name: "Wildelmy Colina",
      image: "/team/wildelmy-colina.jpg",
      lastMessage: "Hi, how are you?",
    },
    {
      id: '2',
      name: "Wildelmy Colina",
      image: "/team/wildelmy-colina.jpg",
      lastMessage: "Hi, how are you?",
    },
    {
      id: '3',
      name: "Wildelmy Colina",
      image: "/team/wildelmy-colina.jpg",
      lastMessage: "Hi, how are you?",
    },
  ];

  const currentChat = chats.find((chat) => chat.id === params.chatId?.[0]);
  return (
    <>
      <div className="col-span-6 row-span-12 flex flex-col border-l border-l-gray-2">
       <ChatConversation currentChat={currentChat} />
      </div>
      <div className="col-span-6 row-span-11">
        <div className="mx-5 bg-gray-150 rounded-full pl-4 my-3">
          <Input type="search" variant="search" placeholder="Search" />
        </div>
        <ChatsChatsList chats={chats} currentChat={currentChat} />
      </div>
    </>
  );
}
