import { motion } from "motion/react";
import WalletCard from "./WalletCard";
import { Button } from "../ui/button";
import { accounts } from "@/data/accounts";
import { toast } from "sonner";
import { HugeiconsDelete02 } from "../svgs/HugeiconsDelete02";
interface DetailsTabContentProps {
  walletId: string;
}

export default function DetailsTabContent({
  walletId,
}: DetailsTabContentProps) {
  const account = accounts.find((acc) => acc.id === walletId);

  const onRemoveAccount = () => {
    toast.success(`You've successfully removed account: ${account?.name}`, {
      position: "top-center",
    });
  };
  return (
    <div className="p-2 grid gap-y-5">
      <WalletCard walletId={walletId} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="px-4 flex items-center justify-center"
      >
        <Button
          onClick={() => onRemoveAccount()}
          className="w-fit bg-transparent rounded-full ring-rose-600 border hover:bg-rose-600 hover:text-white border-rose-600 cursor-pointer text-rose-600 transition-colors duration-500 ease-in-out"
        >
          <HugeiconsDelete02 />
          Remove Card
        </Button>
      </motion.div>
    </div>
  );
}
