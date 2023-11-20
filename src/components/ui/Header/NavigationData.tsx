import { ReactNode } from "react";
import {
  HomeModernIcon,
  AtSymbolIcon,
  CloudArrowDownIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/solid";

export type navLink = {
  id: string;
  icon?: {
    src: ReactNode;
    position: "top" | "left";
    // size: iconSizes.SMALL | iconSizes.MEDIUM | iconSizes.LARGE;
  };
  target: "_self" | "_blank";
  url: string;
  label: string;
  subNav?: {
    items: navLink[];
  };
};

const iconClasses = "text-light-text dark:text-dark-text h-4 w-4 self-center";

const examples: navLink[] = [
  {
    id: "examples_1",
    icon: {
      src: <HomeModernIcon className={iconClasses} />,
      position: "left",
    },
    target: "_self",
    url: "/examples/landing_example",
    label: "Landing page",
  },
  {
    id: "examples_2",
    icon: {
      src: <HomeModernIcon className={iconClasses} />,
      position: "left",
    },
    target: "_self",
    url: "/examples/product_example",
    label: "Product page",
  },
  {
    id: "examples_3",
    icon: {
      src: <HomeModernIcon className={iconClasses} />,
      position: "left",
    },
    target: "_self",
    url: "/examples/portfolio_example",
    label: "Portfolio",
  },
];

export const navigationData: navLink[] = [
  {
    id: "main_nav_1",
    icon: {
      src: <HomeModernIcon className={iconClasses} />,
      position: "left",
    },
    target: "_self",
    url: "/",
    label: "Home",
  },
  {
    id: "main_nav_2",
    icon: {
      src: <CloudArrowDownIcon className={iconClasses} />,
      position: "left",
    },
    target: "_blank",
    url: "/components",
    label: "components",
  },
  {
    id: "main_nav_3",
    icon: {
      src: <AtSymbolIcon className={iconClasses} />,
      position: "left",
    },
    target: "_self",
    url: "/examples",
    label: "Examples",
    subNav: { items: examples },
  },
  {
    id: "main_nav_4",
    icon: {
      src: <CursorArrowRippleIcon className={iconClasses} />,
      position: "left",
    },
    target: "_blank",
    url: "/contact",
    label: "Contact",
  },
];
