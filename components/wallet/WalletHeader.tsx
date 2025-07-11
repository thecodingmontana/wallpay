"use client";

import { motion } from "motion/react"
import { ModeToggle } from "../global/mode-toggle";
import { User as IUser } from "@/types";
import User from "../auth/User";

interface WalletHeaderProps {
    user: IUser
}

export default function WalletHeader({ user }: WalletHeaderProps) {
  return (
    <div className="grid gap-y-6 bg-brand p-5 h-48">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between self-start"
      >
        <h2 className="font-bebas-neue text-white text-3xl">Wallpay</h2>
        <div className="flex items-center">
          <ModeToggle />
          {user && <User user={user} />}
        </div>
      </motion.div>
    </div>
  );
}
