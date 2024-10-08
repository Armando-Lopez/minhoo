import ProfilePostsItem from "@/modules/profile/components/profile-information/ProfilePostsItem";

export default function SavedPage() {
  return (
    <div className="py-6">
      <div>
        <div className="col-span-7 row-span-1 border-b border-gray-2 mb-4 pt-9 px-8 sticky top-0 bg-white">
          <h2 className="text-lg font-medium">Saved</h2>
        </div>
        <div className="grid grid-cols-3 mb-12 px-14">
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
          <ProfilePostsItem />
        </div>
      </div>
    </div>
  );
}
