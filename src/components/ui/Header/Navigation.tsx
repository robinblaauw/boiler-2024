"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
} from "@nextui-org/react";
import { MobileNavigation } from "./MobileNavigation";
import { navLink, navigationData } from "./NavigationData";

export const Navigation = () => {
  return (
    <>
      <nav className="md:flex hidden">
        <ul className="flex gap-8 items-center">
          {navigationData.map((item: navLink, index) => (
            <li key={index}>
              {item.subNav ? (
                <Dropdown>
                  <DropdownTrigger>
                    <div tabIndex={1} className="cursor-pointer">
                      <span className="flex gap-1.5 ">
                        {item.icon?.src && item.icon?.src} {item.label}
                      </span>
                    </div>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Dynamic Actions"
                    items={item.subNav.items}
                  >
                    {(item) => (
                      <DropdownItem
                        key={item.id}
                        // color={item.key === "delete" ? "danger" : "default"}
                        // className={item.key === "delete" ? "text-danger" : ""}
                      >
                        <Link tabIndex={1} href={item.url}>
                          {item.label}
                        </Link>
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Link tabIndex={1} href={item.url}>
                  <span className="flex gap-1.5 text-primary-foreground">
                    {item.icon?.src && item.icon?.src} {item.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <MobileNavigation />
    </>
  );
};
