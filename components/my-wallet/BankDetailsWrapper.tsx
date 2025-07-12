"use client";

import BankDetailsTabs from "./BankDetailsTabs";
interface BankDetailsWrapperProps {
  walletId: string;
}

export default function BankDetailsWrapper({
  walletId,
}: BankDetailsWrapperProps) {
  return <BankDetailsTabs walletId={walletId} />;
}
