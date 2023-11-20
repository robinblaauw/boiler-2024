"use client";

import {
  Bars3BottomRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { FC, useEffect, useState } from "react";
import { navLink, navigationData } from "./NavigationData";
import { useRouter } from "next/navigation";

type SubnavigationProps = {
  items: navLink[];
  name: string;
  open: string | null;
  closeSubNav: () => void;
  closeMainNav: () => void;
};

type MobileFoldoutProps = {
  toggleOverlay: () => void;
  MobileNavOpen: Boolean;
};

const Subnavigation: FC<SubnavigationProps> = ({
  items,
  name,
  open,
  closeSubNav,
  closeMainNav,
}) => {
  const router = useRouter();
  const isVisible = open === name;

  const backButton = () => {
    closeSubNav();
  };

  const navigateToSubItem = (url: string) => {
    closeSubNav();
    closeMainNav();
    router.push(`${url}`);
  };

  return (
    <div
      className={`absolute top-0 ${isVisible ? "left-0" : "-left-full"}
                  h-screen w-screen bg-slate-200 transition-left ease-in-out z-40 p-8`}
    >
      <div className="underline text-base" onClick={() => backButton()}>
        terug
      </div>
      <nav className="mt-[5rem] flex flex-col gap-8">
        {items.map((item, index) => {
          return (
            <li
              className="flex justify-between"
              key={`${name}-${index}`}
              onClick={() => navigateToSubItem(item.url)}
            >
              <div className="self-center">{item.label}</div>
              <ChevronRightIcon className="w-6 h-6 text-light-text self-center" />
            </li>
          );
        })}
      </nav>
    </div>
  );
};

const MobileFoldout: FC<MobileFoldoutProps> = ({
  toggleOverlay,
  MobileNavOpen,
}) => {
  const [openedSubnav, setOpenedSubnav] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setOpenedSubnav(null);
  }, [MobileNavOpen]);

  const closeSubNav = () => {
    setOpenedSubnav(null);
  };

  const closeMainNav = () => {
    toggleOverlay();
  };

  const handleRouteClick = (url: string) => {
    toggleOverlay();
    closeSubNav();
    router.push(`${url}`);
  };

  return (
    <div className="p-8 mt-24 text-light-text">
      <ul className="flex flex-col gap-8">
        {navigationData.map((item, index) => {
          return item.subNav ? (
            <li className="text-xl w-full" key={`nav-${index}`}>
              <div onClick={() => setOpenedSubnav(item.label)}>
                {item.label}
              </div>
              <Subnavigation
                closeMainNav={closeMainNav}
                closeSubNav={closeSubNav}
                items={item.subNav.items}
                name={item.label}
                open={openedSubnav}
              />
            </li>
          ) : (
            <li className="text-xl w-full" key={`nav-${index}`}>
              <a onClick={() => handleRouteClick(item.url)}>
                <div className="flex justify-between">
                  <div className="self-center">{item.label}</div>
                  <ChevronRightIcon className="w-6 h-6 text-light-text self-center" />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const MobileNavigation: FC = () => {
  const [open, setOpen] = useState<Boolean>(false);

  const toggleOverlay = () => {
    setOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "";
    };
  }, [open]);

  const sidebarClasses = open
    ? "absolute inset-y-0 left-0 transform translate-x-0"
    : "absolute inset-y-0 left-0 transform -translate-x-full";
  return (
    <div className="flex md:hidden overflow-x-hidden text-neutral-900">
      <div className="flex" onClick={() => toggleOverlay()}>
        <Bars3BottomRightIcon
          className={`cursor-pointer h-8 w-8 transition-colors ease-in-out z-50 ${
            open ? "text-light-text" : "text-primary-foreground"
          }`}
        />
      </div>

      <div
        className={`${sidebarClasses} w-full h-screen bg-primary text-primary-foreground z-30 absolute top-0 left-0 bottom-0 transition-transform duration-[700ms]`}
      >
        <MobileFoldout toggleOverlay={toggleOverlay} MobileNavOpen={open} />
      </div>
    </div>
  );
};
