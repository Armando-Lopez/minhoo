"use client";
import AppIcon from "@/components/shared/AppIcon";
import { Button } from "@/components/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Label } from "@/components/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group";
import React, { useState } from "react";

export const RequestServiceFormRequestCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    "Beauty and personal care",
    "Cleaning",
    "Furniture Assembly",
    "Handyman",
    "Moving Services",
    "Office Services",
    "Personal Assistant",
    "Smart Home Installation",
    "Virtual & Online",
    "Yardwork Services",
    "Other",
  ];
  return (
    <>
      <p className="mb-3">What do you want to request?</p>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="flex gap-4 items-center w-full">
          <span className="w-10 h-10 grid place-items-center rounded-full bg-gray-2">
            <AppIcon
              icon="user-hand-up"
              flip="horizontal"
              rotate={180}
              width="26"
              className="text-2xl text-gray-1"
            />
          </span>
          <p className="text-gray-1">Choose one category </p>
          <AppIcon icon="arrow-right" className="text-gray-1 ml-auto" />
        </DialogTrigger>
        <DialogContent className="rounded-3xl max-w-96 px-4">
          <DialogHeader>
            <DialogTitle className="my-5 text-lg font-medium">
              Select one category that best describes your request
            </DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-10">
                <RadioGroup asChild>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category} className="mt-0">
                        <Label
                          htmlFor={category}
                          className="flex justify-between cursor-pointer text-black-1 font-normal items-center"
                        >
                          {category}
                          <RadioGroupItem
                            value={category}
                            id={category}
                            className="w-6 h-6"
                          />
                        </Label>
                      </li>
                    ))}
                  </ul>
                </RadioGroup>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Continue
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
