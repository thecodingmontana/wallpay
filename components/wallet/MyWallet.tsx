import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function MyWallet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="dark:bg-brand bg-background p-4 rounded flex items-center justify-between"
    >
      <h3>My Wallet</h3>
      <Link href="/user/my-wallet" className="hover:text-muted-foreground">
        <ChevronRight />
      </Link>
    </motion.div>
  );
}
