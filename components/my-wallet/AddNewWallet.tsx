"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function AddNewWallet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="dark:bg-[#29363f] bg-background px-6 py-4 rounded flex items-center justify-between"
    >
      <h3>Add New</h3>
      <Link href="/user/my-wallet/add-new" className="hover:text-muted-foreground">
        <ChevronRight />
      </Link>
    </motion.div>
  );
}
