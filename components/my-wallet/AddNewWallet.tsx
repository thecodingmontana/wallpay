"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function AddNewWallet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="dark:bg-brand bg-background px-6 py-4 rounded flex items-center justify-between"
    >
      <h3>Add New</h3>
      <ChevronRight />
    </motion.div>
  );
}
