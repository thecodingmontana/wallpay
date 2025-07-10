import type { Transaction } from "@/types";
import { ChevronRightIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface HomeCardProps {
  username: string;
  transactions: Transaction[];
}

export default function HomeCard({ username, transactions }: HomeCardProps) {
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
      className="relative w-full h-48 rounded-xl text-white p-4 overflow-hidden shadow-lg bg-gradient-to-r from-green-500 to-emerald-600"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute top-4 left-4 text-xs uppercase">Hello 👋</div>

      <div className="flex flex-col justify-between h-full">
        <p className="mt-5 text-left tracking-widest text-lg">{username}</p>

        <div className="grid gap-y-2">
          <div>
            <div className="text-xs uppercase opacity-70">Balance</div>
            <div className="flex items-center justify-between">
              <AnimatePresence mode="wait">
                {showBalance ? (
                  <motion.div
                    key="visible"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-2xl font-bold"
                  >
                    {formattedBalance}
                  </motion.div>
                ) : (
                  <motion.div
                    key="hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-2xl font-bold blur-sm select-none"
                  >
                    $ ••••••
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setShowBalance((prev) => !prev)}
                className="text-white/80 hover:text-white transition cursor-pointer"
              >
                {showBalance ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase opacity-70">Reward points</div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">100</p>
              <button className="cursor-pointer">
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
