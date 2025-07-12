"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { ArrowIcon } from "../svgs/ArrowIcon";

export default function MyWalletHeader() {
  const router = useRouter();

  const onGoBack = () => {
    router.back();
  };
  return (
    <motion.button
      onClick={() => onGoBack()}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid w-full cursor-pointer gap-y-6 p-5"
    >
      <ArrowIcon className="rotate-[180deg]" />
    </motion.button>
  );
}
