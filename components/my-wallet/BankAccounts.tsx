"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { format } from "date-fns";
import Link from "next/link";

const accounts = [
  {
    id: "1",
    name: "Wells Fargo",
    number: "12345678902445",
    createdAt: new Date(2024, 5, 10),
  },
  {
    id: "2",
    name: "Chase Bank",
    number: "98765432102389",
    createdAt: new Date(2023, 11, 20),
  },
];

function getLastFourDigits(accountNumber: string): string {
  return accountNumber.slice(-4);
}

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
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 dark:bg-[#29363f] bg-background rounded grid gap-y-2"
    >
      <h3>Bank Accounts</h3>
      <motion.div className="grid gap-y-1">
        {accounts.map((account, index) => (
          <motion.div
            key={account.id}
            variants={itemVariants}
            className="flex flex-col"
          >
            <Link
              href={`/user/my-wallet/${account.id}`}
              className="flex items-center justify-between hover:bg-[#3e4a52] cursor-pointer p-2 rounded"
            >
              <div className="flex items-center gap-x-2">
                <Avatar className="size-10 rounded-md">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${account.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  />
                  <AvatarFallback className="rounded-md">CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-md">
                    {account.name} - {getLastFourDigits(account.number)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Added on {format(account.createdAt, "MMM dd, yyyy")}
                  </p>
                </div>
              </div>
              <ChevronRight />
            </Link>
            {index < accounts.length - 1 && <Separator />}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
