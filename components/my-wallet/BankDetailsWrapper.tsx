"use client";

import { accounts } from "@/data/accounts";
import { HugeiconsDelete02 } from "../svgs/HugeiconsDelete02";
import { Button } from "../ui/button";
import BankDetailsTabs from "./BankDetailsTabs";
import { motion } from "motion/react";
import { toast } from "sonner";
interface BankDetailsWrapperProps {
  walletId: string;
}

export default function BankDetailsWrapper({
  walletId,
}: BankDetailsWrapperProps) {
  const account = accounts.find((acc) => acc.id === walletId);

  const onRemoveAccount = () => {
    toast.success(`You've successfully removed account: ${account?.name}`, {
      position: 'bottom-center'
    });
  };
  return (
    <div className="flex flex-col h-full">
      <BankDetailsTabs walletId={walletId} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-auto"
      >
        <Button
          onClick={() => onRemoveAccount()}
          variant="ghost"
          className="w-full cursor-pointer text-rose-600 hover:text-rose-400"
        >
          Remove ? <HugeiconsDelete02 />
        </Button>
      </motion.div>
    </div>
  );
}
