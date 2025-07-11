import WalletCard from "./WalletCard";

interface DetailsTabContentProps {
  walletId: string;
}

export default function DetailsTabContent({
  walletId,
}: DetailsTabContentProps) {
  return (
    <div className="p-2">
      <WalletCard walletId={walletId} />
    </div>
  );
}
