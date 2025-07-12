"use client";

import { Transaction, User } from "@/types";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { transactions as initialTransactions } from "@/data/transactions";
import MyWallet from "./MyWallet";
import RecentTransactions from "./RecentTransactions";

interface WalletWrapperProps {
  user: User;
}

export default function WalletWrapper({ user }: WalletWrapperProps) {
  const [transactions] = useState<Transaction[]>(initialTransactions);
  return (
    <div className="p-4 grid gap-y-3">
      <HomeCard username={user.username} transactions={transactions} />
      <MyWallet />
      <RecentTransactions transactions={transactions} />
    </div>
  );
}
