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
      <div className="container min-h-screen grid grid-cols-12 gap-5 mb-10 lg:mb-32 lg:mt-5">
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
                  Eder Antonio Oquendo Calderon. Company, identified with ABN
                  87951520527, communicates to the users of Minhoo.app , the
                  privacy rights, conditions and contract that protect them
                  during the access of our electronic services. This regulates
                  the relationship between Minhoo.app App and its users, who
                  must be natural persons of legal age or legal persons duly
                  constituted in the Australia or in any country in which they
                  benefit from the application, so they fully accept our
                  policies and conditions of use as an essential requirement to
                  offer or receive our services.
                </p>
                <p className="mb-4">
                  The user declares and guarantees that he has sufficient powers
                  to accept our policies, by himself or any of his agents,
                  representatives, or factors acting on his behalf, and that by
                  accepting them he is bound by this policy. Where appropriate,
                  the userguarantees that he is the owner and responsible for
                  the physical or virtual documentation forwared, sent and
                  registered in Minhoo.app App about the personal and
                  professional identity, the constitution of his company and any
                  other commercial documentation that he may provide to validate
                  his registration within or outside of the Minhoo.app App;
                  Likewise, the user accepts that this information will be
                  available so that any user who is duly registered and wishes
                  to offer or receive a service, can verify the veracity of the
                  same, with the aim of offering greater security and
                  confidence. This policy is oriented to the use and management
                  that Minhoo.app App gives to the information provided by users
                  when subscribing to our electronic service. This policy does
                  not apply for any reason to people, professionals, companies,
                  product or service providers that are external to Minhoo.app
                  App, or that are not duly registered in our technological
                  platform.
                </p>
                <p className="mb-4">
                  The voluntary use of Minhoo.app App automatically establishes
                  the condition of user within the website and implies full and
                  unreserved acceptance of each and every one of the provisions
                  included in this policy, in each version published by
                  Minhoo.appApp or at the same time in which the user accesses
                  the registry. Consequently, the user must read the entire
                  policy, as it may be modified at any time to improve the
                  service, so we ask all users to periodically review our
                  policies.If you have any questions, please feel free to
                  contact our team at info@minhoo.app (business hours subject to
                  office hours, Monday through Thursday from 1:30 p.m. to 5:30
                  p.m.). The company Minhoo.app., recommends again reading the
                  entire policy, if you have questions, contact us as soon as
                  possible and if you disagree with any of the established
                  points, we respectfully ask you not to register.
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
                  security, avoids its alteration, loss or unauthorized
                  treatment.
                </p>
                <p>
                  In addition, in order to comply with the provisions of the
                  Personal Data Protection Law, all personal data that is
                  collected through the application will be treated in
                  accordance with the principles of loyalty, purpose,
                  proportionality, data security, transparency, confidentiality,
                  legality, portability, truthfulness and accuracy. All
                  processing of personal data will be subject to the consent of
                  the owner. In any case, the use of financial or patrimonial
                  data will require the express authorization of their owners;
                  however, this may be given through the application using the
                  mechanisms enabled for this purpose, and in any case the
                  greatest diligence and care will be given to this type of
                  data. You voluntarily accept and give your consent to
                  Minhoo.app to use and process all the personal information
                  provided such as your full name, gender, personal
                  identification document, date of birth, email, telephone
                  number, data from your debit and / or credit card and other
                  information that may be stored and used occasionally by
                  Minhoo.app.
                </p>
                <p>
                  At all times, it will be ensured that the personal data
                  contained in the databases or files that are used, if
                  applicable, are relevant, correct and updated for the purposes
                  for which they were collected.
                </p>
                <p>
                  The application may include hyperlinks or links that may
                  access web pages of third parties other than Minhoo.app. The
                  owners of these websites will have their own privacy and data
                  protection policies, for which Minhoo.app does not assume any
                  type of responsibility for the data that is provided by the
                  user through any website other than Minhoo.app.
                </p>
                <p>
                  Minhoo.app reserves the right to modify its Privacy Policy,
                  according to its needs or derived from any change in the
                  legislation. Access or use of the application after said
                  changes, will imply acceptance of these changes.
                </p>
                <p>
                  On the other hand, access to the application may involve the
                  use of cookies, which are small amounts of information that
                  are stored in the browser used by user. Cookies facilitate
                  navigation, make it more friendly, and do not damage the
                  navigation device. For this, they can collect information to
                  enter the application, store user’s preferences, as well as
                  the interaction that user has with the application, for
                  instance: the date and time it is accessed, the time it has
                  been used, the sites visited before and after, the IP address
                  from which user accesses, the frequency of visits, etc.
                </p>
                <p>
                  This type of information will be used to improve the
                  application, detect errors, and possible needs that user may
                  have, in order to offer better quality services and content to
                  users. In any case, the information collected will be
                  anonymous and individual users will not be identified.
                </p>
                <p>
                  In the event that user does not want this type of information
                  to be collected, must disable, reject, restrict and / or
                  eliminate the use of cookies in his / her internet browser.
                  The procedures to perform these actions may differ from one
                  browser to another; consequently, it is suggested to review
                  the instructions provided by the browser developer. In the
                  event that user rejects the use of cookies (totally or
                  partially), user may continue to use the application, although
                  some of its functions may be disabled.
                </p>
                <p>
                  It is possible that in the future these policies regarding
                  cookies will change or be updated; for this reason, it is
                  advisable to review the updates that are made to these terms
                  and conditions, in order to be adequately informed about how
                  and why we use the cookies that are generated when entering or
                  using Minhoo.app.
                </p>
                <p>
                  <span className="block">1. Intellectual Property.</span> Eder
                  Antonio Oquendo Calderon is the owner of all the intellectual
                  and industrial property rights of the software and / or the
                  Minhoo.app application, understanding by this the source code
                  that makes its operation possible, as well as the images,
                  audio or video files, logos, brands, texts, databases,
                  processes, computer codes, color combinations, structures,
                  designs and other elements that distinguish it. They will,
                  therefore, be protected by Australia legislation on copyright,
                  trademarks, patents, trade secrets and everything related to
                  intellectual and industrial property, as well as by applicable
                  international treaties. Consequently, is expressly prohibited
                  the reproduction, distribution, or dissemination of the
                  contents of the software and / or the application, for
                  commercial purposes, on any support and by any technological
                  means, without the authorization of Minhoo.app or its
                  licensors. User agrees to respect intellectual and industrial
                  property rights of Minhoo.app. However, in addition to being
                  able to view the elements of the software and / or the
                  Minhoo.app application, user may print, copy or store them, as
                  long as it is exclusively for his / her strictly personal use.
                  On the other hand, user will refrain from deleting, altering,
                  or manipulating any element, file, or content, of the software
                  and / or application, and for no reason will carry out acts
                  tending to violate the security, files or databases that are
                  protected, either through restricted access by means of a
                  username and password, or because does not have permissions to
                  view, edit or manipulate them. In the event that user or any
                  third party considers that any of the content of the software
                  and / or the application constitutes a violation of the rights
                  of protection of industrial or intellectual property, they
                  must immediately notify the designated agent of Minhoo.app.
                  Visit the Minhoo.app website in the support section and submit
                  your claim. (www.minhoo.app)
                </p>
                <p>
                  2. Third Party Content and Services. Services may be made
                  available or accessible in connection with third-party content
                  and services (including advertising) that Minhoo.app does not
                  control. You acknowledge and agree that different privacy
                  policies and conditions may apply to your use of such
                  third-party content and services. Minhoo.app does not endorse
                  such third-party services and content and in no case will it
                  be responsible for any product or service of such third-party
                  providers. Additionally, Apple Inc., Google, Inc., Microsoft
                  Corporation and / or their corresponding international
                  subsidiaries or affiliates will be third party beneficiaries
                  in this contract if you access the services using applications
                  developed for mobile devices with iOS, Android, Microsoft
                  Windows systems, respectively. These third-party beneficiaries
                  are not party to this contract and are not responsible for the
                  provision or support of the services in any way. Your access
                  to Services using these devices is subject to the conditions
                  established in the applicable third-party beneficiary
                  conditions of service. <br /> • The services and all rights
                  relating thereto are and will remain property of Minhoo.app or
                  its licensors. Neither of these conditions nor your use of the
                  services transfer or grant you any rights:
                </p>
                <p>
                  3.About or concerning the services, except for the limited
                  license granted above;
                </p>
                <p>
                  4.To use or mention in any way the company names, logos,
                  product and service names, trademarks or service marks of
                  Minhoo.app or its licensors.
                </p>
                <p>
                  5.Your Use of the Services.
                  <br />
                  Within the Minhoo.app application there are two types of
                  users:
                </p>
                <p>
                  6.Members: Those who for a single monthly amount paid to
                  Minhoo.app (registration), will have the right to provide
                  their services within the application.
                </p>
                <p>
                  7.Users: will be the people who request the services of our
                  partners and pay them the amount they agree to.
                  <br /> • User Account. In order to use most aspects of the
                  services, you must register and maintain an active personal
                  user or partner account. To obtain an account you must be at
                  least 21 years old, the account registration requires you to
                  communicate certain personal information to Minhoo.app, such
                  as your name, address, mobile phone number, license, ID among
                  other personal information, to validate your information. You
                  agree to keep the information in your account accurate,
                  complete and up-to-date. Failure to keep your account
                  information accurate, complete and up-to-date may result in
                  your inability to access and use the services or in
                  Minhoo.app’s termination of the conditions hereby entered
                  into. You are responsible for all activity that occurs on your
                  account and you agree to keep your account username and
                  password secure and secret at all times. Unless Minhoo.app
                  allows otherwise in writing, you can only have one account.
                  <br /> • User Requirements and Behavior. By using the
                  application, you will not cause nuisance, inconvenience,
                  discomfort or damage to property, either to the third-party
                  provider or to any other party. You may be required to provide
                  an identity document or other identity verification element to
                  access or use the services, and you hereby agree that may be
                  denied access or use of the services if you refuse to provide
                  the identity document or the identity verification element.
                  <br /> • Text Messages or Calls.By creating an account, you
                  agree that users can send you text messages or calls as part
                  of the normal business of their use of the application.
                  <br />• Promotional Codes. Minhoo.app may, at its sole
                  discretion, create promotional codes that can be exchanged for
                  account credit or other elements or benefits related to the
                  services and / or services of a third-party provider, subject
                  to any additional conditions that Minhoo.app establishes on
                  the basis of each promotional code. You agree that the
                  Promotional Codes:
                </p>
                <p>8.Must be used for their intended purpose, and lawfully.</p>
                <p>
                  9.May not be duplicated, sold or transferred in any way, or
                  made available to the general public (whether posted in a
                  public forum or otherwise), unless it is authorized by
                  Minhoo.app
                </p>
                <p>
                  10.May be invalidated by Minhoo.app at any time and for any
                  reason, without liability to Minhoo.app or its licensors.
                </p>
                <p>
                  11.May be used only in accordance with the specific conditions
                  that Minhoo.app establishes for said promotional code.
                </p>
                <p>12. Are not valid as cash.</p>
                <p>
                  13. May expire before you use
                  <br />
                  them. Minhoo.app reserves the right to withhold or deduct the
                  credit or other elements or benefits obtained through the use
                  of promotional codes by you or any other user in the event
                  that Minhoo.app determines or believes that the use or
                  exchange of the promotional codes was wrong, fraudulent,
                  illegal or in violation of the conditions of the promotional
                  code or these conditions.
                  <br />• Content Provided by User.
                  <br />
                  Minhoo.app has a space for you to post or otherwise make
                  available to Minhoo.app through the application text content
                  and information, audio and / or visual, including comments and
                  opinions regarding services, initiation of support requests,
                  as well as presentation of admissions for competitions and
                  promotions. All user content provided by you will remain your
                  property. However, by providing user content to Minhoo.app,
                  you grant a worldwide, perpetual, irrevocable, transferable,
                  royalty-free license with the right to sublicense, use, copy,
                  modify, create derivative works, distribute, publicly display,
                  publicly present or otherwise exploit in any way said user
                  content in all formats and distribution channels, now known or
                  devised in the future (including in relation to Minhoo.app’s
                  services and business and on third-party sites and services),
                  without further notice or consent from you and without
                  requiring payment from you or any other person or entity. You
                  Represent and Warrant that:
                </p>
                <p>
                  14. You are the sole and exclusive owner of all User Content
                  or you have all the rights, licenses, consents and permissions
                  necessary to grant Minhoo.app the license to User Content as
                  stated above.
                </p>
                <p>
                  15. Neither user content nor its presentation, uploading,
                  publication or otherwise making available such user content,
                  nor the use by Minhoo.app of user content as permitted herein,
                  will infringe, misappropriate or violate intellectual property
                  or property rights of a third party or rights of publicity or
                  privacy or will result in the violation of any applicable law
                  or regulation. You agree not to provide user content that is
                  defamatory, libelous, hateful, violent, obscene, pornographic,
                  illegal, or otherwise offensive, as determined by Minhoo.app,
                  in its sole discretion, whether or not such material may be
                  protected by law. Minhoo.app may, at its sole discretion and
                  at any time and for any reason, without prior notice, review,
                  control or delete user content, but without being obliged to
                  do so.
                  <br /> • Access to Network and Devices. You are responsible
                  for obtaining the necessary data network access to use the
                  services. Your mobile network messaging and data rates and
                  fees may apply if you access or use the services from a
                  wireless device, and you will be responsible for such rates
                  and fees. You are responsible for acquiring and updating
                  compatible hardware or devices necessary to access and use the
                  services and applications and any updates to these. Minhoo.app
                  does not guarantee that the services, or any part of them,
                  will work on any particular hardware or device. In addition,
                  the services may be subject to dysfunctions or delays inherent
                  in the use of Internet and electronic communications.
                  <br /> • Payment Methods from Users to Partners. User will be
                  able to suggest the price of a service, and the service
                  request is only confirmed if the member accepts this rate. As
                  a user, you agree that, if your offer is accepted, Minhoo.app
                  will confirm the reservation and inform the member of the
                  total amount of the service, not including taxes and charges
                  that may apply. You understand that by being a user, the use
                  of the services may derive charges for the services you
                  receive from a “partner” user of Minhoo.app. After you have
                  received the services or obtained the goods through the use of
                  the services, YOU WILL BE IN CHARGE OF MAKING THE
                  CORRESPONDING PAYMENT to the user “partner” of Minhoo.app;
                  Minhoo.app will in no way be responsible for payments. Payment
                  of charges in this manner will be treated as payment made
                  directly by you. Charges will include applicable taxes when
                  required by law. Charges paid by you are final and
                  non-refundable, unless otherwise determined by Minhoo.app. You
                  keep the right to request lower charges from a member for the
                  services you request. Partners may include other applicable
                  fees and / or surcharges, including application fees,
                  municipal, state, or national / federal fees or charges, late
                  fees, airport surcharges, or installment payment processing
                  fees, among others that are applicable, but all this will be a
                  negotiation only between user and partner, Minhoo.app or any
                  of its licensors, under no circumstances is responsible for
                  said payments. Minhoo.app at any time and in its sole
                  discretion, reserves the right to establish, eliminate and /
                  or revise or increase the charges for “partner” users.
                  Minhoo.app will use reasonable efforts to inform you of the
                  charges that may apply, as long as you are responsible for the
                  charges incurred on your account, regardless of whether you
                  are aware of such charges or the amounts thereof. Minhoo.app
                  may, when it deems appropriate, provide certain users with
                  promotional offers and discounts that may result in the
                  charging of different amounts for these or similar services or
                  goods obtained through the use of the Services, and you agree
                  that said promotional offers and discounts, unless they are
                  also made available to you, will not be taken into account in
                  your use of the services or the charges applied to you. You
                  may choose to cancel your request for services to a user at
                  any time. You understand and agree that you are free to
                  provide additional payment as a bonus to any partner who
                  provides services to you through the application, but you are
                  under no obligation to do so. Gratuities are voluntary. After
                  you have received the services obtained through the
                  application, you will have the opportunity to rate your
                  experience and leave additional comments about the partner,
                  and as well as the partner you will be able to comment, rate
                  and others about the users.
                </p>
                <p>
                  16. Resignations; Limitation of Liability, Indemnity. Services
                  are provided “as is” and “as available”. Minhoo.app disclaims
                  all representations and warranties, express, implicit, not
                  expressly set forth in these conditions, including the implied
                  warranties of merchantability, fitness for a particular
                  purpose, and non-violation. In addition, Minhoo.app does not
                  make a statement or provide any guarantee regarding the
                  reliability, punctuality, quality, suitability or availability
                  of the services or any of the services or goods requested
                  through the use of the application, or that the services will
                  not be interrupted or will be error free. Minhoo.app does not
                  guarantee the quality, suitability, safety or ability of the
                  partners. YOU AGREE THAT ALL RISK ARISING FROM YOUR USE OF THE
                  SERVICES AND ANY SERVICES OR GOODS REQUESTED IN CONNECTION
                  THEREOF WILL BE SOLELY YOURS, TO THE FULLEST EXTENT PERMITTED
                  BY APPLICABLE LAW, AND MINHOO.APP NOR ITS LICENSORS WILL BE
                  LIABLE.
                  <br />• Limitation of Liability.
                  <br />
                  Minhoo.app nor its licensors will be liable for indirect,
                  incidental, special, exemplary, punitive, or consequential
                  damages, including lost profits, data loss, personal injury,
                  or property damage, nor for damages related to, or in
                  connection with, or otherwise derived from any use of the
                  services, even if Minhoo.app has been advised of the
                  possibility of such damages. Minhoo.app nor its licensors will
                  be responsible for any damage, liability or loss arising from:
                </p>
                <p>
                  17.Your use of or dependence on the services or your inability
                  to access or use the services.
                </p>
                <p>
                  18.Any transaction or relationship between users, even if
                  Minhoo.app had been warned of the possibility of such damages.
                </p>
                <p>
                  19.The delay or lack of execution resulting from causes that
                  go beyond the reasonable control of Minhoo.app . You may use
                  Minhoo.app’s services to request and plan transportation
                  services, education, classes, arrangements, etc., with the
                  partners, but you agree that Minhoo.app has no responsibility
                  to you or to any third party, in relation to any service
                  provided to you by the partners, other than as expressly
                  established in these conditions. You agree to hold harmless
                  and to respond to Minhoo.app and its board members, directors,
                  employees and agents for any claim, lawsuit, loss, liability
                  and expense (including attorneys’ fees) arising from:
                </p>
                <p>
                  20. Your use of the Services obtained through your use of the
                  application.
                </p>
                <p>21. Your breach or violation of any of these Conditions.</p>
                <p>22. Minhoo.app’s use of your User Content.</p>
                <p>
                  23. Your infringement of the rights of any third party,
                  including partners.
                </p>
                <p>
                  24. Applicable Law.
                  <br />
                  Unless otherwise specified herein, these Conditions shall be
                  governed and interpreted exclusively by virtue of the
                  Panamanian legislation.
                </p>
                <p>
                  25. Minhoo.app may notify you by means of a general
                  notification in the application, by means of an email sent to
                  your electronic address in your account or by written
                  communication sent to your address, as provided in your
                  account. You may notify Minhoo.app by written communication to
                  Minhoo.app’s address or by email or by accessing our website
                  in the support section.
                </p>
                <p>
                  26. General Provisions.
                  <br />
                  You may not assign or transfer these conditions, in whole or
                  in part, without Minhoo.app’s prior written consent. You give
                  Minhoo.app your approval to assign or transfer these
                  conditions, in whole or in part, including to:
                </p>
                <p>27. a subsidiary or an affiliate;</p>
                <p>
                  28. an acquirer of the capital, business or assets of
                  Minhoo.app;
                </p>
                <p>
                  29. a successor by merger. There is no joint venture or
                  partner relationship, employment or agency between you,
                  Minhoo.app or another user as a result of the contract between
                  you and Minhoo.app or the use of the services.
                  <br /> If any provision of these conditions is considered
                  illegal, null or unenforceable, either in whole or in part, in
                  accordance with any legislation, said provision or part of it
                  will be considered not part of these conditions, although the
                  legality, validity and enforceability of the rest of the
                  provisions of these conditions will not be affected. In that
                  case, the parties must replace said illegal, null or
                  unenforceable provision, in whole or in part, with a legal,
                  valid and enforceable provision that has, as far as possible,
                  an effect similar to that of the illegal, null or
                  unenforceable provision, given the contents and purpose of
                  these conditions. These conditions constitute the entire
                  contract and the understanding between the parties in relation
                  to the object and supersede and replace all previous or
                  contemporary contracts or agreements in relation to said
                  object. In these conditions, the words “included” (male /
                  female) and “include” (singular / plural) mean “included,
                  merely for illustrative purposes”.
                </p>
                <p>
                  30. Waiver of Collective Claims.
                  <br />
                  By voluntarily accepting this agreement, you agree that, in
                  its entirety, pursuant to applicable law, the lawsuit or
                  arbitration proceedings related to this agreement are carried
                  out exclusively on an individual basis, and that class action
                  claims or claims on behalf of third parties will not be
                  considered. Disputes cannot be integrated without the written
                  consent of all parties. No decision or determination of the
                  tribunal or arbitrator shall have prejudicial force on the
                  issues or claims in any dispute with persons other than the
                  parties declared in such arbitration proceedings. This means
                  the following:
                </p>
                <p>
                  31.You agree that you may not file a claim as a plaintiff or
                  participant in a class action lawsuit, integrated lawsuit, or
                  representative lawsuit.
                </p>
                <p>
                  32.The parties agree that the arbitrator or tribunal cannot
                  integrate the claims of more than one person into a single
                  claim, nor can it carry out arbitration or claim procedures of
                  an integrated, collective or representative nature (unless all
                  the parties agree to change this).
                </p>
                <p>
                  33.The parties agree that the decision or determination of an
                  arbitrator or tribunal in the case of a claim by one person
                  applies only to the person who filed this claim, but not to
                  other people, and cannot be used to resolve other disputes
                  with other plaintiffs. Once you visit our website and download
                  and use our application, you agree that the laws of your
                  country of residence, without violating the principles of
                  conflict of laws, are legally binding with respect to these
                  terms and any dispute of any kind that may arise between us.
                </p>
                <p>
                  34.If you have any doubts, queries or questions about these
                  terms and conditions please feel free to write to us at:
                  info@minhoo.app
                  <br />
                  (business hours subject to office hours, Monday through
                  Thursday from 1:30 pm to 5:30 pm).
                </p>
              </section>
            </AppTabContent>
          </div>
        </AppTabWrapper>
      </div>
    </>
  );
}
