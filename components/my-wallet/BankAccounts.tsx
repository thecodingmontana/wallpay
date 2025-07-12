"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useState } from "react";
import { accounts as initialAccounts } from "@/data/accounts";
import { ArrowIcon } from "../svgs/ArrowIcon";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BankAccounts() {
  const [accounts] = useState(initialAccounts);

  function getLastFourDigits(accountNumber: string): string {
    return accountNumber.slice(-4);
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 dark:bg-brand bg-background rounded-lg border grid gap-y-3"
    >
      <h3 className="text-muted-foreground dark:text-primary">Bank Accounts</h3>
      <motion.div className="grid gap-y-2">
        {accounts.map((account, index) => (
          <motion.div
            key={account.id}
            variants={itemVariants}
            className="flex flex-col"
          >
            <Link
              href={`/user/my-wallet/${account.id}`}
              className="flex items-center justify-between hover:bg-muted dark:hover:bg-brand-secondary cursor-pointer p-2 rounded"
            >
              <div className="flex items-center gap-x-2">
                <Avatar className="size-8 rounded-md">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${account.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  />
                  <AvatarFallback className="rounded-md">CN</AvatarFallback>
                </Avatar>
                <p className="text-xl">
                  {account.name} - {getLastFourDigits(account.number)}
                </p>
              </div>
              <ArrowIcon className="text-muted-foreground dark:text-primary" />
            </Link>
            {index < accounts.length - 1 && <Separator className="mt-2" />}
          </motion.div>
        ))}
      </motion.div>
      <Button className="capitalize bg-brand hover:bg-brand-secondary rounded-full cursor-pointer dark:bg-white dark:hover:bg-zinc-200">
        <PlusIcon className="w-6 h-auto" />
        Add new
      </Button>
    </motion.div>
  );
}
