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
                    Terms and Conditions
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
                    Privacy Policy
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
              <h3 className="text-3xl md:text-4xl">Minhoo Terms of Service</h3>
              <section className="flex flex-col gap-4 mt-4 mb-24 lg:mb-36">
                <p>
                  These Terms of Service ({"Terms"}) are part of the User
                  Agreement, a legally binding contract that governs the use of
                  Minhoo. You should read these Terms of Service ({"Terms"}) in
                  full, but here are some key points to keep in mind:
                </p>
                <p>
                  <span className="font-bold">
                    You will see advertising on the platform:{" "}
                  </span>
                  In exchange for access to the Services, Minhoo and our
                  third-party providers and partners may show you
                  advertisements.
                </p>
                <p>
                  <span className="font-bold">
                    When posting Content and using the Services, you must comply
                    with this User Agreement and applicable law:
                  </span>{" "}
                  You are responsible for your use of the Services and the
                  Content. You must comply with this User Agreement, its
                  incorporated policies, and all applicable laws.
                </p>
                <p>
                  <span className="font-bold">
                    You must adhere to the acceptable use terms of the Services:{" "}
                  </span>
                  You may not access the Services in any way other than through
                  the currently available published interfaces that we provide.
                  For example, this means you cannot scrape the Services,
                  attempt to bypass technical limitations we impose, or attempt
                  to disrupt the operation of the Services.
                </p>
                <p>
                  <span className="font-bold">
                    We have broad enforcement rights:
                  </span>{" "}
                  Minhoo reserves the right to take enforcement actions against
                  you if you violate these terms, such as removing your Content,
                  limiting visibility, cutting off access to Minhoo, or taking
                  legal action. We may also suspend or cancel your account for
                  other reasons, such as prolonged inactivity, risk of legal
                  exposure, or commercial impracticality.
                </p>
                <p>
                  <span className="font-bold">
                    Intellectual Property Licenses:
                  </span>{" "}
                  You retain ownership and rights to any Content you post or
                  share, and you grant us a broad, royalty-free license to make
                  your Content available to the rest of the world and allow
                  others to do the same. Similarly, we provide you with a
                  license to use the software we provide as part of the
                  Services, such as the Minhoo mobile app, solely for the
                  purpose of enabling you to use and enjoy the benefits of the
                  Services.
                </p>
                <p>
                  <span className="font-bold">
                    Your use of the Services is at your own risk:
                  </span>{" "}
                  We provide the Services {`"AS IS" and "AS AVAILABLE,"`} and
                  disclaim all warranties, liabilities, and commitments to you
                  or others to the extent permitted by law. You may be exposed
                  to offensive or harmful content posted by other users. The
                  Services may change from time to time, and we may limit or
                  terminate the availability of the Services or specific
                  features for you or other users at any time.
                </p>
                <p>
                  <span className="font-bold">
                    Remedies and Dispute Mechanisms:
                  </span>{" "}
                  You have the right to terminate this agreement at any time by
                  deactivating your account and stopping the use of the
                  Services. Note that we are not responsible for certain types
                  of damages as described in the agreement, and in any case, our
                  total liability will not exceed 100 USD, if applicable.
                </p>
                <p>
                  Furthermore, if you believe that your Content has been copied
                  in a manner that constitutes copyright infringement, the
                  reporting process is detailed in these Terms.
                </p>
                <p>
                  <span className="font-bold">Privacy:</span> Our Privacy Policy{" "}
                  (
                  <p
                    onClick={() => handleSetTab("privacy-and-data")}
                    className="inline text-blue-500 cursor-pointer underline"
                  >
                    https://minhoo.com/privacy
                  </p>
                  ) Describes how we handle the information you provide when
                  using the Services. By using Minhoo, you consent to the
                  collection and use of your information as described in this
                  policy.
                </p>
                <p>
                  <span className="font-bold">Who can use the Services:</span>{" "}
                  You may use the Services if you agree to enter into a binding
                  contract with us and have not been disqualified from receiving
                  services according to applicable laws in your jurisdiction.
                  You must be at least 18 years old to use the Services. If you
                  use the Services on behalf of an entity, you affirm that you
                  are authorized to bind that entity to comply with these Terms.
                </p>
                <p>
                  <span className="font-bold">Service Content:</span> You are
                  responsible for your use of the Services and the Content you
                  provide. You agree not to post any content that infringes the
                  rights of third parties, including copyright, trademarks, or
                  intellectual property. Minhoo reserves the right to remove
                  content that violates our policies or applicable laws.
                </p>
                <p>
                  <span className="font-bold">Misuse of the Services:</span> You
                  are not allowed to access the Services in unauthorized ways,
                  such as bypassing security measures, extracting data without
                  permission, or engaging in activities that may affect{" "}
                  {"Minhoo's"} operation.
                </p>
                <p>
                  <span className="font-bold">
                    Suspension or Termination of the Services:
                  </span>{" "}
                  Minhoo may suspend or cancel your account if you violate these
                  Terms or for any other justified reason. We will make
                  reasonable efforts to notify you if this occurs, and you may
                  appeal this decision through our support.
                </p>
                <p>
                  <span className="font-bold">Limitation of Liability:</span>{" "}
                  Access and use of the Services are at your own risk. Minhoo is
                  not responsible for indirect, incidental, or consequential
                  damages arising from the use or inability to use our Services.
                </p>
                <p className="font-bold text-2xl mt-5">
                  TERMS AND CONDITIONS OF USE OF MINHOO
                </p>
                <ol className="list-decimal ml-5 flex flex-col gap-4">
                  <li className="font-bold">
                    Acceptance of Terms{" "}
                    <p className="font-normal">
                      By accessing and using the Minhoo platform, either through
                      the mobile app (available on iOS and Android) or the
                      website, you agree to be bound by these Terms and
                      Conditions. These Terms constitute a legally binding
                      contract between you and Minhoo, governing your use of our
                      services. If you do not agree to these terms, you must
                      refrain from using the platform.
                    </p>
                  </li>
                  <li className="font-bold">
                    Modifications to the Terms
                    <p className="font-normal">
                      We reserve the right to modify these Terms at any time.
                      Changes will not be retroactive, and you will be notified
                      through the app or website 30 days in advance to review
                      them. Your continued use of the Services after
                      notification will imply acceptance of the modified Terms.
                    </p>
                  </li>
                  <li className="font-bold">
                    Privacy
                    <p className="font-normal">
                      Using Minhoo is subject to our Privacy Policy, which
                      explains how we collect, use, and share your personal
                      information. By using Minhoo, you consent to the
                      processing of your personal data as outlined in that
                      policy.
                    </p>
                  </li>
                  <li className="font-bold">
                    Accounts and Registration
                    <p className="font-normal">
                      To access certain services on Minhoo, you must create an
                      account by providing accurate, complete, and up-to-date
                      information. You are responsible for your {"account's"}{" "}
                      security and all activities under your username. You must
                      keep your password secure and immediately notify us of any
                      unauthorized use of your account. Minhoo is not
                      responsible for any loss or damage caused by unauthorized
                      use of your account.
                    </p>
                  </li>
                  <li className="font-bold">
                    Use of the Services
                    <p className="font-normal">
                      Minhoo Services allow you to connect with freelancers to
                      request or provide services. You must use the Services
                      responsibly and comply with all applicable laws. It is
                      prohibited to:
                    </p>
                    <ol className="font-normal list-disc ml-7 mt-4">
                      <li>Access or use the platform in unauthorized ways.</li>
                      <li>Manipulate or breach any security measures.</li>
                      <li>Falsify information provided to the platform.</li>
                      <li>
                        Use {"Minhoo's"} content or services for illegal
                        purposes or to infringe third-party rights.
                      </li>
                    </ol>
                  </li>
                  <li className="font-bold">
                    Content
                    <p className="font-normal">
                      You are responsible for the content you post or share on
                      Minhoo. By posting content on the platform, you grant us a
                      worldwide, non-exclusive, royalty-free license to use,
                      reproduce, modify, and distribute such content in
                      connection with the operation of Minhoo. Minhoo reserves
                      the right to remove any content that violates these Terms
                      or applicable laws.
                    </p>
                  </li>
                  <li className="font-bold">
                    Advertising
                    <p className="font-normal">
                      Minhoo may display advertisements as part of its business
                      model. You agree that such ads may appear alongside the
                      content you post without the need for additional
                      compensation.
                    </p>
                  </li>
                  <li className="font-bold">
                    Intellectual Property Rights
                    <p className="font-normal">
                      All rights to user-provided content remain with the user.
                      However, by using Minhoo, you grant us a license to use,
                      modify, reproduce, and distribute such content to provide
                      and improve our services.
                    </p>
                  </li>
                  <li className="font-bold">
                    Misuse of Services
                    <p className="font-normal">It is not permitted to:</p>
                    <ol className="list-disc font-normal mt-5 ml-7">
                      <li>
                        Use web crawlers, robots, or other automated means to
                        access the Services without our prior consent.
                      </li>
                      <li>Interfere with or damage the Services.</li>
                      <li>
                        Reverse-engineer or decompile any part of the Services.
                      </li>
                      <li>Access non-public areas of the platform.</li>
                    </ol>
                  </li>
                  <li className="font-bold">
                    Limited Liability{" "}
                    <p className="font-normal">
                      Minhoo is provided {`"as is" and "as available."`} We do
                      not guarantee that the services will be error-free or
                      uninterrupted. Minhoo is not liable for indirect,
                      incidental, special, or punitive damages, or loss of data,
                      revenue, or profits resulting from the use of the
                      platform.
                    </p>
                  </li>
                  <li className="font-bold">
                    Account Termination
                    <p className="font-normal">
                      Minhoo reserves the right to suspend or cancel your
                      account at any time, without prior notice, if it believes
                      you have violated these Terms or applicable laws. In the
                      event of cancellation, you will lose access to the
                      Services, but these Terms will continue to apply to the
                      extent permitted by law.
                    </p>
                  </li>
                  <li className="font-bold">
                    Jurisdiction and Applicable Law{" "}
                    <p className="font-normal">
                      These Terms are governed by the laws of Australia, and any
                      disputes arising in connection with these Terms or the use
                      of the Services will be subject to the exclusive
                      jurisdiction of the federal or state courts located in
                      Australia.
                    </p>
                  </li>
                  <li className="font-bold">
                    Dispute Resolution
                    <p className="font-normal">
                      You agree that any claim or dispute with Minhoo will be
                      resolved individually and not as part of a class action.
                      In case of disputes, we commit to working together in good
                      faith to resolve them before resorting to a court.
                    </p>
                  </li>
                  <li className="font-bold">
                    Contact
                    <p className="font-normal">
                      For any inquiries about these Terms, you can contact us at
                      info@minhoo.app.
                    </p>
                  </li>
                </ol>
              </section>
            </AppTabContent>
            <AppTabContent name="privacy-and-data">
              <h3 className="text-3xl md:text-4xl">
                {" Minhoo's"} Privacy Policy
              </h3>
              <section className="mt-5 flex flex-col gap-4">
                <p className="font-bold">
                  Last updated: September 1st, 2024 (01/09/2024)
                </p>
                <p>
                  At Minhoo, we value and respect your privacy. This Privacy
                  Policy explains how we collect, use, share, and protect your
                  personal information when you access our services via the
                  mobile app or website. By using Minhoo, you agree to the terms
                  of this policy.
                </p>
                <ol className="list-decimal flex flex-col gap-4 ml-4">
                  <li className="font-bold">
                     Information We Collect{" "}
                    <p className="font-normal my-4">
                      We collect information to provide and improve our
                      services. This includes:
                    </p>
                    <p>Information you provide directly to us:</p>
                    <ul className="list-disc my-5 ml-7">
                      <li>
                        Registration data:{" "}
                        <p className="font-normal inline">
                          Name, email address, phone number, postal address, and
                          other contact information when you create an account.
                        </p>
                      </li>
                      <li>
                        Profile information:{" "}
                        <p className="font-normal inline">
                          Data you share when creating or updating your profile,
                          such as profile picture, services offered, or
                          requested.
                        </p>
                      </li>
                      <li>
                        Payment information:{" "}
                        <p className="font-normal inline">
                          Credit/debit card details or bank account information
                          necessary for processing transactions.
                        </p>
                      </li>
                    </ul>
                    <p>Information we collect automatically:</p>
                    <ul className="list-disc mt-5 ml-7">
                      <li>
                        Usage data:{" "}
                        <p className="font-normal inline">
                          Information about your activity on the platform, such
                          as the pages you visit, the services you search for or
                          request, and interactions with other users.
                        </p>
                      </li>
                      <li>
                        Location data:{" "}
                        <p className="font-normal inline">
                          We use geolocation technology to connect freelancers
                          and clients based on their current location.
                        </p>
                      </li>
                      <li>
                        Device and connection data:{" "}
                        <p className="font-normal inline">
                          Information about the device you use to access our
                          services, such as your IP address, browser type,
                          operating system, and language settings.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="font-bold">
                    How We Use Your Information
                    <p className="font-normal">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc font-normal mt-5">
                      <li>Provide and improve our services.</li>
                      <li>
                        Facilitate interactions between freelancers and clients.
                      </li>
                      <li>Process payments and billing.</li>
                      <li>Protect user security.</li>
                      <li>Comply with applicable laws and regulations.</li>
                      <li>
                        Personalize your experience on the platform, including
                        presenting customized content and ads.
                      </li>
                    </ul>
                  </li>
                  <li className="font-bold">
                    Use of Geolocation Data
                    <p className="font-normal mt-4">
                      Minhoo uses geolocation technology to connect freelancers
                      and clients based on their current location. This feature
                      is essential for users to find and provide real-time
                      services. You can disable this feature in your device
                      settings, but doing so may limit certain functionalities
                      of the platform.
                    </p>
                  </li>
                  <li className="font-bold">
                    Sharing Your Information
                    <p className="font-normal">
                      Minhoo does not sell your personal information to third
                      parties. However, we may share it in the following cases:
                    </p>
                    <ul className="list-disc mt-5 ml-7">
                      <li>
                        With other users:{" "}
                        <p className="font-normal inline">
                          To facilitate connections between freelancers and
                          clients, some details of your profile (such as name,
                          approximate location, and services offered) will be
                          visible to other users.
                        </p>
                      </li>
                      <li>
                        With third-party service providers:
                        <p className="font-normal inline">
                          We contract third parties to perform functions on our
                          behalf, such as payment processing and data hosting
                          services. These providers are subject to strict
                          confidentiality agreements and can only use your
                          information for the specific purpose for which they
                          were hired.
                        </p>
                      </li>
                      <li>
                        For legal reasons:{" "}
                        <p className="font-normal inline">
                          We may disclose your information if we believe in good
                          faith that it is necessary to comply with a law,
                          regulation, or legal process.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="font-bold">
                    Information Security
                    <p className="font-normal mt-4">
                      At Minhoo, we take reasonable measures to protect your
                      personal information from unauthorized access, alteration,
                      disclosure, or destruction. This includes using encryption
                      technologies, firewalls, and access controls. However, no
                      method of internet transmission or electronic storage is
                      completely secure, so we cannot guarantee absolute
                      security of your information.
                    </p>
                  </li>
                  <li className="font-bold">
                    Data Retention
                    <p className="font-normal">
                      We retain your personal information while your account is
                      active or as necessary to provide you with services. If
                      you decide to close your account, we will delete your
                      information within a reasonable period, except where we
                      are legally required to retain certain data.
                    </p>
                  </li>
                  <li className="font-bold">
                    User Rights
                    <p className="my-4 font-normal">
                      You have certain rights regarding your personal
                      information, including:
                    </p>
                    <ol className="list-disc font-normal ml-7">
                      <li>
                        Accessing and correcting your personal information at
                        any time through your account settings.
                      </li>
                      <li>
                        Requesting the deletion of your personal information.
                      </li>
                      <li>
                        Objecting to the processing of your personal information
                        or requesting restrictions on its use.
                      </li>
                    </ol>
                    <p className="mt-4 font-normal">
                      To exercise any of these rights, please contact us at
                      info@minhoo.app.
                    </p>
                  </li>
                  <li className="font-bold">
                    Cookies and Similar Technologies
                    <p className="mt-4 font-normal">
                      You have certain rights regarding your personal
                      information, including:Minhoo uses cookies and similar
                      technologies to enhance the user experience. Cookies are
                      small text files stored on your device to help us analyze
                      website traffic and personalize content. You can set your
                      browser to reject cookies, but this may affect your
                      ability to use some features of the platform.
                    </p>
                  </li>
                  <li className="font-bold">
                    Third-Party Services
                    <p className="mt-4 font-normal">
                      Our platform may contain links to third-party services or
                      websites. This Privacy Policy does not cover the privacy
                      practices of those third parties. We recommend that you
                      review the privacy policies of any third-party site or
                      service before providing your personal information.
                    </p>
                  </li>
                  <li className="font-bold">
                    Children&apos;s Privacy
                    <p className="mt-4 font-normal">
                      Minhoo is not directed to individuals under 18, and we do
                      not knowingly collect personal information from minors. If
                      we discover that we have inadvertently collected personal
                      information from a minor, we will take steps to delete
                      that information as soon as possible.
                    </p>
                  </li>
                  <li className="font-bold">
                    Changes to This Policy
                    <p className="mt-4 font-normal">
                      We may update this Privacy Policy from time to time. When
                      we do, we will post the new policy on our website and app,
                      indicating the date of the last update. We recommend that
                      you periodically review this page to stay informed about
                      any changes.
                    </p>
                  </li>
                  <li className="font-bold">
                    Contact
                    <p className="font-normal mb-4">
                      If you have any questions or concerns about this Privacy
                      Policy or how we handle your personal information, you can
                      contact us at:
                    </p>
                    <p className="font-normal">
                      Minhoo <span className="block">Email: info@minhoo.app</span>
                    </p>
                  </li>
                </ol>
              </section>
            </AppTabContent>
          </div>
        </AppTabWrapper>
      </div>
    </>
  );
}
