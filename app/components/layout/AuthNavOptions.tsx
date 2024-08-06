import React, { useState } from "react";
import AppIcon from "@/components/shared/AppIcon";
import AppButton from "@/components/shared/AppButton";
import AppPopover from "@/components/shared/AppPopover";
import AppSwitch from "@/components/shared/form/AppSwitch";
import { useNotifications } from "@/hooks/useNotifications";

export const AuthNavOptions = () => {
  const notifications = useNotifications();

  const [allowNotifications, setAllowNotifications] = useState(
    notifications.hasPermission
  );

  function activateNotifications(value: boolean) {
    setAllowNotifications(value);
    if (value) {
      notifications.activateNotifications(true);
    }
  }

  return (
    <AppPopover
      placement="top-end"
      content={
        <div className="bg-gray-150 px-5 py-9 w-96">
          <ul className="flex gap-4 flex-col">
            <li className="flex gap-3">
              <AppIcon
                icon="notification"
                className="text-primary-1"
                width="25"
              />
              <div>
                <p>Minhoo notifications</p>
                <p className="text-xs text-gray-1">
                  Turn {allowNotifications ? "off" : "on"} incoming order
                  notifications
                </p>
              </div>
              <div className="ml-auto">
                <AppSwitch
                  id="allow-notifications-check"
                  checked={allowNotifications}
                  onChange={(val) => activateNotifications(val)}
                />
              </div>
            </li>
            <li className="flex gap-3">
              <AppIcon icon="share" className="text-primary-1" width="25" />
              <p>Share profile</p>
            </li>
            <li className="flex gap-3">
              <AppIcon icon="book-mark" className="text-primary-1" width="25" />
              <p>Saved</p>
            </li>
            <li className="flex gap-3">
              <AppIcon icon="settings" className="text-primary-1" width="25" />
              <div>
                <p>Settings</p>
                <p className="text-xs text-gray-1">
                  Account, wallet, help, about, language and more
                </p>
              </div>
            </li>
          </ul>
        </div>
      }
    >
      <AppButton
        title="more options"
        id="more-options"
        className="py-2.5 rounded-xl flex items-center gap-3 text-gray-1"
      >
        <AppIcon icon="menu" width="32" />
        More
      </AppButton>
    </AppPopover>
  );
};
