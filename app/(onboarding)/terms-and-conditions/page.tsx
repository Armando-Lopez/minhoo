"use client";
import AppIcon from "@/components/shared/AppIcon";
import {
  AppTabContent,
  AppTabLabel,
  AppTabWrapper,
} from "@/components/shared/AppTabs";
import eventBus from "@/eventbus";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import React, { useEffect, useState } from "react";

export default function PrivacyTermsAndConditions() {
  const { lg } = useBreakpoints();
  const [tab, setTab] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (lg) {
      setTab("legal-terms");
    }
  }, [lg]);

  useEffect(() => {
    const unsubscribe = eventBus.subscribe("backToTermsItems", () => {
      setTab(undefined);
      eventBus.publish("onToggleShowTermsItem", false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function handleSetTab(value: string) {
    if (value) {
      eventBus.publish("onToggleShowTermsItem", true);
      setTab(value);
    }
  }

  return (
    <>
      <div className="container flex-grow grid grid-cols-12 gap-5 mb-10 lg:mb-32 lg:mt-5">
        <AppTabWrapper
          tabClass="flex justify-between w-full p-2 rounded-md"
          activeTabClass="bg-primary-1"
          value={tab}
          onChange={(val) => handleSetTab(val)}
        >
          {tab && !lg ? null : (
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
              <div className="sticky top-20">
                <AppTabLabel name="legal-terms">
                  <span className="flex gap-3 items-center">
                    <AppIcon icon="shield" width={24} />
                    Legal terms
                  </span>
                  <AppIcon
                    icon="greater-than"
                    width={20}
                    className="lg:hidden rotate-90"
                  />
                </AppTabLabel>
                <AppTabLabel name="privacy-and-data">
                  <span className="flex gap-3 items-center">
                    <AppIcon icon="lock" width={24} />
                    Privacy and Data
                  </span>
                  <AppIcon
                    icon="greater-than"
                    width={20}
                    className="lg:hidden rotate-90"
                  />
                </AppTabLabel>
              </div>
            </div>
          )}
          <div className="col-span-12 lg:col-span-9">
            <AppTabContent name="legal-terms">
              <h3 className="text-3xl md:text-4xl">Legal terms</h3>
              <strong className="block my-1">Minhoo.app</strong>
              <section>
                <p className="mb-6">APP LEGAL TERMS</p>
                <p className="mb-4">
                  Eder Antonio Oquendo Calderon. Company identified with ABN
                  87951520527 communicates to the users of Minhoo.app the
                  privacy rights, conditions, and contract that protect them
                  during the access of our electronic services. This regulates
                  the relationship between Minhoo.app and its users, who must be
                  natural persons of legal age or legal entities duly
                  constituted in Australia or in any country in which they
                  benefit from the application so they fully accept our policies
                  and conditions of use as an essential requirement to offer or
                  receive our services.
                </p>
                <p className="mb-4">
                  The user declares and guarantees that they have sufficient
                  powers to accept our policies by themselves or any of their
                  agents, representatives, or factors acting on their behalf,
                  and that by accepting them, they are bound by this policy.
                  Where appropriate, the user guarantees that they are the owner
                  and responsible for the physical or virtual documentation
                  forwarded, sent, and registered in Minhoo.app about the
                  personal and professional identity, the constitution of their
                  company, and any other commercial documentation that they may
                  provide to validate their registration within or outside of
                  Minhoo.app. Likewise, the user accepts that this information
                  will be available so that any user who is duly registered and
                  wishes to offer or receive a service can verify the veracity
                  of the same with the aim of offering greater security and
                  confidence. This policy is oriented to the use and management
                  that Minhoo.app gives to the information provided by users
                  when subscribing to our electronic service. This policy does
                  not apply for any reason to people, professionals, companies,
                  product or service providers that are external to Minhoo.app
                  or that are not duly registered in our technological platform.
                </p>
                <p className="mb-4">
                  The voluntary use of Minhoo.app automatically establishes the
                  condition of the user within the website and implies full and
                  unreserved acceptance of each and every one of the provisions
                  included in this policy in each version published by
                  Minhoo.app or at the same time in which the user accesses the
                  registry. Consequently, the user must read the entire policy
                  as it may be modified at any time to improve the service, so
                  we ask all users to periodically review our policies. If you
                  have any questions, please feel free to contact our team at
                  info@minhoo.app (business hours subject to office hours Monday
                  through Thursday from 1:30 p.m. to 5:30 p.m.). The company
                  Minhoo.app recommends reading the entire policy. If you have
                  questions, contact us as soon as possible, and if you disagree
                  with any of the established points, we respectfully ask you
                  not to register.
                </p>
              </section>
            </AppTabContent>
            <AppTabContent name="privacy-and-data">
              <h3 className="text-3xl md:text-4xl">
                Privacy and Data Protection Policy
              </h3>
              <section className="mt-5">
                <p className="mb-4">
                  In accordance with the provisions of the Personal Data
                  Protection Law, Minhoo.app undertakes to adopt the necessary
                  measures that are within its reach to ensure the privacy of
                  the personal data collected in a way that guarantees its
                  security, avoids its alteration, loss, or unauthorised
                  treatment. In addition, in order to comply with the provisions
                  of the Personal Data Protection Law, all personal data that is
                  collected through the application will be treated in
                  accordance with the principles of loyalty, purpose,
                  proportionality, data security, transparency, confidentiality,
                  legality, portability, truthfulness, and accuracy. All
                  processing of personal data will be subject to the consent of
                  the owner. In any case, the use of financial or patrimonial
                  data will require the express authorisation of their owners;
                  however, this may be given through the application using the
                  mechanisms enabled for this purpose, and in any case, the
                  greatest diligence and care will be given to this type of
                  data. You voluntarily accept and give your consent to
                  Minhoo.app to use and process all the personal information
                  provided, such as your full name, gender, personal
                  identification document, date of birth, email, telephone
                  number, data from your debit and/or credit card, and other
                  information that may be stored and used occasionally by
                  Minhoo.app.
                </p>
                <p className="mb-4">
                  At all times, it will be ensured that the personal data
                  contained in the databases or files that are used, if
                  applicable, are relevant, correct, and updated for the
                  purposes for which they were collected.
                </p>
                <p className="mb-4">
                  The application may include hyperlinks or links that may
                  access web pages of third parties other than Minhoo.app. The
                  owners of these websites will have their own privacy and data
                  protection policies for which Minhoo.app does not assume any
                  type of responsibility for the data that is provided by the
                  user through any website other than Minhoo.app.
                </p>
                <p className="mb-4">
                  Minhoo.app reserves the right to modify its Privacy Policy
                  according to its needs or derived from any change in the
                  legislation. Access or use of the application after said
                  changes will imply acceptance of these changes.
                </p>
                <p className="mb-4">
                  On the other hand, access to the application may involve the
                  use of cookies, which are small amounts of information that
                  are stored in the browser used by the user. Cookies facilitate
                  navigation, make it more friendly, and do not damage the
                  navigation device. For this, they can collect information to
                  enter the application, store user&apos;s preferences, as well
                  as the interaction that the user has with the application, for
                  instance: the date and time it is accessed, the time it has
                  been used, the sites visited before and after, the IP address
                  from which the user accesses, the frequency of visits, etc.
                </p>
                <p className="mb-4">
                  This type of information will be used to improve the
                  application, detect errors, and identify possible needs that
                  the user may have in order to offer better quality services
                  and content to users. In any case, the information collected
                  will be anonymous and individual users will not be identified.
                </p>
                <p className="mb-4">
                  In the event that the user does not want this type of
                  information to be collected, they must disable, reject,
                  restrict, and/or eliminate the use of cookies in their
                  internet browser. The procedures to perform these actions may
                  differ from one browser to another; consequently, it is
                  suggested to review the instructions provided by the browser
                  developer. In the event that the user rejects the use of
                  cookies (totally or partially), they may continue to use the
                  application, although some of its functions may be disabled.
                </p>
                <p className="mb-4">
                  It is possible that in the future these policies regarding
                  cookies will change or be updated; for this reason, it is
                  advisable to review the updates that are made to these terms
                  and conditions in order to be adequately informed about how
                  and why we use the cookies that are generated when entering or
                  using Minhoo.app.
                </p>
                <p className="mb-4 font-bold">---</p>
                <p className="mb-4">
                  <span className="block font-bold mb-4">
                    Intellectual Property.
                  </span>{" "}
                  Eder Antonio Oquendo Calderon is the owner of all the
                  intellectual and industrial property rights of the software
                  and/or the Minhoo.app application, understanding by this the
                  source code that makes its operation possible, as well as the
                  images, audio or video files, logos, brands, texts, databases,
                  processes, computer codes, colour combinations, structures,
                  designs, and other elements that distinguish it. They will
                  therefore be protected by Australian legislation on copyright,
                  trademarks, patents, trade secrets, and everything related to
                  intellectual and industrial property, as well as by applicable
                  international treaties.
                </p>
                <p className="mb-4">
                  Consequently, it is expressly prohibited to reproduce,
                  distribute, or disseminate the contents of the software and/or
                  the application for commercial purposes on any support and by
                  any technological means without the authorisation of
                  Minhoo.app or its licensors.
                </p>
                <p className="mb-4">
                  The user agrees to respect the intellectual and industrial
                  property rights of Minhoo.app. However, in addition to being
                  able to view the elements of the software and/or the
                  Minhoo.app application, the user may print, copy, or store
                  them as long as it is exclusively for their strictly personal
                  use.
                </p>
                <p className="mb-4">
                  On the other hand, the user will refrain from deleting,
                  altering, or manipulating any element, file, or content of the
                  software and/or application and for no reason will carry out
                  acts tending to violate the security files or databases that
                  are protected either through restricted access by means of a
                  username and password or because they do not have permissions
                  to view, edit, or manipulate them.
                </p>
                <p className="mb-4">
                  In the event that the user or any third party considers that
                  any of the content of the software and/or the application
                  constitutes a violation of the rights of protection of
                  industrial or intellectual property, they must immediately
                  notify the designated agent of Minhoo.app. Visit the
                  Minhoo.app website in the support section and submit your
                  claim. (www.minhoo.app)
                </p>
                <p className="mb-4 font-bold">---</p>
                <p className="mb-4">
                  <span className="block font-bold mb-4">
                    Third-Party Content and Services
                  </span>
                  Services may be made available or accessible in connection
                  with third-party content and services (including advertising)
                  that Minhoo.app does not control. You acknowledge and agree
                  that different privacy policies and conditions may apply to
                  your use of such third-party content and services. Minhoo.app
                  does not endorse such third-party services and content and in
                  no case will it be responsible for any product or service of
                  such third-party providers. Additionally, Apple Inc., Google
                  Inc., Microsoft Corporation, and/or their corresponding
                  international subsidiaries or affiliates will be third-party
                  beneficiaries in this contract if you access the services
                  using applications developed for mobile devices with iOS,
                  Android, or Microsoft Windows systems, respectively. These
                  third-party beneficiaries are not party to this contract and
                  are not responsible for the provision or support of the
                  services in any way.
                </p>
                <p className="mb-4">
                  Your access to Services using these devices is subject to the
                  conditions established in the applicable third-party
                  beneficiary conditions of service.
                </p>
                <p className="mb-4 font-bold">---</p>
                <p className="font-bold mb-4">
                  The Services and All Rights Relating Thereto Are and Will
                  Remain Property of Minhoo.app or Its Licensors
                </p>
                <p className="mb-4">
                  Neither these conditions nor your use of the services transfer
                  or grant you any rights:
                </p>
                <ol className="mb-4">
                  <li>
                    - About or concerning the services except for the limited
                    licence granted above;
                  </li>
                  <li>
                    - To use or mention in any way the company names, logos,
                    product, and service names, trademarks, or service marks of
                    Minhoo.app or its licensors.
                  </li>
                </ol>
                <p className="mb-4 font-bold">---</p>
                <p className="mb-4 font-bold">Your Use of the Services</p>
                <p className="mb-4">
                  Within the Minhoo.app application, there are two types of
                  users: <br /> Members: Those who, for a single monthly amount
                  paid to Minhoo.app (registration), will have the right to
                  provide their services within the application. <br />
                  Users: These will be the people who request the services of
                  our partners and pay them the amount they agree to.
                </p>
                <p className="mb-4 font-bold">User Account</p>
                <p className="mb-4">
                  In order to use most aspects of the services, you must
                  register and maintain an active personal user or partner
                  account. To obtain an account, you must be at least 21 years
                  old. The account registration requires you to communicate
                  certain personal information to Minhoo.app, such as your name,
                  address, mobile phone number, licence ID, among other personal
                  information, to validate your information. You agree to keep
                  the information in your account accurate, complete, and
                  up-to-date. Failure to keep your account information accurate,
                  complete, and up-to-date may result in your inability to
                  access and use the services or in Minhoo.app&apost;s
                  termination of the conditions hereby entered into. You are
                  responsible for all activity that occurs on your account and
                  you agree to keep your account username and password secure
                  and secret at all times. Unless Minhoo.app allows otherwise in
                  writing, you can only have one account.
                </p>
                <p className="mb-4 font-bold">
                  User Requirements and Behaviour
                </p>
                <p className="mb-4">
                  By using the application, you will not cause nuisance,
                  inconvenience, discomfort, or damage to property either to the
                  third-party provider or to any other party. You may be
                  required to provide an identity document or other identity
                  verification element to access or use the services and you
                  hereby agree that you may be denied access or use of the
                  services if you refuse to provide the identity document or the
                  identity verification element.
                </p>
                <p className="mb-4 font-bold">Text Messages or Calls</p>
                <p className="mb-4">
                  By creating an account, you agree that users can send you text
                  messages or calls as part of the normal business of their use
                  of the application.
                </p>
                <p className="mb-4 font-bold">Promotional Codes</p>
                <p className="mb-4">
                  Minhoo.app may, at its sole discretion, create promotional
                  codes that can be exchanged for account credit or other
                  elements or benefits related to the services and/or services
                  of a third-party provider subject to any additional conditions
                  that Minhoo.app establishes on the basis of each promotional
                  code. You agree that the promotional codes:
                </p>
                <ol className="mb-4">
                  <li>
                    - Must be used for their intended purpose and lawfully.
                  </li>
                  <li>
                    - May not be duplicated, sold, or transferred in any way or
                    made available to the general public (whether posted in a
                    public forum or otherwise) unless authorised by Minhoo.app.
                  </li>
                  <li>
                    - May be invalidated by Minhoo.app at any time and for any
                    reason without liability to Minhoo.app or its licensors.
                  </li>
                  <li>
                    - May be used only in accordance with the specific
                    conditions that Minhoo.app establishes for said promotional
                    code.
                  </li>
                  <li>- Are not valid as cash.</li>
                  <li>- May expire before you use them.</li>
                </ol>
                <p className="mb-4">
                  Minhoo.app reserves the right to withhold or deduct the credit
                  or other elements or benefits obtained through the use of
                  promotional codes by you or any other user in the event that
                  Minhoo.app determines or believes that the use or exchange of
                  the promotional codes was wrong, fraudulent, illegal, or in
                  violation of the conditions of the promotional code or these
                  conditions.
                </p>
                <p className="mb-4 font-bold">Content Provided by User</p>
                <p>
                  Minhoo.app has a space for you to post or otherwise make
                  available to Minhoo.app through the application text content
                  and information, audio and/or visual, including comments and
                  opinions regarding services, initiation of support requests,
                  as well as presentation of admissions for competitions and
                  promotions. All user content provided by you will remain your
                  property. However, by providing user content to Minhoo.app,
                  you grant a worldwide, perpetual, irrevocable, transferable,
                  royalty-free licence with the right to sublicense, use, copy,
                  modify, create derivative works, distribute, publicly display,
                  publicly present, or otherwise exploit in any way said user
                  content in all formats and distribution channels now known
                </p>
              </section>
            </AppTabContent>
          </div>
        </AppTabWrapper>
      </div>
    </>
  );
}
