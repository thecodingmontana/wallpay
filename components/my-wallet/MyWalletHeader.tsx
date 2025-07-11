"use client";

import { ChevronLeft } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function MyWalletHeader() {
  const router = useRouter();

  const onGoBack = () => {
    router.back();
  };
  return (
    <button
      onClick={() => onGoBack()}
      className="grid w-full cursor-pointer gap-y-6 bg-[#29363f] p-5"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-x-1 justify-start text-white"
      >
        <ChevronLeft />
        Back
      </motion.div>
    </button>
  );
}
