import WalletHeader from "@/components/wallet/WalletHeader";
import WalletWrapper from "@/components/wallet/WalletWrapper";
import React from "react";

export default function Homepage() {
  return (
    <div className="grid">
      <WalletHeader />
      <WalletWrapper />
    </div>
  );
}
