import Footer from "@/components/layout/Footer";
import AppIcon from "@/components/shared/AppIcon";
import Image from "next/image";

export const Notifications = () => {
  const profile = [
    {
      img: "/team/miller-garcía.jpg",
      name: "Miller García",
      profession: "Handyman, Virtual & Online",
    },
  ];
  const notifications = [
    {
      img: "/team/wildelmy-colina.jpg",
      name: "Wildelmy Colina",
      sms: "He has accepted your job offer",
    },
    {
      img: "/team/miller-garcía.jpg",
      name: "Miller García",
      sms: "has saved your post.",
    },
    {
      img: "/team/eder-oquendo.jpg",
      name: "Eder Oquendo",
      sms: "commented: I want your services",
    },
    {
      img: "/team/mila.jpg",
      name: "Camila Casarri",
      sms: "He has accepted your job offer",
    },
  ];
  return (
    <div className="col-span-5 px-4 pt-5 sticky top-0">
      <div className="mb-5">
        {profile.map((e, i) => (
          <div key={i} className="flex gap-3">
            <Image
              width="40"
              height="40"
              className="h-10 rounded-full"
              src={e.img}
              alt="Photo Profile"
            />
            <div className="leading-5">
              <p className="font-bold">{e.name}</p>
              <p className="text-gray-3">{e.profession}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="font-bold text-gray-1">Latest notifications</p>
      {notifications.map((e, i) => (
        <div key={i} className="py-3">
          <div className="flex gap-3">
            <Image
              width="40"
              height="40"
              className="h-10 rounded-full"
              src={e.img}
              alt="Photo Profile"
            />
            <div className="leading-5">
              <p className="font-bold">{e.name}</p>
              <p className="text-gray-3">{e.sms}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-3 text-gray-3 items-center">
        <p>See all</p>
        <AppIcon icon="arrow-right" width="17" className="font-bold" />
      </div>
      <Footer className="flex flex-wrap gap-2 pb-3 mt-10 text-gray-1 text-xs" />
    </div>
  );
};
