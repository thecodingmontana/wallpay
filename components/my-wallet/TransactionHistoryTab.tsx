import { motion } from "motion/react";
import HugeiconsTransaction from "../svgs/HugeiconsTransaction";

export default function TransactionHistoryTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-2 grid place-content-center"
    >
      <div className="flex flex-col items-center text-muted-foreground gap-y-2">
        <HugeiconsTransaction className="w-24 h-auto" />
        <p className="text-sm max-w-[15rem] text-center text-balance">
          All transactions history would be displayed here.
        </p>
      </div>
    </motion.div>
  );
}
