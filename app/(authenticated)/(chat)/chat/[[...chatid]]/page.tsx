
import { Input } from "@/components/shared/ui/AppInput";
import { ChatsChatsList } from "@/modules/chats/components/ChatsChatsList";
import Image from "next/image";

export default function chatPage({ params }: { params: { slug: string } }) {

    console.log(params);
    
  return (
    <>
      <div className="col-span-6 row-span-12 border-l border-l-gray-1/50">
        dsd
      </div>
      <div className="col-span-6 row-span-11">
        <ChatsChatsList chatId="test"  />
        <div className="">
          <Input
            type="search"
            variant="search"
            className="bg-gray-150"
            placeholder="Search"
          />
          <div className="flex px-5 py-3 bg-gray-150">
            <Image
              src="/team/wildelmy-colina.jpg"
              width="44"
              height="44"
              alt="Image Post"
              className="rounded-full h-11"
            />
            <div className="pl-3">
              <p>Colina Wildelmy</p>
              <p>New offer · 1m</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
