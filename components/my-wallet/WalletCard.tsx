import { accounts } from "@/data/accounts";
import { motion } from "motion/react";
import { format } from "date-fns";
import { VisaIcon } from "../svgs/VisaIcon";

interface WalletCardProps {
  walletId: string;
}

function getAccountById(walletId: string) {
  return accounts.find((acc) => acc.id === walletId);
}

function formatExpiry(date?: Date) {
  if (!date) return "N/A";
  return format(date, "MM/yy");
}

function maskAccountNumber(number?: string) {
  if (!number) return "**** ****";
  const last4 = number.slice(-4);
  return `**** **** **** ${last4}`;
}

export default function WalletCard({ walletId }: WalletCardProps) {
  const account = getAccountById(walletId);

  return (
    <motion.div
      className="relative w-full h-48 rounded-xl text-white p-4 overflow-hidden shadow-lg bg-[#b31e31]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

      <div className="flex flex-col justify-between h-full">
        <div className="grid gap-y-2">
          <div className="text-base uppercase opacity-70">
            {account?.name ?? "Unknown"}
          </div>
          <div className="text-3xl font-bold">
            {maskAccountNumber(account?.number)}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="uppercase">Exp</p>
            <p className="font-mono">{formatExpiry(account?.createdAt)}</p>
          </div>
          <VisaIcon className="self-end" />
        </div>
      </div>
    </motion.div>
  );
}
