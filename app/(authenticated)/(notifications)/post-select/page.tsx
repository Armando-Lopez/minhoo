import PostItemComments from "@/modules/news/components/post/PostItemComments";
import PostItemFooter from "@/modules/news/components/post/PostItemFooter";
import PostItemHeader from "@/modules/news/components/post/PostItemHeader";
import { OngoingServicesServiceCard } from "@/modules/request-services/ongoing-services/components/OngoingServicesServiceCard";
import Image from "next/image";

export default function PostSelectPage() {
  const withImg = true;
  const isTypeText = false;
  return (
    <div
      className={`min-h-dvh py-5 pl-5 ${
        !withImg && "max-w-[500px] border-r border-gray-3 pr-5"
      }`}
    >
      <div className="w-full">
        <article className="flex ">
          {withImg && (
            <Image
              src="/team/wildelmy-colina.jpg"
              alt=""
              width={466}
              height={466}
              className="w-auto max-w-[466px] object-cover mb-4 mr-7"
            />
          )}
          <div className="flex flex-col pt-2">
            <div className="flex">
              <PostItemHeader />
            </div>
            {isTypeText ? (
              <p>
                We are a branding, design and creative agency. As a branding
                specialist, we transform creative lorem ipsum imdor amet setor.
              </p>
            ) : (
              <div className="w-full">
                <OngoingServicesServiceCard
                  icon="building"
                  category="On-site"
                  description="I urgently need to fix a rupture in one of the pipes in my apartment."
                  jobType="Handyman"
                  price="50.00"
                  time="2 hours ago"
                  className="mx-auto mt-5"
                  location="Brisbane, Australia"
                />
              </div>
            )}
            <div className="my-5">
              <PostItemFooter saveOption />
            </div>
            <PostItemComments />
          </div>
        </article>
      </div>
    </div>
  );
}
