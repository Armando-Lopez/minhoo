import LoginForm from "@/modules/login/components/LoginForm";
import AppButton from "@components/shared/AppButton";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="flex-grow container">
      <div className="container-secondary flex flex-wrap items-center justify-center gap-10 w-fit mx-auto pb-10 lg:pb-5 -mt-6 lg:mt-0">
        <div className="w-full lg:w-1/2 max-w-lg lg:max-w-3xl">
          <video autoPlay loop playsInline muted className="w-full h-full">
            <source src="/home/banner.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
        <div className="md:bg-white max-w-md md:p-10 border-radius-20 md:shadow-md">
          <LoginForm />
          <div className="text-center mt-5">
            <Link href="/" title="Reset password" className="text-black-2">
              Forgot your password
            </Link>
          </div>
          <hr className="my-5 border" />
          <div className="flex flex-col items-center">
            <Link
              href="/signup"
              title=" Create new account"
              className="grid place-items-center h-11 w-52 rounded-xl bg-green-1 text-white font-bold"
            >
              Create new account
            </Link>
          </div>
          <div className="mt-6 text-center">
            <strong className="font-normal">Download app</strong>
            <div className="flex gap-4 mt-4">
              <div className="ml-auto">
                <AppButton
                  title="Download on App Store"
                  id="down-load-app"
                  name="down load app"
                  className="flex items-center justify-center bg-black-1 text-white rounded-xl w-36 py-2 mx-auto"
                >
                  <img
                    src="/home/logo-apple.png"
                    alt="Logo Apple"
                    className="pr-3 w-7"
                  />
                  <p className="text-[8px]">
                    Download on the{" "}
                    <span className="block text-sm">App Store</span>
                  </p>
                </AppButton>
              </div>
              <div className="mr-auto">
                <AppButton
                  title="Download on Google Play"
                  id="get-on-gp"
                  name="get it on Google Play"
                  className="flex items-center justify-center bg-black-1 text-white rounded-xl w-36 py-2 mx-auto"
                >
                  <img
                    src="/home/logo-google-play.png"
                    alt="Logo Google Play"
                    className="pl-1.5 pr-3 w-8"
                  />
                  <p className="text-[8px] text-left">
                    GET IT ON <span className="block text-sm">Google Play</span>
                  </p>
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// login  coming Soon
// import AppButton from "@/components/shared/AppButton";
// import React from "react";

// export default function Home() {
//   return (
//     <section className="container">
//       <div className="lg:grid lg:grid-cols-2 xl:gap-28 2xl:gap-0 container-secondary lg:mx-auto pb-10 lg:pb-5 -mt-6 lg:mt-0">
//         <div>
//           <video
//             autoPlay
//             loop
//             playsInline
//             muted
//             className="mx-auto xl:mr-0 xl:max-w-[580px]"
//           >
//             <source src="/home/banner.mp4" type="video/mp4" />
//             Tu navegador no soporta el formato de video.
//           </video>
//         </div>
//         <div className="lg:bg-white lg:ml-auto lg:w-[90%] lg:h-full lg:grid lg:items-center border-radius-20">
//           <div>
//             <h2 className="text-primary-1 uppercase font-bold text-center mt-5 mb-4">
//               Coming Soon
//             </h2>
//             <div className="flex gap-4">
//               <div className="ml-auto">
//                 <AppButton
//                   id="down-load-app"
//                   title="download app"
//                   className="flex items-center justify-center bg-black-1 text-white rounded-xl w-36 py-2 mx-auto"
//                 >
//                   <img
//                     src="/home/logo-apple.png"
//                     alt="Logo Apple"
//                     className="pr-3 w-7"
//                   />
//                   <p className="text-[8px]">
//                     Download on the{" "}
//                     <span className="block text-sm">App Store</span>
//                   </p>
//                 </AppButton>
//               </div>
//               <div className="mr-auto">
//                 <AppButton
//                   id="get-on-gp"
//                   title="get it on Google Play"
//                   className="flex items-center justify-center bg-black-1 text-white rounded-xl w-36 py-2 mx-auto"
//                 >
//                   <img
//                     src="/home/logo-google-play.png"
//                     alt="Logo Google Play"
//                     className="pl-1.5 pr-3 w-8"
//                   />
//                   <p className="text-[8px] text-left">
//                     GET IT ON <span className="block text-sm">Google Play</span>
//                   </p>
//                 </AppButton>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="col-span-12 md:col-span-5 grid place-items-center">
//       <app-login-form />
//     </div>  */}
//       </div>
//     </section>
//   );
// }
