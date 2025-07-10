"use client";

import { Transaction, User } from "@/types";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { transactions as initialTransactions } from "@/data/transactions";
import AddBalance from "./AddBalance";
import MyWallet from "./MyWallet";
import RecentTransactions from "./RecentTransactions";

interface WalletWrapperProps {
  user: User;
}

export default function WalletWrapper({ user }: WalletWrapperProps) {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);
  return (
    <div>
      <div className="relative p-4">
        <div className="absolute right-0 left-0 -top-[9rem] p-4">
          <HomeCard username={user.username} transactions={transactions} />
        </div>
      </div>
      <div className="p-4 mt-8 mb-5 grid gap-y-3">
        <AddBalance setTransactions={setTransactions} />
        <MyWallet />
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  );
}
