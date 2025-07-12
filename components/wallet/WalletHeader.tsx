"use client";

import { motion } from "motion/react";
import { useTimeOfDay } from "@/hooks/useTimeOfDay";
import { NotificationsIcon } from "../svgs/NotificationsIcon";
import { ModeToggle } from "../global/mode-toggle";

export default function WalletHeader() {
  const timeOfDay = useTimeOfDay();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between self-start w-full px-5 py-4"
    >
      <h2 className="text-xl font-bold">
        {timeOfDay},{" "}
        <span className="capitalize">Matt!</span>
      </h2>
      <div className="flex items-center gap-x-2">
        <NotificationsIcon className="cursor-pointer" />
        <ModeToggle />
      </div>
    </motion.div>
  );
}
