import React from "react";
import AppIcon from "../shared/AppIcon";

export default function AuthNav() {
  return (
    <nav className="flex-grow flex flex-col pl-4 pb-5">
      <ul className="flex-grow flex flex-col gap-7 text-gray-1">
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="home" width="25" />
            <span className="text-gray-1"> Home </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="handshake" width="27" height="23" className="mt-1" />
            <span className="text-gray-1"> Request services </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            {/* <app-minhoo-icon /> */}
            <span className="text-gray-1"> Offer services </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="chat" width="25" height="30" />
            <span className="text-gray-1"> Chat </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="notification" width="25" />
            <span className="text-gray-1"> Notifications </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="profile" width="25" className="translate-y-1" />
            <span className="text-gray-1"> Profile </span>
          </a>
        </li>
        <li>
          <button className="app-button app-button--primary flex items-center justify-center gap-2 w-48 text-black-1">
            <AppIcon
              icon="plus"
              width="20"
              height="20"
              className="translate-y-1"
            />
            Create
          </button>
        </li>
      </ul>
      <div className="mt-auto">
        <button
          id="main-nav-action"
          data-dropdown-toggle="main-nav-dropdown"
          className="app-button flex items-center gap-3 text-gray-1"
          data-dropdown-placement="top"
          type="button"
        >
          <AppIcon icon="menu" width="32" className="translate-y-1" />
          More
        </button>

        <div id="main-nav-dropdown" className="z-10 hidden pl-20">
          <div className="w-96 bg-gray-150 rounded-3xl px-6 py-9 shadow-md">
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
                    {/* Turn {{ allowNotifications ? "off" : "on" }} incoming order */}
                    notifications
                  </p>
                </div>
                {/* <app-switch
              className="ml-auto"
              [value]="allowNotifications"
              size="large"
              (valueChange)="activateNotifications($event)"
            /> */}
              </li>
              <li className="flex gap-3">
                <AppIcon icon="share" className="text-primary-1" width="25" />
                <p>Share profile</p>
              </li>
              <li className="flex gap-3">
                <AppIcon
                  icon="book-mark"
                  className="text-primary-1"
                  width="25"
                />
                <p>Saved</p>
              </li>
              <li className="flex gap-3">
                <AppIcon
                  icon="settings"
                  className="text-primary-1"
                  width="25"
                />
                <div>
                  <p>Settings</p>
                  <p className="text-xs text-gray-1">
                    Account, wallet, help, about, language and more
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
