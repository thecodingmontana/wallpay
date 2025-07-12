import BankDetailsWrapper from "@/components/my-wallet/BankDetailsWrapper";
import React from "react";

interface WalletIdPageProps {
  params: Promise<{
    walletId: string;
  }>;
}

export default async function WalletIdPage({ params }: WalletIdPageProps) {
  const { walletId } = await params;

  return (
    <div className="flex flex-col h-screen">
      <BankDetailsWrapper walletId={walletId} />
    </div>
  );
}
