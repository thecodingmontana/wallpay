import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { Transaction } from "@/types";
import { ArrowIcon } from "../svgs/ArrowIcon";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="dark:bg-brand bg-background p-4 rounded grid gap-y-2 max-h-[480px] mb-6 overflow-y-auto  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <h3 className="font-medium text-lg mb-2">Recent Transactions</h3>

      <motion.div
        className="grid gap-y-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { delayChildren: 0.4, staggerChildren: 0.1 },
          },
        }}
      >
        {transactions.map((txn, index) => {
          const isPositive = txn.amount > 0;

          return (
            <motion.div
              key={txn.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid gap-y-4 flex-1"
            >
              <div className="flex items-center gap-x-2">
                <div
                  className={cn(
                    "size-10 flex-shrink-0 rounded-full p-1 grid place-content-center",
                    isPositive ? "bg-emerald-100" : "bg-rose-100"
                  )}
                >
                  {isPositive ? (
                    <ArrowIcon className="text-emerald-600 rotate-[130deg]" />
                  ) : (
                    <ArrowIcon className="text-rose-600 -rotate-[40deg]" />
                  )}
                </div>

                <div className="flex items-center justify-between w-full">
                  <div>
                    <h4 className="text-sm">{txn.title}</h4>
                    <p className="text-xs text-muted-foreground dark:text-zinc-300">
                      {format(txn.date, "hh:mm a | MMM Qo")}
                    </p>
                  </div>

                  <p
                    className={cn(
                      "font-medium",
                      isPositive ? "text-emerald-600 dark:text-white" : "text-rose-600"
                    )}
                  >
                    {isPositive
                      ? `+ $${txn.amount}`
                      : `- $${Math.abs(txn.amount)}`}
                  </p>
                </div>
              </div>

              {index < transactions.length - 1 && <Separator />}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
