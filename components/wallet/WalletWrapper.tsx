"use client";

import { Transaction } from "@/types";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { transactions as initialTransactions } from "@/data/transactions";
import MyWallet from "./MyWallet";
import RecentTransactions from "./RecentTransactions";

export default function WalletWrapper() {
  const [transactions] = useState<Transaction[]>(initialTransactions);
  return (
    <div className="p-4 grid gap-y-3">
      <HomeCard transactions={transactions} />
      <MyWallet />
      <RecentTransactions transactions={transactions} />
    </div>
  );
}
