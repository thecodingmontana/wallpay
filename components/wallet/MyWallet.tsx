import { motion } from "motion/react";
import Link from "next/link";
import { WalletIcon } from "../svgs/WalletIcon";
import { ArrowIcon } from "../svgs/ArrowIcon";

export default function MyWallet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="dark:bg-brand bg-background p-4 rounded flex items-center justify-between"
    >
      <div className="flex items-center gap-x-2">
        <WalletIcon className="-mt-1" />
        <h3>My Wallet</h3>
      </div>
      <Link href="/user/my-wallet" className="hover:text-muted-foreground">
        <ArrowIcon />
      </Link>
    </motion.div>
  );
}
