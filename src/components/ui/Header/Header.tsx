"use client";
import React, { FC, useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { useScrollDirection } from "@/src/hooks/useScrollDirection";
import { motion } from "framer-motion";

export const Header: FC = () => {
  const scrollDirection = useScrollDirection();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="top-0 fixed flex justify-between w-full px-8 text-primary-foreground bg-primary z-50 py-8"
      initial="hidden"
      style={{ y: 0 }}
      animate={{
        y: scrollDirection === "down" && scrollY > 100 ? "-100%" : "0",
      }}
      transition={{ duration: 0.3 }}
    >
      <div>Logo</div>
      <Navigation />
    </motion.div>
  );
};
