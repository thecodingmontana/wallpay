import type { Transaction } from "@/types";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ArrowIcon } from "../svgs/ArrowIcon";

interface HomeCardProps {
  username: string;
  transactions: Transaction[];
}

export default function HomeCard({ transactions }: HomeCardProps) {
  const [showBalance, setShowBalance] = useState(false);

  const balance = transactions.reduce((acc, txn) => acc + txn.amount, 0);

  const [formattedBalance, setFormattedBalance] = useState("");

  useEffect(() => {
    setFormattedBalance(
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(balance)
    );
  }, [balance]);

  return (
    <motion.div
      className="relative w-full grid gap-y-3 rounded-xl p-4 overflow-hidden border bg-background dark:bg-brand"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid gap-y-1">
        <div className="text-sm capitalize opacity-70">Total Balance</div>
        <div className="flex items-center justify-between">
          <AnimatePresence mode="wait">
            {showBalance ? (
              <motion.div
                key="visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-3xl font-bold text-brand dark:text-primary"
              >
                {formattedBalance}
              </motion.div>
            ) : (
              <motion.div
                key="hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-3xl font-bold blur-sm select-none text-brand dark:text-primary"
              >
                $ ••••••
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setShowBalance((prev) => !prev)}
            className="text-primary/80 hover:text- transition cursor-pointer"
          >
            {showBalance ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>
      </div>

      <Separator />

      <div className="grid gap-y-2">
        <div>
          <div className="text-sm capitalize opacity-70">Reward</div>
          <div className="flex items-center justify-between">
            <p className="text-2xl text-brand dark:text-primary font-bold">100</p>
            <button className="cursor-pointer">
              <ArrowIcon />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Button className="rounded-full capitalize bg-brand hover:bg-brand-secondary cursor-pointer w-full dark:bg-white dark:hover:bg-zinc-200">
            <ArrowIcon className="rotate-[130deg]" />
            Add balance
          </Button>
          <Button className="rounded-full capitalize bg-brand hover:bg-brand-secondary cursor-pointer w-full dark:bg-white dark:hover:bg-zinc-200">
            <ArrowIcon className="-rotate-[40deg]" />
            Pay
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
