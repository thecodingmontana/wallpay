import BankDetailsWrapper from "@/components/my-wallet/BankDetailsWrapper";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

interface WalletIdPageProps {
  params: Promise<{
    walletId: string;
  }>;
}

export default async function WalletIdPage({ params }: WalletIdPageProps) {
  const { walletId } = await params;

  const { isAuthenticated, isUserAuthenticated } = await validateRequest();

  if (!isUserAuthenticated || !isAuthenticated) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex flex-col h-screen">
      <BankDetailsWrapper walletId={walletId} />
    </div>
  );
}
