import LoginForm from "@/components/login/LoginForm";
import AppButton from "@/components/shared/AppButton";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="flex-grow container">
      <div className="container-secondary flex flex-wrap items-center justify-center gap-10 w-fit mx-auto pb-10 lg:pb-5 -mt-6 lg:mt-0">
        <div className="w-full lg:w-1/2 max-w-lg lg:max-w-3xl">
          <video
            autoPlay
            loop
            playsInline
            muted
            className="w-full h-full"
          >
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
              href="/"
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
                  id="down-load-app"
                  name="down  load app"
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
