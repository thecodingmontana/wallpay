"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { NewsIcon } from "../svgs/NewsIcon";
import { ProfileIcon } from "../svgs/ProfileIcon";
import { StoresIcon } from "../svgs/StoresIcon";
import { VideosIcon } from "../svgs/VideosIcon";
import { WalletIcon } from "../svgs/WalletIcon";

export default function BottomSheetTabs() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/user/wallet" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="absolute flex items-center justify-between bg-background p-5 bottom-0 right-0 left-0"
        >
          <div className="flex flex-col items-center cursor-pointer gap-y-0.5 text-[#BFC1C4]">
            <NewsIcon className="w-6 h-auto" />
            <p className="text-sm">News</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer gap-y-0.5 text-[#BFC1C4]">
            <VideosIcon className="w-7 h-auto" />
            <p className="text-sm">Videos</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer gap-y-0.5 text-brand">
            <WalletIcon className="w-6 h-auto" />
            <p className="text-sm">Wallet</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer gap-y-0.5 text-[#BFC1C4]">
            <StoresIcon className="w-6 h-auto" />
            <p className="text-sm">Stores</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer gap-y-0.5 text-[#BFC1C4]">
            <ProfileIcon className="w-6 h-auto" />
            <p className="text-sm">Profile</p>
          </div>
        </motion.div>
      )}
    </>
  );
}
