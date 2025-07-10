import { motion } from "motion/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DollarSign } from "lucide-react";
import { useId, useState, type Dispatch, type SetStateAction } from "react";
import type { Transaction } from "@/types";
import { toast } from "sonner";

interface AddBalanceProps {
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
}

export default function AddBalance({ setTransactions }: AddBalanceProps) {
  const id = useId();
  const [balance, setBalance] = useState<number>(0);

  const onAddBalance = () => {
    const now = new Date();
    const newTransaction: Transaction = {
      id: now.getTime(),
      type: "Load",
      title: "Balance Load",
      date: now,
      amount: balance,
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    toast.success(`You've added $ ${balance} to your wallet`, {
      position: "top-center",
    });
    setBalance(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="dark:bg-[#29363f] bg-background p-4 rounded grid gap-y-2"
    >
      <h3 className="font-medium text-lg mb-2">Add Balance</h3>

      <div className="flex items-center gap-x-3">
        <div className="*:not-first:mt-2 w-full">
          <div className="relative">
            <Input
              id={id}
              className="peer ps-9"
              type="number"
              min="0"
              value={balance}
              onChange={(e) => setBalance(Math.max(0, Number(e.target.value)))}
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <DollarSign size={16} aria-hidden="true" />
            </div>
          </div>
        </div>

        <Button onClick={onAddBalance} disabled={balance <= 0}>
          Add
        </Button>
      </div>
    </motion.div>
  );
}
