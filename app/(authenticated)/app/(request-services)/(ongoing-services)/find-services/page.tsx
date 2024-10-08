import AppIcon from "@/components/shared/AppIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/ui/accordion";
import { CardContent } from "@/components/shared/ui/AppCard";
import { Avatar, AvatarImage } from "@/components/shared/ui/avatar";
import { Button } from "@/components/shared/ui/button";
import Link from "next/link";

export default function FindServicesPage() {
  return (
    <div className="py-6 px-5">
      <Accordion type="multiple">
        <AccordionItem value="item-1" className="bg-gray-150 rounded-lg">
          <AccordionTrigger className="text-base text-center font-normal hover:no-underline flex-col justify-center p-4 gap-2">
            <p>
              Category: <span className="font-bold">Beauty</span>
            </p>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <p className="pb-5">
              I need to design my company logo, something simple but of good
              quality.
            </p>
            <div className="grid gap-5 place-items-center">
              <p className="text-gray-3">Posted 1 hour ago</p>
              <div className="flex text-primary-1 items-center gap-3">
                <AppIcon icon="building" className="text-xl text-primary-1" />
                <p>On-site services</p>
              </div>
              <div className="flex items-center gap-2">
                <AppIcon icon="location" className="text-2xl text-gray-3" />
                <p>Carindale QLD</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <AppIcon icon="dollar" className="text-2xl text-gray-3" />
                <p className="text-black-1">
                  Price <span className="text-primary-1 font-bold">$35.00</span>{" "}
                  <span className="text-xs text-gray-3">/per hour</span>
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link href="/chat" className="block w-[368px] mx-auto mt-5 pt-5 border-gray-2 border-2 rounded-2xl">
        <CardContent>
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src="/team/wildelmy-colina.jpg"></AvatarImage>
            </Avatar>
            <div className="grid gap-1">
              <strong>Wildelmy Colina</strong>
              <div className="flex gap-3 items-center">
                <div className="flex gap-1">
                  <AppIcon icon="star-fill" className="text-primary-1" />
                  <AppIcon icon="star-fill" className="text-primary-1" />
                  <AppIcon icon="star-fill" className="text-primary-1" />
                  <AppIcon icon="star-fill" className="text-primary-1" />
                  <AppIcon icon="star-fill" className="text-primary-1" />
                </div>
                5.0
              </div>
              <p className="text-gray-3">Virtual & Online</p>
              <p className="text-black-1">Request accepted by A$320.00</p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button className="w-full rounded-full" variant="outline">Boton</Button>
            <Button className="w-full rounded-full">Accept</Button>
          </div>
        </CardContent>
      </Link>
    </div>
  );
}
