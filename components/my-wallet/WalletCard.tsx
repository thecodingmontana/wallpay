import { motion } from "motion/react";

export default function WalletCard() {
  return (
    <motion.div
      className="relative w-full h-48 rounded-xl text-white p-4 overflow-hidden shadow-lg bg-gradient-to-r from-green-500 to-emerald-600"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute top-4 right-4 text-sm">17/24</div>

      <div className="flex flex-col justify-between h-full">
        <div className="mt-10 text-right tracking-widest text-lg">
          •••• 2431
        </div>

        <div>
          <div className="text-xs uppercase opacity-70">Balance</div>
          <div className="text-2xl font-bold">$ 1,023.00</div>
        </div>

        <div className="text-right text-lg font-bold">VISA</div>
      </div>
    </motion.div>
  );
}