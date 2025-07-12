"use client";

import { motion } from "motion/react";
import { User as IUser } from "@/types";
import User from "../auth/User";
import { useTimeOfDay } from "@/hooks/useTimeOfDay";
import { NotificationsIcon } from "../svgs/NotificationsIcon";
import { ModeToggle } from "../global/mode-toggle";

interface WalletHeaderProps {
  user: IUser;
}

export default function WalletHeader({ user }: WalletHeaderProps) {
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
        <span className="capitalize">{user.username.split(" ")[0]}!</span>
      </h2>
      <div className="flex items-center gap-x-2">
        <NotificationsIcon className="cursor-pointer" />
        <ModeToggle />
        <User user={user} />
      </div>
    </motion.div>
  );
}
