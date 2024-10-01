import AppTextField from "@/components/shared/ui/AppTextField";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Image from "next/image";

export const ProfileEdit = () => {
const [value, setValue] = useState<any>();
  
  return (
    <div className="pb-10">
      <div className="pb-5 px-5 mt-5 mb-5 border-b border-r-gray-1/50">
        <p className="text-lg font-medium">Edit profile</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/team/eder-oquendo.jpg"
            className="mb-3 rounded-full"
            alt="user-photo"
            width={111}
            height={111}
            loading="lazy"
          />
          <p className="text-primary-1">Edit photo</p>
        </div>
        <form className="grid gap-5 w-96 my-10">
          <div>
            <AppTextField
              name="first-name"
              id="first-name"
              label="First name"
              defaultValue="Miller"
            />
          </div>
          <div>
            <AppTextField
              name="last-name"
              id="last-name"
              label="Last name"
              defaultValue="García"
            />
          </div>
          <div>
            <p className="text-gray-1">Phone number</p>
            <PhoneInput
              label="Phone number"
              defaultCountry="AU"
              value={value}
              onChange={setValue}
            />
          </div>
          <div>
            <AppTextField
              name="about"
              id="about"
              label="About"
              defaultValue="I’m graphic designer focused on UX/UI design"
            />
          </div>
          <div>
            <AppTextField
              name="curren-location"
              id="curren-location"
              label="Current location"
              defaultValue="🇦🇺 Brisbane, Australia"
            />
          </div>
          <div className="mb-3">
            <p className="text-gray-1">Skills</p>
            <div className="flex flex-wrap gap-2 pb-2 border-b-gray-300 border-b-2">
              <span className="py-1 px-2 rounded-full bg-gray-2">Handyman</span>
              <span className="py-1 px-2 rounded-full bg-gray-2">Virtual & Online</span>
            </div>
          </div>
          <div>
            <AppTextField
              name="origin-country"
              id="origin-country"
              label="Country of origin"
              defaultValue="Colombia"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

// type Props = {
//   // eslint-disable-next-line no-unused-vars
//   toggleEdit: (value: boolean) => void;
// };
