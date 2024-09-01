import { Input } from "@/components/shared/ui/AppInput";
import { ChatsChatsList } from "@/modules/chats/components/ChatsChatsList";
import PostItemHeader from "@/modules/news/components/post/PostItemHeader";

export default function chatPage({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <>
      <div className="col-span-6 row-span-12 border-l border-l-gray-2">
        <div className="border-b border-b-gray-2 pl-5 pt-5">
          <PostItemHeader />
        </div>
      </div>
      <div className="col-span-6 row-span-11">
        <div className="mx-5 bg-gray-150 rounded-full pl-4 my-3">
          <Input
            type="search"
            variant="search"
            placeholder="Search"
            className=""
          />
        </div>
        <ChatsChatsList chatId="test" />
      </div>
    </>
  );
}
