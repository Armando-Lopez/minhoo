"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import AppIcon from "@/components/shared/AppIcon";
import AppButton from "./AppButton";

export default function AppModal({
  children,
  activator,
  className,
  value = false,
  eager,
  keepAlive,
  onChange,
}: Props) {
  const modal = useRef<HTMLDialogElement>(null);
  const id = useId();

  const [isOpen, setIsOpen] = useState(value);
  const [wasFirstOpen, setWasFirstOpen] = useState(false);

  const canRenderContent =
    isOpen || (eager && !wasFirstOpen) || (keepAlive && wasFirstOpen);

  function toggleModal() {
    if (isOpen) {
      modal.current?.close();
      setIsOpen(false);
    } else {
      modal.current?.showModal();
      setIsOpen(true);
    }
  }

  useEffect(() => {
    const activatorElement = document.getElementById(id)?.children[0];

    if (activatorElement) {
      activatorElement.addEventListener("click", toggleModal);
      activatorElement.setAttribute("tabIndex", "0");
      activatorElement.classList.add("cursor-pointer");
    }
    return () => {
      if (activatorElement) {
        activatorElement.removeEventListener("click", toggleModal);
      }
    };
  }, []);

  useEffect(() => {
    onChange?.(isOpen);
    if (isOpen) {
      setWasFirstOpen(true);
    }
  }, [isOpen]);

  return (
    <>
      {activator ? <div id={id}>{activator}</div> : null}
      <dialog
        ref={modal}
        className={`relative backdrop:bg-black/40 ${className}`}
      >
        <AppButton
          title="close modal"
          className="absolute top-2 right-2"
          onClick={toggleModal}
        >
          <AppIcon icon="cross" width="20" />
        </AppButton>
        {canRenderContent ? children : null}
      </dialog>
    </>
  );
}

type Props = {
  children: React.ReactNode;
  activator?: React.ReactNode;
  className?: string;
  value?: boolean;
  keepAlive?: boolean;
  eager?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: boolean) => void;
};