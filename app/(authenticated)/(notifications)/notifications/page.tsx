import Image from "next/image";

export default function Notifications() {
  const profile = [
    {
      img: "/team/miller-garcía.jpg",
      name: "Miller García",
      profession: "Handyman, Virtual & Online",
    },
    {
      img: "/team/wildelmy-colina.jpg",
      name: "Miller García",
      profession: "Handyman, Virtual & Online",
    },
    {
      img: "/team/wildelmy-colina.jpg",
      name: "wildelmy colina",
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
    <div className="col-span-5 px-14 pt-2 pb-12">
      <div className="mb-2">
        {profile.map((e, i) => (
          <div key={i} className="flex gap-3 py-3">
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
      <p className="font-bold text-black-1 mb-2">Yesterday</p>
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
    </div>
  );
}
